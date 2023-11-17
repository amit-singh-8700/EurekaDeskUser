import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import BottomMenu from "../Home/BottomMenu";
import axios from "axios";
import { getViewCart } from "../../components/api/api_base_url";
import animation from "../../animation/successful.json";
import Lottie from "lottie-react";

function OrderSuccessful() {
  const token = sessionStorage.getItem("signature");
  const [viewcart, setviewcart] = useState([]);
  const [totalPrices, setTotalPrice] = useState(0);

  const calculateTotalPrice = () => {
    let totalPrice = 0;
    viewcart.forEach((item) => {
      totalPrice += item.food.price * item.quantity;
    });
    return totalPrice;
  };

  useEffect(() => {
    setTotalPrice(calculateTotalPrice());
  }, [viewcart]);

  const getCart = async () => {
    try {
      const viewcartAPI = await axios.get(`${getViewCart}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      const data = await viewcartAPI.data;
      setviewcart(data);
      // console.log(getFoodsAPi.data);
      // alert("successful");
      // setStep(3)
      // window.location.reload(false);
    } catch (error) {
      console.log(error);
      // alert("invalid credentials");
    }
  };

  useEffect(() => {
    getCart();
  }, []);

  return (
    <>
      <div className="container position-relative ">
        <div className="row justify-content-center shadow-lg border rounded my-5">
          <div className="col-lg-10">
            <h4 className="py-3 color">Order Placed</h4>
          </div>
          <div className="col-lg-6 col-12 content-center">
            <Lottie animationData={animation} loop={true} />
          </div>
          <div className="col-lg-10 my-2">
          <h4 className="py-3 color">Items</h4>
            {viewcart.map((data, index) => {
              return (
                <div key={data.id} className="row flex-row-reverse">
                  <div className="col-lg-4 col-4 content-center">
                    <div>
                      <div className="food-price">
                        {" "}
                        <i className="bi bi-currency-rupee text-success"></i>{" "}
                        {data.food.price}
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-8 col-8 my-2">
                    <heading className="heading-2">{data.food.name}</heading>
                  </div>
                  <hr />
                </div>
              );
            })}
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-3">
          <Link className="text-white text-decoration-none" to={"/"}>
            <div
              className={`primary-button text-center px-3 py-3 fw-bold`}
              style={{ cursor: "pointer" }}
              // data-bs-dismiss="modal"
            >
                Go To HomePage
            
            </div>
            </Link>
          </div>
        </div>
      </div>
      {/* number verification */}
      {/* modal */}
    </>
  );
}

export default OrderSuccessful;
