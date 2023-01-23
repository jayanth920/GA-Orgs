# WebSockets

## Learning Objectives

- Compare the request-response model of HTTP with the bi-directional model of WebSockets
- Use the Socket.io library to write a client and server that communicate over WebSockets

## Framing (5 minutes / 0:05)

Websockets are a different web standard for talking to our servers...asynchronously.

Before we dive into WebSockets, let's think back on HTTP for a moment, in particular the HTTP request-response cycle.

It's simple. Just make a request to a url, provide an HTTP method and optionally some data. Then wait for the server to handle our request and send back the response. It's served us pretty well thus far.

HTTP is great when we know we need some some piece of data and want to ask the server to hand it to us. But what happens when the server has new data that we need to show on the client browser but we don't know that?

Think of an auction website like [eBay](https://www.ebay.com). You want to be notified on the page as soon as the price changes (or, ::gasp:: you've been outbid!). Constantly spamming the refresh button works, but that's not a good experience for users.

Using some of the techniques you've learned in class so far, how would you keep the auction's price, high-bidder and countdown updated in real time?

## Think, Pair, Share (5 minutes / 0:10)


With the people at your table try to figure out how you might implement real time data fetching (i.e., constantly be listening for changes in data in a database)...

* List any necessary technologies
* Brainstorm a few technical approaches
* Identify any potential downsides to these approaches

## HTTP Pitfalls (10 minutes / 0:20)

One common workaround for this problem when under traditional HTTP constraints is to utilize a technique called **polling** to make multiple requests on a set interval.

The resulting code will often look something like this...

```js
setInterval(function(){
  $.ajax({ url: '/my/api/endpoint', success: function(data){
      // Do something with the response here
  } });
}, 5000);
```
<details>
  <summary><strong>What is a possible downfall of this approach?</strong></summary>

  * There may not be any new data to retrieve
  * It's expensive to do this over and over again

</details>

Simply put: HTTP wasn't designed for real-time, two-way communication.

### Beware of the Polls: A Cautionary Tale

Robin -- a former WDI instructor -- likes to tell the story of when he first developed a website called [INeedAPrompt.com](http://www.ineedaprompt.com) which generates writing prompts designed to spur creative writing and break through writer's block. One day, it was posted to Reddit and it caught a lot of attention, which made Robin happy. Everyone lived happily ever after. That is, until Robin got an e-mail from his hosting provider at 1:12AM...

> System administration was forced to suspend your site in an emergency to prevent server and system overloads.
>
> The suspension was placed due to an extremely large amount of traffic to `ineedaprompt.com/counter.txt`
>
> At the time of suspension, we were seeing over 1.86 million hits.

Robin's website has a click counter that counts the number of prompts generated.
* Originally, it was making an AJAX request **every second** checking to see if a counter value on the server had been updated since the page was loaded. This counter is incremented every time a user requests a new prompt.
* That's 3600 extra requests per hour **per user**!
* Solution: update the click counter only when you refresh the page

## Comparing WebSockets & HTTP (20 minutes / 0:40)

### Pulling

AJAX uses HTTP.
* You "pull" information from the server (i.e., you make a request and you get something back)
* It's much like having a conversation via walkie-talkies. At any given time you're either talking or listening for a response.
* HTTP calls require a lot of overhead to initiate a connection. All they do is open, send one chunk of data, and then close the connection.

### WebSockets

Websockets are a different type of model for the communication between a client and a server.

> WebSockets provides a standardized way for the server to send content to the browser without being solicited by the client, and allowing for messages to be passed back and forth while keeping the connection open. In this way, a two-way (bi-directional) ongoing conversation can take place between a browser and the server.

By utilizing WebSockets, a client can open up and maintain a connection to a server that allows for the easy two-way transfer of data. Once the connection is made either side can send data to the other end. This makes it great for real-time, event-driven web applications.

Twitch and Slack are a couple of the notable web apps out there that are powered by WebSockets.

### Pushing

We can use WebSockets with Javascript
- Our code opens a connection between two computers and maintains it
- Instead of having to make a new request every time you want information from the server, it can "push" information to you via this open connection
- It's as if you were on the phone instead of using walkie-talkies, talking and listening at the same time.

### We Do: WDI Plays BrowserQuest


Mozilla created a very cool game called [BrowserQuest](http://browserquest.mozilla.org/) using HTML canvas and WebSockets. You're going to play it for the next 5 minutes.

While playing, consider the following questions...
* What pieces of information are being relayed between the client and server?
* How often is information sent from the client to server or vice-versa?
* What are some problems the developers who created this game might have had to consider when building it?

> Fun fact: [the game is open source!](https://github.com/mozilla/BrowserQuest)

### Pros and Cons: HTTP vs. WebSockets

Each is expensive in different ways
* HTTP, you have to worry about bombarding your server with requests
* WebSockets, you have to worry about your server having too many connections

Each is best suited for different things
* HTTP is better for sending big packets of data, but inefficient for small packets of data since you send a bunch of data each time as headers
* WebSockets is better for sending small packets of data at a frequent rate

### Socket.io

Socket.io is a JavaScript library for WebSockets, which we'll be using to create a WebSockets server
- You can make WebSocket requests in both the front end and the back end ([documentation](http://socket.io/docs/))
- It works on every platform, browser or device, focusing equally on reliability and speed
- Basic Syntax is `io.emit('event name', message)`

## You Do: Implement WebSockets in a simple chat app

## Part I: Socket.io with Express (30 minutes / 1:10)

#### Instructions

In your sandbox:
```bash
$ mkdir sockets-express
$ cd sockets-express
$ npm init -y
```
Then follow the instructions from [Socket.io documentation](http://socket.io/get-started/chat/).

**NOTE:** You can run this app using `nodemon`

**NOTE:** You can find the solution [here](https://git.generalassemb.ly/ga-wdi-exercises/websockets-chat-example/tree/express-solution)!

## Break (10 minutes / 1:20)

## Part II: Socket.io with React (Rest of Lesson)

We're going to recreate the chat app with React. Below are some concrete steps to guide you through this process. There are some gaps, however, you will need to fill in.

#### Instructions
Instead of making a new, separate backend app, use the one from the tutorial you just worked through and make a few changes.

In `index.js`, configure Socket.io connection
```js
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

// get rid of the express route portion
// app.get('/', function(req, res){
//   res.sendFile(__dirname + '/index.html');
// });

// set up an event listener for connections
io.on('connect', function(socket){
	console.log('a user connected');
	socket.on('chat message', function(message) {
    // we use io.emit instead of socket.emit to send a message to all connected sockets
		io.emit('chat message', message)
	})
});

// we'll use create-react app later which defaults to port 3000
http.listen(3001, function(){
  console.log('listening on *:3001');
});

```

In your sandbox, create a new React app:

```bash
$ create-react-app sockets-react
$ cd sockets-react
$ npm install
$ npm install socket.io-client --save
```

Then refactor `src/App.js` to be our chat app:
- Require Socket.io Client, and connect to the server connection!

```js
import openSocket from 'socket.io-client'
const socket = openSocket('http://localhost:3001')
```

- In the constructor method, initialize state with an empty array called `messages`.
- Use the same form we used in our previous express app, adding an event listener to a `submitMessage` method. Put it in `App.js`

```js
<div>
  <ul id='messages'>{messages}</ul>
  <form action='' onSubmit={this.submitMessage}>
    <input id='message' /><button>Send</button>
  </form>
</div>
```

Don't forget to copy over the CSS into `App.css` as well!

- The App component shoud have a `componentDidMount` method, which listens to `chat message`, and adds the new message to the state messages array.

```js
componentDidMount () {
    socket.on('chat message', (msg) => {
      this.setState({messages: this.state.messages.concat(msg)})
    })
  }
```

- You will need to configure the `submitMessage` method to listen to new messages, and when a new message is received, emit the new message to the server, and empty the input field.

**NOTE:** To run this app, you need 2 Terminal windows: one running `nodemon server.js`, and the other one running `npm start`.

**NOTE:** You can find the solution [here](https://git.generalassemb.ly/ga-wdi-exercises/websockets-chat-example/tree/react-solution)!

## Part III: Persisting Data (Bonus)

Now, when a new user joins the chat, they can only receive the new messages, but they can't receive the messages exchanged before they have joined. What if we can persist the messages, so users can always have them?

#### Instructions

* Use `npm` to install `mongoose` and require it in `server.js`
* Use `mongoose` to create a new model `Message` and define an appropriate schema for a message
* Whenever a connection it created, query the database for all the saved messages.
* whenever a message is sent, save it to the database.

**NOTE:** To run this app, you need 3 Terminal windows: one running `mongod`, and one running `nodemon server.js`, and the third running `npm start`.

**NOTE:** You can find the solution [here](https://git.generalassemb.ly/ga-wdi-exercises/websockets-chat-example/tree/mern-solution)!

#### More Bonus Features Ideas

* Support deleting a message
* Support deleting all messages
* Broadcast a message to connected users when someone connects or disconnects
* Add support for nicknames
* Don’t send the same message to the user that sent it himself. Instead, append the message directly as soon as he presses enter.
* Add “{user} is typing” functionality
* Show who’s online
* Add private messaging

------

## Resources
- [Announcing WebSockets](https://www.websocket.org/quantum.html)
- [WebSockets w/ Socket.io](https://howtonode.org/websockets-socketio)
- [Socket.io w/ Node](http://danielnill.com/nodejs-tutorial-with-socketio/)
- [Socket.io w/ Express](http://www.programwitherik.com/socket-io-tutorial-with-node-js-and-express/)

<!-- Add testing notes (i.e., now you should be able to do/see this) -->
<!-- Add note about already seeing this in action with Firebase -->
