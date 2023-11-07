import { React, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Login from "./Login";

import {
  login,
  verifyOTPAPI,
  resendOTPAPI,
  getViewCart,
} from "../../components/api/api_base_url";

function PlaceOrder() {
  const [step, setStep] = useState(1);
  const [viewcart, setviewcart] = useState([]);

  const history = useNavigate();

  const handleDecrease = (index) => {
    const updatedViewCart = [...viewcart];
    if (updatedViewCart[index].quantity > 1) {
      updatedViewCart[index].quantity--;
      setviewcart(updatedViewCart);
    }
  };

  const handleIncrease = (index) => {
    const updatedViewCart = [...viewcart];
    updatedViewCart[index].quantity++;
    setviewcart(updatedViewCart);
  };

  const token = sessionStorage.getItem("signature");
  // const [step, setStep] = useState(1);
  // const [phone, setphone] = useState([]);
  // const [otp, setOtp] = useState([]);
  const [totalPrices, setTotalPrice] = useState(0);

  // const sinup = {
  //   phone: phone,
  // };

  // const verifyotp = {
  //   phone: phone,
  //   otp: otp,
  // };

  // const handleClick = async () => {
  //   try {
  //     await axios.post(`${login}`, sinup);

  //     alert("registration successful");
  //     setStep(2);

  //     // window.location.reload(false);
  //   } catch (error) {
  //     console.log(error);
  //     alert("invalid credentials");
  //   }
  // };

  // const verify = async () => {
  //   try {
  //     const api = await axios.patch(`${verifyOTPAPI}`, verifyotp, {
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //         "Content-Type": "application/json",
  //       },
  //     });
  //     const data = await api.data;
  //     sessionStorage.setItem("signature", data.signature);

  //     alert("registration successful");
  //     setStep(2);
  //     history("/PayBill");
  //     window.location.reload(false);
  //   } catch (error) {
  //     console.log(error);
  //     alert("invalid credentials");
  //   }
  // };

  // const reotp = async () => {
  //   try {
  //     await axios.get(`${resendOTPAPI}`, {
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //         "Content-Type": "application/json",
  //       },
  //     });
  //     alert("Otp   successful");
  //     // setStep(3)
  //     // window.location.reload(false);
  //   } catch (error) {
  //     console.log(error);
  //     alert("invalid credentials");
  //   }
  // };

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

  return (
    <>
      <div className="container position-relative">
        <div className="row justify-content-center">
          <div className="col-lg-7 my-2 shadow-sm rounded">
            {viewcart.map((data, index) => {
              return (
                <div key={data.id} className="row flex-row-reverse">
                  <div className="col-lg-4 col-4 content-center">
                    <div>
                      <div className="qty-btn-cover py-1">
                        <button
                          // onClick={handleDecrease}
                          className="qty-btn"
                          onClick={() => handleDecrease(index)}
                        >
                          -
                        </button>
                        <span>{data.quantity}</span>
                        <button
                          //  onClick={handleIncrease}
                          className="qty-btn"
                          onClick={() => handleIncrease(index)}
                        >
                          +
                        </button>
                      </div>
                      <div className="food-price">
                        {" "}
                        <i className="bi bi-currency-rupee"></i>{" "}
                        {data.food.price}
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-8 col-8">
                    <div className="bi bi-dice-1 text-success"></div>
                    <heading className="heading-2">{data.food.name}</heading>
                    <div>
                      <h6>
                        <Link to="/" className="color text-decoration-none">
                          Edit
                        </Link>
                      </h6>
                    </div>
                  </div>
                  <hr />
                </div>
              );
            })}
            {/* text area */}
            <textarea
              name=""
              className="form-control border-none"
              id=""
              cols="30"
              rows="2"
              placeholder="Write cooking instructions"
            ></textarea>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-12 position-absolute bottom-0 start-50 translate-middle-x my-2">
            <div
              className={`d-flex justify-content-between AddItems-btn px-3 py-3`}
            >
              <div className="fw-bold">
                {viewcart.length} item |<i className="bi bi-currency-rupee"></i>
                {totalPrices}
              </div>{" "}
              <div>
                <Link
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  style={{ cursor: "pointer" }}
                  className="fw-bold text-white text-decoration-none"
                >
                  Place Order
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
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
              {step === 1 && (
                <div>
                  <div className="d-flex justify-content-between">
                    <h5>Address</h5>
                    <div data-bs-dismiss="modal">
                      <i className="bi bi-x" style={{ cursor: "pointer" }}></i>
                    </div>
                  </div>
                  <p style={{ font: "small" }}>
                    Full Name
                  </p>
                  <input
                    type="text"
                    className="form-control my-3 py-2 border"
                    placeholder="Full Name"
                  />
                  <p style={{ font: "small" }}>
                    address
                  </p>
                  <input
                    type="text"
                    className="form-control my-3 py-2 border"
                    placeholder="address"
                  />
                  <p style={{ font: "small" }}>
                    City
                  </p>
                  <input
                    type="text"
                    className="form-control my-3 py-2 border"
                    placeholder="City"
                  />
                  <p style={{ font: "small" }}>
                    State
                  </p>
                  <input
                    type="text"
                    className="form-control my-3 py-2 border"
                    placeholder="State"
                  />
                  <p style={{ font: "small" }}>
                    Pin Code
                  </p>
                  <input
                    type="number"
                    className="form-control my-3 py-2 border"
                    placeholder="Pin Code"
                  />
                  {/* <Link to="/paymentMode" className="text-decoration-none"> */}
                  <div
                    className={`AddItems-btn text-center px-3 py-2 fw-bold`}
                    style={{ cursor: "pointer" }}
                    data-bs-dismiss="modal"
                  >
                   <Link className="text-white text-decoration-none" to={"/PayBill"}> Place Order </Link>
                  </div>
                  {/* </Link> */}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PlaceOrder;
