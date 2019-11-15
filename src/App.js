import React, {Component} from 'react';
import ResultsList from './components/resultsList';
import { Radio } from '@material-ui/core';
import Search from './components/search';
import Starships from './apis/starships';
import Vehicles from './apis/vehicles';
import People from './apis/people';

class App extends Component {
  render () {
    return (
      <div>
        <Search handleFormSubmit={this.handleSubmit} />
        <center>
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
        <ResultsList resultsList={this.state.resultsList} />
      </div>
    );
  }

  state = {
    resultsList: [],
    searchCategory: ''
  };

  handleChange = (event) => {
    this.setState({
        searchCategory: event.target.value
    });
    console.log(event.target.value);
  };

  handleSubmit = async (searchBarQuery) => {
    console.log("searchCategory: ", this.state.searchCategory);
    if(this.state.searchCategory === "starships") {
      const response = await Starships.get("/?", {
        params: {
          search: searchBarQuery
        }
      })
      console.log("response data:", response.data)
      this.setState({
        resultsList: response.data.results
      })
    }
    else if(this.state.searchCategory === "vehicles") {
      const response = await Vehicles.get("/?", {
        params: {
          search: searchBarQuery
        }
      })
      console.log("response data:", response.data)
      this.setState({
        resultsList: response.data.results
      })
    }
    else if(this.state.searchCategory === "people") {
      const response = await People.get("/?", {
        params: {
          search: searchBarQuery
        }
      })
      console.log("response data:", response.data)
      this.setState({
        resultsList: response.data.results
      })
    }
  }
}

export default App;
