import React, { useCallback } from "react";
import { withRouter } from "react-router";
import FirebaseConfig, { db } from "./FirebaseConfig";
import dotenv from "dotenv"

dotenv.config();

const FBSignUp = ({ history }) => {
  const handleSignUp = useCallback(
    async (event) => {
      event.preventDefault();
      const noImg = "no-image.png";
      const { email, password, name, phonenumber } = event.target.elements;
      try {
        await FirebaseConfig.auth()
          .createUserWithEmailAndPassword(email.value, password.value)
          .then((cred) => {
            const UserId = cred.user.uid;
            return db
              .collection("users")
              .doc(cred.user.uid)
              .set({
                name: name.value,
                email: email.value,
                phonenumber: phonenumber.value,
                imageUrl: `https://firebasestorage.googleapis.com/v0/b/${process.env.React_App_Firebase_Storage_Bucket}/o/${noImg}?alt=media`,
                UserId,
              });
          });
        history.push("/");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  return (
    <div>
      <h1>Sign up</h1>
      <form onSubmit={handleSignUp}>
        <label>
          Email
          <input name="email" type="email" placeholder="Email" />
        </label>
        <label>
          Password
          <input name="password" type="password" placeholder="Password" />
        </label>
        <label>
          Name
          <input name="name" type="name" placeholder="Name" />
        </label>
        <label>
          Phone number
          <input name="phonenumber" type="number" placeholder="Phone number" />
        </label>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default withRouter(FBSignUp);
