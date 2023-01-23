import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';

import Home from './Home';
import About from './About';

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <h1>Contact</h1>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
          </nav>
        </header>
        <main>
          <Switch>
            <Route exact path="/" render={props => <Home {...props} />} />
            <Route path="/about" render={props => <About {...props} />} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
