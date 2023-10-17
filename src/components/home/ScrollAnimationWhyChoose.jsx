import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useScroll } from "framer-motion";

const ScrollAnimationWhyChoose = () => {
  return (
    <section className="scroll-animation-why-choose">
      <motion.img
        initial={{ rotate: 0, scale: 1 }}
        whileInView={{
          scale: [1.25, 1],
          filter: "hue-rotate(280deg)",
        }}
        viewport={{ once: true }}
        transition={{ duration: 2, delay: 0.3, type: "spring", bounce: 0.5 }}
        src="/assets/svg/unlit_hex.svg"
        className="hex"
      />
      <motion.div
        initial={{ backgroundColor: "#1d1f1f", scale: 1 }}
        whileInView={{
          backgroundColor: "#ef913c",
          scale: [1.5, 1, 1.5, 1],
        }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.3, type: "spring", bounce: 0.5 }}
        className="dot lg"
      ></motion.div>
      <motion.div
        initial={{ backgroundColor: "#1d1f1f", scale: 1 }}
        whileInView={{
          backgroundColor: "#ef913c",
          scale: [1.5, 1, 1.5, 1],
        }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.3, type: "spring", bounce: 0.5 }}
        className="dot lg"
      ></motion.div>
      <motion.div
        initial={{ backgroundColor: "#1d1f1f", scale: 1 }}
        whileInView={{
          backgroundColor: "#ef913c",
          scale: [1.5, 1, 1.5, 1],
        }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.3, type: "spring", bounce: 0.5 }}
        className="dot lg"
      ></motion.div>
      <motion.div
        initial={{ backgroundColor: "#1d1f1f", scale: 1 }}
        whileInView={{
          backgroundColor: "#ef913c",
          scale: [1.5, 1, 1.5, 1],
        }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.3, type: "spring", bounce: 0.5 }}
        className="dot lg"
      ></motion.div>
      <motion.div
        initial={{ backgroundColor: "#1d1f1f", scale: 1 }}
        whileInView={{
          backgroundColor: "#ef913c",
          scale: [1.5, 1, 1.5, 1],
        }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.3, type: "spring", bounce: 0.5 }}
        className="dot lg"
      ></motion.div>
      <motion.div
        initial={{ backgroundColor: "#1d1f1f", scale: 1 }}
        whileInView={{
          backgroundColor: "#ef913c",
          scale: [1.5, 1, 1.5, 1],
        }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.3, type: "spring", bounce: 0.5 }}
        className="dot"
      ></motion.div>
      <motion.div
        initial={{ backgroundColor: "#1d1f1f", scale: 1 }}
        whileInView={{
          backgroundColor: "#ef913c",
          scale: [1.5, 1, 1.5, 1],
        }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.3, type: "spring", bounce: 0.5 }}
        className="dot"
      ></motion.div>
      <motion.div
        initial={{ backgroundColor: "#1d1f1f", scale: 1 }}
        whileInView={{
          backgroundColor: "#ef913c",
          scale: [1.5, 1, 1.5, 1],
        }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.3, type: "spring", bounce: 0.5 }}
        className="dot"
      ></motion.div>
      <motion.div
        initial={{ backgroundColor: "#1d1f1f", scale: 1 }}
        whileInView={{
          backgroundColor: "#ef913c",
          scale: [1.5, 1, 1.5, 1],
        }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.3, type: "spring", bounce: 0.5 }}
        className="dot"
      ></motion.div>
      <motion.div
        initial={{ backgroundColor: "#1d1f1f", scale: 1 }}
        whileInView={{
          backgroundColor: "#ef913c",
          scale: [1.5, 1, 1.5, 1],
        }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.3, type: "spring", bounce: 0.5 }}
        className="dot"
      ></motion.div>
      <motion.div
        initial={{ backgroundColor: "#1d1f1f", scale: 1 }}
        whileInView={{
          backgroundColor: "#ef913c",
          scale: [1.5, 1, 1.5, 1],
        }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.3, type: "spring", bounce: 0.5 }}
        className="dot"
      ></motion.div>
      <motion.div
        initial={{ backgroundColor: "#1d1f1f", scale: 1 }}
        whileInView={{
          backgroundColor: "#ef913c",
          scale: [1.5, 1, 1.5, 1],
        }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.3, type: "spring", bounce: 0.5 }}
        className="dot"
      ></motion.div>
      <motion.div
        initial={{ backgroundColor: "#1d1f1f", scale: 1 }}
        whileInView={{
          backgroundColor: "#ef913c",
          scale: [1.5, 1, 1.5, 1],
        }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.3, type: "spring", bounce: 0.5 }}
        className="dot"
      ></motion.div>
      <motion.div
        initial={{ backgroundColor: "#1d1f1f", scale: 1 }}
        whileInView={{
          backgroundColor: "#ef913c",
          scale: [1.5, 1, 1.5, 1],
        }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.3, type: "spring", bounce: 0.5 }}
        className="dot"
      ></motion.div>
      <motion.div
        initial={{ backgroundColor: "#1d1f1f", scale: 1 }}
        whileInView={{
          backgroundColor: "#ef913c",
          scale: [1.5, 1, 1.5, 1],
        }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.3, type: "spring", bounce: 0.5 }}
        className="dot"
      ></motion.div>
      <motion.img
        initial={{ rotate: 0, scale: 1 }}
        whileInView={{ scale: [1.25, 1], filter: "hue-rotate(280deg)" }}
        viewport={{ once: true }}
        transition={{ duration: 3, delay: 0.5, type: "spring", bounce: 0.5 }}
        src="/assets/svg/unlit_hex.svg"
        className="hex"
      />
      <motion.div
        initial={{ backgroundColor: "#1d1f1f", scale: 1 }}
        whileInView={{
          backgroundColor: "#ef913c",
          scale: [1.5, 1, 1.5, 1],
        }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.3, type: "spring", bounce: 0.5 }}
        className="dot lg"
      ></motion.div>{" "}
      <motion.div
        initial={{ backgroundColor: "#1d1f1f", scale: 1 }}
        whileInView={{
          backgroundColor: "#ef913c",
          scale: [1.5, 1, 1.5, 1],
        }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.3, type: "spring", bounce: 0.5 }}
        className="dot lg"
      ></motion.div>{" "}
      <motion.div
        initial={{ backgroundColor: "#1d1f1f", scale: 1 }}
        whileInView={{
          backgroundColor: "#ef913c",
          scale: [1.5, 1, 1.5, 1],
        }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.3, type: "spring", bounce: 0.5 }}
        className="dot lg"
      ></motion.div>
      <motion.div
        initial={{ backgroundColor: "#1d1f1f", scale: 1 }}
        whileInView={{
          backgroundColor: "#ef913c",
          scale: [1.5, 1, 1.5, 1],
        }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.3, type: "spring", bounce: 0.5 }}
        className="dot lg"
      ></motion.div>
      <motion.div
        initial={{ backgroundColor: "#1d1f1f", scale: 1 }}
        whileInView={{
          backgroundColor: "#ef913c",
          scale: [1.5, 1, 1.5, 1],
        }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.3, type: "spring", bounce: 0.5 }}
        className="dot"
      ></motion.div>
      <motion.div
        initial={{ backgroundColor: "#1d1f1f", scale: 1 }}
        whileInView={{
          backgroundColor: "#ef913c",
          scale: [1.5, 1, 1.5, 1],
        }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.3, type: "spring", bounce: 0.5 }}
        className="dot"
      ></motion.div>
      <motion.div
        initial={{ backgroundColor: "#1d1f1f", scale: 1 }}
        whileInView={{
          backgroundColor: "#ef913c",
          scale: [1.5, 1, 1.5, 1],
        }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.3, type: "spring", bounce: 0.5 }}
        className="dot"
      ></motion.div>
      <motion.div
        initial={{ backgroundColor: "#1d1f1f", scale: 1 }}
        whileInView={{
          backgroundColor: "#ef913c",
          scale: [1.5, 1, 1.5, 1],
        }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.3, type: "spring", bounce: 0.5 }}
        className="dot"
      ></motion.div>
      <motion.div
        initial={{ backgroundColor: "#1d1f1f", scale: 1 }}
        whileInView={{
          backgroundColor: "#ef913c",
          scale: [1.5, 1, 1.5, 1],
        }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.3, type: "spring", bounce: 0.5 }}
        className="dot"
      ></motion.div>
      <motion.div
        initial={{ backgroundColor: "#1d1f1f", scale: 1 }}
        whileInView={{
          backgroundColor: "#ef913c",
          scale: [1.5, 1, 1.5, 1],
        }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.3, type: "spring", bounce: 0.5 }}
        className="dot"
      ></motion.div>
      <motion.div
        initial={{ backgroundColor: "#1d1f1f", scale: 1 }}
        whileInView={{
          backgroundColor: "#ef913c",
          scale: [1.5, 1, 1.5, 1],
        }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.3, type: "spring", bounce: 0.5 }}
        className="dot"
      ></motion.div>
      <motion.div
        initial={{ backgroundColor: "#1d1f1f", scale: 1 }}
        whileInView={{
          backgroundColor: "#ef913c",
          scale: [1.5, 1, 1.5, 1],
        }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.3, type: "spring", bounce: 0.5 }}
        className="dot"
      ></motion.div>
      <motion.img
        initial={{ rotate: 0, scale: 1 }}
        whileInView={{ scale: [1.25, 1], filter: "hue-rotate(280deg)" }}
        viewport={{ once: true }}
        transition={{ duration: 3, delay: 0.5, type: "spring", bounce: 0.5 }}
        src="/assets/svg/unlit_hex.svg"
        className="hex"
      />
      <motion.div
        initial={{ backgroundColor: "#1d1f1f", scale: 1 }}
        whileInView={{
          backgroundColor: "#ef913c",
          scale: [1.5, 1, 1.5, 1],
        }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.3, type: "spring", bounce: 0.5 }}
        className="dot"
      ></motion.div>
      <motion.div
        initial={{ backgroundColor: "#1d1f1f", scale: 1 }}
        whileInView={{
          backgroundColor: "#ef913c",
          scale: [1.5, 1, 1.5, 1],
        }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.3, type: "spring", bounce: 0.5 }}
        className="dot lg"
      ></motion.div>{" "}
      <motion.div
        initial={{ backgroundColor: "#1d1f1f", scale: 1 }}
        whileInView={{
          backgroundColor: "#ef913c",
          scale: [1.5, 1, 1.5, 1],
        }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.3, type: "spring", bounce: 0.5 }}
        className="dot lg"
      ></motion.div>{" "}
      <motion.div
        initial={{ backgroundColor: "#1d1f1f", scale: 1 }}
        whileInView={{
          backgroundColor: "#ef913c",
          scale: [1.5, 1, 1.5, 1],
        }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.3, type: "spring", bounce: 0.5 }}
        className="dot lg"
      ></motion.div>{" "}
      <motion.div
        initial={{ backgroundColor: "#1d1f1f", scale: 1 }}
        whileInView={{
          backgroundColor: "#ef913c",
          scale: [1.5, 1, 1.5, 1],
        }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.3, type: "spring", bounce: 0.5 }}
        className="dot"
      ></motion.div>
      <motion.div
        initial={{ backgroundColor: "#1d1f1f", scale: 1 }}
        whileInView={{
          backgroundColor: "#ef913c",
          scale: [1.5, 1, 1.5, 1],
        }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.3, type: "spring", bounce: 0.5 }}
        className="dot"
      ></motion.div>
      <motion.div
        initial={{ backgroundColor: "#1d1f1f", scale: 1 }}
        whileInView={{
          backgroundColor: "#ef913c",
          scale: [1.5, 1, 1.5, 1],
        }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.3, type: "spring", bounce: 0.5 }}
        className="dot"
      ></motion.div>
      <motion.div
        initial={{ backgroundColor: "#1d1f1f", scale: 1 }}
        whileInView={{
          backgroundColor: "#ef913c",
          scale: [1.5, 1, 1.5, 1],
        }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.3, type: "spring", bounce: 0.5 }}
        className="dot"
      ></motion.div>
      <motion.div
        initial={{ backgroundColor: "#1d1f1f", scale: 1 }}
        whileInView={{
          backgroundColor: "#ef913c",
          scale: [1.5, 1, 1.5, 1],
        }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.3, type: "spring", bounce: 0.5 }}
        className="dot"
      ></motion.div>
      <motion.div
        initial={{ backgroundColor: "#1d1f1f", scale: 1 }}
        whileInView={{
          backgroundColor: "#ef913c",
          scale: [1.5, 1, 1.5, 1],
        }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.3, type: "spring", bounce: 0.5 }}
        className="dot"
      ></motion.div>
      <motion.img
        initial={{ rotate: 0, scale: 1 }}
        whileInView={{ scale: [1.25, 1], filter: "hue-rotate(280deg)" }}
        viewport={{ once: true }}
        transition={{ duration: 3, delay: 0.5, type: "spring", bounce: 0.5 }}
        src="/assets/svg/unlit_hex.svg"
        className="hex"
      />
      <motion.div
        initial={{ backgroundColor: "#1d1f1f", scale: 1 }}
        whileInView={{
          backgroundColor: "#ef913c",
          scale: [1.5, 1, 1.5, 1],
        }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.3, type: "spring", bounce: 0.5 }}
        className="dot"
      ></motion.div>
      <motion.div
        initial={{ backgroundColor: "#1d1f1f", scale: 1 }}
        whileInView={{
          backgroundColor: "#ef913c",
          scale: [1.5, 1, 1.5, 1],
        }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.3, type: "spring", bounce: 0.5 }}
        className="dot"
      ></motion.div>
      <motion.div
        initial={{ backgroundColor: "#1d1f1f", scale: 1 }}
        whileInView={{
          backgroundColor: "#ef913c",
          scale: [1.5, 1, 1.5, 1],
        }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.3, type: "spring", bounce: 0.5 }}
        className="dot"
      ></motion.div>
      <motion.div
        initial={{ backgroundColor: "#1d1f1f", scale: 1 }}
        whileInView={{
          backgroundColor: "#ef913c",
          scale: [1.5, 1, 1.5, 1],
        }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.3, type: "spring", bounce: 0.5 }}
        className="dot"
      ></motion.div>
      <motion.div
        initial={{ backgroundColor: "#1d1f1f", scale: 1 }}
        whileInView={{
          backgroundColor: "#ef913c",
          scale: [1.5, 1, 1.5, 1],
        }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.3, type: "spring", bounce: 0.5 }}
        className="dot"
      ></motion.div>
      <motion.div
        initial={{ backgroundColor: "#1d1f1f", scale: 1 }}
        whileInView={{
          backgroundColor: "#ef913c",
          scale: [1.5, 1, 1.5, 1],
        }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.3, type: "spring", bounce: 0.5 }}
        className="dot"
      ></motion.div>
      <motion.div
        initial={{ backgroundColor: "#1d1f1f", scale: 1 }}
        whileInView={{
          backgroundColor: "#ef913c",
          scale: [1.5, 1, 1.5, 1],
        }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.3, type: "spring", bounce: 0.5 }}
        className="dot"
      ></motion.div>
      <motion.div
        initial={{ backgroundColor: "#1d1f1f", scale: 1 }}
        whileInView={{
          backgroundColor: "#ef913c",
          scale: [1.5, 1, 1.5, 1],
        }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.3, type: "spring", bounce: 0.5 }}
        className="dot"
      ></motion.div>
      <motion.img
        initial={{ rotate: 0, scale: 1 }}
        whileInView={{ scale: [1.25, 1], filter: "hue-rotate(280deg)" }}
        viewport={{ once: true }}
        transition={{ duration: 3, delay: 0.5, type: "spring", bounce: 0.5 }}
        src="/assets/svg/unlit_hex.svg"
        className="hex"
      />
      <motion.div
        initial={{ backgroundColor: "#1d1f1f", scale: 1 }}
        whileInView={{
          backgroundColor: "#ef913c",
          scale: [1.5, 1, 1.5, 1],
        }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.3, type: "spring", bounce: 0.5 }}
        className="dot"
      ></motion.div>
      <motion.div
        initial={{ backgroundColor: "#1d1f1f", scale: 1 }}
        whileInView={{
          backgroundColor: "#ef913c",
          scale: [1.5, 1, 1.5, 1],
        }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.3, type: "spring", bounce: 0.5 }}
        className="dot"
      ></motion.div>
      <motion.div
        initial={{ backgroundColor: "#1d1f1f", scale: 1 }}
        whileInView={{
          backgroundColor: "#ef913c",
          scale: [1.5, 1, 1.5, 1],
        }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.3, type: "spring", bounce: 0.5 }}
        className="dot"
      ></motion.div>
      <motion.div
        initial={{ backgroundColor: "#1d1f1f", scale: 1 }}
        whileInView={{
          backgroundColor: "#ef913c",
          scale: [1.5, 1, 1.5, 1],
        }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.3, type: "spring", bounce: 0.5 }}
        className="dot"
      ></motion.div>
      <motion.div
        initial={{ backgroundColor: "#1d1f1f", scale: 1 }}
        whileInView={{
          backgroundColor: "#ef913c",
          scale: [1.5, 1, 1.5, 1],
        }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.3, type: "spring", bounce: 0.5 }}
        className="dot"
      ></motion.div>
    </section>
  );
};
export { ScrollAnimationWhyChoose };
