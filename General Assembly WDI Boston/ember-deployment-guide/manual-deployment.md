# Manual Ember Deployment Guide

Use this guide to deploy Ember apps based on our [Ember Template](https://git.generalassemb.ly/ga-wdi-boston/ember-auth-template)
to GitHub Pages.

>These are the manual instructions, to be used primarily if you have any issues with the `grunt deploy` script.

## Prerequisites

-   [Ember Template](https://git.generalassemb.ly/ga-wdi-boston/ember-auth-template)
-   [Ember](https://git.generalassemb.ly/ga-wdi-boston/ember)

## Deployment Preparation

1.  Make sure that everything is named consistently (i.e. `ember-template` ->
 `<% NAME OF YOUR CLIENT %>`). (Search via `command+shift+f`)
1.  If you haven't already, run `npm install`.
1.  You need to tell your Ember client to _point_ to your deployed API. Update
`config/environment.js` to follow below:

#### Important:

-Note that if you do not see the apiHost line, you will need to add it now as seen below.

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

AND FURTHER DOWN IN `config/environment.js`:

```js
if (environment === 'production') {
  ENV.rootURL = '/<name-of-git-repo>';
  ENV.locationType = 'hash';
  ENV.apiHost = '<% replace with the URL to your deployed API %>';
}
```

1.  Now change the value of ENV.rootURL to be the name of your git repository; e.g. in the case of this repository it would be `ENV.rootURL = '/ember-deployment-guide'`

1.  Now you have to ensure you have your `adapters/application.js` and `ajax` files
import the `apiHost` link. **Make sure <my-project-name> has been replaced with the name of your project in both files**

In `adapters/application.js` file:

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

IF/WHEN you have a `services/ember-ajax` file:

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

1.  Make sure all work is committed and working on your **`master`** branch.
1.  Create a `gh-pages` branch locally via `git checkout -b gh-pages`.
1.  **DO NOT PUSH TO GH-PAGES YET**
1.  Remove `/dist` from `.gitignore` by adding a '#' before it.
1.  Run `ember build --environment=production`.
1.  Add and commit this change. (`git add dist/`)[why?](#adding-dist)
1.  `git status` and add all files changed (_mainly `dist/`_) and some other changes; Then `commit` all changes.
1.  Use "subtree push" to create a new gh-pages branch on GitHub composed only
of the dist directory by using:

```js
git subtree push --prefix dist origin gh-pages
```

9.  Go check to your github page site and ensure all requests are working and appear
the same as on localhost:4200.
10.  Congrats, you've successfully deployed your Ember App! Zoey and Tomster are proud of you!

##### Adding dist/

_You just said remove, why am I adding again? This is because you just removed `dist/` from the gitignore, which means that git is now aware of it and will track it if added. We want to track dist on the gh-pages branch, so we add and commit it here._
