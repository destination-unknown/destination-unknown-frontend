import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import styled from 'styled-components'
import Inspiration from '../images/inspiration.svg'
import { graphql } from 'gatsby'
import WhatYouNeedToKnow from '../components/what-you-need-to-know'
import Lightbox from 'react-image-lightbox'
import 'react-image-lightbox/style.css'
import { lighten, darken } from 'polished'
import { keyframes } from 'styled-components'
import Check from '../images/check.svg'
import OopsPage from '../components/oops-page'
import { Helmet } from 'react-helmet'
import './country.css'

const BackgroundContainer = styled.div`
  background-color: white;
`

const Container = styled.div`
  padding: 16px 32px;
  padding-top: 60px;
  max-width: 1200px;
  display: grid;
  grid-template-columns: 60% 40%;
  grid-row-gap: 24px;
  grid-template-rows: auto auto;
  font-family: 'Open Sans', sans-serif;
  margin: 0 auto;
  margin-bottom: 32px;
  border-bottom: 1px solid #e9eaea;
  @media only screen and (max-width: 600px) {
    grid-row-gap: 8px;
    grid-template-columns: 100%;
    padding: 0;
    grid-template-rows: repeat(4, auto);
  }
`

const WhatYouNeedToKnowContainer = styled.div`
  background: #f5f8fb;
  padding-top: 32px;
  padding-bottom: 32px;
`

const TitleContainer = styled.div`
  grid-column: 1;
  grid-row: 1;
  @media only screen and (max-width: 600px) {
    grid-row: 2;
  }
`

const Title = styled.h1`
  text-transform: uppercase;
  font-family: 'Lato', sans-serif;
  line-height: 1;
  font-size: 4rem;
  font-weight: bold;
  margin: 0;
  color: #26888c;

  @media only screen and (max-width: 1000px) {
    font-size: 3rem;
  }

  @media only screen and (max-width: 800px) {
    font-size: 2.5rem;
  }

  @media only screen and (max-width: 700px) {
    font-size: 2rem;
  }
  @media only screen and (max-width: 600px) {
    font-size: 50px;
    text-align: initial;
    margin-left: 16px;
  }
`

const ImageContainer = styled.div`
  grid-column: 1;

  @media only screen and (max-width: 600px) {
    max-height: 200px;
  }
  & > img {
    min-height: 400px;
    object-fit: cover;
    width: 100%;
    max-height: 100%;
    border-radius: 6px;
    @media only screen and (max-width: 600px) {
      border-radius: 0;
      min-height: initial;
      max-height: 200px;
    }
  }

  @media only screen and (max-width: 600px) {
    grid-column: 1;
    grid-row: 1;
  }
`

const BodyTextContainer = styled.div`
  z-index: 1;
  grid-column: 2;
  grid-row: 2;
  padding: 0 48px;
  color: #6e6e6e;

  @media only screen and (max-width: 600px) {
    grid-column: 1;
    grid-row: 3;
    background-color: transparent;
    margin-top: 0;
    padding: 16px;
  }
`

const BodyText = styled.p`
  margin-top: 8px;
  font-size: 1rem;
  line-height: 1.5;
  font-family: 'Open Sans', sans-serif;
`

const ImageGalleryContainer = styled.div`
  display: grid;
  grid-template-columns: 55% auto;
  grid-template-rows: 40% 30% 30%;
  max-width: 1200px;
  margin: 0 auto;
  grid-column-gap: 32px;
  margin-bottom: 150px;
  padding: 0 16px;

  & > img {
    display: block;
    object-fit: cover;
    width: 100%;
    max-height: 400px;
    border-radius: 6px;
  }

  @media only screen and (max-width: 600px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto auto;
    padding: 12px;
    margin-bottom: 0;
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
  right: 0;
  bottom: 0;
  width: calc(100% - 16px);
  height: 56px;
  line-height: 56px;
  padding-left: 16px;
  text-decoration: none;
  display: inline-block;
  font-weight: bold;
  background-color: #febd2c;
  border: none;
  border-radius: 32px;
  text-align: center;
  border-bottom: 1px solid #b0781b;
  color: #161003;
  margin-top: 48px;
  position: relative;
  font-family: 'Open Sans', sans-serif;

  @media only screen and (max-width: 600px) {
    padding-left: 8px;
    padding-right: 8px;
  }

  &:hover {
    cursor: pointer;
    color: ${darken(0.2, '#161003')};
    background-color: ${darken(0.15, '#FEBD2C')};
  }

  &.is-loading:after {
    animation: ${loading} 1s infinite;
    background-color: ${darken(0.1, '#FEBD2C')};
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
    background-color: ${lighten(0.1, '#FEBD2C')};
    border-bottom: 1px solid ${lighten(0.1, '#b0781b')};
    outline: 0;
  }
`

