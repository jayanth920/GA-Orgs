import React, { Component } from 'react';
import axios from 'axios'
import Pokemon from './Pokemon'

export default class PokeList extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            <ul className="container collection with-header" style={{marginTop: 25}}>

            </ul>
        )
    }
}
