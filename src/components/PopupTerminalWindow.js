import React from "react"
import Typewriter from "typewriter-effect"

import "../pages/terminalPages.css"

export default function PopupTerminalWindow({
  popupHeader,
  popupImageAlt,
  popupText,
  popupImageSrc,
}) {
  return (
    <div>
      <div className="popupTerminaWindowContainer">
        <h1 className="popupTerminaWindowHeader">
          <Typewriter
            onInit={typewriter => {
              typewriter
                .typeString(`${popupHeader}`)
                .start()
                .callFunction(function (state) {
                  state.elements.cursor.style.display = "none"
                })
            }}
          />
        </h1>
        <img
          src={`${popupImageSrc}`}
          className="popupTerminaWindowImage"
          alt={popupImageAlt}
        ></img>

        <p className="popupTerminaWindowText">{popupText}</p>
      </div>
    </div>
  )
}
