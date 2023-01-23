var express = require('express');
var router = express.Router();
const flights = require('../flights');

/* GET flights listing. */
router.get('/', function(req, res, next) {
  res.json({flights: flights});
});

router.get('/:id/connections', function(req, res, next) {
	let firstFlight = flights.find( (flight) => {
		return flight.id == req.params.id;
	})
	let connections = getConnectingFlights(firstFlight);
  res.json({flights: connections});
});

const getConnectingFlights = (firstFlight) => {
	let arrive = firstFlight.arriveTime;
	connections =  flights.filter( (flight) => {
		let depart = flight.departTime
		// check if arrival is before departure
		let isBefore = arrive < depart; 
		let isCorrectAirport = flight.departingAirport === firstFlight.arrivalAirport
		// check if airport is correct
		return isCorrectAirport && isBefore;
	})
	return connections;
}

module.exports = router;
