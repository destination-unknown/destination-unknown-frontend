import React from 'react'
import axios from 'axios'
import SurveyBlock from '../components/survey-block'
import CountryBlock from '../components/country-block'
import EiffelTowerBlock from '../components/eiffel-tower-block'
import AirplaneBlock from '../components/airplane-block'
import DestinationUnknownBlock from '../components/destination-unknown-block'
import Helmet from 'react-helmet'
import Seo from '../components/seo'
import Header from '../components/header'
import '../components/layout.css'
import '../../node_modules/normalize.css/normalize.css'
import favicon from '../images/favicon.ico'
import Footer from '../components/footer'
import styled from 'styled-components'

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

const ChildrenContainer = styled.div`
  margin-top: 0;
`

class IndexPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: false,
    }
  }
  handleClick = (
    firstAnswer,
    secondAnswer,
    thirdAnswer,
    fourthAnswer,
    fifthAnswer
  ) => {
    this.setState({ isLoading: true })

    typeof window !== 'undefined' &&
      typeof window.gtag !== 'undefined' &&
      window.gtag('event', 'periode', {
        event_category: 'Questionnaire',
        event_label: firstAnswer,
      })

    typeof window !== 'undefined' &&
      typeof window.gtag !== 'undefined' &&
      window.gtag('event', 'continent_europa', {
        event_category: 'Questionnaire',
        event_label: secondAnswer,
      })

    typeof window !== 'undefined' &&
      typeof window.gtag !== 'undefined' &&
      window.gtag('event', 'activiteit', {
        event_category: 'Questionnaire',
        event_label: thirdAnswer,
      })

    typeof window !== 'undefined' &&
      typeof window.gtag !== 'undefined' &&
      window.gtag('event', 'cultureel', {
        event_category: 'Questionnaire',
        event_label: fourthAnswer,
      })

    const serialisedQuestionsAndAnswers = JSON.stringify({
      questions_list: [
        'periode',
        'doel',
        'lengte reis',
        'temperatuur',
        'activiteit',
      ],
      answers_list: [
        firstAnswer,
        secondAnswer,
        thirdAnswer,
        fourthAnswer,
        fifthAnswer.sort().join('|'),
      ],
    })

    const item = localStorage.getItem(serialisedQuestionsAndAnswers)
    const index = localStorage.getItem(serialisedQuestionsAndAnswers + 'index')

    if (item !== null && JSON.parse(item).length > index) {
      localStorage.setItem(
        serialisedQuestionsAndAnswers + 'index',
        parseInt(index) + 1
      )
      window.location.href = slugify(JSON.parse(item)[index])
      return
    }

    axios
      .post(
        `https://b7utrxq57g.execute-api.us-east-1.amazonaws.com/dev/generate`,
        {
          questions_list: [
            'periode',
            'doel',
            'lengte reis',
            'temperatuur',
            'activiteit',
          ],
          answers_list: [
            firstAnswer,
            secondAnswer,
            thirdAnswer,
            fourthAnswer,
            fifthAnswer.sort().join('|'),
          ],
        }
      )
      .then((response) => {
        localStorage.setItem(
          serialisedQuestionsAndAnswers,
          JSON.stringify(response.data.countries)
        )

        localStorage.setItem(serialisedQuestionsAndAnswers + 'index', 1)

        console.log(response.data)

        window.location.href = slugify(response.data.countries[0])
      })
      .catch((error) => console.log(error))
  }
  handleChange = (selectedOption) => {
    this.setState({ selectedOption: selectedOption })
  }
  render() {
    return (
      <>
        <Header
          isIndex={true}
          position={'absolute'}
          isBlog={false}
          shouldShowNextDestination={false}
        />
        <Helmet>
          <link rel="shortcut icon" type="image/x-icon" href={favicon} />
          <meta
            name="2fdeccbcacfeee9"
            content="f0069a37446db760e09735e27c0e157c"
          />
        </Helmet>
        <ChildrenContainer>
          <Helmet>
            <script src="https://identity.netlify.com/v1/netlify-identity-widget.js" />
          </Helmet>
          <Seo
            description={null}
            lang={'nl-NL'}
            meta={[]}
            keywords={[]}
            title={'Waar op vakantie? Doe de test!'}
          />
          <SurveyBlock
            isLoading={this.state.isLoading}
            handleClick={this.handleClick}
          />
          <CountryBlock />
          <EiffelTowerBlock />
          <AirplaneBlock />
          <DestinationUnknownBlock />
        </ChildrenContainer>
        <Footer />
      </>
    )
  }
}

export default IndexPage
