# HTTP Study

Read this document entirely. Follow any links and study their content. Readings
and activities are **required** unless otherwise indicated.

## HTTP Required Reading

HTTP is a protocol - a system of rules - that determines how documents are
transferred from one place to another. Among other things, it defines the format
of the messages passed between *clients* and *servers*.

"Clients" send *requests* and receive *responses*. Examples include browsers
(like Chrome, Safari, or Firefox) and other programs like
[`curl`](http://curl.haxx.se/docs/) and [`wget`](http://www.gnu.org/software/wget/manual/wget.html)
(these two links are to be used as a reference and don't need to be read in
their entirety).

"Servers" receive requests and send responses. Examples are more complex, since
there are different kinds of servers. There are application servers, which work
in Node or Ruby to generate documents using those languages, and there are web
servers like [Apache](http://httpd.apache.org/), [nginx](http://nginx.com/), and
[lighttpd](https://www.lighttpd.net) (again use these three links as references,
do not try to read them all now). The word "server" is also used to describe
the machine that these programs run on. In this document, the latter is what we
mean when we say "server", as in this diagram:

> ![http-xkcd](https://cloud.githubusercontent.com/assets/388761/12621764/0ffb527e-c4f0-11e5-87ae-d597e3835fcd.png)
>
> Link to material in Additional Resources at bottom of this file.

1. A client sends a request to a server.
1. The server processes the request.
1. The response gets sent back to the client.
1. The client processes the response.

## URLs

Which server is the request sent to? How does the server know what to respond
with? Both of these questions are answered by *uniform resource locator (URL)*.

> ![URL](https://cloud.githubusercontent.com/assets/388761/12622184/2c0143dc-c4f2-11e5-84af-55f723dd6639.png)
>

Study each part of a URL using the [Mozilla Developer Network
Documentation](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/What_is_a_URL).

## HTTP Verbs

A request has two parts: a URL and a verb. A request without both is incomplete.

By default, the browser issues GET requests when you type a URL into the address
bar and press `enter`. When you submit forms, the browser typically issues a
POST request.

- [HTTP Methods for RESTful Services](http://www.restapitutorial.com/lessons/httpmethods.html)

## Make a Request

Make a request using the browser. Go to [Google](https://www.google.com). When
you clicked this link, the browser made a GET request to Google's server. We
often describe requests like this:

```txt
GET https://www.google.com/
```

If we know we're working with a particular server, we might abbreviate
it as follows. For example, if Google had API documentation that described
requests you could make to its server, that documentation might say instead:

```txt
GET /
```

In other words, API docs often only describe the URI instead of the full URL.

The response your browser receives from Google is an HTML document the browser
parses and renders. Let's see what would happen if you made the same GET request
outside of the browser.

Try this in your terminal and see what happens:

```sh
curl --request GET https://www.google.com
```

## Responses & Resources

Servers send responses, and those responses contain resource representations.

Technically, the term "resource" refers to an abstraction that your application
uses; depending on what the application does, a resource might be a 'Car', a
'Person', a 'User', or an 'Order Cart'.

A single resource can be represented in multiple different ways by the server,
including HTML, JSON, PDF files, and images. What we really mean when we say
"resource" above is a specific representation of a resource.

You may think of resources as the documents that are returned (usually HTML or
JSON) as part of the response body.

## Response Statuses

Let's see what HTTP status codes are.

![http status codes image](https://pbs.twimg.com/media/BeMUtg4CMAA59I6.jpg)
- [List of HTTP status codes](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes)

## Video

[The Internet: HTTP & HTML](https://www.youtube.com/watch?v=kBXQZMmiA4s)

## Questions

Use your favorite search engine and the provided readings to research and
respond to the following questions.

In your responses, be sure to cite any relevant sources you consulted in your
search. We ask you to write responses in your own words in order to see how you
process what you've read. Please do not respond with direct quotes from source
material. Instead, digest what you've read and repeat it in your own voice.

## Define HTTP

In your own words, give a brief description of what HTTP is.

```md
<!-- your answer here -->
```

## Describe what a client is and what a server is

 What is a client and what is a server? How do they interact with each other?

```md
<!-- your answer here -->
```

## Describe the 5 most common HTTP verbs

What are the 5 most common HTTP verbs used when creating a RESTful API? How
would you use each?

```md
<!-- your answer here -->
```

## Describe what a Response is

What is a response? What does it contain? What are some common status codes in a
response and what do they mean?

```md
<!-- your answer here -->
```

## Make a curl request

Using curl, how would you get the content from Reddit.com?

```md
<!-- your answer here -->
```

## Describe the parts of a URL

List the parts of a URL and explain what each part is, in your own words. You'll
refer to this list often in the next few weeks, so it's important to keep it in
an easy-to-reference place.

```md
<!-- your answer here -->
```

## Additional Resources

- [Conquering the Command Line: `curl`](http://conqueringthecommandline.com/book/curl)
- [Media Types](http://en.wikipedia.org/wiki/Internet_media_type)
- [Symfony and HTTP Fundamentals (The Symfony Book)](http://symfony.com/doc/current/book/http_fundamentals.html)
