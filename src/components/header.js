import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

const NavigationButton = styled.button`
  background-color: #47c0c7;
  border: 1px solid white;
  border-radius: 16px;
  padding: 8px 24px;
  margin-left: 8px;
  margin-right: 8px;
  color: white;
`

const Container = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
`

const Header = ({ siteTitle }) => (
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
      <div>
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `1.45rem 1.0875rem`,
          }}
        >
        <Container>
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
          <div>
            <NavigationButton>Hoe het werkt</NavigationButton>
            <NavigationButton>Bestemmingen</NavigationButton>
            <NavigationButton>Over ons</NavigationButton>
          </div>
        </Container>
        </div>
      </div>
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
