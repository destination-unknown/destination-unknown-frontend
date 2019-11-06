import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const BlogContainer = styled.div`
  position: relative;
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
`

const Title = styled.h2`
  margin-top: 0;
  font-family: 'Lato', sans-serif;
`

const StyledLink = styled.p`
  color: #21888d;
  text-decoration: underline;
`

const PostDate = styled.p`
  font-size: 0.8em;
  position: absolute;
  padding-right: 8px;
  right: 0;
  bottom: 0;
`

const BlogEntry = ({ title, thumbnail, shortDescription, slug, date }) => (
  <Link
    to={slug}
    style={{
      textDecoration: `none`,
    }}
  >
    <BlogContainer>
      <ImageContainer>
        <img src={thumbnail + '?nf_resize=fit&h=500'} alt={title} />
      </ImageContainer>
      <div>
        <Title>{title}</Title>
        <p>{shortDescription}...</p>
        <StyledLink>Read more</StyledLink>
        <PostDate>
          {new Date(date).getFullYear() +
            '-' +
            (new Date(date).getMonth() + 1) +
            '-' +
            new Date(date).getDate()}
        </PostDate>
      </div>
    </BlogContainer>
  </Link>
)

export default BlogEntry
