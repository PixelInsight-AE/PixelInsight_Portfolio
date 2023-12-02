const FoodDeliveryWebsite = () => {
  return (
    <div>
      <img
        className="portfolio-piece-image"
        src="/assets/images/fresh_bites_2.webp"
        alt=""
      />
      <p className="portfolio-info">
        FastBites is a fictitious food delivery company that specializes in
        delivering delicious meals to your doorstep. This website was created to
        showcase our web design and development capabilities. We hope you enjoy
        it!
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
export default FoodDeliveryWebsite;
