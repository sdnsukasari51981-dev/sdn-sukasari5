import React, { useState } from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Reveal from "../components/Reveal"
import { AnimatePresence, motion } from "framer-motion"
import { HiX, HiOutlinePhotograph } from "react-icons/hi"

const kategori = ["Semua", "Akademik", "Ekstrakurikuler", "Acara Sekolah", "Fasilitas"]

const foto = [
  { id: 1, judul: "Upacara Bendera", kategori: "Acara Sekolah", warna: "bg-sky-light text-sky" },
  { id: 2, judul: "Lomba Sains", kategori: "Akademik", warna: "bg-sun-light text-sun" },
  { id: 3, judul: "Latihan Pramuka", kategori: "Ekstrakurikuler", warna: "bg-daun-light text-daun" },
  { id: 4, judul: "Perpustakaan", kategori: "Fasilitas", warna: "bg-merah-light text-merah" },
  { id: 5, judul: "Pentas Seni", kategori: "Acara Sekolah", warna: "bg-sky-light text-sky" },
  { id: 6, judul: "Praktikum IPA", kategori: "Akademik", warna: "bg-sun-light text-sun" },
  { id: 7, judul: "Latihan Futsal", kategori: "Ekstrakurikuler", warna: "bg-daun-light text-daun" },
  { id: 8, judul: "Ruang Kelas", kategori: "Fasilitas", warna: "bg-merah-light text-merah" },
  { id: 9, judul: "Wisuda Kelas 6", kategori: "Acara Sekolah", warna: "bg-sky-light text-sky" },
]

const GaleriPage = () => {
  const [filter, setFilter] = useState("Semua")
  const [selected, setSelected] = useState(null)

  const filtered = filter === "Semua" ? foto : foto.filter((f) => f.kategori === filter)

  return (
    <Layout>
      <SEO
        title="Galeri"
        pathname="/galeri"
        description="Dokumentasi foto kegiatan, prestasi, dan fasilitas SD Negeri Sukasari 5."
      />
      <section className="pt-16 pb-24 dot-bg">
        <div className="max-w-4xl mx-auto px-5 md:px-8 text-center mb-10">
          <Reveal>
            <span className="eyebrow mb-3">Dokumentasi</span>
            <h1 className="section-title">Galeri Kegiatan</h1>
          </Reveal>
        </div>

        <Reveal className="max-w-6xl mx-auto px-5 md:px-8 flex flex-wrap justify-center gap-2 mb-10">
          {kategori.map((k) => (
            <button
              key={k}
              onClick={() => setFilter(k)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
                filter === k ? "bg-ink text-chalk" : "bg-paper text-ink/60 hover:bg-sky-light"
              }`}
            >
              {k}
            </button>
          ))}
        </Reveal>

        <div className="max-w-6xl mx-auto px-5 md:px-8 grid grid-cols-2 md:grid-cols-3 gap-4">
          {filtered.map((f, i) => (
            <Reveal key={f.id} delay={(i % 6) * 0.05}>
              <button
                onClick={() => setSelected(f)}
                className={`w-full aspect-square rounded-2xl ${f.warna} grid place-items-center gap-2 hover:scale-[1.03] transition-transform duration-300`}
              >
                <HiOutlinePhotograph size={28} />
                <span className="font-display text-xs px-3 text-center">{f.judul}</span>
              </button>
            </Reveal>
          ))}
        </div>
        <p className="text-center text-xs text-ink/40 mt-8">
          Placeholder galeri — ganti dengan foto asli kegiatan sekolah di /src/images.
        </p>
      </section>

      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-ink/90 grid place-items-center p-6"
            onClick={() => setSelected(null)}
            role="dialog"
            aria-modal="true"
            aria-label={selected.judul}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className={`relative w-full max-w-lg aspect-square rounded-card ${selected.warna} grid place-items-center`}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-chalk text-ink grid place-items-center shadow-card"
                aria-label="Tutup"
              >
                <HiX size={20} />
              </button>
              <span className="font-display text-lg">{selected.judul}</span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Layout>
  )
}

export default GaleriPage
