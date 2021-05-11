import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";

import Header from "./header/Header";
import HomePage from "./homePage/HomePage";
import Footer from "./footer/Footer";

import Login from "./login/LogIn";
import Register from "./register/Register";
import ForgottenPassword from "./forgottenPassword/ForgottenPassword";
import ResetPassword from "./resetPassword/ResetPassword";
import LogOut from "./logOut/LogOut";

import Create from "./products/create/Create";

import Buy from "./products/buy/Buy";
import Rent from "./products/rent/Rent";
import Checkout from "./checkout/Checkout";

import ContactUs from "./contactUs/ContactUs";

export default function AppRoute() {
  return (
    <>
      <Router>
        <Header />
        <div className="box-content h-screen overflow-auto overflow-x-hidden">
          <Route path="/" exact component={HomePage} />

          <Route path="/Log-in" component={Login} />
          <Route path="/Register" component={Register} />
          <Route path="/Forgotten-Password" component={ForgottenPassword} />
          <Route path="/Reset-Password" component={ResetPassword} />
          <Route path="/Log-out" component={LogOut} />

          <Route path="/Create" component={Create} />

          <Route path="/Buy" component={Buy} />
          <Route path="/Rent" component={Rent} />
          <Route path="/Checkout" component={Checkout} />

          <Route path="/Contact-Us" component={ContactUs} />
        </div>
        <Footer />
      </Router>
    </>
  );
}
