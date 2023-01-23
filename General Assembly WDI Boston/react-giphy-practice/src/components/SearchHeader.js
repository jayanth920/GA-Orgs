import React from 'react'

const SearchHeader = ({ lastSearch }) => (
  <header>
    <div className="brand">
      <img src={process.env.PUBLIC_URL + 'giphy-searcher-logo.svg'} alt="" />
      <h1>Giphy Searcher</h1>
    </div>
    <p className="muted">
      Showing results for <strong>{lastSearch}</strong>
    </p>
  </header>
)

export default SearchHeader
