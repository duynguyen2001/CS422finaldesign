import React from "react";
import HeaderComponent from "./HeaderComponent";
import BookingPersonComponent from "./BookingPerson";
import Calendar from "./CalendarComponent";
import FooterStrip from "./FooterComponent";
import './BookingPage.css'

function BookingPage(){
    return (
        <div className="booking-page">
      <HeaderComponent />
      <div className="booking-container">
        <BookingPersonComponent className="booking-person" />
        <Calendar className="calendar-component" />
      </div>
      <FooterStrip />
    </div>
  );
}

export default BookingPage;