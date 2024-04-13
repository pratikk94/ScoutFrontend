import React from 'react';
import '../components/Searchbar.css';

const SearchBar = () => {
  return (
    <div className="search-bar-wrapper">
      <h1 className="greeting">Hi Jaidip,</h1>
      <div className="search-input-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search by Product"
          aria-label="Search by Product"
        />
        <button className="search-button">
          <span className="search-icon">🔍</span>
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
