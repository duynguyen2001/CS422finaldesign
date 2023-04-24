import './App.css';
import { Router, Routes, Route } from 'react-router';
import SearchPage from './components/SearchPage';
import BookingPage from './components/BookingPage';
import BookingHistory from './components/BookingHistory';



function App() {
  return (
    <div className="App">
      <SearchPage/>
      {/* <BookingPage /> */}
      {/* <BookingHistory /> */}
    </div>
  );
}

export default App;