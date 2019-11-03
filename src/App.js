import React, {Component} from 'react';
import ListItems from './components/listItems';
import Search from './components/search';
import Starships from './apis/starships';

class App extends Component {
  render () {
    return (
      <div>
        <Search handleFormSubmit={this.handleSubmit} />
        <ListItems listItems={this.state.listItems} />
      </div>
    );
  }

  state = {
    listItems: []
  };

  handleSubmit = async (searchBarQuery) => {
    const response = await Starships.get("/?}", {
      params: {
        search: searchBarQuery
      }
    })

    console.log("response data:", response.data)
    this.setState({
      listItems: response.data.results
    })
  }
}

export default App;