const InspirationContainer = styled.div`
  margin-right: 16px;
  grid-column-start: main-start;
  grid-column-end: main-end 7;
  grid-row: 3;
  text-align: center;

  @media only screen and (max-width: 600px) {
    position: static;
    top: 0;
    grid-column: 1;
    grid-row: auto;
  }
`

const CaptionTitle = styled.p`
  display: none;
  text-transform: uppercase;
  font-family: 'Lato', sans-serif;
  line-height: 1;
  font-size: 2.5rem;
  font-weight: bold;
  margin: 0;
  margin-bottom: 24px;
  color: white;

  @media only screen and (max-width: 992px) {
    display: block;
  }
`

const CaptionText = styled.p`
  color: #5c5c5c;
  font-family: 'Open Sans';
  margin: 0;
`

const CaptionSubText = styled.a`
  color: #18888e;
  font-weight: 400;
  font-family: 'Open Sans';
  margin: 0;
`

const AffiliateContainer = styled.div`
  max-width: 1200px;
  margin: 32px auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 40px;
  padding: 0 8px;

  @media only screen and (max-width: 1200px) {
    padding: 0 16px;
  }

  @media only screen and (max-width: 600px) {
    grid-template-columns: auto;
    grid-template-rows: auto auto auto;
  }
`

const AffiliateBlock = styled.div`
  border: 1px solid lightgrey;
  display: inline-block;
  padding: 30px;
  background-color: white;
  border-radius: 3px;
`

const AffiliateTitle = styled.p`
  font-family: 'Open Sans', sans-serif;
  line-height: 1;
  font-size: 1.2rem;
  padding-bottom: 10px;
  font-weight: bold;
  margin: 0;
  color: #353535;
`

const CheckmarkText = styled.span`
  font-weight: 600;
  color: #616161;
  font-family: 'Open Sans', sans-serif;
`

const MobileCheckmark = styled.div`
  display: none;
  @media only screen and (max-width: 600px) {
    display: block;
    text-align: center;
    padding-top: 16px;
    padding-bottom: 18px;
  }
`

const ImagesContainer = styled.div`
  display: grid;
  grid-template-columns: 30% 20% auto;
  grid-template-rows: 15% min-content;
  grid-column-gap: 48px;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  padding: 0 16px;
  max-height: 600px;
  @media only screen and (max-width: 600px) {
    grid-template-rows: auto auto auto;
    grid-template-columns: 1fr;
    display: block;
    max-height: initial;
  }
`

const ImagesTitle = styled.h2`
  position: absolute;
  top: -30px;
  font-size: 3.5rem;
  text-transform: uppercase;
  font-family: 'Open Sans', sans-serif;
  color: #111111;
  grid-area: 1 / 1 / auto / span 2;
  z-index: 2;
  margin: 0;
  @media only screen and (max-width: 600px) {
    grid-area: 1 / 1;
    margin-left: 16px;
    font-size: 2.2rem;
    top: -65px;
  }
`

const ImagesDescription = styled.p`
  color: #737474;
  font-family: 'Open Sans', sans-serif;
  grid-area: 2 / 1;
  margin: 0;
  width: 100%;
  @media only screen and (max-width: 600px) {
    grid-area: 2 / 1;
    padding: 24px 0;
  }
`

const ImagesImage = styled.img`
  grid-area: 1 / 2 / 2 / 4;
  border-radius: 6px;
  width: 100%;
`

const ImageGalleryTitle = styled.h2`
  font-size: 3.5rem;
  text-transform: uppercase;
  font-family: 'Open Sans', sans-serif;
  color: #111111;
  margin: 0;
  z-index: 2;
  position: relative;
  top: -50px;
  left: -130px;
  @media only screen and (max-width: 600px) {
    margin-left: 16px;
    font-size: 2.2rem;
    top: -65px;
    grid-area: 2 / 1;
    left: 0;
    top: -15px;
  }
`

