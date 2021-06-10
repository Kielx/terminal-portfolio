import * as React from "react"
import PropTypes from "prop-types"
import Typewriter from "typewriter-effect"

const Header = ({ siteTitle }) => (
  <header>
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
              .typeString("Software Developer")
              .deleteAll()
              .typeString("Problem solver")
              .deleteAll()
              .typeString("Creator")
              .deleteAll()
              .typeString("Krzysztof Pantak")
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
