import { AnimatePresence, motion } from "framer-motion";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";

const SideNavigation = ({ isOpen, onClick }) => {
  const content = (
    <AnimatePresence>
      {isOpen && (
        <motion.aside initial={{ x: "-100%" }} animate={{ x: 0 }} exit={{ x: "-100%" }} transition={{ duration: 0.3, type: "tween" }} className="side-navigation" onClick={onClick}>
          <nav className="side-navigation__nav">
            <div className="side-navigation__title-wrapper">
              <img src="/assets/svg/logo_2.svg" alt="The Pixel Insight logo, showing the letter P in a pixel art style" />
              <h1 className="side-navigation__title">
                <span>P</span>ixel Insight
              </h1>
            </div>
            <ul>
              <Link to="/about">
                <li>About</li>
              </Link>
              <Link to="/contact">
                <li>Contact</li>
              </Link>

              <Link to="/showcase">
                <li>Showcase</li>
              </Link>
              {/*               <Link to="/quote">
                <li>Get a Quote</li>
              </Link> */}
            </ul>
          </nav>
          <section className="side-navigation__social-media">
            <a href="https://github.com/PixelInsight-AE" target="_blank">
              <img src="/assets/svg/github.svg" alt="A button showing the GitHub logo" />
            </a>
            <a href="https://twitter.com/pixel_insight" target="_blank">
              <img src="/assets/svg/twitter.svg" alt="A button showing the X logo" />
            </a>
            <a href="https://www.facebook.com/PixelInsightAE/" target="_blank">
              <img src="/assets/svg/facebook.svg" alt="A button showing the Meta logo" />
            </a>
            <a href="https://github.com/PixelInsight-AE" target="_blank">
              <img src="/assets/svg/linkedin.svg" alt="A button showing the LinkedIn logo" />
            </a>
            <a href="https://www.instagram.com/pixel_insight_ae/" target="_blank">
              <img src="/assets/svg/instagram.svg" alt="A button showing the instagram logo" />
            </a>
          </section>
        </motion.aside>
      )}
    </AnimatePresence>
  );

  return ReactDOM.createPortal(content, document.getElementById("sidenav-hook"));
};

export default SideNavigation;
