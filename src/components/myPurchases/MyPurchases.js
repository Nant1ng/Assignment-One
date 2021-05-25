import React, { useState, useEffect } from "react";
import axios from "axios";


function MyPurchases() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const userid = localStorage.getItem("UserId");
    const jwt = localStorage.getItem("JWT");

    const fetchProducts = async () => {
      const response = await axios.get(
        `http://localhost:1337/buy-checkouts?_where[1][user.id]=${userid}`,
        {
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        }
      );
      setProducts(response.data);
      console.log(response.data);
    };
    fetchProducts();
  }, []);

  return (
    <div className="overflow-hidden">
      {products.map((BuyProduct) => {
        return (
          <div className="flex justify-center " key={BuyProduct.id}>
            <div className=" max-w-xs bg-white shadow-lg rounded-lg my-10 ">
              <div className="px-4 py-2">
                <h1 className="text-gray-900 font-bold text-3xl uppercase">
                  {BuyProduct.buy_product.Title}
                </h1>
                <p className="text-gray-600 text-sm mt-1">
                  {BuyProduct.buy_product.Description}
                </p>
              </div>
              <img
                className="h-56 w-full object-cover mt-2"
                src={`http://localhost:1337${BuyProduct.buy_product.Image[0].url}`}
                alt="Buildings"
              />
              <div className="flex items-center justify-between px-4 py-2 bg-gray-900">
                <h1 className="text-gray-200 font-bold text-xl">
                  ${BuyProduct.buy_product.Price}
                </h1>
                <button className="px-3 py-1 bg-gray-200 text-sm text-gray-900 font-semibold rounded">
                  Bought
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default MyPurchases;
