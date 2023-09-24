import { useState } from "react";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import "./App.scss";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/quote" element={<Home />} />
        <Route path="/*" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
