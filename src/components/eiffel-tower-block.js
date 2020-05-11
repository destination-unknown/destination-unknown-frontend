import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import Img from 'gatsby-image'

const Container = styled.div`
  background: white;
  font-family: 'Open Sans', sans-serif;
`

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 28% 7% 65%;
  grid-column-gap: 32px;
  grid-template-rows: min-content 1fr;
  margin: 0 auto;
  max-width: 1200px;
  padding: 64px 16px;
  @media only screen and (max-width: 600px) {
    grid-template-columns: 100%;
    grid-template-rows: min-content 1fr;
    padding: 16px;
  }
`

const Title = styled.p`
  color: #121212;
  font-family: 'Lato', sans-serif;
  font-size: 3.8rem;
  font-weight: 900;
  margin: 0;
  padding-top: 16px;
  @media only screen and (max-width: 600px) {
    font-size: 3.5rem;
  }
`

const ImageContainer = styled.div`
  margin-top: 64px;
  grid-area: 1 / 2 / span 2 / span 2;

  @media only screen and (max-width: 600px) {
    display: none;
    margin-top: 16px;
    grid-area: 1 / 1;
  }
`

const TitleContainer = styled.div`
  grid-area: 1 / 1 / auto / span 2;
  z-index: 2;
  @media only screen and (max-width: 600px) {
    grid-area: 1 / 1;
  }
`

const ContentContainer = styled.div`
  grid-area: 2 / 1 / span 2 / auto;
  font-size: 1.2rem;
  z-index: 2;
  @media only screen and (max-width: 600px) {
    grid-area: 2 / 1;
  }
`

const Content = styled.p`
  color: #3c3c3c;
  margin-top: 8px;
  line-height: 1.5;
`

export const PureTravelBlock = ({ data }) => {
  return (
    <Container>
      <GridContainer>
        <ImageContainer>
          <Img fluid={data.turtleImage.childImageSharp.fluid} />
        </ImageContainer>
        <TitleContainer>
          <Title>OP ZOEK NAAR IETS ANDERS?</Title>
        </TitleContainer>
        <ContentContainer>
          <Content>
            Wist je dat bijna 80% van alle buitenlandse reizen die gemaakt
            worden door Nederlanders naar slechts 10 landen gaan? Er is nog
            zoveel meer te ontdekken dan de ‘populaire’ vakantiebestemmingen!
            <br />
            <br />
            Wil jij ontdekken welke reisbestemming bij jou past? Laat ons je
            helpen om dat ene unieke vakantieland te vinden!
          </Content>
        </ContentContainer>
      </GridContainer>
    </Container>
  )
}

const TravelBlock = () => {
  return (
    <StaticQuery
      query={graphql`
        query {
          turtleImage: file(relativePath: { eq: "turtle.jpg" }) {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid_noBase64
              }
            }
          }
        }
      `}
      render={data => <PureTravelBlock data={data} />}
    />
  )
}

export default TravelBlock
