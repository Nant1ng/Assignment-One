import React from "react";
import image from "../Images/building.jpg";

import { Link } from "react-router-dom";

function Card({ title, price, desc}) {
  return (
    <>
      <div className="flex-auto flex-col flow-root">
        <div className="max-w-md mx-auto bg-gray-500 rounded-xl shadow-md overflow-hidden md:max-w-2xl my-2">
          <div className="md:flex">
            <div className="md:flex-shrink-0">
              <img
                className="h-full w-full object-cover md:w-48"
                src={image}
                alt="Building"
              />
            </div>
            <div className="p-8">
              <div className="text-left uppercase tracking-wide text-sm text-teal-300 font-semibold">
                {title}
              </div>
              <a
                className="text-left block mt-1 text-lg leading-tight font-medium text-teal-300"
              >
                {price} $ / per month
              </a>
              <p className="mt-2 text-teal-300">
                {desc}
              </p>
              <Link className="bg-teal-300 justify-center text-center rounded-lg shadow px-10 py-2 flex items-center" to="/Checkout">
                Buy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
