import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";

function CardList() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get("http://localhost:1337/products");
      console.log(response);

      setProducts(response.data);
    };
    fetchProducts();
  }, []);

  return (
    <div>
      {products.map((product) => {
        return (
          <Card
            image={product.Image}
            title={product.name}
            desc={product.Descriptions}
            price={product.Price}
          />
        );
      })}
    </div>
  );
}

export default CardList;
