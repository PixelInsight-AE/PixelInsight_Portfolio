import Footer from "../shared/Footer";
import { Header } from "../shared/Header";
import { useState, useEffect } from "react";
import { emailValidation, validateEmail } from "../utilitys/utilitys";
import supabase from "../config/supabase";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
const QuoteForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    services: "",
    timeline: "",
    description: "",
    goals: "",
    contactMethod: "",
    additionalInfo: "",
    howDidYouHear: "",
  });
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    const isVaid = await emailValidation(formData.email);
    if (!isVaid) {
      alert("Please enter a valid email");
      return;
    }
    e.preventDefault();
    console.log(formData);
    const { data, error } = await supabase
      .from("pixel_quotes")
      .insert({ quote_form: formData })
      .select("*");
    if (error) {
      console.log(error);
    }
    console.log(data);
    setFormData({
      name: "",
      email: "",
      phone: "",
      services: "",
      timeline: "",
      description: "",
      goals: "",
      contactMethod: "",
      additionalInfo: "",
      howDidYouHear: "",
    });
    navigate("/quote-success");
  };

  return (
    <>
      <Helmet>
        <meta name="author" content="Pixel Insight" />
        <meta property="og:image" content="https://i.imgur.com/LOFe11P.png" />
        <meta property="og:title" content="Pixel Insight" />
        <meta
          name="description"
          content="Pixel Insight: Get your Free Quote today! We specialize in web and mobile app development, design, and digital marketing. Explore our digital solutions that make a difference"
        />

        <meta property="og:url" content="https://pixel-insight.com/quote" />
        <meta property="og:type" content="website" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="twitter:card" content="https://i.imgur.com/LOFe11P.png" />
        <meta name="twitter:site" content="@Pixel-Insight" />
        <meta name="twitter:title" content="Pixel Insight" />
        <meta
          name="twitter:description"
          content="Pixel Insight: Get your Free Quote today! We specialize in web and mobile app development, design, and digital marketing. Explore our digital solutions that make a difference"
        />
        <meta name="twitter:image" content="https://i.imgur.com/LOFe11P.png" />
        <title>Get a Free Quote</title>
      </Helmet>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(e);
        }}
      >
        <section className="general-info">
          <input
            onChange={(e) => handleInputChange(e)}
            type="text"
            name="name"
            placeholder="Your Name*"
            required="true"
          />
          <input
            onChange={(e) => handleInputChange(e)}
            type="email"
            name="email"
            placeholder="Your Email*"
            required="true"
          />
          <input
            onChange={(e) => handleInputChange(e)}
            type="text"
            name="phone"
            placeholder="Your Phone Number*"
          />
        </section>
        <section className="details">
          <select
            onChange={(e) => handleInputChange(e)}
            name="services"
            id="services"
            required="true"
          >
            <option>Services interested in?</option>
            <option value="webpage">Website</option>
            <option value="mobileapp">Mobile App</option>
            <option value="webapp">Web App</option>
            <option value="software">Software</option>
            <option value="other">Other</option>
          </select>
          <select
            onChange={(e) => handleInputChange(e)}
            name="timeline"
            id="timeline"
            required="true"
          >
            <option>Project Timeline?</option>
            <option value="1">1-4 Week</option>
            <option value="2">3-6 Months</option>
            <option value="3">ASAP</option>
            <option value="4">Unknown</option>
          </select>
          <select
            onChange={(e) => handleInputChange(e)}
            name="contactMethod"
            id="method-of-contact"
            required="true"
          >
            <option>Prefered method of contact</option>
            <option value="phone">Phone</option>
            <option value="email">Email</option>
          </select>
        </section>

        <textarea
          onChange={(e) => handleInputChange(e)}
          name="description"
          id="description"
          cols="30"
          rows="10"
          placeholder="Describe your project"
        ></textarea>
        <textarea
          onChange={(e) => handleInputChange(e)}
          name="goals"
          id="goals"
          cols="30"
          rows="10"
          placeholder="What are your projects Goals?"
        ></textarea>
        <textarea
          onChange={(e) => handleInputChange(e)}
          name="additionalInfo"
          id="additional-info"
          cols="30"
          rows="10"
          placeholder="Any Additional Information?"
        />
        <select
          id="hear-about-us"
          name="howDidYouHear"
          onChange={(e) => handleInputChange(e)}
        >
          <option>How Did you Hear about us?</option>
          <option value="online">Online Search</option>
          <option value="referral">Referral</option>
          <option value="social-media">Social Media</option>
          <option value="other">Other</option>
        </select>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

const Quote = () => {
  return (
    <>
      <Header />
      <div className="quote">
        <section className="quote__header">
          <h1>
            <blockquote>
              "Unlock Your Poject's Potential: Request Your Free Quote Today!"
            </blockquote>
          </h1>
          <img src="/assets/images/quote_img.webp" alt="" />
        </section>
        <QuoteForm />
      </div>
      <Footer />
    </>
  );
};
export default Quote;
