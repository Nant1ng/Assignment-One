import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";

function Login() {
  const history = useHistory();

  const [EnteredEmail, setEmail] = useState("");
  const [EnteredPassword, setPassword] = useState("");
  const [JWT, setJWT] = useState("");
  const [UserId, setUserId] = useState("");

  function emailChangeHandler(event) {
    setEmail(event.target.value);
  }

  function passwordChangeHandler(event) {
    setPassword(event.target.value);
  }

  useEffect(
    () => {
      const jwt = localStorage.getItem("JWT");
      setJWT(jwt);

      const userid = localStorage.getItem("UserId");
      setUserId(userid);
    },
    [JWT],
    [UserId]
  );

  async function submitHandler(event) {
    event.preventDefault();

    await axios
      .post("http://localhost:1337/auth/local", {
        identifier: EnteredEmail,
        password: EnteredPassword,
      })
      .then((response) => {
        localStorage.setItem("JWT", response.data.jwt);
        localStorage.setItem("UserId", response.data.user.id);
        history.push("/");
        window.location.reload();
      })
      .catch((error) => {
        console.log("Error Message: ", error);
      });
  }

  return (
    <div className="font-sans">
      <div className="relative min-h-screen flex flex-col sm:justify-center items-center">
        <div className="relative sm:max-w-sm w-full">
          <div className="card bg-teal-300 shadow-lg  w-full h-full rounded-3xl absolute  transform -rotate-6"></div>
          <div className="card bg-gray-500 shadow-lg  w-full h-full rounded-3xl absolute  transform rotate-6"></div>
          <div className="relative w-full rounded-3xl  px-6 py-4 bg-gray-100 shadow-md">
            <label className="block mt-3 text-xl text-gray-700 text-center font-semibold">
              Log in
            </label>
            <form className="mt-10" onSubmit={submitHandler}>
              <div>
                <input
                  type="username"
                  value={EnteredEmail}
                  onChange={emailChangeHandler}
                  placeholder=" Username"
                  className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
                />
              </div>

              <div className="mt-7">
                <input
                  type="password"
                  value={EnteredPassword}
                  onChange={passwordChangeHandler}
                  placeholder=" Password"
                  className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
                />
              </div>

              <div className="mt-7 flex">
                <label
                  htmlFor="remember_me"
                  className="inline-flex items-center w-full cursor-pointer"
                >
                  <input
                    id="remember_me"
                    type="checkbox"
                    className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    name="remember"
                  />
                  <span className="ml-2 text-sm text-gray-600">
                    Remember me
                  </span>
                </label>

                <div className="w-full text-right">
                  <Link
                    className="underline text-sm text-gray-600 hover:text-gray-900"
                    to="/Forgotten-Password"
                  >
                    Forgot Your Password?
                  </Link>
                </div>
              </div>

              <div className="mt-7">
                <button className="text-gray-900 bg-teal-300 w-full py-3 rounded-xl text-white shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out transform hover:-translate-x hover:scale-105">
                  Log in
                </button>
              </div>

              <div className="flex mt-7 items-center text-center">
                <hr className="border-gray-300 border-1 w-full rounded-md" />
                <label className="block font-medium text-sm text-gray-900 w-full">
                  Sign up
                </label>
                <hr className="border-gray-300 border-1 w-full rounded-md" />
              </div>

              <div className="flex mt-7 justify-center text-center w-full">
                <Link
                  className="bg-teal-300 border-none px-4 py-2 rounded-xl cursor-pointer text-gray-900 shadow-xl hover:shadow-inner transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105"
                  to="/Register"
                >
                  Register
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
