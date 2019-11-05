import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import Travel from '../images/traveling.svg'

const Container = styled.div`
  background: #34c0c7;
  font-family: 'Open Sans', sans-serif;
`

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 42% 13% 45%;
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
  margin-top: 64px;
  grid-area: 1 / 3 / span 2 / span 3;
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
  grid-area: 2 / 1 / span 2 / auto;
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
        <Travel fill={'#18888e'} />
      </ImageContainer>
      <TitleContainer>
        <Title>Dutchies</Title>
        <SubTitle>on tour</SubTitle>
      </TitleContainer>
      <ContentContainer>
        <Content>
          Vind je het ook zo lastig om de bestemming van je reis te kiezen? Dan
          ben je vast niet de enige. Nederlanders zijn namelijk echte
          vakantieliefhebbers. Meer dan 80% van de Nederlanders gaat minstens 1
          keer per jaar op vakantie! Gemiddeld maken Nederlanders twee keer per
          jaar een reis naar het buitenland. Dit hoeft gelukkig niet te
          betekenen dat je overal ter wereld Nederlanders tegenkomt...
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
