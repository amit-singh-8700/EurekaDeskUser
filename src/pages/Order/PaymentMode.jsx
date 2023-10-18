import React from "react";
import { Link } from "react-router-dom";

function PaymentMode() {
  return (
    <>
      <div className="container my-3">
        <div className="row justify-content-center">
          <div className="col-lg-4 shadow-sm p-3 rounded content-center border" style={{height:"90vh"}}>
           <div>
           <h5>Select a payment method</h5>
            <div className="form-check" style={{fontSize:"20px"}}>
            <Link to="/debitCard">  <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault2"
                checked
              /></Link> 
              <label className="form-check-label" for="flexRadioDefault2">
              Credit card or Debit Card
              </label>
            </div>
            <div className="form-check" style={{fontSize:"20px"}}>
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault2"
                checked
              />
              <label className="form-check-label" for="flexRadioDefault2">
                Pay by Cash
              </label>
            </div>
            <div className="form-check" style={{fontSize:"20px"}}>
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault2"
                checked
              />
              <label className="form-check-label" for="flexRadioDefault2">
                Net Banking
              </label>
            </div>
            <div className="form-check" style={{fontSize:"20px"}}>
            <Link to="/upi">  <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault2"
                checked
              /></Link> 
              <label className="form-check-label" for="flexRadioDefault2">
                UPI
              </label>
            </div>
           </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PaymentMode;
