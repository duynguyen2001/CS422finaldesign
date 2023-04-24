import './App.css';
import { Router, Routes, Route } from 'react-router';
import SearchPage from './components/SearchPage';
import BookingPage from './components/BookingPage';
import BookingHistory from './components/BookingHistory';
import MessagePage from './pages/MessagePage';
import FeedbackPage from './pages/FeedbackPage';
import VideoCall from './pages/VideoCall';
import Forum from './components/Forum';
import PaymentPage from './components/PaymentPage';


function App() {
  return (
    <div className="App">
      {/* <FeedbackPage/> */}
      {/* <BookingPage /> */}
      <BookingHistory />
      {/* <Forum /> */}
      {/* <BookingPage /> */}
      
    </div>
  );
}

export default App;