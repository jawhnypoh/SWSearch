import React, {Component} from 'react';
import ListItems from './components/listItems';
import Search from './components/search';

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
    const response = await starships.get("/search", {
      params: {
        q: searchBarQuery
      }
    })
    this.setState({
      listItems: response.data.results
    })
  }

  componentDidMount() {
    fetch('https://swapi.co/api/starships')
    .then(res => res.json())
    .then((data) => {
      this.setState({ listItems: data.results })
    })
    .catch(console.log)
  }
}

export default App;
