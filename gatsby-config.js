require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Krzysztof Pantak Portfolio`,
    titleTemplate: `%s | Krzysztof Pantak Portfolio`,
    description: `Terminal -command-line themed portfolio featuring projects ranging from robust Gatsby PWA's, React APPs and FullStack Web APPs utilizing cloud platforms to simple HTML, CSS and JavaScript sites.`,
    author: `@KrzysztofPantak`,
    url: "https://pantak.net",
    image: "/PortfolioSS-sm.png", // Path to your image you placed in the 'static' folder
    twitterUsername: "@KrzysztofPantak",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Krzysztof Pantak Portfolio`,
        short_name: `Krzysztof Pantak Portfolio`,
        start_url: `/`,
        background_color: `#1b2d3a`,
        theme_color: `#1b2d3a`,
        display: `minimal-ui`,
        icon: `src/images/mojePhotoSquare.jpg`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/src/markdown-pages/info`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/src/markdown-pages/projects`,
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          process.env.GATSBY_GOOGLE_GTAG, // Google Analytics / GA
        ],
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-gatsby-cloud`,
    {
      /* Include plugin */
      resolve: "gatsby-omni-font-loader",

      /* Plugin options */
      options: {
        /* Font loading mode */
        mode: "async",

        /* Enable font loading listener to handle FOUT */
        enableListener: true,

        /* Preconnect URL-s. This example is for Google Fonts */
        preconnect: ["https://fonts.gstatic.com"],

        /* Web fonts. File link should point to font CSS file. */
        web: [
          {
            /* Exact name of the font as defied in @font-face CSS rule */
            name: "Roboto Mono",
            /* URL to the font CSS file with @font-face definition */
            file: "https://fonts.googleapis.com/css2?family=Roboto+Mono",
          },
        ],
      },
    }, // To learn more, visit: https://gatsby.dev/offline // this (optional) plugin enables Progressive Web App + Offline functionality
    `gatsby-plugin-offline`,
  ],
}
