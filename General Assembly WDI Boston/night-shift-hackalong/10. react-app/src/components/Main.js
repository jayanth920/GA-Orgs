import React, { Component } from 'react';
import './Main.css';

class Main extends React.Component {
  state = { beers: [] }
  componentDidMount(){
    const beersString = window.localStorage.getItem('beers')
    if (beersString) {
      const beers = JSON.parse(beersString)
      this.setState({beers: beers})
    }
  }
  handleSubmit = event => {
    event.preventDefault()

    const newBeer = {
      name: event.target[0].value,
      abv: event.target[1].value,
      imageUrl: event.target[2].value,
      review: event.target[3].value
    }
    const updatedBeers = this.state.beers.concat(newBeer);
    localStorage.setItem('beers', JSON.stringify(updatedBeers))
    this.setState({beers: updatedBeers})
    event.target.reset()
  }
  handleClear = event => {
    event.preventDefault()
    localStorage.setItem('beers', '')
    this.setState({beers: []})
  }
  render() {
    const beers = this.state.beers
    return (
      <main>
        <div className="video-container">
          <iframe src="https://www.youtube.com/embed/H5Qog2yU7Pc" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
        </div>
        <div className="form-container">
          <form onSubmit={this.handleSubmit}>
            <input type="text" placeholder="Beer"></input>
            <input type="text" placeholder="ABV"></input>
            <input type="text" placeholder="Image URL"></input>
            <textarea rows="8" placeholder='Tasting Notes'></textarea>
            <input type="submit" value="Save Review"></input>
          </form>
        </div>
        <div id="beer-profiles-container">
          {beers.map((beer, index) => (
            <div className="beer-profile" key={index}>
              <img src={beer.imageUrl} alt=""></img>
              <h3> {beer.name} </h3>
              <p> {beer.abv} </p>
              <p> {beer.review} </p>
            </div>
          ))}
        </div>
        <button type="button" onClick={this.handleClear}>Clear Reviews</button>

      </main>
    )
  }
}

export default Main;
