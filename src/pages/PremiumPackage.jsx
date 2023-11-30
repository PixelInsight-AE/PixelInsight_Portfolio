import { Header } from "../shared/Header";
import { Helmet } from "react-helmet-async";
const PremiumPackage = () => {
  return (
    <>
      <Helmet></Helmet>
      <Header />
      <div className="premium-package">
        <h1>Premium Package: The Pinnacle of Web Excellence</h1>
        <h2>
          Experience Ultimate Brand Elevation with Our Most Advanced Package
          Yet!
        </h2>

        <div className="premium-package__hero">
          <article className="premium-package__card premium-data">
            <div className="premium-package__card-top">
              <h2>Premium Package</h2>
              <h3>
                Ultimate Brand Elevation - Bespoke, expansive design with
                advanced features.
              </h3>
              <h4>[Insert TAGLINE Here]</h4>
            </div>
            <ul>
              <li>15+ Pages of Custom, High-Quality Design</li>
              <li>Interactive Elements and Animations</li>
              <li>Advanced SEO and Analytics Integration</li>
              <li>Dive into Advanced SEO for Online Prominence</li>
              <li>Ignite Conversations with Dynamic Blog/News Sections</li>
            </ul>
            <h2 className="premium-package__price">$2999</h2>
          </article>
          <article className="premium-package__hero__card">
            <h3>Premium Package</h3>
            <p>
              The Premium Package is our most elite offering, designed for
              businesses aspiring to lead and innovate. Experience a range of
              bespoke, advanced features that set your website apart.
            </p>
            <button>Order Now</button>
          </article>
        </div>

        <section className="premium-package__features">
          <ul>
            {/* 15+ Pages of Custom, High-Quality Design */}
            <li>
              <strong>15+ Pages of Custom, High-Quality Design:</strong>
              <ul>
                <li>
                  <strong>Expansive Online Presence:</strong> A robust platform
                  with over 15 pages, offering extensive content capacity.
                </li>
                <li>
                  <strong>Exceptional Design Quality:</strong> Each page is a
                  masterpiece, designed to captivate and engage your audience.
                </li>
              </ul>
            </li>

            {/* Interactive Elements and Animations */}
            <li>
              <strong>Interactive Elements and Animations:</strong>
              <ul>
                <li>
                  <strong>Dynamic User Experience:</strong> Incorporate
                  interactive elements and animations to create a lively,
                  engaging website.
                </li>
                <li>
                  <strong>Stand Out with Style:</strong> Make a memorable
                  impression with cutting-edge design elements.
                </li>
              </ul>
            </li>

            {/* Advanced SEO and Analytics Integration */}
            <li>
              <strong>Advanced SEO and Analytics Integration:</strong>
              <ul>
                <li>
                  <strong>Optimized for Success:</strong> Enhanced SEO
                  strategies to significantly boost your online visibility.
                </li>
                <li>
                  <strong>Data-Driven Insights:</strong> In-depth analytics
                  integration for informed decision-making.
                </li>
              </ul>
            </li>

            {/* Advanced SEO */}
            <li>
              <strong>Dive into Advanced SEO:</strong>
              <ul>
                <li>
                  <strong>Next-Level Online Prominence:</strong> Advanced SEO
                  techniques to dominate search rankings.
                </li>
                <li>
                  <strong>Long-Term Visibility:</strong> Continuous SEO
                  adjustments to keep your site at the forefront.
                </li>
              </ul>
            </li>

            {/* Dynamic Blog/News Sections */}
            <li>
              <strong>Dynamic Blog/News Sections:</strong>
              <ul>
                <li>
                  <strong>Ignite Conversations:</strong> Engage your audience
                  with compelling, regularly updated blog/news content.
                </li>
                <li>
                  <strong>Tailored Content Strategy:</strong> Customized content
                  creation that resonates with your audience.
                </li>
              </ul>
            </li>
          </ul>
        </section>
      </div>
    </>
  );
};

export default PremiumPackage;
