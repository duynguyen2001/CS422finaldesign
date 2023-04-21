import React from 'react';
import Header from './Header';
import HeaderComponent from './HeaderComponent';
import ExpertiseFilter from './Experties';
import TinnCannLogo from './TinnCannLogo';
import SearchBarComponent from './SearchBarComponent.jsx';
import FilterComponent from './FilterComponent';
import "./SearchPage.css";


function SearchPage() {
  return (
    <div className="search-page">
      
      <HeaderComponent />
      <TinnCannLogo className="tinn-cann-logo" />
      <div>
        <SearchBarComponent className="search-bar-component"/>
      </div>
      <FilterComponent />
      
    </div>
  );
}

export default SearchPage;