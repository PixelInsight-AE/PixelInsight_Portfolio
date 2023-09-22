const WhatWeDoCards = () => {
  return (
    <div className="what-we-do-cards">
      <div className="what-we-do-cards__card">
        <h2>WebDevelopment</h2>
        <p>
          Unlocking the Power of Web Development: Crafting Digital Experiences
          That Inspire. At Pixel Insight, we're all about turning your unique
          ideas into captivating websites and applications.
        </p>
        <img src="assets/images/web_dev_pic.webp" alt="" />
      </div>
      <div className="what-we-do-cards__card--odd">
        <h2>Design</h2>
        <p>
          Bringing Your App Ideas to Life. From Concept to Download, We're Your
          Trusted Mobile Solution. At Pixel Insight, we specialize in crafting
          user-friendly and visually captivating mobile applications that cater
          to your unique needs. Our team is dedicated to turning your mobile app
          dreams into reality, one line of code at a time.
        </p>
        <img src="assets/images/design_pic.webp" alt="" />
      </div>
      <div className="what-we-do-cards__card">
        <h2>Mobile Development</h2>
        <p>
          Elevate your mobile presence with our expert mobile app development
          solutions. Whether it's iOS or Android, we're here to transform your
          app ideas into user-friendly and high-performance applications. From
          concept to download, we craft digital magic that resonates with your
          audience, one download at a time.
        </p>
        <img src="assets/images/mobile_pic.webp" alt="" />
      </div>
      <div className="what-we-do-cards__card--odd">
        <h2>Backend Development</h2>
        <p>
          {" "}
          Behind every captivating front-end, there's a powerful backend
          ensuring seamless functionality and security. At Pixel Insight, our
          expertise in backend development forms the robust foundation that
          supports your digital presence. From data management to server-side
          logic, we enhance the performance and reliability of your online
          solutions.
        </p>
        <img src="assets/images/backend_pic.webp" alt="" />
      </div>
    </div>
  );
};
export default WhatWeDoCards;
