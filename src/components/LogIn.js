import React, { useState } from "react";

function Login() {
  return (
    <div class="font-sans">
      <div class="relative min-h-screen flex flex-col sm:justify-center items-center">
        <div class="relative sm:max-w-sm w-full">
          <div class="card bg-teal-300 shadow-lg  w-full h-full rounded-3xl absolute  transform -rotate-6"></div>
          <div class="card bg-gray-500 shadow-lg  w-full h-full rounded-3xl absolute  transform rotate-6"></div>
          <div class="relative w-full rounded-3xl  px-6 py-4 bg-gray-100 shadow-md">
            <label
              for=""
              class="block mt-3 text-xl text-gray-700 text-center font-semibold"
            >
              Log in
            </label>
            <form method="#" action="#" class="mt-10">
              <div>
                <input
                  type="username"
                  placeholder=" Username"
                  class="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
                />
              </div>

              <div class="mt-7">
                <input
                  type="password"
                  placeholder=" Password"
                  class="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
                />
              </div>

              <div class="mt-7 flex">
                <label
                  for="remember_me"
                  class="inline-flex items-center w-full cursor-pointer"
                >
                  <input
                    id="remember_me"
                    type="checkbox"
                    class="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    name="remember"
                  />
                  <span class="ml-2 text-sm text-gray-600">Remember me</span>
                </label>

                <div class="w-full text-right">
                  <a
                    class="underline text-sm text-gray-600 hover:text-gray-900"
                    href="#"
                  >
                    Forgot Your Password?
                  </a>
                </div>
              </div>

              <div class="mt-7">
                <button class="text-gray-900 bg-teal-300 w-full py-3 rounded-xl text-white shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out transform hover:-translate-x hover:scale-105">
                  Log in
                </button>
              </div>

              <div class="flex mt-7 items-center text-center">
                <hr class="border-gray-300 border-1 w-full rounded-md" />
                <label class="block font-medium text-sm text-gray-900 w-full">
                  Sign up
                </label>
                <hr class="border-gray-300 border-1 w-full rounded-md" />
              </div>

              <div class="flex mt-7 justify-center text-center w-full">
                <button class="bg-teal-300 border-none px-4 py-2 rounded-xl cursor-pointer text-gray-900 shadow-xl hover:shadow-inner transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
