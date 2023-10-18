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
        <meta name="author" content="Pixel Insight" />
        <meta property="og:image" content="https://i.imgur.com/LOFe11P.png" />
        <meta property="og:title" content="Pixel Insight" />
        <meta
          name="description"
          content="Pixel Insight: Contact Us Today! We specialize in web and mobile app development, design, and digital marketing. Explore our digital solutions that make a difference."
        />

        <meta property="og:url" content="https://pixel-insight.com/contact" />
        <meta property="og:type" content="website" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="twitter:card" content="https://i.imgur.com/LOFe11P.png" />
        <meta name="twitter:site" content="@Pixel-Insight" />
        <meta name="twitter:title" content="Pixel Insight" />
        <meta
          name="twitter:description"
          content="Pixel Insight: Contact Us Today! We specialize in web and mobile app development, design, and digital marketing. Explore our digital solutions that make a difference."
        />
        <meta name="twitter:image" content="https://i.imgur.com/LOFe11P.png" />
        <title>Pixel - Contact</title>
      </Helmet>
      <Header />
      <div className="contact">
        <div className="contact__header-background">
          <div className="contact__header">
            <h1>Contact</h1>
            <h2>Connect with us! Your Questions, Our Answers!</h2>
            <section className="contact__social-media">
              <a href="https://github.com/PixelInsight-AE" target="_blank">
                <img src="/assets/svg/github.svg" alt="" />
              </a>
              <a href="https://twitter.com/pixel_insight" target="_blank">
                <img src="/assets/svg/x.svg" alt="" />
              </a>
              <a
                href="https://www.facebook.com/PixelInsightAE/"
                target="_blank"
              >
                <img src="/assets/svg/meta.svg" alt="" />
              </a>
              <a href="https://github.com/PixelInsight-AE" target="_blank">
                <img src="/assets/svg/linkedin.svg" alt="" />
              </a>
              <a
                href="https://www.instagram.com/pixel_insight_ae/"
                target="_blank"
              >
                <img src="/assets/svg/instagram.svg" alt="" />
              </a>
            </section>
          </div>
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
        <ContactForm />
        <GetAQuote />
      </div>
      <Footer />
    </>
  );
};
export default Contact;
