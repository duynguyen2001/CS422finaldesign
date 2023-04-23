import React from 'react';
import './OptionComponent.css';

const OptionComponent = ({ name, numberOfStars, imageLink, description, position }) => {
  const renderStars = () => {
    let stars = [];
    for (let i = 0; i < numberOfStars; i++) {
      stars.push(<span key={i} className="star">★</span>);
    }
    return stars;
  };

  return (
    <div className="option-component">
      <div className="rectangle"></div>
      <img src={imageLink} alt={name} className="bill-gates-image" />
      <div className="name-and-stars">
        <h3 className="name">{name}</h3>
        <div className="stars">
          {renderStars()}
        </div>
      </div>
      <h4 className="position">{position}</h4>
      <p className="description">{description}</p>
    </div>
  );
};

export default OptionComponent;
