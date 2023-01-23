import React, { Component } from 'react'


class NewStock extends Component {
  render () {
    return (
      <form onSubmit={this.props.onSubmit}>
        <p><input type="text" name="name" placeholder="Name" onChange={this.props.onInput} /></p>
        <p><input type="text" name="symbol" placeholder="Symbol" onChange={this.props.onInput} /></p>
        <p><input type="number" name="price" placeholder="Current Price" onChange={this.props.onInput} /></p>
        <p><input type="submit" value="Add"/></p>
      </form>
    )
  }
}


export default NewStock
