/* import React from "react";
import Tilt from "react-tilt";

const defaultOptions = {
  reverse: false, // reverse the tilt direction
  max: 20, // max tilt rotation (degrees)
  perspective: 1500, // Transform perspective, the lower the more extreme the tilt gets.
  scale: 1.05, // 2 = 200%, 1.5 = 150%, etc..
  speed: 500, // Speed of the enter/exit transition
  transition: true, // Set a transition on enter/exit.
  axis: null, // What axis should be disabled. Can be X or Y.
  reset: true, // If the tilt effect has to be reset on exit.
  easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
};

const StarterPackageCard = ({ setSelectedPackage }) => {
  return (
    <Tilt options={defaultOptions} className="website-packages__card-wrapper">
      <article
        onClick={() => setSelectedPackage("starter")}
        className="website-packages__card starter-data"
      >
        <div className="website-packages__card-top">
          <h2>Starter Package</h2>
          <h3>
            Launch Your Online Presence - A concise and impactful website.
          </h3>
          <h4>Great Value at an Affordable Price</h4>
        </div>
        <ul>
          <li>Up to 5 Pages of Custom, High-Quality Design</li>

          <li>Mobile-Ready Design: Your Website, Anywhere, Anytime!</li>
          <li>Custom Design Tailored for You</li>
          <li>Skyrocket Your Visibility with SEO Mastery!</li>
          <li>Exceptional Quality, Friendly to Your Budget!</li>
          <li>Rapid Results, Unmatched Brilliance!</li>
        </ul>
        <h2 className="website-packages__price">$999</h2>
      </article>
    </Tilt>
  );
};
const StandardPackageCard = ({ setSelectedPackage }) => {
  return (
    <Tilt options={defaultOptions} className="website-packages__card-wrapper">
      <article
        onClick={() => setSelectedPackage("standard")}
        className="website-packages__card taller"
      >
        <div className="website-packages__card-top">
          <h2>Standard Package</h2>
          <h3>
            Level Up Today! - Take your website to the next level with advanced
            SEO and a dynamic Blog/News section.
          </h3>
          <h4>TAGLINE</h4>
        </div>
        <ul>
          <li>Up to 10 Pages of Custom, High-Quality Design</li>
          <li>Priority Support and Maintenance</li>

          <li>Unlock the Voice of Satisfaction with a Testimonials Section</li>
          <li>Personalized User Experience (UX) Design</li>
          <li>Integration of Cutting-edge Technologies</li>
        </ul>
        <h2 className="website-packages__price">$1999</h2>
      </article>
    </Tilt>
  );
};
const PremiumPackageCard = ({ setSelectedPackage }) => {
  return (
    <Tilt options={defaultOptions} className="website-packages__card-wrapper">
      <article
        onClick={() => setSelectedPackage("premium")}
        className="website-packages__card premium premium-data"
      >
        <div className="website-packages__card-top">
          <h2>Premium Package</h2>
          <h3>
            Ultimate Brand Elevation - Bespoke, expansive design with advanced
            features.
          </h3>
          <h4>TAGLINE</h4>
        </div>
        <ul>
          <li>15+ Pages of Custom, High-Quality Design</li>
          <li>Interactive Elements and Animations</li>
          <li>Advanced SEO and Analytics Integration</li>
          <li>
            Dive into the next level of online prominence with our Advanced SEO
          </li>
          <li>
            Ignite Conversations with our Dynamic Blog/News sections, tailored
            for you!
          </li>
        </ul>
        <h2 className="website-packages__price">$2999</h2>
      </article>
    </Tilt>
  );
};

export { StarterPackageCard, StandardPackageCard, PremiumPackageCard };
 */
