import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import DestinationUnknown from '../images/destinationunknown.svg'

const Container = styled.div`
  background: #63e0e6;
  font-family: 'Open Sans', sans-serif;
`

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 42% 18% 40%;
  grid-template-rows: min-content 1fr;
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
  color: #18888e;
  font-family: 'Lato', sans-serif;
  font-size: 5rem;
  font-weight: 900;
  margin: 0;
  padding-top: 16px;
  @media only screen and (max-width: 600px) {
    font-size: 3.5rem;
  }
`

const SubTitle = styled.p`
  color: white;
  font-family: 'Lato', sans-serif;
  font-size: 5.5rem;
  font-weight: 900;
  margin: 0;
  @media only screen and (max-width: 600px) {
    font-size: 2.5rem;
  }
`

const ImageContainer = styled.div`
  grid-area: 1 / 1 / span 2 / auto;
  @media only screen and (max-width: 600px) {
    display: none;
    margin-top: 16px;
    grid-area: 1 / 1;
  }
`

const TitleContainer = styled.div`
  grid-area: 1 / 2 / auto / span 3;
  z-index: 2;
  @media only screen and (max-width: 600px) {
    grid-area: 1 / 1;
  }
`

const ContentContainer = styled.div`
  font-size: 1.2rem;
  grid-area: 2 / 2 / span 2 / span 2;
  z-index: 2;
  @media only screen and (max-width: 600px) {
    grid-area: 2 / 1;
  }
`

const Content = styled.p`
  color: white;
  margin-top: 8px;
  line-height: 1.5;
`

export const PureTravelBlock = ({ data }) => (
  <Container>
    <GridContainer>
      <ImageContainer>
        <DestinationUnknown width={'85%'} height={'100%'} fill={'#FFD628'} />
      </ImageContainer>
      <TitleContainer>
        <Title>Destination</Title>
        <SubTitle>Unknown</SubTitle>
      </TitleContainer>
      <ContentContainer>
        <Content>
          Wij begrijpen dat het moeilijk is om te bepalen waar naartoe je op
          vakantie moet. Destination Unknown helpt je om jouw ideale
          reisbestemming te vinden. Beantwoord een aantal vragen en wij geven je
          een land terug dat zeker de moeite waard is om te bezoeken. Het leuke
          is dat er heel veel landen zijn en zijn er dus altijd landen waar je
          zelf nog nooit aan gedacht had!
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
          landImage: file(relativePath: { eq: "wereldkaart.png" }) {
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
