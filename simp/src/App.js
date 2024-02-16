import logo from "./logo.svg";
import "./App.css";
import { React, useState, useEffect, useReducer } from "react";
import joi from "joi";
import Header from "./Parts/Header";
import Chars from "./Parts/Chars";
import { quotes } from "./Parts/getQuotes";

const initialState = { quotes: [], liked: [], deleted: [], view: "" };

function reducer(state, action) {
  switch (action.type) {
    case "Initialise":
      return { ...state, quotes: action.args };
    case "changeView":
      return { ...state, view: action.args.target.id };
    default:
      throw new Error();
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => dispatch({ type: "Initialise", args: quotes }), []);

  return (
    <>
      <div>
        <Header />
      </div>
      <div>
        <Chars />
      </div>
    </>
  );
}

export default App;