const ImageGalleryFirstImage = styled.img`
  grid-area: 1 / 1 / span 2 / auto;
  @media only screen and (max-width: 600px) {
    grid-area: 1 / 1;
  }
`

const ImageGallerySecondImage = styled.img`
  grid-area: 2 / 2 / 2 / 2;

  @media only screen and (max-width: 600px) {
    grid-area: 3 / 1;
  }
`

export default class Country extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isLightBoxOpen: false, lightBoxImage: null }
  }

  render() {
    const { data } = this.props
    const {
      carsLink,
      carsPrice,
      flightsLink,
      flightsPrice,
      hotelsLink,
      hotelsPrice,
    } = this.props.pageContext

    const post = data.markdownRemark

    if (
      post.frontmatter.rate === '' &&
      post.frontmatter.valuta === '' &&
      post.frontmatter.surface === ''
    ) {
      return (
        <div>
          <Helmet>
            <meta name="robots" content="noindex" />
          </Helmet>
          <OopsPage
            title={post.frontmatter.title}
            introimage={post.frontmatter.introimage}
            introtext={post.frontmatter.introtext}
          />
        </div>
      )
    }

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

    return (
      <Layout isIndex={false} position={'fixed'} backgroundColor={'#f5f8fb'}>
        <SEO
          description={null}
          lang={'nl-NL'}
          meta={[]}
          keywords={[]}
          title={post.frontmatter.title}
        />
        <BackgroundContainer>
          {' '}
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
              <div>
                <Check
                  height={24}
                  width={24}
                  style={{
                    position: 'relative',
                    top: '0.5em',
                    paddingRight: '4px',
                  }}
                />
                <CheckmarkText>Heerlijk tot rust komen</CheckmarkText>
              </div>
              <div>
                <Check
                  height={24}
                  width={24}
                  style={{
                    position: 'relative',
                    top: '0.5em',
                    paddingRight: '4px',
                  }}
                />
                <CaptionSubText
                  href={post.frontmatter.inspiration_url}
                  rel="nofollow"
                  target="_blank"
                >
                  Ontdek de Lonely Planet boeken over {post.frontmatter.title}
                </CaptionSubText>
              </div>
              <div>
                <Check
                  height={24}
                  width={24}
                  style={{
                    position: 'relative',
                    top: '0.5em',
                    paddingRight: '4px',
                  }}
                />
                <CheckmarkText>Voor de echte cultuur liefhebbers</CheckmarkText>
              </div>
            </BodyTextContainer>
          </Container>
        </BackgroundContainer>
        <AffiliateContainer>
          <AffiliateBlock>
            <AffiliateTitle>
              <span style={{ marginRight: '12px' }}>✈️</span> Vliegen
            </AffiliateTitle>
            <CaptionText>
              Vind de goedkoopste vliegtickets naar {post.frontmatter.title}
              !&nbsp;
              {flightsPrice && (
                <CaptionSubText
                  href={flightsLink}
                  rel="nofollow"
                  target="_blank"
                >
                  Retour vanaf {flightsPrice} euro
                </CaptionSubText>
              )}
              {!flightsPrice && (
                <CaptionSubText
                  href={flightsLink}
                  rel="nofollow"
                  target="_blank"
                >
                  Bekijk hier alle vluchten
                </CaptionSubText>
              )}
            </CaptionText>
            <Button
              href={flightsLink}
              onClick={() => {
                typeof window !== 'undefined' &&
                  typeof window.gtag !== 'undefined' &&
                  window.gtag('event', 'click', {
                    event_category: 'Check flights button',
                    event_label: post.frontmatter.title,
                  })
              }}
              target="_blank"
              rel="nofollow"
            >
              Check vluchtprijzen
            </Button>
          </AffiliateBlock>
          <MobileCheckmark>
            <Check
              height={24}
              width={24}
              style={{
                position: 'relative',
                top: '0.5em',
                paddingRight: '4px',
              }}
            />
            <CheckmarkText>Heerlijk tot rust komen</CheckmarkText>
          </MobileCheckmark>
          <AffiliateBlock>
            <AffiliateTitle>
              <span style={{ marginRight: '12px' }}>🛏️</span> Over nachten
            </AffiliateTitle>
            <CaptionText>
              Vind jouw perfecte accomodatie in {post.frontmatter.title}!&nbsp;
              {hotelsPrice && (
                <CaptionSubText
                  href={hotelsLink}
                  rel="nofollow"
                  target="_blank"
                >
                  Prijzen vanaf {hotelsPrice} euro per nacht.
                </CaptionSubText>
              )}
              {!hotelsPrice && (
                <CaptionSubText
                  href={hotelsLink}
                  rel="nofollow"
                  target="_blank"
                >
                  Check hier alle hotels
                </CaptionSubText>
              )}
            </CaptionText>
            <Button
              href={hotelsLink}
              onClick={() => {
                typeof window !== 'undefined' &&
                  typeof window.gtag !== 'undefined' &&
                  window.gtag('event', 'click', {
                    event_category: 'Check hotels button',
                    event_label: post.frontmatter.title,
                  })
              }}
              target="_blank"
              rel="nofollow"
            >
              Check alle hotels
            </Button>
          </AffiliateBlock>
          <MobileCheckmark>
            <Check
              height={24}
              width={24}
              style={{
                position: 'relative',
                top: '0.5em',
                paddingRight: '4px',
              }}
            />
            <CaptionSubText
              href={post.frontmatter.inspiration_url}
              rel="nofollow"
              target="_blank"
            >
              Ontdek de Lonely Planet boeken over {post.frontmatter.title}
            </CaptionSubText>
          </MobileCheckmark>
          <AffiliateBlock>
            <AffiliateTitle>
              <span style={{ marginRight: '12px' }}>🚗</span> Auto huren
            </AffiliateTitle>
            <CaptionText>
              Maak een mooie rondreis in {post.frontmatter.title} en huur een
              auto!&nbsp;
              {carsPrice && (
                <CaptionSubText href={carsLink} rel="nofollow" target="_blank">
                  Al vanaf {carsPrice} euro per dag
                </CaptionSubText>
              )}
              {!carsPrice && (
                <CaptionSubText href={carsLink} rel="nofollow" target="_blank">
                  Check hier het aanbod!
                </CaptionSubText>
              )}
            </CaptionText>
            <Button
              href={carsLink}
              onClick={() => {
                typeof window !== 'undefined' &&
                  typeof window.gtag !== 'undefined' &&
                  window.gtag('event', 'click', {
                    event_category: 'rent car button',
                    event_label: post.frontmatter.title,
                  })
              }}
              target="_blank"
              rel="nofollow"
            >
              Huur een auto
            </Button>
          </AffiliateBlock>
          <MobileCheckmark>
            <Check
              height={24}
              width={24}
              style={{
                position: 'relative',
                top: '0.5em',
                paddingRight: '4px',
              }}
            />
            <CheckmarkText>Voor de echte cultuur liefhebbers</CheckmarkText>
          </MobileCheckmark>
        </AffiliateContainer>
        <WhatYouNeedToKnowContainer>
          <ImagesContainer>
            <ImagesTitle>Sprookjesachtig mooi</ImagesTitle>
            <ImagesImage
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
            <ImagesDescription style={{ gridArea: '2 / 1', margin: '0' }}>
              "At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti quos
              dolores et quas molestias excepturi sint occaecati cupiditate non
              provident, similique sunt in culpa qui officia deserunt mollitia
              animi, id est laborum et dolorum fuga. Et harum quidem rerum
              facilis est et expedita distinctio. Nam libero tempore, cum soluta
              nobis est eligendi optio cumque nihil impedit quo minus id quod
              maxime placeat facere possimus, omnis voluptas assumenda est,
              omnis dolor repellendus. Temporibus autem quibusdam et aut
              officiis debitis aut rerum necessitatibus saepe eveniet ut et
              voluptates repudiandae sint et molestiae non recusandae. Itaque
              earum rerum hic tenetur a sapiente delectus, ut aut reiciendis
              voluptatibus maiores alias consequatur aut perferendis doloribus
              asperiores repellat."
            </ImagesDescription>
          </ImagesContainer>
          <ImageGalleryContainer>
            <ImageGalleryFirstImage
              src={images[3]}
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
            <ImageGalleryTitle>
              {post.frontmatter.title} adembenemend
            </ImageGalleryTitle>
            <ImageGallerySecondImage
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
          </ImageGalleryContainer>
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
        inspiration_url
      }
    }
  }
`
