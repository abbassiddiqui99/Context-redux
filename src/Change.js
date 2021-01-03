import React from "react";
import { useStateValue } from "./StateProvider";

const Change = () => {
  const [state, dispatch] = useStateValue();
  const changeToApp = () => {
    console.log(state);
    dispatch({
      type: "CHANGE_NAME",
      user: "Ammad Hussain",
    });
  };
  return (
    <div>
      <h1>i'm the Change Page</h1>
      <button onClick={changeToApp}>Change</button>
    </div>
  );
};

export default Change;
