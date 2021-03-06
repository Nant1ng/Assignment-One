import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

// import useForm from "../formValidation/useForm";
// import validate from "../formValidation/validation";
/* Måste göra en funktion som anropar två funktioner för att få onChange att göra två saker. */
function Register() {
  const history = useHistory();

  const [EnteredName, setName] = useState("");
  const [EnteredEmail, setEmail] = useState("");
  const [EnteredPassword, setPassword] = useState("");

  function nameChangeHandler(event) {
    setName(event.target.value);
  }

  function emailChangeHandler(event) {
    setEmail(event.target.value);
  }

  function passwordChangeHandler(event) {
    setPassword(event.target.value);
  }

  function submitHandler(event) {
    event.preventDefault();

    axios
     // .post("http://localhost:1337/auth/local/register", {
        .post("https://glacial-coast-99784.herokuapp.com/auth/local/register", {
        username: EnteredName,
        email: EnteredEmail,
        password: EnteredPassword,
      })
      .then((response) => {
        if (response.status === 200) {
          history.push("/");
        }
      })
      .catch((error) => {
        console.log("Error message: ", error);
      });
  }
  //  Form Validation funkar inte exakt så som jag vill... 
  //  const { handleChange, handleSubmit, values, errors } = useForm(
  //   submit,
  //   validate
  // );

  // function submit() {
  //   console.log("Submitted Succesfully")
  // }

  return (
    <div className="font-sans">
      <div className="relative min-h-screen flex flex-col sm:justify-center items-center">
        <div className="relative sm:max-w-sm w-full">
          <div className="card bg-teal-300 shadow-lg  w-full h-full rounded-3xl absolute  transform -rotate-6"></div>
          <div className="card bg-gray-500 shadow-lg  w-full h-full rounded-3xl absolute  transform rotate-6"></div>
          <div className="relative w-full rounded-3xl  px-6 py-4 bg-gray-100 shadow-md">
            <label className="block mt-3 text-xl text-gray-700 text-center font-semibold">
              Sign Up
            </label>
            <form className="mt-10" onSubmit={submitHandler} noValidate>
              <div>
                <input
                  type="Fullname"
                  placeholder=" Fullname"
                  className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
                />
              </div>

              <div className="mt-3">
                <input
                  type="email"
                  name="email"
                  value={(EnteredEmail)}
                  onChange={emailChangeHandler}
                  placeholder=" Email"
                  className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
                />
                {/* {errors.email && <p className="text-red-600">{errors.email}</p>} */}
              </div>

              <div className="mt-3">
                <input
                  type="username"
                  value={EnteredName}
                  onChange={nameChangeHandler}
                  placeholder=" Username"
                  className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
                />
              </div>

              <div className="mt-7">
                <input
                name="password"
                  type="password"
                  value={EnteredPassword}
                  onChange={passwordChangeHandler}
                  placeholder=" Password"
                  className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
                />
              </div>
              {/* {errors.password && <p className="text-red-600">{errors.password}</p>} */}
              <div className="1">
                <input
                  type="password"
                  placeholder=" Confirm Password"
                  className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
                />
              </div>

              <div className="mt-7 flex">
                <label
                  htmlFor="remember_me"
                  className="inline-flex items-center w-full cursor-pointer"
                ></label>
              </div>

              <div className="mt-7">
                <button
                  type="submit"
                  className="text-gray-900 bg-teal-300 w-full py-3 rounded-xl text-white shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out transform hover:-translate-x hover:scale-105"
                >
                  Create Account
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
