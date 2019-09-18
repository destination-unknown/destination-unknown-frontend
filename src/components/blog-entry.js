import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const BlogContainer = styled.div`
  margin-top: 16px;
  display: grid;
  background-color: #5ecdd3;
  grid-template-columns: 1fr 1fr;
  grid-gap: 16px;
  font-family: 'Open Sans', sans-serif;
  color: white;
  padding: 16px;
  @media only screen and (max-width: 600px) {
    grid-template-columns: 100%;
  }
`

const ImageContainer = styled.div`
  & > img {
    object-fit: cover;
    width: 100%;
    max-height: 250px;
  }

  /* @media only screen and (max-width: 600px) {
    grid-template-columns: 100%;
  } */
`

const Title = styled.h2`
  margin-top: 0;
  font-family: 'Lato', sans-serif;
`

const StyledLink = styled.p`
  color: #21888d;
  text-decoration: underline;
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
        <img src={thumbnail} alt={title} />
      </ImageContainer>
      <div>
        <Title>{title}</Title>
        <p>{shortDescription}...</p>
        <StyledLink>Read more</StyledLink>
      </div>
    </BlogContainer>
  </Link>
)

export default BlogEntry
