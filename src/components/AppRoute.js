import React from "react";
import Header from "./header/Header";
import CardList from "./card/CardList";
import Login from "./login/LogIn";
import Register from "./register/Register";
import { Route, BrowserRouter as Router } from "react-router-dom";

export default function AppRoute() {
  return (
    <>
      <Router>
        <Header />
        <Route path="/" exact component={CardList}/>
        <Route path="/Log-in" exact component={Login} />
        <Route path="/Register" exact component={Register}></Route>
      </Router>
    </>
  );
}
