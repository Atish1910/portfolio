import hero1 from "/assets/img/hero/1.png";
// import cv from "../assets/img/hero/Ashish_kamble_resume_06_2025.pdf";
const Hero = ({ cv }) => {
  return (
    <>
      <section className="bg-orangeGradient hero">
        <div className="container pt-5">
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-2"></div>
            <div className="col-lg-4 pb-5">
              <div className="">
                <h6 className="mb-0 h3">Hi,</h6>
                <h1 className="mb-0 hero1"> I am Ashish</h1>
                <span className="text-greyT designation">
                  Full Stack Developer / Front-end Developer
                </span>
              </div>
              <div className="d-flex social-icons pt-4">
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
                <a
                  href="https://www.instagram.com/atishhhh_19/"
                  className="me-4"
                >
                  <i className="bi bi-instagram"></i>
                </a>
                <a href="mailto:atishkamble398@gmail.com" className="me-4">
                  <i className="bi bi-envelope"></i>
                </a>
              </div>
              <div className="pt-4">
                <button className="btn c_btn rounded-pill px-4">
                  <a href={cv} target="_blank">
                    Download cv
                  </a>
                </button>
              </div>
            </div>
            <div className="col-lg-6 text-center">
              <div className="">
                <img
                  src={hero1}
                  className="hero-img
              "
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
