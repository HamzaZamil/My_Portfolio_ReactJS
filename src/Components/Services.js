import React from 'react';





function Services() {
  return (
    <section id="services">
      <div className="container-three">
        <div className="title">
          <h1>Services</h1>
        </div>
        <div className="row">
          <div className="service">
            <i className="fa-solid fa-laptop-code"></i>
            <h2>Web Designer</h2>
            <p>
              "Creative web design service crafting visually appealing,
              user-friendly, and responsive websites."
            </p>
          </div>
          <div className="service">
            <i className="fa-solid fa-code"></i>
            <h2>Web Developer</h2>
            <p>
              "Expert web development service building functional, secure, and
              responsive websites for businesses."
            </p>
          </div>
          <div className="service">
            <i className="fa-solid fa-pen"></i>
            <h2>Script Writing</h2>
            <p>
              "Professional script writing service delivering engaging,
              creative scripts for film, TV, and media."
            </p>
          </div>
          <div className="service">
            <i className="fa-solid fa-video"></i>
            <h2>Video Editor</h2>
            <p>
              "Professional video editing service delivering high-quality,
              creative cuts tailored to your vision."
            </p>
          </div>
          <div className="service">
            <i className="fa-brands fa-figma"></i>
            <h2>UI/UX</h2>
            <p>
              "I have a team that provides exceptional UI/UX design, enhancing
              user experiences seamlessly."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
