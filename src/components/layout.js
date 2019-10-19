import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import { createGlobalStyle } from "styled-components"

import Menu from "../components/Menu"
import Logo from "../components/Logo"

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Barlow+Condensed:300,700|Source+Sans+Pro:400,400i,700');

  :root {
    --color-1: #2A2935;
    --color-2: #4effc6;
    --color-3: #FF278F;
    --color-4: #F8F8FA;
    --color-5: #FF278F;
  }

  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: 'Source Sans Pro', sans-serif;
    background: var(--color-1);
    padding: 20px;
    overflow: auto;
  }

  .app {
    background: var(--color-4);
  }

  .page {
    display: flex;
    min-height: calc(100vh - 40px);
    flex-direction: column;
    background-color: var(--color-4);
    /* background-image: url('/img/bg.png'); */
    background-size: 90% auto;
    background-position: center 20px;
    background-repeat: no-repeat;
  }
`

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={() => (
      <div className="container bg-primary page">
        <GlobalStyle />
        <Logo />
        <Menu />
        {children}
      </div>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
