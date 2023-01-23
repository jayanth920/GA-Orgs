import React, { Component } from 'react'

class Counter extends Component {
  state = {
    number: 0
  }

  add = () => {
    this.setState({
      number: this.state.number + 1
    });
  };

  minus = () => {
    this.setState({
      number: this.state.number - 1
    });
  };

  render () {
    return (
      <div>
        <h1>Counter</h1>
        <button className='plus' onClick={this.add}>+</button>
        <span className='number'>{this.state.number}</span>
        <button className='minus' onClick={this.minus}>-</button>
      </div>
    )
  }
}

export default Counter
