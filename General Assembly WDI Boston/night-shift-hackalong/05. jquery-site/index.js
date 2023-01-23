const displayReview = function (beerData) {
  const beerProfileHTML =
    '<div class="beer-profile">' +
      '<img src="' + beerData.imageUrl + '" alt="">' +
      '<h3>' + beerData.name + '</h3>' +
      '<p>' + beerData.abv + '</p>' +
      '<p>' + beerData.review + '</p>' +
    '</div>'

  $('#beer-profiles-container').append(beerProfileHTML)
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
  const formInputs = $('#beer-review-form input')
  const formTextArea = $('#beer-review-form textarea')
  const newBeer = {
    name: $(formInputs[0]).val(),
    abv: $(formInputs[1]).val(),
    imageUrl: $(formInputs[2]).val(),
    review: $(formTextArea[0]).val()
  }

  // save beer
  saveReview(newBeer)

  // display beer
  displayReview(newBeer)

  // reset form
  $(event.target)[0].reset()
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
  $('#beer-profiles-container').html('')
}

$(function () {

  // display beers
  displayReviews()

  // set up form
  $('#beer-review-form').on('submit', reviewBeer)
  $('#clear-reviews').on('click', deleteReviews)
})
