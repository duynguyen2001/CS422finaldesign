import './App.css';
import { Router, Routes, Route } from 'react-router';
import SearchPage from './components/SearchPage';
import BookingPage from './components/BookingPage';
import BookingHistory from './components/BookingHistory';
import PaymentPage from './components/PaymentPage';



function App() {
  return (
    <div className="App">
      {/* <SearchPage/> */}
      <PaymentPage/>
      {/* <h>Hello World</h> */}
      {/* <BookingPage /> */}
      {/* <BookingHistory /> */}

    </div>
  );
}

export default App;