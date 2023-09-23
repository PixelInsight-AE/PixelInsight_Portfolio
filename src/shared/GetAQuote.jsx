const GetAQuote = () => {
  return (
    <div className="get-a-quote">
      <section className="duo">
        <img
          style={{
            borderRadius: "50%",
            width: "100px",
            height: "100px",
            border: "3px solid #f2446e",
          }}
          src="/assets/images/hottt.webp"
          alt=""
        />
        <img className="px-4" src="/assets/svg/logo-test.svg" alt="" />
        <img
          style={{
            borderRadius: "50%",
            width: "100px",
            height: "100px",
            border: "3px solid #0071b9",
          }}
          src="/assets/images/arnoo.webp"
          alt=""
        />
      </section>
      <p>
        Ready to dive in? Join us on this pixelated journey and let's make the
        digital world yours.
      </p>
      <button
        onClick={() => {
          document
            .getElementById("contact-form")
            .scrollIntoView({ behavior: "smooth" });
        }}
      >
        Get a free quote!
      </button>
    </div>
  );
};
export default GetAQuote;
