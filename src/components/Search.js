import React from "react";
import "./Search.css";

function Search({ value, change, submit }) {
  return (
    <>
      <form className="search_container" onSubmit={submit}>
        <input
          type="text"
          value={value}
          onChange={change}
          placeholder="e.g. Sunnyvale, CA"
          className="search_input"
        ></input>
      </form>
    </>
  );
}

export default Search;
