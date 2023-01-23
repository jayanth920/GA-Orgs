import React, { useState, useEffect} from 'react';
import { useHistory, Link } from 'react-router-dom'
import axios from 'axios'

const ShowID = ({ match }) => {
    let history = useHistory()

    const [show, setShow] = useState('')
    const [modal, setModal] = useState(false)

    useEffect(() => {
        const id = match.params.id
        fetch(`http://localhost:3000/shows/${id}`)
            .then(res => res.json())
            .then(res => setShow(res))
    }, [match.params.id])

    const handleChange = (event) => {
        let network = show.network
        if(event.target.name === "network"){
            setShow({...show, network: {...network, name: event.target.value}})
        } else {
            setShow({...show, [event.target.name]: event.target.value})
        }
    }

    const editShowPage = () => {
        setModal(true)
    }

    const closeModal = () => {
        setModal(false)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        // Write your PUT fetch() or axios() request here



        history.push('/')
    }

    const handleDelete = () => {
        // Write your DELETE fetch() or axios() request here


        history.push('/')
    }


    if(!show){
        return <h1>Loading...</h1>
    }

    return (
        <div className="showID">
            { modal ? 
                <div className="modal">
                    <div className="modal-form">
                        <h2>Edit this show:</h2>
                        <form onSubmit={handleSubmit}>
                            <label for="name"/>
                            <input onChange={handleChange} name="name" value={show.name}/>
                            <input onChange={handleChange} name="network" value={show.network.name}/>
                            <input onChange={handleChange} name="runtime" value={show.runtime}/>
                            <br/>
                            <button type="submit">Submit</button>
                        </form>
                        <button onClick={closeModal}>Close</button>
                    </div>
                </div> 
                : null
            }
            <img className="image-medium" src={show.image.medium}/>
            <h2>{show.name}</h2>
            <h3>Network: {show.network.name}</h3>
            <h3>Run time: {show.runtime} mins.</h3>

            <button onClick={editShowPage}>Edit</button>
            <button onClick={handleDelete}>Delete</button>
        </div>
    );
};

export default ShowID;