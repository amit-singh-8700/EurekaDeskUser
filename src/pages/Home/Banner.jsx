import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Banner1 from '../../img/banner.jpeg';
import Banner2 from '../../img//banner-2.jpeg';
import Banner3 from '../../img/banner-3.jpeg';

function Banner() {
    let content = [
        {
          id: "1",
          img: Banner1,
        },
        {
          id: "2",
          img: Banner2,
        },
        {
          id: "3",
          img: Banner3,
        },
      ];
      return (
        <>
          <div className="container mt-2">
            <div className="row">
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
                  0: { items: 1 },
                  520: { items: 1 },
                  768: { items: 2  },
                  1200: { items: 2 },
                  1400: { items: 3 },
                  1600: { items: 3 },
                }}
              >
                {content.map((index) => (
                  <div
                    className="item text-center text-dark rounded bg-white"
                    key={index.id}
                  >
                    <img src={index.img} className="rounded"  alt="" />
                  </div>
                ))}
              </OwlCarousel>
            </div>
          </div>
        </>
      );
}

export default Banner;
