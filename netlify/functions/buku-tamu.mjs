/**
 * Netlify Function — Buku Tamu (Dinas & Umum)
 *
 * Endpoint: /.netlify/functions/buku-tamu
 *   GET    ?kategori=dinas|umum&offset=0&limit=20  -> daftar entri (publik)
 *   POST   JSON                                    -> tambah entri (publik)
 *   DELETE ?id=<id>  + header Authorization: Bearer <ADMIN_TOKEN>  -> hapus (moderasi)
 *
 * Data disimpan di Netlify Blobs (tanpa database/layanan tambahan).
 * Satu entri = satu blob, kunci diurutkan terbaru-dulu.
 */
import { getStore } from "@netlify/blobs"
import { createHash, randomUUID, timingSafeEqual } from "node:crypto"

const KATEGORI = ["dinas", "umum"]
const MAKS = { nama: 100, jabatan: 100, telepon: 20, sasaran: 150, masalah: 1000, saran: 1000 }
const MAKS_TTD = 90000 // karakter data-URL tanda tangan (PNG kecil, biasanya 3–10 KB)
const MAKS_LIMIT = 50
const MAKS_POST_PER_JAM = 8 // per alamat IP (di-hash), per kategori
const ID_REGEX = /^(dinas|umum)\/\d{13}-[a-f0-9]{8}$/

const json = (data, status = 200) =>
  new Response(JSON.stringify(data), {
    status,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "no-store",
    },
  })

// Buang karakter kontrol (kecuali baris baru & tab), rapikan, batasi panjang.
const bersihkan = (nilai, maks) =>
  String(nilai ?? "")
    .replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, "")
    .trim()
    .slice(0, maks)

const hariTanggalWIB = (tanggal = new Date()) =>
  new Intl.DateTimeFormat("id-ID", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "Asia/Jakarta",
  }).format(tanggal)

const tandaTanganValid = (ttd) => {
  if (typeof ttd !== "string" || ttd.length > MAKS_TTD) return false
  if (!/^data:image\/png;base64,[A-Za-z0-9+/]+={0,2}$/.test(ttd)) return false
  const header = Buffer.from(ttd.slice("data:image/png;base64,".length, 60), "base64")
  // Tanda tangan PNG asli selalu diawali signature 89 50 4E 47 0D 0A 1A 0A
  return header.subarray(0, 8).equals(Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]))
}

// Nomor telepon/WA: sisakan angka dan tanda + di awal, wajib 9–15 digit.
const rapikanTelepon = (nilai) => {
  const mentah = String(nilai ?? "").trim()
  const awal = mentah.startsWith("+") ? "+" : ""
  return (awal + mentah.replace(/\D/g, "")).slice(0, MAKS.telepon)
}
const teleponValid = (t) => /^\+?\d{9,15}$/.test(t)

// Nomor lengkap hanya disimpan di server; tampilan publik disamarkan (0812****345).
const samarkanTelepon = (t) =>
  t && t.length >= 8 ? t.slice(0, 4) + "*".repeat(t.length - 7) + t.slice(-3) : t ? "***" : ""

const sha256 = (teks) => createHash("sha256").update(teks).digest()

const adminSah = (req) => {
  const token = process.env.ADMIN_TOKEN
  if (!token) return false
  const dikirim = (req.headers.get("authorization") || "").replace(/^Bearer\s+/i, "")
  return timingSafeEqual(sha256(dikirim), sha256(token))
}

