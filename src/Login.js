import React from "react";
import Change from "./Change";
import { useStateValue } from "./StateProvider";

const LoginV1 = (props) => {
  const [state, dispatch] = useStateValue();
  const loginToApp = () => {
    console.log(state);
    dispatch({
      type: "SET_USER",
      user: "Abbas Hussain",
    });
  };

  return (
    <div>
      <h1>i'm the Login Page</h1>
      <button onClick={loginToApp}>Login</button>
      <Change />
    </div>
  );
};

export default LoginV1;
