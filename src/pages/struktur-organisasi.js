import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Reveal from "../components/Reveal"

const struktur = [
  { jabatan: "Kepala Sekolah", nama: "Ibu Siti Rahayu, S.Pd., M.M.", tingkat: 0 },
  { jabatan: "Wakil Kepala Sekolah", nama: "Bapak Ahmad Fauzi, S.Pd.", tingkat: 1 },
  { jabatan: "Komite Sekolah", nama: "Bapak Deni Kurniawan", tingkat: 1 },
  { jabatan: "Koordinator Kurikulum", nama: "Ibu Ratna Sari, S.Pd.", tingkat: 2 },
  { jabatan: "Koordinator Kesiswaan", nama: "Bapak Yusuf Hidayat, S.Pd.", tingkat: 2 },
  { jabatan: "Tata Usaha", nama: "Ibu Dewi Lestari", tingkat: 2 },
  { jabatan: "Wali Kelas 1–6", nama: "Tim Guru Kelas", tingkat: 3 },
]

const StrukturPage = () => (
  <Layout>
    <SEO
      title="Struktur Organisasi"
      pathname="/struktur-organisasi"
      description="Struktur organisasi dan susunan pengelola SD Negeri Sukasari 5."
    />
    <section className="pt-16 pb-20 dot-bg">
      <div className="max-w-4xl mx-auto px-5 md:px-8 text-center mb-14">
        <Reveal>
          <span className="eyebrow mb-3">Tata Kelola</span>
          <h1 className="section-title">Struktur Organisasi Sekolah</h1>
        </Reveal>
      </div>

      <div className="max-w-3xl mx-auto px-5 md:px-8 space-y-4">
        {struktur.map((item, i) => (
          <Reveal key={item.jabatan} delay={i * 0.06}>
            <div
              className="report-card flex items-center justify-between gap-4"
              style={{ marginLeft: `${item.tingkat * 24}px` }}
            >
              <div>
                <p className="font-display text-ink">{item.jabatan}</p>
                <p className="text-sm text-ink/60">{item.nama}</p>
              </div>
              <span className="text-xs font-bold text-ink/30">
                {String(i + 1).padStart(2, "0")}
              </span>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  </Layout>
)

export default StrukturPage
