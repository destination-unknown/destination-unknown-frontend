import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import Airplane from '../images/airplane_fly.svg'
import Img from 'gatsby-image'

const Container = styled.div`
  background: white;
  font-family: 'Open Sans', sans-serif;
`

const GridContainer = styled.div`
  display: grid;
  grid-template-rows: 62% 15% 20%;
  grid-template-columns: 15% 40% 25% 20%;
  margin: 0 auto;
  max-width: 1200px;
  padding: 64px 16px;
  @media only screen and (max-width: 600px) {
    grid-template-columns: 100%;
    grid-template-rows: 28% 1fr;
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
  margin: 64px;
  grid-area: 1 / 1 / auto / span 4;
  @media only screen and (max-width: 600px) {
    display: none;
    margin-top: 16px;
    grid-area: 1 / 1;
  }
`

const TitleContainer = styled.div`
  grid-area: 2 / 2 / auto / span 1;
  z-index: 2;
  @media only screen and (max-width: 600px) {
    grid-area: 1 / 1;
  }
`

const ContentContainer = styled.div`
  font-size: 1.2rem;
  grid-area: 3 / 2 / auto / span 2;
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

export const PureTravelBlock = ({ data }) => (
  <Container>
    <GridContainer>
      <ImageContainer>
        <Img fluid={data.boatImage.childImageSharp.fluid} />
      </ImageContainer>
      <TitleContainer>
        <Title>SPIJT ZOU ZONDE ZIJN</Title>
      </TitleContainer>
      <ContentContainer>
        <Content>
          Er zijn helaas altijd reizigers die spijt hebben van hun gekozen
          vakantiebestemming. Zonde, want dat is natuurlijk helemaal niet nodig!
          Reizen is het mooiste wat er is. De juiste richting kan daarentegen
          wel eens moeilijk te bepalen zijn. Wij bieden graag onze hulp aan
          zodat jij de kans krijgt nieuwe, voor jou ideale vakantiebestemmingen
          te ontdekken!
        </Content>
      </ContentContainer>
    </GridContainer>
  </Container>
)

const TravelBlock = () => {
  return (
    <StaticQuery
      query={graphql`
        query {
          boatImage: file(relativePath: { eq: "boat.jpg" }) {
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
