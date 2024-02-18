import logo from "./logo.svg";
import "./App.css";
import { React, useState, useEffect, useReducer } from "react";
import joi from "joi";
import Header from "./Parts/Header";
import Chars from "./Parts/Chars";
import { quotes } from "./Parts/getQuotes";

const initialState = {
  all: [],
  quotes: [],
  liked: [],
  deleted: [],
  view: "",
  sort: { type: "quote", dir: "asc" },
  highlight: "",
};

function reducer(state, action) {
  let args = action.args;
  let all = [...state.all];
  switch (action.type) {
    case "Initialise":
      args.map((item, idx) => {
        item.id = idx;
      });
      return { ...state, all: args, quotes: args, view: "quotes" };

    case "changeSort":
      let el = args.target;
      return {
        ...state,
        sort: { ...state.sort, [el.id]: el.value },
      };

    case "changeView":
      return { ...state, view: args.target.id };

    case "toggleButtons":
      let type = args.event.target.id;
      let idx = all.findIndex((item) => {
        return item.id === args.id;
      });
      all[idx][type] = !all[idx][type];
      return filterViews();

    case "search":
      let str = args.target.value;
      return { ...filterViews(), highlight: str };

    default:
      throw new Error();
  }

  function filterViews() {
    let quotes = all.filter((item) => {
      return !item.deleted;
    });
    let liked = quotes.filter((item) => {
      return item.liked;
    });
    let deleted = all.filter((item) => {
      return item.deleted;
    });
    return { ...state, quotes, liked, deleted };
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => dispatch({ type: "Initialise", args: quotes }), []);

  if (!state.view) {
    return <>loading...</>;
  } else {
    return (
      <>
        <Header
          {...state}
          changeView={(e) => dispatch({ type: "changeView", args: e })}
          changeSort={(e) => dispatch({ type: "changeSort", args: e })}
          search={(e) => dispatch({ type: "search", args: e })}
        />
        <Chars
          key="0"
          quotes={state[state.view]}
          view={state.view}
          sort={state.sort}
          likeDelete={(e, id) =>
            dispatch({ type: "toggleButtons", args: { event: e, id } })
          }
          highlight={state.highlight}
        />
      </>
    );
  }
}

export default App;
