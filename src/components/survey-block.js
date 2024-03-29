import React, { useState, useEffect } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import { lighten } from 'polished'
import Select from '../components/select'
import { GatsbyImage } from 'gatsby-plugin-image'
import { Oval } from 'react-loader-spinner'

const OuterContainer = styled.div`
  background-color: #39b9be;
`

const Container = styled.div`
  display: grid;
  grid-template-columns:
    [full-start] minmax(1em, 1fr)
    repeat(15, [main-start] 1fr [main-end]) [full-end];
  font-family: 'Open Sans', sans-serif;
  margin: 0 auto;
  @media only screen and (max-width: 600px) {
    padding: 0;
    grid-template-columns: 1fr;
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
  margin-right: 16px;
  color: #157e81;
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
    font-size: 3rem;
    padding-top: 8px;
    padding-bottom: 8px;
    grid-row: 1;
    grid-column: 1;
  }
`

const SurveyContainer = styled.div`
  grid-column-start: main-start 3;
  grid-column-end: main-end 8;
  grid-row: 2;
  z-index: 1;
  margin-bottom: 60px;
  @media only screen and (max-width: 600px) {
    grid-row: 2;
    grid-column: 1;
    margin-bottom: 0;
    border-bottom: 1px solid lightgrey;
  }
`

const TravelGearImageContainer = styled.div`
  grid-column-start: main-start 7;
  grid-column-end: main-end 15;
  grid-row: 1 / span 2;
  height: 100%;
  @media only screen and (max-width: 600px) {
    margin-top: 0;
    grid-row: 1;
    grid-column: 1;
    height: 300px;
  }
`

const Survey = styled.div`
  color: #044043;
  border-radius: 6px;
  background-color: white;
  box-shadow: 0 0 10px 2px grey;
  padding: 32px;
  margin-top: 140px;
  font-size: 21px;
  font-family: 'Lato', sans-serif;
  @media only screen and (max-width: 768px) {
    font-size: 18px;
  }
  @media only screen and (max-width: 600px) {
    padding: 16px;
    font-size: 15px;
    margin-top: 0;
    box-shadow: none;
    border-radius: 0;
  }
  line-height: 2.5;
`

const Button = styled.button`
  width: 100%;
  height: 60px;
  font-weight: bold;
  background-color: #febd2c;
  border: none;
  border-radius: 30px;
  border-bottom: 1px solid #b0781b;
  color: black;
  padding: 16px;
  margin-top: 16px;
  position: relative;

  &:focus {
    box-shadow: 0 0 0 4px ${lighten(0.3, '#febd2c')};
    outline: none;
  }
`

const PureSurveyBlock = ({ handleClick, isLoading }) => {
  const data = useStaticQuery(
    graphql`
      query {
        homepage: file(relativePath: { eq: "homepage.jpg" }) {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
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
        selectedValues: savedFifthAnswer,
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
          <GatsbyImage
            style={{ height: '100%' }}
            image={data.homepage.childImageSharp.gatsbyImageData}
            alt=""
          />
        </TravelGearImageContainer>
        <SurveyContainer>
          <Survey>
            <Title>
              WAAR OP
              <br />
              VAKANTIE
            </Title>
            Ik ga het liefst in de{' '}
            <Select
              value={firstDropdown.selectedValue}
              options={firstDropdown.options}
              mobileWidth={'85px'}
              width={'120px'}
              onChange={(selectedOption) => {
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
              width={'240px'}
              mobileWidth={'180px'}
              onChange={(selectedOption) => {
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
              width={'75px'}
              mobileWidth={'60px'}
              onChange={(selectedOption) => {
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
              width={'400px'}
              mobileWidth={'290px'}
              onChange={(selectedOption) => {
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
              width={'100%'}
              isMulti
              onChange={(selectedOptions) => {
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
                  fifthDropdown.selectedValues.map((value) => value.value)
                )
              }
            >
              {!isLoading && 'Toon bestemmingen'}
              {isLoading && (
                <Oval
                  height={40}
                  width={40}
                  color="gray"
                  wrapperStyle={{
                    marginTop: '-8px',
                    position: 'relative',
                    left: '46%',
                  }}
                  wrapperClass=""
                  visible={true}
                  ariaLabel="oval-loading"
                  secondaryColor="gray"
                  strokeWidth={2}
                  strokeWidthSecondary={2}
                />
              )}
              {/* <Loader loaded={!isLoading} width={8} radius={15} scale={0.5}>
                Toon bestemmingen
              </Loader> */}
            </Button>
          </Survey>
        </SurveyContainer>
      </Container>
    </OuterContainer>
  )
}

export default PureSurveyBlock
