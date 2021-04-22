import React from "react";
import buildingimage from "../Images/building.jpg";
function Card() {
  return (
    <>
      <div className="flex-auto flex-col flow-root">
        <div className="max-w-md mx-auto bg-gray-500 rounded-xl shadow-md overflow-hidden md:max-w-2xl my-2">
          <div className="md:flex">
            <div className="md:flex-shrink-0">
              <img
                className="h-48 w-full object-cover md:w-48"
                src={buildingimage}
                alt="Building"
              />
            </div>
            <div className="p-8">
              <div className="text-left uppercase tracking-wide text-sm text-teal-300 font-semibold">
                building
              </div>
              <a
                href="#"
                className="text-left block mt-1 text-lg leading-tight font-medium text-teal-300"
              >
                500 $
              </a>
              <p className="mt-2 text-teal-300">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor.Aenean massa. Cum sociis natoque
                penatibus et magnis dis parturient montes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
