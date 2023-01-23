![General Assembly Logo](http://i.imgur.com/ke8USTq.png)

# HTTP Cookies and Session 

With Node.js.

A Cookie is a small amount of text that is stored by the Browser. 

## Cookie Creation

The HTTP Response Header will provide a **Set-Cookie** header when the server wants the browser to create a Cookie.

The format of the this Set-Cookie header is:


``Set-Cookie: value[; expires=date][; domain=domain][; path=path][; secure]``


The first part of the Set-Cookie value is often a string of the form ``name=value``

For example the value may be:

``email=joe@example.com``

In this case the Header would have this value.

``Set-Cookie: email=joe@example.com``

And the server will direct the browser to provide this Cookie in subsequent HTTP Requests.

**Create a app.js file**

```
"use strict";
var http = require('http');
var url = require('url');
var util = require('util');

// Create a HTTP Server with a handler method.
var server = http.createServer(requestHandler);

function requestHandler(request, response){
  var cookies = util.inspect(request.headers['cookie']),
      pathname = url.parse(request.url, true).pathname,
      content = "<html><head></head><body>";

  // Ouput data should be returned as strings.
  request.setEncoding('utf8');
  console.log('Cookies are ', cookies);

  // set the cookie if /loggedin
  if(pathname === '/just_logged_in'){
    console.log("Setting the cookie");
    content += "<h3>Just created a cookie with Set-Cookie.</h3><br/>";

    // Set the Cookie in the HTTP Response Header
    response.writeHead(200, {'Set-Cookie': 'email=joe@example.com'});
  }else{
    content += "<a href='/just_logged_in'>Simulate the Login. Will set cookie</a><br/>";
  }

  content += "<p>The Browser send this cookie in the HTTP Request<p>";
  content += cookies;

  content += "</body></html>";
  response.end(content);
};


// Start a server on port 4000
server.listen(4000, function() {
  console.log("Movie Server is up and listening on port:", 4000);
});

```

**Above code is in ``app1_done.js``**

### Lab. 

* Use the Chrome inspector to delete the cookies, if any. Use the Resources tab.
* Send a HTTP Request to http://localhost/something.
* Look at the HTTP Request and Response in the Chrome inspector Network tab. Validate there are no Set-Cookie or Cookie headers.
* Send a HTTP Request to the http://localhost:4000/just_logged_in. This will simulate a successful login in a web app. The server will create a Set-Cookie header in the HTTP Response. 
* Validate the Set-Cookie header in the HTTP Response using the Network Tab.
* Send a HTTP Request to http://localhost/something again. 
* Validate that the Cookie header is set for a this totally new request.
* Quit the tab and try above again.
* Quit the browser and try above again.
* Note the results and explain to neighbor.



## Session

A Session is, usually, just a Cookie that has a name ``session`` and a set of name value pairs. For example:

``Set-Cookie: session=email=joe@example.com&username=joe&user_id=33
``

**Change this line in the app.js file**

```
...
 // Set the Cookie in the HTTP Response Header                                                     
    response.writeHead(200, {'Set-Cookie': 'session=email=joe@example.com&username=joe&user_id=33'});
... 
```

Now the session is a plain old string. But it's using a common format to set a number name/value pairs.

**Above code is in ``app2_done.js``**

## Lab 
* Write a function that will build a session object literal from the value of Cookie header in the HTTP Request.

## Thin Sessions 

You can see that we could save the logged-in user's ``id`` in the session. 

``Set-Cookie: session=user_id=33``

Then on each subsequent request we would get the user_id from the HTTP Request Cookie Header.

``Cookie: session=user_id=33``

Then look up the user by their ``id`` in the database.

This would become the ``currently logged in user``

## Lab
* Write a function that will return the currently "logged in" user. *This would be a specific user in the DB*


## Expire Cookies

We can tell the Cookie to expire at some point in the future. This is done by adding a ``expire`` name/value pair to the cookie.

``Set-Cookie:session=email=joe@example.com&username=joe&user_id=33; expires=Mon, 13 Jul 2015 18:18:23 GMT``

**Update the app.js**

```
...
  content = "<html><head></head><body>",
  expireDateStr,
 sessionString;
...
 expireDateStr = new Date(Date.now() + 345600000).toUTCString();
 sessionString = 'session=email=joe@example.com&username=joe&user_id=33';
 sessionString += "; expires=";
 sessionString += expireDateStr;
 // Set the Cookie in the HTTP Response Header
 response.writeHead(200, {'Set-Cookie': sessionString});
...
```
**Above code is in ``app2_done.js``**

## Cookie Options

#### Domain

#### Path

#### Secure

### HttpOnly

Does not permit Javascript to access the cookie via ``document.cookie`` property.


## Encrypted Session.

You will want to encrypt the contents of your session. This is a security measure. 

In your app you will encrypt the string that represents the cookie/session in the ``Set-Cookie`` HTTP Response Header.

Then you will decrypt that string in the ``Cookie`` HTTP Request Header.

## Lab
* Read [Cookies Explained](http://www.nczonline.net/blog/2009/05/05/http-cookies-explained/)

## Bonus
* Watch [Everything You Ever Wanted To Know About Authentication in Node.js](https://www.youtube.com/watch?v=yvviEA1pOXw)

## References
* [Cookies Explained](http://www.nczonline.net/blog/2009/05/05/http-cookies-explained/)
* [Video: Everything You Ever Wanted To Know About Authentication in Node.js](https://www.youtube.com/watch?v=yvviEA1pOXw)
* [Cookies vs Tokens. Getting auth right with Angular.JS] (https://auth0.com/blog/2014/01/07/angularjs-authentication-with-cookies-vs-token/)
* [Sessions in Express](http://expressjs-book.com/index.html%3Fp=128.html)