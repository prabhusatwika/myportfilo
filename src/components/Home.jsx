import { useEffect } from 'react';
import Typed from 'typed.js';

const Home = () => {
  useEffect(() => {
    new Typed('.typing', {
      strings: ['Developer', 'Blogger', 'Designer', 'UI UX Developer'],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true,
    });
  }, []);

  return (
    <section className="home" id="home">
      <div className="max-width">
        <div className="home-content">
          <div className="text-1">Hello, my name is</div>
          <div className="text-2">M Prabhu Satwika</div>
          <div className="text-3">
            And I'm a <span className="typing"></span>
          </div>
          <a href="#">Hire me</a>
        </div>
      </div>
    </section>
  );
};

export default Home;
