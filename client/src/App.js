import React from 'react';
import logo from './logo.svg';
import SearchBar from './components/SearchBar/SearchBar';
import IconCredit from './components/IconCredit/IconCredit';
import arrayShuffle from 'array-shuffle';
import Options from './Options/Options';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)
  }
  state = {
    venues: [],
    venueOptions: []
  }

  setAppState = venues => {
    this.setState({ venues: venues })
    console.log(this.state);
  }

  getOptions = () => {
    let randomVenues = arrayShuffle(this.state.venues);
    let venueArray = []
    for (let i = 0; i < 5; i++) {
      venueArray.push(randomVenues[i])
    }
    this.setState({ venueOptions: venueArray })
    console.log(this.state.venueOptions)
  }

  render() {
    return (
      <div className="App">
        <div className="App-main">
          <img alt="logo" className="App-logo" src={logo}></img>
          <h2>Welcome to Restaurant Roulette!</h2>
          <h3>Tired of deciding where to eat? Me too...which is why I am building this app. Enter your location and spin the wheel to pick a place!</h3>
          <SearchBar getOptions={this.getOptions} setAppState={this.setAppState} />
          <div id="option">
            {this.state.venueOptions.length ? this.state.venueOptions.map(venue => <Options key={venue.id} venue={venue} />) : <div>no options</div>}
          </div>
          <IconCredit />
        </div>
      </div>
    );
  }
}

export default App;
