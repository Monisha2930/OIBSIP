import React from "react";
import "./Inputs.css";

const Input = (props) => {
  return (
    <div className='input'>
      {props.input}
    </div>
  );
};

export default Input;