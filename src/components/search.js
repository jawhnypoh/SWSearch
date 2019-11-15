import React, { Component } from 'react';
import { Paper, InputBase } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

class Search extends Component {
    state = {
        searchCategory: ''
    };

    handleSubmit = event => {
        event.preventDefault();
        this.props.handleFormSubmit(this.state.query);
    }

    setSearchCategory(event) {
        console.log(event.target.value);
    }

    render() {
        return(
            <div className="search-bar-div">
                <center>
                    <form onSubmit={this.handleSubmit} className="ui-form">
                        <Paper className="search-field">
                            <SearchIcon color="grey"/>
                            <InputBase
                                className="swapi-search"
                                placeholder="Search the SWAPI..."
                                onChange={this.handleChange} name="swapi-search"
                                type="text" value={this.state.query} />
                        </Paper>
                    </form>
                </center>
            </div>
        )
    }
}

export default Search;