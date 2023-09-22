import { Link } from "react-router-dom";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ReactDOM from "react-dom";
import { Helmet } from "react-helmet-async";
import { Header } from "../shared/Header";
const About = () => {
  return (
    <>
      <Helmet>
        <title>Pixel - About</title>
      </Helmet>
      <Header />
      <div>
        <h1>About</h1>
      </div>
    </>
  );
};
export default About;
