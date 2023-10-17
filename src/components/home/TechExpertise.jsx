const TechExpertise = () => {
  return (
    <section className="tech-expertise">
      <section className="tech-expertise__header">
        <h2 className="tech-expertise__title">Technology Expertise</h2>
        <p className="tech-expertise__subtitle">
          Here at Pixel, we leverage the most advanced technologies, and push
          the boundaries of what is possible.
        </p>
      </section>
      <div className="tech-expertise__wrapper">
        <article className="tech-expertise__card left">
          <section className="tech-expertise__card-header">
            <h2>Front-end</h2>
            <img src="/assets/svg/circle.svg" alt="" />
          </section>
          <p>
            Elevate your online presence with our friendly interfaces that
            captivate your audience.
          </p>
          <i>
            HTML, CSS, Sass, React, Redux, JavaScript, Bootstrap, FrameWorks,
            Responsive Designs, PWA, API Integration, Testing & Debugging
          </i>
        </article>
        <article className="tech-expertise__card right">
          <section className="tech-expertise__card-header">
            <h2>Back-end</h2>
            <img src="/assets/svg/triangle.svg" alt="" />
          </section>
          <p>
            Powerful backend solutions for seamless performance and security.
            Take your digital presence to the next level.
          </p>
          <i>
            Database Management, API Development, Authentication Systems, Server
            Management, RESTful API’s, Dev Ops, Ruby/Rails, Node, Python,
            SQL/Postgres
          </i>
        </article>
        <article className="tech-expertise__card left">
          <section className="tech-expertise__card-header">
            <h2>Design</h2>
            <img src="/assets/svg/square.svg" alt="" />
          </section>
          <p>
            Blend creativity and functionality to craft visually stunning,
            user-friendly designs that captivate and engage.
          </p>
          <i>Figma, Illustrator, Photoshop</i>
        </article>
        <article className="tech-expertise__card right">
          <section className="tech-expertise__card-header">
            <h2>App Dev</h2>
            <img src="/assets/svg/star.svg" alt="" />
          </section>
          <p>
            Cross platform app development. We create digital magic that
            resonates with your audience, one download at a time.
          </p>
          <i>React Native, Flutter</i>
        </article>
      </div>
    </section>
  );
};
export default TechExpertise;
