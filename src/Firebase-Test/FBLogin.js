import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import FirebaseConfig from "./FirebaseConfig";
import { AuthContext } from "./Auth.js";
import SMAuth from "./SocialMedia/SMAuth";
import { facebookProvider } from "./SocialMedia/authMethod";
import { githubProvider } from "./SocialMedia/authMethod";
import { googleProvider } from "./SocialMedia/authMethod";

const FBLogin = ({ history }) => {
  const handleLogin = useCallback(
    async (event) => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await FirebaseConfig.auth().signInWithEmailAndPassword(
          email.value,
          password.value
        );
        history.push("/FBLogut");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/" />;
  }

  const handleOnClick = async (provider) => {
    const response = await SMAuth(provider);
    console.log(response);
  };

  return (
    <div>
      <h1>Log in</h1>
      <form onSubmit={handleLogin}>
        <label>
          Email
          <input name="email" type="email" placeholder="Email" />
        </label>
        <label>
          Password
          <input name="password" type="password" placeholder="Password" />
        </label>
        <button type="submit">Log in</button>
      </form>
      <br />
      <button onClick={() => handleOnClick(facebookProvider)}>Facebook</button>
      <button onClick={() => handleOnClick(githubProvider)}>Github</button>
      <button onClick={() => handleOnClick(googleProvider)}>Google</button>
    </div>
  );
};

export default withRouter(FBLogin);
