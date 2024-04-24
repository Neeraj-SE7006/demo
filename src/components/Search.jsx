import React, { useState } from "react";
import "./Search.css";
import SearchIcon from "@mui/icons-material/Search";
import MicNoneIcon from "@mui/icons-material/MicNone";
const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <SearchIcon />
      <input
        className="search-input"
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleChange}
      />
      <MicNoneIcon />
    </form>
  );
};

export default SearchBar;
