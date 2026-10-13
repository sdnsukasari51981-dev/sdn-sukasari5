import React, { useState } from "react"

const encode = (data) =>
  Object.keys(data)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join("&")

/**
 * Form kontak aman:
 * - Honeypot field ("bot-field") tersembunyi secara visual (bukan display:none)
 *   untuk menjebak bot pengisi form otomatis.
 * - Validasi input di sisi klien sebelum submit.
 * - Terintegrasi dengan Netlify Forms (tanpa perlu server/API key sendiri) —
 *   ganti dengan endpoint lain (mis. Formspree) bila hosting bukan Netlify;
 *   lihat README.
 * - Tidak ada rahasia/API key yang pernah ditulis di kode sisi klien.
 */
const ContactForm = () => {
  const [form, setForm] = useState({ nama: "", email: "", pesan: "" })
  const [status, setStatus] = useState("idle") // idle | sending | success | error
  const [errors, setErrors] = useState({})

  const validate = () => {
    const next = {}
    if (form.nama.trim().length < 3) next.nama = "Nama minimal 3 karakter."
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = "Format email tidak valid."
    if (form.pesan.trim().length < 10) next.pesan = "Pesan minimal 10 karakter."
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validate()) return
    setStatus("sending")
    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "kontak-sekolah", ...form }),
      })
      setStatus("success")
      setForm({ nama: "", email: "", pesan: "" })
    } catch (err) {
      setStatus("error")
    }
  }

  return (
    <form
      name="kontak-sekolah"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      className="report-card space-y-5"
      noValidate
    >
      {/* Diperlukan agar Netlify mendeteksi form ini saat build statis */}
      <input type="hidden" name="form-name" value="kontak-sekolah" />
      <p className="hidden">
        <label>
          Jangan isi kolom ini: <input name="bot-field" onChange={handleChange} />
        </label>
      </p>

      <div>
        <label htmlFor="nama" className="block text-sm font-semibold text-ink mb-1.5">
          Nama Lengkap
        </label>
        <input
          id="nama"
          name="nama"
          type="text"
          value={form.nama}
          onChange={handleChange}
          maxLength={100}
          autoComplete="name"
          className="w-full rounded-xl border border-ink/15 px-4 py-3 bg-chalk focus:bg-white"
          aria-invalid={!!errors.nama}
          aria-describedby={errors.nama ? "err-nama" : undefined}
        />
        {errors.nama && <p id="err-nama" className="text-merah text-xs mt-1">{errors.nama}</p>}
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-semibold text-ink mb-1.5">
          Alamat Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          maxLength={150}
          autoComplete="email"
          className="w-full rounded-xl border border-ink/15 px-4 py-3 bg-chalk focus:bg-white"
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "err-email" : undefined}
        />
        {errors.email && <p id="err-email" className="text-merah text-xs mt-1">{errors.email}</p>}
      </div>

      <div>
        <label htmlFor="pesan" className="block text-sm font-semibold text-ink mb-1.5">
          Pesan
        </label>
        <textarea
          id="pesan"
          name="pesan"
          rows={5}
          value={form.pesan}
          onChange={handleChange}
          maxLength={1000}
          className="w-full rounded-xl border border-ink/15 px-4 py-3 bg-chalk focus:bg-white resize-none"
          aria-invalid={!!errors.pesan}
          aria-describedby={errors.pesan ? "err-pesan" : undefined}
        />
        {errors.pesan && <p id="err-pesan" className="text-merah text-xs mt-1">{errors.pesan}</p>}
      </div>

      <button type="submit" disabled={status === "sending"} className="btn-primary w-full disabled:opacity-60">
        {status === "sending" ? "Mengirim..." : "Kirim Pesan"}
      </button>

      {status === "success" && (
        <p role="status" className="text-daun text-sm font-medium">
          Terima kasih, pesan Anda telah terkirim. Kami akan segera membalas.
        </p>
      )}
      {status === "error" && (
        <p role="alert" className="text-merah text-sm font-medium">
          Maaf, pesan gagal terkirim. Silakan coba lagi atau hubungi kami langsung via telepon.
        </p>
      )}
    </form>
  )
}

export default ContactForm
