import React from "react";

import lImg1 from "../assets/img/skills/front/1.png";
import lImg2 from "../assets/img/skills/front/2.png";
import lImg3 from "../assets/img/skills/front/3.png";
import lImg4 from "../assets/img/skills/front/4.png";
import lImg5 from "../assets/img/skills/front/5.png";
import lImg6 from "../assets/img/skills/front/6.png";
import lImg7 from "../assets/img/skills/front/7.png";
import lImg8 from "../assets/img/skills/front/8.png";
import lImg9 from "../assets/img/skills/front/9.png";

import bImg1 from "../assets/img/skills/backend/1.png";
import bImg2 from "../assets/img/skills/backend/2.png";
import bImg3 from "../assets/img/skills/backend/3.png";
import bImg4 from "../assets/img/skills/backend/4.png";
import bImg5 from "../assets/img/skills/backend/5.png";
import bImg6 from "../assets/img/skills/backend/6.png";
import bImg7 from "../assets/img/skills/backend/7.png";
import bImg8 from "../assets/img/skills/backend/8.png";

import dImg1 from "../assets/img/skills/deployment/1.png";
import dImg2 from "../assets/img/skills/deployment/2.png";
import dImg3 from "../assets/img/skills/deployment/3.png";
import dImg4 from "../assets/img/skills/deployment/4.png";
import dImg5 from "../assets/img/skills/deployment/5.png";
import dImg6 from "../assets/img/skills/deployment/6.png";

const Technical = () => {
  const language = [
    { img: 1, name: "React" },
    { img: 9, name: "Redux" },
    { img: 2, name: "Javascript" },
    { img: 3, name: "Typescript" },
    { img: 8, name: "JSON" },
    { img: 6, name: "JQuery" },
    { img: 4, name: "Bootstrap" },
    { img: 5, name: "Css3" },
    { img: 7, name: "HTML5" },
  ];

  const backend = [
    { img: 1, name: "Node" },
    { img: 2, name: "Express" },
    { img: 3, name: "Java" },
    { img: 4, name: "Php" },
    { img: 5, name: "MongoDB" },
    { img: 6, name: "MySql" },
    { img: 7, name: "Postman (API Testing)" },
    { img: 8, name: "Swagger (API Testing)" },
  ];

  const deployment = [
    { img: 1, name: "AWS (s3 Bucket)" },
    { img: 2, name: "Cpanel" },
    { img: 3, name: "Vercel" },
    { img: 4, name: "Render" },
    { img: 5, name: "Git" },
    { img: 6, name: "Gitlab" },
  ];
  return (
    <>
      <section className="bg-grey1" id="technical">
        <div className="container py-5">
          <div className="row">
            <div className="col-lg-12 text-center d-flex justify-content-center mb-4">
              <h2 className="title-01 mb-0 py-2 px-5">Technical Skills</h2>
            </div>
          </div>
          <div className="row skills pt-4 justify-content-center border rounded-3">
            <div className="col-lg-12">
              <h3 className="text-center">FRONT-END TECHNOLOGIES</h3>
            </div>
            {language.map((lang) => {
              return (
                <div
                  className="col-lg-2 col-4 text-center mb-4 pt-2"
                  key={lang.name}
                >
                  <img src={`${lImg6}${lang.img}`} className="" alt="" />
                  <p className="text-grey2 pt-1">{lang.name}</p>
                </div>
              );
            })}
          </div>
          <div className="row skills pt-4 justify-content-center border rounded-3 mt-5">
            <div className="col-lg-12">
              <h3 className="text-center">BACK-END TECHNOLOGIES & DATABASES</h3>
            </div>
            {backend.map((b) => {
              return (
                <div
                  className="col-lg-2 col-4 text-center mb-4 pt-2"
                  key={b.name}
                >
                  <img
                    src={`/assets/img/skills/backend/${b.img}.png`}
                    className=""
                    alt=""
                  />
                  <p className="text-grey2 pt-1">{b.name}</p>
                </div>
              );
            })}
          </div>
          <div className="row skills pt-4 justify-content-around border rounded-3 mt-5">
            <div className="col-lg-12">
              <h3 className="text-center">CLOUD & DEPLOYMENT</h3>
            </div>
            {deployment.map((d) => {
              return (
                <div
                  className="col-lg-2 col-4 text-center mb-4 pt-2"
                  key={d.name}
                >
                  <img
                    src={`/assets/img/skills/deployment/${d.img}.png`}
                    className=""
                    alt=""
                  />
                  <p className="text-grey2 pt-1">{d.name}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Technical;
