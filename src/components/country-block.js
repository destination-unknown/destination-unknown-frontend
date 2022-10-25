import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import { GatsbyImage } from 'gatsby-plugin-image'

const LandContainer = styled.div`
  background: white;
  font-family: 'Open Sans', sans-serif;
`

const LandGridContainer = styled.div`
  display: grid;
  grid-template-columns: 42% 10% 3% 35%;
  margin: 0 auto;
  max-width: 1200px;
  padding: 64px 16px;
  @media only screen and (max-width: 600px) {
    grid-template-columns: 100%;
    padding: 16px;
  }
`

const LandSubTitle = styled.p`
  color: #121212;
  font-family: 'Lato', sans-serif;
  font-size: 3.5rem;
  font-weight: 900;
  margin: 0;
  z-index: 2;
  @media only screen and (max-width: 600px) {
    font-size: 2.5rem;
    position: relative;
    top: 20px;
    padding-left: 16px;
  }
`

const LandImageContainer = styled.div`
  margin-top: 64px;
  grid-area: 1 / 1 / span 2 / span 3;
  @media only screen and (max-width: 600px) {
    margin-top: 0;
    grid-area: 2 / 1;
    & img {
      border-radius: 6px;
    }
  }
`

const LandTextContainer = styled.div`
  grid-area: 1 / 3 / auto / span 2;
  position: relative;
  @media only screen and (max-width: 600px) {
    grid-area: 1 / 1;
  }
`

const SubTitle = styled.p`
  color: #6e6e6e;
  margin-left: 50px;
  margin-top: 8px;
  line-height: 1.5;
  font-size: 1.1rem;
  @media only screen and (max-width: 600px) {
    margin-top: 16px;
    margin-left: 0;
    font-size: 1rem;
  }
`

export const PureCountryBlock = ({ data }) => (
  <LandContainer>
    <LandGridContainer>
      <LandImageContainer>
        <GatsbyImage
          image={data.landscapeImage.childImageSharp.gatsbyImageData}
          alt=""
        />
      </LandImageContainer>
      <LandTextContainer>
        <LandSubTitle>195 LANDEN ZIJN ER IN DE WERELD</LandSubTitle>
      </LandTextContainer>
      <SubTitle>
        Zoveel verschillende landen. Zoveel landen om uit te kiezen. Geen idee
        waar je naartoe wilt? Wees niet bang. Wij helpen je graag om een
        vakantieland te kiezen. Het enige wat jij hoeft te doen is de
        vragenlijst in te vullen. Wij doen de rest.
      </SubTitle>
    </LandGridContainer>
  </LandContainer>
)

const CountryBlock = () => {
  return (
    <StaticQuery
      query={graphql`
        query {
          landscapeImage: file(relativePath: { eq: "landscape.jpg" }) {
            childImageSharp {
              gatsbyImageData(layout: FULL_WIDTH)
            }
          }
        }
      `}
      render={(data) => <PureCountryBlock data={data} />}
    />
  )
}

export default CountryBlock
