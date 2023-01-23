// Components must start with an uppercase letter
// Class Components:
//  - extend (inherit) the React.Component
//  - must include a render method that returns UI
//  - can include state if needed
//  - can include methods

// Functional Components:
//   - doesn't allow state
//   - doesn't include methods

// JSX
//   - it can only return one parent element...BUT...
//     that element can contain an infinite number of elements

// create a Square Component that renders an h4 with some text

// extends allows the Component to inherit from the
// React.Component
class Square extends React.Component {
  render () {
    return (
      <h4> square </h4>
    )
  }
}

class Board extends React.Component {
  render () {
    // render the Square Component 9x
    return (
      <div className='board'>
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
      </div>
    )
  }
}

class Player extends React.Component {
  render () {
    console.log('this is props from Player', this.props)
    return (
      <div className={this.props.whichPlayer}>
        <h2>Player {this.props.whichPlayer}</h2>
        <h3>Wins: </h3>
      </div>
    )
  }
}

class Header extends React.Component {
  render () {
    return (
       <h1> React Tac Toe - Header</h1>
    )
  }
}

class App extends React.Component {
  // render method
  render () {
    return (
      // example of nesting Components
      <div>
        <Header />
        <Player whichPlayer='X' />
        <Player whichPlayer='O' />
        <Board />
      </div>
    )
  }
}

ReactDOM.render(
  // what parent Component do you want to render
  // in this case it's the App Component
  <App />,
  // where to render it
  document.querySelector('.container')
)
