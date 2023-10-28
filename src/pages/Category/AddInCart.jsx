import { React, useState } from "react";
import { Link } from "react-router-dom";
import "./AddInCart.css";
import Header from "../../components/header/Header";
import axios from "axios";
import { addToCartAPI, getFoodAPI, getFoodDetailAPI, getViewCart } from "../../components/api/api_base_url";
import { useEffect } from "react";
// import { getFoodDetailAPI } from "../../components/api/api_base_url";

function AddInCart() {
  
  const [hide, setShow] = useState("d-none");
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

  const token = sessionStorage.getItem("signature");
  const [quantity, setQuantity] = useState(1);

  const [food, setFood] = useState([]);
  const [fooddetail, setfooddetail] = useState([]);
  const [viewcart, setviewcart] = useState([]);
  console.log(fooddetail)

  const addtocart = {
    _id: fooddetail._id,
    unit: quantity,
  };

  console.log(addtocart)

  const productPrice = fooddetail.price;

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  const totalPrice = quantity * productPrice;

  const addData = async (itemId, vendorId) => {
    console.log(`${getFoodDetailAPI}/${vendorId}/${itemId}`);

    console.log("Item ID:", itemId);
    console.log("Vendor ID:", vendorId);

    // You can perform any other actions with the data here

    try {
      const getfooddetail = await axios.get(`${getFoodDetailAPI}/${vendorId}/${itemId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
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

  const getFoods = async () => {
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
    getFoods();
    getCart();
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


      // window.location.reload(false);
    } catch (error) {
      console.log(error);
      alert("invalid credentials");
    }
  };

  return (
    <>
      <div className="container-fluid my-3 position-fixed">
        <div className="row">
          <Header />
          <div className="col-lg-3 display-none sidebarFixed">
            <Link to={"/"} className="text-decoration-none">
              <h6 className="text-secondary">
                <i className="bi bi-arrow-left"></i> BACK TO HOME
              </h6>
            </Link>
            <h4 className="py-3">Menu</h4>
            <div>
              <Link className="text-decoration-none text-secondary fw-bold">
                <p>Recommended</p>
              </Link>
              <Link className="text-decoration-none text-secondary fw-bold">
                <p>Social Breakfast Trays</p>
              </Link>
              <Link className="text-decoration-none text-secondary fw-bold">
                <p>Soups</p>
              </Link>
              <Link className="text-decoration-none text-secondary fw-bold">
                <p>Salad and Chaat</p>
              </Link>
              <Link className="text-decoration-none text-secondary fw-bold">
                <p>Social Platters</p>
              </Link>
              <Link className="text-decoration-none text-secondary fw-bold">
                <p>Kebabs from social chhatt</p>
              </Link>
              <Link className="text-decoration-none text-secondary fw-bold">
                <p>Munchies</p>
              </Link>
              <Link className="text-decoration-none text-secondary fw-bold">
                <p>Momos</p>
              </Link>
              <Link className="text-decoration-none text-secondary fw-bold">
                <p>Epic lunch Thalis</p>
              </Link>
              <Link className="text-decoration-none text-secondary fw-bold">
                <p>Pita Pao</p>
              </Link>
              <Link className="text-decoration-none text-secondary fw-bold">
                <p>Ladi pao</p>
              </Link>
              <Link className="text-decoration-none text-secondary fw-bold">
                <p>Supreme Sandwiches</p>
              </Link>
              <Link className="text-decoration-none text-secondary fw-bold">
                <p>Bad Ass Burgers</p>
              </Link>
              <Link className="text-decoration-none text-secondary fw-bold">
                <p>Rolls</p>
              </Link>
              <Link className="text-decoration-none text-secondary fw-bold">
                <p>Supreme Sandwiches</p>
              </Link>
            </div>
          </div>
          <div className="col-lg-9 RightSidebarFixed align-item-end">
            <h5 className="display-none">Social Breakfast Trays</h5>
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
              {food.map((data, index) => {
                return (
                  
                    <div key={data.id} className="col-lg-6 my-2">
                      <div className="row flex-row-reverse">
                        <div className="col-lg-4 col-4 content-center">
                          <div
                            className="position-relative"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                            style={{ cursor: "pointer" }}
                          >
                            <img
                              src={require("../../img/burger.jpeg")}
                              className="rounded img-fluid"
                              alt=""
                            />
                            <div className="bg-white px-4 py-1 rounded shadow-sm offer-percent color position-absolute top-100 start-50 translate-middle">
                              <span style={{ fontSize: "14px" }} onClick={()=>addData(data._id,data.vendorId)}>Add</span>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-8 col-8">
                          <div className="bi bi-dice-1 text-success"></div>
                          <heading className="heading-2">{data.name}</heading>
                          <div className="food-price">
                            {" "}
                            <i className="bi bi-currency-rupee"></i>{" "}
                            {data.price}
                          </div>
                          <div style={{ fontSize: "small" }}>
                            {data.description}{" "}
                            <Link to="/" className="text-decoration-none color">
                              More
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                );
              })}
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
                src={require("../../img/thepizaa.jpeg")}
                className="rounded"
                width={"100%"}
                height={"250"}
                alt=""
              />
              <i className="bi bi-x-circle text-white shadow position-absolute top-0 end-0 m-2" data-bs-dismiss="modal" style={{cursor:"pointer"}}></i>
              </div>
              <div className="py-2">
                {" "}
                <div className="d-flex">
                <div className={fooddetail.foodType == 'veg' ? "bi bi-dice-1 text-success mx-1" : "bi bi-dice-1 text-danger mx-1"}></div>{" "}
                {fooddetail.foodType}
                </div>
               

                <heading className="heading-2">
                  {fooddetail.name}
                </heading>
                <div style={{ fontSize: "small" }}>
                {fooddetail.description}{" "}
                
                </div>
              </div>
            </div>
            <div className="modal-footer d-flex justify-content-between">
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
            </div>
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
                <Link
                  to={"/placeOrder"}
                  className="fw-bold text-white text-decoration-none"
                >
                  Next
                </Link>
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
    </>
  );
          }
export default AddInCart;
