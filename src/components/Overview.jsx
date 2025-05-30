import React from "react";
// import statImg from "../assets/img/stats/";

const Overview = () => {
  const stats = [
    { img: "1", num: "70", text: "Projects Completed" },
    { img: "2", num: "5", text: "Custom Admin Panels" },
    { img: "3", num: "50,000", text: "Lines of Code" },
    { img: "4", num: "2.5", text: "Years of Development Experience" },
  ];
  return (
    <>
      <section class="py-5">
        <div class="container">
          <div class="row justify-content-center">
            {stats.map((stat) => {
              return (
                <div class=" col-lg-3  d-lg-grid  ">
                  <div class=" usp_01 py-3 bg-black rounded-3">
                    <div class=" text-center">
                      <img
                        src={`src/assets/img/stats/${stat.img}.png`}
                        alt=""
                        className="stats"
                      />
                      <h6 class=" rank text-white mb-0 fw-bold  pt-3 h3">
                        {stat.num}
                        <span className="plus">+</span>
                      </h6>
                      <p class="text-white">{stat.text}</p>
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
