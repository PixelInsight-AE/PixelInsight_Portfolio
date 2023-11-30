import { ScrollAnimationWhyChoose } from "./ScrollAnimationWhyChoose";
import { motion } from "framer-motion";

const WhyChoosePixel = () => {
  return (
    <section className="why-choose-pixel">
      <h2 className="why-choose-pixel__title">Why Choose Pixel Insight?</h2>
      <div className="why-choose-pixel__stagger-box">
        <motion.article
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="why-choose-pixel__card left"
        >
          <section className="why-choose-pixel__card--header">
            <img
              src="/assets/svg/creative_tech.svg"
              alt="Why choose Pixel Insight. Creativity meets Technology"
            />
            <h2 className="why-choose-pixel__card--title">
              Creativity Meets Technology
            </h2>
          </section>
          <p>
            We're a dynamic duo, blending the talents of designers, developers,
            and digital marketers. We firmly believe that the fusion of
            creativity and technology is the key to achieving extraordinary
            results.
          </p>
        </motion.article>
        <motion.article
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="why-choose-pixel__card right"
        >
          <section className="why-choose-pixel__card--header reverse">
            <h2 className="why-choose-pixel__card--title">
              Client-Centric Approach
            </h2>
            <img
              src="/assets/svg/client-approach.svg"
              alt="Why choose Pixel Insight. Client-centric Approach"
            />
          </section>
          <p>
            Our client-centric approach means your satisfaction and success are
            our top priorities. At Pixel our commitment goes beyond just
            crafting websites; we're dedicated to providing a truly unique
            experience.
          </p>
        </motion.article>
        <motion.article
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="why-choose-pixel__card left"
        >
          <section className="why-choose-pixel__card--header">
            <img
              src="/assets/svg/expertise.svg"
              alt="Why choose Pixel Insight. Expertise that Counts."
            />
            <h2 className="why-choose-pixel__card--title">
              Expertise That Counts
            </h2>
          </section>
          <p>
            We're at the forefront of the industry, leveraging our expertise to
            drive innovation in every project. Our Expertise ensures robust
            functionality and a stunning user experience.
          </p>
        </motion.article>
        <motion.article
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="why-choose-pixel__card right"
        >
          <section className="why-choose-pixel__card--header reverse">
            <img
              src="/assets/svg/collaborative.svg"
              alt="Why choose Pixel Insight. Collaborative Spirit."
            />
            <h2 className="why-choose-pixel__card--title">
              Collaborative Spirit
            </h2>
          </section>
          <p>
            With Pixel, it's not just about creating a website; it's about
            co-creating a digital masterpiece that reflects your business
            essence and values. We work closely with you to ensure your vision
          </p>
        </motion.article>
        <motion.article
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="why-choose-pixel__card left"
        >
          <section className="why-choose-pixel__card--header">
            <h2 className="why-choose-pixel__card--title">Results Driven</h2>
            <img
              src="/assets/svg/results_driven.svg"
              alt="Why choose Pixel Insight. Results Driven"
            />
          </section>
          <p>
            Join us in this collaborative adventure, where your satisfaction is
            our top priority. Let's transform your web presence into something
            extraordinary!
          </p>
        </motion.article>
      </div>
    </section>
  );
};
export default WhyChoosePixel;
