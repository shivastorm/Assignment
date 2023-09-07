import React from "react";

const SearchBar = ({ searchQuery, setSearchQuery }) => {
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Search posts..."
      value={searchQuery}
      onChange={handleSearch}
      style={{margin:"5px",padding:10}}
    />
  );
};

export default SearchBar;
