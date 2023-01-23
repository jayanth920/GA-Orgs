import React from 'react'
import ReactDOM from 'react-dom'
// import App from './App'; Whenever you're ready for the notes app
import Playground from './Playground'
import * as serviceWorker from './serviceWorker'

// ReactDOM.render( <App / > , document.getElementById('root')); Whenever you're ready for the notes app
ReactDOM.render(<Playground />, document.getElementById('root'))


serviceWorker.unregister();
