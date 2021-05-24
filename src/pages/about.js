import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Typewriter from "typewriter-effect"

import Layout from "../components/Layout"
import Seo from "../components/seo"

import "./terminalPages.css"

const about = () => (
  <>
    <Seo title="About Me" />

    <div className="aboutContainer">
      <h1 className="aboutHeader">
        <Typewriter
          onInit={typewriter => {
            typewriter.typeString("About me").start()
          }}
        />
      </h1>
      <StaticImage
        src="../images/mojephotoASCII.png"
        alt="My ASCII Photo"
        className="aboutImage"
        imgClassName="aboutImageImage"
        imgStyle={{ margin: "auto" }}
      ></StaticImage>

      <p className="aboutText">
        Software Developer currently working on finishing my CS Degree while
        also being a Law Enforcer, EULEX Peacekeeping Mission in Kosovo Veteran,
        Strength Coach and a family man. Based in 🇵🇱 Poland.
      </p>
    </div>
  </>
)

export default about
