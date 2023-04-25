import React from 'react';
import './MeetingComponent.css';
import { useNavigate } from 'react-router';
function MeetingComponent({ imageSrc, name, time }) {

  const navigate = useNavigate();

  const handleVideoCallClick = () => {
    navigate('/vc');
  };
  const handleMessageClick = () => {
    navigate('/message');
  };

  return (
    <div className="meeting-container">
      <img src={imageSrc} alt="Person" className="person-image" />
      <div className="person-info">
        <h2>{name}</h2>
        <h3>{time}</h3>
        <div className="buttons-container">
          <button className="video-call" onClick={handleVideoCallClick}>Video Call</button>
          <button className="message" onClick={handleMessageClick}>Message</button>
        </div>
      </div>
    </div>
  );
}

export default MeetingComponent;
