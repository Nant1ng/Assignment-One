import React from "react";
import Header from "./header/Header";
import { Route, BrowserRouter as Router } from "react-router-dom";

export default function AppRoute() {
  return (
    <>
      <Router>
        <Header />
      </Router>
    </>
  );
}
