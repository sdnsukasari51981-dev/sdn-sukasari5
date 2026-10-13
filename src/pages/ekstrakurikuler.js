import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Reveal from "../components/Reveal"
import {
  HiOutlineFlag,
  HiOutlineMusicNote,
  HiOutlineDesktopComputer,
  HiOutlineBookOpen,
  HiOutlineGlobeAlt,
  HiOutlinePuzzle,
} from "react-icons/hi"
import { GiSoccerBall } from "react-icons/gi"

const kegiatan = [
  { icon: HiOutlineFlag, nama: "Pramuka", jadwal: "Jumat, 14.00–16.00", desc: "Membentuk kemandirian, kedisiplinan, dan jiwa kepemimpinan siswa." },
  { icon: GiSoccerBall, nama: "Futsal", jadwal: "Selasa & Kamis, 15.00–17.00", desc: "Mengasah kerja sama tim dan kebugaran jasmani." },
  { icon: HiOutlineMusicNote, nama: "Seni Tari", jadwal: "Rabu, 13.30–15.00", desc: "Melestarikan budaya lokal lewat gerak dan ekspresi." },
  { icon: HiOutlineDesktopComputer, nama: "Klub Komputer", jadwal: "Senin, 13.30–15.00", desc: "Mengenalkan literasi digital dan dasar coding sejak dini." },
  { icon: HiOutlineBookOpen, nama: "Klub Literasi", jadwal: "Kamis, 13.30–15.00", desc: "Menumbuhkan minat baca dan kemampuan menulis kreatif." },
  { icon: HiOutlineGlobeAlt, nama: "English Club", jadwal: "Selasa, 13.30–15.00", desc: "Melatih percakapan bahasa Inggris dasar secara interaktif." },
  { icon: HiOutlinePuzzle, nama: "Sains Club", jadwal: "Rabu, 15.00–16.30", desc: "Eksperimen sains sederhana untuk memupuk rasa ingin tahu." },
]

const EkstrakurikulerPage = () => (
  <Layout>
    <SEO
      title="Ekstrakurikuler"
      pathname="/ekstrakurikuler"
      description="Daftar kegiatan ekstrakurikuler yang tersedia di SD Negeri Sukasari 5."
    />
    <section className="pt-16 pb-24 dot-bg">
      <div className="max-w-4xl mx-auto px-5 md:px-8 text-center mb-14">
        <Reveal>
          <span className="eyebrow mb-3">Kembangkan Bakat</span>
          <h1 className="section-title">Kegiatan Ekstrakurikuler</h1>
          <p className="text-ink/60 mt-4 max-w-xl mx-auto">
            Ruang bagi siswa untuk mengeksplorasi minat dan bakat di luar jam
            pelajaran reguler.
          </p>
        </Reveal>
      </div>

      <div className="max-w-6xl mx-auto px-5 md:px-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {kegiatan.map((k, i) => (
          <Reveal key={k.nama} delay={(i % 6) * 0.06}>
            <div className="report-card h-full">
              <div className="w-12 h-12 rounded-2xl bg-daun-light text-daun grid place-items-center mb-4">
                <k.icon size={22} />
              </div>
              <h3 className="font-display text-lg text-ink mb-1.5">{k.nama}</h3>
              <p className="text-xs text-merah font-semibold mb-3">{k.jadwal}</p>
              <p className="text-sm text-ink/60 leading-relaxed">{k.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  </Layout>
)

export default EkstrakurikulerPage
