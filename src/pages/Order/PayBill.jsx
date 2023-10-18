import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import BottomMenu from "../Home/BottomMenu";


function PayBill() {
  
  return (
    <>
      <div className="container position-relative">
        <div className="row justify-content-center">
          <div className="col-lg-6 my-2 shadow-sm">
            <h4 className="py-3">Orders</h4>
            <div className="row flex-row-reverse">
              <div className="col-lg-4 col-4 content-center">
                <div>
                  <div className="food-price">
                    {" "}
                    <i className="bi bi-currency-rupee"></i> {"650"}
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
                      Repeat
                    </Link>
                  </h6>
                </div>
              </div>
              <hr />
            </div>
            <div className="row flex-row-reverse">
              <div className="col-lg-4 col-4 content-center">
                <div>
                  <div className="food-price">
                    {" "}
                    <i className="bi bi-currency-rupee"></i> {"650"}
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
                      Repeat
                    </Link>
                  </h6>
                </div>
              </div>
              <hr />
            </div>
            <div className="row flex-row-reverse">
              <div className="col-lg-4 col-4 content-center">
                <div>
                  <div className="food-price">
                    {" "}
                    <i className="bi bi-currency-rupee"></i> {"650"}
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
                      Repeat
                    </Link>
                  </h6>
                </div>
              </div>
              <hr />
            </div>
            {/* Bill details */}
            <div className="row my-3 shadow-sm">
              <div className="col-lg-12 py-2">
                <h5>Bill Details</h5>
                <div className="d-flex justify-content-between">
                  <span>Item Total </span>
                  <span>
                    <i className="bi bi-currency-rupee"></i>650
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
                    <i className="bi bi-currency-rupee"></i>650
                  </span>
                </div>
                .
                <div
                  className={`d-flex justify-content-between AddItems-btn px-3 py-3 shadow mb-5`}
                >
                  <div className="fw-bold">
                    1 item |<i className="bi bi-currency-rupee"></i>
                    {"500"}
                  </div>{" "}
                  <div>
                    {" "}
                    Pay Bill
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
