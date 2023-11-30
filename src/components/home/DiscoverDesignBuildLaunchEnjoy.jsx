import React from "react";
import { Scrollbar } from "./ScrollBar";
import { motion } from "framer-motion";

const DiscoverDesignBuildLaunchEnjoy = () => {
  return (
    <section className="discover-design-build">
      <article className="discover-design-build__heading">
        <h2>Your Journey with Us</h2>
        <p>
          Your path to digital excellence starts here. We're excited to be your
          guides, helping you navigate the complexities of the online world and
          transforming your ideas into reality.
        </p>
      </article>
      <section className="discover-design-build__wrapper">
        {/*      <Scrollbar /> */}
        <motion.article
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="discover-design-build__card-outer left discover"
        >
          <div className="discover-design-build__card-inner">
            <h2>Discover</h2>
            <p>
              The 'Discover' phase marks the beginning of our journey together.
              We explore your ideas, define project goals, and chart a clear
              roadmap.
            </p>
          </div>
        </motion.article>
        <motion.article
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="discover-design-build__card-outer right design"
        >
          <div className="discover-design-build__card-inner">
            <h2>Design</h2>
            <p>
              Our 'Design' phase is about more than aesthetics; it's about
              creating delightful user experiences to ensure your audience's
              journey is intuitive and engaging."
            </p>
          </div>
        </motion.article>
        <motion.article
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="discover-design-build__card-outer left build"
        >
          <div className="discover-design-build__card-inner">
            <h2>Build</h2>
            <p>
              The 'Build' phase is where your digital vision takes its first
              breath. Our expert developers ensure your project becomes a
              functional reality.
            </p>
          </div>
        </motion.article>
        <motion.article
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="discover-design-build__card-outer right launch"
        >
          <div className="discover-design-build__card-inner">
            <h2>Launch</h2>
            <p>
              In 'Launch,' We conduct rigorous testing and fine-tuning to ensure
              that your web or mobile solution is primed for success.
            </p>
          </div>
        </motion.article>
        <motion.article
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="discover-design-build__card-outer left enjoy"
        >
          <div className="discover-design-build__card-inner">
            <h2>Enjoy</h2>
            <p>
              In the 'Enjoy' phase, your web presence is fully functional, and
              we provide ongoing support to ensure a long-term and happy
              relationship.
            </p>
          </div>
        </motion.article>
      </section>
    </section>
  );
};
export { DiscoverDesignBuildLaunchEnjoy };
