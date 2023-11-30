import { useState, useRef } from "react";
import React from "react";
import supabase from "../config/supabase";
import { useEffect } from "react";
import { validateEmail } from "../utilitys/utilitys";
import { useNavigate } from "react-router-dom";
const ContactForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    description: "",
    newsletter: "",
  });

  const [formError, setFormError] = useState("");
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    if (formData.name === "") {
      setFormError("Please enter your name");
      return;
    }
    if (formData.description === "") {
      setFormError("Please enter a message");
      return;
    }
    if (formData.email === "") {
      setFormError("Please enter your email");
      return;
    }
    const isValid = await validateEmail(formData.email);
    if (!isValid) {
      setFormError("Please enter a valid email");
      return;
    }
    const { data, error } = await supabase
      .from("pixel_quotes")
      .insert({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        description: formData.description,
        newsletter: formData.newsletter,
      })
      .select("*");
    if (error) {
      setFormError(error.message);
      return;
    }
    setFormError("");
    navigate("/quote-success");
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
          name="description"
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
