import React from 'react'
import Layout from '../components/layout'
import axios from 'axios'
import SurveyBlock from '../components/survey-block'
import CountryBlock from '../components/country-block'
import TestimonialContentContainer from '../components/testimonial-block'
import TravelBlock from '../components/travel-block'
import EiffelTowerBlock from '../components/eiffel-tower-block'
import AirplaneBlock from '../components/airplane-block'
import DestinationUnknownBlock from '../components/destination-unknown-block'
import Footer from '../components/footer'
import Helmet from 'react-helmet'
import Safe from 'react-safe'
import SEO from '../components/seo'

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

class IndexPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: false,
    }
  }
  handleClick = (firstAnswer, secondAnswer, thirdAnswer, fourthAnswer) => {
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
          answers_list: [firstAnswer, secondAnswer, thirdAnswer, fourthAnswer],
        }
      )
      .then(response => {
        window.location.href = slugify(response.data.country)
      })
      .catch(error => console.log(error))
  }
  handleChange = selectedOption => {
    this.setState({ selectedOption: selectedOption })
  }
  render() {
    return (
      <Layout isIndex={true}>
        <Helmet>
          <script src="https://identity.netlify.com/v1/netlify-identity-widget.js" />
        </Helmet>
        <SEO
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
        <TravelBlock />
        <EiffelTowerBlock />
        <AirplaneBlock />
        <DestinationUnknownBlock />
        <TestimonialContentContainer />
        <Footer />
        <Safe.script>
          {`if (window.netlifyIdentity) {
              window.netlifyIdentity.on("init", user => {
                if (!user) {
                  window.netlifyIdentity.on("login", () => {
                    document.location.href = "/admin/";
                  });
                }
              });`}
        </Safe.script>
      </Layout>
    )
  }
}

export default IndexPage
