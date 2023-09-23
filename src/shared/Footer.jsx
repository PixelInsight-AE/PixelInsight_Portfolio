const Footer = () => {
  return (
    <footer className="footer">
      <img className="footer__logo" src="/assets/svg/logo-test.svg" alt="" />
      <p>Pixel Insight ©2023</p>
      <section>
        <a href="https://github.com/PixelInsight-AE" target="_blank">
          <img src="/assets/svg/github.svg" alt="" />
        </a>
        <a href="https://twitter.com/pixel_insight" target="_blank">
          <img src="/assets/svg/twitter.svg" alt="" />
        </a>
        <a href="https://www.facebook.com/PixelInsightAE/" target="_blank">
          <img src="/assets/svg/facebook.svg" alt="" />
        </a>
        {/* <a href="https://github.com/PixelInsight-AE" target="_blank">
          <img src="/assets/svg/linknin.svg" alt="" />
        </a> */}
      </section>
    </footer>
  );
};
export default Footer;
