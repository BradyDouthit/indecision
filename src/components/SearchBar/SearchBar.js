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

        let zipCode = this.state.inputVal;
        let apiKey = 'AIzaSyCFp64ncQAuA2JWf1Qqi1nzwGMNTWlLzpU';
        let baseURL = 'https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=';
        let searchTerms = `Restaurants%20${zipCode}`;
        let parameters = `inputtype=textquery&fields=photos,formatted_address,name,rating,opening_hours,geometry&key=${apiKey}`;
        let regexLiteral = /^\d{5}(?:[-\s]\d{4})?$/;

        if (regexLiteral.test(this.state.inputVal)) {
            console.log("success")
            console.log(baseURL + searchTerms + parameters)
            axios.get(`https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=Museum%20of%20Contemporary%20Art%20Australia&inputtype=textquery&fields=photos,formatted_address,name,rating,opening_hours,geometry&key=${apiKey}`)
            .then(response => {
                this.setState({ inputVal: '' })
                console.log(response)
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