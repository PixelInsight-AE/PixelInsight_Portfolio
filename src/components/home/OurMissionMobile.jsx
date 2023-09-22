import React from "react";
import Scrollbar from "./ScrollBar";

const OurMissionMobile = () => {
  return (
    <>
      <div className="our-mission">
        <Scrollbar />
        <div className="our-mission__header-card">
          <h2>Our Mission</h2>
          <h4>
            We're on a mission to bring your digital dreams to life. Whether
            you're seeking web development wizardry, marketing magic, or design
            that dazzles, we've got you covered.
          </h4>
        </div>
        <div className="our-mission__discover main-wrapper">
          <div className="our-mission__discover--color main-wrapper--color"></div>
          <div className=" main-wrapper--content">
            <h2>Discover</h2>
            <h4>
              Uncover the essence of your vision and project goals. We will be
              your compass in the digital landscape.
            </h4>
          </div>
        </div>
        <div className="our-mission__design main-wrapper">
          <div className="our-mission__design--color main-wrapper--color"></div>
          <div className="main-wrapper--content">
            <h2>Design</h2>
            <h4>
              Crafting engaging and visually stunning experiences. Our designs
              captivate and convert, turning concepts into pixel-perfect
              realities.
            </h4>
          </div>
        </div>
        <div className="our-mission__build main-wrapper">
          <div className="our-mission__build--color main-wrapper--color"></div>
          <div className=" main-wrapper--content">
            <h2>Build</h2>
            <h4>
              Bringing your concepts to life with cutting-edge technology.
              Coding, testing, and refining for flawless functionality – one
              line of code at a time.
            </h4>
          </div>
        </div>
        <div className="our-mission__launch main-wrapper">
          <div className="our-mission__launch--color main-wrapper--color"></div>
          <div className=" main-wrapper--content">
            <h2>Launch</h2>
            <h4>
              Prepare for liftoff: the world is about to meet your project. We
              ensure a seamless and confident project launch, as your journey
              begins.
            </h4>
          </div>
        </div>
        <div className="our-mission__enjoy main-wrapper">
          <div className="our-mission__enjoy--color main-wrapper--color"></div>
          <div className="main-wrapper--content">
            <h2>Enjoy</h2>
            <h4>
              Sit back, relax, and watch your project shine. Embrace the
              results, celebrate success, and make your journey a memorable
              experience.
            </h4>
          </div>
        </div>
      </div>
    </>
  );
};
export default OurMissionMobile;
