import React from 'react';
import axios from 'axios';

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
        let zipCode = this.state.inputVal;
        let clientID = process.env.REACT_APP_ID;
        let clientSecret = process.env.REACT_APP_SECRET;
        console.log(process.env)
        let queryURL = `https://api.foursquare.com/v2/venues/search?near=${zipCode}&limit=5&intent=browse&categoryId=4d4b7105d754a06374d81259&client_id=${clientID}&client_secret=${clientSecret}&v=20191115`;

        if (regexLiteral.test(this.state.inputVal)) {
            console.log("success")
            axios.get(queryURL)
            .then(response => {
                console.log(response)
                let venues = response.data.response.venues;
                venues.map(venue => {
                    console.log(venue.name)
                })
            })
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