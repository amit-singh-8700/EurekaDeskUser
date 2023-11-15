import { React, useState, useEffect } from "react";
import axios from "axios";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "./Home.css";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import img1 from "../../img/img1.jpeg";
import img2 from "../../img/img2.jpeg";
import img3 from "../../img/img3.jpeg";
import { getTopPicksAPI } from "../../components/api/api_base_url";

function PickForYou() {
  const token = sessionStorage.getItem("signature");
  const [toppick, settoppick] = useState([]);
  const [loading, setLoading] = useState(true);

  let content = [
    {
      id: "1",
      img: img1,
      category: "food",
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

  const getTopPicksFunc = async () => {
    try {
      const topPicksApi = await axios.get(`${getTopPicksAPI}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      const data = await topPicksApi.data;
      settoppick(data);
    } catch (error) {
      console.log(error);
      // alert("invalid credentials");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getTopPicksFunc();
  }, []);

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
          {loading ? (
            <>
              {" "}
              {Array.from({ length: 4 }).map((_, index) => (
                <div className="item text-center text-dark rounded bg-white">
                  <Skeleton width={"100%"} height={"150px"} count={1} />
                </div>
              ))}
            </>
          ) : (
            toppick.map((data, index) => (
              <div
                className="item text-center text-dark rounded bg-white"
                key={data.id}
              >
                <div className="position-relative">
                  <img
                    src={img1}
                    className="rounded"
                    alt=""
                    height={110}
                  />
                  <div className="bg-white p-1 rounded shadow-sm offer-percent color position-absolute bottom-0 start-50 translate-middle-x mt-3">
                    50% OFF
                  </div>
                </div>
                <div className="py-1">
                  <div className="offerCard text-start">{data.name}</div>
                  <div className="mrp text-start">
                    <span>
                      <i className="bi bi-currency-rupee"></i> {data.price}
                    </span>
                  </div>
                </div>
              </div>
            ))
          )}
        </OwlCarousel>
      </div>
    </div>
  );
}

export default PickForYou;
