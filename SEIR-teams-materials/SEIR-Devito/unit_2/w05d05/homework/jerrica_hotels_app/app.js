// ==================================
// DEPENDENCIES
// ==================================
const mongoose = require('mongoose');

// ==================================
// CONFIGURATION
// ==================================
const mongoURI = 'mongodb://localhost:27017/hotel';
const db = mongoose.connection;

mongoose.Promise = global.Promise;
mongoose.connect ( mongoURI , { useNewUrlParser: true},
  () => console.log( 'Mongo running at' , mongoURI )
);
mongoose.set('useCreateIndex', true);

db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('connected', () => console.log('mongo connected: ', mongoURI));
db.on('disconnected', () => console.log('mongo disconnected'));

// ==================================
// MODELS
// ==================================
const Hotel = require('./models/hotel.js');
const hotelSeed = require('./models/seed.js');

// ==================================
// SEED
// ==================================
// Hotel.create( hotelSeed, ( err , data ) => {
//     if ( err ) console.log ( err.message )
//       console.log( "added provided hotel data" )
//     }
// );

// if seeded too many times
// Hotel.collection.drop();

// check hotel count
Hotel.countDocuments({} , (err , data)=> {
   if ( err ) console.log( err.message );
    console.log ( `There are ${data} hotels in this database` );
});

// ==================================
// MONGOOSE OPERATIONS
// ==================================
// -- Create a hotel using the above schema
// Hotel.create({
//   name: 'The Tipton Hotel',
//   location: 'Boston',
//   rating: 5,
//   vacancies: false,
//   tags: ['no running in the lobby'],
//   rooms: [{
//     roomNumer: 613,
//     size: "King",
//     price: 100,
//     booked: true
//   }]
// }, (err, newHotel) => {
//   if(err) {
//     console.log(err);
//   } else {
//     console.log(newHotel);
//   }
// })

// -- let's find all our hotels and console.log them
// Hotel.find({}, (err, hotelData) => {
//   console.log(hotelData);
//   // console.log(hotelData[0].rooms[0]);
//   // for(let i = 0; i < hotelData[0].rooms.length; i++) {
//   //   console.log(hotelData[0].rooms[i].price);
//   // }
// })

// -- find all the hotels but only return the hotel name and console.log them
// Hotel.find({}, 'name', (err, hotelNames) => {
//   console.log(hotelNames);
// })

// -- find just your hotel using a search parameter that would only match your hotel
// Hotel.find({ name: 'The Tipton Hotel' }, (err, ourHotel) => {
//   console.log(ourHotel);
// })

// -- find all the hotels that have vacancies, also exclude ratings.
// Hotel.find(
//   { vacancies: true },
//   { rating: 0 },
//   (err, vacantHotels) => {
//     console.log(vacantHotels);
// })

// -- turns out Hotelicopter was an April Fool's prank! Let's delete that one from our database
// Hotel.deleteOne({ name: 'Hotelicopter' }, (err, data) => {
//   console.log(data);
// })

// Hilbert's Hotel is getting terrible ratings all it does is give everyone headaches and no room service. Let's just remove that one as well
// Hotel.deleteOne({ name: 'Hilbert\'s Hotel' }, (err, data) => {
//   console.log(data);
// })

// The hotel in the Colorado Rockies has been closed for undisclosed reasons. Delete this hotel too
// Hotel.deleteOne({ location: 'Colorado Rockies' }, (err, data) => {
//   console.log(data);
// })

// -- The Great Northern's rating is only a 3! Update that to be a 5
// Hotel.findOneAndUpdate(
//   { name: 'The Great Northern' },
//   { $set: { rating: 3 } },
//   { new: true },
//   (err, updatedHotel) => {
//     console.log(updatedHotel);
//   }
// )

// -- Motel Bambi is now fully booked, change the vacancies to false
// Hotel.findOneAndUpdate(
//   { name: 'Motel Bambi' },
//   { $set: { vacancies: false } },
//   { new: true },
//   (err, updatedHotel) => {
//     console.log(updatedHotel);
//   }
// )

// -- Things are on the decline for the Motel in 'White Bay, Oregon', change the rating to 2
// Hotel.findOneAndUpdate(
//   { location: 'White Bay, Oregon' },
//   { $set: { rating: 2 } },
//   { new: true },
//   (err, updatedHotel) => {
//     console.log(updatedHotel);
//   }
// )
