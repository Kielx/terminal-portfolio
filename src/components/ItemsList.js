import React from "react"
import ReactDOM from "react-dom"
import { useStaticQuery, graphql } from "gatsby"
//importing winbox https://github.com/nextapps-de/winbox/issues/1
import WinBox from "winbox/src/js/winbox"
import "winbox/dist/css/winbox.min.css"

import Contact from "./Contact"
import PopupTerminalWindow from "../components/PopupTerminalWindow"

export default function ItemsList() {
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

  const createWinboxInstance = item => {
    const win = new WinBox({
      title: item.node.frontmatter.title,
      width: "80%",
      height: "80%",
      x: "center",
      y: "center",
      onfocus: function () {
        this.removeClass("wb-no-focus")
        this.addClass("wb-focus")
      },
      onblur: function () {
        this.removeClass("wb-focus")
        this.addClass("wb-no-focus")
      },
    })
    ReactDOM.render(
      React.createElement(PopupTerminalWindow, {
        title: item.node.frontmatter.title,
        popupImageSrc: item.node.frontmatter.popupImageSrc,
        popupImageAlt: item.node.frontmatter.popupImageAlt,
        popupGithubLink: item.node.frontmatter.popupGithubLink,
        popupLiveLink: item.node.frontmatter.popupLiveLink,
        techIcons: item.node.frontmatter.techIcons,
        html: item.node.html,
      }),
      win.body
    )
  }

  const info = data.info.edges.map(item => (
    <li key={item.node.frontmatter.title} className="infoItem">
      <button
        className="popupWindowLinkButton"
        style={{ cursor: "pointer" }}
        onClick={() => createWinboxInstance(item)}
      >
        {item.node.frontmatter.listName}
      </button>
    </li>
  ))

  const projects = data.projects.edges.map(item => (
    <li
      key={item.node.frontmatter.title}
      className={item.node.frontmatter.nameOfClass}
    >
      <button
        className="popupWindowLinkButton"
        style={{ cursor: "pointer" }}
        onClick={() => createWinboxInstance(item)}
      >
        {item.node.frontmatter.listName}
      </button>
    </li>
  ))

  const contactItem = (
    <li className="infoItem">
      <button
        className="popupWindowLinkButton"
        style={{ cursor: "pointer" }}
        onClick={() => {
          const win = new WinBox({
            title: "Contact me",
            width: "80%",
            height: "80%",
            x: "center",
            y: "center",
            onfocus: function () {
              this.removeClass("wb-no-focus")
              this.addClass("wb-focus")
            },
            onblur: function () {
              this.removeClass("wb-focus")
              this.addClass("wb-no-focus")
            },
          })

          ReactDOM.render(
            React.createElement(Contact, {
              close: () => win.close(),
            }),
            win.body
          )
        }}
      >
        <span role="img" aria-label="e-mail">
          📧
        </span>{" "}
        /Contact
      </button>
    </li>
  )

  const mappedItems = () => {
    return (
      <>
        <li>→ Info:</li> {info} {contactItem} <li>→ Projects:</li>
        {projects} <li className="miniProject">→ Mini-Projects:</li>
      </>
    )
  }

  return <ul className="mappedItemsList">{mappedItems()}</ul>
}
