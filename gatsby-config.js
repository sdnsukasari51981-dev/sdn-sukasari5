/**
 * gatsby-config.js
 * Konfigurasi utama situs SD Negeri Sukasari 5.
 */

const siteUrl = process.env.URL || `https://sdnsukasari5.sch.id`;

module.exports = {
  siteMetadata: {
    title: `SD Negeri Sukasari 5`,
    titleTemplate: `%s | SD Negeri Sukasari 5`,
    description:
      `Website resmi SD Negeri Sukasari 5 — mencetak generasi cerdas, berkarakter, dan berakhlak mulia. Informasi SPMB, berita, prestasi, dan kegiatan sekolah.`,
    siteUrl,
    author: `SD Negeri Sukasari 5`,
    lang: `id`,
    social: {
      instagram: `https://instagram.com/sdnsukasari5`,
      facebook: `https://facebook.com/sdnsukasari5`,
      youtube: `https://youtube.com/@sdnsukasari5`,
    },
    contact: {
      address: `Jl. Sukasari No. 5, Kota (sesuaikan alamat lengkap)`,
      phone: `(022) 000-0000`,
      email: `info@sdnsukasari5.sch.id`,
    },
  },
  plugins: [
    `gatsby-plugin-postcss`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-nprogress`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `berita`,
        path: `${__dirname}/content/berita`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: { maxWidth: 1200, quality: 80, withWebp: true },
          },
          `gatsby-remark-copy-linked-files`,
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `SD Negeri Sukasari 5`,
        short_name: `SDN Sukasari 5`,
        start_url: `/`,
        background_color: `#FAF6EC`,
        theme_color: `#1B2A4A`,
        display: `standalone`,
        icon: `src/images/icon.png`,
        lang: `id`,
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        excludes: [`/404`, `/404.html`],
      },
    },
    {
      resolve: `gatsby-plugin-robots-txt`,
      options: {
        host: siteUrl,
        sitemap: `${siteUrl}/sitemap-index.xml`,
        policy: [{ userAgent: `*`, allow: `/` }],
      },
    },
    // Offline/PWA support — keep last so it wraps the built assets correctly.
    `gatsby-plugin-offline`,
  ],
};
