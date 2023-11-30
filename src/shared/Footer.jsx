import SocialMediaIcons from "./SocialMediaIcons";

const Footer = () => {
  return (
    <footer className="footer">
      <img
        className="footer__logo"
        src="/assets/svg/pforpixel.svg"
        alt="The Pixel Insight Logo showing the letter p in pixel art style"
      />
      <p>Pixel Insight ©2023</p>
      <SocialMediaIcons className={"footer__socials"} />
    </footer>
  );
};
export default Footer;
