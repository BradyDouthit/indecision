import React from 'react';
import './Options.css';

class Options extends React.Component {
    constructor(props) {
        super(props)
    }
    state = {
        
    }
    render() {
        return (
            <>
            <li className="option">{this.props.venue.name}</li>
            <li className="address">{this.props.venue.location.formattedAddress[0] + ", " +  this.props.venue.location.formattedAddress[1]}</li>
            </>
        )
    }
}

export default Options;