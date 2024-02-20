import React from "react";
function Header(props) {
  return (
    <div className=" flx col ai-c nav">
      <div>SIMPSONS QUOTES</div>
      <div>
        <input
          onInput={props.search}
          type="text"
          placeholder="search..."
        ></input>
        <button id="quotes" onClick={props.changeView}>
          All Quotes
        </button>
        <button id="liked" onClick={props.changeView}>
          Liked
        </button>
        <button id="deleted" onClick={props.changeView}>
          Deleted
        </button>
      </div>
      <div>
        <label htmlFor="sort">Sort By: </label>

        <select
          name="sort"
          id="type"
          value={props.sort.type}
          onChange={props.changeSort}
        >
          <option value="quote">Quote Length</option>
          <option value="character">Character Name</option>
        </select>
        <select
          name="sort"
          id="dir"
          value={props.sort.dir}
          onChange={props.changeSort}
        >
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </div>
    </div>
  );
}

export default Header;
