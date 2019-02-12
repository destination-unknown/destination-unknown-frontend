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
    `gatsby-transformer-sharp`,
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
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
