import './App.css';
import { Router, Routes, Route } from 'react-router';
import SearchPage from './components/SearchPage';
<<<<<<< HEAD
import OptionComponent from './OptionComponent';
import BillGatesImage from './components/Image/Bill_gates.jpg';
import ExpertPage from './components/ExpertPage';
import PaymentPage from './components/PaymentPage';
function App() {
  return (
    <div className="App">
      {/* <OptionComponent name="Khanh" numberOfStars={4} imageLink={BillGatesImage} description="ahahahahahah" position="Header PC"/> */}
      {/* <SearchPage/> */}
      {/* <ExpertPage /> */}
      <PaymentPage />

=======
import BookingPage from './components/BookingPage';
import BookingHistory from './components/BookingHistory';



function App() {
  return (
    <div className="App">
      <SearchPage/>
      {/* <BookingPage /> */}
      {/* <BookingHistory /> */}
>>>>>>> 11f7ef2af4ffffb21a5bb2fcb2820efbd92b3f1f
    </div>
  );
}

export default App;