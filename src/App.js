import React from "react";
import Header from "./components/header/Header";
import Banner from "./pages/Home/Banner";
import Home from "./pages/Home/Home";
import { Route, Routes } from "react-router-dom";
import AddInCart from "./pages/Category/AddInCart";
import PlaceOrder from "./pages/Order/PlaceOrder";
import PayBill from "./pages/Order/PayBill";
import PaymentMode from "./pages/Order/PaymentMode";
import DebitCard from "./pages/Order/DebitCard";
import Upi from "./pages/Order/Upi";
import Profile from "./pages/profile/Profile";
import OrderSuccessful from "./pages/Order/OrderSuccessful";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} ></Route>
        <Route path="/addInCart" element={<AddInCart/>}> </Route>
        <Route path="/placeOrder" element={<PlaceOrder/>}> </Route>
        <Route path="/PayBill" element={<PayBill/>}> </Route>
        <Route path="/paymentMode" element={<PaymentMode/>}> </Route>
        <Route path="/debitCard" element={<DebitCard/>}> </Route>
        <Route path="/upi" element={<Upi/>}> </Route>
        <Route path="/profile" element={<Profile/>}> </Route>
        <Route path="/OrderSuccessful" element={<OrderSuccessful/>}> </Route>
    </Routes>
    </>

  );
}

export default App;
