// import React from 'react';
import './SearchBar.css';

const SearchBar = () => {
  return (
    <div className="searchbar">
      <span className="search-icon">
        <i className="fa-solid fa-magnifying-glass"></i>
      </span>
      <input type="text" placeholder="Go Negvira..." />
    </div>
  );
};

export default SearchBar;
