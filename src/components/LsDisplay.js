import React, { useState } from "react"
import Typewriter from "typewriter-effect"

import ItemsList from "../components/ItemsList"
import "../styles/styles.scss"
import "../styles/winbox.scss"
import "../styles/mainTerminalWindow.scss"

const LsDisplay = () => {
  const [isLoaded, setIsLoaded] = useState(false)

  const TypeWriter = (
    <Typewriter
      onInit={typewriter => {
        typewriter
          .typeString("dir")
          .pauseFor(100)
          .callFunction(() => {
            setIsLoaded(true)
          })
          .callFunction(function (state) {
            state.elements.cursor.style.display = "none"
          })
          .start()
      }}
    />
  )

  return (
    <div className="LsDisplayWindow">
      <div className="LsDisplayTaskbar">Cmd</div>
      <h3>
        {"C:/Users/Krzysztof Pantak"}
        <div className="break"></div>
        {"> "}
        {TypeWriter}
      </h3>
      {isLoaded ? <ItemsList></ItemsList> : ""}
    </div>
  )
}

export default LsDisplay
