import React from "react";
import statImg1 from "/assets/img/stats/1.png";
import statImg2 from "/assets/img/stats/2.png";
import statImg3 from "/assets/img/stats/3.png";
import statImg4 from "/assets/img/stats/4.png";

const Overview = () => {
  const stats = [
    { img: statImg1, num: "70", text: "Projects Completed" },
    { img: statImg2, num: "5", text: "Custom Admin Panels" },
    { img: statImg3, num: "100,000", text: "Lines of Code" },
    { img: statImg4, num: "2.5", text: "Years of Development Experience" },
  ];
  return (
    <>
      <section className="py-5" id="overview">
        <div className="container">
          <div className="row justify-content-center">
            {stats.map((stat) => {
              return (
                <div className=" col-lg-3  d-lg-grid mb-3 " key={stat.text}>
                  <div className=" usp_01 py-3 bg-black rounded-3">
                    <div className=" text-center">
                      <img src={stat.img} alt="" className="stats" />
                      <h6 className=" rank text-white mb-0 fw-bold  pt-3 h3">
                        {stat.num}
                        <span className="plus">+</span>
                      </h6>
                      <p className="text-white">{stat.text}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Overview;
