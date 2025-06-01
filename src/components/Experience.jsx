import React from 'react';

const Experience = () => {
    return (
        <>
            
          <section id="e-programs" className="e-programsSection py-5 ">
    <div className="container">
        <div className="row">
            <div className="col-lg-12 text-center d-flex justify-content-center mb-4">
              <h2 className="title-01 mb-0 py-2 px-5">JOURNEY</h2>
            </div>
            <div className="col-md-12">
                <ul className="nav nav-pills nav-fill mt-3" id="e-programTabs" role="tablist">
                    <li className="nav-item pe-3" role="presentation">
                        <button className="nav-link btn c_btn1 active" id="e-tab-one-tab" data-bs-toggle="tab" data-bs-target="#e-tab-one"
                            type="button" role="tab" aria-controls="e-tab-one" aria-selected="true">Experience</button>
                    </li>
                    <li className="nav-item pe-3" role="presentation">
                        <button className="nav-link btn c_btn1" id="e-tab-two-tab" data-bs-toggle="tab" data-bs-target="#e-tab-two"
                            type="button" role="tab" aria-controls="e-tab-two" aria-selected="false">Education</button>
                    </li>
                </ul>
            </div>
        </div>
        <div className="row mt-4 mb-lg-4">
            <div className="col-12">
                <div className="tab-content" id="e-programTabContent">
                    <div className="tab-pane fade show active" id="e-tab-one" role="tabpanel" aria-labelledby="e-tab-one-tab">
                        <div className="row project journey">
                            <ul class="timeline">
                            <li>
                                <div class="direction-r">
                                <div class="flag-wrapper">
                                    <span class="flag">Full Stack Developer</span>
                                    <span class="time-wrapper"><span class="time">GladOwl Pvt Ltd</span></span>
                                </div>
                                <div class="desc">
                                    Som freelance Fullstack Developer arbejder jeg med et hav af kunder, hjemmesider og apps. Jeg har tidligere designet og udviklet hjemmesider og andre løsninger for arkitekter, bilforhandlere, skoler, designere, fotografer og manger flere. Læs mere: <a href="https://tristanwhite.info" target="_top">https://tristanwhite.info</a>
                                </div>
                                    <p class="text-fw-bold">June 2024 - Present</p>
                                </div>
                            </li>

                            <li>
                                <div class="direction-l">
                                <div class="flag-wrapper">
                                    <span class="flag">Web Developer</span>
                                    <span class="time-wrapper"><span class="time">Being Addictive</span></span>
                                </div>
                                <div class="desc">
                                    Som <strong>IT-vejleder</strong> på Rundhøjskolen er jeg ansvarlig for indkøb opsætning og vedligeholdelse af skolens IT-udstyr. Envidere står jeg får udvikling og vedligeholdelse af skolens hjemmeside, samt diverse mindre projekter, infoskærme og mere. I det daglige står jeg for support af skolens IT-udstyr samt support for elever så vel som kollegaer. Jeg underviser ugentligt et IT-valghold.
                                </div>
                                    <p class="text-fw-bold">Oct 2023  - May 2024</p>
                                </div>
                            </li>
                            </ul>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="e-tab-two" role="tabpanel" aria-labelledby="e-tab-two-tab">
                        <div className="row project">
                            <h1>Education</h1>
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