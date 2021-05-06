import React from "react";
import { Link } from "react-router-dom";

function Card({ image, title, price, desc}) {
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
              <Link
                className="bg-teal-300 justify-center text-center rounded-lg shadow px-10 py-2 flex items-center"
                to="/Checkout"
              >
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
