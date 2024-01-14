
import React, { useReducer } from "react";
import "./style.css";
import Button from "./components/Button";
import Input from "./components/Inputs";
import EqualButton from "./components/Eqbtn";

const calculatorReducer = (state, action) => {
  switch (action.type) {
    case 'addtoInputNum':
      return { ...state, input: state.input + action.param };
    case 'addtoInputOpr':
      return { ...state, input: state.input + action.param };
    case 'handleRoot':
      return { ...state, input: Math.sqrt(parseFloat(state.input)) || '' };
    case 'handleCube':
      return { ...state, input: Math.pow(parseFloat(state.input), 3).toString() || '' };
    case 'handleSquare':
      return { ...state, input: Math.pow(parseFloat(state.input), 2).toString() || '' };
    case 'handleClear':
      return { ...state, input: '' };
    case 'handleEqual':
      try {
        return { ...state, input: eval(state.input).toString() || '' };
      } catch (error) {
        return { ...state, input: 'Error' };
      }
    case 'handlePercentage':
      return { ...state, input: (parseFloat(state.input) / 100).toString() || '' };
    case 'handleBackspace':
      return { ...state, input: state.input.slice(0, -1) };
    case 'toggleNegative':
      return { ...state, input: state.input.startsWith('-') ? state.input.slice(1) : `-${state.input}` };
    default:
      return state;
  }
};

const initialState = {
  input: "",
};

export default function App() {
  const [state, dispatch] = useReducer(calculatorReducer, initialState);

  return (
    <div className="App">
      <h1>Calculator</h1>
      <div className="calc-wrapper">
        <Input input={state.input}></Input>
        <div className="row">
          <Button onClick={() => dispatch({ type: "addtoInputNum", param: "7" })}>7</Button>
          <Button onClick={() => dispatch({ type: "addtoInputNum", param: "8" })}>8</Button>
          <Button onClick={() => dispatch({ type: "addtoInputNum", param: "9" })}>9</Button>
          <Button onClick={() => dispatch({ type: "addtoInputOpr", param: "/" })}>/</Button>
          <Button onClick={() => dispatch({ type: "handleRoot" })}>√</Button>
        </div>
        <div className="row">
          <Button onClick={() => dispatch({ type: "addtoInputNum", param: "4" })}>4</Button>
          <Button onClick={() => dispatch({ type: "addtoInputNum", param: "5" })}>5</Button>
          <Button onClick={() => dispatch({ type: "addtoInputNum", param: "6" })}>6</Button>
          <Button onClick={() => dispatch({ type: "addtoInputOpr", param: "*" })}>X</Button>
          <Button onClick={() => dispatch({ type: "handleCube" })}>x³</Button>
        </div>
        <div className="row">
          <Button onClick={() => dispatch({ type: "addtoInputNum", param: "1" })}>1</Button>
          <Button onClick={() => dispatch({ type: "addtoInputNum", param: "2" })}>2</Button>
          <Button onClick={() => dispatch({ type: "addtoInputNum", param: "3" })}>3</Button>
          <Button onClick={() => dispatch({ type: "addtoInputOpr", param: "+" })}>+</Button>
          <Button onClick={() => dispatch({ type: "handleSquare" })}>x²</Button>
        </div>
        <div className="row">
          <Button onClick={() => dispatch({ type: "addtoInputNum", param: "." })}>.</Button>
          <Button onClick={() => dispatch({ type: "addtoInputNum", param: "0" })}>0</Button>
          <Button onClick={() => dispatch({ type: "addtoInputNum", param: "00" })}>00</Button>
          <Button onClick={() => dispatch({ type: "addtoInputNum", param: "-" })}>-</Button>
          <Button onClick={() => dispatch({ type: "handleClear" })}>C</Button>
        </div>
        <div className="row">
          <Button onClick={() => dispatch({ type: "handlePercentage" })}>%</Button>
          <Button onClick={() => dispatch({ type: "handleBackspace" })}>←</Button>
          <Button onClick={() => dispatch({ type: "toggleNegative" })}>+/-</Button>
          <EqualButton onClick={() => dispatch({ type: "handleEqual" })}>=</EqualButton>
        </div>
      </div>
    </div>
  );
}

