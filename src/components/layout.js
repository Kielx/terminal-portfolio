/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import ReactDOM from "react-dom"
import PropTypes from "prop-types"
//importing winbox https://github.com/nextapps-de/winbox/issues/1
import WinBox from "winbox/src/js/winbox"
import "winbox/dist/css/winbox.min.css"
import Contact from "./Contact"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
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

  const checkScreenWidthMobile = () => {
    return window.screen.width < 1024 ? true : false
  }

  const desktopButton = (
    <button
      className="popupWindowLinkButton"
      style={{ cursor: "pointer" }}
      onClick={() => {
        const win = new WinBox({
          title: "Contact me",
          width: "80%",
          height: "80%",
          x: "center",
          y: "center",
          onfocus: function () {
            this.removeClass("wb-no-focus")
            this.addClass("wb-focus")
          },
          onblur: function () {
            this.removeClass("wb-focus")
            this.addClass("wb-no-focus")
          },
        })

        ReactDOM.render(
          React.createElement(Contact, {
            close: () => win.close(),
          }),
          win.body
        )
      }}
    >
      <span role="img" aria-label="e-mail">
        📧
      </span>{" "}
      Contact
    </button>
  )

  return (
    <div className="mainContainer">
      {children}
      <footer>
        © {new Date().getFullYear()} Krzysztof Pantak{" | "}
        <Link to="/">🏠 Home</Link> {" | "}
        {checkScreenWidthMobile() ? (
          <Link to="/contact">Contact</Link>
        ) : (
          desktopButton
        )}
        {" | "}
        <a
          href="https://www.github.com/Kielx"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="popupTerminalWindowLinkIcon">
            <FontAwesomeIcon icon={faGithub} size="md" />
            {` GitHub`}
          </span>
        </a>
      </footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
