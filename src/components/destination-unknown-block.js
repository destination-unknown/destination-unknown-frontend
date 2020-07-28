import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import Staircase from '../images/staircase.jpg'

const Container = styled.div`
  background-image: url(${Staircase});
  background-size: cover;
  background-position: center center;
  font-family: 'Open Sans', sans-serif;
  padding: 120px 60px;
  @media only screen and (max-width: 600px) {
    padding: 16px;
    height: 500px;
  }
`

const GridContainer = styled.div`
  display: grid;
  background-color: white;
  grid-template-columns: 40% 60%;
  grid-template-rows: min-content 1fr;
  margin-left: auto;
  max-width: 500px;
  padding: 60px 80px;
  @media only screen and (max-width: 600px) {
    position: relative;
    top: -50px;
    grid-template-columns: 100%;
    grid-template-rows: 28% 1fr;
    padding: 16px;
    background-color: #4ec0c6;
    border-radius: 6px;
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
    font-size: 2.5rem;
    color: white;
  }
`

const TitleContainer = styled.div`
  grid-area: 1 / 1 / auto / span 3;
  z-index: 2;
  @media only screen and (max-width: 600px) {
    grid-area: 1 / 1;
  }
`

const ContentContainer = styled.div`
  font-size: 1.2rem;
  grid-area: 2 / 1 / span 2 / span 2;
  z-index: 2;
  @media only screen and (max-width: 600px) {
    grid-area: 2 / 1;
  }
`

const Content = styled.p`
  color: #6e6e6e;
  font-size: 1rem;
  margin-top: 8px;
  line-height: 1.8;
  @media only screen and (max-width: 600px) {
    color: white;
  }
`

export const PureTravelBlock = ({ data }) => (
  <Container>
    <GridContainer>
      <TitleContainer>
        <Title>DESTINATION UNKNOWN</Title>
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
