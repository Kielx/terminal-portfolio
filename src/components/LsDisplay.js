import React, { useState } from "react"
import Typewriter from "typewriter-effect"

import ItemsList from "../components/ItemsList"
import "./styles.css"

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
    <div className="LsDisplayWindow" style={{ backgroundColor: "#111" }}>
      <div className="LsDisplayTaskbar" style={{ width: "100%", padding: 5 }}>
        Cmd
      </div>
      <h3
        style={{
          padding: 10,
          marginBottom: 0,
          display: "inline-flex",
          flexWrap: "wrap",
          whiteSpace: "pre-wrap",
        }}
      >
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
