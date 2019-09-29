import React from 'react'
import Layout from '../components/layout'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import Lightbox from 'react-image-lightbox'
import 'react-image-lightbox/style.css'

const MaxWidthContainer = styled.div`
  max-width: 960px;
  padding: 0 16px;
  margin: 0 auto;
`

const Container = styled.div`
  font-family: 'Open Sans', sans-serif;
  margin: 0 auto;
  margin-bottom: 32px;
  padding-top: 16px;
  @media only screen and (max-width: 600px) {
    grid-template-columns: 100%;
    padding: 0;
    grid-template-rows: auto auto auto;
  }
`

const Title = styled.h1`
  font-family: 'Lato', sans-serif;
  line-height: 1;
  font-weight: bold;
  color: white;
`

const ImageContainer = styled.div`
  margin: 0 auto;
  & > img {
    margin-top: 24px;
    object-fit: cover;
    width: 100%;
    max-height: 400px;
    @media only screen and (max-width: 600px) {
      min-height: initial;
      max-height: 200px;
    }
  }
`

const BodyTextContainer = styled.div`
  background-color: #5ecdd3;
  border-radius: 3px;
  margin-top: 32px;
  padding-top: 16px;

  a {
    color: #21888d;
  }

  img {
    object-fit: cover;
    width: 100%;
    max-height: 350px;
  }

  @media only screen and (max-width: 600px) {
    margin-top: 0;
  }
`

const BodyText = styled.div`
  color: white;
  font-weight: 300;
  margin-top: 8px;
  font-size: 1.2rem;
  line-height: 1.5;
  font-family: 'Open Sans', sans-serif;
`

export default class Country extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isLightBoxOpen: false, lightBoxImage: null }
  }

  render() {
    const { data } = this.props
    const post = data.markdownRemark
    return (
      <Layout isIndex={false}>
        <MaxWidthContainer>
          <Container>
            <Title>{post.frontmatter.title}</Title>
            <ImageContainer
              onClick={() => {
                typeof window !== 'undefined' &&
                  typeof window.gtag !== 'undefined' &&
                  window.gtag('event', 'zoom_in', {
                    event_category: 'Intro image',
                  })
                this.setState({
                  isLightBoxOpen: true,
                  lightBoxImage: post.frontmatter.thumbnail,
                })
              }}
            >
              <img
                src={post.frontmatter.thumbnail + '?nf_resize=fit&h=400'}
                alt={post.frontmatter.title}
              />
            </ImageContainer>
            {this.state.isLightBoxOpen && (
              <Lightbox
                mainSrc={this.state.lightBoxImage}
                onCloseRequest={() => this.setState({ isLightBoxOpen: false })}
              />
            )}
          </Container>
        </MaxWidthContainer>
        <BodyTextContainer>
          <MaxWidthContainer>
            <BodyText dangerouslySetInnerHTML={{ __html: post.html }} />
          </MaxWidthContainer>
        </BodyTextContainer>
      </Layout>
    )
  }
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
        thumbnail
      }
    }
  }
`
