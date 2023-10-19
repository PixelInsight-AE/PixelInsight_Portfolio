import { ScrollAnimationWhyChoose } from "./ScrollAnimationWhyChoose";

const WhyChoosePixel = () => {
  return (
    <section className="why-choose-pixel">
      <ScrollAnimationWhyChoose />
      <h2 className="why-choose-pixel__title">Why Choose Pixel Insight?</h2>
      <div className="why-choose-pixel__stagger-box">
        <article className="why-choose-pixel__card left">
          <section className="why-choose-pixel__card--header">
            <img
              src="/assets/svg/creative_tech.svg"
              alt="Why choose Pixel Insight. Creativity meets Technology"
            />
            <h2 className="why-choose-pixel__card--title">
              Creativity Meets Technology
            </h2>
          </section>
          <p>
            We're a dynamic duo, blending the talents of designers, developers,
            and digital marketers. We firmly believe that the fusion of
            creativity and technology is the key to achieving extraordinary
            results.
          </p>
        </article>
        <article className="why-choose-pixel__card right">
          <section className="why-choose-pixel__card--header reverse">
            <h2 className="why-choose-pixel__card--title">
              Client-Centric Approach
            </h2>
            <img
              src="/assets/svg/client-approach.svg"
              alt="Why choose Pixel Insight. Client-centric Approach"
            />
          </section>
          <p>
            Our client-centric approach means your satisfaction and success are
            our top priorities.
          </p>
        </article>
        <article className="why-choose-pixel__card left">
          <section className="why-choose-pixel__card--header">
            <img
              src="/assets/svg/expertise.svg"
              alt="Why choose Pixel Insight. Expertise that Counts."
            />
            <h2 className="why-choose-pixel__card--title">
              Expertise That Counts
            </h2>
          </section>
          <p>
            We're at the forefront of the industry, leveraging our expertise to
            drive innovation in every project.
          </p>
        </article>
        <article className="why-choose-pixel__card right">
          <section className="why-choose-pixel__card--header reverse">
            <img
              src="/assets/svg/collaborative.svg"
              alt="Why choose Pixel Insight. Collaborative Spirit."
            />
            <h2 className="why-choose-pixel__card--title">
              Collaborative Spirit
            </h2>
          </section>
          <p>
            Your ideas and our expertise create a harmonious symphony of
            collaboration.
          </p>
        </article>
        <article className="why-choose-pixel__card left">
          <section className="why-choose-pixel__card--header">
            <h2 className="why-choose-pixel__card--title">Results Driven</h2>
            <img
              src="/assets/svg/results_driven.svg"
              alt="Why choose Pixel Insight. Results Driven"
            />
          </section>
          <p>
            We measure our success by your satisfaction and the positive impact
            our solutions bring
          </p>
        </article>
      </div>
    </section>
  );
};
export default WhyChoosePixel;
