import React from 'react'
import Layout from '../components/layout'
// import SEO from '../components/seo'
import styled from 'styled-components'
import { Helmet } from 'react-helmet'
import Globe from '../images/wereldbol-icon.svg'
import People from '../images/bevolking-icon.svg'
import Money from '../images/valuta-icon.svg'
import { graphql } from 'gatsby'

const Container = styled.div`
  max-width: 960px;
  background-color: #47c0c7;
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  grid-gap: 0 5%;
  grid-template-rows: fit-content 50%;
  font-family: 'Open Sans', sans-serif;
  margin: 0 auto;
  padding-top: 0;
`

const FactsContainer = styled.div`
  display: grid;
  padding: 64px;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: fit-content 1fr 1fr;
  background-color: #31bbc2;
  justify-items: center;
`

const Title = styled.h1`
  font-family: 'Lato', sans-serif;
  line-height: 1;
  font-size: 6rem;
  font-weight: bold;
  margin: 0;
  color: white;
`

const FactText = styled.p`
  font-family: 'Lato', sans-serif;
  line-height: 1;
  font-size: 3rem;
  font-weight: bold;
  margin: 0;
  color: white;
`

const FactSubText = styled.p` color: #21888d; font-family: 'Lato', sans-serif; font-size: 2.5rem; font-weight: 900;
  margin: 0;
`

const BodyText = styled.p`
  color: white;
  font-weight: 300;
  margin-top: 8px;
  font-size: 1.2rem;
  line-height: 1.5;
  font-family: 'Open Sans', sans-serif;
`

const SubTitle = styled.p`
  color: #21888d;
  font-family: 'Lato', sans-serif;
  font-size: 3.5rem;
  font-weight: 900;
  margin: 0;
  @media only screen and (max-width: 600px) {
    font-size: 2.5rem;
  }
`

const WhatYouNeedToKnowContainer = styled.div`
  padding: 24px;
  max-width: 960px;
  margin: 0 auto;
`

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <Container>
        <Helmet>
          <meta name="robots" content="noindex" />
        </Helmet>
        <div />
        <div>
          <Title>{post.frontmatter.title}</Title>
        </div>
        <div>
          <img
            style={{
              maxWidth: `100%`,
              maxHeight: `100%`,
            }}
            src={post.frontmatter.introimage}
            alt={post.frontmatter.title}
          />
        </div>
        <div>
          <BodyText>{post.frontmatter.introtext}</BodyText>
        </div>
      </Container>
      <FactsContainer>
        <div>
          <Globe />
        </div>
        <div>
          <People />
        </div>
        <div>
          <Money />
        </div>
        <div>
          <FactText>{post.frontmatter.surface}</FactText>
        </div>
        <div>
          <FactText>{post.frontmatter.inhabitants}</FactText>
        </div>
        <div>
          <FactText>1 {post.frontmatter.valuta}</FactText>
        </div>
        <div>
          <FactSubText>km2</FactSubText>
        </div>
        <div>
          <FactSubText>inwoners</FactSubText>
        </div>
        <div>
          <FactSubText>{post.frontmatter.rate} euro</FactSubText>
        </div>
      </FactsContainer>{' '}
      <WhatYouNeedToKnowContainer>
        <SubTitle>Wat je moet weten</SubTitle>
        <BodyText>{post.frontmatter.need_to_know_text}</BodyText>
      </WhatYouNeedToKnowContainer>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        introtext
        introimage
        surface
        inhabitants
        rate
        valuta
      }
    }
  }
`
