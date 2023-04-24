import React from "react";
import HeaderComponent from "./HeaderComponent";
import MeetingComponent from "./MeetingComponent";

import FooterStrip from "./FooterComponent";

const jsonData = [
  {
    "imageSrc": "mark.jpg",
    "name": "Mark Zuckerberg",
    "time": "10:00 AM, April 25th, Tuesday"
  },
  {
    "imageSrc": "Bill_gates.jpg",
    "name": "Bill Gates",
    "time": "14:00 PM, April 27th, Thursday"
  },
  {
    "imageSrc": "Elon_musk.png",
    "name": "Elon Musk",
    "time": "15:00 PM, April 28th, Friday"
  },
  {
    "imageSrc": "mark.jpg",
    "name": "Mark Zuckerberg",
    "time": "10:00 AM, April 25th, Tuesday"
  },
  {
    "imageSrc": "Bill_gates.jpg",
    "name": "Bill Gates",
    "time": "14:00 PM, April 27th, Thursday"
  },
  {
    "imageSrc": "Elon_musk.png",
    "name": "Elon Musk",
    "time": "15:00 PM, April 28th, Friday"
  },
  {
    "imageSrc": "mark.jpg",
    "name": "Mark Zuckerberg",
    "time": "10:00 AM, April 25th, Tuesday"
  },
  {
    "imageSrc": "Bill_gates.jpg",
    "name": "Bill Gates",
    "time": "14:00 PM, April 27th, Thursday"
  },
  {
    "imageSrc": "Elon_musk.png",
    "name": "Elon Musk",
    "time": "15:00 PM, April 28th, Friday"
  }
]

function BookingHistory() {
  return (
    <div>
      <HeaderComponent />
      <h1>Current Booking</h1>
      <div style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "80",
        maxWidth: "60%", 
        margin: "0 auto 0 350px" 
        
      }}>
       <div style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        overflowY: "auto", // Add this line to enable vertical scrolling
        maxHeight: "400px" // Add this line to limit the height of the container
      }}>
        {jsonData.map((meeting, index) => (
          <MeetingComponent
            key={index}
            imageSrc={meeting.imageSrc}
            name={meeting.name}
            time={meeting.time}
          />
        ))}
      </div>
  
      </div>
      <div className="footer-strip">
        <FooterStrip />
      </div>
    </div>
  );
}

export default BookingHistory;
