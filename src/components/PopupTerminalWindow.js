import React from "react"
import Typewriter from "typewriter-effect"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faLink } from "@fortawesome/free-solid-svg-icons"
import simpleIcons from "simple-icons"
import "../styles/styles.scss"

export default function PopupTerminalWindow({
  title,
  popupImageAlt,
  popupText,
  popupImageSrc,
  popupGithubLink,
  popupLiveLink,
  techIcons,
  html,
}) {
  let link = ""
  techIcons = techIcons?.map(icon =>
    simpleIcons[icon]?.["title"] ? (
      <li className="techItem">
        <svg
          className="svgIcon"
          viewBox="0 0 25 25"
          role="img"
          alt={simpleIcons[icon]?.["title"]}
          preserveAspectRatio="xMidYMid meet"
        >
          <path d={simpleIcons[icon]?.["path"]} />
        </svg>
      </li>
    ) : (
      ""
    )
  )
  return (
    <div>
      <div className="popupTerminaWindowContainer">
        <h1 className="popupTerminaWindowHeader">
          <Typewriter
            onInit={typewriter => {
              typewriter
                .typeString(`${title}`)
                .start()
                .callFunction(function (state) {
                  state.elements.cursor.style.display = "none"
                })
            }}
          />
        </h1>
        <div className="popupTerminalWindowImageContainer">
          {(link = popupLiveLink || popupGithubLink) ? (
            <a href={link} target="_blank" rel="noopener noreferrer">
              <img
                src={`/${popupImageSrc}`}
                className="popupTerminaWindowImage"
                alt={popupImageAlt}
              ></img>
            </a>
          ) : (
            <img
              src={`/${popupImageSrc}`}
              className="popupTerminaWindowImage"
              alt={popupImageAlt}
            ></img>
          )}
        </div>

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
        <div className="popupTerminaWindowTextContainer">
          <div
            className="popupTerminaWindowText"
            dangerouslySetInnerHTML={{ __html: html }}
          ></div>
          <p className="popupTerminaWindowText">{popupText}</p>
          {techIcons ? (
            <>
              <div className="break"></div>
              <div className="popupTerminalWindowFooter">
                <h4>Tech used:</h4>
                <ul className="techItemsList">{techIcons}</ul>
              </div>
            </>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  )
}
