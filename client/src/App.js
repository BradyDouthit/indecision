import React from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import IconCredit from './components/IconCredit/IconCredit';
import arrayShuffle from 'array-shuffle';

class App extends React.Component {
  constructor(props) {
    super(props)
  }
  state = {
    venues: [],
    venueOptions: []
  }

  componentDidUpdate() {
    this.getOptions();
  }

  setAppState = venues => {
    this.setState({ venues: venues })
    console.log(this.state);
  }

  getOptions = () => {
    let randomVenues = arrayShuffle(this.state.venues);
    for (let i = 0; i < 5; i++) {
      this.state.venueOptions.push(randomVenues[i])
    }
    console.log(this.state.venueOptions)
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
