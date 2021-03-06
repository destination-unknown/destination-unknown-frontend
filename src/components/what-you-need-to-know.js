import styled from 'styled-components'
import React from 'react'

const BodyText = styled.p`
  color: white;
  font-weight: 300;
  margin-top: 8px;
  font-size: 1.2rem;
  line-height: 1.5;
  font-family: 'Open Sans', sans-serif;
`

const OffCentreBodyText = styled.p`
  color: white;
  font-weight: 300;
  margin-top: 8px;
  font-size: 1.2rem;
  line-height: 1.5;
  font-family: 'Open Sans', sans-serif;
  margin-left: 76px;
  @media only screen and (max-width: 600px) {
    margin-left: 16px;
    margin-right: 16px;
  }
`

const WhatYouNeedToKnowContainer = styled.div`
  padding-top: 16px;
  max-width: 1200px;
  margin: 0 auto;

  @media only screen and (max-width: 600px) {
    padding-top: 32px;
  }
`

const DidYouKnowContainer = styled.div`
  width: 48%;
  padding: 50px 60px;
  float: ${props => (props.floatLeft ? 'left' : 'right')};
  margin: 14px 16px;
  box-shadow: 0 2px 0 0 #b17903;
  background-color: #f5a704;
  @media only screen and (max-width: 600px) {
    float: none;
    width: initial;
    padding: 16px;
    margin: 0;
    margin-left: 16px;
    margin-right: 16px;
  }
`

const SubTitle = styled.p`
  color: #21888d;
  font-family: 'Lato', sans-serif;
  font-size: 3.5rem;
  font-weight: 900;
  margin: 0;
  margin-left: 76px;
  @media only screen and (max-width: 600px) {
    font-size: 34px;
    margin-left: 16px;
    margin-right: 16px;
  }
`

const Title = styled.h1`
  font-family: 'Lato', sans-serif;
  line-height: 1;
  font-size: 4vw;
  font-weight: bold;
  padding-bottom: 20px;
  margin: 0;
  color: white;

  @media only screen and (max-width: 600px) {
    font-size: 34px;
  }
`

const WhatYouNeedToKnow = ({ title, text, floatLeft, factText }) => {
  if (!text) {
    return ''
  }

  const formattedNeedToKnowText = text.split(`\n\n`).map(paragraph => {
    const componentsToCreate = []

    let paragraphText = paragraph

    if (paragraph.includes('<wistjedat/>')) {
      componentsToCreate.push(
        <DidYouKnowContainer key={'wistjedat'} floatLeft={floatLeft}>
          <Title>Wist je dat...</Title>
          <BodyText>{factText}</BodyText>
        </DidYouKnowContainer>
      )

      paragraphText = paragraphText.replace('<wistjedat/>', '')
    }

    componentsToCreate.push(
      <OffCentreBodyText key={paragraphText}>{paragraphText}</OffCentreBodyText>
    )

    return componentsToCreate
  })

  return (
    <WhatYouNeedToKnowContainer>
      <SubTitle>{title}</SubTitle>
      {formattedNeedToKnowText}
    </WhatYouNeedToKnowContainer>
  )
}

export default WhatYouNeedToKnow
