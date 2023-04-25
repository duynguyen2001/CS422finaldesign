import React from 'react';
import './ExpertInfo.css';
import Button from './Button'
import { useNavigate } from "react-router-dom";


const ExpertInfo = ({ image, name, title, price, description, rating, review1, review2}) => {
  let navigate = useNavigate(); 
    const routeChange = () =>{ 
        let path = '../message'; 
        navigate(path);
    }
    const routeChange2 = () =>{ 
      let path = '../booking'; 
      navigate(path);
  }
  return (
    <div className="expert-info">
        <div className="picture-buttons">
            <img src={image} alt={name} className="person-image" />
            <p>Rating: {rating}</p>
            <button label="Send Message" onClick={routeChange}/>
            <button label="Book" onClick = {routeChange2}/>
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