import React from 'react';
import './RecommendationExpert.css';
import Button from './Button'
import { useNavigate } from 'react-router';

const RecommendationExpert = ({ image, name, title, price, rating}) => {
  const navigate = useNavigate();
  return (
    <div className="re-expert-info">
        <img src={image} alt={name} className="re-expert-image" />
        <h1>{name}</h1>
        <h4>{title}</h4>
        <h4>Rating: {rating}</h4>
        <h4>{price}</h4>
        <button onClick={() => {navigate("/search")}} label="Learn More">Learn more</button>
    </div>
  );
};

export default RecommendationExpert;