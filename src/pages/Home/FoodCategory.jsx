import { React, useState } from "react";
import { Link } from "react-router-dom";
import { getCategoryAPI } from "../../components/api/api_base_url";
import axios from "axios";
import { useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";


function FoodCategory() {
  const token = sessionStorage.getItem("signature");
  const [category, setcategory] = useState([]);
  const [loading, setLoading] = useState(true);

  const getCategory = async () => {
    try {
      const getcategorydata = await axios.get(`${getCategoryAPI}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      const data = await getcategorydata.data;
      setcategory(data);
      // console.log(getFoodsAPi.data);
      // alert("successful");
      // setStep(3)
      // window.location.reload(false);
    } catch (error) {
      console.log(error);
      // alert("invalid credentials");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCategory();
  }, []);
  return (
    <div className="container">
      <div className="row ">
        <div className="heading my-1">What would you like to order?</div>
        {loading ? (
          <>
          {" "}
          {Array.from({ length: 4 }).map((_, index) => (
            <div className="col-lg-3 col-6 my-2">
            <div className="position-relative">
            <Skeleton width={"100%"} height={"150px"} count={1} />
            </div>
          </div>
          ))}
        </>
          
        ) : (
          category.map((data, index) => {
            return (
              <div key={data.id} className="col-lg-3 col-6 my-2">
                <div className="position-relative">
                  <Link to={"/AddInCart"}>
                    {" "}
                    <img
                      src={
                        data.images == null
                          ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMgPtF8x4lhf4oH0rSo-mEMnTMGcUZhXmXvg&usqp=CAU"
                          : `https://eureka-desk.onrender.com/images/${data.images}`
                      }
                      className="rounded"
                      width={"100%"}
                      height={"150px"}
                      alt=""
                    />
                  </Link>

                  <span
                    className="position-absolute bottom-0 start-0 mx-2"
                    style={{
                      fontSize: "19px",
                      fontWeight: "700",
                      color: "white",
                    }}
                  >
                    {data.name}
                  </span>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}

export default FoodCategory;
