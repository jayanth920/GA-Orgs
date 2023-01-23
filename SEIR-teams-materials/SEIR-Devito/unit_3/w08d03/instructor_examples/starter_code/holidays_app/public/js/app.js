// create our angular app
const app = angular.module('HolidaysApp', [])
// create our app controller
app.controller('MainController', [ '$http', function($http) {
  this.h5 = 'Holidays! Celebrate!'
 // because of 2 way binding...anytime the holidays array is updated (add/remove)..
 // this will trigger Angular to update the DOM
  this.holidays = []
  this.holiday = ''
  this.createForm = {}

  // createHoliday method
  this.createHoliday = () => {
    $http({
      method:'POST',
      url:'/holidays',
      data: this.createForm
    }).then(response => {
      // holiday was created successfully...what to no now?
      // option 1: call the getHolidays method
      // this.getHolidays()
      // option 2: push object into holidays array
      this.holidays.unshift(response.data)
      this.createForm = {}
      console.log(response)
    }).catch(err => {
      console.log(err)
    })
  } // closes createHoliday

  // getHolidays method
  this.getHolidays = () => {
    $http({
      method: 'GET',
      url: '/holidays'
    }).then( response => {
      // add all the holidays from database to our holidays array
      this.holidays = response.data
      this.holiday = this.holidays[0]
      console.log(this.holidays)
    }).catch( err => { console.log(err)})
  } // close getHolidays

  // deleteHoliday method
  this.deleteHoliday = id => {
    $http({
      method:'Delete',
      url: '/holidays/' + id
      // the delete has been successful
    }).then(response => {
      console.log(response.data)
      // target the object in the holidays array and delete it
      // findIndex is a loop just like .forEach, .map, .filter, .reduce
      const removeByIndex = this.holidays.findIndex(holiday => holiday._id === id)
      // remove it from the array
      this.holidays.splice(removeByIndex, 1)
    }).catch(err => console.log(err))
  } // close deleteHoliday

  // updateCelebrated method
  this.updateCelebrated = holiday => {
    holiday.celebrated = !holiday.celebrated
    $http({
      method:'PUT',
      url: '/holidays/' + holiday._id,
      data: { celebrated: holiday.celebrated}
    }).then(response => {
      console.log(response.data.celebrated)
    }).catch(err => console.log(err))
  } // close updateCelebrated

  // chooseOneHoliday method
  this.chooseOneHoliday = holiday => {
    this.holiday = holiday
    console.log(this.holiday.name)
  }

  // call the getHolidays method on page load
  this.getHolidays()

}]) // closes app.controller
