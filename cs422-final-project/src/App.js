import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
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
import LandingPage from './components/LandingPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route path="search" element={<SearchPage />} />
          <Route path="booking" element={<BookingPage />} />
          <Route path="booking-history" element={<BookingHistory />} />
          <Route path="message" element={<MessagePage />} />
          <Route path="feedback" element={<FeedbackPage />} />
          <Route path="video-call" element={<VideoCall />} />
          <Route path="payment" element={<PaymentPage />} />
          <Route path="edit-profile" element={<EditProfilePage />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="forum" element={<Forum />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;