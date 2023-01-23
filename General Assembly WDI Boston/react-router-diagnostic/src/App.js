import React from 'react'
import { Route } from 'react-router-dom'
import Dashboard from './components/Dashboard'
import Nav from './components/Nav'

// const jobOpenings = [
//   'Full Stack Developer',
//   'UX Designer',
//   'QA Analyst'
// ]

const App = () => (
  <React.Fragment>
    <Nav />
    <h1>Welcome to a React App!</h1>
    <Route path="/dashboard" component={Dashboard}/>
  </React.Fragment>
)

export default App
