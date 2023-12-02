const ChatWave = () => {
  return (
    <div>
      <img
        className="portfolio-piece-image chatwave"
        src="/assets/images/chatwave.webp"
        alt=""
      />
      <p className="portfolio-info">
        Experience the next level of communication and entertainment with Chat
        Wave by Pixel. Engage in lively chats, share your favorite moments, and
        stream videos seamlessly. Join a community that values connection and
        creativity.
      </p>
      <section>
        <section className="portfolio__tech-stack-wrapper">
          <h2>Technology Used</h2>
          <ul className="portfolio__tech-stack">
            <li>
              <h3>Supabase</h3>
              <p>
                Empowering real-time experiences and robust database
                functionalities with the dynamic capabilities of
                Supabase/Postgres
              </p>
              <img src="/assets/svg/supabase.svg" alt="" />
            </li>
            <li>
              <h3>React</h3>
              <p>
                Harnessing the speed and efficiency of Vite for a turbocharged
                development experience
              </p>
              <img src="/assets/svg/react.svg" alt="" />
            </li>
            <li>
              <h3>Sass</h3>
              <p>
                Elevating styles to the next level with Sass, transforming
                ordinary elements into visually stunning masterpieces.!
              </p>
              <img style={{ width: 28 }} src="/assets/svg/sass.svg" alt="" />
            </li>
          </ul>
        </section>
      </section>
    </div>
  );
};
export default ChatWave;
