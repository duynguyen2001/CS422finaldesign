
import './App.css';

import { Router, Routes, Route } from 'react-router';
import SearchPage from './components/SearchPage';
import BookingPage from './components/BookingPage';
function App() {
  return (
    <div className="App">
      {/* <SearchPage/> */}
      <BookingPage />
    </div>
  );
}

export default App;
