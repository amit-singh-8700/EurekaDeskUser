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
  const [viewcart, setviewcart] = useState([]);
  const history = useNavigate();

  const handleDecrease = (quantity) => {
    if (quantity > 1) {
        return quantity - 1;
    }
  };
  const handleIncrease = (quantity) => {
   return  quantity + 1;
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
                        className="qty-btn" onClick={() => handleDecrease(data.quantity)}>
                          -
                        </button>
                        <span>{data.quantity}</span>
                        <button
                        //  onClick={handleIncrease} 
                        className="qty-btn" onClick={()=>handleIncrease(data.quantity)}>
                          +
                        </button>
                      </div>
                      <div className="food-price">
                        {" "}
                        <i className="bi bi-currency-rupee"></i> {data.food.price}
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
                {token ? (
                  <Link
                    to="/payBill"
                    style={{ cursor: "pointer" }}
                    className="fw-bold text-white text-decoration-none"
                  >
                    Place Order
                  </Link>
                ) : (
                  <Link
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    style={{ cursor: "pointer" }}
                    className="fw-bold text-white text-decoration-none"
                  >
                    Place Order
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}


export default PlaceOrder;
