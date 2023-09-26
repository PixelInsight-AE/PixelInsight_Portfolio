import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__left-wrapper">
        <blockquote>"Precision in Every Pixel"</blockquote>
        <p>
          We believe in the power of pixels to transform ideas into realities.
          With creativity at our core and innovation in our DNA, we're here to
          craft digital experiences that captivate, connect, and conquer.
        </p>
        <img src="assets/svg/dots.svg" alt="" />
        <blockquote>
          "At Pixel Insight, we don't just see pixels, We envision
          possibilities"
        </blockquote>
        <Link to="/quote">
          <button>Get a free quote!</button>
        </Link>
      </div>
      <img
        className="hero__hero-img"
        src="/assets/images/med_logo.webp"
        alt="logo"
      />
    </section>
  );
};
export default Hero;
