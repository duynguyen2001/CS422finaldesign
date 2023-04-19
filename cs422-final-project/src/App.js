
import './App.css';
import Header from './components/Header';
import { Router, Routes, Route } from 'react-router';

function App() {
  return (
    <div className="App">
      
        <Header></Header>
          <Routes>
            <Route path="/about">
              <h1>About</h1>
            </Route>
            <Route path="/contact">
              <h1>Contact</h1>
            </Route>
            <Route path="/login">
              <h1>Login</h1>
            </Route>
            <Route path="/signup">
              <h1>Signup</h1>
            </Route>
            <Route path="/">
              <h1>Home</h1>
            </Route>
          </Routes>

    </div>
  );
}

export default App;
