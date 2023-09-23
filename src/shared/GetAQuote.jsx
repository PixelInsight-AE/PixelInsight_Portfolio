const GetAQuote = () => {
  return (
    <div className="get-a-quote">
      <section className="duo">
        <img src="/assets/svg/emaa.svg" alt="" />
        <img className="px-4" src="/assets/svg/logo-test.svg" alt="" />
        <img src="/assets/svg/arno.svg" alt="" />
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
