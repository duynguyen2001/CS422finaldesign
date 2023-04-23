import React from 'react';
import './BookingPerson.css';
import personImage from './Image/mark.jpg'
const BookingPersonComponent = ({ onBookClick, onBackClick }) => {
  return (
    <div className="my-component">
      <div className="card">
        <div className="mark">
          <img src={personImage} alt="Person" />
        </div>
        <div className="info">
          <h2>Mark Zuckerberg</h2>
          <h3>$123</h3>
        </div>
        <button className="button book" onClick={onBookClick}>Book</button>
        <button className="button back" onClick={onBackClick}>Back</button>
      </div>
    </div>
  );
};

export default BookingPersonComponent;

