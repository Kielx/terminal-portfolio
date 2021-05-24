import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

//importing winbox https://github.com/nextapps-de/winbox/issues/1
import WinBox from "winbox/src/js/winbox"
import "winbox/dist/css/winbox.min.css"

import MainLayout from "../components/MainLayout"
import Seo from "../components/seo"
import Header from "../components/header"

const IndexPage = () => (
  <MainLayout>
    <Seo title="Home" />

    <div className="container">
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
      </div>
    </div>
  </MainLayout>
)

export default IndexPage
