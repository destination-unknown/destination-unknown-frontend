/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const { createFilePath } = require(`gatsby-source-filesystem`)
const path = require(`path`)
const axios = require(`axios`)
const moment = require(`moment`)

exports.onCreateNode = ({ node, getNode, actions, graphql }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const parentNode = getNode(node.parent)
    if (parentNode.sourceInstanceName === 'countries') {
      const slug = createFilePath({ node, getNode, basePath: `pages` })
      createNodeField({
        node,
        name: `slug`,
        value: slug,
      })
      createNodeField({
        node,
        name: `type`,
        value: 'country',
      })
    } else if (parentNode.sourceInstanceName === 'blogs') {
      const slug = createFilePath({ node, getNode })
      createNodeField({
        node,
        name: `slug`,
        value: `/blog${slug}`,
      })
      createNodeField({
        node,
        name: `type`,
        value: `blog`,
      })
    }
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  // **Note:** The graphql function call returns a Promise
  // see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise for more info
  const result = await graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              country_code
              title
              flight_button_url
              hotels_url
            }
            fields {
              slug
              type
            }
          }
        }
      }
    }
  `)

  const rentalCarResponse = await axios.get(
    'https://daisycon.io/datafeed/?filter_id=72313&settings_id=9159'
  )

  const flightsResponse = await axios.get(
    'https://pf.tradetracker.net/?aid=356479&encoding=utf-8&type=json&fid=1232604&filter_html=1&filter_nl=1&categoryType=2&additionalType=2'
  )

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    if (node.fields.type === 'country') {
      const products =
        rentalCarResponse.data['datafeed']['programs'][0]['products']

      const flights = flightsResponse.data['products']

      const recentProductsPerCountry = products
        .filter(function(el) {
          return (
            el['product_info']['destination_country'] ===
            node.frontmatter.country_code.toUpperCase()
          )
        })
        .filter(function(el) {
          return moment(el['update_info']['update_date']).isBetween(
            moment().subtract(7, 'days'),
            moment().add(1, 'days')
          )
        })

      const departureCities = [
        'Brussel',
        'Amsterdam',
        'Maastricht',
        'Rotterdam',
        'Eindhoven',
        'Groningen',
      ]

      const flightsPerCountry = flights.filter(function(el) {
        return (
          el['properties']['countryArrival'][0] === node.frontmatter.title &&
          departureCities.includes(el['properties']['cityDeparture'][0])
        )
      })

      const cheapestCar =
        recentProductsPerCountry.length > 0
          ? recentProductsPerCountry.sort(function(a, b) {
              return a['product_info']['price'] - b['product_info']['price']
            })[0]['product_info']
          : null

      const cheapestFlight = flightsPerCountry.sort(function(a, b) {
        return a['price']['amount'] - b['price']['amount']
      })[0]

      createPage({
        path: node.fields.slug,
        component: path.resolve(`./src/templates/country.js`),
        context: {
          // Data passed to context is available
          // in page queries as GraphQL variables.
          slug: node.fields.slug,
          carsLink: cheapestCar
            ? cheapestCar.link
            : 'https://ds1.nl/c/?si=1112&li=70989&wi=335922&ws=&dl=',
          flightsLink: cheapestFlight
            ? cheapestFlight['URL']
            : node.frontmatter['flight_button_url'],
          flightsPrice: cheapestFlight ? cheapestFlight.price.amount : null,
          carsPrice: cheapestCar ? Math.round(cheapestCar.price / 7) : null,
          hotelsLink: node.frontmatter['hotels_url'],
          hotelsPrice: null,
        },
      })
    } else if (node.fields.type === 'blog') {
      createPage({
        path: node.fields.slug,
        component: path.resolve(`./src/templates/blog.js`),
        context: {
          // Data passed to context is available
          // in page queries as GraphQL variables.
          slug: node.fields.slug,
        },
      })
    }
  })
}
