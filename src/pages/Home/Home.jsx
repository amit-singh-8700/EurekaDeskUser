import React from "react";
import Banner from "./Banner";
import PickForYou from "./PickForYou";
import FoodCategory from "./FoodCategory";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/header/Header";
import BottomMenu from "./BottomMenu";
// import "@lottiefiles/lottie-player";
import animation from "../../animation/timer.json";
import Lottie from "lottie-react";

function Home() {
  const handClick = () => {
    setTimeout(() => {
      window.location.reload(false);
    }, 5000);
  };
  return (
    <>
      <Header />
      <Banner />
      <PickForYou />
      <FoodCategory />
      <Footer />
      <BottomMenu />
      <img
        src={require("../../img/hand.png")}
        alt=""
        className="img-fluid hand"
        style={{ cursor: "pointer" }}
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        onClick={handClick}
      />
      {/*  */}
      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body">
              <div className="content-center">
                <Lottie animationData={animation} loop={true} />
              </div>
              <div className="py-2">
                {" "}
                <div className="text-center">
                  One of our waiter will be on your table soon
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
