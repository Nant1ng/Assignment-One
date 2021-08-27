import React, { useState, useEffect, useContext } from "react";
import { db } from "../../Firebase-Test/FirebaseConfig";
import { AuthContext } from "../../Firebase-Test/Auth";
import MyPurchases from "./MyPurchases";

function PurchaseList() {
  const [products, setProducts] = useState([]);
  const { currentUser } = useContext(AuthContext);

  let userid = null;

  if (currentUser !== null) {
    userid = currentUser.uid;
  }

  useEffect(() => {
    const getProducts = [];
    const subscriber = db
      .collection("buy")
      .where("userID", "==", userid)
      .onSnapshot((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          getProducts.push({
            ...doc.data(), //spread operator
            key: doc.id, // `id` given to us by Firebase
          });
        });
        setProducts(getProducts);
      });

    // return cleanup function
    return () => subscriber();
  }, []);

  return (
    <>
      {products.map((product) => {
        return (
          <MyPurchases
            key={product.key}
            id={product.key}
            title={product.title}
            image={product.imgUrl}
            price={product.price}
          ></MyPurchases>
        );
      })}
    </>
  );
}

export default PurchaseList;
