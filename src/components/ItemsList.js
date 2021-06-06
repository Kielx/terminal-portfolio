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
      all: allMarkdownRemark {
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
            }
            html
            fileAbsolutePath
          }
        }
      }
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
            }
            html
            fileAbsolutePath
          }
        }
      }
    }
  `)
  const checkScreenWidth = () => {
    return window.screen.width > 1000 ? "60%" : "100%"
  }

  const info = data.info.edges.map(item => (
    <li key={item.node.frontmatter.title} className="infoItem">
      <button
        className="popupWindowLinkButton"
        style={{ cursor: "pointer" }}
        onClick={() => {
          const win = new WinBox({
            title: item.node.frontmatter.title,
            width: checkScreenWidth(),
            height: checkScreenWidth(),
            x: "center",
            y: "center",
            onfocus: function () {
              this.setBackground("#00aa00")
            },
            onblur: function () {
              this.setBackground("#777")
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
        }}
      >
        {item.node.frontmatter.listName}
      </button>
    </li>
  ))

  const projects = data.projects.edges.map(item =>
    item.node.frontmatter.title ? (
      <li
        key={item.node.frontmatter.title}
        className={item.node.frontmatter.nameOfClass}
      >
        <button
          className="popupWindowLinkButton"
          style={{ cursor: "pointer" }}
          onClick={() => {
            const win = new WinBox({
              title: item.node.frontmatter.title,
              width: checkScreenWidth(),
              height: checkScreenWidth(),
              x: "center",
              y: "center",
              onfocus: function () {
                this.setBackground("#00aa00")
              },
              onblur: function () {
                this.setBackground("#777")
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
          }}
        >
          {item.node.frontmatter.listName}
        </button>
      </li>
    ) : (
      <li className="projects">{item.node.frontmatter.listName}</li>
    )
  )

  const contactItem = (
    <li className="infoItem">
      <button
        className="popupWindowLinkButton"
        style={{ cursor: "pointer" }}
        onClick={() => {
          const win = new WinBox({
            title: "Contact me",
            width: checkScreenWidth(),
            height: checkScreenWidth(),
            x: "center",
            y: "center",
            onfocus: function () {
              this.setBackground("#00aa00")
            },
            onblur: function () {
              this.setBackground("#777")
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
        /Contact
      </button>
    </li>
  )

  return (
    <ul className="mappedItemsList">
      → Info: {info} {contactItem} → Projects: {projects}
    </ul>
  )
}
