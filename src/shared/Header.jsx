import { Link } from "react-router-dom";
import { useState } from "react";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import Backdrop from "./Backdrop";
import SideNavigation from "./SideNavigation";

const Header = () => {
  const [sideNavIsOpen, setSideNavIsOpen] = useState(false);
  const { scrollYProgress } = useScroll();

  const toggleSideNav = () => {
    setSideNavIsOpen((prevIsOpen) => !prevIsOpen);
  };
  return (
    <div className="header-wrapper">
      <header className="header">
        {sideNavIsOpen && (
          <Backdrop isOpen={sideNavIsOpen} onClick={toggleSideNav} />
        )}
        <SideNavigation isOpen={sideNavIsOpen} onClick={toggleSideNav} />

        {!sideNavIsOpen && (
          <motion.nav initial className="header__nav">
            <Link to="/">
              <div className="header__logo-wrapper">
                <img
                  src="/assets/svg/pforpixel.svg"
                  alt="Pixel insight logo,  Where Creativity Meets Technology. We specialize in web and mobile app development, design, and digital marketing. Explore our digital solutions that make a difference."
                />
                <h1 className="header__title">
                  <span>P</span>ixel Insight
                </h1>
              </div>
            </Link>

            <img
              onClick={toggleSideNav}
              className="header__hamburger-menu"
              src="/assets/svg/hamburger.svg"
              alt="hamburger menu"
            />

            <ul className="header__ul">
              <Link to="/about">
                <li>About</li>
              </Link>
              <Link to="/contact">
                <li className="header__contact">Contact</li>
              </Link>
              <Link to="/services">
                <li>Packages</li>
              </Link>
              {/* <Link to="/showcase">
              <li>Showcase</li>
            </Link> */}
            </ul>
          </motion.nav>
        )}
      </header>
      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />
    </div>
  );
};
export { Header };
