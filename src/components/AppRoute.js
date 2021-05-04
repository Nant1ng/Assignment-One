import React from "react";
import Header from "./header/Header";
import HomePage from "./homePage/HomePage";
import Footer from "./footer/Footer";

import Login from "./login/LogIn";
import Register from "./register/Register";
import ForgottenPassword from "./forgottenPassword/ForgottenPassword";
import ResetPassword from "./resetPassword/ResetPassword";

import Buy from "./buy/Buy";
import Rent from "./rent/Rent";
import Checkout from "./checkout/Checkout";

import { Route, BrowserRouter as Router } from "react-router-dom";
import ContactUs from "./contactUs/ContactUs";

export default function AppRoute() {
  return (
    <>
      <Router>
        <Header />
        <div className="box-content h-screen overflow-auto overflow-x-hidden">
          <Route path="/" exact component={HomePage} />

          <Route path="/Log-in" exact component={Login} />
          <Route path="/Register" exact component={Register} />
          <Route path="/Forgotten-Password" exact component={ForgottenPassword} />
          <Route path="/Reset-Password" exact component={ResetPassword} /> 
 
          <Route path="/Buy" exact component={Buy} />
          <Route path="/Rent" exact component={Rent} />
          <Route path="/Checkout" exact component={Checkout} />

          <Route path="/Contact-Us" exact component={ContactUs} />
        </div>
        <Footer />
      </Router>
    </>
  );
}
