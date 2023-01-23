import React from 'react'
import { render } from 'react-testing-library'
import App from '../App'

it('App loads with "Hello World!"', () => {
  const { queryByText } = render(
    <App />
  )

  expect(queryByText(/Hello World!/i), 'App should say "Hello World!"').toBeTruthy()
})
