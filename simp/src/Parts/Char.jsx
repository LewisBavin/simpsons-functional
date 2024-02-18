import React from "react";
import Controls from "./Slide/Controls";
import Name from "./Slide/Name";
import Quote from "./Slide/Quote";
import Img from "./Slide/Img";

function Char(props) {
  let img = props.image,
    name = props.character,
    quote = props.quote,
    dir = props.characterDirection;

  let hidden;
  function highlight(nameStr, quoteStr, srchStr) {
    hidden = !nameStr.includes(srchStr) && !quoteStr.includes(srchStr);
  }
  highlight(name, quote, props.highlight);

  return !hidden ? (
    <>
      <div className={"flx slide jc-c" + (props.reversed ? " reversed" : "")}>
        <div>
          <img src={img} alt="simpsons-character" />
        </div>
        <div className=" flx col jc-c ai-c content">
          <span className="quote">
            <i>
              <b>"{quote}"</b>
            </i>
          </span>
          <span className="name">- {name}</span>
          <div className="controls">
            <button
              className={props.view == "deleted" ? "hidden" : null}
              id="liked"
              onClick={(e) => {
                props.likeDelete(e, props.id);
              }}
            >
              {!props.liked ? "Like" : "Unlike"}
            </button>
            <button
              id="deleted"
              onClick={(e) => {
                props.likeDelete(e, props.id);
              }}
            >
              {props.view !== "deleted" ? "Delete" : "Restore"}
            </button>
          </div>
        </div>
      </div>
    </>
  ) : null;
}

export default Char;
