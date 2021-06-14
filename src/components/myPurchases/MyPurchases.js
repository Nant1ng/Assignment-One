import React from "react";
import axios from "axios";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  "pk_test_51IxA3vG2wXCCEzqBYUxT9lhsHHUy3PJ95WKhuY2Hu7aG1X0QeFYZBcTGbhWkpAWTELN9ykR6F2wHK36PpGqHV6Vr00HbcxXZiw"
);

function MyPurchases({productid, title, description, image, price}) {
  console.log(productid)
  const handleClick = async (event) => {
    // Get Stripe.js instance
    const stripe = await stripePromise;

    // Call your backend to create the Checkout Session
    // const response = await fetch("/create-checkout-session", {
    //   method: "POST",
    // });
    const response = await axios.post(
      "http://localhost:4242/create-checkout-session", 
      {name:title, price:price}
    );

    const sessionId = await response.data.id;

    // When the customer clicks on the button, redirect them to Checkout.
    const result = await stripe.redirectToCheckout({
      sessionId: sessionId,
    });

    if (result.error) {
      // If `redirectToCheckout` fails due to a browser or network
      // error, display the localized error message to your customer
      // using `result.error.message`.
    }
  };

  return (
    <div className="overflow-hidden">
      <div className="flex justify-center" id={productid}>
        <div className=" max-w-xs bg-white shadow-lg rounded-lg my-10 ">
          <div className="px-4 py-2">
            <h1 className="text-gray-900 font-bold text-3xl uppercase">
              {title}
            </h1>
            <p className="text-gray-600 text-sm mt-1">{description}</p>
          </div>
          <img
            className="h-56 w-full object-cover mt-2"
           // src={`http://localhost:1337${productid.image[0].url}`}
           // src={`https://glacial-coast-99784.herokuapp.com${image[0].url}`}
            alt="Buildings"
          />

          <div className="flex items-center justify-between px-4 py-2 bg-gray-900">
            <h1 className="text-gray-200 font-bold text-xl">${price}</h1>
            <button className="px-3 py-1 bg-gray-200 text-sm text-gray-900 font-semibold rounded">
              Bought
            </button>
            <button
              className="px-3 py-1 bg-gray-200 text-sm text-gray-900 font-semibold rounded"
              role="link"
              onClick={handleClick}
            >
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyPurchases;
