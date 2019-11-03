import React, { Component } from 'react';

class Search extends Component {
    state = {
        query: ''
    };

    handleChange = (event) => {
        this.setState({
            query: event.target.value
        });
    };

    handleSubmit = event => {
        event.preventDefault();
        this.props.handleFormSubmit(this.state.query);
    }

    render() {
        return(
            <div className="search-bar-div">
                <form onSubmit={this.handleSubmit} className="ui-form">
                    <div className="search-field">
                        <label htmlFor="swapi-search">Search The SWAPI</label>
                        <input onChange={this.handleChange} name='swapi-search'
                        type="text" value={this.state.query} />
                    </div>
                </form>
            </div>
        )
    }
}

export default Search;