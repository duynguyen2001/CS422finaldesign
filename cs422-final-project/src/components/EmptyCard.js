// import React from "react";
import './EmptyCard.css';
import React, { useState } from 'react';



function Card({title,body}){

    const [buttonColor, setButtonColor] = useState('orange');
    const [displayText, setDisplayText] = useState('');
    const [buttonText, setButtonText] = useState('Request Zoom Link');
    
        const handleB1 = () => {
            setDisplayText('Please Wait! The meeting Host will let you in soon');
            setButtonColor('limegreen');
            setButtonText('Zoom Link Rrequested!');
            
        }
    
        

    return(
        <div className="card-container">
        <div className="btn">
        <button style = {{backgroundColor: buttonColor}}onClick = {handleB1} className="ZoomButton">{buttonText}</button>
        
        </div>
        <div className="card-body">
           <p> {displayText} <br/><button className="Feedback">Provide Feedback</button> </p>
        </div>
        
        </div>
    )
}

export default Card;