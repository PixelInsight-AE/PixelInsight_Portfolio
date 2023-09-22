import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <>
      <Helmet>
        <meta name="description" content="Pixel Insight" />

        <meta name="author" content="Pixel Insight" />
        <meta property="og:image" content="assets/images/new_logo.png" />
        <meta property="og:title" content="Pixel Insight" />
        <meta
          name="description"
          content="Pixel Insight: Where Creativity Meets Technology. We specialize in web and mobile app development, design, and digital marketing. Explore our digital solutions that make a difference."
        />

        <meta property="og:url" content="https://trans-me-downs.com" />
        <meta property="og:type" content="website" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="twitter:card" content="/assets/images/new_logo.png" />
        <meta name="twitter:site" content="@Pixel-Insight" />
        <meta name="twitter:title" content="Pixel Insight" />
        <meta
          name="twitter:description"
          content="Pixel Insight: Where Creativity Meets Technology. We specialize in web and mobile app development, design, and digital marketing. Explore our digital solutions that make a difference."
        />
        <meta name="twitter:image" content="https://i.imgur.com/ewHutRa.png" />
        <title>Pixel Insight</title>
      </Helmet>
      <h1>Home</h1>
    </>
  );
};
export default Home;
