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

  state = {
    venues: [],
    venueOptions: [],
    message: '',
    showModal: false,
    welcomeDrawerIsOpen: true,
    mainDrawerIsOpen: true
  }

  optionRef = React.createRef();
  bgRef = React.createRef();
  welcomeRef = React.createRef();

  componentDidMount() {

  }

  setAppState = (venues, message, showModal) => {
    this.setState({ 
      venues: venues, 
      message: message, 
      //showModal: showModal
    });

    this.playTextAnimation();
  }

  playTextAnimation = () => {
    let animation = anime({
      targets: this.optionRef.current,
      keyframes: [
        { scale: 0.2, duration: 0 },
        { scale: 1, duration: 1500 },
        { color: '#5dc734', duration: 1000 },
      ],
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

  playBackgroundAnimation = (isOpen, id) => {
    let translateX = "-95%";
    console.log(isOpen)
    console.log(id)
    id === "#main-background" ? translateX = "-90%" : translateX = translateX;

    if (isOpen) {
      anime({
        targets: id,
        keyframes: [
          { borderTopRightRadius: 100, borderBottomRightRadius: 100 },
          { translateX: 0 },
          { borderTopRightRadius: 0, borderBottomRightRadius: 0 },
        ],
        easing: 'easeInOutSine'
      }).play();
      id === "#welcome-background" ? this.setState({ welcomeDrawerIsOpen: true }) : this.setState({ mainDrawerIsOpen: true });
    }
    else if (!isOpen) {
      console.log(isOpen)
      anime({
        targets: id,
        keyframes: [
          { borderTopRightRadius: 100, borderBottomRightRadius: 100 },
          { translateX: translateX },
          { borderTopRightRadius: 0, borderBottomRightRadius: 0 },
        ],
        easing: 'easeInOutSine'
      }).play();
      id === "#welcome-background" ? this.setState({ welcomeDrawerIsOpen: false }) : this.setState({ mainDrawerIsOpen: false });
    }
    console.log(this.state.welcomeDrawerIsOpen)
  }

  render() {
    return (
      <div className="App">
        <div
          id="welcome-background"
          ref={this.bgRef}>
          <h1 id="welcome">Welcome to Restaurant Roulette</h1>
          {this.state.welcomeDrawerIsOpen ?
            <button onClick={() => this.playBackgroundAnimation(false, "#welcome-background")} id="back-button">Click me to get started!</button> :
            <div onClick={() => this.playBackgroundAnimation(true, "#welcome-background")} id="closed-drawer-container"><div id="back">></div></div>
          }
        </div>
        <div
          id="options-background">
            <h1 className="click-to-copy">Click to copy address</h1>
            <ul ref={this.optionRef} id="option-ul">
              {this.state.venueOptions.length ? this.state.venueOptions.map(venue => <Options key={venue.id} venue={venue} />) : <div></div>}
            </ul>
        </div>
        <div
          id="main-background">
          {this.state.mainDrawerIsOpen ? <div onClick={() => this.playBackgroundAnimation(false, "#main-background")} id="closed-drawer-container"><div id="back">X</div></div> : <div onClick={() => this.playBackgroundAnimation(true, "#main-background")} id="closed-drawer-container"><div id="back">></div></div>}
          <div className="App-main">
            <img alt="logo" className="App-logo" src={logo}></img>
            <h2 id="welcome">Welcome to Restaurant Roulette!</h2>
            <h3 id="description">Tired of deciding where to eat? Me too...which is why I am building this app. To find a place, simply enter your zip code and pick a place!</h3>
            <SearchBar 
              optionPageBackground={"#options-background"}
              mainPageBackground={"#main-background"}
              playBackgroundAnimation={this.playBackgroundAnimation} 
              getOptions={this.getOptions} 
              setAppState={this.setAppState} />
            {this.state.message ? <div id="error-message">{this.state.message}</div> : <div></div>}
            <IconCredit />
          </div>
        </div>
        <div id="option">
          <Modal
            visible={this.state.showModal}
            closemodal={() => this.setState({ showModal: false })}
            type="flipInX">
            
          </Modal>
        </div>
      </div>
    );
  }
}

export default App;
