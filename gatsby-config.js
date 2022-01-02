require(`dotenv`).config({
  path: `.env`,
})

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE

module.exports = {
  siteMetadata: {
    siteTitle: `Artangled`,
    siteTitleAlt: `Artangled: Art shows that lead to connections`,
    siteHeadline: `Artangled: Art shows that lead to connections`,
    // Will be used to generate absolute URLs for og:image etc.
    siteUrl: `https://artangled.com`,
    // Used for SEO
    siteDescription: `A weekly blog on interesting art shows, written by Joseph Clift.`,
    // Will be set on the <html /> tag
    siteLanguage: `en`,
    // Used for og:image and must be placed inside the `static` folder
    // siteImage: `/banner.jpg`,
    // Twitter Handle
    // author: `@lekoarts_de`,
    // Links displayed in the header on the right side
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-minimal-blog`,
      // See the theme's README for all available options
      options: {
        navigation: [
          {
            title: `Posts`,
            slug: `/posts`,
          },
          {
            title: `Tags`,
            slug: `/tags`,
          },
          {
            title: `About`,
            slug: `/about`,
          },
        ],
        blogPath: `/posts`,
        externalLinks: [
          {
            name: `Twitter`,
            url: `https://twitter.com/artangled`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
//              trackingId: process.env.GOOGLE_ANALYTICS_ID,
            trackingId: `UA-112794311-1`
//              tracking id is UA-112794311-1
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Artangled`,
        short_name: `Artangled`,
        description: `Art shows that lead to connections`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#6B46C1`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,

    `gatsby-plugin-netlify`,
    shouldAnalyseBundle && {
      resolve: `gatsby-plugin-webpack-bundle-analyser-v2`,
      options: {
        analyzerMode: `static`,
        reportFilename: `_bundle.html`,
        openAnalyzer: false,
      },
    },
  ].filter(Boolean),
}
