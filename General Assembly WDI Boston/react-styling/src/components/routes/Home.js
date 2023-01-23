import React from 'react'
import SolidButton from '../shared/SolidButton'
import OutlineButton from '../shared/OutlineButton'
import { Link } from 'react-router-dom'

const Home = () => {
  const backgroundImageUrl = 'https://images.unsplash.com/photo-1573994824701-f3c848695ab0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80'
  console.log(backgroundImageUrl)

  return (
    <div>
      <div>
        <h1>Styling Birds 💅</h1>
        <Link to='/about'>
          <SolidButton primaryColor='HotPink' secondaryColor='white'>
            About Us
          </SolidButton>
        </Link>
        <Link to='/stylesheet'>
          <OutlineButton primaryColor='LightSkyBlue' secondaryColor='white'>
            Stylesheet Demo
          </OutlineButton>
        </Link>
      </div>
    </div>
  )
}
export default Home
