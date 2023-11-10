import { React, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Login from "./Login";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import {
  login,
  verifyOTPAPI,
  resendOTPAPI,
  getViewCart,
  getQrUrlAPI,
  updateEmployeeAPI,
} from "../../components/api/api_base_url";

function PlaceOrder() {
  const token = sessionStorage.getItem("signature");
  const [step, setStep] = useState(1);
  const [viewcart, setviewcart] = useState([]);
  const [totalPrices, setTotalPrice] = useState(0);
  const [QrUrl, setQrUrl] = useState([]);
  const [newaddress, setnewaddress] = useState([]);
  const [firstName, setfirstName] = useState([]);
  const [lastName, setlastName] = useState([]);
  const [email, setemail] = useState([]);
  const [addresserror, setaddresserror] = useState([]);
  const [loading, setLoading] = useState(true);

  const updateemployee = {
    firstName: firstName,
    lastName: lastName,
    address: newaddress,
    email: email,
  };
  console.log(updateemployee);

  const addData = async () => {
    try {
      const editemployeedata = await axios.patch(
        updateEmployeeAPI,
        updateemployee,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      const data = await editemployeedata.data;
      console.log(data);
      alert("successful");
      if (data.constraints['isLength'] != null) {
        setaddresserror(data.constraints['isLength']);
      } else {
        setaddresserror("Successful.");
      }

      window.location.reload(false);
    } catch (error) {
      console.log(error);
      alert("invalid credentials");
    }
  };

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

  const getqr = async () => {
    try {
      const getqrdata = await axios.get(`${getQrUrlAPI}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      const data = await getqrdata.data;
      setQrUrl(data);
    } catch (error) {
      console.log(error);
    }
  };

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
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCart();
    getqr();
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
          {loading ? (
            <>
              {Array.from({ length: 5 }).map((_, index) => (
                <div className="col-lg-7 my-2 shadow-sm rounded">
                  <div className="row my-2 shadow-sm rounded">
                    <Skeleton width={"100%"} height={"70px"} count={1} />
                  </div>
                </div>
              ))}
            </>
          ) : (
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
          )}
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
                {QrUrl.includes("/") ? (
                  <Link
                    to={"/PayBill"}
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
                  <p style={{ font: "small" }}>First Name</p>
                  <input
                    type="text"
                    className="form-control my-3 py-2 border"
                    placeholder="First Name"
                    value={firstName}
                    onChange={(e) => setfirstName(e.target.value)}
                  />
                  <p style={{ font: "small" }}>Last Name</p>
                  <input
                    type="text"
                    className="form-control my-3 py-2 border"
                    placeholder="Last Name"
                    value={lastName}
                    onChange={(e) => setlastName(e.target.value)}
                  />
                  <p style={{ font: "small" }}>Address</p>
                  <input
                    type="text"
                    className="form-control my-3 py-2 border"
                    placeholder="Address"
                    value={newaddress}
                    onChange={(e) => setnewaddress(e.target.value)}
                  />
                  <p>{addresserror}</p>
                  <p style={{ font: "small" }}>E-mail</p>
                  <input
                    type="email"
                    className="form-control my-3 py-2 border"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setemail(e.target.value)}
                  />
                  {/* <Link to="/paymentMode" className="text-decoration-none"> */}
                  <div
                    className={`AddItems-btn text-center px-3 py-2 fw-bold`}
                    style={{ cursor: "pointer" }}
                    data-bs-dismiss="modal"
                  >
                    <Link
                      className="text-white text-decoration-none"
                      to={"/PayBill"}
                      onClick={addData}
                    >
                      {" "}
                      Place Order{" "}
                    </Link>
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
