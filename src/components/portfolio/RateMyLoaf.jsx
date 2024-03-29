import YouTube from "react-youtube";
import { useState } from "react";
const RateMyLoaf = () => {
  const [selected, setSelected] = useState("google");
  const options = {
    height: "750",
    width: "385",
  };
  const blurStyle = {
    filter: "blur(8px)",
  };
  return (
    <div>
      <p className="portfolio-info">
        Start your journey into the enchanting world of cats. Explore a
        community of addorable feline friends.
      </p>
      <YouTube videoId="bp5BBvlBLYA" opts={options} />
      <section className="rate-my-loaf__qr-codes">
        <section
          onClick={() => setSelected("google")}
          className="rate-my-loaf__qr-wrapper"
        >
          <h3
            style={
              selected === "google"
                ? {
                    border: "2px solid white",
                    padding: "10px",
                    borderRadius: "12px",
                    marginBottom: "10px",
                  }
                : null
            }
          >
            Google Play Store
          </h3>
          {selected === "google" ? (
            <a href="https://play.google.com/store/apps/details?id=com.pixelinsight.rml&hl=en_US&gl=US">
              <img
                src="/assets/images/androidQR3.png"
                alt="google play store QR code"
              />
            </a>
          ) : (
            <div>
              <img
                style={selected === "apple" ? blurStyle : {}}
                src="/assets/images/androidQR3.png"
                alt="google play store QR code"
              />
            </div>
          )}
        </section>
        <section
          onClick={() => setSelected("apple")}
          className="rate-my-loaf__qr-wrapper"
        >
          <h3
            style={
              selected === "apple"
                ? {
                    border: "2px solid white",
                    padding: "10px",
                    borderRadius: "12px",
                    marginBottom: "10px",
                  }
                : null
            }
          >
            Apple App Store
          </h3>
          {selected === "apple" ? (
            <a href="https://apps.apple.com/ca/app/rate-my-loaf/id6476428013">
              <img
                src="/assets/images/appleQR1.png"
                alt="apple app store QR code"
              />
            </a>
          ) : (
            <div>
              <img
                style={selected === "google" ? blurStyle : {}}
                src="/assets/images/appleQR1.png"
                alt="apple app store QR code"
              />
            </div>
          )}
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
