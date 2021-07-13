import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import LsDisplay from "../components/LsDisplay"
import Header from "../components/header"

const IndexPage = () => {
  const isBrowser = typeof window !== "undefined"

  return (
    <>
      <Seo title="Home" />
      <Layout>
        {isBrowser ? <Header /> : ""}
        <div className="container">
          <LsDisplay text="~ $ls -l" delay="natural"></LsDisplay>
        </div>
      </Layout>
    </>
  )
}

export default IndexPage
