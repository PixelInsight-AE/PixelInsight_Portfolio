import { AnimatePresence, motion } from "framer-motion";
import ReactDOM from "react-dom";

const Backdrop = ({ isOpen, onClick }) => {
  return ReactDOM.createPortal(
    <>
      {isOpen && (
        <AnimatePresence>
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="backdrop"
            onClick={onClick}
          ></motion.div>
        </AnimatePresence>
      )}
    </>,
    document.getElementById("backdrop-hook")
  );
};

export default Backdrop;
