---
title: Security Headers
type: lesson
duration: "1:30"
creator:
    name: Joey Fowler
    city: NYC
competencies: Programming, Web Applications
---

# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) Security Headers (90 min)

| Timing | Type | Topic |
| --- | --- | --- |
| 5 min | [Opening](#opening) | The Need of Headers |
| 15 min | [Introduction](#introduction) | HTTP Headers |
| 20 min | [Instruction](#instruction-headers) | Security Header Application |
| 20 min | [Demo](#demo-headers) | Using Security Headers |
| 10 min | [Instruction](#instruction-cors) | Cross-Origin-Resource-Sharing |
| 10 min | [Demo](#demo-cors) | Sample CORS Application |
| 10 min | [Conclusion](#conclusion) | Review of Key Terms |

### LEARNING OBJECTIVES
**After this lesson, you will be able to:**  

- Understand how to set HTTP headers in web server responses.
- Understand the necessity of Security HTTP Headers.
- Describe the different HTTP Headers available to developers.
- Describe the concept of Cross-Origin-Resource-Sharing.
- Describe the concept of Content-Security-Policy.

---
<a name="opening"></a>
## The Need of Headers (5 min)

> Instructor note: it's important to highlight that this topic applies to web applications viewed in a web browser, such as Chrome, Firefox, Safari, etc.

Web applications are built with two pieces, the server-side component and the client-side component. The client, a web browser, sends a request to the server for a document (e.g. "web page"). The server then generates and returns a response. The browser will take the response and render it for the user. Easy peasy (well, the high-level overview is at least).

In the world of web applications, there are many security topics that can exist in your everyday website - topics such as Cross-Site-Scripting (XSS), Cross-Site-Request-Forgery (CSRF), Clickjacking and more. It's up to the web developers building each and every web application to make their applications protected from these vulnerabilities. Every web application, from a single static HTML page to a banking application behind a multi-tiered authentication / authorization workflow to a popular web forum with hundreds of thousands of pages, they each need to be secured and it's up to the developers to make sure they're done right.

However, we all make mistakes. Sometimes, code gets shipped to production that may accidentally expose a XSS vulnerability, or maybe it adds a page that has a shiny "Click Here to Win" button. Some issues would be easy to spot and prevent in a code review, others may go undetected for a long time. So, how hard is it to add protection into a web application for these security topics?

Common, everyday frameworks such as Express come with tools that make protecting your website as simple as "just developing it normally". Without the special tools, each web-based language from node.js to PHP to ASP.NET and all of the in-betweens also contain the necessary language pieces for you to manually add protection. While it's always recommended to use the framework's tools opposed to rolling your own, knowing what those tools do is far more beneficial than simply calling a method and forgetting about it. The only problem is that you need to explicitly use the framework's tools, or explicitly call your own functions. What happens when you forget?

Until this point, we've been talking about security vulnerabilities that affect the client - XSS, CSRF, Clickjacking - and we've also stated that it's the server's responsibility to protect the client. We've also mentioned that it's possible for the developer to forget to have the server add this protection. This is all truth. Because of this truth, browsers have come together and helped define a portion of the [HTTP Spec](https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html) that outlines specific [HTTP Headers](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers) that aid in preventing security vulnerabilities.

[HTTP Security Headers](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers#Security), they're not a silver-bullet to prevent all vulnerabilities, but they are a great safety net in the event that your application fails to add adequate protections elsewhere.

---
<a name="introduction"></a>
## Intro to New Material: HTTP Headers (15 min)

### What are HTTP Headers?

As a super-brief crash-course on HTTP Headers:

> HTTP headers allow the client and the server to pass additional information with the request or the response. A request header consists of its case-insensitive name followed by a colon ':', then by its value (without line breaks). Leading white space before the value is ignored. - [MDN: HTTP Headers](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers)

### Security Headers

The list of defined headers is lengthy, but for this lesson we're only interested in the [Security Headers](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers#Security):

| Header | Definition | Example |
| ------ | ---------- | ------- |
| Content-Security-Policy | Content Security Policy definition | `Content-Security-Policy: default-src https:; report-uri /csp-report` |
| Content-Security-Policy-Report-Only | Non-enforcing Content Security Policy definition that reports policy effects  | `Content-Security-Policy-Report-Only: default-src https:; report-uri /csp-report` |
| Public-Key-Pins | ([HPKP](https://developer.mozilla.org/en-US/docs/Web/HTTP/Public_Key_Pinning)) Public key hash to prevent [MitM attacks](https://en.wikipedia.org/wiki/Man-in-the-middle_attack) | `Public-Key-Pins: pin-sha256="cUPcTAZWKaASuYWhhneDttWpY3oBAkE3h2+soZS7sWs="; pin-sha256="M8HztCzM3elUxkcjR2S5P4hhyBNf6lHkmjAHKhpGPWE=";  includeSubDomains; report-uri="https://your.site/hpkp-report"` |
| Public-Key-Pins-Report-Only | Non-blocking HPKP public key pin to report violations | `Public-Key-Pins-Report-Only: pin-sha256="cUPcTAZWKaASuYWhhneDttWpY3oBAkE3h2+soZS7sWs="; pin-sha256="M8HztCzM3elUxkcjR2S5P4hhyBNf6lHkmjAHKhpGPWE=";  includeSubDomains; report-uri="https://your.site/hpkp-report"` |
| Strict-Transport-Security | ([HSTS](https://en.wikipedia.org/wiki/HTTP_Strict_Transport_Security)) Forces the domain over HTTPS | `Strict-Transport-Security: max-age=15552000; includeSubDomains` |
| Upgrade-Insecure-Requests | Forces clients to request all requests via HTTPS | `Upgrade-Insecure-Requests: 1` |
| X-Content-Type-Options | Disables MIME sniffing and forces the client to use the `Content-Type` header | `X-Content-Type-Options: nosniff` |
| X-Frame-Options | Indicates if a browser is allowed to render a page in a frame | `X-Frame-Options: deny` |
| X-XSS-Protection | Enables cross-site-scripting filtering | `X-XSS-Protection: 1; mode=block` |

### HTTP Access Control (CORS) Headers

Another set of HTTP headers we're interested in, specifically for [HTTP Access Control](https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS) [(CORS)](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers#CORS) are:

| Header | Definition | Example |
| ------ | ---------- | ------- |
| Access-Control-Allow-Origin | Indicates if the response can be shared by other domains | `Access-Control-Allow-Origin: *` |
| Access-Control-Allow-Credentials | Indicates if the response to the request can be exposed when the credentials flag is true | `Access-Control-Allow-Credentials: true` |
| Access-Control-Allow-Headers | A response-header in a [preflight request](https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS#Preflighted_requests) to indicate which HTTP headers can be used when making the actual request | `Access-Control-Allow-Headers: X-Custom-Header` |
| Access-Control-Allow-Methods | Specifies the method or methods allowed when accessing the resource in response to a [preflight request](https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS#Preflighted_requests) | `Access-Control-Allow-Methods: POST, GET, OPTIONS` |
| Access-Control-Expose-Headers | Indicates which headers can be exposed in the response | `Access-Control-Expose-Headers: Content-Length` |
| Access-Control-Max-Age | Indicates how long the results of a [preflight request](https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS#Preflighted_requests) can be cached | `Access-Control-Max-Age: 3600 ` |
| Access-Control-Request-Headers | Used when issuing a [preflight request](https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS#Preflighted_requests) to let the server know which HTTP headers will be used when the actual request is made | `Access-Control-Request-Headers: X-Forwarded-For, Content-Type` |
| Access-Control-Request-Method | Used when issuing a [preflight request](https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS#Preflighted_requests) to let the server know which HTTP method will be used when the actual request is made | `Access-Control-Request-Method: POST` |
| Origin | Indicates where a fetch originates from | `Origin: https://www.capitalone.com` |

It is recommended that you research each method to become familiar with the full suite of possible values for each, and how different headers play nicely (or conflict with) one another.

---
<a name="instruction-headers"></a>
## Security Header Application (20 min)

As you can see above, there are many different headers available to address several different security concepts. Here, we will touch on only a few of them.

### X-Frame-Options

The **X-Frame-Options** HTTP response header indicates to a browser whether or not a page is allowed to be rendered in a \<frame\>, \<iframe\> or \<object\>. Web applications can use this header to help prevent [clickjacking](https://en.wikipedia.org/wiki/clickjacking) attacks.

> :information_source: The added security is only provided if the user accessing the document is using a browser supporting `X-Frame-Options`.

There are two fully supported directives for the `X-Frame-Options` header, **DENY** and **SAMEORIGIN**. A third, **ALLOW-FROM \<source\>** exists, but is not supported in most browsers yet.

To use the header, simply send it along with one of the values:

    X-Frame-Options: DENY

* What would be an example of a case where you would need to use **SAMEORIGIN**?
* When is it safe to _not_ include the `X-Frame-Options` header?

### X-XSS-Protection

The **X-XSS-Protection** HTTP response header indicates to a browser whether or not to stop a page from loading when it detects reflected [cross-site scripting (XSS)](https://en.wikipedia.org/wiki/Cross-site_scripting) attacks.

> :information_source: The added security is only provided if the user accessing the document is using a browser supporting `X-XSS-Protection`.

> :information_source: This header are not needed in modern browsers if you're using a `Content-Security-Policy` (CSP); however, older browsers do not support CSP so it's still beneficial to maintain.

This header has two values, **0** and **1** which indicate that protection is _disabled_ and _enabled_, respectively.

By default, if the value is **1** (which is the common default), the browser will attempt to strip the reflected payload from the server's response before rendering it. However, an additional **mode=block** value can be set to prevent the entire page from loading.

An example of this header's use:

    X-XSS-Protection: 1;mode=block

* Why would it be beneficial to block the entire response, opposed to stripping the reflected payload?
* When is it safe to set the header's value to **0**?

### Content-Security-Policy

Content Security Policy (CSP) is an added layer of security that helps to detect and mitigate certain security attacks, including Cross Site Scripting (XSS) and data injection attacks.

This single header has many "directives" which each have a list of possible values. Browser compatability is an issue for some directives, but the majority are supported in all browsers that support CSP.

Briefly, here's list current list of available directives:

* base-uri
* block-all-mixed-content
* child-src
* connect-src
* default-src
* font-src
* form-action
* frame-ancestors
* frame-src
* img-src
* manifest-src
* media-src
* object-src
* plugin-types
* referrer
* report-uri
* require-sri-for
* sandbox
* script-src
* style-src
* upgrade-insecure-requests
* worker-src

By default, each directive is wide open and will not restrict anything.

It is highly recommended that you read about each directive to have a general understanding of what is available to you via CSP.

An example of defining a Content Security Policy that will, for instance, _only_ allow scripts to be included from the current domain:

    Content-Security-Policy: script-src 'self'

If we wanted to expand this to allow including script resources from `apis.google.com` (assuming this is a domain we trust:

    Content-Security-Policy: script-src 'self' https://apis.google.com

You can even chain multiple directives in a single header:

    Content-Security-Policy: default-src 'self'; script-src 'self' https://apis.google.com; object-src: 'none'

It's also worth noting here that you can _also_ define a Content-Security-Policy within an HTML `<meta>` tag (not just via HTTP Headers):

    <meta http-equiv="Content-Security-Policy" content="default-src 'self'; child-src 'none'; object-src 'none'" />

* Are there any browsers that *do not* support CSP?
* How can CSP help make using _inline_ JavaScript more safe?

---
<a name="demo-headers"></a>
## Demo: Using Security Headers (20 min)

As a class, we are going to walk through creating a sample application that uses Security Headers. Some of the goals of this session include:

* Understanding where in an application to use HTTP headers.
* Ability to define custom headers for your application.
* Ability to define custom headers for a route.
* Using Express middleware, `helmet-csp`, to manage headers.

### Part 1: Creating your application.

> ***Note:*** For the sample files included, students will need to install `express` and `helmet-csp`.

Create an `app.js` file and include the code found below. This code is also provided in the `starter-code/app.orig.js` file.

    var express = require('express');
    var http = require('http');
    var app = express();

    app.get('/', (request, response) => {
        response.send('hi, :wave: =]');
    });

    app.get('/about', (request, response) => {
        response.send('This is a sample "about" page!');
    });

    http.createServer(app).listen(80, (err) => {
        if (err) {
            return console.log('error', err);
        }
    });

Start your server with the following:

    $ nodemon app.js

To test the server, open a web browser and navigate to:

    http://<your server host>/

If you're running this server on your laptop for instance, \<your server host\> would be `localhost`.

* What do you see when you load the website?
* What happens when you navigate to `http://<your server host/about`?

### Part 2: Viewing HTTP Headers

There are many, many ways to view HTTP headers for web requests / responses. A few:

* A packet sniffer, such as Wireshark. Totally overkill for this small task.
* A web proxy, such as Burp Suite or Charles Proxy. A very decent idea - explore this route if you're unfamiliar, it will benefit you greatly.
* Using your browser's Network Inspector. This is what we'll use today.

In Chrome, Firefox, Safari, Edge, etc - you have a "Network" inspector available to you. This inspector will display all network requests and list the headers for both the request and response.

![net inspector intro](https://i.imgur.com/4cxgXFb.png)

* Try viewing headers for common websites you visit. What headers _always_ exist?

### Part 3: Adding Global Headers

When it comes to Security Headers, it's not uncommon to add them to the global scope, e.g. "for your entire application".

In `app.js`, add the following snippet above the first `app.get` definition:

    app.use(function(request, response, next) {
        response.setHeader('X-Frame-Options', 'DENY');
        next();
    });

If you restart your server and visit it in a web browser, your Network Inspector will show you a new header when visiting any page:

![x-frame-options](https://i.imgur.com/y3BqO25.png)

### Part 4: Adding More Headers

Let's add a Content-Security-Policy header that's global for our application, but also customize it for the `/about` route.

In `app.js`, update the `app.use` snippet we added above to the following:

    app.use(function(request, response, next) {
        response.setHeader('X-Frame-Options', 'DENY');
        response.setHeader('Content-Security-Policy', "default-src 'self'; script-src 'self' https://apis.google.com; frame-src 'none'");
        next();
    });

Then, update the `app.get('/about')` definition to be the following:

    app.get('/about', (request, response) => {
        response.setHeader('X-Frame-Options', 'SAMEORIGIN');
        response.setHeader('Content-Security-Policy', "default-src 'self'; script-src 'self' https://apis.google.com; frame-src 'self'");
        response.send('This is a sample "about" page!');
    });

Restart your server and visit `http://<your server host>/` in your web browser. Your Network Inspector will show the following new header:

![csp intro](https://i.imgur.com/zqsr6ny.png)

Now navigate to `http://<your server host>/about`.

* Did the headers change?

### Part 5: Middleware

Imagine having to maintain those headers on dozens, hundreds or even thousands of pages in your web application. It would be a nightmare!

Luckily, this is a solved problem and middleware exists to aid in this endeavour. Here, we will use [helmet-csp](https://github.com/helmetjs/csp).

In `app.js`, add the following to the top of the script:

    var csp = require('helmet-csp');

Then, replace our current `app.use` with the following:

    app.use(function(request, response, next) {
        var middleware;

        // define our default CSP directives
        var directives = {
            defaultSrc: ["'self'"],
            scriptSrc: ["'self'", "https://apis.google.com"],
            frameSrc: ["'none'"]
        };

        // override the `frameSrc` on the `/about` page
        if (request.url == '/about') {
            directives.frameSrc = ["'self'"];
        }

        // set our options
        middleware = csp({
            directives
        });

        middleware(request, response, next);
    });

Restart your server and visit the pages in your web browser as usual.

* How do the headers behave on the different routes?
* Using this middleware is more code than individual calls to `response.setHeader()`; is the tradeoff of "more code" worth it in the long-run?

---
<a name="instruction-cors"></a>
## Cross-Origin-Resource-Sharing (10 min)

Cross Origin Resource Sharing, or "CORS", gives servers the ability to define how web browsers should treat cross-domain access controls.

By default, for security reasons, browsers restrict cross-origin HTTP requests initiated from within scripts. As defined by the [same-origin policy](https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy), a script will only be able to access resources on its own domain.

To help improve the web experience, CORS is used to define when a page or resource can be accessed from external domains.

To open external access to resources, you would use the `Access-Control-Allow-Origin` header, defined as:

    Access-Control-Allow-Origin: <origin> | *

By setting the header's value to `*`, this indicates that _all_ external requests to your resources are accessible.

If you want to restrict this to a single external domain instead (note: _your_ domain will always be allowed), you can set it via the \<origin\> value:

    Access-Control-Allow-Origin: https://externaldomain.com

When a browser makes a request from https://externaldomain.com, it will include a `Origin: https://externaldomain.com` header that is compared against the `Access-Control-Allow-Origin` response value. If they don't match, the request is restricted.

#### Preflighted Requests

As mentioned above in the [**Intro to New Material: HTTP Headers**](#introduction) section, there are _several_ available headers for CORS. The other headers come into play when we initiate [preflighted requests](https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS#Preflighted_requests).

A preflighted request is an [OPTIONS](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/OPTIONS) request (opposed to GET) that is sent to the server _before_ the actual request for a resource takes place. Browsers implement this to aid in network traffic for resource requests as an `OPTIONS` request is far more efficient than a full `GET`.

It is recommended that students read in-depth about [preflight requests](https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS#Preflighted_requests) to become more familiar with CORS overall.

---
<a name="demo-cors"></a>
## Demo: Sample CORS Application (10 min)

The best way to demonstrate the capabilities of CORS is, well, a demo! The goals of this session include:

* Understanding the _default_ behaviour of browsers.
* Understanding the `Access-Control-Allow-Origin` header

#### Part 1: Customize your environment.

As CORS is "cross-origin", we'll need at least two domains to test with. To accomplish setting this up using only your laptop, we'll add a [CNAME](https://en.wikipedia.org/wiki/CNAME_record) entry into our `/etc/hosts` file. To do this, follow these steps:
    
1. Open your local `/etc/hosts` in a text editor.
    
    > :information_source: The `/etc/hosts` file is on _your_ laptop - it is not a provided lab file.
    
2. Add the following line to the file:
    
   127.0.0.1 cors.demo
        
3. Save and close the file
    
- That's it! Now, when your web server is running on your localhost you can access it in a browser via `http://cors.demo/`!
    
    > :information_source: If you're not running your web server on your local host, you can substitute your actual server's IP instead of `127.0.0.1` in step 2 above.

#### Part 2: Creating your application.

Clone this repository and locate the code in the folder `starter-code/cors/`.

The initial application provided will demonstrate the default behavior of browsers by _not_ specifying any CORS headers.

To start your server, run the following:

    nodemon app.js

To test the server, open a web browser and navigate to:

    http://cors.demo/

Click the `Fetch Data` button. What do you see?

#### Part 3: Default Behaviour

Open to provided `data_thief.html` file in your web browser.

Don't see anything? You shouldn't!

To view what actually happened, open your browser's JavaScript Console and you will see an error similar to the following:

<kbd>
    <img src="https://i.imgur.com/tFKFUd6.png" alt="CORS - Default Behaviour" />
</kbd>

This is browsers' default behaviour when the `Access-Control-Allow-Origin` header isn't specified in the server's response - the request is denied.

#### Part 4: Allowing Cross-Origin Requests

Let's open up access to our request from 3rd-parties by actually setting the `Access-Control-Allow-Origin` header.

To do this, open the `app.js` file and add the following _above_ any other route definitions:

    // configure CORS
    app.all('/fetch', (request, response, next) => {
        response.header('Access-Control-Allow-Origin', '*');
        next();
    });

This will tell the server to respond to _any_ requests on the `/fetch` route (which is necessary for both `OPTIONS` and `GET` requests) with an `Access-Control-Allow-Origin` header. In this case, we're specifying `*` which allows a request from _any_ 3rd party.

After saving the file, restart your server with `node app.js`.

To test if the update worked, open `data_thief.html` in your web browser again. What happened this time?

#### Follow-up

This demo is a simple and _very_ small illustration of what CORS is capable of. It is recommended that you explore this topic in further detail and become aware of how it can be integrated into your applications.

In addition to reading about the possible headers and preflight requests, check out the [expressjs/cors](https://github.com/expressjs/cors) middleware for your Express apps - if you ever want to do anything more advanced than sending `Access-Control-Allow-Origin: *`, it's recommended to not try to write it by hand!
    
---
<a name="conclusion"></a>
## Conclusion (10 min)

* What's the purpose of HTTP Security Headers?
* What's the purpose of CORS?
* What types of web vulnerabilities can a Content-Security-Policy header help prevent?
* Can someone identify what a weak, or "unsafe" Content-Security-Policy would be and the risk it presents?

---
### Hungry for More?

#### References
- [HTTP Headers](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers)
- [Header Field Definitions](https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html)
- [HTTP Security Headers](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers#Security)
- [CORS Headers](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers#CORS)
- [helmet-csp](https://github.com/helmetjs/csp)
- [same-origin policy](https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy)
- [CORS-safelist request-header](https://fetch.spec.whatwg.org/#cors-safelisted-request-header)
- [expressjs/CORS](https://github.com/expressjs/cors)

#### Readings
- [HTTP Public Key Pinning (HPKP)](https://developer.mozilla.org/en-US/docs/Web/HTTP/Public_Key_Pinning)
- [Man-in-the-middle attack](https://en.wikipedia.org/wiki/Man-in-the-middle_attack)
- [HTTP Strict Transport Security (HSTS)](https://en.wikipedia.org/wiki/HTTP_Strict_Transport_Security)
- [HTTP Access Control (CORS)](https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS)
- [Clickjacking attacks](https://en.wikipedia.org/wiki/clickjacking)
- [Cross-Site-Scripting (XSS) attacks](https://en.wikipedia.org/wiki/Cross-site_scripting)
- [Content Security Policy (CSP)](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP)
- [Content Security Policy](https://developers.google.com/web/fundamentals/security/csp/)
- [Preflight Requests](https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS#Preflighted_requests)
