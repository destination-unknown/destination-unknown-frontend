import React from 'react'
import Layout from '../components/layout'
// import SEO from '../components/seo'
import styled from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import { Helmet } from 'react-helmet'
import Globe from '../images/wereldbol-icon.svg'
import People from '../images/bevolking-icon.svg'
import Money from '../images/valuta-icon.svg'

const Container = styled.div`
  max-width: 960px;
  background-color: #47c0c7;
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  grid-gap: 0 5%;
  grid-template-rows: fit-content 50%;
  font-family: 'Open Sans', sans-serif;
  margin: 0 auto;
  padding-top: 0;
`

const FactsContainer = styled.div`
  display: grid;
  padding: 64px;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: fit-content 1fr 1fr;
  background-color: #31bbc2;
  justify-items: center;
`

const LandContainer = styled.div`
  background: #63e0e6;
  font-family: 'Open Sans', sans-serif;
`

const LandGridContainer = styled.div`
  display: grid;
  grid-template-columns: 42% 10% 3% 45%;
  margin: 0 auto;
  max-width: 960px;
  padding: 64px;
`

const Title = styled.h1`
  font-family: 'Lato', sans-serif;
  line-height: 1;
  font-size: 6rem;
  font-weight: bold;
  margin: 0;
  color: white;
`

const FactText = styled.p`
  font-family: 'Lato', sans-serif;
  line-height: 1;
  font-size: 3rem;
  font-weight: bold;
  margin: 0;
  color: white;
`

const FactSubText = styled.p`
  color: #21888d;
  font-family: 'Lato', sans-serif;
  font-size: 2.5rem;
  font-weight: 900;
  margin: 0;
`

const SubTitle = styled.p`
  color: white;
  font-weight: 300;
  margin-top: 8px;
  font-size: 1.2rem;
  line-height: 1.5;
`

const LandCount = styled.p`
  color: white;
  font-family: 'Lato', sans-serif;
  font-size: 10rem;
  font-weight: 900;
  margin: 0;
`

const LandSubTitle = styled.p`
  color: #21888d;
  font-family: 'Lato', sans-serif;
  font-size: 3.5rem;
  font-weight: 900;
  margin: 0;
`

const CountryPage = () => (
  <StaticQuery
    query={graphql`
      query {
        kronkel: file(relativePath: { eq: "kronkels.png" }) {
          childImageSharp {
            fixed(width: 134, height: 60) {
              ...GatsbyImageSharpFixed_noBase64
            }
          }
        }
        christ: file(relativePath: { eq: "christ.png" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_noBase64
            }
          }
        }
        wereldbol: file(relativePath: { eq: "wereldbol-icon.svg" }) {
          childImageSharp {
            fixed(width: 100, height: 100) {
              ...GatsbyImageSharpFixed_noBase64
            }
          }
        }
      }
    `}
    render={data => (
      <Layout>
        <Container>
          <Helmet>
            <meta name="robots" content="noindex" />
          </Helmet>
          <div />
          <div>
            <Title>BRAZILIË</Title>
          </div>
          <div>
            <Img fluid={data.christ.childImageSharp.fluid} />
          </div>
          <div>
            <SubTitle>
              Brazilië is het grootste land van Zuid-Amerika en is het 5e
              grootste land ter wereld. Het is een bergachtig land met als
              hoogste punt de Pico da Neblina in het Amazonegebied met een
              hoogte van bijna 3.000 meter. De kustlijn van Brazilië is circa
              8.000 kilometer lang en bestaat grotendeels uit brede witte en
              goudbruine zandstranden. In het helderblauwe water rondom Brazilië
              kan men ideeal duiken en surfen. De Braziliaanse bevolking staat
              erom bekend een uitbundig volk te zijn. Dit is terug te zien aan
              o.a. de carnaval
            </SubTitle>
          </div>
        </Container>
        <FactsContainer>
          <div>
            <Globe />
          </div>
          <div>
            <People />
          </div>
          <div>
            <Money />
          </div>
          <div>
            <FactText>2.800.000</FactText>
          </div>
          <div>
            <FactText>208.000.000</FactText>
          </div>
          <div>
            <FactText>1 real</FactText>
          </div>
          <div>
            <FactSubText>km2</FactSubText>
          </div>
          <div>
            <FactSubText>inwoners</FactSubText>
          </div>
          <div>
            <FactSubText>0,2360 euro</FactSubText>
          </div>
        </FactsContainer>{' '}
        <LandContainer>
          <LandGridContainer>
            <div
              style={{ marginTop: `64px`, gridArea: `1 / 1 / span 2 / span 3` }}
            />
            <div style={{ gridArea: `1 / 2 / auto / span 3`, zIndex: 2 }}>
              <LandCount style={{ left: `-100px` }}>195</LandCount>
            </div>
            <div style={{ gridArea: `2 / 3 / auto / span 3`, zIndex: 2 }}>
              <LandSubTitle>landen zijn er in de wereld</LandSubTitle>
              <SubTitle>
                Zoveel verschillende landen. Zoveel landen om uit te kiezen.
                Geen idee waar je naartoe wilt? Wees niet bang. Wij helpen je
                graag om dat ene vakantieland te kiezen. Het enige wat jij hoeft
                te doen is de vragenlijst in te vullen. Wij doen de rest.
              </SubTitle>
            </div>
          </LandGridContainer>
        </LandContainer>
      </Layout>
    )}
  />
)

export default CountryPage
