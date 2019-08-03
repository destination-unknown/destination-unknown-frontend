import React from 'react'
import Layout from '../components/layout'
// import SEO from '../components/seo'
import styled from 'styled-components'
import Globe from '../images/wereldbol-icon.svg'
import People from '../images/bevolking-icon.svg'
import Money from '../images/valuta-icon.svg'
import Burger from '../images/burger.svg'
import { graphql } from 'gatsby'
import WhatYouNeedToKnow from '../components/what-you-need-to-know'
import Lightbox from 'react-image-lightbox'
import 'react-image-lightbox/style.css'
import { lighten, darken } from 'polished'
import { keyframes } from 'styled-components'
import Airplane from '../images/airplane.svg'

const Container = styled.div`
  max-width: 960px;
  background-color: #47c0c7;
  display: grid;
  grid-template-columns: 16.6% 16.6% 16.6% 16.6% 16.6% 16.6%;
  grid-template-rows: max-content 50%;
  font-family: 'Open Sans', sans-serif;
  margin: 0 auto;
  margin-bottom: 32px;
  padding: 16px;
  padding-top: 0;
  @media only screen and (max-width: 600px) {
    grid-template-columns: 100%;
    padding: 0;
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

  @media only screen and (max-width: 600px) {
    padding: 16px;
  }
`

const WhatYouNeedToKnowContainer = styled.div`
  background: #63e0e6;
  padding-top: 32px;
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

const loading = keyframes`
  0% {
    left: 0;
    width: 0;
  }

  50% {
    left: 0;
    width: 100%;
  }

  100% {
    left: 100%;
    width: 0;
  }
`

const Button = styled.a`
  width: calc(100% - 16px);
  height: 56px;
  line-height: 56px;
  padding-left: 16px;
  text-decoration: none;
  display: inline-block;
  font-weight: 400;
  background-color: #f3a629;
  border: none;
  border-radius: 2px;
  border-bottom: 1px solid #b0781b;
  color: white;
  margin-top: 16px;
  position: relative;

  &.is-loading:after {
    animation: ${loading} 1s infinite;
    background-color: ${darken(0.1, '#f3a629')};
    content: '';
    display: block;
    height: 3px;
    left: 0;
    padding: 0;
    position: absolute;
    top: 0;
    width: 1rem;
  }

  &.is-loading {
    background-color: ${lighten(0.1, '#f3a629')};
    border-bottom: 1px solid ${lighten(0.1, '#b0781b')};
    outline: 0;
  }
`

export default class Country extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isLightBoxOpen: false, lightBoxImage: null }
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
      <Layout isIndex={false}>
        <Container>
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
              this.setState({
                isLightBoxOpen: true,
                lightBoxImage: post.frontmatter.introimage,
              })
            }}
          >
            <img
              src={post.frontmatter.introimage}
              alt={post.frontmatter.title}
            />
          </ImageContainer>
          {this.state.isLightBoxOpen && (
            <Lightbox
              mainSrc={this.state.lightBoxImage}
              onCloseRequest={() => this.setState({ isLightBoxOpen: false })}
            />
          )}
          <BodyTextContainer>
            <BodyText>{post.frontmatter.introtext}</BodyText>
            <Button href={post.frontmatter.flight_button_url} target="_blank">
              {post.frontmatter.flight_button_title}
              <Airplane
                style={{
                  height: '36',
                  width: '36',
                  position: 'absolute',
                  top: '12px',
                  fill: 'white',
                  right: '10px',
                }}
              />
            </Button>
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
        <WhatYouNeedToKnowContainer>
          <WhatYouNeedToKnow
            title={'Wat je moet weten'}
            floatLeft={false}
            factText={post.frontmatter.fact_one_text}
            text={post.frontmatter.need_to_know_text}
          />
          <ImageGalleryContainer>
            <img
              src={images[0]}
              alt="First gallery"
              onClick={() => {
                typeof window !== 'undefined' &&
                  typeof window.gtag !== 'undefined' &&
                  window.gtag('event', 'zoom_in', {
                    event_category: 'Image gallery',
                    event_label: '1',
                  })
                this.setState({
                  isLightBoxOpen: true,
                  lightBoxImage: images[0],
                })
              }}
            />
            <img
              src={images[1]}
              alt="Second gallery"
              onClick={() => {
                typeof window !== 'undefined' &&
                  typeof window.gtag !== 'undefined' &&
                  window.gtag('event', 'Image gallery', {
                    event_category: 'Intro image',
                    event_label: '2',
                  })
                this.setState({
                  isLightBoxOpen: true,
                  lightBoxImage: images[1],
                })
              }}
            />
            <img
              src={images[2]}
              alt="Third gallery"
              onClick={() => {
                typeof window !== 'undefined' &&
                  typeof window.gtag !== 'undefined' &&
                  window.gtag('event', 'zoom_in', {
                    event_category: 'Image gallery',
                    event_label: '3',
                  })
                this.setState({
                  isLightBoxOpen: true,
                  lightBoxImage: images[2],
                })
              }}
            />
            <img
              src={images[3]}
              alt="Fourth gallery"
              onClick={() => {
                typeof window !== 'undefined' &&
                  typeof window.gtag !== 'undefined' &&
                  window.gtag('event', 'zoom_in', {
                    event_category: 'Image gallery',
                    event_label: '4',
                  })
                this.setState({
                  isLightBoxOpen: true,
                  lightBoxImage: images[3],
                })
              }}
            />
          </ImageGalleryContainer>
          <WhatYouNeedToKnow
            title={'Wat je verder moet weten'}
            floatLeft={true}
            factText={post.frontmatter.fact_two_text}
            text={post.frontmatter.need_to_know_more_text}
          />
        </WhatYouNeedToKnowContainer>
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
        flight_button_title
        flight_button_url
      }
    }
  }
`
