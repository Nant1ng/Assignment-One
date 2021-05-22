import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const jwt = localStorage.getItem("JWT");
  let isLoggedIn = false;

  if (jwt !== null && jwt !== "") {
    isLoggedIn = true;
  }

function Header() {
  // const [JWT, setJWT] = useState(null);

  // useEffect(() => {
  //   const jwt = localStorage.getItem("Token")
  //   setJWT(jwt)
    
  // }, [JWT])

  return (
    <>
      <header className="lg:px-16 px-6 bg-gray-500 flex flex-wrap items-center lg:py-0 py-2">
        <div className="flex-1 flex justify-between items-center">
          <Link to="/">
            <svg
              height="36"
              viewBox="0 0 512 512"
              width="36"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="m498.195312 222.695312c-.011718-.011718-.023437-.023437-.035156-.035156l-208.855468-208.847656c-8.902344-8.90625-20.738282-13.8125-33.328126-13.8125-12.589843 0-24.425781 4.902344-33.332031 13.808594l-208.746093 208.742187c-.070313.070313-.144532.144531-.210938.214844-18.28125 18.386719-18.25 48.21875.09375 66.558594 8.375 8.382812 19.4375 13.238281 31.269531 13.746093.480469.046876.96875.070313 1.457031.070313h8.320313v153.699219c0 30.414062 24.75 55.160156 55.167969 55.160156h81.710937c8.285157 0 15-6.714844 15-15v-120.5c0-13.878906 11.292969-25.167969 25.171875-25.167969h48.195313c13.878906 0 25.167969 11.289063 25.167969 25.167969v120.5c0 8.285156 6.71875 15 15 15h81.710937c30.421875 0 55.167969-24.746094 55.167969-55.160156v-153.699219h7.71875c12.585937 0 24.421875-4.902344 33.332031-13.808594 18.359375-18.371093 18.371094-48.253906.023437-66.636719zm0 0"
                fill="#1de8f1"
              />
              <path
                d="m498.195312 222.695312c-.011718-.011718-.023437-.023437-.035156-.035156l-208.855468-208.847656c-8.902344-8.90625-20.738282-13.8125-33.328126-13.8125h-.003906v351.332031h24.101563c13.878906 0 25.167969 11.289063 25.167969 25.167969v120.5c0 8.285156 6.71875 15 15 15h81.710937c30.421875 0 55.167969-24.746094 55.167969-55.160156v-153.699219h7.71875c12.585937 0 24.421875-4.902344 33.332031-13.808594 18.359375-18.371093 18.371094-48.253906.023437-66.636719zm0 0"
                fill="#00c7ce"
              />
            </svg>
          </Link>
        </div>
        <label htmlFor="menu-toggle" className="pointer-cursor lg:hidden block">
          <svg
            className="fill-current text-teal-300"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
          >
            <title>menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
          </svg>
        </label>
        <input className="hidden" type="checkbox" id="menu-toggle" />

        <div
          className="hidden lg:flex lg:items-center lg:w-auto w-full"
          id="menu"
        >
          <nav>
            <ul className="lg:flex items-center justify-between text-base text-white pt-4 lg:pt-0">
              <li>
                <Link
                  className="lg:p-4 py-3 px-0 block border-b-2 border-transparent text-teal-200 hover:border-teal-200"
                  to="/Buy"
                >
                  Buy
                </Link>
              </li>
              <li>
                <Link
                  className="lg:p-4 py-3 px-0 block border-b-2 border-transparent text-teal-200 hover:border-teal-200"
                  to="/Rent"
                >
                  Rent
                </Link>
              </li>
              {isLoggedIn ? (
                <li>
                  <Link
                    className="lg:p-4 py-3 px-0 block border-b-2 border-transparent text-teal-200 hover:border-teal-200"
                    to="/Log-out"
                  >
                    Log out
                  </Link>
                </li>
              ) : (
                <>
                  <li>
                    <Link
                      className="lg:p-4 py-3 px-0 block border-b-2 border-transparent text-teal-200 hover:border-teal-200"
                      to="/Log-in"
                    >
                      Log in
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="lg:p-4 py-3 px-0 block border-b-2 border-transparent text-teal-200 hover:border-teal-200"
                      to="/Register"
                    >
                      Register
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;
