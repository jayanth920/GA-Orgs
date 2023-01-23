import { useState, useEffect } from 'react'
import { Route } from 'react-router-dom'
import './App.css';
import Shows from './components/Shows'
import ShowID from './components/ShowID'
import Form from './components/Form'
import Nav from './components/Nav'

function App() {
  const [shows, setShows] = useState()
  const [persons, setPersons] = useState([])


  return (
    <div>
        <Nav/>
        <Route path="/" exact render={() => <Shows shows={shows} setShows={setShows}/>}/>
        <Route path="/add-show" component={Form}/>
        <Route path="/shows/:id" render={(routerProps) => <ShowID match={routerProps.match}/>}/>
    </div>
  );
}

export default App;
