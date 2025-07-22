const Services = () => {
  return (
    <section className="services" id="services">
      <div className="max-width">
        <h2 className="title">My services</h2>
        <div className="serv-content">
          <div className="card">
            <div className="box">
              <i className="fas fa-paint-brush"></i>
              <div className="text">Web Development</div>
              <p>
                I design and develop dynamic, responsive, and user-friendly
                websites to client needs. Whether it's a personal portfolio, I
                ensure a seamless experience across devices.
              </p>
            </div>
          </div>
          <div className="card">
            <div className="box">
              <i className="fas fa-chart-line"></i>
              <div className="text">Full-Stack Development</div>
              <p>
                I create full-fledged applications with both frontend and backend
                integration, ensuring smooth functionality and database
                management.
              </p>
            </div>
          </div>
          <div className="card">
            <div className="box">
              <i className="fas fa-code"></i>
              <div className="text">E-Commerce</div>
              <p>
                I design online stores and platforms similar to Amazon or
                Flipkart, integrating secure payment gateways and user-friendly
                product displays.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
