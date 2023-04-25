import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SearchPage from './components/SearchPage';
import BookingPage from './components/BookingPage';
import BookingHistory from './components/BookingHistory';
import FeedbackPage from './components/FeedbackPage';
import VCPage from './components/VCPage';
import Message from './components/Message';
import PaymentConfirmation from './components/PaymentConfirmation';
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
          <Route path="feedback" element={<FeedbackPage />} />
          <Route path="payment" element={<PaymentPage />} />
          <Route path="payment-confirmation" element={<PaymentConfirmation />} />
          <Route path="edit-profile" element={<EditProfilePage />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="forum" element={<Forum />} />
          <Route path="vc" element={<VCPage />} />
          <Route path="message" element={<Message />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;