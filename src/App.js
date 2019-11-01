import React, {Component} from 'react';
import ListItems from './components/listItems';
import Search from './components/search';

class App extends Component {
  render () {
    return (
      <ListItems listItems={this.state.listItems} />
    );
  }

  state = {
    listItems: []
  };

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
