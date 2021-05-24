import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import Typewriter from "typewriter-effect"

const Header = ({ siteTitle }) => (
  <header>
    {/* <h1 style={{ marginBottom: 0, lineHeight: 1 }}>Krzysztof_Pantak@_Dev:$</h1> */}
    <div style={{ display: "inline-flex" }}>
      <h1>{">"}</h1>
      <h1>
        <Typewriter
          style={{ marginTop: 0, paddingTop: 0 }}
          options={{
            loop: true,
            deleteSpeed: "natural",
          }}
          onInit={typewriter => {
            typewriter
              .pauseFor(1500)
              .typeString("Software Developer")
              .pauseFor(2500)
              .deleteAll()
              .typeString("MERN Stack Developer")
              .pauseFor(2500)
              .deleteAll()
              .typeString("Computer Science Student")
              .pauseFor(2500)
              .deleteAll()
              .start()
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
