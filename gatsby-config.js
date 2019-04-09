module.exports = {
  siteMetadata: {
    title: `Destination Unknown`,
    description: `Find your perfect holiday destination by answering a few simple questions.`,
    author: `@joeykaan`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
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
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-sharp`,
    'gatsby-plugin-styled-components',
    {
      resolve: `gatsby-plugin-react-svg`,
      options: {
        rule: {
          include: /wereldbol-icon|valuta-icon|bevolking-icon/,
        },
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-48594289-6',
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
