import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import { BlobSun } from "../components/Blobs"

const NotFoundPage = () => (
  <Layout>
    <SEO title="Halaman Tidak Ditemukan" pathname="/404" />
    <section className="relative min-h-[70vh] grid place-items-center dot-bg overflow-hidden">
      <BlobSun className="absolute -top-10 -left-10 w-64 h-64 text-sun/20 animate-float" />
      <div className="text-center px-5">
        <p className="font-display text-7xl text-merah mb-4">404</p>
        <h1 className="font-display text-2xl text-ink mb-3">Halaman Tidak Ditemukan</h1>
        <p className="text-ink/60 mb-8 max-w-sm mx-auto">
          Sepertinya halaman yang Anda cari sudah pindah atau tidak tersedia.
        </p>
        <Link to="/" className="btn-primary">Kembali ke Beranda</Link>
      </div>
    </section>
  </Layout>
)

export default NotFoundPage
