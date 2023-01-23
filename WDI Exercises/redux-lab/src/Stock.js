import React, { Component } from 'react'

class Stock extends Component {
  render() {
    let stock = this.props.stocks.find((stock) => stock.symbol === this.props.match.params.symbol)
    return (
      <div>
        <h2>{stock.name} ({stock.symbol})</h2>
        <p>Current Price: {stock.price}</p>
        <button value={stock.symbol} onClick={this.props.onRemove}>Untrack Stock</button>
      </div>
    );
  }
}

export default Stock;
