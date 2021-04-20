import React from "react";
import Header from "./header/Header";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Login from "./LogIn";

export default function AppRoute() {
  return (
    <>
      <Router>
        <Header />
        <Route path="/Log-in" component={Login} />
      </Router>
    </>
  );
}
