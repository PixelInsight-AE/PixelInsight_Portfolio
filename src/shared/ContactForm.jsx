import { useState, useRef } from "react";
import React from "react";
import supabase from "../config/supabase";
import { useEffect } from "react";
const ContactForm = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [checkbox, setCheckbox] = useState(false); //checkbox for newsletter signup
  const [formError, setFormError] = useState("");

  const handleSubmit = async (e) => {
    if (!validateEmail(email)) {
      setFormError("Please enter a valid email address");
      return;
    }

    if (name === "") {
      setFormError("Please enter your name");
      return;
    }
    if (message === "") {
      setFormError("Please enter a message");
      return;
    }
    if (email === "") {
      setFormError("Please enter your email");
      return;
    }

    const { data, error } = await supabase
      .from("pixel_quotes")
      .insert({
        name,
        message,
        email,
        phone,
        newsletter: checkbox ? "true" : "false",
      })
      .select("*");
    if (error) {
      console.log(error);
    }

    setName("");
    setMessage("");
    setEmail("");
    setPhone("");
    setCheckbox(false);
    setFormError("");

    console.log(data);
  };
  //regex function for email validation
  const validateEmail = (email) => {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  return (
    <div className="contact-form">
      <form
        name="contact-form"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(e);
          document.querySelector(".contact-form").reset();
        }}
        netlify
      >
        {formError && <p className="form-error">{formError}</p>}
        <h2>Contact Us</h2>
        <input
          onChange={(e) => {
            setName(e.target.value);
          }}
          name="name"
          type="text"
          placeholder="Your Name*"
          value={name}
          required={true}
        />
        <input
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          type="email"
          name="email"
          placeholder="Your Email*"
          required={true}
          value={email}
        />
        <input name="phone" type="text" placeholder="Phone" />
        <textarea
          name="message"
          id=""
          cols="30"
          rows="10"
          placeholder="Message*"
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
        ></textarea>
        <section className="newsletter">
          <input
            value={checkbox}
            className="checkbox"
            style={{ display: "inline-block" }}
            type="checkbox"
            placeholder="Sign up"
            name="newsletter"
            onChange={() => {
              setCheckbox(!checkbox);
            }}
          />
          <label htmlFor="">Sign up for our newsletter</label>
        </section>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
export default ContactForm;
