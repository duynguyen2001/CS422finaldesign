import React from 'react';
import FooterStrip from './FooterComponent';
import HeaderComponent from './HeaderComponent';
import TinnCannLogo from './TinnCannLogo';
import SearchBarComponent from './SearchBarComponent.jsx';
import Filter from './Filter';
import PersonCard from './PersonCard';
import { useNavigate } from 'react-router';

import "./SearchPage.css";

// import images
import personImage from './Image/mark.jpg';
import personImage2 from './Image/Bill_gates.jpg'
import personImage3 from './Image/Elon_musk.png'
import ratingImage from './Image/5ratingStar.jpg'
function SearchPage() {

  // hard coding persons
  const Person1 = {
    image: personImage,
    name: 'Mark Zuckerberg',
    title: 'Software Engineer',
    description: 'Passionate developer with 5 years of experience.',
    rating: ratingImage,
  };
  const Person2 = {
    image: personImage2,
    name: 'Bill Gates',
    title: 'Software Engineer',
    description: 'Passionate developer with 5 years of experience.',
    rating: ratingImage,
  };
  const Person3 = {
    image: personImage3,
    name: 'Elon Mask',
    title: 'Software Engineer',
    description: 'Passionate developer with 5 years of experience.',
    rating: ratingImage,
  };

  const filters = ["Computer Science", "Gymnasium", "Agronomy",
    "Horticulture",
    "Animal Science",
    "Forestry",
    "Environmental Science"];
    const handleFilterChange = (selectedFilters) => {
        console.log(selectedFilters);
    };

    const navigate = useNavigate();
    const handleContainerClick = () => {
      navigate('/expert');
    };


  return (
    <div className="search-page">
      
      <HeaderComponent />
      <TinnCannLogo className="tinn-cann-logo" />
      
      <div>
        <SearchBarComponent className="search-bar-component"/>
      </div>
      <div className="content-container">
      <div className="content-grid"> {/* Use the new .content-grid class */}
        <div> 
          <Filter filters={filters} handleFilterChange={handleFilterChange}/>
        </div>
        <div className="person-cards-container" style={{ cursor: 'pointer' }} // Optional: Change the cursor to indicate it's clickable
      onClick={handleContainerClick}>
          <PersonCard {...Person1} />
          <PersonCard {...Person2} />
          <PersonCard {...Person3} />
        </div>
      
  </div>
</div>

      <div>
        <FooterStrip />
      </div>
    </div>
  );
}

export default SearchPage;