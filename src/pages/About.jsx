import { useState } from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Header } from "../shared/Header";
import Footer from "../shared/Footer";
//import GetAQuote from "../shared/GetAQuote";
import ContactForm from "../shared/ContactForm";
import SocialMediaIcons from "../shared/SocialMediaIcons";

const About = () => {
  return (
    <>
      <Helmet>
        <meta name="author" content="Pixel Insight" />
        <meta property="og:image" content="https://i.imgur.com/Owid3YP.png" />
        <meta property="og:title" content="Pixel Insight" />
        <meta
          name="description"
          content="Pixel Insight: Where Creativity Meets Technology. We specialize in web and mobile app development, design, and digital marketing. Explore our digital solutions that make a difference."
        />

        <meta property="og:url" content="https://pixel-insight.com/about" />
        <meta property="og:type" content="website" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="twitter:card" content="https://i.imgur.com/LOFe11P.png" />
        <meta name="twitter:site" content="@Pixel-Insight" />
        <meta name="twitter:title" content="Pixel Insight" />
        <meta
          name="twitter:description"
          content="Pixel Insight: Where Creativity Meets Technology. We specialize in web and mobile app development, design, and digital marketing. Explore our digital solutions that make a difference."
        />
        <meta name="twitter:image" content="https://i.imgur.com/Owid3YP.png" />

        <title>Pixel - About</title>
      </Helmet>
      <Header />
      <div className="about">
        <section className="about__header">
          <h1>The pixel Insight Journey.</h1>
          <p>
            At Pixel Insight, we're passionate about crafting digital
            experiences that leave a lasting impact. Our journey began with a
            simple yet powerful idea: that pixels have the potential to
            transform the way we interact with the digital world.
          </p>
          <SocialMediaIcons className={"about__socials"} />
        </section>

        <section className="about__bg-our-vision">
          <motion.article
            initial={{ opacity: 0, scale: 1 }}
            animate={{ opacity: 1, scale: [1, 1.05, 1] }}
            transition={{ duration: 1, type: "tween" }}
            className="about__our-vision"
          >
            <h2>Our Vision</h2>
            <p>
              Our vision is to be a driving force in the digital realm, where
              creativity knows no bounds, and innovation is our daily bread. We
              believe that every pixel tells a story, and we're here to help you
              tell yours.
            </p>
          </motion.article>
        </section>

        <section className="about__team-members-wrapper">
          <motion.article
            initial={{ opacity: 0, x: "-5vw" }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, type: "tween", delay: 1.25 }}
            className="about__team-member-card"
          >
            <section className="about__team-member-card--header">
              <img
                className="about__img-emily"
                src="/assets/images/hottt.webp"
                alt="An avatar image for Emily."
              />
              <h3>Emily L</h3>
            </section>
            <p>
              Meet Emily, the dynamic co-founder of Pixel Insight, who is the
              perfect blend of professional prowess and a cheerful spirit! With
              her, the world of digital creativity becomes a joyous journey.
            </p>
            <br />
            <p>
              Emily, brings a wealth of back-end logic and hard programming
              skills to the team. Her proficiency shines in areas like
              databases, writing functions, and crafting intricate logic.
            </p>
            <br />
            <p>
              But what truly sets Emily apart is her contagious enthusiasm and
              dedication to delivering exceptional results. She infuses every
              project with a jolly, can-do attitude that energizes the entire
              team. Whether it's diving into complex programming challenges or
              spreading positivity, Emily is the heart and soul of Pixel
              Insight's success.
            </p>
            <br />
            <p>
              When you're in need of a developer expert who not only delivers
              professionalism but also radiates infectious cheer, Emily is your
              go-to partner. She's the driving force behind our technical
              excellence and the sunshine in our office.
            </p>
          </motion.article>

          <motion.article
            initial={{ opacity: 0, x: "5vw" }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, type: "tween", delay: 1.25 }}
            className="about__team-member-card"
          >
            <section className="about__team-member-card--header">
              <img
                className="about__img-arno"
                src="/assets/images/arnoo.webp"
                alt="An avatar image for Arno, the creative co-founder of Pixel Insight"
              />
              <h3>Arno L</h3>
            </section>
            <p>
              With a deep passion for culture, adventure, and a sharp eye for
              aesthetics, Arno is the visionary force behind our projects. He
              captures the world's beauty through various lenses - be it through
              the lens of a camera, lines of code in web applications, or his
              keen eye for breathtaking views.
            </p>
            <br />
            <p>
              Arno specializes in design and is our creative UI/UX maestro. His
              knack for crafting visually stunning and user-friendly digital
              experiences sets our projects apart. When you experience seamless
              navigation, captivating visuals, and an intuitive interface in our
              creations, you're witnessing Arno's artistic touch at play.
            </p>
            <br />
            <p>
              But Arno's talents go beyond pixels and screens. His true purpose
              is to make a positive impact through his creative endeavors,
              whether it's through striking visual designs or innovative web
              solutions.
            </p>
            <br />
            <p>
              When you collaborate with Arno, you're partnering with the
              creative heart of Pixel Insight. He's not just a designer; he's
              the driving force behind turning ideas into visually captivating
              digital realities."
            </p>
          </motion.article>
        </section>

        <motion.article
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, type: "tween" }}
          viewport={{ once: true }}
          className="about__our-story"
        >
          <h2>Our Story</h2>
          <p>
            Our journey commenced serendipitously through the Altcademy Full
            Stack Developer Bootcamp, where chance brought us together. An
            unexpected connection request via LinkedIn, initiated within one of
            Altcademy's Slack channels, marked our first interaction. As we
            exchanged a few initial messages, it became apparent that we both
            sought a programming companion to collaborate with.
          </p>
          <p>
            Soon thereafter, we found ourselves engaged in a collaborative
            rhythm, engaging in pair programming sessions almost daily,
            producing a steady stream of projects. Fast forward one year, and we
            took a bold step into entrepreneurship together.
          </p>
          <p>
            From this union, Pixel Insight was conceived, a testament to our
            shared vision and dedication. Our partnership, initially sparked by
            chance, has evolved into a thriving venture, driven by our
            unwavering commitment to excellence and innovation.
          </p>
        </motion.article>

        <section className="about__bg-conclusion">
          <motion.article
            initial={{ opacity: 0, scale: 1 }}
            whileInView={{ opacity: 1, scale: [1, 1.05, 1] }}
            transition={{ duration: 2, type: "tween", delay: 0.5 }}
            viewport={{ once: true }}
            className="about__conclusion"
          >
            <h2>Lets Create Together!</h2>
            <p>
              Where your vision meets our expertise. At Pixel Insight, we
              believe that the most exceptional digital solutions emerge from
              collaborative journeys. Your ideas are the seeds, and we're here
              to nurture them into vibrant realities. Together, we'll embark on
              an exciting adventure, blending creativity, innovation, and
              technology. With your unique perspective and our technical
              prowess, there's no limit to what we can achieve. So, let's join
              forces, dream big, and craft digital wonders that leave a lasting
              impact.
            </p>
          </motion.article>
        </section>
        <ContactForm />
      </div>
      {/*  <GetAQuote /> */}
      <Footer />
    </>
  );
};
export default About;
