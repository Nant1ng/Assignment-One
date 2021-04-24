import React from "react";
import Header from "./header/Header";
import HomePage from "./homePage/HomePage";
import Footer from "./footer/Footer";
import Login from "./login/LogIn";
import Register from "./register/Register";

import Buy from "./buy/Buy";
import { Route, BrowserRouter as Router } from "react-router-dom";


export default function AppRoute() {
  return (
    <>
      <Router>
        <Header />
        <div className="box-content h-screen overflow-auto">
        <Route path="/Log-in" exact component={Login} />
        <Route path="/Register" exact component={Register}></Route>
        <Route path="/Buy" exact component={Buy}></Route>

        <Route path="/" exact component={HomePage}></Route>
        </div>
        <Footer />
      </Router>
    </>
  );
}
