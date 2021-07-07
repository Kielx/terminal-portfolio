import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import Typewriter from "typewriter-effect"

const Header = ({ siteTitle }) => {
  const [isLoaded, setIsLoaded] = useState(
    sessionStorage.getItem("isLoaded") || false
  )

  useEffect(() => {
    sessionStorage.setItem("isLoaded", isLoaded)
  }, [isLoaded])

  return (
    <header style={{ display: "inline-flex" }}>
      <h1>{">"}</h1>
      <h1>
        {isLoaded ? (
          "Krzysztof Pantak"
        ) : (
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
                .callFunction(() => {
                  setIsLoaded(true)
                })
                .start()
            }}
          />
        )}
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
