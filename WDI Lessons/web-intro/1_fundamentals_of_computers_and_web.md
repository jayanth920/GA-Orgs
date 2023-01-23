# Intro to the Internet & HTTP

## Learning Objectives

* Name the four basic parts of the Internet protocol suite (the TCP/IP 'stack')
* Explain the client-server model, and the role of each
* Describe the basics of the HTTP protocol, and explain what an HTTP Request is
* Explain the parts of a url in detail
* Describe, in simple terms, the premise of REST.

## Exercise: Ivan Pakkitz (30 minutes)

Partner up... Imagine the internet does not exist, and you & your pair partner
are about to be on opposite sides of the country. You want to be able to
communicate with each other, and you can only do so by employing the services
of one Ivan Pakkitz.

Ivan is a postal worker who happens to be able to travel at the speed of light
(thus the lightning bolt on his hat/bag). He's happy to relay thousands of
messages per second between you and your friend. He can only transport one at a
time and it has to fit on an index card, but as far as you can tell, it will
basically be delivered instantly.

Unfortunately, Ivan is incredibly lazy and inattentive, so there are four
downsides to using his service:

* Reliability: He cannot guarantee that any particular message will arrive at all
* Order: He cannot guarantee that messages which DO make it will arrive in the same order in which they were sent.
* Integrity: He cannot guarantee that messages will arrive in their entirety
* Recipient: He cannot guarantee that messages will be delivered to the correct recipient.

Take 20 minutes to build design such a system and produce example index cards.

## Fundamentals of the Internet (45 minutes)

The internet is main network that connects most computers in the world. In
theory, any computer connected to the internet should be able to communicate
with any other computer also connected. In practice, that's not always true, but
it's basically the case.

There are lots of services built on top of the internet: e-mail, FTP, the web,
and tons of apps.

### Exercise: Research Core Technologies of the Internet (25 minutes)

The internet (and the services on top of it) is built in layers of technologies,
each depending on the ones below. (This is a common theme in computing).

At each layer, there are standards (or protocols) that define how computers
communicate with each other.

In groups of two, take 10 minutes to research one of the following, and present
back to the class:

* Link layer
  * IEEE 802.11
  * IEEE 802.3
* Internet layer
  * IP
  * DNS
* Transport layer
  * TCP
  * UDP
* Application layer
  * HTTP
  * IMAP

![Image](http://upload.wikimedia.org/wikipedia/commons/c/c4/IP_stack_connections.svg)

### HTTP: The protocol of the Web (10 minutes)

By far, the most popular application protocol is HTTP(S), which is the protocol
for the web.

Like most protocols, HTTP is built around the *client-server model*. In the
client server model, the client makes HTTP *requests* to the server. The server
will then reply with an HTTP *response*.

The most common clients are web browsers, but other apps like mobile or desktop
apps can make HTTP requests.

That server response is usually one of 2 things:
* An HTML web page
  * this page will then be displayed by a web browser
* Raw data in the form of JSON (or more rarely XML)
  * this raw data is used by another computer program, such as a Mobile or Front-end app

### URLs (5 minutes)

URLs are how we identify 'resources' (files, pages, data, etc) on the internet.

URLs have a few major parts:

```
http://www.kittengifs.com:80/popular-gifs#results?term=cute&page=2
|-----|-----------------|---|-----------|--------|----------------|
   |           |          |       |          |           |
 protocol    host       port    path     fragment  query-string
```

* Protocol - what protocol, or language we're speaking
* Host - what server are we connecting to
* Port (optional) - what port on that server
* Path - what are we requesting from this server (i.e. what file or data)
* Fragment - used to scroll to a specific part of the page
* Query String - used to include additional information about what we're requesting

### RESTful Routes

When building a web application, we have a lot of choices about how to structure
the 'routes'. In other words, what the URLs for our application will look like.

The most common choice for routes in a modern application is the REST design.

Note that we haven't mentioned it, but every HTTP request contains a VERB and a
PATH.

Here are some example RESTful routes for a music application.

| Verb    | Path                    | Function |
|---------|-------------------------|----------------------------|
| GET     | /artists                | get a list of all artists  |
| GET     | /artists/drake          | get more info on the artist named drake |
| GET     | /artists/new            | get a form to create a new artist |
| POST    | /artists                | create a new artist |
| GET     | /artists/drake/edit     | get a form to edit Drake |
| PUT     | /artists/drake          | send data to update Drake |
| DELETE  | /artists/drake          | delete the Drake artist  |
