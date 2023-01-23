![General Assembly Logo](http://i.imgur.com/ke8USTq.png)

# Servers, Clients, JSON, and AJAX

## Introduction

Everyone knows about web servers, right?  Let's see....

## Objectives

By the end of the lesson, students should be able to do the following: 

* Explain the concerns and responsibilities of the client and the server in a web application 
* Examine an HTTP request or response and glean useful information from it
* Implement a client for a simple REST service

## Vocabulary 

client, server, request, response, header, body, JSON, ajax

## Let's look at the web's plumbing

The core of it:  a web client (which may be a browser) makes a request to a web server.  A web server makes a response.

Go to Chrome.  Open the Javascript console. Choose the Network tab, make sure the red "record" button is red and "Preserve log" is checked.

Then go to your favorite website.

Down the left side of the screen you see all the requests that went into assembling that webpage.

Click on one line, and you can look at all the data that went back and forth for that one request.

## Look for patterns

Before I tell you what's important, I want you to look at the Request and Response headers and guess at what you think is important.

With a partner, choose five websites.  Make a list of all the the Request and Response headers for the websites.  Make a guess as to what each does.

## Useful tools in Chrome: jquery-injector

We're going to be poking at other people's code. The easiest way to do this is with jQuery, but not all websites use it.  But because you are in control of your web browser, you can inject it.

You can find it [here](https://chrome.google.com/webstore/detail/jquery-injector/indebdooekgjhkncmgbkeopjebofdoid?hl=en).

## Try it and see

With a partner, go to your favorite web page and try out some jQuery on it.

Do silly things.  How many <P> tags does it have? Can you make every other paragraph bold? 

## AJAX!

```javascript
$.ajax({
    method: 'GET',
    url: "foo.html",
    data: { name: 'joe', age: 34 }
}).done (function(msg) {
    // ...
}).fail (function(msg) {
    // ...
});
```

```javascript
var ajaxHandle = $.ajax({
    method: 'GET',
    url: "foo.html",
    data: { name: 'joe', age: 34 }
});

ajaxHandle.done (function(msg) {
    // ...
});

ajaxHandle.fail (function(msg) {
    // ...
});
```

## Useful tools in Chrome: Postman

We're also going to be poking at JSON.  You can do this from the console, but it's more effective with a tool like [Postman](https://chrome.google.com/webstore/detail/postman-rest-client/fdmmgilgnpjigdojojpjoooidkmcomcm)

## Implement a REST service

We have a chat server!  

But to use it, you have to implement a chat client.

The chat server is a REST server with three endpoints:

### POST /register 

Input: nickname 
Output: token

### POST /say

Input: token, message
Output: message information

### GET /fetch
Optional input: token, from, count
Output: list of messages
