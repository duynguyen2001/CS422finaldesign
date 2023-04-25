import React from "react";
import HeaderComponent from "./HeaderComponent";
import BookingPersonComponent from "./BookingPerson";
import Calendar from "./CalendarComponent";
import FooterStrip from "./FooterComponent";
import './BookingPage.css'

function BookingPage(){
    return (
      <div>
      <HeaderComponent />
        <div className="booking-page">
      <div className="booking-container">
        <BookingPersonComponent className="booking-person" />
        <Calendar className="calendar-component" />
      </div>
      <div>
        <FooterStrip />
      </div>
    </div></div>
  );
}

export default BookingPage;