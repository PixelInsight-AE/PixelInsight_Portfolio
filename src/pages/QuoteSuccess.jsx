import { Link, useNavigate } from "react-router-dom";
import { Header } from "../shared/Header";
import Footer from "../shared/Footer";
const QuoteSuccess = () => {
  return (
    <>
      <Header />
      <div className="quote-success">
        <h1>Thank You, We will be in contact soon!</h1>
        <Link to="/">
          <button>Return Home</button>
        </Link>
        <img src="/assets/images/quote_img.webp" alt="" />
      </div>
      {/* <Footer /> */}
    </>
  );
};
export default QuoteSuccess;
