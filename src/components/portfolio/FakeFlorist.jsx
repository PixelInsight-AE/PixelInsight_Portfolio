const FakeFlorist = () => {
  return (
    <div>
      <div>
        <img
          className="portfolio-piece-image"
          src="/assets/images/chic_cozy.webp"
          alt=""
        />
      </div>
      <p className="portfolio-info">
        Bloom & Petal Florists is a fictitious florist company that specializes
        in creating beautiful floral arrangements for any occasion. This website
        was created to showcase our web design and development capabilities. We
        hope you enjoy it!
      </p>
      <section className="portfolio__tech-stack-wrapper">
        <h2>Technology Used</h2>
        <ul className="portfolio__tech-stack">
          <li>
            <h3>Figma</h3>
            <p>Website Designs made in Figma</p>
            <img src="/assets/svg/figma.svg" alt="" />
          </li>
        </ul>
      </section>
    </div>
  );
};
export default FakeFlorist;
