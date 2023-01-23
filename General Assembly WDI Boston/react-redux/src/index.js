import React from 'react'
import { render } from 'react-dom'
import { HashRouter } from 'react-router-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import App from './components/App/App'
import rootReducer from './reducers'
import './index.scss'

const store = createStore(
  rootReducer,
  applyMiddleware(thunkMiddleware)
)

render(
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>,
  document.getElementById('root')
)
