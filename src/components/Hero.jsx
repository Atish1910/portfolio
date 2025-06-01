import hero1 from "../assets/img/hero/1.png";
const Hero = () => {
  return (
    <>
      <div className="container pt-5">
        <div className="row justify-content-center align-items-center">
          <div className="col-lg-2"></div>
          <div className="col-lg-4">
            <div className="">
              <h6 className="mb-0 h3">Hi,</h6>
              <h1 className="mb-0 hero1"> I am Ashish</h1>
              <span className="text-greyT designation">
                Full Stack Developer / Front-end Developer
              </span>
            </div>
            <div className="d-flex social-icons pt-4">
              <a href="" className="me-4">
                <i className="bi bi-linkedin"></i>
              </a>
              <a href="" className="me-4">
                <i className="bi bi-github"></i>
              </a>
              <a href="" className="me-4">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="" className="me-4">
                <i className="bi bi-envelope"></i>
              </a>
            </div>
            <div className="pt-4">
              <button className="btn c_btn rounded-pill px-4">
                Download cv
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
    </>
  );
};

export default Hero;
