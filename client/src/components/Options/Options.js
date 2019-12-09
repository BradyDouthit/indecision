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
            <li className="option">{this.props.venue.name}</li>
        )
    }
}

export default Options;