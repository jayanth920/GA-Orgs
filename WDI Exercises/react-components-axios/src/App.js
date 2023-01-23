import React, { Component } from 'react';
import Header from './components/Header'
import PokeList from './components/PokeList'

class App extends Component {
  render() {
    return (
      <div className="App">
          <Header />
          <PokeList />
      </div>
    );
  }
}

export default App;
