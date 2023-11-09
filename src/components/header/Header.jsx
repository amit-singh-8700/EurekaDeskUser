import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import QR from "../../pages/qr/QR";

function Header() {
  return (
    <>
      <div className="container">
        <div className="row py-3">
          <div className="col-lg-5 d-flex">
            <div>
              <h2>Logo</h2>
            </div>
            <div className="mx-2">
              <h2>Eurekasesk</h2>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="input-group shadow rounded border" style={{backgroundColor:'#D9D9D91F'}}>
              <input type="text" className="form-control  search-input" placeholder="Search for items..." />
              <span
                className="input-group-text  bg-white search-btn"
                id="basic-addon2"
              >
                <i className="bi bi-search p-1"></i>
              </span>
            </div>
          </div>
          <div className="col-lg-3 content-center display-none">
            <div className="d-flex shadow p-1 rounded border">
              <h6 className="mx-1">Veg Only</h6>{" "}
              <div className="form-check form-switch">
                <input
                  className="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckDefault"
                />
              </div>
            </div>
            <Link to={'/profile'}>
            <i className="bi bi-person-circle mx-3 fs-2 color"></i>
            </Link>
            <QR/>
          </div>
        </div>
      </div>
      <div className="container-fluid my-3">
        <div className="row">
          <hr />
        </div>
      </div>
    </>
  );
}

export default Header;
