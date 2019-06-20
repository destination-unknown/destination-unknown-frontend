import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'
import { Helmet } from 'react-helmet'

const OuterContainer = styled.div`
  background: linear-gradient(
    to bottom,
    #47c0c7 0%,
    #47c0c7 50%,
    #31bbc2 50%,
    #31bbc2 100%
  );
`

const Container = styled.div`
  max-width: 960px;
  display: grid;
  grid-template-columns: 16.6% 16.6% 16.6% 16.6% 16.6% 16.6% 12%;
  font-family: 'Open Sans', sans-serif;
  margin: 0 auto;
  padding-top: 0;
  padding-bottom: 5%;
  @media only screen and (max-width: 600px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
  }
`

const Title = styled.h1`
  font-family: 'Lato', sans-serif;
  line-height: 1;
  font-size: 100px;
  font-weight: bold;
  margin: 0;
  margin-bottom: 16px;
  color: white;
  @media only screen and (max-width: 600px) {
    padding-left: 16px;
  }
`

const Survey = styled.div`
  color: #044043;
  border-radius: 2px;
  background-color: #63cdd2;
  border: 1px solid #61d9df;
  padding: 32px;
  font-size: 21px;
  font-family: 'Lato', sans-serif;
  @media only screen and (max-width: 600px) {
    padding: 16px;
    font-size: 13px;
  }
  line-height: 2.5;
`

const Button = styled.button`
  width: 100%;
  font-weight: 400;
  background-color: #f3a629;
  border: none;
  border-radius: 2px;
  border-bottom: 1px solid #b0781b;
  color: white;
  padding: 16px;
  margin-top: 16px;
`

const SurveyContainer = styled.div`
  grid-column: 1 / span 3;
  grid-row: 1;
  z-index: 1;
`

const TravelGearImageContainer = styled.div`
  grid-column: 3 / span 5;
  grid-row: 1;
  align-self: end;
  @media only screen and (max-width: 600px) {
    /* display: none; */
  }
`

const SurveyBlock = ({ handleClick }) => (
  <StaticQuery
    query={graphql`
      query {
        artboard: file(relativePath: { eq: "artboard.png" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_noBase64
            }
          }
        }
      }
    `}
    render={data => (
      <OuterContainer>
        <Container>
          <Helmet>
            <meta name="robots" content="noindex" />
          </Helmet>
          <TravelGearImageContainer>
            <Img fluid={data.artboard.childImageSharp.fluid} />
          </TravelGearImageContainer>
          <SurveyContainer>
            <Title>
              KIES <br />
              &amp; REIS
            </Title>
            <Survey>
              Ik wil graag in de{' '}
              <select name="periode">
                <option value="zomer">zomer</option>
                <option value="herfst">herfst</option>
                <option value="winter">winter</option>
                <option value="lente">lente</option>
              </select>{' '}
              op vakantie{' '}
              <select name="continent_europa">
                <option value="binnen">binnen</option>s
                <option value="buiten">buiten</option>
              </select>
              &nbsp;Europa.
              <br />
              Ik ga het liefst{' '}
              <select name="activiteit">
                <option value="strand">luieren op het strand</option>
                <option value="avontuur">op avontuur</option>
              </select>{' '}
              en wil{' '}
              <select name="cultureel">
                <option value="ja">wel</option>
                <option value="nee">geen</option>
              </select>{' '}
              cultuur snuiven.
              <Button onClick={() => handleClick()}>Toon bestemming</Button>
            </Survey>
          </SurveyContainer>
        </Container>
      </OuterContainer>
    )}
  />
)

export default SurveyBlock
