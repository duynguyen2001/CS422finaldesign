import './App.css';
import { Router, Routes, Route } from 'react-router';

import SearchPage from './components/SearchPage';
import BookingPage from './components/BookingPage';
import BookingHistory from './components/BookingHistory';
import MessagePage from './pages/MessagePage';
import FeedbackPage from './pages/FeedbackPage';
import VideoCall from './pages/VideoCall';
import VCPage from './components/VCPage';
import Message from './components/Message';
import Forum from './components/Forum';
import PaymentPage from './components/PaymentPage';
import EditProfilePage from './components/EditProfilePage';
import ProfilePage from './components/ProfilePage';



function App() {
  return (
    <div className="App">
      <Message/>
      {/* <BookingPage /> */}
      {/* <BookingHistory /> */}
      {/* <Forum /> */}
      {/* <BookingPage /> */}
      {/* <EditProfilePage /> */}
      {/* <PaymentPage /> */}
      <ProfilePage />
      
    </div>
  );
}

export default App;