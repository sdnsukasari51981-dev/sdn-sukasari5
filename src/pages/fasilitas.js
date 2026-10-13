import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Reveal from "../components/Reveal"
import {
  HiOutlineLibrary,
  HiOutlineBeaker,
  HiOutlineDesktopComputer,
  HiOutlineHeart,
  HiOutlineHome,
  HiOutlineSparkles,
} from "react-icons/hi"

const fasilitas = [
  { icon: HiOutlineHome, nama: "18 Ruang Kelas", desc: "Ruang kelas nyaman dan representatif untuk mendukung proses belajar." },
  { icon: HiOutlineLibrary, nama: "Perpustakaan", desc: "Koleksi buku bacaan dan referensi untuk menumbuhkan budaya literasi." },
  { icon: HiOutlineBeaker, nama: "Laboratorium IPA", desc: "Ruang praktikum untuk eksperimen sains dasar yang aman dan interaktif." },
  { icon: HiOutlineDesktopComputer, nama: "Laboratorium Komputer", desc: "Fasilitas komputer untuk literasi digital dan latihan asesmen berbasis komputer." },
  { icon: HiOutlineHeart, nama: "UKS", desc: "Unit Kesehatan Sekolah dengan tenaga dan peralatan P3K dasar." },
  { icon: HiOutlineSparkles, nama: "Lapangan Olahraga", desc: "Area multifungsi untuk upacara, olahraga, dan kegiatan luar ruang." },
]

const FasilitasPage = () => (
  <Layout>
    <SEO
      title="Fasilitas Sekolah"
      pathname="/fasilitas"
      description="Sarana dan prasarana yang tersedia di SD Negeri Sukasari 5."
    />
    <section className="pt-16 pb-24 dot-bg">
      <div className="max-w-4xl mx-auto px-5 md:px-8 text-center mb-14">
        <Reveal>
          <span className="eyebrow mb-3">Sarana &amp; Prasarana</span>
          <h1 className="section-title">Fasilitas Sekolah</h1>
        </Reveal>
      </div>

      <div className="max-w-6xl mx-auto px-5 md:px-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {fasilitas.map((f, i) => (
          <Reveal key={f.nama} delay={(i % 6) * 0.06}>
            <div className="report-card h-full">
              <div className="w-12 h-12 rounded-2xl bg-sky-light text-sky grid place-items-center mb-4">
                <f.icon size={22} />
              </div>
              <h3 className="font-display text-lg text-ink mb-2">{f.nama}</h3>
              <p className="text-sm text-ink/60 leading-relaxed">{f.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  </Layout>
)

export default FasilitasPage
