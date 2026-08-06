import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

/**
 * Komponen SEO terpusat.
 * Dipakai di setiap halaman agar title, description, canonical URL,
 * Open Graph, Twitter Card, dan data terstruktur (JSON-LD) selalu konsisten.
 */
const SEO = ({ title, description, pathname = "", image, article = false }) => {
  const { site } = useStaticQuery(graphql`
    query SEOQuery {
      site {
        siteMetadata {
          title
          titleTemplate
          description
          siteUrl
          social {
            instagram
            facebook
            youtube
          }
          contact {
            address
            phone
            email
          }
        }
      }
    }
  `)

  const meta = site.siteMetadata
  const seo = {
    title: title || meta.title,
    description: description || meta.description,
    url: `${meta.siteUrl}${pathname}`,
    image: `${meta.siteUrl}${image || "/og-image.jpg"}`,
  }

  const schoolSchema = {
    "@context": "https://schema.org",
    "@type": "School",
    name: meta.title,
    url: meta.siteUrl,
    description: meta.description,
    address: {
      "@type": "PostalAddress",
      streetAddress: meta.contact.address,
    },
    telephone: meta.contact.phone,
    email: meta.contact.email,
    sameAs: [meta.social.instagram, meta.social.facebook, meta.social.youtube],
  }

  return (
    <Helmet titleTemplate={meta.titleTemplate} title={seo.title}>
      <html lang="id" />
      <meta name="description" content={seo.description} />
      <link rel="canonical" href={seo.url} />

      {/* Open Graph */}
      <meta property="og:type" content={article ? "article" : "website"} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:image" content={seo.image} />
      <meta property="og:locale" content="id_ID" />
      <meta property="og:site_name" content={meta.title} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />

      {/* Keamanan tambahan sisi klien */}
      <meta httpEquiv="X-Content-Type-Options" content="nosniff" />

      {/* Font */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      <link
        href="https://fonts.googleapis.com/css2?family=Baloo+2:wght@500;600;700;800&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap"
        rel="stylesheet"
      />

      <script type="application/ld+json">{JSON.stringify(schoolSchema)}</script>
    </Helmet>
  )
}

export default SEO
