const Header = () => {
  return (
    <header className="header">
      <nav>
        <img
          className="header__logo"
          src="/assets/svg/header_logo.svg"
          alt="Pixel insight logo,  Where Creativity Meets Technology. We specialize in web and mobile app development, design, and digital marketing. Explore our digital solutions that make a difference."
        />
        <h1 className="header__title">Pixel Insight</h1>
        <img
          className="header__hamburger-menu"
          src="/assets/svg/hamburger.svg"
          alt=""
        />
        <section className="header__navigation">
          <ul>
            <li>Portfolio</li>
            <li>About</li>
            <li className="header__navigation--contact">Contact</li>
          </ul>
        </section>
      </nav>
    </header>
  );
};
export default Header;
