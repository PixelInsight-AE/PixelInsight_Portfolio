import { useEffect } from "react";
import { useLocation, Route, Routes } from "react-router-dom";
import "./App.scss";
import Home from "./pages/Home";
import About from "./pages/About";
import Quote from "./pages/Quote";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import QuoteSuccess from "./pages/QuoteSuccess";
import Services from "./pages/Services";
import StarterPackage from "./pages/StarterPackage";
function App() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/showcase" element={<Portfolio />} />
        <Route path="/quote" element={<Quote />} />
        <Route path="/quote-success" element={<QuoteSuccess />} />
        {/* <Route path="/services" element={<Services />} /> */}

        <Route path="/*" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
