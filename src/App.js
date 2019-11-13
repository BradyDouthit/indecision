import React from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';

function App() {
  return (
    <div className="App">
      <div className="App-main">
        <h2>Welcome to Restaurant Roulette!</h2>
        <h3>Tired of deciding where to eat? Me too...which is why I am building this app. Enter your location and spin the wheel to pick a place!</h3>
        <SearchBar />
      </div>
    </div>
  );
}

export default App;
