import { Helmet } from "react-helmet-async";
import { Header } from "../shared/Header";
import Hero from "../components/home/Hero";
import WhatWeDo from "../components/home/WhatWeDo";
import WhatWeDoCards from "../components/home/WhatWeDoCards";
import {
  DiscoverDesignBuildLaunchEnjoy,
  OurMissionCard,
} from "../components/home/DiscoverDesignBuildLaunchEnjoy";
import { Scrollbar } from "../components/home/ScrollBar";
import TechExpertise from "../components/home/TechExpertise";
import FAQ from "../components/home/FAQ";
import WhyChoosePixel from "../components/home/WhyChoosePixel";
import ContactForm from "../shared/ContactForm";
import GetAQuote from "../shared/GetAQuote";
import Footer from "../shared/Footer";
const Home = () => {
  return (
    <>
      <Helmet>
        <meta name="description" content="Pixel Insight" />

        <meta name="author" content="Pixel Insight" />
        <meta property="og:image" content="assets/images/new_logo.png" />
        <meta property="og:title" content="Pixel Insight" />
        <meta
          name="description"
          content="Pixel Insight: Where Creativity Meets Technology. We specialize in web and mobile app development, design, and digital marketing. Explore our digital solutions that make a difference."
        />

        <meta property="og:url" content="https://pixel-insight.com" />
        <meta property="og:type" content="website" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="twitter:card" content="/assets/images/new_logo.png" />
        <meta name="twitter:site" content="@Pixel-Insight" />
        <meta name="twitter:title" content="Pixel Insight" />
        <meta
          name="twitter:description"
          content="Pixel Insight: Where Creativity Meets Technology. We specialize in web and mobile app development, design, and digital marketing. Explore our digital solutions that make a difference."
        />
        <meta name="twitter:image" content="/assets/images/new_logo.png" />
        <title>Pixel Insight</title>
      </Helmet>
      <Header />
      <div className="home">
        <Hero />
        <WhatWeDo />
        <WhatWeDoCards />
        <div className="sub-hero-divider"></div>
        <OurMissionCard />
        <DiscoverDesignBuildLaunchEnjoy />
        <TechExpertise />
        <FAQ />
        <WhyChoosePixel />
        <ContactForm />
        <GetAQuote />
      </div>
      <Footer />
    </>
  );
};
export default Home;
