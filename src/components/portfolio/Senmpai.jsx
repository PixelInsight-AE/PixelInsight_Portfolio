const Senmpai = () => {
  return (
    <div>
      <img
        className="portfolio-piece-image chatwave"
        src="/assets/images/.webp"
        alt=""
      />
      <p className="portfolio-info">
        Where cutting-edge podiatric medicine meets compassionate care. Our
        team, featuring renowned podiatrists, is at the forefront of foot and
        ankle health, offering a spectrum of services that cover prevention,
        diagnosis, and advanced treatments. Whether it's sports injuries,
        diabetic foot care, or complex surgeries, we're equipped to handle all
        your podiatric needs with the utmost precision and empathy.
      </p>
      <h2>
        Offical Website:{" "}
        <a href="https://senmpodiatry.com">South East New Mexico Podiatry</a>
      </h2>
      <section>
        <section className="portfolio__tech-stack-wrapper">
          <h2>Technology Used</h2>
          <ul className="portfolio__tech-stack">
            <li>
              <h3>React</h3>
              <p>
                Harnessing the speed and efficiency of Vite for a turbocharged
                development experience
              </p>
              <img src="/assets/svg/react.svg" alt="" />
            </li>
          </ul>
        </section>
      </section>
    </div>
  );
};
export default Senmpai;
