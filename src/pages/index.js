import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ display: "inline-flex", width: 500 }}>
      <StaticImage
        src="../images/testmojephoto2.png"
        quality={100}
        width={300}
        alt="My photo"
        style={{ marginBottom: `1.45rem` }}
      />

      <p style={{ width: "50%", display: "inline-block" }}>
        <Link to="/page-2/">Go to page 2</Link> <br />
        <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
      </p>
    </div>
  </Layout>
)

export default IndexPage
