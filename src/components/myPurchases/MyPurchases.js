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
      console.log(response.data)
    };
    fetchProducts();
  }, []);

  return (<div>
      {products.map((BuyProduct) => {
          return (
              <div key={BuyProduct.id}>
                  <p>{BuyProduct.buy_product.Title}</p>
                  <p>{BuyProduct.buy_product.Description}</p>
                  <p>{BuyProduct.buy_product.Price}</p>
              </div>
          )
      })}
  </div>);
}

export default MyPurchases;
