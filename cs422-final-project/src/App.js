import './App.css';
import Header from './components/Header';
import { Router, Routes, Route } from 'react-router';
import SearchPage from './components/SearchPage';
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

    </div>
  );
}

export default App;