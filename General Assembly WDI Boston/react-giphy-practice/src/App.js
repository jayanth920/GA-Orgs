import React, { useEffect, useState } from 'react'
import axios from 'axios'
import SearchHeader from './components/SearchHeader'
import SearchForm from './components/SearchForm'
import SearchResults from './components/SearchResults'

const App = () => {
  const searchOptions = {
    key: process.env.REACT_APP_GIPHY_KEY,
    limit: 25,
    rating: 'G',
    api: 'https://api.giphy.com/v1/gifs',
    endpoint: '/search'
  }

  const [images, setImages] = useState([])
  const [searchString, setSearchString] = useState('minions')
  const [lastSearch, setLastSearch] = useState('')

  useEffect(() => {
    getImages(searchString)
  }, [])

  const getImages = searchString => {
    const url = `${searchOptions.api}${searchOptions.endpoint}?api_key=${searchOptions.key}&q=${searchString} &limit=${searchOptions.limit}&offset=${searchOptions.offset}&rating=${searchOptions.rating}&lang=en`

    axios(url)
      .then(response => {
        setImages(response.data.data)
        setLastSearch(searchString)
        setSearchString('')
      })
      .catch(console.error)
  }

  const handleChange = event => {
    setSearchString(event.target.value)
  }

  const handleSubmit = event => {
    event.preventDefault()
    getImages(searchString)
  }

  return (
    <div className="container-fluid">
      <SearchHeader lastSearch={lastSearch} />
      <SearchForm
        handleChange={handleChange} handleSubmit={handleSubmit}
        searchString={searchString}
      />
      <SearchResults images={images} />
    </div>
  )
}

export default App
