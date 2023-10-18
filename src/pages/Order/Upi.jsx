import React from 'react';
import { Link } from 'react-router-dom';

function Upi() {
  return (
    <div className="container my-3">
        <form action="">
        <div className="row justify-content-center">
          <div className="col-5 py-3 col-11">
            <h5>Add New UPI ID</h5>
            <input
              type="text"
              placeholder="Enter Your UPI ID"
              className="form-control border my-2"
            />
            <Link to="/" className="text-decoration-none"><div className={`AddItems-btn text-center px-3 py-2 fw-bold my-3`} >
                 Verify and Pay
              </div></Link>
          </div>
        </div>
        </form>
      </div>
  )
}

export default Upi