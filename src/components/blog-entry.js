import React from 'react'
import Img from 'gatsby-image'
import styled from 'styled-components'
import { Link } from 'gatsby'

const BlogContainer = styled.div`
  margin-top: 16px;
  display: grid;
  background-color: #5ecdd3;
  grid-template-columns: 40% 60%;
  font-family: 'Open Sans', sans-serif;
  padding: 16px;
  color: white;
`

const ImageContainer = styled.div`
  margin-right: 24px;
  & > img {
    object-fit: cover;
    width: 100%;
    max-height: 250px;
  }
`

const Title = styled.h2`
  margin-top: 0;
  font-family: 'Lato', sans-serif;
`

const BlogEntry = ({ title, thumbnail, shortDescription, slug }) => (
  <Link
    to={slug}
    style={{
      textDecoration: `none`,
    }}
  >
    <BlogContainer>
      <ImageContainer>
        <img src={thumbnail} />
      </ImageContainer>
      <div>
        <Title>{title}</Title>
        <p>{shortDescription}...</p>
        <Link
          to={slug}
          style={{
            color: `#21888d`,
            textDecoration: `none`,
          }}
        >
          Read more
        </Link>
      </div>
    </BlogContainer>
  </Link>
)

export default BlogEntry
