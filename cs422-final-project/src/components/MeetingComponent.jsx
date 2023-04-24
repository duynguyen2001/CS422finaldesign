import React from 'react';
import './MeetingComponent.css';

function MeetingComponent({ imageSrc, name, time }) {
  return (
    <div className="meeting-container">
      <img src={imageSrc} alt="Person" className="person-image" />
      <div className="person-info">
        <h2>{name}</h2>
        <h3>{time}</h3>
        <div className="buttons-container">
          <button className="video-call">Video Call</button>
          <button className="message">Message</button>
        </div>
      </div>
    </div>
  );
}

export default MeetingComponent;
