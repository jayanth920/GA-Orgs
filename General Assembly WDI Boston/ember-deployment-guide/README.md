[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Ember Deployment Guide

Use this guide to deploy Ember apps based on our [Ember Auth Template](https://git.generalassemb.ly/ga-wdi-boston/ember-auth-template)
to GitHub Pages.

## Prerequisites

- [Ember Auth Template](https://git.generalassemb.ly/ga-wdi-boston/ember-auth-template)
- [Ember](https://git.generalassemb.ly/ga-wdi-boston/ember)

## Objectives

By the end of this, developers should be able to:

- Deploy an Ember app to GitHub Pages.

## Deployment to Github

1. **DO NOT YET** run `npm install`.
1. Create a repository on **GitHub (NOT GitHub Enterprise)** as the origin remote to your project. Make sure the name of your repository on GitHub is exactly the same as your project name. (i.e. whatever name you've chosen for your app.)
1. Replace all instances of `ga-wdi-boston.ember-auth` with the name of your project. (Search via `command+shift+f`)
 *note: All instances of `<my-project-name>` in this guide refer to **your** project's name*
1. You will need to rename `ga-wdi-boston.ember-auth` to your app name in the following files:
 - `app/adapters/application.js`
 - `app/index.html`
 - `app/services/ajax.js`
 - `config/environment.js`
 - `package-lock.json`
 - `package.json`
 - `tests/index.html`
 - `tests/unit/intitializers/text-field-test.js`

After renaming, a search for your project name should like this, but with *your* project name.


![Search for project name after renaming](https://git.generalassemb.ly/storage/user/5696/files/b6dfb0f4-3d88-11e8-8d35-f91dccd082f2)

Ensure you have renamed all instances by searching for `ga-wdi-boston.ember-auth`. If you've renamed them all you should
see the following:

![Search for ga-wdi-boston.ember-auth after renaming](https://git.generalassemb.ly/storage/user/5688/files/4ce7e390-c2dd-11e7-99d7-a98c9f7137f9)

### In `config/environment.js`

- You need to tell your Ember client to _point_ to your deployed API. Update `config/environment.js` to follow below:

Under the `locationType: 'auto',` line you'll need to add `apiHost: 'http://localhost:4741/',` as shown below. _Don't forget the comma!_

```js
module.exports = function(environment) {
  const ENV = {
    modulePrefix: '<my-project-name>',
    environment: environment,
    rootURL: '/',
    locationType: 'auto',
    apiHost: 'http://localhost:4741/',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },
```

### Further Down In `config/environment.js`

```js
if (environment === 'production') {
  ENV.rootURL = '/<name-of-git-repo>';
  ENV.locationType = 'hash';
  ENV.apiHost = '<% replace with the URL to your deployed API %>';
}
```

1. Now change the value of ENV.rootURL to be the name of your git repository; e.g. in the case of this repository it would be `ENV.rootURL = '/ember-deployment-guide'`

- Now you have to ensure you have your `app/adapters/application.js` and `app/services/ajax.js` files import the `apiHost` link. **Make sure <my-project-name> has been replaced with the name of your project in both files**

In `app/adapters/application.js` file:

```js
import ENV from '<my-project-name>/config/environment';
import ActiveModelAdapter from 'active-model-adapter';
import { inject as service } from '@ember/service';
import { computed } from '@ember/object';

export default ActiveModelAdapter.extend({
  host: ENV.apiHost,
  ...
  ...
  ...
});
```

IF/WHEN you have a `app/services/ajax.js` file:

```js
import { inject as service } from '@ember/service';
import { computed } from '@ember/object';
import AjaxService from 'ember-ajax/services/ajax';

import ENV from '<my-project-name>/config/environment';

export default AjaxService.extend({
  host: ENV.apiHost,
  ...
  ...
  ...
});
```

1. Do one last `CMD+SHIFT+F` search in Atom to ensure there are no more instances of `ga-wdi-boston.ember-auth`.
1. Now you can `npm install`.
1. Add and commit any changes i.e. your package.json or package-lock.json files.
1. Make sure all work is committed and working on your **`master`** branch.
1. Make sure you are currently checked out onto your **`master`** branch.
1. Enter the command **`grunt deploy`**

### Deliverable

- After deploying your site, paste the URL into the `url.md` file and open a Pull Request.

## [License](LICENSE)

1. All content is licensed under a CC­BY­NC­SA 4.0 license.
1. All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
