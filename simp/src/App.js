import logo from "./logo.svg";
import "./App.css";
import { React, useState, useEffect, useReducer } from "react";
import joi from "joi";
import Header from "./Parts/Header";
import Chars from "./Parts/Chars";
import { quotes } from "./Parts/getQuotes";

const initialState = {
  quotes: [],
  liked: [],
  deleted: [],
  view: "",
  sort: { type: "quote", dir: "asc" },
  highlight: { start: -1, hLength: 0 },
};

function reducer(state, action) {
  let args = action.args;
  switch (action.type) {
    case "Initialise":
      args.map((item, index) => {
        item.id = index;
        item.liked = false;
        item.visible = true;
      });
      return { ...state, quotes: args, view: "quotes" };
    case "changeView":
      return { ...state, view: action.args.target.id };
    default:
      throw new Error();
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => dispatch({ type: "Initialise", args: quotes }), []);
  console.log("rendered");
  console.log(state.view);

  if (!state.view) {
    return <>loading...</>;
  }
  return (
    <>
      <div>
        <Header {...state} />
      </div>
      <div>
        <Chars
          quotes={state[state.view]}
          sort={state.sort}
          highlight={state.highlight}
        />
      </div>
    </>
  );
}

export default App;
