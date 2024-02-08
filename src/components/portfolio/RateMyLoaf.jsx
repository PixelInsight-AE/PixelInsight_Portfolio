import YouTube from "react-youtube";
const RateMyLoaf = () => {
  const options = {
    height: "750",
    width: "385",
  };
  return (
    <div>
      <p className="portfolio-info">
        Start your journey into the enchanting world of cats. Explore a
        community of addorable feline friends.
      </p>
      <YouTube videoId="bp5BBvlBLYA" opts={options} />
      <section className="rate-my-loaf__qr-codes">
        <section className="rate-my-loaf__qr-wrapper">
          <h3>Google Play Store</h3>
          <a href="https://play.google.com/store/apps/details?id=com.pixelinsight.rml&hl=en_US&gl=US">
            <img
              src="/assets/images/androidQR3.png"
              alt="google play store QR code"
            />
          </a>
        </section>
        <section className="rate-my-loaf__qr-wrapper">
          <h3>Apple App Store</h3>
          <a href="https://apps.apple.com/ca/app/rate-my-loaf/id6476428013">
            <img
              src="/assets/images/appleQR1.png"
              alt="apple app store QR code"
            />
          </a>
        </section>
      </section>
      <section>
        <section className="portfolio__tech-stack-wrapper">
          <h2>Technology Used</h2>
          <ul className="portfolio__tech-stack">
            <li>
              <h3>Supabase</h3>
              <p>
                Empowering real-time experiences and robust database
                functionalities with the dynamic capabilities of
                Supabase/Postgres
              </p>
              <img src="/assets/svg/supabase.svg" alt="" />
            </li>
            <li>
              <h3>React</h3>
              <p>
                Harnessing the speed and efficiency of Vite for a turbocharged
                development experience
              </p>
              <img src="/assets/svg/react.svg" alt="" />
            </li>
            <li>
              <h3>Sass</h3>
              <p>
                Elevating styles to the next level with Sass, transforming
                ordinary elements into visually stunning masterpieces.!
              </p>
              <img style={{ width: 28 }} src="/assets/svg/sass.svg" alt="" />
            </li>
            <li>
              <h3>Node</h3>
              <p>Backend Server for mailer and other microservices.</p>
              <img style={{ width: 28 }} src="/assets/svg/react.svg" alt="" />
            </li>
          </ul>
        </section>
      </section>
    </div>
  );
};
export default RateMyLoaf;
