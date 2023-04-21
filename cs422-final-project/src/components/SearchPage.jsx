import React from 'react';
import Header from './Header';
import HeaderComponent from './HeaderComponent';
import ExpertiseFilter from './ExpertiseFilter';
import "./SearchPage.css";

function SearchPage() {
  return (
    <div className="search-page">
      {/* <Header /> */}
      <HeaderComponent />
      <div className="search-container">
        <div className="search-filter-container">
          <ExpertiseFilter className="search-filter" />
        </div>
        <div className="search-results-container">
          <h1>TinnCann</h1>
          <input type="text" placeholder="Search for experts" />
          <button>Search</button>
          <ul>
            <li>Bill Gates</li>
            <li>Elon Musk</li>
            <li>Mark Zuckerberg</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SearchPage;