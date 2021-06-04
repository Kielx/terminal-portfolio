import React from "react"
import { graphql } from "gatsby"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark
  return (
    <div className="blog-post-container">
      <div className="blog-post">
        <h1>{frontmatter.listName}</h1>
        <h2>{frontmatter.popupHeader}</h2>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </div>
  )
}

export const pageQuery = graphql`
  query {
    markdownRemark {
      frontmatter {
        listName
        nameOfClass
        popupGithubLink
        popupHeader
        popupImageAlt
        popupImageSrc
        popupLiveLink
        popupText
        techIcons
        title
      }
      html
    }
  }
`
