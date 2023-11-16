import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./AddInCart.css";
import Header from "../../components/header/Header";
import axios from "axios";
import {
  addToCartAPI,
  getCategoryAPI,
  getFoodAPI,
  getFoodByCategory,
  getFoodDetailAPI,
  getViewCart,
  login,
  resendOTPAPI,
  verifyOTPAPI,
} from "../../components/api/api_base_url";
import { useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function AddInCart() {
  const [loading, setLoading] = useState(true);
  const [hide, setShow] = useState("d-none");
  const [open, setOpen] = React.useState(false);
  const token = sessionStorage.getItem("signature");
  const [Category, setcategory] = useState([]);
  const [catname, setcatname] = useState(["All Foods"]);
  const getCategory = async () => {
    try {
      const getcategorydata = await axios.get(`${getCategoryAPI}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      const data = await getcategorydata.data;
      setcategory(data);
      // console.log(getFoodsAPi.data);
      // alert("successful");
      // setStep(3)
      // window.location.reload(false);
    } catch (error) {
      console.log(error);
      // alert("invalid credentials");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCategory();
  }, []);

  const category = [
    {
      id: "1",
      img: "img1.jpeg",
      categoryName: "Recommended",
    },
    {
      id: "2",
      img: "img1.jpeg",
      categoryName: "Social Breakfast Trays",
    },
    {
      id: "3",
      img: "img1.jpeg",
      categoryName: "Soups",
    },
    {
      id: "4",
      img: "img1.jpeg",
      categoryName: "RecommeSalad and Chaatnded",
    },

    {
      id: "5",
      img: "img1.jpeg",
      categoryName: "Social Platters",
    },
    {
      id: "6",
      img: "img1.jpeg",
      categoryName: "Recommended",
    },
    {
      id: "7",
      img: "img1.jpeg",
      categoryName: "Kebabs from social chhatt",
    },
    {
      id: "8",
      img: "img1.jpeg",
      categoryName: "Munchies",
    },
    {
      id: "9",
      img: "img1.jpeg",
      categoryName: "Momos",
    },
    {
      id: "10",
      img: "img1.jpeg",
      categoryName: "Epic lunch Thalis",
    },
    {
      id: "11",
      img: "img1.jpeg",
      categoryName: "Pita Pao",
    },
    {
      id: "12",
      img: "img1.jpeg",
      categoryName: "Ladi pao",
    },
    {
      id: "13",
      img: "img1.jpeg",
      categoryName: "Bad Ass Burgers",
    },
    {
      id: "14",
      img: "img1.jpeg",
      categoryName: "Rolls",
    },
    {
      id: "15",
      img: "img1.jpeg",
      categoryName: "Supreme Sandwiches",
    },
  ];
  const [quantity, setQuantity] = useState(1);

  const [food, setFood] = useState([]);
  const [fooddetail, setfooddetail] = useState([]);
  const [viewcart, setviewcart] = useState([]);
  const [step, setStep] = useState(1);
  const [phone, setphone] = useState([]);
  const [otp, setOtp] = useState([]);
  const [price, setprice] = useState([]);
  const [id, setid] = useState([]);
  const history = useNavigate();

  const addtocart = {
    _id: fooddetail._id,
    unit: quantity,
  };

  const sinup = {
    phone: phone,
  };

  const verifyotp = {
    phone: phone,
    otp: otp,
  };

  console.log(addtocart);

  const productPrice = price;

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const totalPrice = quantity * productPrice;

  const addData = async (itemId, vendorId) => {
    console.log(`${getFoodDetailAPI}/${vendorId}/${itemId}`);

    console.log("Item ID:", itemId);
    console.log("Vendor ID:", vendorId);

    // You can perform any other actions with the data here

    try {
      const getfooddetail = await axios.get(
        `${getFoodDetailAPI}/${vendorId}/${itemId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      const data = await getfooddetail.data;
      setfooddetail(data);
      // console.log(getFoodsAPi.data);
      // alert("successful");
      // setStep(3)
      // window.location.reload(false);
    } catch (error) {
      console.log(error);
      // alert("invalid credentials");
    }
  };

  const getFoodByCategoryFunc = async (vendor, id, name) => {
    setcatname(name);
    try {
      const getFoodsAPi = await axios.get(
        `${getFoodByCategory}${vendor}/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      const data = await getFoodsAPi.data;
      setFood(data);
      // console.log(getFoodsAPi.data);
      // alert("successful");
      // setStep(3)
      // window.location.reload(false);
    } catch (error) {
      console.log(error);
      // alert("invalid credentials");
    } finally {
      setLoading(false);
    }
  };

  const getFoods = async (name) => {
    setcatname(name);
    try {
      const getFoodsAPi = await axios.get(`${getFoodAPI}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      const data = await getFoodsAPi.data;
      setFood(data);
      // console.log(getFoodsAPi.data);
      // alert("successful");
      // setStep(3)
      // window.location.reload(false);
    } catch (error) {
      console.log(error);
      // alert("invalid credentials");
    } finally {
      setLoading(false);
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
    getFoods();
  }, []);

  const addCart = async (e) => {
    e.preventDefault();
    // console.log(addtocart);
    try {
      const addcartdata = await axios.post(`${addToCartAPI}`, addtocart, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      console.log(addcartdata.res);
      // alert("successful");

      setShow("");
      setOpen(true);

      // window.location.reload(false);
    } catch (error) {
      console.log(error);
      alert("invalid credentials");
    }
  };

  const addCart2 = async (id, price) => {
    // console.log(addtocart);
    setid(id);
    try {
      setprice(price);
      const addcartdata = await axios.post(
        `${addToCartAPI}`,
        {
          _id: id,
          unit: quantity,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      console.log(addcartdata.res);
      // alert("successful");
      setShow("");
      setOpen(true);

      // window.location.reload(false);
    } catch (error) {
      console.log(error);
      alert("invalid credentials");
    }
  };

  const handleClick = async () => {
    try {
      await axios.post(`${login}`, sinup);

      setOpen(true);
      setStep(2);

      // window.location.reload(false);
    } catch (error) {
      console.log(error);
      alert("invalid credentials");
    }
  };

  const verify = async () => {
    try {
      const api = await axios.patch(`${verifyOTPAPI}`, verifyotp, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      const data = await api.data;
      sessionStorage.setItem("signature", data.signature);

      setOpen(true);
      setStep(2);
      window.location.reload(false);
    } catch (error) {
      console.log(error);
      alert("invalid credentials");
    }
  };

  const reotp = async () => {
    try {
      await axios.get(`${resendOTPAPI}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      // setStep(3)
      // window.location.reload(false);
    } catch (error) {
      console.log(error);
      alert("invalid credentials");
    }
  };

  return (
    <>
      <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          success!
        </Alert>
      </Snackbar>
      <div className="container-fluid my-3 position-fixed">
        <div className="row">
          <Header />
          <div className="col-lg-2 display-none sidebarFixed">
            <Link to={"/"} className="text-decoration-none">
              <h6 className="text-secondary">
                <i className="bi bi-arrow-left"></i> BACK TO HOME
              </h6>
            </Link>
            <h4 className="py-3">Menu</h4>
            <div>
              <Link
                className="text-decoration-none text-secondary fw-bold"
                onClick={() => getFoods("All Foods")}
              >
                <p>All Foods</p>
              </Link>
              {Category.map((data, index) => {
                return (
                  <Link
                    className="text-decoration-none text-secondary fw-bold"
                    onClick={() =>
                      getFoodByCategoryFunc(data.vendorId, data._id, data.name)
                    }
                  >
                    <p>{data.name}</p>
                  </Link>
                );
              })}
            </div>
          </div>
          <div className="col-lg-9 RightSidebarFixed align-item-end">
            <h5 className="display-none">{catname}</h5>
            <div className="d-lg-none">
              <button
                className="filter-btn"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal2"
              >
                All
              </button>
              <button className="filter-btn">Offer</button>
              <button className="filter-btn">Veg</button>
              <button className="filter-btn">Non-veg</button>
            </div>
            <hr />
            <div className="row">
              {loading ? (
                <>
                  {" "}
                  {Array.from({ length: 5 }).map((_, index) => (
                    <div className="col-lg-6 my-2">
                      <div className="row flex-row-reverse">
                        <Skeleton width={"100%"} height={"150px"} count={1} />
                      </div>
                    </div>
                  ))}
                </>
              ) : (
                food.map((data, index) => {
                  return (
                    <div key={data.id} className="col-lg-6 my-2">
                      <div className="row flex-row-reverse">
                        <div className="col-lg-4 col-4 content-center">
                          <div
                            className="position-relative"
                            style={{ cursor: "pointer" }}
                          >
                            <img
                              src={
                                data.images == null
                                  ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMgPtF8x4lhf4oH0rSo-mEMnTMGcUZhXmXvg&usqp=CAU"
                                  : `https://eureka-desk.onrender.com/images/${data.images}`
                              }
                              className="rounded img-fluid"
                              alt=""
                            />

                            {price == 0 || data._id !== id ? (
                              <div className="bg-white px-4 py-1 rounded shadow-sm offer-percent color position-absolute top-100 start-50 translate-middle">
                                <span
                                  onClick={() => addCart2(data._id, data.price)}
                                  style={{ fontSize: "14px" }}
                                >
                                  Add
                                </span>
                              </div>
                            ) : (
                              <div className="bg-white px-4 py-1 rounded offer-percent color position-absolute top-100 start-50 translate-middle">
                                <div className="modal-footer d-flex justify-content-between">
                                  <div className="qty-btn-cover d-flex">
                                    <button
                                      onClick={handleDecrease}
                                      className="qty-btn"
                                    >
                                      -
                                    </button>
                                    <span>{quantity}</span>
                                    <button
                                      onClick={handleIncrease}
                                      className="qty-btn"
                                    >
                                      +
                                    </button>
                                  </div>
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                        <div className="col-lg-8 col-8">
                          <div
                            className={
                              data.foodType == "veg"
                                ? "bi bi-dice-1 text-success mx-1"
                                : "bi bi-dice-1 text-danger mx-1"
                            }
                          ></div>
                          <heading className="heading-2">{data.name}</heading>
                          <div className="food-price">
                            {" "}
                            <i className="bi bi-currency-rupee"></i>{" "}
                            {data.price}
                          </div>
                          <div style={{ fontSize: "small" }}>
                            {data.description}{" "}
                            <Link
                              style={{ cursor: "pointer" }}
                              className="fw-bold color text-decoration-none"
                              data-bs-toggle="modal"
                              data-bs-target="#exampleModal"
                              onClick={() => addData(data._id, data.vendorId)}
                            >
                              More
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })
              )}
            </div>
          </div>
        </div>
      </div>
      {/* modal */}
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
              <div className="position-relative">
                <img
                  src={
                    fooddetail.images == null
                      ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMgPtF8x4lhf4oH0rSo-mEMnTMGcUZhXmXvg&usqp=CAU"
                      : `https://eureka-desk.onrender.com/images/${fooddetail.images}`
                  }
                  className="rounded"
                  width={"100%"}
                  height={"250"}
                  alt=""
                />
                <i
                  className="bi bi-x-circle text-white shadow position-absolute top-0 end-0 m-2"
                  data-bs-dismiss="modal"
                  style={{ cursor: "pointer" }}
                ></i>
              </div>
              <div className="py-2">
                {" "}
                <div className="d-flex">
                  <div
                    className={
                      fooddetail.foodType == "veg"
                        ? "bi bi-dice-1 text-success mx-1"
                        : "bi bi-dice-1 text-danger mx-1"
                    }
                  ></div>{" "}
                  {fooddetail.foodType}
                </div>
                <heading className="heading-2">{fooddetail.name}</heading>
                <div style={{ fontSize: "small" }}>
                  {fooddetail.description}{" "}
                </div>
              </div>
            </div>
            {/* <div className="modal-footer d-flex justify-content-between">
              <div className="qty-btn-cover">
                <button onClick={handleDecrease} className="qty-btn">
                  -
                </button>
                <span>{quantity}</span>
                <button onClick={handleIncrease} className="qty-btn">
                  +
                </button>
              </div>
              <div className="d-flex justify-content-between AddItems-btn px-3">
                <div
                  className="fw-bold"
                  onClick={addCart}
                  data-bs-dismiss="modal"
                  style={{ cursor: "pointer" }}
                >
                  Add item
                </div>{" "}
                <div className="fw-bold">
                  <i className="bi bi-currency-rupee"></i>
                  {totalPrice}
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
      {/* next button */}
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-12 col-12 position-absolute bottom-0 start-50 translate-middle-x my-2">
            <div
              className={`d-flex justify-content-between AddItems-btn px-3 py-3 ${hide}`}
            >
              <div className="fw-bold">
                {quantity} item |<i className="bi bi-currency-rupee"></i>
                {totalPrice}
              </div>{" "}
              <div>
                {token ? (
                  <Link
                    to="/placeOrder"
                    style={{ cursor: "pointer" }}
                    className="fw-bold text-white text-decoration-none"
                  >
                    Next
                  </Link>
                ) : (
                  <Link
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal3"
                    style={{ cursor: "pointer" }}
                    className="fw-bold color text-decoration-none"
                  >
                    Next
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* 2nd modal for mobile category*/}
      <div
        className="modal fade"
        id="exampleModal2"
        tabindex="-1"
        aria-labelledby="exampleModalLabel2"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel2">
                Category
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="container-fluid">
                <div className="row">
                  {category.map((data, index) => {
                    return (
                      <div className="col-4 my-2 text-center" key={data.id}>
                        <img
                          src={require(`../../img/${data.img}`)}
                          className="rounded"
                          height={"70px"}
                          width={"100%"}
                          alt=""
                        />
                        <div style={{ fontSize: "11px" }}>
                          {data.categoryName}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              {/* <div className="row">
              <div className="col-lg-4 my-2 text-center">
               <img src={require('../../img/img1.jpeg')} className="rounded img-fluid" alt="" />
               <div >Recommended</div>
              </div>
              <div className="col-lg-4 my-2 text-center">
               <img src={require('../../img/img1.jpeg')} className="rounded img-fluid" alt="" />
               <div >Recommended</div>
              </div>
              <div className="col-lg-4 my-2 text-center">
               <img src={require('../../img/img1.jpeg')} className="rounded img-fluid" alt="" />
               <div >Recommended</div>
              </div>
              <div className="col-lg-4 my-2 text-center">
               <img src={require('../../img/img1.jpeg')} className="rounded img-fluid" alt="" />
               <div >Recommended</div>
              </div>
            </div> */}
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="exampleModal3"
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
                    <div data-bs-dismiss="modal">
                      <i className="bi bi-x" style={{ cursor: "pointer" }}></i>
                    </div>
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
                    style={{ cursor: "pointer" }}
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
                    <button
                      className="btn btn-sm btn-scondary border"
                      onClick={() => setStep(1)}
                    >
                      Back
                    </button>
                    <h6>verify opt</h6>
                    <div data-bs-dismiss="modal">
                      <i className="bi bi-x" style={{ cursor: "pointer" }}></i>
                    </div>
                  </div>
                  <input
                    type="number"
                    className="form-control my-3 py-2 border"
                    placeholder="enter otp"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                  />

                  <button
                    className="border-0 bg-white text-success"
                    onClick={reotp}
                  >
                    {" "}
                    <h6>Resend</h6>
                  </button>

                  <div
                    className={`AddItems-btn text-center px-3 py-2 fw-bold`}
                    style={{ cursor: "pointer" }}
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
export default AddInCart;
