import React, { Component } from 'react';
import { Paper, InputBase, Radio } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

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
                            onChange={this.setSearchCategory} /> Starships
                        <Radio
                            value="vehicles"
                            onChange={this.setSearchCategory} /> Vehicles  
                        <Radio
                            value="people"
                            onChange={this.setSearchCategory} /> People 
                        <Radio
                            value="species"
                            onChange={this.setSearchCategory} /> Species   
                        <Radio
                            value="planets"
                            onChange={this.setSearchCategory} /> Planets        
                    </div>
                </center>
            </div>
        )
    }
}

export default Search;