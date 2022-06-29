/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import "../styles/styles.scss"
import "../styles/global.css"
import "../styles/layout.css"
import * as React from "react"
import PropTypes from "prop-types"
import Footer from "./Footer"
import "winbox/dist/css/winbox.min.css"

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
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
