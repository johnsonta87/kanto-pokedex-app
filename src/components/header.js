import { Link, graphql, StaticQuery } from "gatsby"
import React from "react"
import { Container } from 'semantic-ui-react'
import styled from 'styled-components'

const HeaderStyles = styled.header`
  text-align: center;
  background-color: #FF1111;
  color: #fff;
  padding: 10px 0;
  -webkit-box-shadow: 0px 5px 15px 0px rgba(0,0,0,0.35);
  -moz-box-shadow: 0px 5px 15px 0px rgba(0,0,0,0.35);
  box-shadow: 0px 5px 15px 0px rgba(0,0,0,0.35);
  position: relative;
  z-index: 9;

  a {
    color: #fff;
    text-decoration: none;

    &:hover {
      color: #fff;
    }
  }
`;

const Header = ({ data }) => {
  return (
    <StaticQuery
      query={graphql`
        query {
          site {
            siteMetadata {
              title
              description
            }
          }
        }
      `}
      render={data => (
        <HeaderStyles>
          <Container>
            <h1 style={{ margin: 0 }}>
              <Link
                to="/"
              >
                {data.site.siteMetadata.title}
              </Link>
            </h1>
            {data.site.siteMetadata.description}
          </Container>
        </HeaderStyles>
      )}
    />
  )
}


export default Header
