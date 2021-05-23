import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Typewriter from "typewriter-effect"

//importing winbox https://github.com/nextapps-de/winbox/issues/1
import WinBox from "winbox/src/js/winbox"
import "winbox/dist/css/winbox.min.css"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Header from "../components/header"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <h1 style={{ marginBottom: 0 }}>Krzysztof_Pantak@_Dev:</h1>
    <div style={{ display: "inline-flex" }}>
      <h1>$:</h1>
      <h1>
        <Typewriter
          options={{
            autoStart: true,
            loop: true,
            strings: [
              "Software Developer",
              "MERN Stack Developer",
              "Computer Science Student",
            ],
            deleteSpeed: "natural",
          }}
        />
      </h1>
    </div>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ display: "inline-flex", width: 500 }}>
      <p style={{ width: "50%", display: "inline-block" }}>
        <Link to="/page-2/">Go to page 2</Link> <br />
        <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
      </p>
      <a
        style={{ cursor: "pointer" }}
        onClick={() => {
          new WinBox({
            title: "About Me",
            // modal: true,

            modal: true,
            onfocus: function () {
              this.setBackground("#00aa00")
            },
            onblur: function () {
              this.setBackground("#777")
            },
            url: "/404/",
          })
        }}
      >
        /About
      </a>
    </div>
  </Layout>
)

export default IndexPage
