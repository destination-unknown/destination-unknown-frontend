import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'
import Instagram from '../images/instagram.svg'

const FooterContainer = styled.div`
  background: #13888c;
  font-family: 'Open Sans', sans-serif;
  position: relative;
`

const FooterGridContainer = styled.div`
  display: grid;
  grid-template-columns: 40% 1fr;
  grid-column-gap: 64px;
  margin: 0 auto;
  max-width: 1200px;
  padding: 32px 16px;
  @media only screen and (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`

const CountryGridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 16px;
`

const LandImageContainer = styled.div`
  margin-top: 64px;
  grid-column: 1;
  @media only screen and (max-width: 600px) {
    display: none;
  }
`

const ContinentTitle = styled.p`
  font-family: 'Lato', sans-serif;
  font-size: 1.2rem;
  color: white;
  font-weight: bold;
  margin-bottom: 8px;
`

const CountryTitle = styled.a`
  display: block;
  font-family: 'Open Sans', sans-serif;
  font-size: 1rem;
  color: white;
  margin: 6px 0px;
`

const InstagramButton = styled.a`
  background-color: #3ec0c4;
  border-radius: 32px;
  height: 64px;
  width: 64px;
  right: 32px;
  bottom: 32px;
  position: absolute;

  & > svg {
    display: block;
    margin: 15px auto;
  }
`

const Footer = ({ handleClick }) => (
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
      <FooterContainer>
        <FooterGridContainer>
          <LandImageContainer>
            <Img fluid={data.landImage.childImageSharp.fluid} />
          </LandImageContainer>
          <CountryGridContainer>
            <div>
              <ContinentTitle>Noord-Amerika</ContinentTitle>
              <CountryTitle href="/bahamas">Bahama's</CountryTitle>
              <CountryTitle href="/canada">Canada</CountryTitle>
              <CountryTitle href="/costa-rica">Costa Rica</CountryTitle>
              <CountryTitle href="/mexico">Mexico</CountryTitle>
              <CountryTitle href="/nicaragua">Nicaragua</CountryTitle>
              <CountryTitle href="/panama">Panama</CountryTitle>
              <CountryTitle href="/verenigde-staten">
                Verenigde Staten
              </CountryTitle>
              <ContinentTitle>Zuid-Amerika</ContinentTitle>
              <CountryTitle href="/argentinie">Argentinië</CountryTitle>
              <CountryTitle href="/brazilie">Brazilië</CountryTitle>
              <CountryTitle href="/peru">Peru</CountryTitle>
            </div>
            <div>
              <ContinentTitle>Europa</ContinentTitle>
              <CountryTitle href="/bosnie-en-herzegovina">
                Bosnie-en-Herzegovina
              </CountryTitle>
              <CountryTitle href="/griekenland">Griekenland</CountryTitle>
              <CountryTitle href="/finland">Finland</CountryTitle>
              <CountryTitle href="/ijsland">Ijsland</CountryTitle>
              <CountryTitle href="/italie">Italië</CountryTitle>
              <CountryTitle href="/kroatie">Kroatië</CountryTitle>
              <CountryTitle href="/noorwegen">Noorwegen</CountryTitle>
              <CountryTitle href="/oostenrijk">Oostenrijk</CountryTitle>
              <CountryTitle href="/portugal">Portugal</CountryTitle>
              <CountryTitle href="/schotland">Schotland</CountryTitle>
              <ContinentTitle>Afrika</ContinentTitle>
              <CountryTitle href="/kenia">Kenia</CountryTitle>
              <CountryTitle href="/marokko">Marokko</CountryTitle>
              <CountryTitle href="/mauritius">Mauritius</CountryTitle>
              <CountryTitle href="/tanzania">Tanzania</CountryTitle>
              <CountryTitle href="/zuid-afrika">Zuid-Afrika</CountryTitle>
            </div>
            <div>
              <ContinentTitle>Azië</ContinentTitle>
              <CountryTitle href="/cambodja">Cambodja</CountryTitle>
              <CountryTitle href="/filipijnen">Filipijnen</CountryTitle>
              <CountryTitle href="/indonesie">Indonesië</CountryTitle>
              <CountryTitle href="/japan">Japan</CountryTitle>
              <CountryTitle href="/jordanie">Jordanië</CountryTitle>
              <CountryTitle href="/nepal">Nepal</CountryTitle>
              <CountryTitle href="/thailand">Thailand</CountryTitle>
              <ContinentTitle>Oceanië</ContinentTitle>
              <CountryTitle href="/nieuw-zeeland">Nieuw-Zeeland</CountryTitle>
            </div>
          </CountryGridContainer>
        </FooterGridContainer>
        <InstagramButton
          href="https://www.instagram.com/destinationunknownnl/"
          rel="nofollow"
          target="_blank"
        >
          <Instagram height="32px" width="32px" fill="white" />
        </InstagramButton>
      </FooterContainer>
    )}
  />
)

export default Footer
