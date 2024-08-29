import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section id="contact">
      <div className="contact-container">
        <h2 className="contact-heading">Contact Us</h2>
        <form className="contact-form" action="/submit-form" method="post">
          <div className="contact-form-group">
            <label className="contact-label" htmlFor="name">
              Name:
            </label>
            <input
              className="contact-input"
              type="text"
              id="name"
              name="name"
              required
            />
          </div>

          <div className="contact-form-group">
            <label className="contact-label" htmlFor="email">
              Email:
            </label>
            <input
              className="contact-input"
              type="email"
              id="email"
              name="email"
              required
            />
          </div>

          <div className="contact-form-group">
            <label className="contact-label" htmlFor="message">
              Message:
            </label>
            <textarea
              className="contact-textarea"
              id="message"
              name="message"
              required
            ></textarea>
          </div>

          <button className="contact-button" type="submit">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
