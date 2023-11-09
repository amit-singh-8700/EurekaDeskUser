import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import BottomMenu from "../Home/BottomMenu";
import axios from "axios";
import {
  CreatePaymentAPI,
  VerifyPaymentApi,
  getViewCart,
} from "../../components/api/api_base_url";

function PayBill() {
  const [paymentId, setPaymentId] = useState(null);
  const token = sessionStorage.getItem("signature");
  const [amount, setamount] = useState([]);
  const [paymentMode, setpaymentMode] = useState([]);
  const [viewcart, setviewcart] = useState([]);
  const [totalPrices, setTotalPrice] = useState(0);

  // const createpayment = {
  //   amount: amount,
  //   paymentMode: paymentMode,
  // }
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

  const paymentData = {
    amount: totalPrices,
    paymentMode: "cod",
    offerId: "",
  };

  function loadScript(src) {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  }

  async function displayRazorpay() {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }

    const result = await axios.post(CreatePaymentAPI, paymentData, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    console.log("Entering displayRazorpay");

    if (!result) {
      alert("Server error. Are you online?");
      return;
    }
    const data = await result.data;
    console.log(data);
    const { amount, id: order_id, currency } = data;

    console.log(amount);

    const options = {
      key: "rzp_test_sANCigiSLRL13y", // Enter the Key ID generated from the Dashboard
      amount: amount,
      currency: currency,
      name: "Soumya Corp.",
      description: "Test Transaction",
      order_id: order_id,
      handler: async function (response) {
        const data = {
          orderCreationId: order_id,
          razorpayPaymentId: response.razorpay_payment_id,
          razorpayOrderId: response.razorpay_order_id,
          razorpaySignature: response.razorpay_signature,
        };
        console.log(data)
        const result = await axios.post(VerifyPaymentApi, data);

        if (result.data.msg == "success") {
          // Payment was successful; you can redirect the user here
          window.location.href = "/OrderSuccessful"; // Redirect to the success page
        } else {
          // alert("Payment failed. Please try again.");
          window.location.href = "/OrderSuccessful"; 
        }
      },
      prefill: {
        name: "Pushpendra kumar",
        email: "kumar@example.com",
        contact: "9729470221",
      },
      notes: {
        address: "Corporate Office",
      },
      theme: {
        color: "#61dafb",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  }

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
      <div className="container position-relative">
        <div className="row justify-content-center">
          <div className="col-lg-6 my-2 shadow-sm">
            <h4 className="py-3">Orders</h4>
            {viewcart.map((data, index) => {
              return (
                <div key={data.id} className="row flex-row-reverse">
                  <div className="col-lg-4 col-4 content-center">
                    <div>
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
                          Repeat
                        </Link>
                      </h6>
                    </div>
                  </div>
                  <hr />
                </div>
              );
            })}
            {/* Bill details */}
            <div className="row my-3 shadow-sm">
              <div className="col-lg-12 py-2">
                <h5>Bill Details</h5>
                <div className="d-flex justify-content-between">
                  <span>Item Total </span>
                  <span>
                    <i className="bi bi-currency-rupee"></i>
                    {totalPrices}
                  </span>
                </div>
                <div className="d-flex justify-content-between">
                  <span>Vat </span>
                  <span>
                    <i className="bi bi-currency-rupee"></i>650
                  </span>
                </div>
                <div className="d-flex justify-content-between">
                  <span>Service Charge</span>
                  <span>
                    <i className="bi bi-currency-rupee"></i>650
                  </span>
                </div>
                <hr />
                <div className="d-flex justify-content-between">
                  <span className="fw-bold">To Pay</span>
                  <span className="fw-bold">
                    <i className="bi bi-currency-rupee"></i>
                    {totalPrices}
                  </span>
                </div>
                .
                <div
                  className={`d-flex justify-content-between AddItems-btn px-3 py-3 shadow mb-5`}
                >
                  <div className="fw-bold">
                    {viewcart.length} item |
                    <i className="bi bi-currency-rupee"></i>
                    {totalPrices}
                  </div>{" "}
                  <div>
                    {" "}
                    <button
                      className="btn text-white"
                      onClick={displayRazorpay}
                    >
                      Pay Bill
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-6 col-12"></div>
      <BottomMenu />
      {/* number verification */}
      {/* modal */}
    </>
  );
}

export default PayBill;
