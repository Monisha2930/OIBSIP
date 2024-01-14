import React from "react";
import "./Eqbtn.css";

const EqualButton = (props) => {
  return (
    <div
      className="equal-btn"
      onClick={props.onClick}
    >
      {props.children}
    </div>
  );
};
export default EqualButton;
