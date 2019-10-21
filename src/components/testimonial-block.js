import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

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

const SubTitle = styled.p`
  color: white;
  margin-top: 8px;
  line-height: 1.5;
`

const TestimonialContainer = styled.div`
  background: #34c0c7;
  font-family: 'Open Sans', sans-serif;
`

const TestimonialGridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  margin: 0 auto;
  max-width: 1200px;
  padding: 64px 16px;
  @media only screen and (max-width: 600px) {
    grid-template-columns: 100%;
  }
`

const TestimonialSubTitleContainer = styled.div`
  @media only screen and (max-width: 600px) {
    display: block;
  }
`

const TestimonialContentContainer = styled.div`
  background-color: #f3a629;
  border-radius: 2px;
  border-bottom: 1px solid #b0781b;
  color: white;
  padding-top: 40px;
  padding-left: 64px;
  padding-right: 64px;
  margin-top: 16px;
  @media only screen and (max-width: 600px) {
    width: 92%;
    padding: 16px;
  }
`

const TestimonialTitle = styled.h2`
  font-family: 'Lato', sans-serif;
  line-height: 1;
  font-size: 3.5rem;
  font-weight: bold;
  margin: 0;
  color: white;
  @media only screen and (max-width: 600px) {
    font-size: 2rem;
  }
`

const BusImage = styled.div`
  display: block;
  width: 440px;
  height: 200px;
  position: relative;
  @media only screen and (max-width: 600px) {
    width: initial;
    height: initial;
  }
`

const TestimonialBlock = ({ handleClick }) => (
  <StaticQuery
    query={graphql`
      query {
        mobileBusImage: file(relativePath: { eq: "busje.png" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_noBase64
            }
          }
        }
      }
    `}
    render={data => (
      <TestimonialContainer>
        <TestimonialGridContainer>
          <div>
            <LandSubTitle>Vele reizigers zijn je al voor gegaan</LandSubTitle>
            <TestimonialContentContainer>
              <TestimonialTitle>
                &lsquo;Precies wat ik zocht&rsquo;
              </TestimonialTitle>
              <TestimonialSubTitleContainer>
                <SubTitle style={{ paddingBottom: `16px` }}>
                  Ik kon maar niet kiezen. Peru, Thailand, Nieuw Zeeland, Japan.
                  Gelukkig was daar Destination Unknown. Ik hoefde alleen maar
                  een paar vragen te beantwoorden en daar was het antwoord op al
                  mijn vragen. Het is Mongolië geworden. Een land waar ik zelf
                  nooit aan had gedacht, maar wat was het een mooie reis! Eentje
                  om nooit meer te vergeten.
                  <br />
                  <br />
                  Gijs, 26 jaar
                  <br />
                  AVONTURIER
                </SubTitle>
                <BusImage>
                  <Img fluid={data.mobileBusImage.childImageSharp.fluid} />
                </BusImage>
              </TestimonialSubTitleContainer>
            </TestimonialContentContainer>
          </div>
        </TestimonialGridContainer>
      </TestimonialContainer>
    )}
  />
)

export default TestimonialBlock
