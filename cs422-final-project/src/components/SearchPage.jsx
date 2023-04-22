import React from 'react';
import Header from './Header';
import HeaderComponent from './HeaderComponent';
import ExpertiseFilter from './Experties';
import TinnCannLogo from './TinnCannLogo';
import SearchBarComponent from './SearchBarComponent.jsx';
import FilterComponent from './FilterComponent';
import PersonCard from './PersonCard';
import "./SearchPage.css";

// import images
import personImage from './Image/mark.jpg';
import personImage2 from './Image/Bill_gates.jpg'
import personImage3 from './Image/Elon_musk.png'
function SearchPage() {

  // hard coding persons
  const Person1 = {
    image: personImage,
    name: 'Mark Zuckerberg',
    title: 'Software Engineer',
    description: 'Passionate developer with 5 years of experience.',
    rating: '4.5/5',
  };
  const Person2 = {
    image: personImage2,
    name: 'Bill Gates',
    title: 'Software Engineer',
    description: 'Passionate developer with 5 years of experience.',
    rating: '4.5/5',
  };
  const Person3 = {
    image: personImage3,
    name: 'Elon Mask',
    title: 'Software Engineer',
    description: 'Passionate developer with 5 years of experience.',
    rating: '4.5/5',
  };

  return (
    <div className="search-page">
      
      <HeaderComponent />
      <TinnCannLogo className="tinn-cann-logo" />
      <div>
        <SearchBarComponent className="search-bar-component"/>
      </div>
      <div className="content-container">
        <FilterComponent />
          <div className="person-cards-container">
            <PersonCard {...Person1} />
            <PersonCard {...Person2} />
            <PersonCard {...Person3} />
          </div>
      </div>
    </div>
  );
}

export default SearchPage;