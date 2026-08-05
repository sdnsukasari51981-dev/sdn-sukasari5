import React from "react"
import { Link, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { StaticImage } from "gatsby-plugin-image"
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
  HiOutlineChatAlt2,
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
    desc: "Marching Band, Taekwondo, Pencak Silat, Marawis, Pramuka, Seni Tari, Futsal, hingga coding dari Ruang Guru untuk mengasah bakat di luar kelas.",
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
        description="Website resmi SD Negeri Sukasari 5 — informasi SPMB, profil sekolah, berita, prestasi, dan kegiatan belajar-mengajar."
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
              <Link to="/profil" className="btn-secondary">
                Kenali Sekolah Kami
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.15} className="relative">
            <div className="report-card rotate-2">
              <div className="rounded-2xl overflow-hidden aspect-[4/3]">
                <StaticImage
                  src="../images/gedung-sekolah.jpeg"
                  alt="Gedung SD Negeri Sukasari 5"
                  className="w-full h-full"
                  imgClassName="object-cover"
                  placeholder="blurred"
                  layout="constrained"
                />
              </div>
            </div>
            <div className="report-card absolute -bottom-8 -left-8 -rotate-3 w-44 hidden sm:block">
              <p className="font-display text-sm text-ink">"Belajar itu menyenangkan!"</p>
              <p className="text-xs text-ink/50 mt-1">— SDN Sukasari 5</p>
            </div>
          </Reveal>
        </div>

        {/* Statistik */}
        <Reveal delay={0.2} className="max-w-5xl mx-auto px-5 md:px-8 mt-16 md:mt-24">
          <div className="report-card grid grid-cols-2 md:grid-cols-4 gap-8 py-8">
            <StatCounter value={421} suffix="" label="Siswa Aktif" />
            <StatCounter value={26} label="Guru & Staf" />
            <StatCounter value={6} label="Ekstrakurikuler" />
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

      <TornEdge className="w-full h-6 text-daun-light" />

      {/* SAMBUTAN KEPALA SEKOLAH */}
      <section className="bg-daun-light py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <Reveal className="max-w-xl mb-14">
            <span className="eyebrow mb-3">Sambutan</span>
            <h2 className="section-title">Sambutan Kepala Sekolah</h2>
          </Reveal>
          <div className="grid md:grid-cols-[280px_1fr] gap-10 items-start">
            <Reveal>
              <div className="report-card -rotate-2 max-w-xs mx-auto md:mx-0">
                <div className="rounded-2xl overflow-hidden aspect-[3/4]">
                  <StaticImage
                    src="../images/kepala-sekolah.jpeg"
                    alt="Wawat Tustiawati, S.Pd., M.M. — Kepala SD Negeri Sukasari 5"
                    className="w-full h-full"
                    imgClassName="object-cover"
                    placeholder="blurred"
                    layout="constrained"
                  />
                </div>
                <div className="text-center pt-4">
                  <p className="font-display text-ink">Wawat Tustiawati, S.Pd., M.M.</p>
                  <p className="text-xs text-ink/50 mt-1">Kepala SD Negeri Sukasari 5</p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="report-card">
                <HiOutlineChatAlt2 className="text-4xl text-daun mb-4" aria-hidden="true" />
                <p className="text-ink/70 leading-relaxed mb-4">
                  Assalamu'alaikum warahmatullahi wabarakatuh. Puji syukur kita panjatkan
                  kehadirat Allah SWT atas segala rahmat dan karunia-Nya, sehingga website resmi
                  SD Negeri Sukasari 5 ini dapat hadir untuk Bapak/Ibu dan Ananda sekalian.
                </p>
                <p className="text-ink/70 leading-relaxed mb-4">
                  Website ini kami hadirkan sebagai jendela informasi sekaligus jembatan
                  komunikasi antara sekolah, orang tua, siswa, dan masyarakat luas. Melalui
                  platform ini, kami berharap Bapak/Ibu dapat lebih mudah mengikuti
                  perkembangan program pembelajaran, kegiatan, prestasi, hingga informasi
                  Sistem Penerimaan Murid Baru di SD Negeri Sukasari 5.
                </p>
                <p className="text-ink/70 leading-relaxed mb-4">
                  Kami berkomitmen untuk terus menghadirkan pendidikan yang berkualitas,
                  menyenangkan, dan berkarakter bagi seluruh peserta didik sejalan dengan
                  semangat Kurikulum Merdeka dan nilai-nilai akhlak mulia yang kami junjung
                  tinggi. Dukungan dan kerja sama dari orang tua serta seluruh pemangku
                  kepentingan sangat kami harapkan demi mewujudkan generasi yang cerdas,
                  kreatif, dan berakhlak mulia.
                </p>
                <p className="text-ink/70 leading-relaxed mb-6">
                  Akhir kata, selamat menjelajahi website SD Negeri Sukasari 5. Semoga
                  bermanfaat dan mempererat silaturahmi kita semua. Wassalamu'alaikum
                  warahmatullahi wabarakatuh.
                </p>
                <p className="font-display text-ink">Wawat Tustiawati, S.Pd., M.M.</p>
                <p className="text-sm text-ink/50">Kepala SD Negeri Sukasari 5</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <TornEdge className="w-full h-6 text-chalk" />

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

      {/* CTA SPMB */}
      <section className="bg-ink py-20 relative overflow-hidden">
        <BlobSun className="absolute -bottom-20 -right-10 w-72 h-72 text-white/5" />
        <Reveal className="max-w-3xl mx-auto px-5 md:px-8 text-center relative">
          <h2 className="font-display text-3xl md:text-4xl text-chalk mb-4">
            Rumah Administrasi SD Negeri Sukasari 5
          </h2>
          <p className="text-chalk/70 mb-8">
            Wujudkan administrasi terbaik untuk pendataan bersama SD Negeri Sukasari 5.
            Menjaga integritas dan konsistensi data, berbagi dan kolaborasi.
          </p>
          <a
            href="https://linktr.ee/Sukasari5"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Rumah Adm Sukma <HiArrowRight />
          </a>
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
