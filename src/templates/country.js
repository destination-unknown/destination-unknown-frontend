import React from 'react'
import Layout from '../components/layout'
// import SEO from '../components/seo'
import styled from 'styled-components'
import { Helmet } from 'react-helmet'
import Globe from '../images/wereldbol-icon.svg'
import People from '../images/bevolking-icon.svg'
import Money from '../images/valuta-icon.svg'
import Burger from '../images/burger.svg'
import { graphql } from 'gatsby'
import WhatYouNeedToKnow from '../components/what-you-need-to-know'
import Lightbox from 'react-image-lightbox'
import 'react-image-lightbox/style.css'

const Container = styled.div`
  max-width: 960px;
  background-color: #47c0c7;
  display: grid;
  grid-template-columns: 16.6% 16.6% 16.6% 16.6% 16.6% 16.6% 12%;
  grid-gap: 0 16px;
  grid-template-rows: max-content 50%;
  font-family: 'Open Sans', sans-serif;
  margin: 0 auto;
  margin-bottom: 32px;
  padding-top: 0;
  @media only screen and (max-width: 600px) {
    grid-template-columns: 100%;
    grid-template-rows: auto auto auto;
  }
`

const FactsContainer = styled.div`
  display: grid;
  padding: 64px;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: fit-content 1fr 1fr;
  background-color: #31bbc2;
  justify-items: center;
  margin-bottom: 32px;

  @media only screen and (max-width: 600px) {
    padding: 16px;
  }
`

const TitleContainer = styled.div`
  grid-column: 5 / span 3;
  grid-row: 1;

  @media only screen and (max-width: 600px) {
    grid-column: 1;
  }
`

const Title = styled.h1`
  text-align: right;
  text-transform: uppercase;
  font-family: 'Lato', sans-serif;
  line-height: 1;
  font-size: 4vw;
  font-weight: bold;
  margin: 0;
  color: white;
  @media only screen and (max-width: 600px) {
    font-size: 50px;
    text-align: initial;
    margin-left: 16px;
    margin-bottom: 10px;
  }
`

const ImageContainer = styled.div`
  grid-column: 1 / span 4;
  grid-row: 1 / span 3;

  @media only screen and (max-width: 600px) {
    max-height: 200px;
  }
  & > img {
    object-fit: cover;
    width: 100%;
    max-height: 100%;
    @media only screen and (max-width: 600px) {
      max-height: 200px;
    }
  }

  @media only screen and (max-width: 600px) {
    grid-column: 1;
    grid-row: 2;
  }
`

const IconContainer = styled.div`
  width: 68px;
  height: 68px;

  @media only screen and (max-width: 600px) {
    width: 28px;
    height: 28px;
    margin-bottom: 4px;
  }
`

const FactText = styled.p`
  font-family: 'Lato', sans-serif;
  line-height: 1;
  font-size: 3rem;
  font-weight: bold;
  margin: 0;
  color: white;

  @media only screen and (max-width: 600px) {
    font-size: 15px;
  }
`

const FactSubText = styled.p`
  color: #21888d;
  font-family: 'Lato', sans-serif;
  font-size: 2.5rem;
  font-weight: 900;
  margin: 0;

  @media only screen and (max-width: 600px) {
    font-size: 15px;
  }
`

const BodyTextContainer = styled.div`
  z-index: 1;
  background-color: #5ecdd3;
  grid-column: 4 / span 4;
  grid-row: 2 / span 2;
  border-radius: 3px;
  padding: 32px;
  margin-top: 32px;

  @media only screen and (max-width: 600px) {
    grid-column: 1;
    grid-row: 3;
    background-color: transparent;
    margin-top: 0;
    padding: 16px;
  }
`

const BodyText = styled.p`
  color: white;
  font-weight: 300;
  margin-top: 8px;
  font-size: 1.2rem;
  line-height: 1.5;
  font-family: 'Open Sans', sans-serif;
`

const ImageGalleryContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 960px;
  margin: 0 auto;
  -webkit-overflow-scrolling: touch;

  img:nth-child(1) {
    width: 58.3%;
    margin-right: 16px;
    margin-bottom: 16px;
  }

  img:nth-child(2) {
    width: 40%;
    margin-bottom: 16px;
  }

  img:nth-child(3) {
    width: 40%;
  }

  img:nth-child(4) {
    width: 58.3%;
    margin-left: 16px;
  }

  & > img {
    display: block;
    object-fit: cover;
    width: 100%;
    max-height: 400px;
  }

  @media only screen and (max-width: 600px) {
    flex-wrap: nowrap;
    overflow-x: auto;

    & > img {
      flex: 0 0 auto;
      margin: 0;
      height: 170px;
    }

    img:nth-child(1) {
      width: 80%;
      margin-left: 16px;
      margin-right: 8px;
    }

    img:nth-child(2) {
      width: 80%;
      margin-right: 8px;
    }

    img:nth-child(3) {
      width: 80%;
      margin-right: 8px;
    }

    img:nth-child(4) {
      width: 80%;
      margin: 0;
      margin-right: 8px;
      padding-right: 16px;
    }
  }
