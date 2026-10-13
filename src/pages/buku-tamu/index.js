import React from "react"
import { Link } from "gatsby"
import Layout from "../../components/Layout"
import SEO from "../../components/SEO"
import Reveal from "../../components/Reveal"
import { HiOutlineOfficeBuilding, HiOutlineUserGroup, HiArrowRight } from "react-icons/hi"

const pilihan = [
  {
    to: "/buku-tamu/dinas",
    judul: "Buku Tamu Dinas",
    teks: "Untuk tamu dari dinas, instansi pemerintah, pengawas, dan mitra kerja resmi sekolah.",
    Ikon: HiOutlineOfficeBuilding,
    warna: "text-sky",
  },
  {
    to: "/buku-tamu/umum",
    judul: "Buku Tamu Umum",
    teks: "Untuk orang tua, alumni, masyarakat, dan seluruh tamu umum yang berkunjung.",
    Ikon: HiOutlineUserGroup,
    warna: "text-daun",
  },
]

const BukuTamuPage = () => (
  <Layout>
    <SEO
      title="Buku Tamu"
      pathname="/buku-tamu"
      description="Buku tamu online SD Negeri Sukasari 5 untuk tamu dinas dan tamu umum."
    />
    <section className="pt-16 pb-24 dot-bg">
      <div className="max-w-4xl mx-auto px-5 md:px-8 text-center mb-14">
        <Reveal>
          <span className="eyebrow mb-3">Selamat Datang</span>
          <h1 className="section-title">Buku Tamu</h1>
          <p className="mt-4 text-ink/60">
            Silakan pilih buku tamu sesuai keperluan kunjungan Anda.
          </p>
        </Reveal>
      </div>

      <div className="max-w-4xl mx-auto px-5 md:px-8 grid md:grid-cols-2 gap-8">
        {pilihan.map(({ to, judul, teks, Ikon, warna }, i) => (
          <Reveal key={to} delay={i * 0.1}>
            <Link to={to} className="report-card block h-full group hover:-translate-y-1 transition-transform">
              <Ikon className={`${warna} mb-4`} size={36} aria-hidden="true" />
              <h2 className="font-display text-xl text-ink mb-2">{judul}</h2>
              <p className="text-sm text-ink/60 mb-5">{teks}</p>
              <span className="inline-flex items-center gap-2 font-display text-merah text-sm">
                Isi &amp; lihat daftar tamu <HiArrowRight className="group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </span>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  </Layout>
)

export default BukuTamuPage
