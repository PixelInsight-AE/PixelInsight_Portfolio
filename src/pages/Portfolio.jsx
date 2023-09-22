import { Link } from "react-router-dom";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ReactDOM from "react-dom";
import { Helmet } from "react-helmet-async";
import { Header } from "../shared/Header";
const Portfolio = () => {
  return (
    <>
      <Helmet>
        <title>Pixel - Portfolio</title>
      </Helmet>
      <Header />
      <div>
        <h1>Portfolio</h1>
      </div>
    </>
  );
};
export default Portfolio;
