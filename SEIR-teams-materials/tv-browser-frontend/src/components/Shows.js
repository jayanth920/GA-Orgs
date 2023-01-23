import React, { useEffect } from 'react';
import Show from './Show'
import axios from 'axios'

const Shows = ({ shows, setShows }) => {

    useEffect(() => {
        // Write your GET fetch() or axios() request here

        
    }, [])

    if(!shows){
        return <h1>Loading...</h1>
    }

    return (
        <div className="shows-container">
            {shows.map((show, index) => (
                <Show key={index} show={show} index={index}/>
            ))}
        </div>
    );
};

export default Shows;