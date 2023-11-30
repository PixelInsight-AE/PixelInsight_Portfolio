const SocialMediaIcons = ({ className }) => {
  return (
    <section className={className}>
      <a href="https://github.com/PixelInsight-AE" target="_blank">
        <img
          src="/assets/svg/github.svg"
          alt="A button showing the GitHub logo"
        />
      </a>
      <a href="https://twitter.com/pixel_insight" target="_blank">
        <img src="/assets/svg/twitter.svg" alt="A button showing the X logo" />
      </a>
      <a href="https://www.facebook.com/PixelInsightAE/" target="_blank">
        <img
          src="/assets/svg/facebook.svg"
          alt="A button showing the Meta logo"
        />
      </a>
      <a href="https://github.com/PixelInsight-AE" target="_blank">
        <img
          src="/assets/svg/linkedin.svg"
          alt="A button showing the LinkedIn logo"
        />
      </a>
      <a href="https://www.instagram.com/pixel_insight_ae/" target="_blank">
        <img
          src="/assets/svg/instagram.svg"
          alt="A button showing the instagram logo"
        />
      </a>
    </section>
  );
};

export default SocialMediaIcons;
