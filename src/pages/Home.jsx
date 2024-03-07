import { Helmet } from "react-helmet-async";
import { Header } from "../shared/Header";
import Hero from "../components/home/Hero";
import WhatWeDoCards from "../components/home/WhatWeDoCards";
import { DiscoverDesignBuildLaunchEnjoy } from "../components/home/DiscoverDesignBuildLaunchEnjoy";
import { Scrollbar } from "../components/home/ScrollBar";
import TechExpertise from "../components/home/TechExpertise";
import WhyChoosePixel from "../components/home/WhyChoosePixel";
import ContactForm from "../shared/ContactForm";
import GetAQuote from "../shared/GetAQuote";
import Footer from "../shared/Footer";
import WebsitePackages from "../components/home/WebsitePackages";
import Subhero from "../components/home/Subhero";
import { motion, useScroll } from "framer-motion";
import { useEffect, useState } from "react";
import { useNavigation } from "react-router-dom";
import { Navigation, Pagination } from "swiper/modules";
import { useSwiper, SwiperSlide, Swiper } from "swiper/react";
import {} from "../pages/Services";
import { StandardPackageCard } from "../pages/Services";
import { PremiumPackageCard } from "../pages/Services";
import { StarterPackageCard } from "../pages/Services";
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

const Home = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const { scrollYProgress } = useScroll();
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <Helmet>
        <meta name="author" content="Pixel Insight" />
        <meta property="og:image" content="https://i.imgur.com/LOFe11P.png" />
        <meta property="og:title" content="Pixel Insight" />
        <meta
          name="description"
          content="Pixel Insight: Where Creativity Meets Technology. We specialize in web and mobile app development, design, and digital marketing. Explore our digital solutions that make a difference. Serving Carlsbad NM, Locally and the World Globally."
        />

        <meta property="og:url" content="https://pixel-insight.com" />
        <meta property="og:type" content="website" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="twitter:card" content="https://i.imgur.com/LOFe11P.png" />
        <meta name="twitter:site" content="@Pixel-Insight" />
        <meta name="twitter:title" content="Pixel Insight" />
        <meta
          name="twitter:description"
          content="Pixel Insight: Where Creativity Meets Technology. We specialize in web and mobile app development, design, and digital marketing. Explore our digital solutions that make a difference."
        />
        <meta name="twitter:image" content="https://i.imgur.com/Owid3YP.png" />
        <title>Pixel Insight</title>
      </Helmet>
      <Header />

      <div className="home">
        <Hero />
        <Subhero />

        {/* {windowWidth <= 768 && (
          <Swiper
            modules={[Navigation, Pagination]}
            slidesPerView={1}
            pagination={{ clickable: true }}
            onChange={(swipe) => {
              console.log(swipe);
            }}
            onSwiper={(swiper) => console.log(swiper)}
            className="services website-packages"
          >
            <SwiperSlide>
              <StarterPackageCard />
            </SwiperSlide>
            <SwiperSlide>
              <StandardPackageCard />
            </SwiperSlide>
            <SwiperSlide>
              <PremiumPackageCard />
            </SwiperSlide>
            <SlidePrevButton />
            <SlideNextButton />
          </Swiper>
        )}

        {windowWidth > 768 && <WebsitePackages />} */}
        {/*        <div className="why-choose-bg">
          <WhyChoosePixel />
        </div> */}
        {/* <WhatWeDoCards /> */}
        <div className="sub-hero-divider"></div>

        <TechExpertise />
        <div className="bbb">
          <DiscoverDesignBuildLaunchEnjoy />
        </div>

        {/* <ContactForm /> */}
        <GetAQuote />
      </div>
      <Footer />
    </>
  );
};
export default Home;
