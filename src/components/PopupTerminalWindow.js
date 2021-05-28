import React from "react"
import Typewriter from "typewriter-effect"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faLink } from "@fortawesome/free-solid-svg-icons"
import "../pages/terminalPages.css"

export default function PopupTerminalWindow({
  popupHeader,
  popupImageAlt,
  popupText,
  popupImageSrc,
  popupGithubLink,
  popupLiveLink,
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
        {popupGithubLink || popupLiveLink ? (
          <div className="popupTerminalWindowLinkIcons">
            {popupLiveLink ? (
              <a href={popupLiveLink} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon
                  icon={faLink}
                  className="popupTerminalWindowLinkIcon"
                  size="2x"
                />
              </a>
            ) : (
              ""
            )}
            {popupGithubLink ? (
              <a
                href={popupGithubLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faGithub}
                  className="popupTerminalWindowLinkIcon"
                  size="2x"
                />
              </a>
            ) : (
              ""
            )}
          </div>
        ) : (
          ""
        )}

        <p className="popupTerminaWindowText">{popupText}</p>
      </div>
    </div>
  )
}
