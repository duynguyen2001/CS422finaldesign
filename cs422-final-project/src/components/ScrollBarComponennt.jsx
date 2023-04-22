import React from 'react';
import './ScrollBarComponent.css';

const ScrollBar = ({ activeWidth }) => {
  return (
    <div className="scroll-bar-container">
      <div className="scroll-bar-track"></div>
      <div className="scroll-bar-active" style={{ width: activeWidth }}></div>
    </div>
  );
};

const ScrollableScrollBar = ({ activeWidth, height }) => {
  const containerStyle = {
    height,
    overflow: 'auto',
  };

  return (
    <div style={containerStyle}>
      <ScrollBar activeWidth={activeWidth} />
    </div>
  );
};

export default ScrollableScrollBar;
