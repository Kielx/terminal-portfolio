import React from "react"
import PropTypes from "prop-types"
import Typewriter from "typewriter-effect"

const Header = ({ siteTitle }) => {
  return (
    <header style={{ display: "inline-flex" }}>
      <h1>{">"}</h1>
      <h1>
        <Typewriter
          style={{ marginTop: 0, paddingTop: 0 }}
          options={{
            deleteSpeed: "natural",
          }}
          onInit={typewriter => {
            typewriter
              .typeString("Software Developer")
              .pauseFor(2500)
              .deleteAll()
              .typeString("Problem solver")
              .pauseFor(2500)
              .deleteAll()
              .typeString("Krzysztof Pantak")

              .start()
          }}
        />
      </h1>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
