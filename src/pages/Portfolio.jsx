import RateMyLoaf from "../components/portfolio/RateMyLoaf";
import FakeFlorist from "../components/portfolio/FakeFlorist";
import ChatWave from "../components/portfolio/Chatwave";
import FoodDeliveryWebsite from "../components/portfolio/FastBites";
import AxieHomelandWiki from "../components/portfolio/AxieHomelandWiki";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ReactDOM from "react-dom";
import { Helmet } from "react-helmet-async";
import { Header } from "../shared/Header";
import Footer from "../shared/Footer";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import Senmpai from "../components/portfolio/Senmpai.jsx";
import {
  Navigation,
  Pagination,
  EffectCoverflow,
  Autoplay,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

const PortfolioConditional = ({ state }) => {
  switch (state) {
    case "ChatWave":
      return <ChatWave />;
    case "FoodDeliveryWebsite":
      return <FoodDeliveryWebsite />;
    case "FakeFlorist":
      return <FakeFlorist />;
    case "RateMyLoaf":
      return <RateMyLoaf />;
    case "Senmpai":
      return <Senmpai />;
    case "AxieHomelandWiki":
      return <AxieHomelandWiki />;
    default:
      return <AxieHomelandWiki />;
  }
};

const Portfolio = () => {
  const [piece, setPiece] = useState("RateMyLoaf");

  return (
    <>
      <Helmet>
        <meta name="author" content="Pixel Insight" />
        <meta property="og:image" content="https://i.imgur.com/Owid3YP.png" />
        <meta property="og:title" content="Pixel Insight" />
        <meta
          name="description"
          content="Pixel Insight: Here is a showcase of our work. We specialize in web and mobile app development, design, and digital marketing. Explore our digital solutions that make a difference."
        />

        <meta property="og:url" content="https://pixel-insight.com/showcase" />
        <meta property="og:type" content="website" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="twitter:card" content="https://i.imgur.com/LOFe11P.png" />
        <meta name="twitter:site" content="@Pixel-Insight" />
        <meta name="twitter:title" content="Pixel Insight" />
        <meta
          name="twitter:description"
          content="Pixel Insight: Here is a showcase of our work. We specialize in web and mobile app development, design, and digital marketing. Explore our digital solutions that make a difference."
        />
        <meta name="twitter:image" content="https://i.imgur.com/Owid3YP.png" />
        <title>Pixel - Portfolio</title>
      </Helmet>
      <Header />
      <div className="portfolio">
        <section className="portfolio__carousel">
          <section className="portfolio-intro">
            <h3>Pixel Portfolio</h3>
          </section>{" "}
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={1}
            autoplay={{
              delay: 5000,
              pauseOnMouseEnter: true,
              disableOnInteraction: false,
              stopOnLastSlide: false,
              reverseDirection: false,
              waitForTransition: false,
            }}
            loop={true}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: false,
            }}
            pagination={true}
            modules={[EffectCoverflow, Pagination, Autoplay]}
            onChange={(swipe) => {
              console.log(swipe);
              console.log(swipe.activeIndex);
            }}
            onSwiper={(swiper) => {
              console.log(swiper.activeIndex);
            }}
          >
            <SwiperSlide className="showcase">
              <img
                onClick={() => {
                  setPiece("RateMyLoaf");
                  document
                    .getElementById("piece")
                    .scrollIntoView(
                      { behavior: "smooth", bottom: 0 },
                      { duration: 1000 }
                    );
                }}
                className="showcase__image"
                style={{ border: "15px solid black" }}
                src="/assets/images/rml.webp"
                alt="Rate My Loaf"
              />
              <h3>Rate My Loaf</h3>
            </SwiperSlide>
            <SwiperSlide className="showcase">
              <img
                onClick={() => {
                  setPiece("Senmpai");
                  document.getElementById("piece").scrollIntoView(
                    {
                      behavior: "smooth",
                      bottom: 0,
                    },

                    { duration: 1000 }
                  );
                }}
                className="showcase__image"
                src="/assets/images/senpa.png"
                alt="south east new mexico podiatry"
              />
              <h3>South East New Mexico Podiatry</h3>
            </SwiperSlide>
            <SwiperSlide className="showcase">
              <img
                onClick={() => {
                  setPiece("ChatWave");
                  document.getElementById("piece").scrollIntoView(
                    {
                      behavior: "smooth",
                      bottom: 0,
                    },

                    { duration: 1000 }
                  );
                }}
                className="showcase__image"
                src="/assets/images/cw_login.webp"
                alt=""
              />
              <h3>Chat Wave by: Pixel</h3>
            </SwiperSlide>

            <SwiperSlide className="showcase">
              <img
                onClick={() => {
                  setPiece("FakeFlorist");
                  document
                    .getElementById("piece")
                    .scrollIntoView(
                      { behavior: "smooth", bottom: 0 },
                      { duration: 1000 }
                    );
                }}
                className="showcase__image"
                src="/assets/images/chic_cozy.webp"
                alt=""
              />
              <h3>Bloom & Petal Florists</h3>
            </SwiperSlide>
            <SwiperSlide className="showcase">
              <img
                onClick={() => {
                  setPiece("FoodDeliveryWebsite");
                  document.getElementById("piece").scrollIntoView(
                    {
                      behavior: "smooth",
                      top: 0,
                    },

                    { duration: 1000 }
                  );
                }}
                className="showcase__image"
                src="/assets/images/fast_bites.webp"
                alt=""
              />
              <h3>FastBites Food Delivery</h3>
            </SwiperSlide>
            <SwiperSlide className="showcase">
              <img
                onClick={() => {
                  setPiece("AxieHomelandWiki");
                  document.getElementById("piece").scrollIntoView(
                    {
                      behavior: "smooth",
                      top: 0,
                    },

                    { duration: 1000 }
                  );
                }}
                className="showcase__image"
                src="/assets/images/axie-homeland.png"
                alt=""
              />
              <h3>Axie Homeland Wiki</h3>
            </SwiperSlide>
          </Swiper>
        </section>
        <div className="portfolio__button-wrapper">
          <button
            style={{ display: "none" }}
            onClick={() => {
              document.getElementById("piece").scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            More Info
          </button>
        </div>
        <div id="piece" className="portfolio__pieces-wrapper">
          <PortfolioConditional state={piece} />
        </div>
      </div>

      <Footer />
    </>
  );
};
export default Portfolio;
