import React from "react";

function BottomMenu() {
  const  removeTkoen = ()=>{
    const token = sessionStorage.removeItem("signature");

  }
  return (
    <>
      <div
        className={`d-flex justify-content-around Menu-btn px-3 py-3 display-fixed shadow`}
      >
        <div className="fw-bold content-center">
          <div>
            {" "}
            <i className="bi bi-menu-down"></i> {"Menu"}
          </div>
        </div>{" "}
        <div>|</div>
        <div className="fw-bold">
          <div className="content-center">
            <i className="bi bi-bag-check"></i> Order 
            <button className="btn" onClick={removeTkoen}>remove button</button>

          </div>
        </div>
      </div>
    </>
  );
}

export default BottomMenu;
