import React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import BlogEntry from '../components/blog-entry'
import Seo from '../components/seo'
import '../templates/blog.css'

const BlogsContainer = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  padding: 0 16px;
  padding-bottom: 32px;
`

const BlogOverviewPage = ({ data }) => {
  return (
    <Layout
      isIndex={true}
      position={'initial'}
      isBlog={true}
      shouldShowNextDestination={true}
    >
      <Seo
        description={null}
        lang={'nl-NL'}
        meta={[]}
        keywords={[]}
        title={'Blog'}
      />
      <BlogsContainer>
        {data.allMarkdownRemark.edges
          .sort(
            (a, b) =>
              new Date(b.node.frontmatter.date) -
              new Date(a.node.frontmatter.date)
          )
          .map((edge) => {
            return (
              <BlogEntry
                key={edge.node.fields.slug}
                title={edge.node.frontmatter.title}
                thumbnail={edge.node.frontmatter.thumbnail}
                shortDescription={edge.node.frontmatter.short_description}
                slug={edge.node.fields.slug}
                date={edge.node.frontmatter.date}
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
            date
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
