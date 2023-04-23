import React from "react";
import HeaderComponent from "./HeaderComponent";
import MeetingComponent from "./MeetingComponent";
import ProgressBar from "./ProgressBar";
import FooterStrip from "./FooterComponent";
import personImage from './Image/mark.jpg';
import personImage2 from './Image/Bill_gates.jpg'
import personImage3 from './Image/Elon_musk.png'

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
        <div>
          <MeetingComponent
            imageSrc={personImage}
            name="Mark Zuckerberg"
            time="10:00 AM, April 25th, Tuesday"
          />
          <MeetingComponent
            imageSrc={personImage2}
            name="Bill Gates"
            time="14:00 PM, April 27th, Thursday"
          />
          <MeetingComponent
            imageSrc={personImage3}
            name="Elon Musk"
            time="15:00 PM, April 28th, Friday"
          />
        </div>
        <div style={{ marginLeft: "10px" }}> {/* Add this line to apply some margin */}
          <ProgressBar />
        </div>
      </div>
      <div className="footer-strip">
        <FooterStrip />
      </div>
    </div>
  );
}

export default BookingHistory;
