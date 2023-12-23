import React, { useState } from "react"
import PropTypes from "prop-types"
import Typewriter from "typewriter-effect"

import "react-toggle/style.css"

const Header = ({ siteTitle }) => {
  const [isLoaded, setIsLoaded] = useState(
    typeof window !== "undefined"
      ? sessionStorage.getItem("isLoaded") || false
      : false
  )

  return (
    <header>
      <div style={{ display: "inline-flex" }}>
        <h1>{">"}</h1>
        <h1>
        {isLoaded && false ? (
        "Utsav Moradiya"
      ) : (
        <>
          <Typewriter
            style={{ marginTop: 0, paddingTop: 0, color: "white" }}
            options={{
              deleteSpeed: "natural",
            }}
            onInit={(typewriter) => {
                typewriter
                  .typeString("Software Developer")
                  .pauseFor(2500)
                  .deleteAll()
                  .typeString("Problem solver")
                  .pauseFor(2500)
                  .deleteAll()
                  .typeString("Utsav Moradiya")
                  .start();
              
            }}
          />
        </>
      )}
        </h1>
      </div>
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
