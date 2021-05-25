import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Typewriter from "typewriter-effect"

import Layout from "../components/Layout"
import Seo from "../components/seo"

import "./terminalPages.css"

const about = () => {
  return (
    <div>
      <Seo title="About Me" />

      <div className="aboutContainer">
        <h1 className="aboutHeader">
          <Typewriter
            onInit={typewriter => {
              typewriter
                .typeString("Expenses Analyzer")
                .start()
                .callFunction(function (state) {
                  state.elements.cursor.style.display = "none"
                })
            }}
          />
        </h1>
        <StaticImage
          src="../images/expenses-analyzer-ascii.png"
          alt="Expenses Analyzer icon in ASCII"
          className="aboutImage"
          imgClassName="aboutImageImage"
          imgStyle={{ margin: "auto" }}
        ></StaticImage>

        <p className="aboutText">
          Expenses analyzer is a React-based app, that allows the user to
          analyze bank statements from (at the moment) polish Mbank bank
          accounts.
        </p>
      </div>
    </div>
  )
}

export default about
