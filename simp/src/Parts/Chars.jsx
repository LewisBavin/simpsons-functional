import React from "react";
import Char from "./Char";
function Chars(props) {
  (function sortChars() {
    let compare = props.sort.type;
    props.quotes.sort((a, b) => {
      if (a[compare].length < b[compare].length) {
        return 1;
      } else if (a[compare].length > b[compare].length) {
        return -1;
      }
      return 0;
    });
    if (props.sort.dir == "desc") props.quotes.reverse();
  })();
  return props.quotes.map((item) => {
    return <Char {...item} />;
  });
}

export default Chars;
