module.exports = {
  siteMetadata: {
    title: "Marlon",
    description: "Gatsby Contentful",
    author: "Marlon Lulgjuraj",
    siteUrl: "https://marlongatsbycontentful.gatsbyjs.io",
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken:
          "603320a3d8493faf13568e00fafb0eab17b20100a72c656ce5e42a988fc14c41",
        spaceId: "8dx0t2zp2b79",
      },
    },
    "gatsby-plugin-styled-components",
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-image",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "xxx",
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-mdx",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
  ],
};
