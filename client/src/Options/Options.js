import React from 'react';
import './Options.css';

class Options extends React.Component {
    constructor(props) {
        super(props)
    }
    state= {
        
    }
    render() {
        return (
            <div>
                <ul id="option-ul">
                    <li>{this.props.venue.name}</li>
                </ul>
            </div>
        )
    }
}

export default Options;