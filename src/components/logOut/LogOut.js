import React from "react";
import { useHistory } from "react-router-dom";

function LogOut() {
  const history = useHistory();

  function handleClick(e) {
    e.preventDefault();
    localStorage.removeItem("Token");
    history.push("/");
    window.location.reload();
  }

  return (
    <button
      onClick={handleClick}
      className="bg-teal-400 hover:bg-teal-400 text-gray-500 font-bold py-2 px-4 border-b-4 border-teal-600 hover:border-teal-500 rounded"
    >
      LOG OUT plz
    </button>
  );
}

export default LogOut;
