const TechExpertise = () => {
  return (
    <section className="tech-expertise">
      <h2>Technology Expertise</h2>
      <div className="tech-expertise__wrapper">
        <section className="tech-expertise__card">
          <section className="tech-expertise__title">
            <h3>Front-end</h3>
            <img
              className="tech-expertise__icon"
              src="/assets/svg/circle.svg"
              alt=""
            />
          </section>
          <p>
            Elevate your online presence with our expert front-end design
            solutions. We create modern, user-friendly interfaces that captivate
            your audience.
          </p>
          <i>
            HTML, CSS, Sass, React, Redux, JavaScript, Bootstrap, FrameWorks,
            Responsive Designs, PWA, API Integration, Testing & Debugging
          </i>
        </section>
        <section className="tech-expertise__card">
          <section className="tech-expertise__title">
            <h3>Back-end</h3>
            <img
              className="tech-expertise__icon"
              src="/assets/svg/triangle.svg"
              alt=""
            />
          </section>
          <p>
            Powerful backend solutions for seamless performance and security.
            Elevate your digital presence with us.
          </p>
          <i>
            Database Management, API Development, Authentication Systems, Server
            Management, RESTful API’s, Dev Ops, Ruby/Rails, Node, Python,
            SQL/Postgres
          </i>
        </section>
        <section className="tech-expertise__card">
          <section className="tech-expertise__title">
            <h3>Design</h3>
            <img
              className="tech-expertise__icon"
              src="/assets/svg/square.svg"
              alt=""
            />
          </section>
          <p>
            At Pixel Insight, we blend creativity and functionality to craft
            visually stunning, user-friendly designs that captivate and engage.
            Our design solutions are not just aesthetically pleasing but also
            purposeful, making your digital presence memorable and effective.
          </p>
          <i>Figma, Illustrator, Photoshop</i>
        </section>
        <section className="tech-expertise__card">
          <section className="tech-expertise__title">
            <h3>App Development</h3>
            <img
              className="tech-expertise__icon"
              src="/assets/svg/star.svg"
              alt=""
            />
          </section>
          <p>
            We're your mobile app maestros, transforming your unique concepts
            into user-friendly, high-performance applications. From iOS to
            Android, we create digital magic that resonates with your audience,
            one download at a time.
          </p>
          <i>React Native, Flutter</i>
        </section>
      </div>
    </section>
  );
};
export default TechExpertise;
