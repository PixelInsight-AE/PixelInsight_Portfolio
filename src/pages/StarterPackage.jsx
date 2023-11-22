import { Header } from "../shared/Header";
import { Helmet } from "react-helmet-async";
const StarterPackage = () => {
  return (
    <>
      <Header />
      <Helmet></Helmet>
      <div className="starter-package">
        <h1 clasdName="starter-package__title">
          Starter Package: Your Gateway to the Digital World
        </h1>
        <h2 className="starter-package__tagline">
          Get your brand online with ease and style
        </h2>

        <div className="starter-package__hero">
          <article className="starter-package__card starter-data">
            <div className="starter-package__card-top">
              <h2>Starter Package</h2>
              <h3>
                Launch Your Online Presence - A concise and impactful website.
              </h3>
              <h4>Great Value at an Affordable Price</h4>
            </div>
            <ul>
              <li>Up to 5 Pages of Custom, High-Quality Design</li>

              <li>Mobile-Ready Design: Your Website, Anywhere, Anytime!</li>
              <li>Custom Design Tailored for You</li>
              <li>Skyrocket Your Visibility with SEO Mastery!</li>
              <li>Exceptional Quality, Friendly to Your Budget!</li>
              <li>Rapid Results, Unmatched Brilliance!</li>
            </ul>
            <h2 className="starter-package__price">$999</h2>
          </article>
          <article className="starter-package__hero-text">
            <h3>Starter Package</h3>
            <p>
              Our Starter Package is designed to get you up and running on the
              web with a professionally crafted, sleek, and responsive website.
              Perfect for small businesses, startups, or personal brands, this
              package offers everything you need to make a strong online
              impression.
            </p>
            <button>Order Now</button>
          </article>
        </div>

        <section className="starter-package__features">
          <ul>
            {/* 5 - 7 Page Website */}
            <li>
              <strong>5 - 7 Page Website:</strong>
              <ul>
                <li>
                  <strong>Tailored to Your Needs:</strong> Choose up to 7 pages
                  to showcase your brand. Whether it’s a home page, about us,
                  services, or contact page, each will be crafted to reflect
                  your brand’s unique identity.
                </li>
                <li>
                  <strong>Professionally Designed:</strong> Every page is
                  designed with your audience in mind, ensuring a professional
                  look and feel that resonates with your target market.
                </li>
              </ul>
            </li>

            {/* Responsive Design */}
            <li>
              <strong>Responsive Design:</strong>
              <ul>
                <li>
                  <strong>Looks Great on Any Device:</strong> Your website will
                  be fully responsive, ensuring it looks fantastic on desktops,
                  tablets, and smartphones.
                </li>
                <li>
                  <strong>User-Friendly Experience:</strong> A seamless user
                  experience is key to keeping your audience engaged. Our
                  responsive design ensures your site is easy to navigate, no
                  matter the device.
                </li>
              </ul>
            </li>

            {/* Contact Form */}
            <li>
              <strong>Contact Form:</strong>
              <ul>
                <li>
                  <strong>Stay Connected:</strong> An easy-to-use contact form
                  allows your visitors to reach out to you, helping you generate
                  leads and feedback.
                </li>
                <li>
                  <strong>Custom Fields:</strong> Tailor the contact form to
                  gather the information you need, from basic contact details to
                  specific inquiries.
                </li>
              </ul>
            </li>

            {/* Image Gallery */}
            <li>
              <strong>Image Gallery:</strong>
              <ul>
                <li>
                  <strong>Showcase with Style:</strong> A beautifully designed
                  image gallery to display your products, projects, or
                  achievements.
                </li>
                <li>
                  <strong>Engaging Visuals:</strong> Draw your audience in with
                  high-quality images that tell your brand’s story.
                </li>
              </ul>
            </li>

            {/* Basic SEO Optimization */}
            <li>
              <strong>Basic SEO Optimization:</strong>
              <ul>
                <li>
                  <strong>Get Found:</strong> Basic SEO optimization helps your
                  website rank better in search engine results, increasing your
                  visibility.
                </li>
                <li>
                  <strong>SEO Best Practices:</strong> We incorporate SEO best
                  practices in your site's structure and content, setting the
                  foundation for your online growth.
                </li>
              </ul>
            </li>
          </ul>
        </section>
      </div>
    </>
  );
};

export default StarterPackage;
