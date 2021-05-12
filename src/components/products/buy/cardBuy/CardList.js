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
          `http://localhost:1337/products?_limit=${loadPage}`
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
      {products.map((product) => {
        return (
          <Card
            key={product.id}
            image={product.Image}
            title={product.name}
            desc={product.Descriptions}
            price={product.Price}
          />
        );
      })}
      {products.length > loadPage || products.length === loadPage ? (
        <button onClick={showMore}>Load more</button>
      ) : (
        <button onClick={showLess}>Show less</button>
      )}
      )
    </div>
  );
}

export default CardList;
