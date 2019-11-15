import React from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import IconCredit from './components/IconCredit/IconCredit';

class App extends React.Component {
  constructor(props) {
    super(props)
  }
  state = {
    venues: []
  }

  componentDidUpdate() {
    this.getOptions();
  }

  setAppState = venues => {
    this.setState({ venues: venues })
    console.log(this.state);
  }

  getOptions = () => {
    this.state.venues.map(venue => {
      console.log(venue.name);
    })
  }

  render() {
    return (
      <div className="App">
        <div className="App-main">
          <img alt="logo" className="App-logo" src={logo}></img>
          <h2>Welcome to Restaurant Roulette!</h2>
          <h3>Tired of deciding where to eat? Me too...which is why I am building this app. Enter your location and spin the wheel to pick a place!</h3>
          <SearchBar setAppState={this.setAppState} />
          <IconCredit />
        </div>
      </div>
    );
  }
}

export default App;
