import * as React from "react"

import MainLayout from "../components/MainLayout"
import Seo from "../components/seo"
import LsDisplay from "../components/LsDisplay"

const IndexPage = () => (
  <MainLayout>
    <Seo title="Home" />

    <div className="container">
      <LsDisplay></LsDisplay>
    </div>
  </MainLayout>
)

export default IndexPage
