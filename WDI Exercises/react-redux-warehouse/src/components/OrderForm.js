import React, { Component } from "react";
import "./OrderForm.css";

export default class OrderForm extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    let productName = e.target[0].value;
    let quantity = e.target[1].value;

    console.log(productName, quantity);

    e.target[0].value = "";
    e.target[1].value = "";
  }

  render() {
    return (
      <form className="OrderForm" onSubmit={this.handleSubmit}>
        <p>
          <label>Product Name:</label>
          <input type="text" />
        </p>
        <p>
          <label>Quantity:</label>
          <input type="number" />
        </p>
        <p>
          <button type="submit">Submit</button>
        </p>
      </form>
    );
  }
}
