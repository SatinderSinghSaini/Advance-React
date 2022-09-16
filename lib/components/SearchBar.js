import debounce from "lodash.debounce";
import React, { useEffect, useState } from "react";

const SearchBar = (props) => {
  const [value, setValue] = useState("");
  useEffect(() => {
    searchText();
  }, [value]);
  const searchText = debounce(() => {
    props.doSearch(value);
  }, 300);
  return (
    <>
      <input
        type="search"
        placeholder="Search here"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
    </>
  );
};
export default SearchBar;
