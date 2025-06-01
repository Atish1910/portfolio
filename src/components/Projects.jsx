import React from 'react';

const Projects = () => {
    const fullstack = [
        {img : 1, title : "Ballr Table Booking App", techstack : " React, redux, Node, Express, mongoDB", link : "https://ballr-table-booking.vercel.app/", git : "Ballr-Table-Booking-db" },
        {img : 2, title : "Luxelan", techstack : " Php, Bootstrap, Mysql", link : "https://luxelan,in/", git : "" },
        {img : 3, title : "Rolls Mania", techstack : "Php, Bootstrap, Mysql", link : "https://www.rollsmania.com/", git : "" },
    ]

    const frontend = [
        {img : 1, title : "E Commerce", techstack : " React, redux, Reest API", link : "https://e-commerce-ten-ochre-57.vercel.app/", git : "E-Commerce" },
        {img : 2, title : "Paste App", techstack : " React, redux, Reest API", link : "https://vercel.com/ashish-kambles-projects/react-paste-app", git : "React-pasteApp" },
        {img : 3, title : "Dice Game", techstack : "React, redux, Reest API", link : "https://dice-game-dusky-nu.vercel.app/", git : "Dice-game" },
    ]

    return (
        <>
          <section id="programs" className="programsSection py-5 bg-grey">
    <div className="container">
        <div className="row">
            <div className="col-lg-12 text-center d-flex justify-content-center mb-4">
              <h2 className="title-01 mb-0 py-2 px-5">Projects</h2>
            </div>
            <div className="col-md-12">
                <ul className="nav nav-pills nav-fill mt-3" id="programTabs" role="tablist">
                    <li className="nav-item pe-3" role="presentation">
                        <button className="nav-link btn c_btn1 active" id="tab-one-tab" data-bs-toggle="tab" data-bs-target="#tab-one"
                            type="button" role="tab" aria-controls="tab-one" aria-selected="true">Mern Stack</button>
                    </li>
                    <li className="nav-item pe-3" role="presentation">
                        <button className="nav-link btn c_btn1" id="tab-two-tab" data-bs-toggle="tab" data-bs-target="#tab-two"
                            type="button" role="tab" aria-controls="tab-two" aria-selected="false">Front End</button>
                    </li>
                </ul>
            </div>
        </div>
        <div className="row mt-4 mb-lg-4">
            <div className="col-12">
                <div className="tab-content" id="programTabContent">
                    <div className="tab-pane fade show active" id="tab-one" role="tabpanel" aria-labelledby="tab-one-tab">
                        <div className="row project">
                            {
                                fullstack.map((f) => {
                                    return(
                                        <div className="col-lg-4">
                                            <div className="card ">
                                                <div className="img-box position-relative">
                                                    <img src={`src/assets/img/project/backend/${f.img}.PNG`} className="card-img-top" alt="..."/>
                                                    <div className="text-center links d-none">
                                                        <a href={f.link} target='_blank'>
                                                            <i className='bi bi-box-arrow-up-right me-3'></i>
                                                        </a>
                                                        <a href={`https://github.com/Atish1910/${f.git}`} target='_blank'>
                                                            <i className='bi bi-github '></i>
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="card-body">
                                                    <h5 className="card-title">{f.title}</h5>
                                                    <p className="card-text"><b>Tech Used : </b>{f.techstack}</p>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className="tab-pane fade" id="tab-two" role="tabpanel" aria-labelledby="tab-two-tab">
                        <div className="row project">
                            {
                                frontend.map((f) => {
                                    return(
                                        <div className="col-lg-4">
                                            <div className="card ">
                                                <div className="img-box position-relative">
                                                    <img src={`src/assets/img/project/frontend/${f.img}.PNG`} className="card-img-top" alt="..."/>
                                                    <div className="text-center links d-none">
                                                        <a href={f.link} target='_blank'>
                                                            <i className='bi bi-box-arrow-up-right me-3'></i>
                                                        </a>
                                                        <a href={`https://github.com/Atish1910/${f.git}`} target='_blank'>
                                                            <i className='bi bi-github '></i>
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="card-body">
                                                    <h5 className="card-title">{f.title}</h5>
                                                    <p className="card-text"><b>Tech Used : </b>{f.techstack}</p>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
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

export default Projects;