import React from "react";

const Experience = () => {
  return (
    <>
      <section id="journey">
        <div className="container  py-5 e-programsSection">
          <div className="row">
            <div className="col-lg-12 text-center d-flex justify-content-center mb-4">
              <h2 className="title-01 mb-0 py-2 px-5">JOURNEY</h2>
            </div>
            <div className="col-md-12">
              <ul
                className="nav nav-pills nav-fill mt-3"
                id="e-programTabs"
                role="tablist"
              >
                <li className="nav-item pe-3" role="presentation">
                  <button
                    className="nav-link btn c_btn1 active"
                    id="e-tab-one-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#e-tab-one"
                    type="button"
                    role="tab"
                    aria-controls="e-tab-one"
                    aria-selected="true"
                  >
                    Experience
                  </button>
                </li>
                <li className="nav-item pe-3" role="presentation">
                  <button
                    className="nav-link btn c_btn1"
                    id="e-tab-two-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#e-tab-two"
                    type="button"
                    role="tab"
                    aria-controls="e-tab-two"
                    aria-selected="false"
                  >
                    Education
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div className="row mt-4 mb-lg-4">
            <div className="col-12">
              <div className="tab-content" id="e-programTabContent">
                <div
                  className="tab-pane fade show active"
                  id="e-tab-one"
                  role="tabpanel"
                  aria-labelledby="e-tab-one-tab"
                >
                  <div className="row project journey">
                    <ul class="timeline">
                      <li>
                        <div class="direction-r">
                          <div class="flag-wrapper">
                            <span class="flag">Full Stack Developer</span>
                            <span class="time-wrapper">
                              <span class="time">GladOwl Pvt Ltd</span>
                            </span>
                          </div>
                          <div class="desc">
                            <ul>
                              <li>
                                Collaborated with cross-functional teams to
                                develop and maintain landing pages and websites,
                                demonstrating strong teamwork that improved
                                deployment efficiency and system scalability by
                                30%.
                              </li>
                              <li>
                                Created user-friendly web pages using modern
                                React, achieving a 40% improvement in conversion
                                rates through responsive design and a 50%
                                reduction in page load times via code
                                refactoring and lazy loading techniques.
                              </li>
                              <li>
                                Spearheaded the design and development of
                                RESTful APIs for client admin functionality by
                                Node.js to handle complex authorization scopes,
                                enabling controlled admin privileges and
                                significantly increasing client satisfaction.
                              </li>
                              <li>
                                Integrated AWS serverless solutions into a React
                                web application, managed over 15,000+ images and
                                files using AWS S3, enhancing both performance
                                and user experience.
                              </li>
                              <li>
                                Mentored interns and new team members by
                                delivering comprehensive training on the
                                Software Development Life Cycle (SDLC),
                                debugging techniques, and product
                                understanding—boosting team contribution and
                                product advancement by 20%, while demonstrating
                                strong leadership and management skills.
                              </li>
                              <li>
                                Built and integrated scalable RESTful APIs using
                                Express.js and MongoDB to support efficient
                                backend operations.
                              </li>
                              <p class="text-fw-bold text-bold d-lg-none">
                                June 2024 - Present
                              </p>
                            </ul>
                          </div>
                          <p class="text-fw-bold d-none d-lg-block">
                            June 2024 - Present
                          </p>
                        </div>
                      </li>

                      <li>
                        <div class="direction-l">
                          <div class="flag-wrapper">
                            <span class="flag">Web Developer</span>
                            <span class="time-wrapper">
                              <span class="time">Being Addictive</span>
                            </span>
                          </div>
                          <div class="desc">
                            <ul>
                              <li>
                                Acquired hands-on experience in PHP for dynamic
                                web development, and developed responsive,
                                interactive user interfaces using Angular, HTML,
                                CSS, and JavaScript—enhancing product
                                performance and user engagement.
                              </li>
                              <li>
                                Strengthened database design and management
                                skills using MySQL and MongoDB, with a focus on
                                writing clean, maintainable, and scalable code
                                that improved overall application efficiency.
                              </li>
                              <li>
                                Gained practical knowledge of Git for version
                                control and collaborative workflows within Agile
                                development environments, improving
                                problem-solving skills and cross-functional team
                                coordination.
                              </li>
                              <li>
                                Quickly adapted to changing project requirements
                                and tight deadlines while developing strong time
                                management abilities, continuously focused on
                                client satisfaction through learning and
                                delivering quality-driven solutions.
                              </li>
                              <p class="text-fw-bold d-lg-none">
                                Oct 2023 - May 2024
                              </p>
                            </ul>
                          </div>
                          <p class="text-fw-bold d-none d-lg-block">
                            Oct 2023 - May 2024
                          </p>
                        </div>
                      </li>
                      <li>
                        <div class="direction-r">
                          <div class="flag-wrapper">
                            <span class="flag">System Engineer</span>
                            <span class="time-wrapper">
                              <span class="time">Infosys</span>
                            </span>
                          </div>
                          <div class="desc">
                            <ul>
                              <li>
                                Completed 90 days of intensive technical
                                training at Infosys Mysore, gaining hands-on
                                experience in programming languages, software
                                development tools, and industry best practices.
                              </li>
                              <li>
                                Demonstrated strong adaptability by quickly
                                learning new technologies and effectively
                                transitioning into a professional development
                                environment.
                              </li>
                              <p class="text-fw-bold d-lg-none">
                                June 2022 - Oct 2022
                              </p>
                            </ul>
                          </div>
                          <p class="text-fw-bold d-lg-block d-none">
                            June 2022 - Oct 2022
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="e-tab-two"
                  role="tabpanel"
                  aria-labelledby="e-tab-two-tab"
                >
                  <div className="row project journey">
                    <ul class="timeline">
                      <li>
                        <div class="direction-r">
                          <div class="flag-wrapper">
                            <span class="flag">Full Stack Web Development</span>
                            <span class="time-wrapper">
                              <span class="time">Marvellous Infosystem</span>
                            </span>
                          </div>
                          <div class="desc">
                            <p>
                              Marvelous Infosystem's teachings encompass React,
                              Javascript, MongoDB, Node.js, and Express.js a
                              potent arsenal for full-stack web development.
                            </p>
                            <ul>
                              <li>
                                <b>React:</b> A popular JavaScript library for
                                building user interfaces, especially single-page
                                applications. React uses a component-based
                                architecture and a virtual DOM for efficient
                                rendering, making it ideal for dynamic,
                                interactive web apps.
                              </li>
                              <li>
                                <b>JavaScript:</b> The core language of the web,
                                JavaScript enables interactivity and dynamic
                                behavior in websites. In React development, it
                                provides the flexibility to manage UI logic,
                                handle events, and update the DOM seamlessly.
                              </li>
                              <li>
                                <b>MongoDB:</b> As a NoSQL database, MongoDB
                                excels in flexibility and scalability, handling
                                diverse data structures efficiently in a
                                JSON-like format.
                              </li>
                              <li>
                                <b>Node.js:</b> This runtime environment
                                executes JavaScript on servers, enabling
                                scalable back-end development with an
                                event-driven, non-blocking I/O model.
                              </li>
                              <li>
                                <b>Express.js:</b> Built atop Node.js,
                                Express.js simplifies server-side scripting,
                                aiding in API development with its robust
                                features and middleware.
                              </li>
                            </ul>
                            <p class="text-fw-bold d-lg-none">
                              {" "}
                              Feb 2023 To Jan 2024
                            </p>
                          </div>
                          <p class="text-fw-bold d-lg-block d-none">
                            {" "}
                            Feb 2023 To Jan 2024
                          </p>
                        </div>
                      </li>

                      <li>
                        <div class="direction-l">
                          <div class="flag-wrapper">
                            <span class="flag">
                              Bachelor of Engineering | CGPA - 7.49/10
                            </span>
                            <span class="time-wrapper">
                              <span class="time">
                                RMD Sinhagad Institute of Technology Pune
                              </span>
                            </span>
                          </div>
                          <div class="desc ">
                            <p class="text-fw-bold d-lg-none mb-0">
                              {" "}
                              Aug 2018 - Nov 2021
                            </p>
                          </div>
                          <p class="text-fw-bold d-lg-block d-none">
                            {" "}
                            Aug 2018 - Nov 2021
                          </p>
                        </div>
                      </li>
                      <li>
                        <div class="direction-r">
                          <div class="flag-wrapper">
                            <span class="flag">
                              Diploma in Mechanical Engineering | CGPA - 5.7/10
                            </span>
                            <span class="time-wrapper">
                              <span class="time">
                                Cusrow Wadia Institute Of Technology
                              </span>
                            </span>
                          </div>
                          <div class="desc">
                            <p class="text-fw-bold d-lg-none mb-0">
                              {" "}
                              Feb 2014 To Jan 2018
                            </p>
                          </div>
                          <p class="text-fw-bold d-none d-lg-block mb-0">
                            {" "}
                            Feb 2014 To Jan 2018
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Experience;
