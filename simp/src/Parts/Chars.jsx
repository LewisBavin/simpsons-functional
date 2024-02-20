import React from "react";
import Char from "./Char";
function Chars(props) {
  (function sortChars() {
    let compare = props.sort.type;
    props.quotes.sort((a, b) => {
      let A = compare == "quote" ? a[compare].length : a[compare];
      let B = compare == "quote" ? b[compare].length : b[compare];
      if (A < B) {
        return -1;
      } else if (A > B) {
        return 1;
      }
      return 0;
    });
    if (props.sort.dir == "desc") props.quotes.reverse();
  })();
  console.log('rendered')




  return ( 
    
    <><div className="flx jc-c showing">Showing {props.quotes.length} {props.view}</div><div className="flx col quotes">
    {props.quotes.map((item, index) => {
      return (
        <Char
          key={index}
          {...item}
          view={props.view}
          highlight={props.highlight}
          reversed={index % 2}
          likeDelete={props.likeDelete}
        />
      );
    })}
  </div></>
  );
}

export default Chars;
