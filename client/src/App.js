import React from 'react';
import logo from './logo.svg';
import SearchBar from './components/SearchBar/SearchBar';
import IconCredit from './components/IconCredit/IconCredit';
import arrayShuffle from 'array-shuffle';
import Options from './components/Options/Options';
import anime from 'animejs';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)
  }
  optionRef = React.createRef();
  state = {
    venues: [],
    venueOptions: [],
    message: '',
    showOptions: false
  }

  componentDidMount() {
    
  }

  setAppState = (venues, message, showOptions) => {
    this.setState({ venues: venues });
    this.setState({ message: message });
    this.setState({ showOptions: showOptions })

    console.log(this.state.showOptions);

    this.playAnimation();
  }

  playAnimation = (hasBeenPlayed) => {
    anime({
      targets: this.optionRef.current,
      // translateY: [
      //     { value: -190, duration: 1000 },
      //     { value: 0, duration: 1000 }
      // ],
      scale: [
        { value: 0.2, duration: 0 },
        { value: 1, duration: 500}
      ],
      //easing: 'spring(1, 80, 10, 0)',
      autoplay: false
    }).play();
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
          <h2 id="welcome">Welcome to Restaurant Roulette!</h2>
          <h3 id="description">Tired of deciding where to eat? Me too...which is why I am building this app. Enter your zip code and pick a place!</h3>
          <SearchBar getOptions={this.getOptions} setAppState={this.setAppState} />
          {this.state.message ? <div id="error-message">{this.state.message}</div> : <div></div>}
          <div id="option">
            <ul ref={this.optionRef} id="option-ul">
              {this.state.venueOptions.length ? this.state.venueOptions.map(venue => <Options key={venue.id} venue={venue} />) : <div></div>}
            </ul>
          </div>
          <IconCredit />
        </div>
      </div>
    );
  }
}

export default App;
