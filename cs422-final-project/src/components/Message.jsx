import React, { useState } from 'react';
import HeaderComponent from "./HeaderComponent";
import FooterStrip from "./FooterComponent";
import './Message.css';
import MessageInfoCard from './MessageInfoCard';
import billImage from './Image/Bill_gates.jpg'
import { useNavigate } from "react-router-dom";

const Message = () => {

    const Expert = {
        image: billImage,
        name: 'Bill Gates',
      };
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSendMessage = () => {
    if (inputText) {
      setMessages([...messages, inputText]);
      setInputText('');
    }
  };

  return (
   
    <div className='PageContent'>
        <div className='Header'>
        <HeaderComponent />
        </div>
        <div className="content-container">
            <MessageInfoCard {...Expert} />
            <div className='MessageBox'>
            {messages.map((message, index) => (
          <div key={index} style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '10px' }}>
            <div style={{ backgroundColor: 'blue', color: 'white', padding: '8px', borderRadius: '10px' }}>
              {message}
            </div>
          </div>
        ))}
            </div>
        </div>
        <input
                type="text"
                value={inputText}
                onChange={handleInputChange}
            />
            <button onClick={handleSendMessage}>Send</button>
      
    </div>
  );
};

export default Message;