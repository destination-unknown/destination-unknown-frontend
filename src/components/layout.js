import React from 'react'
import PropTypes from 'prop-types'
import Header from './header'
import './layout.css'
import '../../node_modules/normalize.css/normalize.css'
import styled from 'styled-components'

const ChildrenContainer = styled.div`
  margin-top: ${props => (props.isIndex ? 0 : '95px')};
`

const Layout = ({ children, isIndex }) => (
  <>
    <Header isIndex={isIndex} />
    <ChildrenContainer isIndex={isIndex}>{children}</ChildrenContainer>
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  isIndex: PropTypes.bool.isRequired,
}

export default Layout
