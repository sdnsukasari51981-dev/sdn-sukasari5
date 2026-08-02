import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Reveal from "../components/Reveal"
import { HiOutlineDocumentText, HiOutlineCalendar, HiOutlinePhone } from "react-icons/hi"

const syarat = [
  "Usia minimal 6 tahun pada tanggal 1 Juli tahun berjalan (dibuktikan akta kelahiran).",
  "Fotokopi Kartu Keluarga (KK) yang masih berlaku.",
  "Fotokopi Akta Kelahiran.",
  "Pas foto berwarna terbaru ukuran 3x4 sebanyak 2 lembar.",
  "Fotokopi Kartu Indonesia Pintar (KIP) bagi yang memiliki (opsional).",
  "Mengisi formulir pendaftaran yang disediakan di sekolah.",
]

const jadwal = [
  { tahap: "Pendaftaran Gelombang 1", tanggal: "1 – 15 Juni" },
  { tahap: "Verifikasi Berkas", tanggal: "16 – 18 Juni" },
  { tahap: "Pengumuman Hasil", tanggal: "20 Juni" },
  { tahap: "Daftar Ulang", tanggal: "21 – 25 Juni" },
]

const PPDBPage = () => (
  <Layout>
    <SEO
      title="PPDB — Penerimaan Peserta Didik Baru"
      pathname="/ppdb"
      description="Informasi lengkap syarat, jadwal, dan alur pendaftaran Penerimaan Peserta Didik Baru SD Negeri Sukasari 5."
    />

    <section className="pt-16 pb-20 dot-bg">
      <div className="max-w-4xl mx-auto px-5 md:px-8 text-center mb-16">
        <Reveal>
          <span className="eyebrow mb-3">Tahun Ajaran Baru</span>
          <h1 className="section-title mb-4">Penerimaan Peserta Didik Baru</h1>
          <p className="text-ink/60 max-w-xl mx-auto">
            Wujudkan pendidikan dasar terbaik untuk buah hati Anda. Ikuti langkah
            mudah pendaftaran di bawah ini.
          </p>
        </Reveal>
      </div>

      <div className="max-w-6xl mx-auto px-5 md:px-8 grid md:grid-cols-2 gap-10 mb-20">
        <Reveal>
          <div className="report-card h-full">
            <div className="w-12 h-12 rounded-2xl bg-merah-light text-merah grid place-items-center mb-4">
              <HiOutlineDocumentText size={22} />
            </div>
            <h2 className="font-display text-xl text-ink mb-4">Persyaratan Pendaftaran</h2>
            <ul className="space-y-3">
              {syarat.map((s) => (
                <li key={s} className="flex gap-3 text-sm text-ink/70">
                  <span className="text-merah mt-0.5">●</span>
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="report-card h-full">
            <div className="w-12 h-12 rounded-2xl bg-sky-light text-sky grid place-items-center mb-4">
              <HiOutlineCalendar size={22} />
            </div>
            <h2 className="font-display text-xl text-ink mb-4">Jadwal Pendaftaran</h2>
            <ul className="space-y-4">
              {jadwal.map((j, i) => (
                <li key={j.tahap} className="flex items-start gap-3">
                  <span className="w-7 h-7 shrink-0 rounded-full bg-ink text-chalk grid place-items-center text-xs font-bold">
                    {i + 1}
                  </span>
                  <div>
                    <p className="font-semibold text-ink text-sm">{j.tahap}</p>
                    <p className="text-xs text-ink/50">{j.tanggal}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>

      <Reveal className="max-w-3xl mx-auto px-5 md:px-8">
        <div className="report-card bg-ink text-chalk text-center">
          <HiOutlinePhone className="mx-auto mb-3 text-sun" size={28} />
          <h2 className="font-display text-xl mb-2">Butuh Bantuan Pendaftaran?</h2>
          <p className="text-chalk/70 text-sm mb-5">
            Hubungi bagian Tata Usaha kami untuk informasi lebih lanjut atau
            kunjungi langsung sekolah pada jam kerja.
          </p>
          <Link to="/kontak" className="btn-primary">Hubungi Kami</Link>
        </div>
      </Reveal>
    </section>
  </Layout>
)

export default PPDBPage
