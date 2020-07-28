import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'
import Instagram from '../images/instagram.svg'
import Collapsible from 'react-collapsible'

import './collapsible.scss'

const FooterContainer = styled.div`
  background: white;
  font-family: 'Open Sans', sans-serif;
  position: relative;
`

const FooterGridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-column-gap: 64px;
  margin: 0 auto;
  max-width: 1200px;
  padding: 32px 16px;
  @media only screen and (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`

const CountryGridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-column-gap: 16px;
  @media only screen and (max-width: 600px) {
    display: none;
  }
`

const ContinentTitle = styled.p`
  font-family: 'Lato', sans-serif;
  font-size: 1.2rem;
  color: #2d2d2d;
  font-weight: bold;
  margin-bottom: 24px;
`

const CountryTitle = styled.a`
  display: block;
  font-family: 'Open Sans', sans-serif;
  font-size: 1rem;
  color: #414141;
  text-decoration: none;
  margin: 16px 0px;
`

const InstagramButton = styled.a`
  background-color: #3ec0c4;
  border-radius: 32px;
  height: 64px;
  width: 64px;
  right: 32px;
  bottom: 32px;
  position: absolute;

  & > svg {
    display: block;
    margin: 15px auto;
  }
`

const Footer = ({ handleClick }) => (
  <StaticQuery
    query={graphql`
      query {
        allMarkdownRemark(filter: { fields: { type: { eq: "country" } } }) {
          edges {
            node {
              frontmatter {
                title
                continent
              }
              fields {
                slug
              }
            }
          }
        }
        bus: file(relativePath: { eq: "busje.png" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_noBase64
            }
          }
        }
      }
    `}
    render={data => {
      const northAmericaCountries = data.allMarkdownRemark.edges
        .filter(value => {
          return value.node.frontmatter.continent === 'Noord-Amerika'
        })
        .map(value => {
          return (
            <CountryTitle
              key={value.node.frontmatter.title}
              href={value.node.fields.slug}
            >
              {value.node.frontmatter.title}
            </CountryTitle>
          )
        })
      const southAmericaCountries = data.allMarkdownRemark.edges
        .filter(value => {
          return value.node.frontmatter.continent === 'Zuid-Amerika'
        })
        .map(value => {
          return (
            <CountryTitle
              key={value.node.frontmatter.title}
              href={value.node.fields.slug}
            >
              {value.node.frontmatter.title}
            </CountryTitle>
          )
        })
      const europaCountries = data.allMarkdownRemark.edges
        .filter(value => {
          return value.node.frontmatter.continent === 'Europa'
        })
        .map(value => {
          return (
            <CountryTitle
              key={value.node.frontmatter.title}
              href={value.node.fields.slug}
            >
              {value.node.frontmatter.title}
            </CountryTitle>
          )
        })
      const africaCountries = data.allMarkdownRemark.edges
        .filter(value => {
          return value.node.frontmatter.continent === 'Afrika'
        })
        .map(value => {
          return (
            <CountryTitle
              key={value.node.frontmatter.title}
              href={value.node.fields.slug}
            >
              {value.node.frontmatter.title}
            </CountryTitle>
          )
        })
      const asiaCountries = data.allMarkdownRemark.edges
        .filter(value => {
          return value.node.frontmatter.continent === 'Azië'
        })
        .map(value => {
          return (
            <CountryTitle
              key={value.node.frontmatter.title}
              href={value.node.fields.slug}
            >
              {value.node.frontmatter.title}
            </CountryTitle>
          )
        })
      const oceaniaCountries = data.allMarkdownRemark.edges
        .filter(value => {
          return value.node.frontmatter.continent === 'Oceanië'
        })
        .map(value => {
          return (
            <CountryTitle
              key={value.node.frontmatter.title}
              href={value.node.fields.slug}
            >
              {value.node.frontmatter.title}
            </CountryTitle>
          )
        })
      return (
        <FooterContainer>
          <FooterGridContainer>
            <Collapsible trigger="Afrika">{africaCountries}</Collapsible>
            <Collapsible trigger="Azië">{asiaCountries}</Collapsible>
            <Collapsible trigger="Europa">{europaCountries}</Collapsible>
            <Collapsible trigger="Noord-Amerika">
              {northAmericaCountries}
            </Collapsible>
            <Collapsible trigger="Oceanië">{oceaniaCountries}</Collapsible>
            <Collapsible trigger="Zuid-Amerika">
              {southAmericaCountries}
            </Collapsible>
            <CountryGridContainer>
              <div>
                <ContinentTitle>Afrika</ContinentTitle>
                {africaCountries}
              </div>
              <div>
                <ContinentTitle>Azië</ContinentTitle>
                {asiaCountries}
              </div>
              <div>
                <ContinentTitle>Europa</ContinentTitle>
                {europaCountries}
              </div>
              <div>
                <ContinentTitle>Noord-Amerika</ContinentTitle>
                {northAmericaCountries}
              </div>
              <div>
                <ContinentTitle>Oceanië</ContinentTitle>
                {oceaniaCountries}
              </div>
              <div>
                <ContinentTitle>Zuid-Amerika</ContinentTitle>
                {southAmericaCountries}
              </div>
            </CountryGridContainer>
          </FooterGridContainer>
          <Img
            style={{ width: '500px', margin: '0 auto' }}
            fluid={data.bus.childImageSharp.fluid}
          />
          <InstagramButton
            href="https://www.instagram.com/destinationunknownnl/"
            rel="nofollow"
            target="_blank"
          >
            <Instagram height="32px" width="32px" fill="white" />
          </InstagramButton>
        </FooterContainer>
      )
    }}
  />
)

export default Footer
