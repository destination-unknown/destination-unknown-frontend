import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import Airplane from '../images/airplane_fly.svg'

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
  color: white;
  font-family: 'Lato', sans-serif;
  font-size: 6rem;
  font-weight: 900;
  margin: 0;
  padding-top: 16px;
  @media only screen and (max-width: 600px) {
    font-size: 3.5rem;
  }
`

const SubTitle = styled.p`
  color: #18888e;
  font-family: 'Lato', sans-serif;
  font-size: 4rem;
  font-weight: 900;
  margin: 0;
  @media only screen and (max-width: 600px) {
    font-size: 2.5rem;
  }
`

const ImageContainer = styled.div`
  margin-top: 64px;
  grid-area: 1 / 3 / span 2 / auto;
  @media only screen and (max-width: 600px) {
    display: none;
    margin-top: 16px;
    grid-area: 1 / 1;
  }
`

const TitleContainer = styled.div`
  text-align: right;
  grid-area: 1 / 1 / auto / auto;
  z-index: 2;
  @media only screen and (max-width: 600px) {
    grid-area: 1 / 1;
  }
`

const ContentContainer = styled.div`
  text-align: right;
  font-size: 1.2rem;
  grid-area: 2 / 1 / auto / auto;
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
        <Airplane fill={'white'} />
      </ImageContainer>
      <TitleContainer>
        <Title>Spijt</Title>
        <SubTitle>zou zonde zijn</SubTitle>
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
