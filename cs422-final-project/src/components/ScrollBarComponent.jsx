import React, { useState } from 'react';
import './ScrollBarComponent.css';

const ScrollBar = ({ scrollAreaRef }) => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = (e) => {
    const { scrollTop, scrollHeight, clientHeight } = scrollAreaRef.current;
    const scrollRatio = scrollTop / (scrollHeight - clientHeight);
    setScrollPosition(scrollRatio * 100);
  };

  return (
    <div className="scrollbar-container">
      <div
        className="scrollbar-track"
        style={{ height: `${100 - scrollPosition}%` }}
      ></div>
      <div
        className="scrollbar-active"
        style={{ height: `${scrollPosition}%` }}
      ></div>
    </div>
  );
};

export default ScrollBar;
