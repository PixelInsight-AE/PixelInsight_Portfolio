import { useState, useRef } from "react";
import React from "react";
//import supabase from "../config/supabase";
import { useEffect } from "react";
import { validateEmail } from "../utilitys/utilitys";
import { useNavigate } from "react-router-dom";
const ContactForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    newsletter: "",
  });

  const [formError, setFormError] = useState("");
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    if (!validateEmail(formData.email)) {
      setFormError("Please enter a valid email address");
      return;
    }

    if (formData.name === "") {
      setFormError("Please enter your name");
      return;
    }
    if (formData.message === "") {
      setFormError("Please enter a message");
      return;
    }
    if (formData.email === "") {
      setFormError("Please enter your email");
      return;
    }

    const { data, error } = await supabase
      .from("pixel_quotes")
      .insert({
        contact_form: formData,
      })
      .select("*");
    if (error) {
      console.log(error);
      return;
    }

    setFormError("");
    navigate("/quote-success");

    console.log(data);
  };

  return (
    <div className="contact-form">
      <form
        name="contact-form"
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(e);
        }}
      >
        {formError && <p className="form-error">{formError}</p>}
        <h2>Contact Us</h2>
        <input
          onChange={(e) => handleChange(e)}
          name="name"
          type="text"
          placeholder="Your Name*"
          required={true}
        />
        <input
          onChange={(e) => handleChange(e)}
          type="email"
          name="email"
          placeholder="Your Email*"
          required={true}
        />
        <input
          onChange={(e) => handleChange(e)}
          name="phone"
          type="text"
          placeholder="Phone"
        />
        <textarea
          name="message"
          id=""
          cols="30"
          rows="10"
          placeholder="Message*"
          onChange={(e) => handleChange(e)}
        ></textarea>
        <section className="newsletter">
          <input
            className="checkbox"
            style={{ display: "inline-block" }}
            type="checkbox"
            placeholder="Sign up"
            name="newsletter"
            onChange={(e) => {
              setFormData({ ...formData, newsletter: e.target.value });
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
