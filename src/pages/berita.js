import React from "react"
import { graphql } from "gatsby"
import { getImage } from "gatsby-plugin-image"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Reveal from "../components/Reveal"
import NewsCard from "../components/NewsCard"

const BeritaPage = ({ data }) => {
  const posts = data.allMarkdownRemark.nodes

  return (
    <Layout>
      <SEO
        title="Berita & Kegiatan"
        pathname="/berita"
        description="Kumpulan berita, pengumuman, dan dokumentasi kegiatan SD Negeri Sukasari 5."
      />
      <section className="pt-16 pb-20 dot-bg">
        <div className="max-w-4xl mx-auto px-5 md:px-8 text-center mb-14">
          <Reveal>
            <span className="eyebrow mb-3">Kabar Sekolah</span>
            <h1 className="section-title">Berita &amp; Kegiatan</h1>
          </Reveal>
        </div>

        <div className="max-w-6xl mx-auto px-5 md:px-8">
          {posts.length === 0 ? (
            <p className="text-center text-ink/50">Belum ada berita yang dipublikasikan.</p>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post, i) => (
                <Reveal key={post.id} delay={(i % 6) * 0.06}>
                  <NewsCard
                    title={post.frontmatter.judul}
                    date={post.frontmatter.tanggal}
                    excerpt={post.excerpt}
                    slug={post.fields.slug}
                    category={post.frontmatter.kategori}
                    image={post.frontmatter.gambar && getImage(post.frontmatter.gambar)}
                    externalUrl={post.frontmatter.tautan}
                  />
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query BeritaQuery {
    allMarkdownRemark(sort: { frontmatter: { tanggal: DESC } }) {
      nodes {
        id
        excerpt(pruneLength: 130)
        fields {
          slug
        }
        frontmatter {
          judul
          tanggal(formatString: "DD MMMM YYYY", locale: "id")
          kategori
          tautan
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

export default BeritaPage
