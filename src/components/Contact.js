import React from "react"
import Typewriter from "typewriter-effect"
import { navigate } from "gatsby-link"
import "../styles/contact.scss"

export default function Contact({ close }) {
  const [state, setState] = React.useState({})

  const handleChange = e => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    const url = `/.netlify/functions/contact`
    fetch(url, {
      method: "POST",
      body: JSON.stringify(state),
    })
      .then(response =>
        response.status === 200
          ? navigate("/success")
          : alert("An error occured while trying to send contact message!")
      )
      .then(close)
  }

  return (
    <div className="contactContainer">
      <div style={{ margin: "auto", minWidth: "100%" }}>
        <h1 className="contactH1">
          <Typewriter
            onInit={typewriter => {
              typewriter
                .typeString("Contact me")
                .start()
                .callFunction(function (state) {
                  state.elements.cursor.style.display = "none"
                })
            }}
          />
        </h1>
        <form
          name="contact"
          method="post"
          action="/contact-us"
          onSubmit={handleSubmit}
        >
          <p hidden>
            <label>
              Don’t fill this out:{" "}
              <input name="bot-field" onChange={handleChange} />
            </label>
          </p>
          <input type="hidden" name="form-name" value="contact"></input>
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            id="name"
            name="name"
            required={true}
            placeholder="Name"
            onChange={handleChange}
          />
          <label htmlFor="email">Your Email</label>
          <input
            type="email"
            id="email"
            name="email"
            required={true}
            placeholder="E-Mail adress"
            onChange={handleChange}
          />
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            required={true}
            placeholder="Your message"
            rows="3"
            onChange={handleChange}
          ></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  )
}
