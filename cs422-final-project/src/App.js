
import './App.css';
import Header from './components/Header';
import { Router, Routes, Route } from 'react-router';
import SearchPage from './components/SearchPage';

function App() {
  return (
    <div className="App">
      <SearchPage/>
    </div>
  );
}

export default App;
