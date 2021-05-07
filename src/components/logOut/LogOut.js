import React from "react";

function LogOut() {
  localStorage.removeItem("Token");
  return <div></div>;
}

export default LogOut;
