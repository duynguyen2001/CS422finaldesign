import React from 'react';
import './RecommendationExpert.css';
import Button from './Button'

const RecommendationExpert = ({ image, name, title, price, rating}) => {
  return (
    <div className="re-expert-info">
        <img src={image} alt={name} className="re-expert-image" />
        <h1>{name}</h1>
        <h4>{title}</h4>
        <h4>Rating: {rating}</h4>
        <h4>{price}</h4>
        <Button label="Learn More"/>
    </div>
  );
};

export default RecommendationExpert;