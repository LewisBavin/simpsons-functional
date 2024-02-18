import React from "react";
function Header(props) {
  return (
    <div className=" flx col ai-c nav">
      <div>SIMPSONS QUOTES</div>
      <div>
        <input
          onInput={(e) => props.search(e)}
          type="text"
          placeholder="search..."
        ></input>
        <button
          id="quotes"
          onClick={(e) => {
            props.changeView(e);
          }}
        >
          All Quotes
        </button>
        <button
          id="liked"
          onClick={(e) => {
            props.changeView(e);
          }}
        >
          Liked
        </button>
        <button
          id="deleted"
          onClick={(e) => {
            props.changeView(e);
          }}
        >
          Deleted
        </button>
      </div>
      <div>
        <label htmlFor="sort">Sort By: </label>

        <select
          name="sort"
          id="type"
          value={props.sort.type}
          onChange={(e) => {
            props.changeSort(e);
          }}
        >
          <option value="quote">Quote Length</option>
          <option value="character">Character Name</option>
        </select>
        <select
          name="sort"
          id="dir"
          value={props.sort.dir}
          onChange={(e) => {
            props.changeSort(e);
          }}
        >
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </div>
    </div>
  );
}

export default Header;
