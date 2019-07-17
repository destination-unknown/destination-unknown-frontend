import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'
import { Helmet } from 'react-helmet'
import favicon from '../images/favicon.ico'

const Container = styled.div`
  display: grid;
  grid-template-columns: 95% 26%;

  @media only screen and (max-width: 600px) {
    grid-template-columns: 50% 50%;
  }
`

const NavigationButton = styled.button`
  border: 1px solid white;
  border-radius: 22px;
  padding: 12px 32px;
  font-family: 'Poppins', sans-serif;
  font-size: 14px;
  background-color: transparent;
  font-weight: bold;
  color: white;
  @media only screen and (max-width: 600px) {
    display: none;
  }
`

const NavigationContainer = styled.div`
  margin: 0 auto;
  max-width: 960px;
`

const OuterNavigationContainer = styled.div`
  background-color: #47c0c7;
  z-index: 10;
  padding: 1.45rem 1.0875rem;
  position: ${props => (props.isIndex ? 'initial' : 'fixed')};
  top: 0;
  left: 0;
  right: 0;
`

const Header = ({ isIndex }) => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "logo.png" }) {
          childImageSharp {
            fixed(width: 154, height: 45) {
              ...GatsbyImageSharpFixed_noBase64
            }
          }
        }
      }
    `}
    render={data => (
      <OuterNavigationContainer isIndex={isIndex}>
        <NavigationContainer>
          <Container>
            <Helmet>
              <link rel="shortcut icon" type="image/x-icon" href={favicon} />
              <title>Destination Unknown</title>
            </Helmet>
            <div>
              <Link
                to="/"
                style={{
                  color: `white`,
                  textDecoration: `none`,
                }}
              >
                <Img fixed={data.placeholderImage.childImageSharp.fixed} />
              </Link>
            </div>
            {!isIndex && (
              <NavigationButton>
                <Link
                  to="/"
                  style={{
                    color: `white`,
                    textDecoration: `none`,
                  }}
                >
                  Kies nieuwe bestemming
                </Link>
              </NavigationButton>
            )}
          </Container>
        </NavigationContainer>
      </OuterNavigationContainer>
    )}
  />
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
