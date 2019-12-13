import React from 'react';
import anime from 'animejs';

class Options extends React.Component {
    constructor(props) {
        super(props)
    }
    state = {
        copySuccess: false
    }

    copyToClipboard = (e) => {
        this.textArea.select();
        document.execCommand('copy');
        e.target.focus();
        this.setState({ copySuccess: true });
    };

    render() {
        return (
            <>
            <li className="option">{this.props.venue.name}</li>
            <form>
            <input 
                onClick={this.copyToClipboard} 
                className="address"
                ref={(textarea) => this.textArea = textarea}
                value={this.props.venue.location.formattedAddress[0] + ", " +  this.props.venue.location.formattedAddress[1]}
                readOnly={true} />                    
            </form>
            {this.state.copySuccess ? <div>Copied!</div> : <div></div>}
            </>
        )
    }
}

export default Options;