import gImg1 from "../assets/img/wall/1.jpg";
import gImg2 from "../assets/img/wall/2.jpg";
import gImg3 from "../assets/img/wall/3.jpg";
import gImg4 from "../assets/img/wall/4.jpg";
import gImg5 from "../assets/img/wall/5.jpg";
import gImg6 from "../assets/img/wall/6.jpg";
import gImg7 from "../assets/img/wall/7.jpg";

const Wall = () => {
  const gallery = [
    { img: gImg1 },
    { img: gImg2 },
    { img: gImg3 },
    { img: gImg4 },
    { img: gImg5 },
    { img: gImg6 },
    { img: gImg7 },
  ];
  return (
    <>
      <section id="wall">
        <div className="container mb-5">
          <div className="row">
            <div className="col-lg-12 text-center d-flex justify-content-center mb-4">
              <h2 className="title-01 mb-0 py-2 px-5">My Wall</h2>
            </div>
          </div>
          <div className="row wall pt-4 justify-content-center border rounded-3">
            <div className="col-lg-12"></div>
            {gallery.map((g) => {
              return (
                <div className="col-lg-3 col-6 text-center mb-4 pt-2">
                  <img src={`${g.img}`} className="" alt="" />
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};
export default Wall;
