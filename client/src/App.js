import React from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import IconCredit from './components/IconCredit/IconCredit';

function App() {
  return (
    <div className="App">
      <div className="App-main">
        <img alt="logo" className="App-logo" src={logo}></img>
        <h2>Welcome to Restaurant Roulette!</h2>
        <h3>Tired of deciding where to eat? Me too...which is why I am building this app. Enter your location and spin the wheel to pick a place!</h3>
        <SearchBar />
        <IconCredit />
      </div>
    </div>
  );
}

export default App;
