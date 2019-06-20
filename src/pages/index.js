import React from 'react'
import Layout from '../components/layout'
import axios from 'axios'
import SurveyBlock from '../components/survey-block'
import CountryBlock from '../components/country-block'
import TestimonialContentContainer from '../components/testimonial-block'

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
    return (
      <Layout>
        <SurveyBlock handleClick={this.handleClick} />
        <CountryBlock />
        <TestimonialContentContainer />
      </Layout>
    )
  }
}

export default IndexPage
