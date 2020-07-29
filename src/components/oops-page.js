import React from 'react'
import Layout from '../components/layout'
import styled from 'styled-components'
import Lightbox from 'react-image-lightbox'
import 'react-image-lightbox/style.css'

const Container = styled.div`
  background-color: #47c0c7;
  display: grid;
  grid-template-columns:
    [full-start] minmax(1em, 1fr)
    repeat(12, [main-start] minmax(0, 80px) [main-end]) minmax(1em, 1fr) [full-end];
  grid-template-rows: max-content 50%;
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

const TitleContainer = styled.div`
  grid-column-start: main-start 8;
  grid-column-end: main-end 12;
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
    margin-bottom: 40px;
  }
`

const ImageContainer = styled.div`
  margin-top: -20px;
  grid-column-start: full-start;
  grid-column-end: main-end 6;
  grid-row: 2;

  @media only screen and (max-width: 600px) {
    max-height: 200px;
  }
  & > img {
    min-height: 400px;
    object-fit: cover;
    width: 100%;
    max-height: 100%;
    @media only screen and (max-width: 600px) {
      min-height: initial;
      max-height: 200px;
    }
  }

  @media only screen and (max-width: 600px) {
    grid-column: 1;
    grid-row: 2;
  }
`

const BodyTextContainer = styled.div`
  z-index: 1;
  background-color: #5ecdd3;
  grid-column-start: main-start 6;
  grid-column-end: main-end 12;
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

export default class OopsPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isLightBoxOpen: false, lightBoxImage: null }
  }

  render() {
    const { title, introimage, introtext } = this.props

    return (
      <Layout isIndex={false} position={'fixed'}>
        <Container>
          <div />
          <TitleContainer>
            <Title>{title}</Title>
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
                lightBoxImage: introimage,
              })
            }}
          >
            <img src={introimage} alt={title} />
          </ImageContainer>
          {this.state.isLightBoxOpen && (
            <Lightbox
              mainSrc={this.state.lightBoxImage}
              onCloseRequest={() => this.setState({ isLightBoxOpen: false })}
            />
          )}
          <BodyTextContainer>
            <BodyText>{introtext}</BodyText>
          </BodyTextContainer>
        </Container>
      </Layout>
    )
  }
}
