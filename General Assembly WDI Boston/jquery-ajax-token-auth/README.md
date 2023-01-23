[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# API Token Authentication

## Introduction

To explore more of HTTP, we'll be building an application that includes a way to
track users by allowing them to sign up and sign in. While users are signed in, any
requests we make using `jQuery.ajax` will be "authenticated", telling the API
who that user is.

## Prerequisites

- [http-study](https://git.generalassemb.ly/ga-wdi-boston/http-study)
- [json-study](https://git.generalassemb.ly/ga-wdi-boston/json-study)
- [library-api](https://git.generalassemb.ly/ga-wdi-boston/library-api)

## Objectives

By the end of this, developers should be able to:

- Make HTTP requests using `curl`, the browser address bar, and AJAX to:
  - access an authenticated API.

## Preparation

1. Fork and clone this repository.
 [FAQ](https://git.generalassemb.ly/ga-wdi-boston/meta/wiki/ForkAndClone)
1. Create a new branch, `training`, for your work.
1. Checkout to the `training` branch.
1. Install dependencies with `npm install`.
1. Run the application with `grunt serve`

## Authentication and Authorization

Web APIs often require some sort of **authentication** for you to use them, that is,
some way of knowing who you are. They'll also often manage resource access, which is
what we would call **authorization**. These are two words we'll often use together,
but they handle two distinct parts of an application.

| Authentication | Authorization |
| -------------- | ------------- |
| Confirms users are who they say they are | Manages user access to different resources |

### Token Authentication

There are many ways to manage authentication, but we'll be focusing on Token
Authentication. This is a style of authentication in HTTP that uses tokens, or
unique identifier strings, to be able to tell who a user is when they're making an
authenticated request.

**For our application, any requests for authenticated data will fail if they do not
include a token associated with a signed in user.**

<img width="355" alt="401 unauthorized without token" src="https://media.git.generalassemb.ly/user/16103/files/5e026b80-b1a1-11eb-919a-43d337a65ebe"><br>

**A client must first sign in and if they sign in successfully, then our API
will send them a token.**

<img width="379" alt="User sign in with email/password provides token to client" src="https://media.git.generalassemb.ly/user/3667/files/af2d2100-741f-11ea-8ffc-6e8e3dca234b"><br>

**The client can include the token with its next requests to prove to the API
that they are the logged in user.**

<img width="355" alt="200 Success with token" src="https://media.git.generalassemb.ly/user/16103/files/ce10f180-b1a1-11eb-8b6d-ac5c258e7145">

## Using Authenticated Web APIs

We'll use `curl` and `jQuery.ajax` to make authenticated requests manage our authorized resources.

We'll be making requests to and receiving responses from a HTTP server hosted at
`https://library-express-api.herokuapp.com`.

We'll make use of our [Library API docs](https://git.generalassemb.ly/ga-wdi-boston/library-api)
to help us make the correct requests to the API.

The operations we'll perform:

| verb   | path | parameters |
| ------ | ---- | ---------- |
| POST   | `/sign-up` | `credentials` containing `email`, `password`, `password_confirmation` |
| POST   | `/sign-in` | `credentials` containing `email` and `password` (response contains auth data) |
| PATCH  | `/change-password` | `passwords` containing `old` and `new` (requires Authorization header) |
| DELETE | `/sign-out` | None (requires Authorization header) |

## Important Security Note

The APIs we work with in SEI are built for educational purposes only, and
therefore are **not secure** enough to protect sensitive, real world data. What
this means is that you must **never** use a real email or password when signing
up for these accounts. It would not be difficult for someone with bad intentions
to decrypt your password, and if you've used that password same for real life
accounts (email, etc) they could gain access.

## CURL Gotchas

We'll be using a lot of curl scripts as we send requests to our API, so it's
important to remember some of the common pitfalls in writing and running curl
scripts.

As a general rule, *start with a working curl script, and work backwards to
change the constants and values as need be.* Writing curl scripts from scratch
leads to hard-to-track-down bugs!

- The following **are not** valid in a curl request:

  - Trailing commas in the json body.
  - Comments after the `curl` keyword.
  - Missing back slashes after each option.

- We will need to pass values into our curl scripts from the command line,
    which we hold in constants.
- *Look at the curl script before you run it to ensure you are passing in all
    the required values*

  - constants will be in all caps, like this: `CAPITAL_LETTERS`.

- Your curl request will likely not work correctly if you don't assign values to
those constants.

- Running a script and passing in values from the command line looks like this:

  ```sh
  ID=42 TITLE='Ancillary Justice' TOKEN=my-long-token \
  sh curl-scripts/books/update-books.sh
  ```

  - Spaces between values assigned to variables in the terminal **are not**
valid and **will not** run your curl script.
  - You can break up long single lines by including a `\` and then a line break

- *You must create a valid user by signing up (only once), and then sign in to
    get a valid token (whenever you need a new token, repeat sign-in process).*

  - Command line shell script execution which runs the `sign-up.sh` file, which
      contains the curl script to sign up a user:

   ```sh
   EMAIL=pikachu@movie.com PASSWORD=pikachu \
   sh curl-scripts/auth/sign-up.sh
   ```

## Registering with the API

### Code along: Write a sign-up script

Let's register with the API.

We'll modify `curl-scripts/auth/sign-up.sh` to send a request with JSON
data to the `library-api`.

What response do we get?

### Code along: Sign-up from our client

Now let's put code into `app/auth/*` to get another "e-mail" address
registered with the API.

## Logging into the API

### Lab: Write a sign-in script

Now with json data in `curl-scripts/auth/sign-in.sh`, let's sign in to the
account we just created.

### Lab: Sign-in from the client

Add a form to `index.html` and code to `app/auth/*` to login to the
API.

What should we do with the data returned by the API?

## File Structure

At this point, we have a lot of files. Let's take a minute to think about how they're
interacting with each other. 

One very important file we're using is the `store.js` module. This file doesn't look 
like much; it's just exporting an empty object. What makes `store.js` special is that
it acts as temporary storage. Any other file can `require` the store module and access
or modify data in that "empty" (not for long!) object. 

Right now, we're storing the user's information, including their token, in this object
when we have a successful sign in. In our future requests, like change password, our
files can access `store.js` to use that data. 

![File structure flowchart](https://media.git.generalassemb.ly/user/16320/files/9b8b7980-8355-11eb-8b27-88a44a4e4889)

## Changing the password

### Code along: Write/Execute a change-password scripts

We'll use `curl-scripts/auth/change-password.sh` to change a password. After
that we'll verify that we can no longer authenticate using the old password.

### Code along: Change password from the client

Add a change password form to `index.html` and code to `app/auth/*`
to change the password.

## Signing out

Signing out invalidates the current token.

### Lab: Write/Execute a sign-out script

We'll use `curl-scripts/auth/sign-out.sh` to sign out of the API. We'll verify
that the token we used is no longer valid.

### Lab: Sign out from the client

Add a sign out `form` with a button to `index.html` and code to
`app/auth/*` to sign out of the API when a user submits the `form`.

## Authenticated Resources

Now that we can sign up and sign in to our API, let's add and modify our own
resources.

| verb   | path | parameters |
| ------ | ---- | ---------- |
| POST | `/movies` | `movie` containing `title` and `director` (requires Authorization header) |
| GET | `/movies` | None (requires Authorization header) |
| GET | `/movies/:id` | None (requires Authorization header) |
| PATCH | `/movies/:id` | `movie` containing `title` and `director` (requires Authorization header) |
| DELETE | `/movies/:id` | None (requires Authorization header) |

### Code along: Create a Movie

First, we'll modify `curl-scripts/movies/create.sh` to make an authenticated
request to our API to create an movie.

Now, let's add code to `app/movies/*` to create an movie from
the browser.

### Lab: Get all Movies

Modify `curl-scripts/movies/index.sh` to make a request to our API to get all
movies.

Add code to `app/movies/*` to get all movies from the browser.

### Lab: Get one Movie

Modify `curl-scripts/movies/show.sh` to make a request to our API to get one
movie.

Add code to `app/movies/*` to get an movie from the browser.

### Lab: Destroy a Movie

Modify `curl-scripts/movies/destroy.sh` to make an authenticated request to
our API to destroy an movie.

Add code to `app/movies/*` to destroy an movie from the browser.

### Lab: Update a Movie

Modify `curl-scripts/movies/update.sh` to make an authenticated request to our
API to update an movie.

Add code to `app/movies/*` to update an movie from the browser.

## Tasks

Developers should run these often!

- `grunt nag`: runs code quality analysis tools on your code
    and complains
- `grunt make-standard`: reformats all your code in the JavaScript Standard Style
- `grunt <server|serve|s>`: generates bundles, watches, and livereloads
- `grunt build`: place bundled styles and scripts where `index.html` can find
    them

## Additional Resources

- [Differences in json & x-www-form-urlencoded](https://stackoverflow.com/questions/9870523/differences-in-application-json-and-application-x-www-form-urlencoded)

## [License](LICENSE)

1. All content is licensed under a CC­BY­NC­SA 4.0 license.
1. All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
