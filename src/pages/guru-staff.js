import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Reveal from "../components/Reveal"

const guru = [
  { nama: "Siti Rahayu, S.Pd., M.M.", peran: "Kepala Sekolah" },
  { nama: "Ahmad Fauzi, S.Pd.", peran: "Wali Kelas 6A" },
  { nama: "Ratna Sari, S.Pd.", peran: "Wali Kelas 5A · Koordinator Kurikulum" },
  { nama: "Yusuf Hidayat, S.Pd.", peran: "Wali Kelas 4A · Koordinator Kesiswaan" },
  { nama: "Indah Permata, S.Pd.", peran: "Wali Kelas 3A" },
  { nama: "Budi Santoso, S.Pd.", peran: "Wali Kelas 2A" },
  { nama: "Wulan Dari, S.Pd.", peran: "Wali Kelas 1A" },
  { nama: "Rina Marlina, S.Pd.I.", peran: "Guru Pendidikan Agama" },
  { nama: "Dedi Kurnia, S.Pd.", peran: "Guru Penjaskes" },
  { nama: "Dewi Lestari", peran: "Tenaga Tata Usaha" },
  { nama: "Agus Salim", peran: "Penjaga Sekolah" },
  { nama: "Maya Puspita, S.Pd.", peran: "Guru Seni Budaya" },
]

const initials = (name) =>
  name
    .split(" ")
    .slice(0, 2)
    .map((n) => n[0])
    .join("")
    .toUpperCase()

const GuruStaffPage = () => (
  <Layout>
    <SEO
      title="Guru & Staf"
      pathname="/guru-staff"
      description="Kenali para guru dan staf profesional di SD Negeri Sukasari 5."
    />
    <section className="pt-16 pb-20 dot-bg">
      <div className="max-w-4xl mx-auto px-5 md:px-8 text-center mb-14">
        <Reveal>
          <span className="eyebrow mb-3">Sumber Daya Manusia</span>
          <h1 className="section-title">Guru &amp; Staf Kami</h1>
          <p className="text-ink/60 mt-4 max-w-xl mx-auto">
            Tenaga pendidik dan kependidikan yang berdedikasi mendampingi tumbuh
            kembang setiap siswa.
          </p>
        </Reveal>
      </div>

      <div className="max-w-6xl mx-auto px-5 md:px-8 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {guru.map((g, i) => (
          <Reveal key={g.nama} delay={(i % 4) * 0.06}>
            <div className="report-card text-center h-full">
              <div className="w-16 h-16 mx-auto rounded-full bg-sky-light text-sky grid place-items-center font-display text-lg mb-4">
                {initials(g.nama)}
              </div>
              <p className="font-display text-ink text-sm">{g.nama}</p>
              <p className="text-xs text-ink/50 mt-1">{g.peran}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  </Layout>
)

export default GuruStaffPage
