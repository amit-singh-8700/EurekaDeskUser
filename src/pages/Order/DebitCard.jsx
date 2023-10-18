import React from "react";
import { Link } from "react-router-dom";
function DebitCard() {
  return (
    <>
      <div className="container my-3">
        <form action="">
        <div className="row justify-content-center">
          <div className="col-5 py-3 col-11">
            <h5>Add New Card</h5>
            <input
              type="text"
              placeholder="Card Number"
              className="form-control border my-2"
            />
            <div className="row">
              <div className="col-lg-8 col-8">
                <input
                  type="text"
                  placeholder="Valid Through (MM/YY)"
                  className="form-control border my-2"
                />
              </div>
              <div className="col-lg-4 col-4">
                <input
                  type="number"
                  placeholder="CVV"
                  className="form-control border my-2"
                />
              </div>
            </div>
            <input
              type="text"
              placeholder="Name on Card"
              className="form-control border my-2"
            />
            <input type="checkbox"/> Secure this card
            <Link to="/" className="text-decoration-none"><div className={`AddItems-btn text-center px-3 py-2 fw-bold my-3`} >
                 Proceed
              </div></Link>
          </div>
        </div>
        </form>
      </div>
    </>
  );
}

export default DebitCard;
