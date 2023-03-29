/**
 * @type {import('gatsby').GatsbyConfig}
 */
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

const strapiConfig = {
  apiURL: process.env.STRAPI_API_URL,
  accessToken: process.env.STRAPI_TOKEN,
  collectionTypes: [
    {
      singularName: "case",
      queryParams: {
        publicationState:
          process.env.GATSBY_IS_PREVIEW === "true" ? "preview" : "live",
        populate: {
          pageContent: {
            populate: "*",
          },
        },
      },
    },
  ],
  singleTypes: [],
  remoteFileHeaders: {
    /**
     * Customized request headers
     * For http request with a image or other files need authorization
     * For expamle: Fetch a CDN file which has a security config when gatsby building needs
     */
    // Referer: "https://your-site-domain/",
    // Authorization: "Bearer eyJhabcdefg_replace_it_with_your_own_token",
  },
};

module.exports = {
  siteMetadata: {
    title: `UX-Portfolio`,
    siteUrl: `https://www.silikhe.com`,
  },
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-google-gtag",
    "gatsby-plugin-image",
    "gatsby-plugin-sitemap",
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
      resolve: `gatsby-source-strapi`,
      options: strapiConfig,
    },

    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `poppins`,
          `source sans pro\:300,400,400i,700`, // you can also specify font weights and styles
        ],
        display: "swap",
      },
    },
    {
      resolve: `gatsby-source-medium`,
      options: {
        username: `@silikhesilas`,
        accessToken: `2aed049f7e6480c29aa975ac4176351c48b5e6566d4cb07ff4512d580be63f078
        `,
      },
    },
  ],
};
