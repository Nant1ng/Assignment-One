import React from "react";

import { Link } from "react-router-dom";

function Checkout() {
  return (
    <div class="leading-loose flex justify-center pt-4">
      <form class="max-w-xl m-2 p-5 bg-white rounded shadow-xl">
        <p class="text-gray-800 font-medium">Customer Information</p>
        <div class="">
          <label class="block text-left text-sm text-gray-00" for="cus_name">
            Name
          </label>
          <input
            class="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
            placeholder="Your Name"
          />
        </div>
        <div class="mt-2">
          <label class="block text-left text-sm text-gray-600" for="cus_email">
            Email
          </label>
          <input
            class="w-full px-5  py-4 text-gray-700 bg-gray-200 rounded"
            placeholder="Your Email"
            aria-label="Email"
          />
        </div>
        <div class="mt-2">
          <label class=" block text-left text-sm text-gray-600" for="cus_email">
            Address
          </label>
          <input
            class="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
            placeholder="Street"
            aria-label="Email"
          />
        </div>
        <div class="mt-2">
          <label class=" text-sm text-left block text-gray-600" for="cus_email">
            City
          </label>
          <input
            class="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
            placeholder="City"
            aria-label="Email"
          />
        </div>
        <div class="inline-block mt-2 w-1/2 pr-1">
          <label class="block text-sm text-gray-600" for="cus_email">
            Country
          </label>
          <input
            class="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
            placeholder="Country"
            aria-label="Email"
          />
        </div>
        <div class="inline-block mt-2 -mx-1 pl-1 w-1/2">
          <label class="block text-sm text-gray-600" for="cus_email">
            Zip
          </label>
          <input
            class="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
            placeholder="Zip"
            aria-label="Email"
          />
        </div>
        <p class="mt-4 text-gray-800 font-medium">Payment information</p>
        <div class="">
          <input
            class="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
            placeholder="Card Number"
          />
        </div>
        <div class="inline-block mt-2 w-1/2 pr-1">
          <input
            class="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
            placeholder="MM/YY"
          />
        </div>
        <div class="inline-block mt-2 -mx-1 pl-1 w-1/2">
          <input
            class="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
            placeholder="CVC"
          />
        </div>
        <div class="mt-4">
            {/*Bara för nu läget*/}
          <Link to="/">
            <button
              class="px-4 py-1 tracking-wider bg-teal-300 rounded"
              type="submit"
            >
              Pay
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Checkout;
