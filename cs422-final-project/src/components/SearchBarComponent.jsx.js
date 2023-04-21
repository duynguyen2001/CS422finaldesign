import React, { useState } from 'react';
import './SearchBarComponent.css';

const SearchBarComponent = ({ className }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchClick = () => {
    // Perform your search action here, such as making an API call or updating the displayed list.
    console.log('Searching for:', searchTerm);
  };

  return (
    <div className="search-bar-component">
      <svg width="100%" height="100%" viewBox="0 0 739 139">
        <defs />
        <g transform="matrix(1, 0, 0, 1, 0, 0)">
          <rect width="643" height="43" rx="20" transform="translate(40 32)" fill="#fff" />
        </g>
      </svg>
      <input
        className="search-input"
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleInputChange}
      />
      <button className="search-button" onClick={handleSearchClick}>
        Search
      </button>
    </div>
  );
};

export default SearchBarComponent;
