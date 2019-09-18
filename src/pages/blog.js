import React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import BlogEntry from '../components/blog-entry'

const BlogsContainer = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 0 16px;
`

const BlogOverviewPage = ({ data }) => {
  return (
    <Layout isIndex={true}>
      <BlogsContainer>
        {data.allMarkdownRemark.edges.map(edge => {
          return (
            <BlogEntry
              key={edge.node.fields.slug}
              title={edge.node.frontmatter.title}
              thumbnail={edge.node.frontmatter.thumbnail}
              shortDescription={edge.node.frontmatter.short_description}
              slug={edge.node.fields.slug}
            />
          )
        })}
      </BlogsContainer>
    </Layout>
  )
}

export default BlogOverviewPage

export const query = graphql`
  query BlogOverviewPageQuery {
    allMarkdownRemark(filter: { fields: { type: { eq: "blog" } } }) {
      edges {
        node {
          frontmatter {
            title
            thumbnail
            short_description
          }
          fields {
            slug
            type
          }
        }
      }
    }
  }
`
