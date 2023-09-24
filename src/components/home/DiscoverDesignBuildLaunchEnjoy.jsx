import React from "react";
import { Scrollbar } from "./ScrollBar";

const OurMissionCard = () => {
  return (
    <article className="our-mission-card">
      <h2>Our Mission</h2>
      <p>
        We're on a mission to bring your digital dreams to life. Whether you're
        seeking web development wizardry, marketing magic, or design that
        dazzles, we've got you covered.
      </p>
    </article>
  );
};

const DiscoverDesignBuildLaunchEnjoy = () => {
  return (
    <>
      <section className="our-mission">
        <Scrollbar />
        <article className="our-mission__discover main-wrapper">
          <div className="our-mission__discover--color main-wrapper--color"></div>
          <div className=" main-wrapper--content">
            <h2>Discover</h2>
            <p>
              Uncover the essence of your vision and project goals. We will be
              your compass in the digital landscape.
            </p>
          </div>
        </article>
        <article className="our-mission__design main-wrapper">
          <div className="our-mission__design--color main-wrapper--color"></div>
          <div className="main-wrapper--content">
            <h2>Design</h2>
            <p>
              Crafting engaging and visually stunning experiences. Our designs
              captivate and convert, turning concepts into pixel-perfect
              realities.
            </p>
          </div>
        </article>
        <article className="our-mission__build main-wrapper">
          <div className="our-mission__build--color main-wrapper--color"></div>
          <div className=" main-wrapper--content">
            <h2>Build</h2>
            <p>
              Bringing your concepts to life with cutting-edge technology.
              Coding, testing, and refining for flawless functionality – one
              line of code at a time.
            </p>
          </div>
        </article>
        <article className="our-mission__launch main-wrapper">
          <div className="our-mission__launch--color main-wrapper--color"></div>
          <div className=" main-wrapper--content">
            <h2>Launch</h2>
            <p>
              Prepare for liftoff: the world is about to meet your project. We
              ensure a seamless and confident project launch, as your journey
              begins.
            </p>
          </div>
        </article>
        <article className="our-mission__enjoy main-wrapper">
          <div className="our-mission__enjoy--color main-wrapper--color"></div>
          <div className="main-wrapper--content">
            <h2>Enjoy</h2>
            <p>
              Sit back, relax, and watch your project shine. Embrace the
              results, celebrate success, and make your journey a memorable
              experience.
            </p>
          </div>
        </article>
      </section>
    </>
  );
};
export { DiscoverDesignBuildLaunchEnjoy, OurMissionCard };
