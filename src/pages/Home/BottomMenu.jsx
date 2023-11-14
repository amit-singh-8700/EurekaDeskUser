import React from "react";
import { Link } from "react-router-dom";

function BottomMenu() {
  
  return (
    <>
      <div
        className={`d-flex justify-content-around Menu-btn px-3 py-3 display-fixed shadow`}
      >
        <div className="fw-bold content-center">
          <div>
            {" "}
            <Link className="text-black text-decoration-none" to="/addInCart"><i className="bi bi-menu-down"></i> {"Menu"}</Link>
            
          </div>
        </div>{" "}
        <div>|</div>
        <div className="fw-bold">
          <div className="content-center">
            <Link className="text-black text-decoration-none" to="/PlaceOrder"><i className="bi bi-bag-check"></i> Order </Link>
            

          </div>
        </div>
      </div>
    </>
  );
}

export default BottomMenu;
