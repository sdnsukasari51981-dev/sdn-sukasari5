import React from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Reveal from "../components/Reveal"
import { HiOutlineCalendar, HiArrowLeft } from "react-icons/hi"

const BeritaPostTemplate = ({ data }) => {
  const post = data.markdownRemark
  const img = post.frontmatter.gambar && getImage(post.frontmatter.gambar)

  return (
    <Layout>
      <SEO
        title={post.frontmatter.judul}
        description={post.excerpt}
        pathname={post.fields.slug}
        article
      />
      <article className="pt-14 pb-24">
        <div className="max-w-3xl mx-auto px-5 md:px-8">
          <Reveal>
            <Link to="/berita" className="inline-flex items-center gap-1.5 text-sm text-ink/60 hover:text-merah mb-6">
              <HiArrowLeft /> Kembali ke Berita
            </Link>
            {post.frontmatter.kategori && <span className="eyebrow mb-3">{post.frontmatter.kategori}</span>}
            <h1 className="font-display text-3xl md:text-4xl text-ink leading-tight mb-4">
              {post.frontmatter.judul}
            </h1>
            <p className="flex items-center gap-1.5 text-sm text-ink/50 mb-8">
              <HiOutlineCalendar /> {post.frontmatter.tanggal}
            </p>
          </Reveal>

          {img && (
            <Reveal delay={0.1}>
              <GatsbyImage image={img} alt={post.frontmatter.judul} className="rounded-card mb-10 shadow-card" />
            </Reveal>
          )}

          <Reveal delay={0.15}>
            <div
              className="prose prose-lg max-w-none text-ink/80 leading-relaxed prose-headings:font-display prose-headings:text-ink prose-a:text-merah"
              dangerouslySetInnerHTML={{ __html: post.html }}
            />
          </Reveal>
        </div>
      </article>
    </Layout>
  )
}

export const query = graphql`
  query BeritaPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      excerpt(pruneLength: 160)
      fields {
        slug
      }
      frontmatter {
        judul
        tanggal(formatString: "DD MMMM YYYY", locale: "id")
        kategori
        gambar {
          childImageSharp {
            gatsbyImageData(width: 900, placeholder: BLURRED)
          }
        }
      }
    }
  }
`

export default BeritaPostTemplate
