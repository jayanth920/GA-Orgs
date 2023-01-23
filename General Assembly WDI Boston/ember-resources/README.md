[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Ember Resources

One of the chief advantages of having a front-end framework is being able to
store and manipulate data entirely on the front-end, without needing to
explicitly make AJAX requests. This is accomplished through a data layer, which for Ember is a library called [ember-data](https://github.com/emberjs/data). In this session, we'll look at how to use ember-data to set up front-end models and perform CRUD actions on them.

## Prerequisites

-   [ember](https://git.generalassemb.ly/ga-wdi-boston/ember)
-   [ember-object](https://git.generalassemb.ly/ga-wdi-boston/ember-object)
-   [ember-routing](https://git.generalassemb.ly/ga-wdi-boston/ember-routing)
-   [ember-components](https://git.generalassemb.ly/ga-wdi-boston/ember-components)

## Objectives

By the end of this session, you should be able to:

-   Generate a Model to represent a resource on the front-end.
-   Extend an Adapter to connect your Model(s) to an API.
-   Make Models accessible in templates by loading them through Routes.
-   Create CRUD actions on a Route, and trigger them from Components.
-   Add behavior to Route actions to perform CRUD on the Route's model.

## Setup

1.  Fork and clone this repo.
1.  Run `npm install`.
1.  Clone [shopping-list-api](https://git.generalassemb.ly/ga-wdi-boston/listr-api) into a
    subdirectory of ~/wdi/tmp and follow the instructions to setup the API.
1.  Start the api with `bin/rails server`
1.  Start the client with `ember server`

## Ember Data

In the past few days, you've seen a whole lot of Ember's 'view' layer - the
system governing how Ember responds to user behavior and controls what HTML gets
rendered in the browser.

While this is all very nice, it's meaningless without an API. That's where
Ember's 'data' layer comes in, as implemented by an add-on library to Ember
called `ember-data`.

`ember-data` provides several Ember Classes for handling the exchange of
information between the client and the API, most notably Models (which
represent back-end resources as Ember Objects) and Adapters (which manage the
actual interactions with the underlying API(s)).

## Code Along: CRUD

We have a Shopping List application with only a `/lists` route that shows shopping lists that are hardcoded into the client application.  We will interact with an API to complete CRUD for `lists` and `items` and persist data to the API.

- [(R)ead Lists Index](/docs/lists_index.md)
- [(R)ead Lists Show](/docs/lists_show.md)
- [(U)pdate Item](/docs/item_update.md)
- [(D)estroy Item](/docs/item_destroy.md)
- [(C)reate Item](/docs/item_create.md)

## Lab: CRUD
- (U)date List
- (C)reate List
- (D)estroy List

*Lab Stretch Goals*
- Use computed property to only destroy Lists with no Items
- Create independent route for Create action like `/lists/new`
- Create nested route for Create action
- Implement one way binding for Update action
- Implement pagination for Index action

## Additional Resources

-   [Ember API : Ember.ActionHandler](http://emberjs.com/api/classes/Ember.ActionHandler.html)
-   [Ember API : DS.store](http://emberjs.com/api/data/classes/DS.Store.html)
-   [Ember Data](https://cloud.githubusercontent.com/assets/10064043/18616616/13abe5fe-7d8d-11e6-9fe6-7cca802d4ddc.png)
-   [Ember core concepts](https://guides.emberjs.com/v2.8.0/images/ember-core-concepts/ember-core-concepts.png)
-   [Ember essential concepts](https://emberigniter.com/5-essential-ember-concepts/)
-   [Ember screencasts](https://www.emberscreencasts.com/)

## [License](LICENSE)

1.  All content is licensed under a CC­BY­NC­SA 4.0 license.
1.  All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
