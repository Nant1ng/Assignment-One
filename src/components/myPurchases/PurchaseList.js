import React, {useState, useEffect} from "react";
import axios from "axios";
import MyPurchases from "./MyPurchases";

function PurchaseList() {
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
      console.log("lägg till",response.data);
    };
    fetchProducts();
  }, []);
  return (<div>
      {products.map((BuyProduct) => {
          console.log(BuyProduct)
          return (
              <MyPurchases 
              key={BuyProduct.id}
              productid={BuyProduct.id}
              title={BuyProduct.buy_product.Title}
              description={BuyProduct.buy_product.Description}
              price={BuyProduct.buy_product.Price}
              image={BuyProduct.buy_product.Image}
              />
          );
      })}
  </div>);
}

export default PurchaseList;
