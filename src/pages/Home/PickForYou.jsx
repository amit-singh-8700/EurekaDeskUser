import React from "react";
import "./Home.css";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import img1 from '../../img/img1.jpeg'
import img2 from '../../img/img2.jpeg'
import img3 from '../../img/img3.jpeg'

function PickForYou() {
  let content = [
    {
      id: "1",
      img: img1,
      category :"food"
    },
    {
      id: "2",
      img: img2,
    },
    {
      id: "3",
      img: img3,
    },
  ];
  return (
    <div className="container my-3">
      <div className="row">
        <div className="heading my-3">Top Picks For You</div>
        <OwlCarousel
          className="owl-theme"
          margin={15}
          ltr={true}
          nav={false}
          dots={true}
          slideTransition={"linear"}
          autoplay={false}
          loop={true}
          center={false}
          autoplayTimeout={3000}
          autoplaySpeed={8000}
          autoplayHoverPause={true}
          autoHeight={false}
          mouseDrag={true}
          responsive={{
            0: { items: 3 },
            520: { items: 4 },
            768: { items: 5 },
            1200: { items: 6 },
            1400: { items: 7 },
            1600: { items: 8 },
          }}
        >
          {content.map((index) => (
            <div
              className="item text-center text-dark rounded bg-white"
              key={index.id}
            >
              <div className="position-relative">
                <img
                  src={index.img}
                  className="rounded"
                  alt=""
                  height={110}
                />
                <div className="bg-white p-1 rounded shadow-sm offer-percent color position-absolute bottom-0 start-50 translate-middle-x mt-3">50% OFF</div>
              </div>
              <div className="py-1">
              <div className="offerCard text-start">Chicken Dim-sum</div>
              <div className="mrp text-start">
                <span>
                  <i className="bi bi-currency-rupee"></i> 650
                </span>
              </div>
              </div>
             
            </div>
          ))}
        </OwlCarousel>
      </div>
    </div>
  );
}

export default PickForYou;
