# Delivery Notes

## Framing

### Authentication vs Authorization

#### Authentication

- Identification (R)

#### Authorization

- Access control
- Ownership (C U D)

## Curl requests

- Is curl a client?
- Is ajax a client?
- What is the api? (server)
- What language is curl? (NOT JS)
- What language is ajax (JS)
- What language is the server? (doesn't matter - we are working with the client)

### Curl HEADER

- response header
- request header

## API

- what does the I stand for?
  - interface: something goes in, something comes out
- Server is a black box. Don't worry about the server in the game project...just
  read the documentation
- The documentation provides the _contract_ that explains what will happen when
  a request comes in, and something comes out
- Read the docs != you are an idiot. It means, the explanation for how it works
  is there, and that's the authoritative source.

## Token

- Token is a string that you get back after authenticating
- Send it with each authenticated request. It's a string. You pass it in the
  header of the request.
- APIs are stateless. Servers are stateless. HTTP is a stateless protocol.
  - It knows nothing about you.
- Even though you are storing something locally in a cookie, it doesn't mean it
  knows who you are.
  - You need to send the token with each request so the server knows who you are
  - we are going to store it in memory. meaning if you refresh the app, it goes
    away!
    - how does facebook store the token? In memory?

## Diagrams

<img src="https://git.generalassemb.ly/ga-wdi-pvd/lesson-notes/blob/master/non-lesson-notes/browser-template-pattern-info/images/diagram.svg?sanitize=true" />

[more details about browser template](https://git.generalassemb.ly/ga-wdi-pvd/lesson-notes/tree/master/non-lesson-notes/browser-template-pattern-info)

![Token being passed back and forth](https://git.generalassemb.ly/storage/user/3667/files/5ed23c48-0a79-11e8-98a6-f96b90e02c50)
