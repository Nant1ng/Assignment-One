import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";

import Header from "./header/Header";
import HomePage from "./homePage/HomePage";
import Footer from "./footer/Footer";

import Login from "./login/LogIn";
import LogOut from "./logOut/LogOut";

import Create from "./products/create/Create";

import Buy from "./products/buy/Buy";
import Rent from "./products/rent/Rent";
import PurchaseList from "./myPurchases/PurchaseList";

import ContactUs from "./contactUs/ContactUs";

// Firebase 

import { AuthProvider } from "../Firebase-Test/Auth";
import FBLogin from "../Firebase-Test/FBLogin";
import FBSignUp from "../Firebase-Test/FBSignup";
import FBLogout from "../Firebase-Test/FBLogout";
import UserProfile from "../Firebase-Test/UserProfile";



export default function AppRoute() {
  return (
    <>
     <AuthProvider> 
      <Router>
        <Header />
        <div className="box-content h-screen overflow-auto overflow-x-hidden">
          <Route path="/" exact component={HomePage} />

          {/* Admin */}
          <Route path="/Admin-Log-In" component={Login} />
          <Route path="/Admin-Log-Out" component={LogOut} />

          <Route path="/Create" component={Create} />

          <Route path="/Buy" component={Buy} />
          <Route path="/Rent" component={Rent} />
          <Route path="/My-Purchases" component={PurchaseList} />
          <Route path="/Contact-Us" component={ContactUs} />

          <Route path="/FBLogin" component={FBLogin} />
          <Route path="/FBSignup" exact component={FBSignUp} />
          <Route path="/FBLogout" component={FBLogout} />
          <Route path="/FBProfile" component={UserProfile} />
        </div>
        <Footer />
      </Router>
     </AuthProvider> 
    </>
  );
}
