const ContactForm = () => {
  return (
    <div className="contact-form">
      <form>
        <h2>Contact Us</h2>
        <input type="text" placeholder="Your Name*" required={true} />
        <input type="text" placeholder="Your Email*" required={true} />
        <input type="text" placeholder="Phone" />
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          placeholder="Message*"
        ></textarea>
        <section className="newsletter">
          {/* idk why this wont flex row....  */}
          <input type="checkbox" placeholder="Sign up" />
          <p>Sign up for our newsletter</p>
        </section>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
export default ContactForm;
