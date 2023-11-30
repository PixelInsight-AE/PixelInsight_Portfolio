import { Link } from "react-router-dom";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ReactDOM from "react-dom";
import { Helmet } from "react-helmet-async";
import { Header } from "../shared/Header";
import Footer from "../shared/Footer";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const SlideNextButton = () => {
  const swiper = useSwiper();

  return (
    <button className="swiper-next" onClick={() => swiper.slideNext()}>
      <img
        src="/assets/svg/right.svg"
        alt="Button for next button on carousel for pixel insight portfolio"
      />
    </button>
  );
};
const SlidePrevButton = () => {
  const swiper = useSwiper();
  return (
    <button className="swiper-prev" onClick={() => swiper.slidePrev()}>
      <img
        src="/assets/svg/left.svg"
        alt="Button for previous button on carousel for pixel insight portfolio"
        onClick={() => swiper.slidePrev()}
      />
    </button>
  );
};

// ! alts
const SocialMediaPlatform = ({ className }) => {
  return (
    <div className="social-media-platform">
      <h2>Social Media App</h2>
      <img src="/assets/images/example.png" alt="" />
      <section>
        <img src="/assets/svg/supabase.svg" alt="" />
        <img src="/assets/svg/react.svg" alt="" />
        <img src="/assets/svg/ruby.svg" alt="" />
      </section>
    </div>
  );
};
const ChatWave = () => {
  return (
    <div className="chat-wave">
      <h2>Chat Wave By: Pixel</h2>
      <img src="/assets/images/example.png" alt="" />
      <section>
        <img src="/assets/svg/supabase.svg" alt="" />
        <img src="/assets/svg/react.svg" alt="" />
        <img src="/assets/svg/ruby.svg" alt="" />
      </section>
    </div>
  );
};
const SmokeShop = () => {
  return (
    <div className="chat-wave">
      <h2>SmokeShop</h2>
      <img src="/assets/images/example.png" alt="" />
      <section>
        <img src="/assets/svg/supabase.svg" alt="" />
        <img src="/assets/svg/react.svg" alt="" />
        <img src="/assets/svg/ruby.svg" alt="" />
      </section>
      <h2>SmokeShop</h2>
      <img src="/assets/images/example.png" alt="" />
      <section>
        <img src="/assets/svg/supabase.svg" alt="" />
        <img src="/assets/svg/react.svg" alt="" />
        <img src="/assets/svg/ruby.svg" alt="" />
      </section>
      <h2>SmokeShop</h2>
      <img src="/assets/images/example.png" alt="" />
      <section>
        <img src="/assets/svg/supabase.svg" alt="" />
        <img src="/assets/svg/react.svg" alt="" />
        <img src="/assets/svg/ruby.svg" alt="" />
      </section>
    </div>
  );
};
const BdavisHair = () => {
  return (
    <div className="chat-wave">
      <h2>Bdavis Hair</h2>
      <img src="/assets/images/example.png" alt="" />
      <section>
        <img src="/assets/svg/supabase.svg" alt="" />
        <img src="/assets/svg/react.svg" alt="" />
        <img src="/assets/svg/ruby.svg" alt="" />
      </section>
    </div>
  );
};
const PortfolioPieceExampleCarousel = () => {
  return (
    <div className="portfolio__piece-carousel">
      <h2 className="portfolio__title">Piece Name</h2>
      <img
        className="portfolio__image"
        src="/assets/images/example.png"
        alt=""
      />
      <section>
        <img src="/assets/svg/supabase.svg" alt="" />
        <img src="/assets/svg/react.svg" alt="" />
        <img src="/assets/svg/ruby.svg" alt="" />
      </section>
    </div>
  );
};

const Portfolio = () => {
  return (
    <>
      <Helmet>
        <title>Pixel - Portfolio</title>
      </Helmet>
      <Header />
      <div className="portfolio">
        <section className="portfolio__carousel">
          <Swiper
            modules={[Navigation, Pagination]}
            slidesPerView={1}
            pagination={{ clickable: true }}
            onChange={(swipe) => {
              console.log(swipe);
            }}
            onSwiper={(swiper) => console.log(swiper)}
          >
            <SwiperSlide>
              <SmokeShop />
            </SwiperSlide>
            <SwiperSlide>
              <ChatWave />
            </SwiperSlide>
            <SwiperSlide>
              <BdavisHair />
            </SwiperSlide>
            <SwiperSlide>
              <SocialMediaPlatform />
            </SwiperSlide>
            <SlidePrevButton />
            <SlideNextButton />
          </Swiper>
        </section>
        <div className="portfolio__button-wrapper">
          <button>Read</button>
        </div>
        <section className="portfolio__intro">
          <h3>Portfolio</h3>
          <p>
            Welcome to the Pixel Insight Portfolio! At Pixel Insight, we're
            passionate about bringing digital visions to life. Our portfolio is
            a testament to our dedication to web design, programming,
            development, UI/UX, marketing, SEO, and copywriting. Each project
            showcased here represents our commitment to crafting exceptional
            web-based solutions that not only meet but exceed our clients'
            expectations.
            <br />
            <br />
            Welcome to Pixel Insight. Let's build your digital success story
            together!
          </p>
        </section>
        <div className="portfolio__pieces-wrapper"></div>
        <PortfolioPieceExampleCarousel />
      </div>

      <Footer />
    </>
  );
};
export default Portfolio;
