import React from 'react';
import './BookingPerson.css';
import personImage from './Image/mark.jpg'
import { useNavigate } from "react-router-dom";



const BookingPersonComponent = ({ onBookClick, onBackClick }) => {

  let navigate = useNavigate(); 
  const routeChange = () =>{ 
      let path = '../payment'; 
      navigate(path);
  }

  const routeChange2 = () =>{ 
    let path = '../expert'; 
    navigate(path);
}


  return (
    <div className="my-component">
      <div className="card-book">
        <div className="mark">
          <img src={personImage} alt="Person" />
        </div>
        <div className="info">
          <h2>Mark Zuckerberg</h2>
          <h3>$123</h3>
        </div>
        <button className="button book" onClick={routeChange}>Book</button>
        <button className="button back" onClick={routeChange2}>Back</button>
      </div>
    </div>
  );
};

export default BookingPersonComponent;

