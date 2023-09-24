import {
  Accordion,
  AccordionItem,
} from "../../pixel_styles/Pixel_UI/Accordion";
import { motion, AnimatePresence } from "framer-motion";

const FAQ = () => {
  return (
    <section className="faq">
      <h2 className="faq__title">Frequently Asked Questions</h2>
      <Accordion>
        <AccordionItem index={0} title="What do you offer?">
          <motion.p
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="faq__content"
          >
            We offer a range of services including web development, design,
            mobile app development, digital marketing, and more. Visit our
            Services page for details.
          </motion.p>
        </AccordionItem>
        <AccordionItem index={1} title="How much will it cost?">
          <motion.p
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="faq__content"
          >
            Project costs vary based on complexity. We'll provide an estimated
            timeline during project consultation.
          </motion.p>
        </AccordionItem>
        <AccordionItem index={2} title="How long will it take?">
          <motion.p
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="faq__content"
          >
            Project timelines vary based on complexity. We'll provide an
            estimated timeline during project consultation.
          </motion.p>
        </AccordionItem>
        <AccordionItem index={3} title="Is my idea safe with pixel?">
          <motion.p
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="faq__content"
          >
            Yes, we prioritize client confidentiality and ensure your project
            ideas are kept secure.
          </motion.p>
        </AccordionItem>
        <AccordionItem index={4} title="Can You Show us your work?">
          <motion.p
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="faq__content"
          >
            Absolutely, our Portfolio showcases a selection of our projects and
            their outcomes.
          </motion.p>
        </AccordionItem>
      </Accordion>
    </section>
  );
};
export default FAQ;
