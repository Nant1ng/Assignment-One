import React from "react";

function Card() {
  return (
    <>
      <body>
        <div className="flex p-6">
          <div className="flex-none w-44 relative">
            <img
              src="./city-night-awesome-buildings.jpg"
              alt="Buildings"
              className="absolute inset-0 w-full h-full object-cover rounded-lg"
            />
          </div>
          <form className="flex-auto pl-6">
            <div className="flex flex-wrap items-baseline">
              <h1 className="w-full flex-none font-semibold mb-2.5">
                Building
              </h1>
              <div className="text-4xl leading-7 font-bold text-teal-300">
                $39.00
              </div>
              <div className="text-sm font-medium text-gray-500 ml-3">
                Available
              </div>
            </div>
            <div className="flex space-x-3 mb-4 text-sm font-semibold">
              <div className="flex-auto flex space-x-3">
                <button
                  className="w-1/2 flex items-center justify-center h-9 rounded-full bg-teal-300 text-gray-900"
                  type="submit"
                >
                  Buy now
                </button>
              </div>
            </div>
          </form>
        </div>
      </body>
    </>
  );
}

export default Card;
