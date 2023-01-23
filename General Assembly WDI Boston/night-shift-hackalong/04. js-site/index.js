// const displayBeers = function () {
//     // const beerData = {
//     //   imageUrl: 'https://static1.squarespace.com/static/57ed18381b631b4217bef4b9/t/5ae8cd3103ce64d2ab537013/1525206334290/website.jpg',
//     //   name: 'Santilla',
//     //   abv: '6.0%',
//     //   review: 'This beer tastes like Pine, Orange Zest, Crisp.  I thought it was delicious.'
//     // }
//
//     // const beerProfileInnerHTML =
//     //     '<img src="https://static1.squarespace.com/static/57ed18381b631b4217bef4b9/t/5ae8cd3103ce64d2ab537013/1525206334290/website.jpg" alt="">' +
//     //     '<h3>Santilla</h3>' +
//     //     '<p>6.0%</p>' +
//     //     '<p>This beer tastes like Pine, Orange Zest, Crisp.  I thought it was delicious.</p>'
//
//     // const beerProfileInnerHTML =
//     //     '<img src="' + beerData.imageUrl + '" alt="">' +
//     //     '<h3>' + beerData.name + '</h3>' +
//     //     '<p>' + beerData.abv + '</p>' +
//     //     '<p>' + beerData.review + '</p>'
//     //
//     // for (let i = 0; i < 6; i++) {
//     //   const beerProfileHTML = document.createElement('div')
//     //   beerProfileHTML.className = 'beer-profile'
//     //   beerProfileHTML.innerHTML = beerProfileInnerHTML
//     //   document.querySelector('#beer-profiles-container').append(beerProfileHTML)
//     // }
// }

const displayReview = function (beerData) {
  const beerProfileInnerHTML =
    '<img src="' + beerData.imageUrl + '" alt="">' +
    '<h3>' + beerData.name + '</h3>' +
    '<p>' + beerData.abv + '</p>' +
    '<p>' + beerData.review + '</p>'

  const beerProfileHTML = document.createElement('div')
  beerProfileHTML.className = 'beer-profile'
  beerProfileHTML.innerHTML = beerProfileInnerHTML
  document.querySelector('#beer-profiles-container').append(beerProfileHTML)
}

const saveReview = function (newBeer) {
  // Save beers
  if (window.localStorage.getItem('beers')) {
    const beers = JSON.parse(window.localStorage.getItem('beers'))
    beers.push(newBeer)
    localStorage.setItem('beers', JSON.stringify(beers))

  // Save first beer
  } else {
    const beers = [newBeer]
    localStorage.setItem('beers', JSON.stringify(beers))
  }
}

const reviewBeer = function (event) {
  event.preventDefault()

  // get inputs from user to create beer object
  const formInputs = document.querySelectorAll('#beer-review-form input')
  const formTextArea = document.querySelectorAll('#beer-review-form textarea')
  const newBeer = {
    name: formInputs[0].value,
    abv: formInputs[1].value,
    imageUrl: formInputs[2].value,
    review: formTextArea[0].value
  }

  // save beer
  saveReview(newBeer)

  // display beer
  displayReview(newBeer)

  // reset form
  event.target.reset()
}

const displayReviews = function () {
  // Display beers from local storage
  const beersString = window.localStorage.getItem('beers')
  if (beersString) {
    const beers = JSON.parse(beersString)
    beers.forEach(function(beer){
      displayReview(beer)
    })
  }
}

const deleteReviews = function () {
  localStorage.setItem('beers', '')
  document.querySelector('#beer-profiles-container').innerHTML = ''
}

window.onload = function () {

  // display beers
  displayReviews()

  // set up form
  document.querySelector('#beer-review-form').onsubmit = reviewBeer
  document.querySelector('#clear-reviews').onclick = deleteReviews
}
