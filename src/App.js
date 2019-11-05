import React, {Component} from 'react';
import ResultsList from './components/resultsList';
import Search from './components/search';
import Starships from './apis/starships';

class App extends Component {
  render () {
    return (
      <div>
        <Search handleFormSubmit={this.handleSubmit} />
        <ResultsList resultsList={this.state.resultsList} />
      </div>
    );
  }

  state = {
    resultsList: []
  };

  handleSubmit = async (searchBarQuery) => {
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
}

export default App;
