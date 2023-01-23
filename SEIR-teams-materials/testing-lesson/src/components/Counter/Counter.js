import React from 'react';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  add = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  minus = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };

  render() {
    return (
      <>
        <span className="count">{this.state.count}</span>
        <h1>Counter</h1>
        <button className="plus" onClick={this.add}>
          +
        </button>
        <button className="minus" onClick={this.minus}>
          -
        </button>
      </>
    );
  }
}

export default Counter;
