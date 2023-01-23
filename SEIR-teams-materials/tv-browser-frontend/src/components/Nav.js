import React from 'react';
import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <div className="nav">
            <Link to="/">
                <img className="logo" src="https://pmcvariety.files.wordpress.com/2015/06/tv-land-logo.jpg?w=1000"/>
            </Link>    
            <nav>
                <Link to="/" className="links">Home</Link>
                <Link to='/add-show' className="links">Add Show</Link>
            </nav>
        </div>
    );
};

export default Nav;