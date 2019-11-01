import React, { Component } from 'react';

class Search extends Component {
    constructor(props) {
        super(props)
        this.state = {
            query: null,
            starships: [],
        }
    }

    onChange = e => {
        const { value } = e.target;
        this.setState({
            query: value
        });

        this.searchStarships(value);
    };

    searchStarships(query) {
        const URL = 'https://swapi.co/api/starships/';

        if(query) {
            let queryURL = URL + '?search=${query}';
            console.log(queryURL);

            fetch(queryURL)
            .then(res => res.json())
            .then((data) => {
                this.setState({ starships: data.results })
            })
            console.log("Search state: ", this.state.starships)
            .catch(console.log)
        }
        else {
            // Query was empty, so just return default results from API
            fetch(URL)
            .then(res => res.json())
            .then((data) => {
                this.setState({ starships: data.results })
            })
            console.log("Search state: ", this.state.starships)
            .catch(console.log)
        }
    }

    componentDidMount() {
        this.searchStarships(this.state.query);
    }

    render() {
        return(
            <form>
                <input
                    type="text"
                    className="search-box"
                    placeholder="Search for..."
                    onChange={this.onChange} />
            </form>
        )
    }

}

export default Search;