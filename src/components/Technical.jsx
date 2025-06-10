import React from "react";

const Technical = () => {
const language = [
  { languageImg: "/assets/img/skills/front/1.png", name: "React" },
  { languageImg: "/assets/img/skills/front/9.png", name: "Redux" },
  { languageImg: "/assets/img/skills/front/2.png", name: "Javascript" },
  { languageImg: "/assets/img/skills/front/3.png", name: "Typescript" },
  { languageImg: "/assets/img/skills/front/8.png", name: "JSON" },
  { languageImg: "/assets/img/skills/front/6.png", name: "JQuery" },
  { languageImg: "/assets/img/skills/front/4.png", name: "Bootstrap" },
  { languageImg: "/assets/img/skills/front/5.png", name: "Css3" },
  { languageImg: "/assets/img/skills/front/7.png", name: "HTML5" },
];

const backend = [
  { backendImg: "/assets/img/skills/backend/1.png", name: "Node" },
  { backendImg: "/assets/img/skills/backend/2.png", name: "Express" },
  { backendImg: "/assets/img/skills/backend/3.png", name: "Java" },
  { backendImg: "/assets/img/skills/backend/4.png", name: "Php" },
  { backendImg: "/assets/img/skills/backend/5.png", name: "MongoDB" },
  { backendImg: "/assets/img/skills/backend/6.png", name: "MySql" },
  { backendImg: "/assets/img/skills/backend/7.png", name: "Postman (API Testing)" },
  { backendImg: "/assets/img/skills/backend/8.png", name: "Swagger (API Testing)" },
];


 const deployment = [
  { deploymentImg: "/assets/img/skills/deployment/1.png", name: "AWS (s3 Bucket)" },
  { deploymentImg: "/assets/img/skills/deployment/2.png", name: "Cpanel" },
  { deploymentImg: "/assets/img/skills/deployment/3.png", name: "Vercel" },
  { deploymentImg: "/assets/img/skills/deployment/4.png", name: "Render" },
  { deploymentImg: "/assets/img/skills/deployment/5.png", name: "Git" },
  { deploymentImg: "/assets/img/skills/deployment/6.png", name: "Gitlab" },
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
                  <img src={lang.languageImg} className="" alt="" />
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
                  <img src={b.backendImg} className="" alt="" />
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
                  <img src={d.deploymentImg} className="" alt="" />
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