`

export default class Country extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isLightBoxOpen: false }
  }

  render() {
    const { data } = this.props

    const post = data.markdownRemark
    let images = [
      'https://via.placeholder.com/621x414',
      'https://via.placeholder.com/489x414',
      'https://via.placeholder.com/621x414',
      'https://via.placeholder.com/489x414',
    ]

    if (
      post.frontmatter.hasOwnProperty('images') &&
      post.frontmatter.images !== null &&
      post.frontmatter.images !== '' &&
      post.frontmatter.images.includes('|')
    ) {
      const tempImages = post.frontmatter.images.split('|')

      if (typeof tempImages[0] !== 'undefined') {
        images[0] = tempImages[0]
      }

      if (typeof tempImages[1] !== 'undefined') {
        images[1] = tempImages[1]
      }

      if (typeof tempImages[2] !== 'undefined') {
        images[2] = tempImages[2]
      }

      if (typeof tempImages[3] !== 'undefined') {
        images[3] = tempImages[3]
      }
    }

    let lastSlotIcon
    let valutaText
    let rateText

    if (post.frontmatter.valuta === 'euro') {
      lastSlotIcon = <Burger width="100%" height="100%" />
      valutaText = <FactText>{post.frontmatter.bigmac_index}</FactText>
      rateText = <FactSubText>euro</FactSubText>
    } else {
      lastSlotIcon = <Money width="100%" height="100%" />
      valutaText = (
        <FactText>
          {post.frontmatter.rate} {post.frontmatter.valuta}
        </FactText>
      )
      rateText = <FactSubText>1 euro</FactSubText>
    }

    return (
      <Layout>
        <Container>
          <Helmet>
            <meta name="robots" content="noindex" />
          </Helmet>
          <div />
          <TitleContainer>
            <Title>{post.frontmatter.title}</Title>
          </TitleContainer>
          <ImageContainer
            onClick={() => {
              typeof window !== 'undefined' &&
                typeof window.gtag !== 'undefined' &&
                window.gtag('event', 'zoom_in', {
                  event_category: 'Intro image',
                })
              this.setState({ isLightBoxOpen: true })
            }}
          >
            <img
              src={post.frontmatter.introimage}
              alt={post.frontmatter.title}
            />
          </ImageContainer>
          {this.state.isLightBoxOpen && (
            <Lightbox
              mainSrc={post.frontmatter.introimage}
              onCloseRequest={() => this.setState({ isLightBoxOpen: false })}
            />
          )}
          <BodyTextContainer>
            <BodyText>{post.frontmatter.introtext}</BodyText>
          </BodyTextContainer>
        </Container>
        <FactsContainer>
          <IconContainer>
            <Globe width="100%" height="100%" />
          </IconContainer>
          <IconContainer>
            <People width="100%" height="100%" />
          </IconContainer>
          <IconContainer>{lastSlotIcon}</IconContainer>
          <div>
            <FactText>{post.frontmatter.surface}</FactText>
          </div>
          <div>
            <FactText>{post.frontmatter.inhabitants}</FactText>
          </div>
          <div>{valutaText}</div>
          <div>
            <FactSubText>km2</FactSubText>
          </div>
          <div>
            <FactSubText>inwoners</FactSubText>
          </div>
          <div>{rateText}</div>
        </FactsContainer>{' '}
        <WhatYouNeedToKnow
          title={'Wat je moet weten'}
          floatLeft={false}
          factText={post.frontmatter.fact_one_text}
          text={post.frontmatter.need_to_know_text}
        />
        <ImageGalleryContainer>
          <img src={images[0]} alt="First gallery" />
          <img src={images[1]} alt="Second gallery" />
          <img src={images[2]} alt="Third gallery" />
          <img src={images[3]} alt="Fourth gallery" />
        </ImageGalleryContainer>
        {/* <ImageGalleryFirstRow>
          <img src={images[0]} alt="First gallery" />
          <img src={images[1]} alt="Second gallery" />
        </ImageGalleryFirstRow>
        <ImageGallerySecondRow>
          <img src={images[2]} alt="Third gallery" />
          <img src={images[3]} alt="Fourth gallery" />
        </ImageGallerySecondRow> */}
        <WhatYouNeedToKnow
          title={'Wat je verder moet weten'}
          floatLeft={true}
          factText={post.frontmatter.fact_two_text}
          text={post.frontmatter.need_to_know_more_text}
        />
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
        introtext
        introimage
        surface
        inhabitants
        rate
        valuta
        need_to_know_text
        need_to_know_more_text
        fact_one_text
        fact_two_text
        bigmac_index
        images
      }
    }
  }
`
