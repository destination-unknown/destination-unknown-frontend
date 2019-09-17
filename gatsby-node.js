/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const { createFilePath } = require(`gatsby-source-filesystem`)
const path = require(`path`)

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

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  // **Note:** The graphql function call returns a Promise
  // see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise for more info
  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
              type
            }
          }
        }
      }
    }
  `).then(result => {
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      if (node.fields.type === 'country') {
        createPage({
          path: node.fields.slug,
          component: path.resolve(`./src/templates/country.js`),
          context: {
            // Data passed to context is available
            // in page queries as GraphQL variables.
            slug: node.fields.slug,
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
  })
}
