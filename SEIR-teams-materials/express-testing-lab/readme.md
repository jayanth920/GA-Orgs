# Express Testing Lab

Today, you will be adding automated testing to the [Express API](../../../express-api-lab) lab from last week. Please work off of this [starter repo](../../../express-testing-lab-starter). You should have tests for each of the endpoints:

* GET `/gifs` which will list out all gifs
* GET `/gifs/:id` which will get a gif with a specific ID
* POST `/gifs` which will add a new gif and return that new gif
* PUT `gifs/:id` which will update a gif and return that gif
* DELETE `gifs/:id` which will delete a gif

Your code should make sure that each endpoint returns what it is supposed to. Directions for setting up testing and implementing tests can be found in the [Express Testing](../../../express-tdd) lesson. 

### Set Up

First, fork the `express-testing-lab-starter` repo. Then run the following commands from the root directory.
```
$ git clone git@git.generalassemb.ly:your-fork/express-testing-lab-starter.git
$ npm install
$ nodemon
$ node db/seed.js
```

Make sure you have `mongod` running as well!

## Bonus: Add Testing to your MEHN Lab

If you have time, look up how to test a non-JSON webpage endpoint. Add testing to your MEHN lab using your research! You could also convert your application to an API and add testing to it that way if you prefer.
