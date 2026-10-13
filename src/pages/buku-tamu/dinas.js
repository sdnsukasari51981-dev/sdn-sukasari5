import React from "react"
import { Link } from "gatsby"
import Layout from "../../components/Layout"
import SEO from "../../components/SEO"
import Reveal from "../../components/Reveal"
import BukuTamu from "../../components/BukuTamu"

const DinasPage = () => (
  <Layout>
    <SEO
      title="Buku Tamu Dinas"
      pathname="/buku-tamu/dinas"
      description="Buku tamu online untuk tamu dinas dan instansi yang berkunjung ke SD Negeri Sukasari 5."
    />
    <section className="pt-16 pb-24 dot-bg">
      <div className="max-w-4xl mx-auto px-5 md:px-8 text-center mb-12">
        <Reveal>
          <span className="eyebrow mb-3">Tamu Dinas &amp; Instansi</span>
          <h1 className="section-title">Buku Tamu Dinas</h1>
          <p className="mt-4 text-sm text-ink/60">
            <Link to="/buku-tamu" className="underline hover:text-merah">
              ← Kembali ke pilihan buku tamu
            </Link>
          </p>
        </Reveal>
      </div>
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <BukuTamu kategori="dinas" judul="Buku Tamu Dinas" />
      </div>
    </section>
  </Layout>
)

export default DinasPage
