import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Header } from "../shared/Header";
import { QuoteForm } from "./Quote";
import Footer from "../shared/Footer";
import { Link, useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import WebsitePackages from "../components/home/WebsitePackages";

import supabase from "../config/supabase";

const StandardPackageCard = ({ setSelectedPackage }) => {
  return (
    <div className="website-packages__card-wrapper">
      <article className="website-packages__card taller">
        <div className="website-packages__card-top">
          <h2>Standard Package</h2>
          <h3>
            Level Up Today! - Take your website to the next level with advanced
            SEO and a dynamic Blog/News section.
          </h3>
          <h4>Out Of This World Deal!</h4>
        </div>
        <ul>
          <li>Up to 10 Pages of Custom, High-Quality Design</li>
          <li>Priority Support and Maintenance</li>

          <li>Unlock the Voice of Satisfaction with a Testimonials Section</li>
          <li>Personalized User Experience (UX) Design</li>
          <li>Integration of Cutting-edge Technologies</li>
        </ul>
        <h2 className="website-packages__price">$1999</h2>
        <button
          className="cta-button"
          onClick={() => {
            setSelectedPackage("standard");
            document
              .getElementById("service-form")
              .scrollIntoView({ behavior: "smooth", bottom: 0 }, 1000);
          }}
        >
          Select
        </button>
      </article>
    </div>
  );
};

const StarterPackageCard = ({ setSelectedPackage }) => {
  return (
    <div className="website-packages__card-wrapper">
      <article className="website-packages__card starter-data">
        <div className="website-packages__card-top">
          <h2>Starter Package</h2>
          <h3>
            Launch Your Online Presence - A concise and impactful website.
          </h3>
          <h4>Great Value at an Affordable Price</h4>
        </div>
        <ul>
          <li>Up to 5 Pages of Custom, High-Quality Design</li>

          <li>Mobile-Ready Design: Your Website, Anywhere, Anytime!</li>
          <li>Custom Design Tailored for You</li>
          <li>Skyrocket Your Visibility with SEO Mastery!</li>
          <li>Exceptional Quality, Friendly to Your Budget!</li>
          <li>Rapid Results, Unmatched Brilliance!</li>
        </ul>
        <h2 className="website-packages__price">$999</h2>
        <button
          className="cta-button"
          onClick={() => {
            setSelectedPackage("starter");
            document
              .getElementById("service-form")
              .scrollIntoView({ behavior: "smooth", bottom: 0 }, 1000);
          }}
        >
          Select
        </button>
      </article>
    </div>
  );
};
const PremiumPackageCard = ({ setSelectedPackage }) => {
  return (
    <div className="website-packages__card-wrapper">
      <article className="website-packages__card premium premium-data">
        <div className="website-packages__card-top">
          <h2>Premium Package</h2>
          <h3>
            Ultimate Brand Elevation - Bespoke, expansive design with advanced
            features.
          </h3>
          <h4>The Ultimate Package!</h4>
        </div>
        <ul>
          <li>15+ Pages of Custom, High-Quality Design</li>
          <li>Interactive Elements and Animations</li>
          <li>Advanced SEO and Analytics Integration</li>
          <li>
            Dive into the next level of online prominence with our Advanced SEO
          </li>
          <li>
            Ignite Conversations with our Dynamic Blog/News sections, tailored
            for you!
          </li>
        </ul>
        <h2 className="website-packages__price">$2999</h2>
        <button
          className="cta-button"
          style={{ color: "white" }}
          onClick={() => {
            document
              .getElementById("service-form")
              .scrollIntoView({ behavior: "smooth", bottom: 0 }, 1000);
            setSelectedPackage("premium");
          }}
        >
          Select
        </button>
      </article>
    </div>
  );
};

const SlideNextButton = () => {
  const swiper = useSwiper();

  return (
    <img
      style={{
        position: "absolute",
        right: "12px",
        top: "50%",
        zIndex: "100",
      }}
      src="/assets/images/right_select.webp"
      alt="Button for next button on carousel for pixel insight portfolio"
      onClick={() => swiper.slideNext()}
    />
  );
};
const SlidePrevButton = () => {
  const swiper = useSwiper();
  return (
    <img
      onClick={() => swiper.slidePrev()}
      src="/assets/images/left_select.webp"
      alt="Button for previous button on carousel for pixel insight portfolio"
      style={{
        position: "absolute",
        left: "12px",
        top: "50%",
        zIndex: "100",
      }}
    />
  );
};

const Services = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [description, setDescription] = useState("");
  const [selectedPackage, setSelectedPackage] = useState("starter");
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleSubmit = async (e) => {
    if (!name || !email || !phone || !description || !selectedPackage)
      return setError("Please fill out all fields");

    let formData = {
      name: name,
      email: email,
      phone: phone,
      description: description,
      services: selectedPackage,
    };

    e.preventDefault();
    console.log("submit");
    const isValid = await validateEmail(email);
    if (!isValid) {
      return;
    }
    const { error } = await supabase
      .from("pixel_quotes")
      .insert(formData)
      .select("*");
    if (error) return setError(error.message);
    navigate("/quote-success");
  };

  const validateEmail = async (email) => {
    try {
      const response = await fetch(
        `https://emailvalidation.abstractapi.com/v1?api_key=542f3202b0b5453486ba8ab9447c1c1f&email=${email}`,
        { method: "GET" }
      );
      const result = await response.json();
      console.log(result);
      if (result.deliverability === "DELIVERABLE") {
        return true;
      } else {
        setError("Please enter a valid email");
        alert("Please enter a valid email");
        return false;
      }
    } catch (err) {
      console.error(err);
      return false;
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const swiper = useSwiper();
  return (
    <>
      <Helmet>
        <meta name="author" content="Pixel Insight" />
        <meta property="og:image" content="https://i.imgur.com/LOFe11P.png" />
        <meta property="og:title" content="Pixel Insight - Services" />
        <meta
          name="description"
          content="Pixel Insight: Explore our packages and discover how we can bring your digital vision to life. With Pixel Insight, your website will be more than just an online space;"
        />

        <meta property="og:url" content="https://pixel-insight.com/services" />
        <meta property="og:type" content="website" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="twitter:card" content="https://i.imgur.com/LOFe11P.png" />
        <meta name="twitter:site" content="@Pixel-Insight" />
        <meta name="twitter:title" content="Pixel Insight" />
        <meta
          name="twitter:description"
          content="Pixel Insight: Explore our packages and discover how we can bring your digital vision to life. With Pixel Insight, your website will be more than just an online space;"
        />
        <meta name="twitter:image" content="https://i.imgur.com/LOFe11P.png" />
        <title>Pixel - Packages</title>
      </Helmet>
      <Header />
      <div className="services">
        {windowWidth <= 768 && (
          <>
            <h2 className="website-packages__tagline">
              Get Your Custom Website Today!
            </h2>
            <Swiper
              modules={[Navigation, Pagination]}
              slidesPerView={1}
              pagination={{ clickable: true }}
              onChange={(swipe) => {
                console.log(swipe);
              }}
              onSwiper={(swiper) => console.log(swiper)}
              className="website-packages"
            >
              <SwiperSlide setSelectedPackage={setSelectedPackage}>
                <StarterPackageCard setSelectedPackage={setSelectedPackage} />
              </SwiperSlide>
              <SwiperSlide setSelectedPackage={setSelectedPackage}>
                <StandardPackageCard setSelectedPackage={setSelectedPackage} />
              </SwiperSlide>
              <SwiperSlide setSelectedPackage={setSelectedPackage}>
                <PremiumPackageCard setSelectedPackage={setSelectedPackage} />
              </SwiperSlide>
              <SlidePrevButton />
              <SlideNextButton />
            </Swiper>
          </>
        )}
        {windowWidth > 768 && (
          <WebsitePackages
            selectedPackage={selectedPackage}
            setSelectedPackage={setSelectedPackage}
          />
        )}
        <form
          id="service-form"
          onSubmit={handleSubmit}
          className="services__form"
        >
          <h3>Initial Consultation is Free</h3>
          <section className="services__form-top">
            <div className="services__form-top-inputs">
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="Name"
                required
              />
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                placeholder="Email"
                required
              />
              <input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                type="text"
                placeholder="Phone (optional)"
              />
              <h4>Package Selected</h4>
              <select
                onChange={(e) => selectedPackage(e.target.value)}
                name="selected-package"
                id=""
                value={selectedPackage}
              >
                <option value="starter">Starter Package</option>
                <option value="standard">Standard Package</option>
                <option value="premium">Premium Package</option>
                <option value="custom">Custom Package</option>
              </select>
            </div>
          </section>
          <section className="services__form-bottom">
            <textarea
              placeholder="Need somethig more custom? Let us know what you need!"
              onChange={(e) => setDescription(e.target.value)}
              value={description}
            />
          </section>
          <button type="submit" className="cta-button">
            Get Started
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
};
export default Services;
