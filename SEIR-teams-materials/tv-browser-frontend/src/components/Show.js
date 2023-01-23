import React from 'react';
import { Link } from 'react-router-dom'

const Show = ({ show, index }) => {
    return (
        <div>
            <Link to={`/shows/${show._id}`}>
                <img src={show.image.medium}/>   
            </Link>
        </div>
    );
};

export default Show;