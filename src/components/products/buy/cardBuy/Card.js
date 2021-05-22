import React, { useState } from "react";
import axios from "axios";
import Modal from "react-modal";

function Card({ productid, title, price, desc, image }) {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [EnteredName, setName] = useState("");
  const [EnteredEmail, setEmail] = useState("");
  const [EnteredAddress, setAddress] = useState("");
  const [EnteredCity, setCity] = useState("");
  const [EnteredCountry, setCountry] = useState("");
  const [EnteredZip, setZip] = useState("");

  const userid = localStorage.getItem("UserId");
  const jwt = localStorage.getItem("JWT");

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

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  function nameChangeHandler(event) {
    setName(event.target.value);
  }

  function emailChangeHandler(event) {
    setEmail(event.target.value);
  }

  function addressChangeHandler(event) {
    setAddress(event.target.value);
  }

  function cityChangeHandler(event) {
    setCity(event.target.value);
  }

  function countryChangeHandler(event) {
    setCountry(event.target.value);
  }

  function zipChangeHandler(event) {
    setZip(event.target.value);
  }

  function submitHandler(event) {
    console.log("HHHHHHHAAAAAAAAYYYYYYYE");
    event.preventDefault();

    axios
      .post("http://localhost:1337/buy-checkout", {
        Name: EnteredName,
        Email: EnteredEmail,
        Address: EnteredAddress,
        City: EnteredCity,
        Country: EnteredCountry,
        Zip: EnteredZip,
        user: userid,
        buy_product: productid,
      })
      .then((res) => {
        if (res.status === 200) {
          console.log(res);
        }
      })
      .catch((error) => {
        console.log("Error message: ", error);
      });
  }

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
              <button
                className="bg-teal-300 justify-center text-center rounded-lg shadow px-10 py-2 flex items-center"
                onClick={openModal}
              >
                Buy
              </button>
              <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
              >
                <button onClick={closeModal}>X</button>
                <div className="leading-loose flex justify-center pt-4">
                  <form
                    className="max-w-xl m-2 p-5 bg-white rounded shadow-xl"
                    onSubmit={submitHandler}
                  >
                    <p className="text-gray-800 font-medium">
                      Customer Information
                    </p>
                    <div className="">
                      <label className="block text-left text-sm text-gray-00">
                        Name
                      </label>
                      <input
                        className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
                        placeholder="Your Name"
                        value={EnteredName}
                        onChange={nameChangeHandler}
                      />
                    </div>
                    <div className="mt-2">
                      <label className="block text-left text-sm text-gray-600">
                        Email
                      </label>
                      <input
                        className="w-full px-5  py-4 text-gray-700 bg-gray-200 rounded"
                        placeholder="Your Email"
                        aria-label="Email"
                        value={EnteredEmail}
                        onChange={emailChangeHandler}
                      />
                    </div>
                    <div className="mt-2">
                      <label className=" block text-left text-sm text-gray-600">
                        Address
                      </label>
                      <input
                        className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
                        placeholder="Street"
                        aria-label="Address"
                        value={EnteredAddress}
                        onChange={addressChangeHandler}
                      />
                    </div>
                    <div className="mt-2">
                      <label className=" text-sm text-left block text-gray-600">
                        City
                      </label>
                      <input
                        className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
                        placeholder="City"
                        aria-label="City"
                        value={EnteredCity}
                        onChange={cityChangeHandler}
                      />
                    </div>
                    <div className="inline-block mt-2 w-1/2 pr-1">
                      <label className="block text-sm text-gray-600">
                        Country
                      </label>
                      <input
                        className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
                        placeholder="Country"
                        aria-label="Country"
                        value={EnteredCountry}
                        onChange={countryChangeHandler}
                      />
                    </div>
                    <div className="inline-block mt-2 -mx-1 pl-1 w-1/2">
                      <label className="block text-sm text-gray-600">Zip</label>
                      <input
                        className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
                        placeholder="Zip"
                        aria-label="Zip"
                        value={EnteredZip}
                        onChange={zipChangeHandler}
                      />
                    </div>
                    <div className="mt-4">
                      <button
                        className="px-4 py-1 tracking-wider bg-teal-300 rounded"
                        type="submit"
                      >
                        Pay
                      </button>
                    </div>
                  </form>
                </div>
              </Modal>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
