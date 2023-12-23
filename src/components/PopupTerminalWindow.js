import React from "react"
import Typewriter from "typewriter-effect"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faLink } from "@fortawesome/free-solid-svg-icons"
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function PopupTerminalWindow({
  title,
  popupImageAlt,
  popupText,
  video,
  popupImageSrc,
  popupGithubLink,
  popupLiveLink,
  techIcons,
  Cloud,
  html,
}) {
  let link = ""
  techIcons = techIcons?.map(icon => (
    <li className="techItem tooltip" key={icon}>
      <span className="tooltiptext">{`${
        icon.charAt(0).toUpperCase() + icon.slice(1)
      }`}</span>
      <img
        className="svgIcon"
        src={`https://cdn.jsdelivr.net/npm/simple-icons@10.3.0/icons/${icon}.svg`}
        alt="Tech icon"
      />
    </li>
  ))
  Cloud = Cloud?.map(icon => (
    <li className="techItem tooltip" key={icon}>
      <span className="tooltiptext">{`${
        icon.charAt(0).toUpperCase() + icon.slice(1)
      }`}</span>
      <img
        className="svgIcon"
        src={`https://cdn.jsdelivr.net/npm/simple-icons@10.3.0/icons/${icon}.svg`}
        alt="Tech icon"
      />
    </li>
  ))
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <div
        className="popupTerminaWindowContainer"
        style={{ backgroundImage: popupImageSrc?.length>0? `url(${popupImageSrc[0]})`:'' }}
      >
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
        {/* {video === "false" && popupImageSrc!=null?(
          <div className="popupTerminalWindowImageContainer">
            {(link = popupLiveLink || popupGithubLink) ? ( // eslint-disable-line no-cond-assign
              <a href={link} target="_blank" rel="noopener noreferrer">
                <img
                  src={`${
                    /^https/.test(popupImageSrc)
                      ? popupImageSrc
                      : "/" + popupImageSrc
                  }`}
                  className="popupTerminaWindowImage"
                  alt={popupImageAlt}
                ></img>
              </a>
            ) : (
              <img
                src={`${
                  /^https/.test(popupImageSrc)
                    ? popupImageSrc
                    : "/" + popupImageSrc
                }`}
                className="popupTerminaWindowImage"
                alt={popupImageAlt}
              ></img>
            )}
          </div>
        ) : popupImageSrc!=null?(
          <div className="popupTerminalWindowImageContainer">
            <video
              height="100%"
              width="100%"
              controls
              autoplay
              muted
              loop
              playsinline
              className="popupTerminaWindowImage"
            >
              <source src={video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        ):null} */}
      {video === "false" && popupImageSrc?.length > 0 ? (
        <Slider {...settings}>
          {popupImageSrc.map((image, index) => (
            <div key={index} className="popupTerminalWindowImageContainer">
              {(link = popupLiveLink || popupGithubLink) ? (
                <a href={link} target="_blank" rel="noopener noreferrer">
                  <img
                    src={`${
                      /^https/.test(image)
                        ? image
                        : '/' + image
                    }`}
                    className="popupTerminaWindowImage"
                    alt={popupImageAlt}
                  ></img>
                </a>
              ) : (
                <img
                  src={`${
                    /^https/.test(image)
                      ? image
                      : '/' + image
                  }`}
                  className="popupTerminaWindowImage"
                  alt={popupImageAlt}
                ></img>
              )}
            </div>
          ))}
        </Slider>
      ) : video != null  && video!=="false"? (
        <div className="popupTerminalWindowImageContainer">
          <video
            height="100%"
            width="100%"
            controls
            autoPlay
            muted
            loop
            playsInline
            className="popupTerminaWindowImage"
          >
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      ) : null}
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
                {Cloud?.length!=0?<><h4>Cloud-Services used:</h4>
                <ul className="techItemsList">{Cloud}</ul></>:null}
              </div>
            </>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  )
}
