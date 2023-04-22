import React from 'react';
import './PersonCard.css';

const PersonCard = ({ image, name, title, description, rating }) => {
  return (
    <div className="person-card">
      <div className="person-image-wrapper">
        <img src={image} alt={name} className="person-image" />
        <div className="person-rating">
        <img src={rating} alt={`Rating: ${rating}`} />
        </div>
      </div>
      <div className="person-info">
        <h3>{name}</h3>
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default PersonCard;
