import React from "react";
import HeaderComponent from "./HeaderComponent";
import MeetingComponent from "./MeetingComponent";
// import ProgressBar from "./ProgressBar";
import FooterStrip from "./FooterComponent";
import personImage from './Image/mark.jpg';
import personImage2 from './Image/Bill_gates.jpg'
import personImage3 from './Image/Elon_musk.png'
import './VCPage.css'
import EmptyCard from './EmptyCard';

const VCPage = ({onZoomClick})=>{
return (
    <div>
      <HeaderComponent />
      <div className="zoomContainer">
        <EmptyCard title = "cardTitle" body = "" />
      {/* <button className="ZoomButton" onClick={onZoomClick}>Request Zoom Link</button> */}
      </div>
      <div style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "80",
        maxWidth: "60%", 
        margin: "0 auto 0 350px" 
        
      }}>
        
        <div style={{ marginLeft: "10px" }}> {/* Add this line to apply some margin */}
          
        </div>
      </div>
      <div className="footer-strip">
        <FooterStrip />
      </div>
    </div>
  );
};

export default VCPage;