const Wall = () => {
  const gallery = [
    { img: 1 },
    { img: 2 },
    { img: 3 },
    { img: 4 },
    { img: 5 },
    { img: 6 },
    { img: 7 },
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
                  <img
                    src={`./assets/img/wall/${g.img}.jpg`}
                    className=""
                    alt=""
                  />
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
