import React from "react";

function Char(props) {
  let img = props.image,
    dir = props.characterDirection,
    str = props.highlight;
  let show = true;

  function createHighlights(type) {
    let hStr = props[type],
      len = str.length,
      start = hStr.toLowerCase().search(str.toLowerCase());
    show = len == 0 || start > -1;
    return (
      <>
        {start > 0 ? hStr.slice(0, start) : null}
        <mark>{start > -1 ? hStr.slice(start, start + len) : null}</mark>
        {start > -1 ? hStr.slice(start + len, hStr.length) : hStr}
      </>
    );
  }

  return show ? (
    <>
      <div className={"flx slide jc-c" + (props.reversed ? " reversed" : "")}>
        <div>
          <img src={img} alt="simpsons-character" />
        </div>
        <div className=" flx col jc-c ai-c content">
          <span className="quote">
            <i>
              <b>"{createHighlights("quote")}"</b>
            </i>
          </span>
          <span className="name">- {createHighlights("character")}</span>
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
