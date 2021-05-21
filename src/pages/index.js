import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Typewriter from "typewriter-effect"

import Layout from "../components/layout"
import Seo from "../components/seo"

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
    </div>
  </Layout>
)

export default IndexPage
