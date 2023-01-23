![General Assembly Logo](http://i.imgur.com/ke8USTq.png)

# An introduction to Firebase.

## Objectives

By the end of this, students should be able to:

- Create a Firebase account
- Create a Firebase App to host a simple website
- Wire-up an App to a Firebase data-store
- Deploy a Firebase App

## Instructions


### Fork and clone this repository, then

```bash
$ cd wdi_3_js_firebase_intro
$ npm install
$ bower install
```

### Sign up for Firebase

Follow this link to sign up for Firebase, **[Firebase sign up](https://www.firebase.com/signup/)** _(A data storage and synchronization solution )_

Firebase is among a set of solutions that provide mechanisms to store and retrieve structured data without requiring "back-end" development.  Please sign up for the free plan.

### Create a Firebase App

After creating an account, follow this link, **[Dashboard](https://www.firebase.com/account/)**, to the Firebase dashboard.

On the dashboard, create a new app named "Chat Example" with a unique URL (e.g. `<your-e-mail>`-chat-example).

### Set up the example chat

**[Firebase Hosting Quickstart](https://www.firebase.com/docs/hosting/quickstart.html)** _(Firebase documentation)_

First, edit *wdi_3_js_firebase_intro/app/js/index.js*, and replace `<Firebase App Url>` with the URL you entered above, then

```bash
$ npm install -g firebase-tools
$ cd wdi_3_js_firebase_intro
$ firebase init
```

You'll be prompted for the Firebase app you want to be able to deploy.  This will create a file named `firebase.json` that should contain something similar to:

```javascript
{
  "firebase": "<your-e-mail>-chat-example",
  "public": "app",
  "ignore": [
    "firebase.json",
    "**/.*",
    "**/node_modules/**"
  ]
}
```

Update the `ignore` section of `firebase.json` to exclude `bower_components`, `coverage`, and `test`, i.e.

```javascript
  "ignore": [
    "firebase.json",
    "**/.*",
    "**/node_modules/**",
    "**/bower_components/**",
    "**/coverage/**",
    "**/test/**"
  ]
```

## Lab

Break up into groups and ensure that each of you can run the chat example app locally using `$ grunt serve`.

After you verify that the app works locally, deploy it to the Firebase hosting site using `$ firebase deploy`.

Once deployed, verify that each app works for all members of the group at the same time.

