import React from "react";

function ForgottenPassword() {
  return (
    <div className="font-sans">
      <div className="relative min-h-screen flex flex-col sm:justify-center items-center">
        <div className="relative sm:max-w-sm w-full">
          <div className="card bg-teal-300 shadow-lg  w-full h-full rounded-3xl absolute  transform -rotate-6"></div>
          <div className="card bg-gray-500 shadow-lg  w-full h-full rounded-3xl absolute  transform rotate-6"></div>
          <div className="relative w-full rounded-3xl  px-6 py-4 bg-gray-100 shadow-md">
            <label className="block mt-3 text-xl text-gray-700 text-center font-semibold">
              Forgott Your Password
            </label>
            <form className="mt-10">
              <div>
                <label
                  htmlFor="email"
                  className="block text-xs text-left font-semibold text-gray-700 uppercase mb-2"
                >
                  E-mail
                </label>
                <input
                  type="email"
                  placeholder=" E-mail"
                  className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
                />
              </div>
              <div className="mt-7">
                <button className="text-gray-900 bg-teal-300 w-full py-3 rounded-xl text-white shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out transform hover:-translate-x hover:scale-105">
                    Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForgottenPassword;
