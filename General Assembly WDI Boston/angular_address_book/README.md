![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)

Angular Mini-Project: Address Book
==================================

This project will give you an opportunity to put everything you've learned about Angular to practice. Your task will be to create a front-end address book application for use by you and your WDI classmates. It's important to keep in touch and expand your network as you each advance your careers!

Instructions
------------

1. Fork and clone this repo. Change into the appropriate directory.
1. Update dependencies.
```
npm install
bower install
```

1. Start your API server. This will create an in-memory database with example data and standard CRUD routes.
```
npm run api
```

1. Start your web server.
```
npm run app
```

Your API server will be accessible at `http://localhost:3000`. Your web server will be accessible at `http://localhost:8080`. Try both of these locations. You should not receive any errors.

This project has the following file structure:

```
.
├── api/              # your fake backend
│   └── db.js
├── bower_components/ # where bower installs packages
├── css/
│   └── index.css     # edit this file to style your app
├── js/               # angular app files
│   ├── controllers/
│   ├── services/
│   ├── views/
│   └── app.js        # your initialization file
├── node_modules/     # where npm installs packages
├── LICENSE
├── README.md
├── bower.json        # bower dependencies
├── index.html        # edit this file to complete your app
└── package.json      # npm dependencies
```

You should only need to edit `index.html` and `js/app.js`. You will need to create new JavaScript files in the appropriate directories and link to them in the appropriate order in `index.html`. You should **not** edit `api/db.js`.

Requirements
------------

You will implement an address book for WDI students. You will interact with a fake back-end that provides full RESTful routes for accessing and changing resources. An example request and response are provided below for your reference.

* The address book should have a minimum of two views and should provide access to all five CRUD operations through the front-end.
* There should be a list view to show all contacts. This view should:
    * Display all data in an attractive, usable format.
    * Provide a way to create a new contact.
* There should be a detail view to show one contact. This view should:
    * Display all data in an attractive, usable format.
    * Provide a way to update the contact.
    * Provide a way to delete the contact.
    * Provide a way to return to the list view.
* You must use Angular to complete these front-end features.
* The front-end should be styled attractively.

Available Routes
----------------

<img src="https://cloud.githubusercontent.com/assets/388761/9667142/00b7498c-5248-11e5-86e9-a229fc479926.png" alt="address book routes" width="300px">

Example Request \& Response
---------------------------

```
curl -X "GET" "http://localhost:3000/people/0"

HTTP/1.1 200 OK
X-Powered-By: Express
Vary: Origin
Access-Control-Allow-Credentials: true
Cache-Control: no-cache
Pragma: no-cache
Expires: -1
X-Content-Type-Options: nosniff
Content-Type: application/json; charset=utf-8
Content-Length: 479
ETag: W/"1df-x0dRMZhcsEL7NSGO4egFPw"
Date: Thu, 03 Sep 2015 18:11:17 GMT
Connection: close

{
  "id": 0,
  "name": "Emma Becker",
  "address": {
    "street": "1745 Suhrif View",
    "city": "Niociwi",
    "state": "Nevada",
    "zip": "87652-0479"
  },
  "email": [
    {
      "type": "home",
      "address": "owejemuh@example.com"
    },
    {
      "type": "work",
      "address": "cef@example.com"
    }
  ],
  "phone": [
    {
      "type": "work",
      "number": "(655) 624-9548"
    },
    {
      "type": "mobile",
      "number": "(915) 627-7063"
    }
  ]
}
```
