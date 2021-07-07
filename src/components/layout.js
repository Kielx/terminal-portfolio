/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import "@fontsource/roboto-mono"
import "../styles/global.css"
import "../styles/styles.scss"
import "../styles/layout.css"

const Layout = ({ children }) => {
  /* const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `) */

  return (
    <div className="mainContainer">
      {children}
      <footer>
        © {new Date().getFullYear()} Krzysztof Pantak{" | "}
        <Link to="/contact">Contact</Link>
        {" | "}
        <a href="https://github.com/Kielx">Github</a>
      </footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
