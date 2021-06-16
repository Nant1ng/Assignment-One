import React from "react";
import FirebaseConfig from "./FirebaseConfig";

const FBLogout = () => {
  return (
    <>
      <h1>FBLogout</h1>
      <button onClick={() => FirebaseConfig.auth().signOut()}>Sign out</button>
      <a>aaaaa</a>
    </>
  );
};

export default FBLogout;