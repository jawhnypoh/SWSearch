import React, { Component } from 'react';
import { Paper, InputBase, Radio } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

class Search extends Component {
    state = {
        searchCategory: ''
    };

    handleChange = (event) => {
        this.setState({
            searchCategory: event.target.value
        });
        console.log(event.target.value);
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
                    <div className="radios-container">
                        <Radio
                            value="starships"
                            checked={this.state.searchCategory === "starships"}
                            onChange={this.handleChange} /> Starships
                        <Radio
                            value="vehicles"
                            checked={this.state.searchCategory === "vehicles"}
                            onChange={this.handleChange} /> Vehicles  
                        <Radio
                            value="people"
                            checked={this.state.searchCategory === "people"}
                            onChange={this.handleChange} /> People 
                        <Radio
                            value="species"
                            checked={this.state.searchCategory === "species"}
                            onChange={this.handleChange} /> Species   
                        <Radio
                            value="planets"
                            checked={this.state.searchCategory === "planets"}
                            onChange={this.handleChange} /> Planets        
                    </div>
                </center>
            </div>
        )
    }
}

export default Search;