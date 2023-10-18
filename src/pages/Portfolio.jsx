import { Link } from "react-router-dom";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ReactDOM from "react-dom";
import { Helmet } from "react-helmet-async";
import { Header } from "../shared/Header";
import Footer from "../shared/Footer";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const PortfolioPieceExample = () => {
  return (
    <div className="portfolio__piece-carousel">
      <h2 className="portfolio__title">Piece Name</h2>
      <img
        className="portfolio__image"
        src="/assets/images/example.png"
        alt=""
      />
      <section>
        <img
          className="portfolio__tech"
          src="/assets/svg/supabase.svg"
          alt=""
        />
        <img className="portfolio__tech" src="/assets/svg/react.svg" alt="" />
        <img className="portfolio__tech" src="/assets/svg/ruby.svg" alt="" />
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
      <div className="background"></div>
      <div className="portfolio">
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          slidesPerView={1}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onChange={(swipe) => {
            console.log(swipe);
          }}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <PortfolioPieceExample />
          </SwiperSlide>
          <SwiperSlide>
            <PortfolioPieceExample />
          </SwiperSlide>
          <SwiperSlide>
            <PortfolioPieceExample />
          </SwiperSlide>
          <SwiperSlide>
            <PortfolioPieceExample />
          </SwiperSlide>
          <button>Read</button>
        </Swiper>
      </div>
      <div className="portfolio__intro">
        <h3>Portfolio</h3>
        <p>
          Welcome to the Pixel Insight Portfolio! At Pixel Insight, we're
          passionate about bringing digital visions to life. Our portfolio is a
          testament to our dedication to web design, programming, development,
          UI/UX, marketing, SEO, and copywriting. Each project showcased here
          represents our commitment to crafting exceptional web-based solutions
          that not only meet but exceed our clients' expectations.
          <br />
          <br />
          Welcome to Pixel Insight. Let's build your digital success story
          together!
        </p>
      </div>
      <div className="portfolio__piece-wrapper">
        <div className="portfolio__piece-card even">
          <h3>Piece Name</h3>
          <p>
            Welcome to the Pixel Insight Portfolio! At Pixel Insight, we're
            passionate about bringing digital visions to life. Our portfolio is
            ao
          </p>
          <img src="https://picsum.photos/250" alt="" />
        </div>
        <div className="portfolio__piece-card">
          <h3>Piece Name</h3>
          <p>
            Welcome to the Pixel Insight Portfolio! At Pixel Insight, we're
            passionate about bringing digital visions to life. Our portfolio is
            ao
          </p>
          <img src="https://picsum.photos/250" alt="" />
        </div>
      </div>

      <Footer />
    </>
  );
};
export default Portfolio;