export default async (req, context) => {
  const store = getStore({ name: "buku-tamu", consistency: "strong" })
  const url = new URL(req.url)

  // ---------- GET: daftar entri ----------
  if (req.method === "GET") {
    const kategori = url.searchParams.get("kategori")
    if (!KATEGORI.includes(kategori)) return json({ error: "Kategori tidak valid." }, 400)

    const offset = Math.max(0, parseInt(url.searchParams.get("offset") || "0", 10) || 0)
    const limit = Math.min(
      MAKS_LIMIT,
      Math.max(1, parseInt(url.searchParams.get("limit") || "20", 10) || 20)
    )

    const { blobs } = await store.list({ prefix: `${kategori}/` })
    blobs.sort((a, b) => (a.key < b.key ? -1 : 1)) // kunci terbalik waktu => terbaru dulu
    const total = blobs.length

    const admin = adminSah(req) // admin (Bearer ADMIN_TOKEN) melihat nomor lengkap
    const items = (
      await Promise.all(
        blobs.slice(offset, offset + limit).map(async (b) => {
          const data = await store.get(b.key, { type: "json" })
          if (!data) return null
          return {
            id: b.key,
            ...data,
            telepon: admin ? data.telepon || "" : samarkanTelepon(data.telepon),
          }
        })
      )
    ).filter(Boolean)

    return json({ items, total, hasMore: offset + limit < total })
  }

  // ---------- POST: tambah entri ----------
  if (req.method === "POST") {
    let body
    try {
      body = await req.json()
    } catch {
      return json({ error: "Format data tidak valid." }, 400)
    }

    // Honeypot: bot mengisi kolom tersembunyi -> pura-pura sukses, jangan simpan.
    if (body?.website) return json({ ok: true }, 201)

    const kategori = body?.kategori
    if (!KATEGORI.includes(kategori)) return json({ error: "Kategori tidak valid." }, 400)

    const entri = {
      nama: bersihkan(body.nama, MAKS.nama),
      jabatan: bersihkan(body.jabatan, MAKS.jabatan),
      telepon: rapikanTelepon(body.telepon),
      sasaran: bersihkan(body.sasaran, MAKS.sasaran),
      masalah: bersihkan(body.masalah, MAKS.masalah),
      saran: bersihkan(body.saran, MAKS.saran),
    }

    if (entri.nama.length < 3) return json({ error: "Nama minimal 3 karakter." }, 400)
    if (entri.jabatan.length < 2) return json({ error: "Jabatan wajib diisi." }, 400)
    if (!teleponValid(entri.telepon)) {
      return json({ error: "Nomor telepon/WA tidak valid (9–15 digit)." }, 400)
    }
    if (entri.sasaran.length < 2) return json({ error: "Sasaran wajib diisi." }, 400)
    if (!tandaTanganValid(body.tandaTangan)) {
      return json({ error: "Tanda tangan wajib diisi." }, 400)
    }

    // Pembatasan laju sederhana per IP (IP disimpan hanya dalam bentuk hash).
    const ip = context?.ip || req.headers.get("x-nf-client-connection-ip") || "unknown"
    const jam = Math.floor(Date.now() / 3600000)
    const kunciLaju = `rl/${kategori}-${createHash("sha256").update(ip).digest("hex").slice(0, 24)}-${jam}`
    const laju = (await store.get(kunciLaju, { type: "json" })) || { n: 0 }
    if (laju.n >= MAKS_POST_PER_JAM) {
      return json({ error: "Terlalu banyak pengiriman. Silakan coba lagi nanti." }, 429)
    }
    await store.setJSON(kunciLaju, { n: laju.n + 1 })

    const sekarang = new Date()
    const id = `${kategori}/${String(9999999999999 - sekarang.getTime()).padStart(13, "0")}-${randomUUID().slice(0, 8)}`
    const tersimpan = {
      hariTanggal: hariTanggalWIB(sekarang), // ditentukan server agar tidak bisa dipalsukan
      ...entri,
      tandaTangan: body.tandaTangan,
      dibuat: sekarang.toISOString(),
    }
    await store.setJSON(id, tersimpan)

    return json(
      { ok: true, item: { id, ...tersimpan, telepon: samarkanTelepon(tersimpan.telepon) } },
      201
    )
  }

  // ---------- DELETE: moderasi oleh admin ----------
  if (req.method === "DELETE") {
    if (!adminSah(req)) return json({ error: "Tidak diizinkan." }, 401)
    const id = url.searchParams.get("id") || ""
    if (!ID_REGEX.test(id)) return json({ error: "ID tidak valid." }, 400)
    await store.delete(id)
    return json({ ok: true })
  }

  return json({ error: "Metode tidak didukung." }, 405)
}
