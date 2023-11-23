import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="hero">
      <motion.h1
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="hero__title"
      >
        Pixel Insight
      </motion.h1>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 0.2 }}
        className="hero__social-media"
      >
        <a href="https://github.com/PixelInsight-AE" target="_blank">
          <img
            src="/assets/svg/github.svg"
            alt="social media icons to pixel insight github"
          />
        </a>
        <a href="https://twitter.com/pixel_insight" target="_blank">
          <img
            src="/assets/svg/x.svg"
            alt="social media icons to pixel insight twitter"
          />
        </a>
        <a href="https://www.facebook.com/PixelInsightAE/" target="_blank">
          <img
            src="/assets/svg/meta.svg"
            alt="social media icon for pixel insight facebook"
          />
        </a>
        <a href="https://github.com/PixelInsight-AE" target="_blank">
          <img
            src="/assets/svg/linkedin.svg"
            alt="social media icon for pixel insght linkedin"
          />
        </a>
        <a href="https://www.instagram.com/pixel_insight_ae/" target="_blank">
          <img
            src="/assets/svg/instagram.svg"
            alt="social media icons for pixel insight instagram"
          />
        </a>
      </motion.section>
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="hero__subtitle"
      >
        Web Development Services
      </motion.h2>
      {/* <article className="hero__card">
        <div className="hero__left-wrapper">
          <div>
            <h1 className="hero__title">Pixel Insight</h1>

            <h2 className="hero__subtitle">Pixels with Purpose</h2>
          </div>
          <p className="hero__content">
            At Pixel Insight, we turn ideas into digital realities. We're all
            about creativity and innovation, crafting web experiences that
            captivate and deliver results.
          </p>
          <h3 className="hero__call-to-action">
            let's build something great together
          </h3>
          <Link to="/contact">
            <button className="hero__cta-btn">Get a free quote!</button>
          </Link>
          <section className="hero__social-media">
            <a href="https://github.com/PixelInsight-AE" target="_blank">
              <img
                src="/assets/svg/github.svg"
                alt="social media icons to pixel insight github"
              />
            </a>
            <a href="https://twitter.com/pixel_insight" target="_blank">
              <img
                src="/assets/svg/x.svg"
                alt="social media icons to pixel insight twitter"
              />
            </a>
            <a href="https://www.facebook.com/PixelInsightAE/" target="_blank">
              <img
                src="/assets/svg/meta.svg"
                alt="social media icon for pixel insight facebook"
              />
            </a>
            <a href="https://github.com/PixelInsight-AE" target="_blank">
              <img
                src="/assets/svg/linkedin.svg"
                alt="social media icon for pixel insght linkedin"
              />
            </a>
            <a
              href="https://www.instagram.com/pixel_insight_ae/"
              target="_blank"
            >
              <img
                src="/assets/svg/instagram.svg"
                alt="social media icons for pixel insight instagram"
              />
            </a>
          </section>
        </div>
        <img
          className="hero__hero-img"
          src="/assets/svg/p.tiff"
          alt="color wheel image"
        />
      </article> */}
    </section>
  );
};
export default Hero;
