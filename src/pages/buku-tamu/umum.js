import React from "react"
import { Link } from "gatsby"
import Layout from "../../components/Layout"
import SEO from "../../components/SEO"
import Reveal from "../../components/Reveal"
import BukuTamu from "../../components/BukuTamu"

const UmumPage = () => (
  <Layout>
    <SEO
      title="Buku Tamu Umum"
      pathname="/buku-tamu/umum"
      description="Buku tamu online untuk orang tua, alumni, dan masyarakat umum yang berkunjung ke SD Negeri Sukasari 5."
    />
    <section className="pt-16 pb-24 dot-bg">
      <div className="max-w-4xl mx-auto px-5 md:px-8 text-center mb-12">
        <Reveal>
          <span className="eyebrow mb-3">Tamu Umum</span>
          <h1 className="section-title">Buku Tamu Umum</h1>
          <p className="mt-4 text-sm text-ink/60">
            <Link to="/buku-tamu" className="underline hover:text-merah">
              ← Kembali ke pilihan buku tamu
            </Link>
          </p>
        </Reveal>
      </div>
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <BukuTamu kategori="umum" judul="Buku Tamu Umum" />
      </div>
    </section>
  </Layout>
)

export default UmumPage
