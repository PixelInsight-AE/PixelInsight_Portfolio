import { Link } from "react-router-dom";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ReactDOM from "react-dom";
import { Helmet } from "react-helmet-async";
import { Header } from "../shared/Header";
import Footer from "../shared/Footer";
import ContactForm from "../shared/ContactForm";
import GetAQuote from "../shared/GetAQuote";
const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Pixel - Contact</title>
      </Helmet>
      <Header />
      <div className="contact">
        <div className="contact__top-wrapper">
          <h1>Connect with Pixel Insight: Your Questions, Our Answers!</h1>
          <img
            className="contact__phone-mobile"
            src="/assets/svg/phone.svg"
            alt=""
          />
        </div>
        <div className="contact__form-wrapper">
          <ContactForm />
          <img
            className="contact__phone-desktop"
            src="/assets/svg/phone.svg"
            alt=""
          />
        </div>
        <p className="contact__text">
          At Pixel Insight, we value your input, questions, and feedback.
          Whether you're interested in our services, have inquiries about
          ongoing projects, or simply want to say hello, we're here to listen
          and assist you. Our team of experts is just a message away, ready to
          provide the information and support you need. Don't hesitate to fill
          out the form below or reach out through our provided contact details.
          We look forward to connecting with you and exploring the exciting
          possibilities ahead.
        </p>
        <GetAQuote />
        <Footer />
      </div>
    </>
  );
};
export default Contact;
