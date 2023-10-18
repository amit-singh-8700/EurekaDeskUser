import React from "react";
import { Link } from "react-router-dom";


function FoodCategory() {
  return (
    <div className="container">
      <div className="row ">
        <div className="heading my-1">What would you like to order?</div>
        <div className="col-lg-3 col-6 my-2">
          <div className="position-relative">
            <Link to={"/AddInCart"}>            <img
              src={require("../../img/pizaa.png")}
              className="img-rounded"
              width={"100%"}
              height={"auto"}
              alt=""
            /></Link>

            <span
              className="position-absolute bottom-0 start-0 mx-2"
              style={{ fontSize: "19px", fontWeight: "700", color: "white" }}
            >
              Food
            </span>
          </div>
        </div>
        <div className="col-lg-3 col-6 my-2">
          <div className="position-relative">
            <img
              src={require("../../img/pizaa.png")}
              className="img-rounded"
              width={"100%"}
              height={"auto"}
              alt=""
            />
            <span
              className="position-absolute bottom-0 start-0 mx-2"
              style={{ fontSize: "19px", fontWeight: "700", color: "white" }}
            >
              Food
            </span>
          </div>
        </div>
        <div className="col-lg-3 col-6 my-2">
          <div className="position-relative">
            <img
              src={require("../../img/achohol.png")}
              className="img-rounded"
              width={"100%"}
              height={"auto"}
              alt=""
            />
            <span
              className="position-absolute bottom-0 start-0 mx-2"
              style={{ fontSize: "19px", fontWeight: "700", color: "white" }}
            >
              Non Alcohol Beverages
            </span>
          </div>
        </div>
        <div className="col-lg-3 col-6 my-2">
          <div className="position-relative">
            <img
              src={require("../../img/achohol.png")}
              className="img-rounded"
              width={"100%"}
              height={"auto"}
              alt=""
            />
            <span
              className="position-absolute bottom-0 start-0 mx-2"
              style={{ fontSize: "19px", fontWeight: "700", color: "white" }}
            >
              Alcoholic Beverages
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FoodCategory;
