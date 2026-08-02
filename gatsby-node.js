const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

/**
 * Definisikan skema secara eksplisit agar field opsional (mis. gambar sampul
 * berita) tidak menyebabkan galat GraphQL saat belum diisi di beberapa post.
 */
exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;
  createTypes(`
    type MarkdownRemark implements Node {
      frontmatter: Frontmatter
    }
    type Frontmatter {
      judul: String
      tanggal: Date @dateformat
      kategori: String
      gambar: File @fileByRelativePath
    }
  `);
};

/**
 * Tambahkan field `slug` ke setiap node MarkdownRemark berdasarkan nama file.
 */
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `content/berita` });
    createNodeField({
      name: `slug`,
      node,
      value: `/berita${slug}`,
    });
  }
};

/**
 * Buat halaman detail berita secara dinamis dari file markdown di /content/berita.
 */
exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;
  const beritaTemplate = path.resolve(`./src/templates/berita-post.js`);

  const result = await graphql(`
    query {
      allMarkdownRemark(sort: { frontmatter: { tanggal: DESC } }) {
        nodes {
          fields {
            slug
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild(`Gagal membuat halaman berita`, result.errors);
    return;
  }

  const posts = result.data.allMarkdownRemark.nodes;

  posts.forEach((post) => {
    createPage({
      path: post.fields.slug,
      component: beritaTemplate,
      context: {
        slug: post.fields.slug,
      },
    });
  });
};

/**
 * Keamanan build-time: pastikan variabel environment sensitif tidak pernah
 * di-bundle ke client. Hanya variabel berprefiks GATSBY_ yang boleh diakses
 * di browser — jangan pernah menaruh secret/API key di sana.
 */
exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    devtool: false, // jangan expose source map production ke publik
  });
};
