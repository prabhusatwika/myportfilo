import { useEffect } from 'react';
import Typed from 'typed.js';

const About = () => {
  useEffect(() => {
    new Typed('.typing-2', {
      strings: ['Developer', 'Blogger', 'Designer', 'UI UX Developer'],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true,
    });
  }, []);

  return (
    <section className="about" id="about">
      <div className="max-width">
        <h2 className="title">About me</h2>
        <div className="about-content">
          <div className="column left">
            <img src="/images/b7.jpg" alt="me" />
          </div>
          <div className="column right">
            <div className="text">
              I'm M Prabhu Satwika and I'm a <span className="typing-2"></span>
            </div>
            <p>
              I am a passionate web developer and Python enthusiast, currently
              pursuing my BTech second year with a strong academic record (CGPA:
              9.55). I specialize in building creative and functional web
              applications, from simple portfolio websites to complex platforms
              like GreenBridge, a project that connects farmers and customers
              directly, promoting organic farming and sustainability.
            </p>
            <a href="#">Download CV</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
