import { Link, useNavigate } from "react-router-dom";
import { Header } from "../shared/Header";
import Footer from "../shared/Footer";
import { Helmet } from "react-helmet-async";
const QuoteSuccess = () => {
  return (
    <>
      <Helmet
        script={() => {
          <>
            <script
              async
              src="https://www.googletagmanager.com/gtag/js?id=G-8ZQZQZQZQZ"
            ></script>
            <script>
              gtag('event', 'manual_conversion_REQUEST_QUOTE_1',{" "}
              {
                // <event_parameters>
              }
              );
            </script>
          </>;
        }}
      >
        <meta name="author" content="Pixel Insight" />
        <meta property="og:image" content="https://i.imgur.com/Owid3YP.png" />
        <meta property="og:title" content="Pixel Insight" />
        <meta
          name="description"
          content="Pixel Insight: Where Creativity Meets Technology. We specialize in web and mobile app development, design, and digital marketing. Explore our digital solutions that make a difference."
        />

        <meta
          property="og:url"
          content="https://pixel-insight.com/quote-success"
        />
        <meta property="og:type" content="website" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="twitter:card" content="https://i.imgur.com/LOFe11P.png" />
        <meta name="twitter:site" content="@Pixel-Insight" />
        <meta name="twitter:title" content="Pixel Insight" />
        <meta
          name="twitter:description"
          content="Pixel Insight: Where Creativity Meets Technology. We specialize in web and mobile app development, design, and digital marketing. Explore our digital solutions that make a difference."
        />
        <meta name="twitter:image" content="https://i.imgur.com/Owid3YP.png" />

        <title>Thank you!</title>
      </Helmet>
      <Header />
      <div className="quote-success">
        <h1>Pixel Insight</h1>
        <div className="quote-success__card">
          <h2>Thank You,</h2>
          <h3> We will be in contact soon!</h3>
          <p>Please Check your Email for confirmation.</p>
          <Link to="/">
            <button>Return Home</button>
          </Link>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
};
export default QuoteSuccess;
