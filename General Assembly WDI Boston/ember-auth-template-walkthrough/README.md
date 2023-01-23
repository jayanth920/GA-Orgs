[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Authentication in Ember

This training will involve a lot of following code and and exploring the
Chrome Inspector and utilizing Ember Inspector.  It is recommended that you
comment code or take notes.

## Prerequisites

- [Ember Resources](https://git.generalassemb.ly/ga-wdi-boston/ember-resources)

## Objectives

By the end of this, developers should be able to:

- Implement token authentication in an Ember application.
- Enforce authentication in protected routes.

## Preparation

1. [Fork and clone](https://git.generalassemb.ly/ga-wdi-boston/meta/wiki/ForkAndClone)
    this repository.
1. Install dependencies with `npm install`.
1. Start any API based on a recent version of the [Rails API
    Template](https://git.generalassemb.ly/ga-wdi-boston/rails-api-template) or the
    [Express API
    Template](https://git.generalassemb.ly/ga-wdi-boston/express-api-template).
1. Start the front-end server with `ember server`.

## Demo: Auth Flow

Watch as I sign up for a new account on our demo app.

*Other than the flash messages on the page, did anything change?  What about in
the Chrome Developer Tools?*

## Lab: Auth Flow

Take some time and sign in on your own, and check to see if anything in the
Chrome Dev Tools has changed.

Now that we have added a key tool to our personal developer toolkit lets look
at how it's implemented.

## Discussion: ember-auth-template Code

Let's walk through file by file to see what's happening.  I will ask
developers to guide me through the files while correcting any misunderstandings.

First let's start down the template and component trail, then we'll work our way
up with actions. When we visit a URL like `localhost;7165/sign-up` in the
browser, how does Ember know what to render? We'll start with `app/router.js`.

How do all the different components fit together? We'll make a diagram of all
the components that render other components, starting with `my-application`.

Notice what happens if we sign in, then close the browser and re-open it. How
are we still signed in?!

Where do services fit in to the picture? What is a service in Ember?

*Remember: Data down, actions up.*

While going up the Ember hierarchy we may need to stop a some point to discuss
services.

## Lab: Authenticated CRUD

Now that we have some understanding of how auth is implemented in this template,
let's get some practice using it. We'll use [this](https://shrouded-sierra-62817.herokuapp.com/)
deployed API, which has the same endpoints for auth and an `examples` resource
as [rails-api-template](https://git.generalassemb.ly/ga-wdi-boston/rails-api-template).
For the rest of the day, you'll work on building an Ember app that performs
authenticated CRUD actions on the `/examples` endpoints.

How you implement is up to you! You have a number of options in terms of UI and
routing. Look back on code for previous Ember trainings if you get stuck.

## NPM packages

This template uses a number of NPM packages that are not included in all Ember
apps by default. Here's a brief summary of what they all do:

- [active-model-adapter](https://github.com/ember-data/active-model-adapter):
  a subclass of Ember's default adapter that helps Ember Data interface with an
  API that uses Rails naming conventions
- [ember-cli-flash](https://github.com/poteto/ember-cli-flash): provides a
  service that we can use to display nice error/success messages
- [ember-local-storage](https://github.com/funkensturm/ember-local-storage):
  allows data to be stored in the browser's local storage, we use this for auth
  session persistence
- [ember-export-application-global](https://github.com/ember-cli/ember-export-application-global):
allows access to the global app object in the dev tools, potentially useful for
debugging
- [ember-cli-autoprefixer](https://github.com/kimroen/ember-cli-autoprefixer):
  automatically adds [vendor prefixes](https://developer.mozilla.org/en-US/docs/Glossary/Vendor_Prefix) to
  CSS rules


## Additional Resources

- [Implementing Authentication with Ember Services - Ember
    Igniter](http://emberigniter.com/implementing-authentication-with-ember-services/)
- [jpadilla/ember-simple-auth-token: Ember Simple Auth extension that is
    compatible with token-based authentication like
    JWT.](https://github.com/jpadilla/ember-simple-auth-token)
- [simplabs/ember-simple-auth: A library for implementing
    authentication/authorization in Ember.js
    applications.](https://github.com/simplabs/ember-simple-auth)
- [EmberJS Authentication Tutorial](https://auth0.com/blog/emberjs-authentication-tutorial/)
- [How To Import A Library on Ember.js](https://stackoverflow.com/questions/38919757/how-to-import-a-library-on-ember-js)

## [License](LICENSE)

1. All content is licensed under a CC­BY­NC­SA 4.0 license.
1. All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
