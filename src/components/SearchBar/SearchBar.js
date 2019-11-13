import React from 'react';
import axios from 'axios';
import { thisExpression } from '@babel/types';


class SearchBar extends React.Component {
    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this);
        this.getRestaurants = this.getRestaurants.bind(this);
    }

    state = {
        inputVal: ''
    };

    handleChange(event) {
        this.setState({ inputVal: event.target.value });
    };

    getRestaurants = (event) => {
        event.preventDefault();

        let regexLiteral = /^\d{5}(?:[-\s]\d{4})?$/;

        if (regexLiteral.test(this.state.inputVal)) {
            console.log("success")
        }
        else {
            console.log("please enter a valid zip code")
        }
    };

    render() {
        return (
            <div id="searchbar-container">
                <form>
                    <input
                        type="text"
                        value={this.state.inputVal}
                        onChange={this.handleChange}
                        placeholder="enter zip code" />
                    <button onClick={this.getRestaurants}>Search</button>
                </form>
            </div>
        )
    }
};

export default SearchBar;