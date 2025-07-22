const Skills = () => {
  return (
    <section className="skills" id="skills">
      <div className="max-width">
        <h2 className="title">My skills</h2>
        <div className="skills-content">
          <div className="column left">
            <div className="text">My creative skills & experiences.</div>
            <p>
              I have experience working with HTML, CSS, JavaScript, and Python,
              focusing on user-friendly and responsive designs. My interest in
              backend development and database management helps me create
              full-fledged applications with seamless user experiences.
            </p>
            <a href="#">Read more</a>
          </div>
          <div className="column right">
            <div className="bars">
              <div className="info">
                <span>HTML</span>
                <span>90%</span>
              </div>
              <div className="line html"></div>
            </div>
            <div className="bars">
              <div className="info">
                <span>CSS</span>
                <span>60%</span>
              </div>
              <div className="line css"></div>
            </div>
            <div className="bars">
              <div className="info">
                <span>JavaScript</span>
                <span>50%</span>
              </div>
              <div className="line js"></div>
            </div>
            <div className="bars">
              <div className="info">
                <span>Python</span>
                <span>80%</span>
              </div>
              <div className="line php"></div>
            </div>
            <div className="bars">
              <div className="info">
                <span>MySQL</span>
                <span>70%</span>
              </div>
              <div className="line mysql"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

