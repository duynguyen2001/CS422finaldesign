import React from 'react';
import Header from './Header';
import HeaderComponent from './HeaderComponent';
import ExpertiseFilter from './Experties';
import TinnCannLogo from './TinnCannLogo';
import SearchBarComponent from './SearchBarComponent.jsx';
import FilterComponent from './FilterComponent';
import ExpertInfo from './ExpertInfo';
import './ExpertPage.css';

import billImage from './Image/Bill_gates.jpg'

function ExpertPage() {

    const Expert = {
        image: billImage,
        name: 'Bill Gates',
        title: 'Software Engineer',
        price: '$123/hour',
        description: 'Description: With 40 years experience of Computer Science, I’m very eager to help people to start  Exploring new ideas in computer Science-related fields. With 40 years experience of Computer Science, I’m very eager to help people to start Exploring new ideas in computer Science-related fields.',
        rating: '4.5/5',
        review1: 'Gary: 4 stars: Very nice guy, he is very knowledgeable',
        review2: 'Tyler: 5 stars: Good man! Helped to solve my problem quickly'
      };

    return (
      <div className="expert-page">
        
        <HeaderComponent />

        <div className="content-container">
            <ExpertInfo {...Expert} />
        </div>

        <div className='also'>
            <h1>Other users also choose...</h1>
            <div className='others'>
                
            </div>
        </div>
      </div>
    );
  }
  
  export default ExpertPage;