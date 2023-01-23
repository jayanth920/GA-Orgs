import React, { Component } from 'react';
import './Header.css';

class Header extends React.Component {
  render() {
    return (
      <header>
        <nav>
          <img src="http://static-assets.generalassemb.ly/logos/generalassembly-open-graph.png" alt=""></img>
          <span>&</span>
          <img src="http://winedinewith.us/wp-content/uploads/2012/10/custom-logo-w-text2.png" alt=""></img>
        </nav>
        <h1>Review <a target="_blank" href="https://www.nightshiftbrewing.com/our-beer/">the Crew</a></h1>
      </header>
    )
  }
}

export default Header;
