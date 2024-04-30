const AxieHomelandWiki = () => {
  return (
    <div>
      <h1>AxieHomelandWiki</h1>
      <img className="portfolio-piece-image axie-homeland" src="/assets/images/axie-homeland.png" alt="" />
      <p className="portfolio-info">
        The project's primary objective was to develop a platform that not only serves as an extensive repository of information for Axie Infinity's Homeland but also as a user-centric tool that
        enhances the gaming experience. Targeted at a diverse audience ranging from seasoned players to newcomers intrigued by the blockchain gaming phenomenon, the website aims to demystify the world
        of Axie Infinity, offering easy navigation and insightful content.
      </p>
      <section>
        <section className="portfolio__tech-stack-wrapper">
          <h2>Technology Used</h2>
          <ul className="portfolio__tech-stack">
            <li>
              <h3>React</h3>
              <p>Harnessing the speed and efficiency of Vite for a turbocharged development experience</p>
              <img src="/assets/svg/react.svg" alt="" />
            </li>
            <li>
              <h3>Sass</h3>
              <p>Elevating styles to the next level with Sass, transforming ordinary elements into visually stunning masterpieces!</p>
              <img style={{ width: 28 }} src="/assets/svg/sass.svg" alt="" />
            </li>
          </ul>
        </section>
      </section>
    </div>
  );
};
export default AxieHomelandWiki;
