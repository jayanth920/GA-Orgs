import React, { Component } from 'react';


class MyShoppingCart extends Component {
  render() {
    return (
      <div className="MyShoppingCart">
        <h2>Your Cart!</h2>
        {this.props.cart.map((item, index, arr) => {
          console.log('inside map', item, index, arr)
          return (
            <li
              onClick={() => this.props.handleRemove(index)}
              key={index}
            >{item.name}</li>
          )
        })}
      </div>
    );
  }
}

export default MyShoppingCart;
