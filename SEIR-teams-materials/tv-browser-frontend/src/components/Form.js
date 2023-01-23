import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'
import axios from 'axios'

const Form = () => {
    const history = useHistory()
    const [show, setShow] = useState({name: '', network: {name: ''}, runtime: '', image: {medium: ''}})

    const handleChange = (event) => {
        event.preventDefault()
        if(event.target.name === 'network'){
            const network = show.network
            setShow({...show, network: {name: event.target.value}})
        } else if(event.target.name === 'image'){
            const image = show.image
            setShow({...show, image: {...image, medium: event.target.value}})
        } else {
            setShow({...show, [event.target.name]: event.target.value})
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        // Write your POST fetch() or axios() request here
        
            
            
        history.push('/')
        
    }


    const gif = 'https://media.giphy.com/media/l1KUvnGPmDLIzGAEw/giphy.gif'

    return (
        <div className="form-container">
            <img className="giphy" src={gif}/>
            <form onSubmit={handleSubmit} className="create-form">
                <label for="name">Name: </label>
                <input onChange={handleChange} name="name" id="name" value={show.name} placeholder="Name"/>
                <label for="network">Network: </label>
                <input onChange={handleChange} name="network" id="network"value={show.network.name} placeholder="Network"/>
                <label for="runtime">Run Time: </label>
                <input onChange={handleChange} name="runtime" id="runtime" value={show.runtime} placeholder="Run time"/>
                <label for="image">Image URL: </label>
                <input onChange={handleChange} name="image" id="image" value={show.image.original} placeholder="Image URL"/>
                <button id="button" type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Form;