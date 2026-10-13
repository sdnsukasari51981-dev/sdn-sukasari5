import React, { useState, useEffect, useCallback } from "react"
import SignaturePad from "./SignaturePad"
import { HiOutlinePencilAlt, HiOutlineRefresh } from "react-icons/hi"

const ENDPOINT = "/.netlify/functions/buku-tamu"
const HALAMAN = 20

const kosong = { nama: "", jabatan: "", sasaran: "", masalah: "", saran: "", website: "" }

const hariIniWIB = () =>
  new Intl.DateTimeFormat("id-ID", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "Asia/Jakarta",
  }).format(new Date())

const inputCls = "w-full rounded-xl border border-ink/15 px-4 py-3 bg-chalk focus:bg-white"
const labelCls = "block text-sm font-semibold text-ink mb-1.5"

/**
 * Buku tamu online: form isian + tabel publik yang diambil dari server.
 * `kategori` = "dinas" | "umum".
 */
const BukuTamu = ({ kategori, judul }) => {
  const [form, setForm] = useState(kosong)
  const [tandaTangan, setTandaTangan] = useState(null)
  const [resetTtd, setResetTtd] = useState(0)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState("idle") // idle | sending | success | error
  const [pesanError, setPesanError] = useState("")
  const [tanggal, setTanggal] = useState("")

  const [entri, setEntri] = useState([])
  const [total, setTotal] = useState(0)
  const [hasMore, setHasMore] = useState(false)
  const [memuat, setMemuat] = useState(true)
  const [gagalMuat, setGagalMuat] = useState(false)

  useEffect(() => setTanggal(hariIniWIB()), [])

  const muat = useCallback(
    async (offset = 0) => {
      setMemuat(true)
      setGagalMuat(false)
      try {
        const res = await fetch(
          `${ENDPOINT}?kategori=${kategori}&offset=${offset}&limit=${HALAMAN}`,
          { cache: "no-store" }
        )
        if (!res.ok) throw new Error("gagal")
        const data = await res.json()
        setEntri((cur) => (offset === 0 ? data.items : [...cur, ...data.items]))
        setTotal(data.total)
        setHasMore(data.hasMore)
      } catch {
        setGagalMuat(true)
      } finally {
        setMemuat(false)
      }
    },
    [kategori]
  )

  useEffect(() => {
    muat(0)
  }, [muat])

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const validate = () => {
    const next = {}
    if (form.nama.trim().length < 3) next.nama = "Nama minimal 3 karakter."
    if (form.jabatan.trim().length < 2) next.jabatan = "Jabatan wajib diisi."
    if (form.sasaran.trim().length < 2) next.sasaran = "Sasaran wajib diisi."
    if (!tandaTangan) next.tandaTangan = "Tanda tangan wajib diisi."
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validate()) return
    setStatus("sending")
    setPesanError("")
    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ kategori, ...form, tandaTangan }),
      })
      const data = await res.json().catch(() => ({}))
      if (!res.ok) {
        setPesanError(data.error || "Maaf, data gagal dikirim. Silakan coba lagi.")
        setStatus("error")
        return
      }
      setStatus("success")
      setForm(kosong)
      setTandaTangan(null)
      setResetTtd((n) => n + 1)
      setErrors({})
      muat(0)
    } catch {
      setPesanError("Maaf, data gagal dikirim. Periksa koneksi internet lalu coba lagi.")
      setStatus("error")
    }
  }

  const field = (name, label, { rows, maxLength, required, placeholder } = {}) => {
    const Tag = rows ? "textarea" : "input"
    return (
      <div>
        <label htmlFor={`${kategori}-${name}`} className={labelCls}>
          {label} {!required && <span className="font-normal text-ink/40">(opsional)</span>}
        </label>
        <Tag
          id={`${kategori}-${name}`}
          name={name}
          value={form[name]}
          onChange={handleChange}
          maxLength={maxLength}
          rows={rows}
          placeholder={placeholder}
          className={`${inputCls} ${rows ? "resize-none" : ""}`}
          aria-invalid={!!errors[name]}
          aria-describedby={errors[name] ? `err-${kategori}-${name}` : undefined}
          {...(!rows && { type: "text" })}
        />
        {errors[name] && (
          <p id={`err-${kategori}-${name}`} className="text-merah text-xs mt-1">
            {errors[name]}
          </p>
        )}
      </div>
    )
  }

  return (
    <div className="space-y-14">
      {/* ===== Form isian ===== */}
      <form onSubmit={handleSubmit} className="report-card space-y-5 max-w-3xl mx-auto" noValidate>
        <h2 className="font-display text-xl text-ink flex items-center gap-2">
          <HiOutlinePencilAlt className="text-merah" aria-hidden="true" />
          Isi {judul}
        </h2>

        <div>
          <span className={labelCls}>Hari / Tanggal</span>
          <p className="rounded-xl border border-ink/10 bg-sky-light/60 px-4 py-3 text-sm text-ink/80 min-h-[3rem]">
            {tanggal || "\u00A0"}
          </p>
        </div>

        {/* Honeypot: tersembunyi dari pengguna, menjebak bot */}
        <p className="absolute -left-[9999px]" aria-hidden="true">
          <label>
            Jangan isi kolom ini:
            <input name="website" tabIndex={-1} autoComplete="off" value={form.website} onChange={handleChange} />
          </label>
        </p>

        {field("nama", "Nama", { maxLength: 100, required: true })}
        {field("jabatan", "Jabatan", { maxLength: 100, required: true })}
        {field("sasaran", "Sasaran", {
          maxLength: 150,
          required: true,
          placeholder: "Tujuan / pihak yang dituju",
        })}
        {field("masalah", "Masalah", { rows: 3, maxLength: 1000 })}
        {field("saran", "Saran-saran", { rows: 3, maxLength: 1000 })}

        <div>
          <span className={labelCls} id={`lbl-ttd-${kategori}`}>
            Tanda Tangan
          </span>
          <SignaturePad
            onChange={setTandaTangan}
            resetSignal={resetTtd}
            invalid={!!errors.tandaTangan}
            describedBy={errors.tandaTangan ? `err-${kategori}-ttd` : undefined}
          />
          {errors.tandaTangan && (
            <p id={`err-${kategori}-ttd`} className="text-merah text-xs mt-1">
              {errors.tandaTangan}
            </p>
          )}
        </div>

        <p className="text-xs text-ink/50">
          Perhatian: data yang Anda kirim (termasuk tanda tangan) akan tampil secara publik pada
          tabel di bawah.
        </p>

        <button type="submit" disabled={status === "sending"} className="btn-primary w-full disabled:opacity-60">
          {status === "sending" ? "Mengirim..." : "Kirim ke Buku Tamu"}
        </button>

        {status === "success" && (
          <p role="status" className="text-daun text-sm font-medium">
            Terima kasih, kunjungan Anda telah tercatat di buku tamu.
          </p>
        )}
        {status === "error" && (
          <p role="alert" className="text-merah text-sm font-medium">
            {pesanError}
          </p>
        )}
      </form>

      {/* ===== Tabel publik ===== */}
      <section aria-labelledby={`tabel-${kategori}`}>
        <div className="flex flex-wrap items-end justify-between gap-3 mb-4">
          <div>
            <h2 id={`tabel-${kategori}`} className="font-display text-2xl text-ink">
              Daftar {judul}
            </h2>
            <p className="text-sm text-ink/60">
              {memuat && entri.length === 0 ? "Memuat data…" : `${total} tamu tercatat`}
            </p>
          </div>
          <button
            type="button"
            onClick={() => muat(0)}
            disabled={memuat}
            className="btn-secondary !py-2 !px-4 text-sm disabled:opacity-60"
          >
            <HiOutlineRefresh aria-hidden="true" className={memuat ? "animate-spin" : ""} /> Muat ulang
          </button>
        </div>

        <div className="rounded-card border border-ink/10 bg-paper shadow-card overflow-x-auto">
          <table className="w-full min-w-[960px] text-sm text-left">
            <caption className="sr-only">Daftar {judul} SD Negeri Sukasari 5</caption>
            <thead className="bg-ink text-chalk font-display">
              <tr>
                {["No", "Hari / Tanggal", "Nama", "Jabatan", "Sasaran", "Masalah", "Saran-saran", "Tanda Tangan"].map(
                  (h) => (
                    <th key={h} scope="col" className="px-4 py-3 font-medium whitespace-nowrap">
                      {h}
                    </th>
                  )
                )}
              </tr>
            </thead>
            <tbody className="divide-y divide-ink/10 align-top">
              {entri.length === 0 && !memuat && !gagalMuat && (
                <tr>
                  <td colSpan={8} className="px-4 py-10 text-center text-ink/50">
                    Belum ada tamu yang mengisi. Jadilah yang pertama!
                  </td>
                </tr>
              )}
              {gagalMuat && (
                <tr>
                  <td colSpan={8} className="px-4 py-10 text-center text-merah">
                    Data gagal dimuat. Klik “Muat ulang” untuk mencoba lagi.
                  </td>
                </tr>
              )}
              {entri.map((e, i) => (
                <tr key={e.id} className="odd:bg-paper even:bg-sky-light/40">
                  <td className="px-4 py-3 text-ink/60">{total - i}</td>
                  <td className="px-4 py-3 whitespace-nowrap">{e.hariTanggal}</td>
                  <td className="px-4 py-3 font-semibold text-ink break-words">{e.nama}</td>
                  <td className="px-4 py-3 break-words">{e.jabatan}</td>
                  <td className="px-4 py-3 break-words">{e.sasaran}</td>
                  <td className="px-4 py-3 whitespace-pre-wrap break-words max-w-[16rem]">{e.masalah || "-"}</td>
                  <td className="px-4 py-3 whitespace-pre-wrap break-words max-w-[16rem]">{e.saran || "-"}</td>
                  <td className="px-4 py-3">
                    <img
                      src={e.tandaTangan}
                      alt={`Tanda tangan ${e.nama}`}
                      loading="lazy"
                      className="h-12 w-auto max-w-[8rem] object-contain"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {hasMore && (
          <div className="text-center mt-5">
            <button
              type="button"
              onClick={() => muat(entri.length)}
              disabled={memuat}
              className="btn-secondary disabled:opacity-60"
            >
              {memuat ? "Memuat…" : "Tampilkan lebih banyak"}
            </button>
          </div>
        )}
      </section>
    </div>
  )
}

export default BukuTamu
