import React from "react";
import Controls from "./Slide/Controls";
import Name from "./Slide/Name";
import Quote from "./Slide/Quote";
import Img from "./Slide/Img";

function Char(props) {
  console.log("props", props);
  let img = props.image,
    name = props.character,
    quote = props.quote;

  return (
    <>
      <div>
        <div>{img}</div>
        <div>{name}</div>
        <div>{quote}</div>
      </div>
    </>
  );
}

export default Char;
