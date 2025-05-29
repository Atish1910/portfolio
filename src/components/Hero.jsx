import hero1 from "../assets/img/hero/33.jpg";
const Hero = () => {
  return (
    <>
      <div className="container text-center py-5">
        <div className="row justify-content-center ">
          <div className="col-lg-8">
            <div className="">
              <img
                src={hero1}
                className="hero-img
              "
                alt=""
              />
            </div>
            <div className="">
              <h1 className="">Hi, I'm Ashish.</h1>
              <h3>I am a Full Stack Web Developer.</h3>
              <p>Your Vision, My Code, Our Success.</p>
              <button className="btn btn-primary">Download CV</button>
            </div>
            <div className="d-flex justify-content-center social-icons">
              <a href="">
                <i class="bi bi-github"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
