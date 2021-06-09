import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";

function CardList() {
  const [products, setProducts] = useState([]);
  const [loadPage, setLoadPage] = useState(1);

  useEffect(
    () => {
      const fetchProducts = async () => {
        const response = await axios.get(
          // `http://localhost:1337/buy-products?_limit=${loadPage}`
          `https://glacial-coast-99784.herokuapp.com/buy-products?_limit=${loadPage}`
        );
        console.log(response);

        setProducts(response.data);
      };
      fetchProducts();
    },
    [loadPage],
    [products]
  );

  function showMore() {
    console.log("length of product array", products.length);

    let moreProducts = loadPage + 1;
    console.log("load more", loadPage);
    setLoadPage(moreProducts);
    console.log(loadPage);
  }

  function showLess() {
    let lessProducts = loadPage - 1;
    console.log("load less", loadPage);
    setLoadPage(lessProducts);
    console.log(loadPage);
  }

  return (
    <div>
      {products.map((BuyProduct) => {
        return (
          <Card
            key={BuyProduct.id}
            productid={BuyProduct.id}
            image={BuyProduct.Image}
            title={BuyProduct.Title}
            desc={BuyProduct.Description}
            price={BuyProduct.Price}
          />
        );
      })}
      <button onClick={showMore}>Load more</button>
      <button onClick={showLess}>Show less</button>)
    </div>
  );
}

export default CardList;
