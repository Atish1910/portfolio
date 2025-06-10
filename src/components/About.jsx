import React from "react";
import about1 from "/assets/img/hero/2.jpg";

const About = ({ cv }) => {
  return (
    <>
      <section className="bg-grey3 py-5 about" id="about-me">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center d-flex justify-content-center mb-4">
              <h2 className="title-01 mb-0 py-2 px-5">About Me</h2>
            </div>
            <div className="col-lg-5">
              <div className="">
                <img src={about1} className="" alt="" />
              </div>
            </div>
            <div className="col-lg-7 pt-3">
              <h3 className="mb-0">Ashish Kamble</h3>
              <p className="text-purple">
                Full Stack Developer &nbsp; | &nbsp; Front-End Developer
              </p>
              <p>
                Versatile web developer with over 2 years of experience in
                building modern front-end applications using React.js, HTML,
                CSS, and JavaScript. Skilled in integrating REST APIs for
                seamless data flow and dynamic content updates. Proficient in
                backend technologies including Node.js, Express.js, and
                databases like MongoDB and MySQL, enabling efficient full-stack
                application development. Committed to writing clean,
                maintainable code and implementing scalable architecture.
                Passionate about delivering intuitive user experiences and
                contributing to innovative projects.
              </p>
              <button className="btn c_btn rounded-pill px-4">
                <a href={cv}>Download cv</a>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
