import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Reveal from "../components/Reveal"
import { HiOutlineTrophy } from "react-icons/hi2"

const prestasi = [
  { tahun: "2026", judul: "Juara 1 Lomba Cerdas Cermat Tingkat Kecamatan", tingkat: "Kecamatan" },
  { tahun: "2025", judul: "Juara 2 Lomba Melukis Tingkat Kota", tingkat: "Kota" },
  { tahun: "2025", judul: "Juara 1 Pramuka Penggalang Tingkat Kecamatan", tingkat: "Kecamatan" },
  { tahun: "2024", judul: "Juara 3 Olimpiade Matematika Tingkat Kota", tingkat: "Kota" },
  { tahun: "2024", judul: "Juara 1 Lomba Futsal Antar SD Se-Kecamatan", tingkat: "Kecamatan" },
  { tahun: "2023", judul: "Sekolah Adiwiyata Tingkat Kota", tingkat: "Kota" },
]

const PrestasiPage = () => (
  <Layout>
    <SEO
      title="Prestasi"
      pathname="/prestasi"
      description="Daftar prestasi siswa dan sekolah SD Negeri Sukasari 5 dari tahun ke tahun."
    />
    <section className="pt-16 pb-24 dot-bg">
      <div className="max-w-4xl mx-auto px-5 md:px-8 text-center mb-14">
        <Reveal>
          <span className="eyebrow mb-3">Kebanggaan Kami</span>
          <h1 className="section-title">Prestasi Sekolah</h1>
        </Reveal>
      </div>

      <div className="max-w-3xl mx-auto px-5 md:px-8 space-y-4">
        {prestasi.map((p, i) => (
          <Reveal key={p.judul} delay={i * 0.06}>
            <div className="report-card flex items-center gap-4">
              <div className="w-12 h-12 shrink-0 rounded-2xl bg-sun-light text-sun grid place-items-center">
                <HiOutlineTrophy size={22} />
              </div>
              <div className="flex-1">
                <p className="font-display text-ink">{p.judul}</p>
                <p className="text-xs text-ink/50 mt-0.5">Tingkat {p.tingkat}</p>
              </div>
              <span className="font-display text-merah text-sm shrink-0">{p.tahun}</span>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  </Layout>
)

export default PrestasiPage
