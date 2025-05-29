import hero1 from "../assets/img/hero/1.png";
const Hero = () => {
  return (
    <>
      <div className="container text-center py-5">
        <div className="row justify-content-center ">
          <div className="col-lg-6">
            <div className="d-flex justify-content-center social-icons">
              <a href="">
                <i class="bi bi-github"></i>
              </a>
            </div>
          </div>
          <div className="col-lg-6">
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
