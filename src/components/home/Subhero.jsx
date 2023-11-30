import { motion } from "framer-motion";

const Subhero = () => {
  return (
    <section className="subhero">
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Ready to Transform Your Online Presence?
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        Explore our packages and discover how we can bring your digital vision
        to life. With Pixel Insight, your website will be more than just an
        online space; it will be a digital powerhouse driving your business
        forward. Let's create something remarkable together!
      </motion.p>
    </section>
  );
};

export default Subhero;
