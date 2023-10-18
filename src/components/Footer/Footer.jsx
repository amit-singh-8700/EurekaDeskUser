import React from "react";
import './Footer.css';

function Footer() {
  return (
    <div className="container-fluid bg-dark py-3 mt-5 ">
      <div className="row justify-content-center">
        <div className="col-lg-9">
          <div className="text-white py-2 Footer-heading">Social Nehru Place</div>
          <p className="text-white Footer-pra">
            {" "}
            <i className="bi bi-geo-alt"></i> R-1, Upper ground floor
          </p>
          <p className="text-white Footer-pra">
            {" "}
            <i className="bi bi-telephone"></i> 9996604385
          </p>
          <p className="text-white Footer-pra">
            {" "}
            <i className="bi bi-file"></i> GSTIN - 07AABCE8620J1ZM
          </p>
          <div className="mt-4 text-center text-white">
            Powered by{" "}
            <b>Eurekadesk</b>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
