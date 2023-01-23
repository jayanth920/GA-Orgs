// Dependencies
const mongoose = require('mongoose');
const Tweet = require('./tweet.js');

// Configuration
const mongoURI = 'mongodb://localhost:27017/' + 'tweets';
const db = mongoose.connection;

// Connect to Mongo
mongoose.connect(mongoURI);

// Connection Error/Success
db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('connected', () => console.log('mongo connected', mongoURI));
db.on('disconnected', () => console.log('mongo disconnected'));

// Open the connection
db.on('open', () => console.log('Connection made'));

// proof of concept of how to close the connection
// setTimeout(()=>{ db.close()}, 5000);

// req.body = {}
const myFirstTweet = {
  title: 'Deep Thoughts',
  body: 'Friends, I have been navel-gazing',
  author: 'Karolin'
}

// Tweet.create(myFirstTweet, (error, tweet) => {
//   if(error){
//     console.log(error);
//   } else {
//     console.log(tweet);
//   }
//   db.close();
// });

const manyTweets = [
  {
    title: 'Deep Thoughts',
    body: 'Friends, I have been navel-gazing',
    author: 'Karolin'
  },
  {
    title: 'Sage Advice',
    body: 'Friends, I am vegan and so should you',
    author: 'Karolin',
    likes: 20
  },
  {
    title: 'Whole Reality',
    body: 'I shall deny friendship to anyone who does not exclusively shop at Whole Foods',
    author: 'Karolin',
    likes: 40
  },
  {
    title: 'Organic',
    body: 'Friends, I have spent $2300 to be one of the first people to own an organic smartphone',
    author: 'Karolin',
    likes: 162
  },
  {
    title: 'Confusion',
    body: 'Friends, why do you just respond with the word `dislike`? Surely you mean to click the like button?',
    likes: 1
  },
  {
    title: 'Vespa',
    body: 'Friends, my Vespa has been upgraded to run on old french fry oil. Its top speed is now 11 mph',
    author: 'Karolin',
    likes: 2
  },
  {
    title: 'Licensed',
    body: 'Friends, I am now officially licensed to teach yogalates. Like this to get 10% off a private lesson',
    author: 'Karolin',
    likes: 3
  },
  {
    title: 'Water',
    body: 'Friends, I have been collecting rain water so I can indulge in locally sourced raw water. Ask me how',
    author: 'Karolin',
  },
];
//
// Tweet.insertMany(manyTweets, (error, tweets) => {
//   if(error){
//     console.log(error);
//   } else {
//     console.log(tweets);
//   }
//   db.close();
// })
// console.log(manyTweets);


// Find All
// Tweet.find((err, tweets)=>{
//   console.log(tweets);
//   db.close();
// });

// Find All, limit to title and body
// {} as first argument,  means no filter, return all
// Tweet.find({}, 'title body', (err, tweets) => {
//   console.log(tweets);
//   db.close();
// });

// find all the tweets with a title of Water
// Tweet.find({title:'Water'},(err, tweet) => {
//   console.log(tweet);
//   db.close();
// });

// find all the tweets that have equal to or greater than 20 likes
// Tweet.find({ likes: {$gte: 20}}, (err, tweets) => {
//   console.log(tweets);
//   db.close();
// });


// find one and remove with title Deep Thoughts
// Tweet.findOneAndRemove({title:'Deep Thoughts'}, (err, tweet) => {
//   if(err){
//     console.log(err);
//   } else {
//     console.log('This is the deleted tweet:', tweet);
//   }
//   db.close();
// });

// find one and update
// first argument: filter
// second argument: the value(s) to change
// third argument new:true - return updated object - optional argument
// callback - database call and response
// Tweet.findOneAndUpdate({title:'Vespa'}, {deleted: true}, {new: true}, (err, tweet) => {
//   if (err){
//     console.log(err);
//   } else {
//     console.log('this is our updated tweet:', tweet);
//   }
//   db.close();
// });

// get a count of tweets that have likes that are greater than or equal to 20
Tweet.count({likes: {$gte:20}}, (err, tweetCount)=> {
  console.log(tweetCount);
  db.close();
});
