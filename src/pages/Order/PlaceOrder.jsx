import { React, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import Login from "./Login";

import { login, verifyOTPAPI, resendOTPAPI } from "../../components/api/api_base_url";

function PlaceOrder() {
  const [quantity, setQuantity] = useState(1);
  const productPrice = 500;

  const history = useNavigate();

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  const totalPrice = quantity * productPrice;
  const token = sessionStorage.getItem("signature");
  const [step, setStep] = useState(1);
  const [phone, setphone] = useState([]);
  const [otp, setOtp] = useState([])
  // const [resend, setResend] = useState([])


  const sinup =
  {
    phone: phone,
  }

  const verifyotp = {
    otp: otp
  }
  // const resendotp = {
  //   resend: resend
  // }

  console.log(`${login}`)

  const handleClick = async () => {
    try {
      const api = await axios.post(
        `${login}`,
        sinup,
      );
      const data = await api.data;
      sessionStorage.setItem("signature", data.signature);
      console.log(api.res);
      alert("registration successful");
      setStep(2)
      
      // window.location.reload(false);
    } catch (error) {
      console.log(error);
      alert("invalid credentials");
    }
  }

  const verify = async () => {
    try {
      await axios.patch(
        `${verifyOTPAPI}`,
        verifyotp,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      alert("registration successful");
      setStep(2)
      history("/PayBill")
      window.location.reload(false);
    } catch (error) {
      console.log(error);
      alert("invalid credentials");
    }
  }

  const reotp = async () => {
    try {
      await axios.get(
        `${resendOTPAPI}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      alert("Otp   successful");
      // setStep(3)
      // window.location.reload(false);
    } catch (error) {
      console.log(error);
      alert("invalid credentials");
    }
  }
  return (
    <>
      <div className="container position-relative">
        <div className="row justify-content-center">
          <div className="col-lg-7 my-2 shadow-sm rounded">
            <div className="row flex-row-reverse">
              <div className="col-lg-4 col-4 content-center">
                <div>
                  <div className="qty-btn-cover py-1">
                    <button onClick={handleDecrease} className="qty-btn">
                      -
                    </button>
                    <span>{quantity}</span>
                    <button onClick={handleIncrease} className="qty-btn">
                      +
                    </button>
                  </div>
                  <div className="food-price">
                    {" "}
                    <i className="bi bi-currency-rupee"></i> {totalPrice}
                  </div>
                </div>
              </div>
              <div className="col-lg-8 col-8">
                <div className="bi bi-dice-1 text-success"></div>
                <heading className="heading-2">
                  Chicken Keema Kulcha Burger
                </heading>
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
            <div className="row flex-row-reverse">
              <div className="col-lg-4 col-4 content-center">
                <div>
                  <div className="qty-btn-cover py-1">
                    <button onClick={handleDecrease} className="qty-btn">
                      -
                    </button>
                    <span>{quantity}</span>
                    <button onClick={handleIncrease} className="qty-btn">
                      +
                    </button>
                  </div>
                  <div className="food-price">
                    {" "}
                    <i className="bi bi-currency-rupee"></i> {totalPrice}
                  </div>
                </div>
              </div>
              <div className="col-lg-8 col-8">
                <div className="bi bi-dice-1 text-success"></div>
                <heading className="heading-2">
                  Chicken Keema Kulcha Burger
                </heading>
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
            <div className="row flex-row-reverse">
              <div className="col-lg-4 col-4 content-center">
                <div>
                  <div className="qty-btn-cover py-1">
                    <button onClick={handleDecrease} className="qty-btn">
                      -
                    </button>
                    <span>{quantity}</span>
                    <button onClick={handleIncrease} className="qty-btn">
                      +
                    </button>
                  </div>
                  <div className="food-price">
                    {" "}
                    <i className="bi bi-currency-rupee"></i> {totalPrice}
                  </div>
                </div>
              </div>
              <div className="col-lg-8 col-8">
                <div className="bi bi-dice-1 text-success"></div>
                <heading className="heading-2">
                  Chicken Keema Kulcha Burger
                </heading>
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
                1 item |<i className="bi bi-currency-rupee"></i>
                {totalPrice}
              </div>{" "}
              <div>
              {token ?
                <Link
                    to='/payBill'  style={{ cursor: "pointer" }}
                  className="fw-bold text-white text-decoration-none"
                >
                  Place Order
                </Link> :
                <Link
                data-bs-toggle="modal" data-bs-target="#exampleModal" 
                   style={{ cursor: "pointer" }}
                  className="fw-bold text-white text-decoration-none"
                >
                  Place Order
                </Link>}
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
                      <h6>Almost There</h6>
                      <div data-bs-dismiss="modal"><i className="bi bi-x" style={{ cursor: 'pointer' }}></i></div>
                    </div>
                    <p style={{ font: "small" }}>
                      Enter your name and mobile number to place order
                    </p>
                    <input
                      type="phone"
                      className="form-control my-3 py-2 border"
                      placeholder="Phone Number"
                      value={phone}
                      onChange={(e) => setphone(e.target.value)}
                    />
                    {/* <Link to="/paymentMode" className="text-decoration-none"> */}
                    <div
                      className={`AddItems-btn text-center px-3 py-2 fw-bold`}
                      style={{ cursor: 'pointer' }}
                      onClick={handleClick}
                    >
                      Send Otp
                    </div>
                    {/* </Link> */}
                  </div>
                )}
                {step === 2 && (
                  <div>
                    <div className="d-flex justify-content-between">
                      <button className="btn btn-sm btn-scondary border" onClick={() => setStep(1)}>Back</button>
                      <h6>verify opt</h6>
                      <div data-bs-dismiss="modal"><i className="bi bi-x" style={{ cursor: 'pointer' }}></i></div>
                    </div>
                    <input
                      type="number"
                      className="form-control my-3 py-2 border"
                      placeholder="enter otp"
                      value={otp}
                      onChange={(e) => setOtp(e.target.value)}
                    />
                    
                  <button className="border-0 bg-white text-success" onClick={reotp}>  <h6>Resend</h6></button>
                
                    <div
                      className={`AddItems-btn text-center px-3 py-2 fw-bold`}
                      style={{ cursor: 'pointer' }}
                      onClick={verify}
                    // data-bs-dismiss="modal"
                    >
                      Verify
                    </div>
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
