import React from 'react';
import './ExpertInfo.css';
import Button from './Button'

const ExpertInfo = ({ image, name, title, price, description, rating, review1, review2}) => {
  return (
    <div className="expert-info">
        <div className="picture-buttons">
            <img src={image} alt={name} className="person-image" />
            <p>Rating: {rating}</p>
            <Button label="Send Message"/>
            <Button label="Book"/>
        </div>
      <div className="person-info">
        <h3>{name}</h3>
        <h4>{title}</h4>
        <h4>{price}</h4>
        <div className='description'>
            <p>{description}</p>
        </div>
        <div className="review1">
            <p>{review1}</p>
        </div>
        <div className="review2">
            <p>{review2}</p>
        </div>
      </div>
    </div>
  );
};

export default ExpertInfo;