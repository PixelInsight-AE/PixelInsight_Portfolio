import { Header } from "../shared/Header";
import { Helmet } from "react-helmet-async";
const StandardPackage = () => {
  return (
    <>
      <Helmet></Helmet>
      <Header />
      <div className="standard-package">
        <h1>Standard Package: Elevate Your Online Presence</h1>
        <h2>Level Up Your Website with Advanced Features and Dynamic Design</h2>

        <div className="standard-package__hero">
          <article className="standard-package__card standard-data">
            <div className="standard-package__card-top">
              <h2>Standard Package</h2>
              <h3>
                Level Up Today! - Take your website to the next level with
                advanced SEO and a dynamic Blog/News section.
              </h3>
              <h4>[Insert TAGLINE Here]</h4>
            </div>
            <ul>
              <li>Up to 10 Pages of Custom, High-Quality Design</li>
              <li>Priority Support and Maintenance</li>
              <li>
                Unlock the Voice of Satisfaction with a Testimonials Section
              </li>
              <li>Personalized User Experience (UX) Design</li>
              <li>Integration of Cutting-edge Technologies</li>
            </ul>
            <h2 className="standard-package__price">$1999</h2>
          </article>
          <article className="standard-package__hero__card">
            <h3>Standard Package</h3>
            <p>
              Our Standard Package is ideal for businesses ready to elevate
              their online presence. This package includes everything from our
              Starter Package but goes beyond with advanced features and
              personalized design.
            </p>
            <button>Order Now</button>
          </article>
        </div>

        <section className="standard-package__features">
          <ul>
            {/* Up to 10 Pages of Custom, High-Quality Design */}
            <li>
              <strong>Up to 10 Pages of Custom, High-Quality Design:</strong>
              <ul>
                <li>
                  <strong>More Space, More Impact:</strong> Showcase your brand
                  with up to 10 custom-designed pages.
                </li>
                <li>
                  <strong>Expertly Crafted:</strong> Each page meticulously
                  designed to align with your brand’s ethos.
                </li>
              </ul>
            </li>

            {/* Priority Support and Maintenance */}
            <li>
              <strong>Priority Support and Maintenance:</strong>
              <ul>
                <li>
                  <strong>Always There for You:</strong> Receive top-tier
                  support and maintenance.
                </li>
                <li>
                  <strong>Peace of Mind:</strong> Our dedicated team ensures
                  your website remains updated and effective.
                </li>
              </ul>
            </li>

            {/* Testimonials Section */}
            <li>
              <strong>Testimonials Section:</strong>
              <ul>
                <li>
                  <strong>Unlock the Voice of Satisfaction:</strong> Showcase
                  client testimonials to build trust.
                </li>
                <li>
                  <strong>Real Feedback, Real Impact:</strong> Let customer
                  experiences speak for your brand’s quality.
                </li>
              </ul>
            </li>

            {/* Personalized User Experience (UX) Design */}
            <li>
              <strong>Personalized User Experience (UX) Design:</strong>
              <ul>
                <li>
                  <strong>Tailored for Your Audience:</strong> A user experience
                  uniquely designed to engage your visitors.
                </li>
                <li>
                  <strong>Intuitive and Accessible:</strong> Ensure a seamless
                  journey for users.
                </li>
              </ul>
            </li>

            {/* Cutting-edge Technology Integration */}
            <li>
              <strong>Cutting-edge Technology Integration:</strong>
              <ul>
                <li>
                  <strong>Stay Ahead of the Curve:</strong> Leverage the latest
                  in web technology.
                </li>
                <li>
                  <strong>Future-Ready:</strong> Ensure your website is prepared
                  for future web trends.
                </li>
              </ul>
            </li>
          </ul>
        </section>
      </div>
    </>
  );
};

export default StandardPackage;
