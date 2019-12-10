import React from 'react';
import logo from './logo.svg';
import SearchBar from './components/SearchBar/SearchBar';
import IconCredit from './components/IconCredit/IconCredit';
import arrayShuffle from 'array-shuffle';
import Options from './components/Options/Options';
import anime from 'animejs';
import Modal from 'react-animated-modal';
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
    showModal: false
  }

  componentDidMount() {

  }

  setAppState = (venues, message, showModal) => {
    this.setState({ venues: venues });
    this.setState({ message: message });
    this.setState({ showModal: showModal })

    console.log(this.state.showModal);

    this.playAnimation();
  }

  playAnimation = () => {
    let animation = anime({
      targets: this.optionRef.current,
      keyframes: [
        {scale: 0.2, duration: 0},
        {scale: 1, duration: 1500},
        {color: '#5dc734', duration: 1000},
      ],
      // scale: [
      //   { value: 0.2, duration: 0 },
      //   { value: 1, duration: 2000 }
      // ],
      //color: ['#00000', '#5dc734'],
      autoplay: false
    });

    animation.play();
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
        <div id="option">
          <Modal
            visible={this.state.showModal}
            closemodal={() => this.setState({ showModal: false })}
            type="flipInX">
            <ul ref={this.optionRef} id="option-ul">
              {this.state.venueOptions.length ? this.state.venueOptions.map(venue => <Options key={venue.id} venue={venue} />) : <div></div>}
            </ul>
          </Modal>
        </div>
        <div className="App-main">
          <img alt="logo" className="App-logo" src={logo}></img>
          <h2 id="welcome">Welcome to Restaurant Roulette!</h2>
          <h3 id="description">Tired of deciding where to eat? Me too...which is why I am building this app. Enter your zip code and pick a place!</h3>
          <SearchBar getOptions={this.getOptions} setAppState={this.setAppState} />
          {this.state.message ? <div id="error-message">{this.state.message}</div> : <div></div>}
          <IconCredit />
        </div>
      </div>
    );
  }
}

export default App;
