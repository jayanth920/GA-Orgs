import React, { Component } from 'react'
import {
  Route,
  Link,
  Redirect,
  Switch,
  withRouter
} from "react-router-dom"
import Dashboard from "./Dashboard"
import Stock from "./Stock"
import NewStock from "./NewStock"
import "./App.css"

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      stocks: [
        {name: "Apple Inc.", symbol: "AAPL", price: 140.64},
        {name: "Microsoft Corporation", symbol: "MSFT", price: 64.98},
        {name: "Alphabet Inc.", symbol: "GOOGL", price: 835.14},
        {name: "Facebook, Inc.", symbol: "FB", price: 140.34},
        {name: "Oracle Corporation", symbol: "ORCL", price: 44.65},
        {name: "Intel Corporation", symbol: "INTL", price: 36.16}
      ],
      newStock: {}
    }
    this.handleInput = this.handleInput.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleRemove = this.handleRemove.bind(this)
  }

  handleInput (e) {
    this.setState({
      newStock: {
        ...this.state.newStock,
        [e.target.name]: e.target.value
      }
    })
  }

  handleSubmit (e) {
    e.preventDefault()
    this.setState({
      stocks: [
        ...this.state.stocks,
        this.state.newStock
      ],
      newStock: {}
    })
    this.props.history.push(`/stocks/${this.state.newStock.symbol}`)
  }

  handleRemove (e) {
    this.setState({
      stocks: this.state.stocks.filter((stock) => stock.symbol !== e.target.value)
    })
    this.props.history.push('/stocks')
  }

  render() {
    return (
      <div>
        <div className="nav">
          <div className="nav-item"><span className="nav-logo">iStocks</span></div>
          <div className="nav-item"><Link to="/stocks">Home</Link></div>
          <div className="nav-item"><Link to="/stocks/new">Add Stock</Link></div>
        </div>

        <div className="main">
          <Switch>
            <Route exact path="/stocks" render={() => <Dashboard stocks={this.state.stocks} />} />
            <Route exact path="/stocks/new" render={() => <NewStock onInput={this.handleInput} onSubmit={this.handleSubmit} />} />
            <Route exact path="/stocks/:symbol" render={(props) => <Stock {...props} stocks={this.state.stocks} onRemove={this.handleRemove} />} />
            <Route path="/*" render={() => <Redirect to="/stocks" />} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default withRouter(App);
