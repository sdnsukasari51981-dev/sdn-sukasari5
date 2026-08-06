import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Reveal from "../components/Reveal"
import { HiOutlineFlag, HiOutlineCheckCircle } from "react-icons/hi"

const misi = [
  "Menyelenggarakan pembelajaran aktif, kreatif, dan menyenangkan berbasis Kurikulum Merdeka.",
  "Menanamkan nilai keimanan, kejujuran, dan gotong royong dalam setiap kegiatan sekolah.",
  "Mengembangkan potensi, minat, dan bakat siswa melalui program ekstrakurikuler yang beragam.",
  "Membangun kemitraan yang erat antara sekolah, orang tua, dan masyarakat sekitar.",
  "Menciptakan lingkungan belajar yang aman, bersih, sehat, dan ramah anak.",
]

const nilai = ["Jujur", "Disiplin", "Peduli", "Kreatif", "Mandiri", "Gotong Royong"]

const VisiMisiPage = () => (
  <Layout>
    <SEO title="Visi & Misi" pathname="/visi-misi" description="Visi, misi, dan nilai-nilai yang dipegang teguh SD Negeri Sukasari 5." />

    <section className="pt-16 pb-20 dot-bg">
      <div className="max-w-4xl mx-auto px-5 md:px-8 text-center mb-14">
        <Reveal>
          <span className="eyebrow mb-3">Arah &amp; Tujuan</span>
          <h1 className="section-title">Visi &amp; Misi Sekolah</h1>
        </Reveal>
      </div>

      <div className="max-w-4xl mx-auto px-5 md:px-8">
        <Reveal>
          <div className="report-card text-center bg-ink text-chalk mb-12">
            <HiOutlineFlag className="mx-auto mb-4 text-sun" size={32} />
            <span className="eyebrow !text-sun mb-3">Visi</span>
            <p className="font-display text-xl md:text-2xl leading-snug max-w-2xl mx-auto">
              "Terwujudnya peserta didik yang cerdas, berkarakter, mandiri, dan
              berwawasan lingkungan berlandaskan iman dan takwa."
            </p>
          </div>
        </Reveal>

        <Reveal>
          <h2 className="font-display text-2xl text-ink mb-6 text-center">Misi Sekolah</h2>
        </Reveal>
        <div className="grid sm:grid-cols-2 gap-5 mb-16">
          {misi.map((item, i) => (
            <Reveal key={item} delay={i * 0.08}>
              <div className="report-card flex gap-3 h-full">
                <HiOutlineCheckCircle className="text-daun shrink-0 mt-0.5" size={22} />
                <p className="text-ink/75 text-sm leading-relaxed">{item}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <h2 className="font-display text-2xl text-ink mb-6 text-center">Nilai-Nilai Utama</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {nilai.map((n) => (
              <span
                key={n}
                className="px-5 py-2.5 rounded-full bg-sun-light text-ink font-display text-sm border border-sun/40"
              >
                {n}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  </Layout>
)

export default VisiMisiPage
