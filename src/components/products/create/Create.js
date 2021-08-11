import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

function Create() {
  const [EnteredTitle, setTitle] = useState("");
  const [EnteredDescription, setDescription] = useState("");
  const [EnteredPrice, setPrice] = useState("");
  const [EnteredImage, setImage] = useState("");

  const jwt = localStorage.getItem("JWT");
  const history = useHistory();

  function titleChangeHandler(event) {
    setTitle(event.target.value);
  }

  function descriptionChangeHandler(event) {
    setDescription(event.target.value);
  }

  function priceChangeHandler(event) {
    setPrice(event.target.value);
  }

  function imageChangeHandler(event) {
    setImage(event.target.files[0]);
  }

  function submitHandler(event) {
    event.preventDefault();

    axios
      .post(
        "https://glacial-coast-99784.herokuapp.com/buy-products",
        // "http://localhost:1337/buy-products",
        {
          Title: EnteredTitle,
          Description: EnteredDescription,
          Price: EnteredPrice,
        },
        {
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        }
      )
      .then((response) => {
        const data = new FormData();

        data.append("files", EnteredImage);
        data.append("ref", "buy-products");
        data.append("refId", response.data.id);
        data.append("field", "Image");

        // axios.post(url[, data[, config]])
        axios
          .post("https://glacial-coast-99784.herokuapp.com/upload", data, {
            // .post("http://localhost:1337/upload", data, {
            headers: {
              Authorization: `Bearer ${jwt}`,
            },
          })
          .then(() => history.push("/"))
          .catch((error) => console.log(error));
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <>
      <div>
        <h2 class="text-gray-800 text-3xl font-semibold">Welcome Admin </h2>
      </div>
      <form onSubmit={submitHandler}>
        <div class="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
          <div class="relative py-3 sm:max-w-xl sm:mx-auto">
            <div class="relative px-4 py-10 bg-white mx-8 md:mx-0 shadow rounded-3xl sm:p-10">
              <div class="max-w-md mx-auto">
                <div class="flex items-center space-x-5">
                  <div class="h-14 w-14 bg-teal-300 rounded-full flex flex-shrink-0 justify-center items-center text-teal-500 text-2xl font-mono">
                    +
                  </div>
                  <div class="block pl-2 font-semibold text-xl self-start text-gray-700">
                    <h2 class="leading-relaxed">Create an product</h2>
                    <p class="text-sm text-gray-500 font-normal leading-relaxed">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    </p>
                  </div>
                </div>
                <div class="divide-y divide-gray-200">
                  <div class="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                    <div class="flex flex-col">
                      <label class="leading-loose">Title</label>
                      <input
                        type="text"
                        name="title"
                        value={EnteredTitle}
                        onChange={titleChangeHandler}
                        class="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                        placeholder="Title"
                      />
                    </div>
                    <div class="flex flex-col">
                      <label class="leading-loose">Description</label>
                      <input
                        type="text"
                        name="description"
                        value={EnteredDescription}
                        onChange={descriptionChangeHandler}
                        class="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                        placeholder="Description"
                      />
                    </div>
                    <div class="flex flex-col">
                      <label class="leading-loose">Price</label>
                      <input
                        type="number"
                        name="price"
                        value={EnteredPrice}
                        onChange={priceChangeHandler}
                        class="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                        placeholder="Price"
                      />
                    </div>
                    <div class="flex flex-col">
                      <label class="leading-loose">Image</label>
                      <input
                        type="file"
                        name="file"
                        onChange={imageChangeHandler}
                        class="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                      />
                    </div>
                  </div>
                  <div class="pt-4 flex items-center space-x-4">
                    <button
                      type="submit"
                      class="bg-teal-500 flex justify-center items-center w-full text-white px-4 py-3 rounded-md focus:outline-none"
                    >
                      Create
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default Create;
