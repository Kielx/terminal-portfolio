import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import Typewriter from "typewriter-effect"

const Header = ({ siteTitle }) => (
  <header>
    <h1 style={{ marginBottom: 0, lineHeight: 1 }}>Krzysztof_Pantak@_Dev:$</h1>
    <div style={{ display: "inline-flex" }}>
      <h1>></h1>
      <h1>
        <Typewriter
          style={{ marginTop: 0, paddingTop: 0 }}
          options={{
            autoStart: true,
            loop: true,
            strings: [
              "Software Developer",
              "MERN Stack Developer",
              "Computer Science Student",
            ],
            deleteSpeed: "natural",
          }}
        />
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
