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
        { color: '#ffbdf8', duration: 1000 },
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
    let translateX = "-93%";
    console.log(id)
    id === "#main-background" ? translateX = "-86%" : translateX = translateX;

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
  }

  render() {
    return (
      <div className="App">
        <div
          id="welcome-background"
          ref={this.bgRef}>
          <h2 id="welcome">Welcome to Restaurant Roulette!</h2>
          <h3 id="description">Tired of deciding where to eat? Me too...which is why I am building this app. <strong>Step one: click the button below!</strong></h3>
          {this.state.welcomeDrawerIsOpen ?
            <button onClick={() => this.playBackgroundAnimation(false, "#welcome-background")} id="back-button">
              Click me to get started!
            </button> :
            <div
              onClick={() => this.playBackgroundAnimation(true, "#welcome-background")}
              id="closed-drawer-container">
              <div id="back">
                <i className="fas fa-info-circle"></i>
              </div>
            </div>
          }
        </div>
        <div
          id="main-background">
          {this.state.mainDrawerIsOpen ?
            <div
              onClick={() => this.playBackgroundAnimation(false, "#main-background")}
              id="closed-drawer-container">
              <div id="back">
                <i className="fas fa-search"></i>
              </div>
            </div> :
            <div
              onClick={() => this.playBackgroundAnimation(true, "#main-background")}
              id="closed-drawer-container">
              <div id="back"><i className="fas fa-search"></i></div>
            </div>}
          <div className="App-main">
            <img alt="logo" className="App-logo" src={logo}></img>
            <h1><strong>STEP TWO: </strong></h1>
            <h3>Enter your zip to get a choice between 5 locations.</h3>
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
        <div
          id="options-background">
          <div id="options-container">
            <h1><strong>STEP THREE: Pick a place.</strong></h1>
            <h1>I know this can be difficult, but I've really narrowed it down for you. Once you've decided, click an address to copy it</h1>
            <ul ref={this.optionRef} id="option-ul">
              {this.state.venueOptions.length ? this.state.venueOptions.map(venue => <Options key={venue.id} venue={venue} />) : <div></div>}
            </ul>
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
