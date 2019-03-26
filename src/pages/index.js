import React from 'react'
import Layout from '../components/layout'
// import SEO from '../components/seo'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import { Helmet } from 'react-helmet'
import axios from 'axios'

function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(/[^\w-]+/g, '') // Remove all non-word chars
    .replace(/--+/g, '-') // Replace multiple - with single -
    .replace(/^-+/, '') // Trim - from start of text
    .replace(/-+$/, '') // Trim - from end of text
}

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
  grid-template-columns: 0px 1.5fr 1fr 0px;
  grid-template-rows: 50% 50%;
  font-family: 'Open Sans', sans-serif;
  margin: 0 auto;
  padding-top: 0;
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

const TestimonialContainer = styled.div`
  background: #34c0c7;
  font-family: 'Open Sans', sans-serif;
`

const TestimonialGridContainer = styled.div`
  display: grid;
  grid-template-columns: 160px 1fr;
  margin: 0 auto;
  max-width: 1280px;
  padding: 0px 1.0875rem 1.45rem;
  padding-top: 64px;
`

const TestimonialSubTitleContainer = styled.div`
  display: grid;
  grid-template-columns: 55% 45%;
`

const Title = styled.h1`
  font-family: 'Lato', sans-serif;
  line-height: 1;
  font-size: 5rem;
  font-weight: bold;
  margin: 0;
  color: white;
`

const SubTitle = styled.p`
  color: white;
  margin-top: 8px;
  line-height: 1.5;
`

const Survey = styled.div`
  color: #165255;
  border-radius: 2px;
  background-color: #63cdd2;
  border: 1px solid #61d9df;
  padding: 32px;
  line-height: 2.5;
`

const Button = styled.button`
  width: 100%;
  background-color: #f3a629;
  border: none;
  border-radius: 2px;
  border-bottom: 1px solid #b0781b;
  color: white;
  padding: 16px;
  margin-top: 16px;
`

const TestimonialBlock = styled.div`
  background-color: #f3a629;
  border-radius: 2px;
  border-bottom: 1px solid #b0781b;
  color: white;
  padding-top: 40px;
  padding-left: 64px;
  padding-right: 64px;
  margin-top: 16px;
  width: 65%;
`

const TestimonialTitle = styled.h2`
  font-family: 'Lato', sans-serif;
  line-height: 1;
  font-size: 3.5rem;
  font-weight: bold;
  margin: 0;
  color: white;
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

class IndexPage extends React.Component {
  handleClick() {
    axios
      .post(
        `https://7n2xdnl26d.execute-api.us-east-1.amazonaws.com/dev/generate`,
        {
          questions_list: [
            'periode',
            'continent_europa',
            'activiteit',
            'cultureel',
          ],
          answers_list: [
            document.querySelector('select[name=periode]').value,
            document.querySelector('select[name=continent_europa]').value,
            document.querySelector('select[name=activiteit]').value,
            document.querySelector('select[name=cultureel]').value,
          ],
        }
      )
      .then(response => {
        window.location.href = slugify(response.data.country)
      })
      .catch(error => console.log(error))
  }
  render() {
    const { data } = this.props
    return (
      <Layout>
        {/* <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} /> */}
        <OuterContainer>
          <Container>
            <Helmet>
              <meta name="robots" content="noindex" />
            </Helmet>
            <div
              style={{
                gridArea: `2 / 1 / auto / span 4`,
              }}
            />
            <div
              style={{
                justifySelf: `end`,
                alignSelf: `end`,
              }}
            >
              <Img fixed={data.kronkel.childImageSharp.fixed} />
            </div>
            <div
              style={{
                gridArea: `1 / 2 / span 2 / auto `,
                alignSelf: `center`,
              }}
            >
              <Img fixed={data.travelGearImage.childImageSharp.fixed} />
            </div>
            <div>
              <Title>
                KIES <br />
                &amp; REIS
              </Title>
              <SubTitle>
                Wij helpen je een bestemming kiezen. Vul de vragen in en start
                met inpakken.
              </SubTitle>
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
                &nbsp;Europa. Ik ga het liefst{' '}
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
                <Button onClick={() => this.handleClick()}>
                  Toon bestemming
                </Button>
              </Survey>
            </div>
            <Img
              style={{ gridArea: `2 / 4`, alignSelf: `center` }}
              fixed={data.kronkel.childImageSharp.fixed}
            />
          </Container>
        </OuterContainer>
        <LandContainer>
          <LandGridContainer>
            <div
              style={{
                marginTop: `64px`,
                gridArea: `1 / 1 / span 2 / span 3`,
              }}
            >
              <Img fluid={data.landImage.childImageSharp.fluid} />
            </div>
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
        <TestimonialContainer>
          <TestimonialGridContainer>
            <Img
              style={{ justifySelf: `end`, alignSelf: `center` }}
              fixed={data.kronkel.childImageSharp.fixed}
            />
            <div>
              <LandSubTitle>Vele reizigers zijn je al voor gegaan</LandSubTitle>
              <TestimonialBlock>
                <TestimonialTitle>
                  &lsquo;Precies wat ik zocht&rsquo;
                </TestimonialTitle>
                <TestimonialSubTitleContainer>
                  <SubTitle style={{ paddingBottom: `16px` }}>
                    Ik kon maar niet kiezen. Peru, Thailand, Nieuw Zeeland,
                    Japan. Gelukkig was daar Destination Unknown. Ik hoefde
                    alleen maar een paar vragen te beantwoorden en daar was het
                    antwoord op al mijn vragen. Het is Mongolië geworden. Een
                    land waar ik zelf nooit aan had gedacht, maar wat was het
                    een mooie reis! Eentje om nooit meer te vergeten.
                    <br />
                    <br />
                    Gijs, 26 jaar
                    <br />
                    AVONTURIER
                  </SubTitle>
                  <Img
                    style={{ alignSelf: `end` }}
                    fixed={data.busImage.childImageSharp.fixed}
                  />
                </TestimonialSubTitleContainer>
              </TestimonialBlock>
            </div>
          </TestimonialGridContainer>
        </TestimonialContainer>
      </Layout>
    )
  }
}

export default IndexPage

export const query = graphql`
  query {
    landImage: file(relativePath: { eq: "wereldkaart.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    busImage: file(relativePath: { eq: "busje.png" }) {
      childImageSharp {
        fixed(width: 440, height: 200) {
          ...GatsbyImageSharpFixed_noBase64
        }
      }
    }
    kronkel: file(relativePath: { eq: "kronkels.png" }) {
      childImageSharp {
        fixed(width: 134, height: 60) {
          ...GatsbyImageSharpFixed_noBase64
        }
      }
    }
    travelGearImage: file(relativePath: { eq: "reisspullen.png" }) {
      childImageSharp {
        fixed(width: 380, height: 395) {
          ...GatsbyImageSharpFixed_noBase64
        }
      }
    }
  }
`
