import { Link } from "react-router-dom";

const GetAQuote = () => {
  return (
    <div className="get-a-quote">
      <img
        className="duo"
        src="/assets/images/glasses.webp"
        alt="A pair of glasses showing the Pixel Insight team members in the glass"
      />
      {/* <section className="duo">
        <img
          style={{
            borderRadius: "50%",
            width: "100px",
            height: "100px",
            border: "3px solid #f2446e",
          }}
          src="/assets/images/hottt.webp"
          alt="A Avatar image for Emily"
        />
        <img className="px-4" src="/assets/svg/logo-test.svg" alt="Old logo" />
        <img
          style={{
            borderRadius: "50%",
            width: "100px",
            height: "100px",
            border: "3px solid #0071b9",
          }}
          src="/assets/images/arnoo.webp"
          alt="A Avatar image for Arno"
        />
      </section> */}
      <p>
        Ready to dive in? Join us on this pixelated journey and let's make the
        digital world yours.
      </p>
      <Link to="/services">
        <button>Get a free quote!</button>
      </Link>
    </div>
  );
};
export default GetAQuote;
