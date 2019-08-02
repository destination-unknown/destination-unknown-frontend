import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

const LandContainer = styled.div`
  background: #63e0e6;
  font-family: 'Open Sans', sans-serif;
`

const LandGridContainer = styled.div`
  display: grid;
  grid-template-columns: 42% 10% 3% 45%;
  margin: 0 auto;
  max-width: 960px;
  padding: 64px 16px;
  @media only screen and (max-width: 600px) {
    grid-template-columns: 100%;
    grid-template-rows: 28% 1fr;
    padding: 16px;
  }
`

const LandCount = styled.p`
  color: white;
  font-family: 'Lato', sans-serif;
  font-size: 10rem;
  font-weight: 900;
  margin: 0;
  padding-top: 16px;
  @media only screen and (max-width: 600px) {
    font-size: 6.5rem;
  }
`

const LandSubTitle = styled.p`
  color: #21888d;
  font-family: 'Lato', sans-serif;
  font-size: 3.5rem;
  font-weight: 900;
  margin: 0;
  @media only screen and (max-width: 600px) {
    font-size: 2.5rem;
  }
`

const LandImageContainer = styled.div`
  margin-top: 64px;
  grid-area: 1 / 1 / span 2 / span 3;
  @media only screen and (max-width: 600px) {
    margin-top: 16px;
    grid-area: 1 / 1;
  }
`

const LandCountContainer = styled.div`
  grid-area: 1 / 2 / auto / span 3;
  z-index: 2;
  @media only screen and (max-width: 600px) {
    grid-area: 1 / 1;
  }
`

const LandTextContainer = styled.div`
  grid-area: 2 / 3 / auto / span 3;
  z-index: 2;
  @media only screen and (max-width: 600px) {
    grid-area: 2 / 1;
  }
`

const SubTitle = styled.p`
  color: white;
  margin-top: 8px;
  line-height: 1.5;
`

const CountryBlock = ({ handleClick }) => (
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
    render={data => (
      <LandContainer>
        <LandGridContainer>
          <LandImageContainer>
            <Img fluid={data.landImage.childImageSharp.fluid} />
          </LandImageContainer>
          <LandCountContainer>
            <LandCount>195</LandCount>
          </LandCountContainer>
          <LandTextContainer>
            <LandSubTitle>landen zijn er in de wereld</LandSubTitle>
            <SubTitle>
              Zoveel verschillende landen. Zoveel landen om uit te kiezen. Geen
              idee waar je naartoe wilt? Wees niet bang. Wij helpen je graag om
              dat ene vakantieland te kiezen. Het enige wat jij hoeft te doen is
              de vragenlijst in te vullen. Wij doen de rest.
            </SubTitle>
          </LandTextContainer>
        </LandGridContainer>
      </LandContainer>
    )}
  />
)

export default CountryBlock
