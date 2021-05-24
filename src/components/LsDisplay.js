import React, { useState } from "react"
import Typewriter from "typewriter-effect"

//importing winbox https://github.com/nextapps-de/winbox/issues/1
import WinBox from "winbox/src/js/winbox"
import "winbox/dist/css/winbox.min.css"

const LsDisplay = () => {
  const [typeWriterCursor, setTypeWriterCursor] = useState("|")
  const [items, setItems] = useState("")

  const itemsList = (
    <ul>
      <li>
        <a
          style={{ cursor: "pointer" }}
          onClick={() => {
            new WinBox({
              title: "About Me",
              modal: false,
              x: "20%",
              y: "20%",
              onfocus: function () {
                this.setBackground("#00aa00")
              },
              onblur: function () {
                this.setBackground("#777")
              },
              url: "/about",
            })
          }}
        >
          /About
        </a>
      </li>
      <li>
        <a
          style={{ cursor: "pointer" }}
          onClick={() => {
            new WinBox({
              title: "404",
              modal: false,
              x: "20%",
              y: "20%",
              onfocus: function () {
                this.setBackground("#00aa00")
              },
              onblur: function () {
                this.setBackground("#777")
              },
              url: "/404",
            })
          }}
        >
          /404
        </a>
      </li>
    </ul>
  )

  const TypeWriter = (
    <Typewriter
      options={{ cursor: typeWriterCursor }}
      onInit={typewriter => {
        typewriter
          .pauseFor(1000)
          .typeString("dir")
          .pauseFor(100)
          .callFunction(() => {
            setItems(itemsList)
          })
          .callFunction(function (state) {
            state.elements.cursor.style.display = "none"
          })
          .start()
      }}
    />
  )

  return (
    <div
      className="LsDisplayWindow"
      tabindex="0"
      style={{ backgroundColor: "#111", border: "1px solid #ccc" }}
    >
      <div className="LsDisplayTaskbar" style={{ width: "100%", padding: 5 }}>
        Cmd
      </div>
      <h3
        style={{
          padding: 5,
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
      <p style={{ padding: 5, margin: 0 }}>{items}</p>
    </div>
  )
}

export default LsDisplay
