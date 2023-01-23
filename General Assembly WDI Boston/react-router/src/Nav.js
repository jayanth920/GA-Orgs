import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => (
  <header>
    <h1>MyMDB</h1>
    <Link to='/'>Home</Link>
    <Link to='/movies'>Movies</Link>
    <hr />
  </header>
)

export default Nav
