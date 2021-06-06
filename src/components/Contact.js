import React from "react"
import Typewriter from "typewriter-effect"
import "../styles/styles.scss"
import "../styles/contact.scss"

export default function contact() {
  return (
    <div>
      <div>
        <h1>
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
          method="POST"
          netlify-honeypot="bot-field"
          data-netlify="true"
          action="/success"
        >
          <input type="hidden" name="form-name" value="contact"></input>
          <label htmlFor="name">Your Name</label>
          <input type="text" id="name" required="true" placeholder="Name" />
          <label htmlFor="email">Your Email</label>
          <input
            type="email"
            id="email"
            name="email"
            required={true}
            placeholder="E-Mail adress"
          />
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            required={true}
            placeholder="Your message"
            rows="3"
          ></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  )
}
