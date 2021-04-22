import React from "react";
import Header from "./header/Header";
import Card from "./card/Card";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Login from "./LogIn";

export default function AppRoute() {
  return (
    <>
      <Router>
        <Header />
        <Route path="/Log-in" exact component={Login} />
        <Route path="/" exact component={Card}/>
        <Route path="/" exact component={Card}/>
      </Router>
    </>
  );
}
