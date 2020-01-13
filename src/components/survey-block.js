import React, { useState, useEffect } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'
import { keyframes } from 'styled-components'
import { lighten, darken } from 'polished'
import Select from '../components/select'

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
  display: grid;
  grid-template-columns:
    [full-start] minmax(1em, 1fr)
    repeat(15, [main-start] minmax(0, 80px) [main-end]) minmax(1em, 1fr) [full-end];
  grid-template-rows: max-content 1fr;
  font-family: 'Open Sans', sans-serif;
  margin: 0 auto;
  padding-top: 16px;
  padding-bottom: 48px;
  @media only screen and (max-width: 600px) {
    padding: 0;
    grid-template-columns: 1fr;
    grid-template-rows: max-content 1fr 1fr;
  }
`

const Title = styled.h1`
  font-family: 'Lato', sans-serif;
  grid-column-start: main-start 1;
  grid-column-end: main-end 6;
  z-index: 1;
  grid-row: 1;
  line-height: 1;
  font-size: 4.5rem;
  font-weight: bold;
  margin: 0;
  margin-bottom: 16px;
  margin-right: 16px;
  color: white;
  @media only screen and (max-width: 1000px) {
    font-size: 3.5rem;
  }

  @media only screen and (max-width: 800px) {
    font-size: 3rem;
  }

  @media only screen and (max-width: 700px) {
    font-size: 2.5rem;
  }

  @media only screen and (max-width: 600px) {
    padding-left: 16px;
    font-size: 65px;
    grid-row: 1;
    grid-column: 1;
  }
`

const SurveyContainer = styled.div`
  grid-column-start: main-start 1;
  grid-column-end: main-end 10;
  grid-row: 2;
  z-index: 1;
  @media only screen and (max-width: 600px) {
    grid-row: 3;
    grid-column: 1;
  }
