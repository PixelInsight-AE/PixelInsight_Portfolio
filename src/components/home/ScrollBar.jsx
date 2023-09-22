import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useScroll } from "framer-motion";
const Scrollbar = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end top", "end bottom"],
  });

  return (
    <div ref={ref} className="scrollbar">
      <img src="/assets/svg/unlit_hex.svg" className="hex" />

      <motion.div
        style={{ pathLength: scrollYProgress }}
        className="dot"
      ></motion.div>
      <motion.div className="dot"></motion.div>
      <motion.div className="dot"></motion.div>
      <motion.div className="dot"></motion.div>
      <motion.div className="dot"></motion.div>
      <motion.div className="dot"></motion.div>
      <motion.div className="dot"></motion.div>
      <motion.div className="dot"></motion.div>
      <motion.div className="dot"></motion.div>
      <motion.div className="dot"></motion.div>
      <motion.div className="dot"></motion.div>
      <motion.div className="dot"></motion.div>
      <motion.div className="dot"></motion.div>
      <img src="/assets/svg/unlit_hex.svg" className="hex" />
      <motion.div className="dot"></motion.div>
      <motion.div className="dot"></motion.div>
      <motion.div className="dot"></motion.div>
      <motion.div className="dot"></motion.div>
      <motion.div className="dot"></motion.div>
      <motion.div className="dot"></motion.div>
      <motion.div className="dot"></motion.div>
      <motion.div className="dot"></motion.div>
      <motion.div className="dot"></motion.div>
      <motion.div className="dot"></motion.div>
      <motion.div className="dot"></motion.div>
      <motion.div className="dot"></motion.div>
      <motion.div className="dot"></motion.div>

      <img src="/assets/svg/unlit_hex.svg" className="hex" />
      <motion.div className="dot"></motion.div>
      <motion.div className="dot"></motion.div>
      <motion.div className="dot"></motion.div>
      <motion.div className="dot"></motion.div>
      <motion.div className="dot"></motion.div>
      <motion.div className="dot"></motion.div>
      <motion.div className="dot"></motion.div>
      <motion.div className="dot"></motion.div>
      <motion.div className="dot"></motion.div>
      <motion.div className="dot"></motion.div>
      <motion.div className="dot"></motion.div>
      <motion.div className="dot"></motion.div>
      <motion.div className="dot"></motion.div>
      <img src="/assets/svg/unlit_hex.svg" className="hex" />
      <motion.div className="dot"></motion.div>
      <motion.div className="dot"></motion.div>
      <motion.div className="dot"></motion.div>
      <motion.div className="dot"></motion.div>
      <motion.div className="dot"></motion.div>
      <motion.div className="dot"></motion.div>
      <motion.div className="dot"></motion.div>
      <motion.div className="dot"></motion.div>
      <motion.div className="dot"></motion.div>
      <motion.div className="dot"></motion.div>
      <motion.div className="dot"></motion.div>
      <motion.div className="dot"></motion.div>
      <motion.div className="dot"></motion.div>
      <img src="/assets/svg/unlit_hex.svg" className="hex" />
      <motion.div className="dot"></motion.div>
      <motion.div className="dot"></motion.div>
      <motion.div className="dot"></motion.div>
      <motion.div className="dot"></motion.div>
      <motion.div className="dot"></motion.div>
      <motion.div className="dot"></motion.div>
      <motion.div className="dot"></motion.div>
      <motion.div className="dot"></motion.div>
      <motion.div className="dot"></motion.div>
      <motion.div className="dot"></motion.div>
      <motion.div className="dot"></motion.div>
      <motion.div className="dot"></motion.div>
      <motion.div className="dot"></motion.div>
    </div>
  );
};
export default Scrollbar;
