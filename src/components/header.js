import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'
import { slide as Menu } from 'react-burger-menu'
import { darken } from 'polished'

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr max-content;
  @media only screen and (max-width: 600px) {
    margin: 0 auto;
    width: 154px;
  }
`

const NavigationButton = styled.button`
  border: none;
  border-radius: 22px;
  padding: 12px 32px;
  font-family: 'Poppins', sans-serif;
  font-size: 14px;
  background-color: white;
  font-weight: bold;
  color: #399397;

  &:hover {
    background-color: ${darken(0.1, 'white')};
    cursor: pointer;
  }

  @media only screen and (max-width: 600px) {
    display: none;
  }
`

const NavigationContainer = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  padding: 1.45rem 1.0875rem;
  @media only screen and (max-width: 600px) {
    background-color: #4ec0c6;
    padding: 0.5rem;
  }
`

const NavigationButtonContainer = styled.div`
  a {
    margin-left: 16px;
  }
`

const OuterNavigationContainer = styled.div`
  background-color: ${props => (props.isIndex ? 'transparent' : '#39b9be')};
  z-index: 10;
  position: ${props => props.position};
  top: 0;
  left: 0;
  right: 0;
`

const StyledMenu = styled.div`
  display: none;
  @media only screen and (max-width: 600px) {
    display: block;
    /* Position and sizing of burger button */
    .bm-burger-button {
      float: left;
      position: relative;
      display: block;
      width: 36px;
      height: 30px;
      top: 18px;
      left: 24px;
    }

    /* Color/shape of burger icon bars */
    .bm-burger-bars {
      background: white;
      border-radius: 3px;
    }

    /* Color/shape of burger icon bars on hover*/
    .bm-burger-bars-hover {
      /* background: #a90000; */
    }

    /* Position and sizing of clickable cross button */
    .bm-cross-button {
      height: 24px;
      width: 24px;
    }

    /* Color/shape of close button cross */
    .bm-cross {
      background: white;
    }

    /*
Sidebar wrapper styles
Note: Beware of modifying this element as it can break the animations - you should not need to touch it in most cases
*/
    .bm-menu-wrap {
      position: fixed;
      height: 100%;
      max-width: 300px;
    }

    /* General sidebar styles */
    .bm-menu {
      background: #34c0c7;
      overflow: hidden;
      font-size: 1.15em;
    }

    /* Morph shape necessary with bubble or elastic */
    .bm-morph-shape {
      fill: #373a47;
    }

    /* Wrapper for item list */
    .bm-item-list {
      background: #34c0c7;
      margin-top: 2.5em;
      padding-top: 1em;
      padding-left: 1.2em;
    }

    /* Individual item */
    .bm-item {
      padding-top: 8px;
      font-family: 'Open Sans', sans-serif;
      border-bottom: 1px solid white;
      color: white;
      display: inline-block;
      text-decoration: none;
      padding-bottom: 14px;
      margin-right: 1.2em;

      &:last-of-type {
        border-bottom: none;
      }
    }

    /* Styling of overlay */
    .bm-overlay {
      background: rgba(0, 0, 0, 0.3);
    }
  }
`

const Header = ({ isIndex, isBlog, position, shouldShowNextDestination }) => (
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
      <OuterNavigationContainer isIndex={isIndex} position={position}>
        <StyledMenu>
          <Menu disableAutoFocus>
            {!isBlog && (
              <a id="blog" className="menu-item" href="/blog">
                Blog
              </a>
            )}
            {shouldShowNextDestination && (
              <a id="next-destination" className="menu-item" href="/">
                Ontdek je volgende bestemming
              </a>
            )}
            {!isIndex && (
              <a id="choose-new-destination" className="menu-item" href="/">
                Kies nieuwe bestemming
              </a>
            )}
          </Menu>
        </StyledMenu>
        <NavigationContainer>
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
            <NavigationButtonContainer>
              {!isBlog && (
                <Link
                  to="/blog"
                  style={{
                    display: `inline-block`,
                    color: `white`,
                    textDecoration: `none`,
                  }}
                >
                  <NavigationButton>Blog</NavigationButton>
                </Link>
              )}
              {shouldShowNextDestination && (
                <Link
                  to="/"
                  style={{
                    display: `inline-block`,
                    color: `white`,
                    textDecoration: `none`,
                  }}
                >
                  <NavigationButton>
                    Ontdek je volgende bestemming
                  </NavigationButton>
                </Link>
              )}
              {!isIndex && (
                <Link
                  to="/"
                  style={{
                    display: `inline-block`,
                    color: `white`,
                    textDecoration: `none`,
                  }}
                >
                  <NavigationButton>Kies nieuwe bestemming</NavigationButton>
                </Link>
              )}
            </NavigationButtonContainer>
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