`

const TravelGearImageContainer = styled.div`
  margin-top: 80px;
  grid-column-start: main-start 7;
  grid-column-end: main-end 15;
  grid-row: 1 / span 2;
  @media only screen and (max-width: 600px) {
    margin-top: 0;
    grid-row: 2;
    grid-column: 1;
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
  @media only screen and (max-width: 768px) {
    font-size: 18px;
  }
  @media only screen and (max-width: 600px) {
    padding: 16px;
    font-size: 13px;
  }
  line-height: 2.5;
`

const loading = keyframes`
  0% {
    left: 0;
    width: 0;
  }

  50% {
    left: 0;
    width: 100%;
  }

  100% {
    left: 100%;
    width: 0;
  }
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
  position: relative;

  &:hover {
    cursor: pointer;
    color: ${darken(0.2, 'white')};
    background-color: ${darken(0.15, '#f3a629')};
  }

  &.is-loading:after {
    animation: ${loading} 1s infinite;
    background-color: ${darken(0.1, '#f3a629')};
    content: '';
    display: block;
    height: 3px;
    left: 0;
    padding: 0;
    position: absolute;
    top: 0;
    width: 1rem;
  }

  &.is-loading {
    background-color: ${lighten(0.1, '#f3a629')};
    border-bottom: 1px solid ${lighten(0.1, '#b0781b')};
    outline: 0;
  }
`

export default ({ handleClick, isLoading }) => {
  const data = useStaticQuery(
    graphql`
      query {
        artboard: file(relativePath: { eq: "artboard.png" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_noBase64
            }
          }
        }
      }
    `
  )

  const [firstDropdown, setFirstDropdown] = useState({
    options: [
      { value: 'zomer', label: 'zomer' },
      { value: 'herfst', label: 'herfst' },
      { value: 'winter', label: 'winter' },
      { value: 'lente', label: 'lente' },
    ],
    selectedValue: {
      value: 'zomer',
      label: 'zomer',
    },
  })

  const [secondDropdown, setSecondDropdown] = useState({
    options: [
      { value: 'tot rust komen', label: 'tot rust te komen' },
      { value: 'op avontuur gaan', label: 'op avontuur te gaan' },
    ],
    selectedValue: {
      value: 'tot rust te komen',
      label: 'tot rust te komen',
    },
  })

  const [thirdDropdown, setThirdDropdown] = useState({
    options: [
      { value: '4', label: '4' },
      { value: '8', label: '8' },
      { value: '12', label: '12' },
      { value: '24', label: '24' },
    ],
    selectedValue: {
      value: '4',
      label: '4',
    },
  })

  const [fourthDropdown, setFourthDropdown] = useState({
    options: [
      {
        value: '15',
        label: 'is het warmer dan 15 graden',
      },
      { value: '20', label: 'is het warmer dan 20 graden' },
      { value: '25', label: 'is het warmer dan 25 graden' },
      { value: '30', label: 'moet het bloedheet zijn' },
      { value: '-99', label: 'maakt het me niet uit hoe warm het is' },
    ],
    selectedValue: {
      value: '15',
      label: 'is het warmer dan 15 graden',
    },
  })

  const [fifthDropdown, setFifthDropdown] = useState({
    options: [
      {
        value: 'hiken',
        label: 'hiken',
      },
      {
        value: 'cultuur snuiven',
        label: 'cultuur snuiven',
      },
      {
        value: 'wintersporten',
        label: 'wintersporten',
      },
      {
        value: 'rondreizen',
        label: 'rondreizen',
      },
      {
        value: 'watersporten',
        label: 'watersporten',
      },
      {
        value: 'op het strand liggen',
        label: 'op het strand liggen',
      },
      {
        value: 'stadjes bezoeken',
        label: 'stadjes bezoeken',
      },
    ],
    selectedValues: [
      {
        value: 'hiken',
        label: 'hiken',
      },
    ],
  })

  useEffect(() => {
    const savedFirstAnswer = JSON.parse(localStorage.getItem('first'))
    if (savedFirstAnswer) {
      setFirstDropdown({
        options: firstDropdown.options,
        selectedValue: savedFirstAnswer,
      })
    }
    const savedSecondAnswer = JSON.parse(localStorage.getItem('second'))
    if (savedSecondAnswer) {
      setSecondDropdown({
        options: secondDropdown.options,
        selectedValue: savedSecondAnswer,
      })
    }
    const savedThirdAnswer = JSON.parse(localStorage.getItem('third'))
    if (savedThirdAnswer) {
      setThirdDropdown({
        options: thirdDropdown.options,
        selectedValue: savedThirdAnswer,
      })
    }
    const savedFourthAnswer = JSON.parse(localStorage.getItem('fourth'))
    if (savedFourthAnswer) {
      setFourthDropdown({
        options: fourthDropdown.options,
        selectedValue: savedFourthAnswer,
      })
    }
    const savedFifthAnswer = JSON.parse(localStorage.getItem('fifth'))
    if (savedFifthAnswer) {
      setFifthDropdown({
        options: fifthDropdown.options,
        selectedValue: savedFifthAnswer,
      })
    }
  }, [
    firstDropdown.options,
    secondDropdown.options,
    thirdDropdown.options,
    fourthDropdown.options,
    fifthDropdown.options,
  ])

  return (
    <OuterContainer>
      <Container>
        <TravelGearImageContainer>
          <Img fluid={data.artboard.childImageSharp.fluid} />
        </TravelGearImageContainer>
        <Title>
          WAAR OP
          <br />
          VAKANTIE
        </Title>
        <SurveyContainer>
          <Survey>
            Ik ga het liefst in de{' '}
            <Select
              value={firstDropdown.selectedValue}
              options={firstDropdown.options}
              width={100}
              onChange={selectedOption => {
                localStorage.setItem('first', JSON.stringify(selectedOption))

                setFirstDropdown({
                  options: firstDropdown.options,
                  selectedValue: selectedOption,
                })
              }}
            />{' '}
            op reis om lekker{' '}
            <Select
              value={secondDropdown.selectedValue}
              options={secondDropdown.options}
              width={240}
              onChange={selectedOption => {
                localStorage.setItem('second', JSON.stringify(selectedOption))

                setSecondDropdown({
                  options: secondDropdown.options,
                  selectedValue: selectedOption,
                })
              }}
            />
            .
            <br />
            Om mijn bestemming te bereiken wil ik niet langer dan{' '}
            <Select
              value={thirdDropdown.selectedValue}
              options={thirdDropdown.options}
              width={75}
              onChange={selectedOption => {
                localStorage.setItem('third', JSON.stringify(selectedOption))

                setThirdDropdown({
                  options: thirdDropdown.options,
                  selectedValue: selectedOption,
                })
              }}
            />{' '}
            uur onderweg zijn.
            <br />
            Op de plek van bestemming{' '}
            <Select
              value={fourthDropdown.selectedValue}
              options={fourthDropdown.options}
              width={400}
              onChange={selectedOption => {
                localStorage.setItem('fourth', JSON.stringify(selectedOption))

                setFourthDropdown({
                  options: fourthDropdown.options,
                  selectedValue: selectedOption,
                })
              }}
            />{' '}
            .
            <br />
            Op vakantie ga ik graag{' '}
            <Select
              value={fifthDropdown.selectedValues}
              options={fifthDropdown.options}
              width={220}
              isMulti
              onChange={selectedOptions => {
                localStorage.setItem('fifth', JSON.stringify(selectedOptions))

                setFifthDropdown({
                  options: fifthDropdown.options,
                  selectedValues: selectedOptions,
                })
              }}
            />{' '}
            <Button
              className={isLoading ? 'is-loading' : ''}
              onClick={() =>
                handleClick(
                  firstDropdown.selectedValue.value,
                  secondDropdown.selectedValue.value,
                  thirdDropdown.selectedValue.value,
                  fourthDropdown.selectedValue.value,
                  fifthDropdown.selectedValues.map(value => value.value)
                )
              }
            >
              Toon bestemming
            </Button>
          </Survey>
        </SurveyContainer>
      </Container>
    </OuterContainer>
  )
}
