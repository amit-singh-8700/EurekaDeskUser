import { React, useState } from "react";
import { getQrUrlAPI } from "../../components/api/api_base_url";
import axios from "axios";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function QR() {
  const token = sessionStorage.getItem("signature");
  const [QrUrl, setQrUrl] = useState([]);
  const location = useLocation();
  console.log(location);
  console.log(QrUrl)

const getqr = async () => {
    try {
      const getqrdata = await axios.get(`${getQrUrlAPI}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      const data = await getqrdata.data;
      setQrUrl(data);
      // console.log(getFoodsAPi.data);
      // alert("successful");
      // setStep(3)
      // window.location.reload(false);
    } catch (error) {
      console.log(error);
      // alert("invalid credentials");
    }
  };

  let QRfetch = () => {
    if(QrUrl.includes(location.pathname)) {
        console.log("include");
    } else {
        console.log("not include");    
    }
  }

  
  

  useEffect(() => {
    getqr();
    setTimeout(()=>{
        QRfetch();
    },5000)
  }, []);

  return <div className="color" style={{ fontWeight: 'bold' }} >{QrUrl.includes(location.pathname)  ? "Dine" : 'Delivery'}</div>;
}

export default QR;
