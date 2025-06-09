import React from "react";

const Footer = ({ logo }) => {
  return (
    <>
      <section className="bg-dark py-5 footer">
        <div className="container">
          <div className="row text-center justify-content-center">
            <div className="col-lg-8">
              <img src={logo} className="footerlogo" alt="" />
            </div>
            <div className="d-flex social-icons pt-4 justify-content-center">
              <a
                href="https://www.linkedin.com/in/ashish-kamble-562b97218/"
                target="_blank"
                className="me-4"
              >
                <i className="bi bi-linkedin"></i>
              </a>
              <a href="https://github.com/Atish1910/" className="me-4">
                <i className="bi bi-github"></i>
              </a>
              <a href="https://www.instagram.com/atishhhh_19/" className="me-4">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="mailto:atishkamble398@gmail.com" className="me-4">
                <i className="bi bi-envelope"></i>
              </a>
            </div>
            <div className="col-lg-8 pt-4">
              <h6 className="text-white">Design & Developed By Ashish K</h6>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
