import React from "react";
// import statImg from "../assets/img/stats/";

const Overview = () => {
  const stats = [
    { img: "1", num: "70", text: "Projects Completed" },
    { img: "2", num: "5", text: "Custom Admin Panels" },
    { img: "3", num: "100,000", text: "Lines of Code" },
    { img: "4", num: "2.5", text: "Years of Development Experience" },
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
                      <img
                        src={`/assets/img/stats/${stat.img}.png`}
                        alt=""
                        className="stats"
                      />
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
