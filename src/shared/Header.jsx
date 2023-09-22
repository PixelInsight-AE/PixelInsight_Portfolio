import { Link } from "react-router-dom";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ReactDOM from "react-dom";

const Backdrop = ({ isOpen, onClick }) => {
  return ReactDOM.createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="backdrop"
          onClick={onClick}
        ></motion.div>
      )}
    </AnimatePresence>,
    document.getElementById("backdrop-hook")
  );
};

const SideNavigation = ({ isOpen, onClick }) => {
  const content = (
    <AnimatePresence>
      {isOpen && (
        <motion.aside
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          exit={{ x: "-100%" }}
          transition={{ duration: 0.3, type: "tween" }}
          className="side-navigation"
          onClick={onClick}
        >
          <nav className="side-navigation__nav">
            <div className="side-navigation__title-wrapper">
              <img src="/assets/svg/logo-test.svg" alt="" />
              <h1 className="side-navigation__title">Pixel Insight</h1>
            </div>
            <ul>
              <Link to="/">
                <li>Home</li>
              </Link>
              <Link to="/portfolio">
                <li>Portfolio</li>
              </Link>
              <Link to="/about">
                <li>About</li>
              </Link>
              <Link to="/contact">
                <li>Contact</li>
              </Link>
            </ul>
          </nav>
        </motion.aside>
      )}
    </AnimatePresence>
  );

  return ReactDOM.createPortal(
    content,
    document.getElementById("sidenav-hook")
  );
};

const Header = () => {
  const [sideNavIsOpen, setSideNavIsOpen] = useState(false);

  const toggleSideNav = () => {
    setSideNavIsOpen((prevIsOpen) => !prevIsOpen);
  };
  return (
    <header className="header">
      {sideNavIsOpen && (
        <Backdrop isOpen={sideNavIsOpen} onClick={toggleSideNav} />
      )}
      <SideNavigation isOpen={sideNavIsOpen} onClick={toggleSideNav} />
      <nav>
        <Link to="/">
          <img
            className="header__logo"
            src="/assets/svg/logo-test.svg"
            alt="Pixel insight logo,  Where Creativity Meets Technology. We specialize in web and mobile app development, design, and digital marketing. Explore our digital solutions that make a difference."
          />
        </Link>
        <Link to="/">
          <h1 className="header__title">Pixel Insight</h1>
        </Link>
        <img
          onClick={toggleSideNav}
          className="header__hamburger-menu"
          src="/assets/svg/hamburger.svg"
          alt=""
        />
        <section className="header__navigation">
          <ul>
            <Link to="/portfolio">
              <li>Portfolio</li>
            </Link>
            <Link to="/about">
              <li>About</li>
            </Link>
            <Link to="/contact">
              <li className="header__navigation--contact">Contact</li>
            </Link>
          </ul>
        </section>
      </nav>
    </header>
  );
};
export { Header };
