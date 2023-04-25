import React from 'react';
import HeaderComponent from './HeaderComponent';
import ExpertInfo from './ExpertInfo';
import './ExpertPage.css';

import billImage from './Image/Bill_gates.jpg'
import elonImage from './Image/Elon_musk.png'
import markImage from './Image/mark.jpg'
import RecommendationExpert from './RecommendationExpert';

function ExpertPage() {

    const Expert = {
        image: billImage,
        name: 'Bill Gates',
        title: 'Software Engineer',
        price: '$123/hour',
        description: 'Description: With 40 years experience of Computer Science, I’m very eager to help people to start  Exploring new ideas in computer Science-related fields. With 40 years experience of Computer Science, I’m very eager to help people to start Exploring new ideas in computer Science-related fields.I’m very eager to help people to start Exploring new ideas in computer Science-related fields. ',
        rating: '4.5/5',
        review1: 'Gary: 4 stars: Very nice guy, he is very knowledgeable',
        review2: 'Tyler: 5 stars: Good man! Helped to solve my problem quickly'
      };

      const ReExpert1 = {
        image: elonImage,
        name: 'Elon Musk',
        title: 'Software Engineer',
        price: '$100/hour',
        rating: '4.2/5',
      };

      const ReExpert2 = {
        image: markImage,
        name: 'Mark Zuckerberg',
        title: 'Software Engineer',
        price: '$135/hour',
        rating: '4.7/5',
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
                <RecommendationExpert {...ReExpert1} />
                <RecommendationExpert {...ReExpert2} />
                <RecommendationExpert {...ReExpert1} />
                <RecommendationExpert {...ReExpert2} />
            </div>
        </div>
      </div>
    );
  }
  
  export default ExpertPage;