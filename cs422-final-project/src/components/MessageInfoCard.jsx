import React from "react";
import "./MessageInfoCard.css";
import { useNavigate } from "react-router-dom";

const MessageInfo = ({ image, name }) => {
    let navigate = useNavigate();
    const routeChange = () => {
        let path = "../booking-history";
        navigate(path);
    };

    const routeChange2 = () => {
        let path = "../booking";
        navigate(path);
    };

    return (
        <div className="expert-info">
            <h3>{name}</h3>
            <div className="picture-buttons">
                <img src={image} alt={name} className="person-image" />
                <button className="Booking" onClick={routeChange}>
                    View Details of Booking
                </button>
                <br />
                <button className="Appointment" onClick={routeChange2}>
                    Book Another Appointment
                </button>
            </div>
            <div className="person-info"></div>
        </div>
    );
};

export default MessageInfo;
