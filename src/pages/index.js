import React from 'react'
import Layout from '../components/layout'
import axios from 'axios'
import SurveyBlock from '../components/survey-block'
import CountryBlock from '../components/country-block'
import TestimonialContentContainer from '../components/testimonial-block'
// import DropDown from '../components/DropDown'
import Select, { components } from 'react-select'

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
      selectedOption: { value: '0', label: 'Audi' },
    }
  }
  handleClick = () => {
    this.setState({ isLoading: true })

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
  handleChange = selectedOption => {
    this.setState({ selectedOption: selectedOption })
  }
  render() {
    const customStyles = {
      option: (provided, state) => ({
        ...provided,
        '&:active': {
          backgroundColor: 'transparent',
        },
        backgroundColor: state.isSelected ? '#47c0c7' : 'transparent',
      }),
      control: (provided, state) => {
        return {
          ...provided,
          // This line disable the blue border
          '&::after': {
            content: '""',
            position: 'absolute',
            display: 'block',
            marginLeft: '8px',
            width: '96%',
            paddingTop: '32px',
            borderBottom: '1px solid white',
          },
          position: 'relative',
          border: 'none',
          boxShadow: 'none',
          background: 'transparent',
          color: 'white',
          width: 200,
        }
      },
      menu: (provided, state) => ({
        ...provided,
        width: 200,
        marginLeft: '8px',
        fontFamily: 'Lato',
      }),
      dropdownIndicator: (provided, state) => ({
        ...provided,
        color: 'white',
      }),
      singleValue: (provided, state) => ({
        ...provided,
        color: 'white',
        fontFamily: 'Lato',
      }),
      indicatorSeparator: (provided, state) => ({
        ...provided,
        backgroundColor: 'transparent',
      }),
    }

    const { selectedOption } = this.state

    const DropdownIndicator = props => {
      return (
        <components.DropdownIndicator {...props}>
          <div
            style={{
              width: 0,
              height: 0,
              borderLeft: '20px solid transparent',
              borderRight: '20px solid tranparent',
              borderTop: '20px solid #f00',
            }}
          />
        </components.DropdownIndicator>
      )
    }

    return (
      <Layout>
        <Select
          styles={customStyles}
          value={selectedOption}
          options={[
            { value: '0', label: 'Audi' },
            { value: '1', label: 'BMW' },
          ]}
          onChange={this.handleChange}
          isSearchable={false}
          // components={{ DropdownIndicator }}
        />
        <SurveyBlock
          isLoading={this.state.isLoading}
          handleClick={this.handleClick}
        />
        <CountryBlock />
        <TestimonialContentContainer />
      </Layout>
    )
  }
}

export default IndexPage
