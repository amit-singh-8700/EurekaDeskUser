import React, { useEffect } from 'react'
import Header from '../../components/header/Header'
import { ProfileAPI, editProfileAPI } from '../../components/api/api_base_url';
import axios from 'axios';
import { useState } from 'react';

function Profile() {
  const token = sessionStorage.getItem("signature");

  const [profile, setProfile] = useState([])
  const [firstname, setfirstnamee] = useState([])
  const [lastname, setlastname] = useState([])
  const [address, setaddress] = useState([])

  const editprofile = {
    firstname: firstname,
    lastname: lastname,
    address: address
  }


  const profilefunc = async () => {
    try {
    const ProfileApiresponse = await axios.get(
        `${ProfileAPI}`,
        
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      setProfile(ProfileApiresponse.data)
      console.log(ProfileApiresponse.data)

      
      // setStep(3)
      // window.location
      .reload(false);
    } catch (error) {
      console.log(error);
      
    }
  }

  const editProfileFunc = async () => {
    try {
    const editProfileApiResponse = await axios.patch(
        `${editProfileAPI}`,
        editprofile,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      alert("registration successful");
      // setStep(2)
      // history("/PayBill")
      window.location.reload(false);
    } catch (error) {
      console.log(error);
      alert("invalid credentials");
    }
  }
  useEffect(() => {
    profilefunc()
  }, [])
  console.log(profile)
  return (
    <>
    <Header/>
    <div className="container">
      <div className="row">
        <i data-bs-toggle="modal" data-bs-target="#exampleModal" className='bi bi-pencil-square text-warning text-end fs-3'>  </i>
      </div>
      {/* pop up start */}
      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
          <div className="modal-body">
                  <div>
                    <div className="d-flex justify-content-between">
                      <h6>Almost There</h6>
                      <div data-bs-dismiss="modal"><i className="bi bi-x" style={{ cursor: 'pointer' }}></i></div>
                    </div>
                    <p style={{ font: "small" }}>
                      Enter your name and mobile number to place order
                    </p>
                    <input
                      type="text"
                      className="form-control my-3 py-2 border"
                      placeholder="First Name"
                      value={firstname}
                      onChange={(e) => setfirstnamee(e.target.value)}
                    />
                    <input
                      type="text"
                      className="form-control my-3 py-2 border"
                      placeholder="Last Name"
                      value={lastname}
                      onChange={(e) => setlastname(e.target.value)}
                    />
                    <input
                      type="email"
                      className="form-control my-3 py-2 border"
                      placeholder="Email"
                      value={address}
                      onChange={(e) => setaddress(e.target.value)}
                    />
                    
                    {/* <Link to="/paymentMode" className="text-decoration-none"> */}
                    <div
                      className={`AddItems-btn text-center px-3 py-2 fw-bold`}
                      style={{ cursor: 'pointer' }}
                      onClick={editProfileFunc}
                    >
                      Edit
                    </div>
                    {/* </Link> */}
                  </div>
               
                
              </div>

          </div>
        </div>
      </div>
      {/* pop up end */}

        <div className="row">
            <div className="col-lg-6">User Id</div>
            <div className="col-lg-6">{profile._id}</div>
        </div>
        <div className="row">
            <div className="col-lg-6">OTP</div>
            <div className="col-lg-6">{profile.otp}</div>
        </div>
        <div className="row">
            <div className="col-lg-6">Phone No.</div>
            <div className="col-lg-6">{profile.phone}</div>
        </div>
        <div className="row">
            <div className="col-lg-6">Email</div>
            <div className="col-lg-6">{profile.email}</div>
        </div>
        <div className="row">
            <div className="col-lg-6">OTP Expiry Date</div>
            <div className="col-lg-6">{profile.otp_expiry}</div>
        </div>
        <div className="row">
            <div className="col-lg-6">First Name</div>
            <div className="col-lg-6">{profile.firstname}</div>
        </div>
        <div className="row">
            <div className="col-lg-6">Last Name</div>
            <div className="col-lg-6">{profile.lastname}</div>
        </div>
        {/* <div className="row">
            <div className="col-lg-6">Orders</div>
            <div className="col-lg-6">{profile.orders[0]}</div>
        </div> */}
        <div className="row">
            <div className="col-lg-6">Verified</div>
            <div className="col-lg-6">{profile.verified}</div>
        </div>
        <div className="row">
            <div className="col-lg-6">Lat</div>
            <div className="col-lg-6">{profile.lat}</div>
        </div>
        <div className="row">
            <div className="col-lg-6">Lng</div>
            <div className="col-lg-6">{profile.lng}</div>
        </div>
        {/* <div className="row">
            <div className="col-lg-6">Cart</div>
            <div className="col-lg-6">{profile.cart[0]}</div>
        </div> */}
       
    </div>
    </>
  )
  }
export default Profile;