import React from "react"
import { Link, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Reveal from "../components/Reveal"
import StatCounter from "../components/StatCounter"
import NewsCard from "../components/NewsCard"
import { BlobSun, BlobLeaf, TornEdge } from "../components/Blobs"
import {
  HiOutlineBookOpen,
  HiOutlineUserGroup,
  HiOutlineSparkles,
  HiOutlineAcademicCap,
  HiArrowRight,
} from "react-icons/hi"

const programs = [
  {
    icon: HiOutlineBookOpen,
    title: "Kurikulum Merdeka",
    desc: "Pembelajaran berbasis proyek yang menumbuhkan rasa ingin tahu dan kemandirian belajar siswa.",
    badge: "bg-sky-light text-sky",
  },
  {
    icon: HiOutlineSparkles,
    title: "Penguatan Karakter",
    desc: "Pembiasaan salam, doa, dan gotong royong setiap hari untuk membentuk akhlak mulia.",
    badge: "bg-sun-light text-sun",
  },
  {
    icon: HiOutlineUserGroup,
    title: "Ekstrakurikuler Beragam",
    desc: "Pramuka, seni tari, futsal, hingga sains club untuk mengasah bakat di luar kelas.",
    badge: "bg-daun-light text-daun",
  },
  {
    icon: HiOutlineAcademicCap,
    title: "Guru Bersertifikat",
    desc: "Tenaga pendidik profesional dan berpengalaman yang peduli tumbuh kembang anak.",
    badge: "bg-merah-light text-merah",
  },
]

const IndexPage = ({ data }) => {
  const posts = data.allMarkdownRemark.nodes

  return (
    <Layout>
      <SEO
        title="Beranda"
        description="Website resmi SD Negeri Sukasari 5 — informasi PPDB, profil sekolah, berita, prestasi, dan kegiatan belajar-mengajar."
      />

      {/* HERO */}
      <section className="relative overflow-hidden pt-14 pb-20 md:pt-20 md:pb-28 dot-bg">
        <BlobSun className="absolute -top-10 -right-16 w-72 h-72 text-sun/25 animate-float" />
        <BlobLeaf className="absolute bottom-0 -left-16 w-72 h-72 text-daun/20 animate-float" />

        <div className="max-w-6xl mx-auto px-5 md:px-8 relative grid md:grid-cols-2 gap-12 items-center">
          <Reveal>
            <span className="eyebrow mb-4">Sekolah Dasar Negeri · Terakreditasi A</span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-ink leading-[1.08] mb-6">
              Tempat Tumbuh,
              <br />
              <span className="text-merah">Belajar,</span> dan{" "}
              <span className="text-sky">Bermain</span> Bersama
            </h1>
            <p className="text-ink/70 text-lg max-w-md mb-8 leading-relaxed">
              SD Negeri Sukasari 5 membentuk generasi cerdas, kreatif, dan berkarakter
              melalui pembelajaran yang menyenangkan dan penuh makna.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/ppdb" className="btn-primary">
                Daftar PPDB <HiArrowRight />
              </Link>
              <Link to="/profil" className="btn-secondary">
                Kenali Sekolah Kami
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.15} className="relative">
            <div className="report-card rotate-2">
              <div className="rounded-2xl bg-gradient-to-br from-sky-light via-sun-light to-daun-light aspect-[4/3] grid place-items-center">
                <span className="font-display text-ink/40 text-center px-6">
                  Foto gedung / kegiatan sekolah
                  <br />
                  <span className="text-xs font-body">(ganti dengan foto asli di /src/images)</span>
                </span>
              </div>
            </div>
            <div className="report-card absolute -bottom-8 -left-8 -rotate-3 w-44 hidden sm:block">
              <p className="font-display text-sm text-ink">"Belajar itu menyenangkan!"</p>
              <p className="text-xs text-ink/50 mt-1">— Siswa Kelas 4</p>
            </div>
          </Reveal>
        </div>

        {/* Statistik */}
        <Reveal delay={0.2} className="max-w-5xl mx-auto px-5 md:px-8 mt-16 md:mt-24">
          <div className="report-card grid grid-cols-2 md:grid-cols-4 gap-8 py-8">
            <StatCounter value={420} suffix="+" label="Siswa Aktif" />
            <StatCounter value={28} label="Guru & Staf" />
            <StatCounter value={12} label="Ekstrakurikuler" />
            <StatCounter value={45} suffix=" thn" label="Berdiri Sejak" />
          </div>
        </Reveal>
      </section>

      <TornEdge className="w-full h-6 text-paper" />

      {/* PROGRAM UNGGULAN */}
      <section className="bg-paper py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <Reveal className="max-w-xl mb-14">
            <span className="eyebrow mb-3">Mengapa Sukasari 5</span>
            <h2 className="section-title">Program yang membentuk kebiasaan baik sejak dini</h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {programs.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.08}>
                <div className="report-card h-full hover:-translate-y-1.5 transition-transform duration-300">
                  <div className={`w-12 h-12 rounded-2xl ${p.badge} grid place-items-center mb-4`}>
                    <p.icon size={24} />
                  </div>
                  <h3 className="font-display text-lg text-ink mb-2">{p.title}</h3>
                  <p className="text-sm text-ink/60 leading-relaxed">{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* BERITA TERBARU */}
      {posts.length > 0 && (
        <section className="bg-chalk py-20 md:py-28 dot-bg">
          <div className="max-w-6xl mx-auto px-5 md:px-8">
            <Reveal className="flex flex-wrap items-end justify-between gap-4 mb-12">
              <div>
                <span className="eyebrow mb-3">Kabar Sekolah</span>
                <h2 className="section-title">Berita &amp; Kegiatan Terbaru</h2>
              </div>
              <Link to="/berita" className="btn-secondary">
                Lihat Semua Berita
              </Link>
            </Reveal>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post, i) => (
                <Reveal key={post.id} delay={i * 0.08}>
                  <NewsCard
                    title={post.frontmatter.judul}
                    date={post.frontmatter.tanggal}
                    excerpt={post.excerpt}
                    slug={post.fields.slug}
                    category={post.frontmatter.kategori}
                    image={post.frontmatter.gambar && getImage(post.frontmatter.gambar)}
                  />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA PPDB */}
      <section className="bg-ink py-20 relative overflow-hidden">
        <BlobSun className="absolute -bottom-20 -right-10 w-72 h-72 text-white/5" />
        <Reveal className="max-w-3xl mx-auto px-5 md:px-8 text-center relative">
          <h2 className="font-display text-3xl md:text-4xl text-chalk mb-4">
            Penerimaan Peserta Didik Baru Telah Dibuka
          </h2>
          <p className="text-chalk/70 mb-8">
            Wujudkan pendidikan terbaik untuk buah hati Anda bersama SD Negeri Sukasari 5.
            Kuota terbatas, daftarkan sekarang.
          </p>
          <Link to="/ppdb" className="btn-primary">
            Info & Formulir PPDB <HiArrowRight />
          </Link>
        </Reveal>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query HomeQuery {
    allMarkdownRemark(sort: { frontmatter: { tanggal: DESC } }, limit: 3) {
      nodes {
        id
        excerpt(pruneLength: 120)
        fields {
          slug
        }
        frontmatter {
          judul
          tanggal(formatString: "DD MMMM YYYY", locale: "id")
          kategori
          gambar {
            childImageSharp {
              gatsbyImageData(width: 500, height: 375, placeholder: BLURRED)
            }
          }
        }
      }
    }
  }
`

export default IndexPage
