import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import Typewriter from "typewriter-effect"
import Toggle from "react-toggle"
import "react-toggle/style.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons"

const Header = ({ siteTitle }) => {
  const [isLoaded, setIsLoaded] = useState(
    typeof window !== "undefined"
      ? sessionStorage.getItem("isLoaded") || false
      : false
  )

  const [lightMode, setLightMode] = useState(
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("lightMode")) || false
      : false
  )

  useEffect(() => {
    sessionStorage.setItem("isLoaded", isLoaded)
  }, [isLoaded])

  useEffect(() => {
    localStorage.setItem("lightMode", lightMode)
    setLightMode(lightMode)
    lightMode
      ? document.documentElement.classList.add("light")
      : document.documentElement.classList.remove("light")
  }, [lightMode])

  return (
    <header>
      <div style={{ display: "inline-flex" }}>
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
      </div>
      {typeof window !== "undefined" ? (
        <Toggle
          defaultChecked={lightMode}
          icons={{
            checked: <FontAwesomeIcon icon={faSun} />,
            unchecked: <FontAwesomeIcon icon={faMoon} />,
          }}
          onChange={() => {
            setLightMode(!lightMode)
          }}
          aria-label="dark mode toggle"
        />
      ) : (
        ""
      )}
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
