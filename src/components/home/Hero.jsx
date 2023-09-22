const Hero = () => {
  return (
    <div className="hero-wrapper">
      <div className="hero">
        <h2 className="hero__slogan">"Precision in Every Pixel"</h2>
        <h4 className="hero__text">
          We believe in the power of pixels to transform ideas into realities.
          With creativity at our core and innovation in our DNA, we're here to
          craft digital experiences that captivate, connect, and conquer.
        </h4>
        <img src="assets/svg/dots.svg" alt="" />
        <h3 className="hero__footer">
          "At Pixel Insight, we don't just see pixels, We envision
          possibilities"
        </h3>
        <button>Get a free quote!</button>
      </div>
      <img
        className="hero__large"
        src="/assets/images/med_logo.webp"
        alt="logo"
      />
    </div>
  );
};
export default Hero;
