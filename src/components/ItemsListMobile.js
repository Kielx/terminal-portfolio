import React from "react"

import { useStaticQuery, graphql, Link } from "gatsby"

export default function ItemsListMobile() {
  const data = useStaticQuery(graphql`
    query {
      projects: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "//projects/[^/]+$/" } }
      ) {
        edges {
          node {
            frontmatter {
              listName
              nameOfClass
              popupGithubLink
              popupImageAlt
              popupImageSrc
              popupLiveLink
              techIcons
              title
              slug
            }
            html
            fileAbsolutePath
          }
        }
      }
      info: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "//info/[^/]+$/" } }
      ) {
        edges {
          node {
            frontmatter {
              listName
              nameOfClass
              popupGithubLink
              popupImageAlt
              popupImageSrc
              popupLiveLink
              techIcons
              title
              slug
            }
            html
            fileAbsolutePath
          }
        }
      }
    }
  `)

  const infoMobile = data.info.edges.map(item => (
    <li key={item.node.frontmatter.title} className="infoItem">
      <Link
        className="popupWindowLinkButton"
        style={{ cursor: "pointer" }}
        to={item.node.frontmatter.slug}
      >
        {item.node.frontmatter.listName}
      </Link>
    </li>
  ))

  const projectsMobile = data.projects.edges.map(item => (
    <li
      key={item.node.frontmatter.title}
      className={item.node.frontmatter.nameOfClass}
    >
      <Link
        className="popupWindowLinkButton"
        style={{ cursor: "pointer" }}
        to={item.node.frontmatter.slug}
      >
        {item.node.frontmatter.listName}
      </Link>
    </li>
  ))

  const mappedItemsMobile = () => {
    return (
      <>
        <li>→ Info:</li> {infoMobile}{" "}
        <li className="infoItem">
          <Link
            className="popupWindowLinkButton"
            style={{ cursor: "pointer" }}
            to="/contact"
          >
            <span role="img" aria-label="e-mail">
              📧
            </span>{" "}
            /Contact
          </Link>
        </li>{" "}
        <li>→ Projects:</li>
        {projectsMobile} <li className="miniProject">→ Mini-Projects:</li>
      </>
    )
  }

  return <ul className="mappedItemsList">{mappedItemsMobile()}</ul>
}
