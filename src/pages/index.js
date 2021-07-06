import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import LsDisplay from "../components/LsDisplay"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />

    <div className="container">
      <LsDisplay text="~ $ls -la" delay="natural"></LsDisplay>
    </div>
  </Layout>
)

export default IndexPage
