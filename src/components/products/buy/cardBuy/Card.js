import React from "react";
// import { Link } from "react-router-dom";
import axios from "axios";
import Modal from "react-modal";

function Card({ title, price, desc, image }) {
  Modal.setAppElement("#root");

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };
  
  return (
    <>
      <div className="flex-auto flex-col flow-root">
        <div className="max-w-md mx-auto bg-gray-500 rounded-xl shadow-md overflow-hidden md:max-w-2xl my-2">
          <div className="md:flex">
            <div className="md:flex-shrink-0">
              <img
                className="w-40 h-48 object-cover"
                src={`http://localhost:1337${image[0].url}`}
                alt="Building"
              />
            </div>
            <div className="p-8">
              <div className="text-left uppercase tracking-wide text-sm text-teal-300 font-semibold">
                {title}
              </div>
              <p className="text-left block mt-1 text-lg leading-tight font-medium text-teal-300">
                {price} $
              </p>
              <p className="mt-2 text-teal-300">{desc}</p>
              {/*<Link */}
              <button
                className="bg-teal-300 justify-center text-center rounded-lg shadow px-10 py-2 flex items-center"
                to="/Checkout"
              >
                Buy
              </button>
              {/*</Link> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
