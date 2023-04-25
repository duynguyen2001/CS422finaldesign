import React from 'react';
import './MessageInfoCard.css';
const MessageInfo = ({ image, name}) => {
  return (
    <div className="expert-info">
        <h3>{name}</h3>
        <div className="picture-buttons">
            
            <img src={image} alt={name} className="person-image" />
            <button className="Booking">View Details of Booking</button> 
            <br/>
            <button className="Appointment">Book Another Appointment</button> 
        </div>
      <div className="person-info">
      </div>
    </div>
  );
};

export default MessageInfo;