/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import styled from 'styled-components'

const FooterStyles = styled.footer`
  margin: 2rem auto;
  text-align: center;
`;

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <main>{children}</main>
      <FooterStyles>
        <p>
          <strong>Data sources:</strong> <a href="https://pokeapi.co/" target="_blank" rel="noreferrer">https://pokeapi.co</a>
        </p>
        {new Date().getFullYear()} - Built by <a href="https://github.com/johnsonta87" target="_blank" rel="noreferrer">@johnsonta87</a> using <a href="https://www.gatsbyjs.com/" target="_blank" rel="noreferrer">Gatsby React</a>.
        </FooterStyles>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
