![ga](https://git.generalassemb.ly/Web-Development-Immersive-Remote/WDIR-Outrun/blob/master/ga_cog.png)

---
Title: Express Create - Add View Layer to Products App<br>
Type: Lab<br>
Duration: 1 hr<br>
Creator: Thom Page<br>
Topics: Adding views for reading and creating data<br>

---



## EXPRESS CREATE: ADD VIEW LAYER TO PRODUCTS APP

* `git pull upstream master` to get the starter code

* `npm i` to install dependencies


### WHAT IS IT?

This is a simple app that sends JSON to the browser.

The JSON is an array of 'products' inside `models/products.js`

The routes for **index** and **show** have been made.

Convert this app into one that has views and that can create data on the server from user input.


### DIRECTIONS 

**1. We want to send our user a form so that they can create new products**

**2. We want to update our app so that there are view pages for the index, show, and create routes**

#### Leading questions

* Do you need to install ejs?

* Do you need to make a views folder?

* Is there a folder you should put inside the views folder?

* Will you need a route to serve up the form?

* In what file would you put the form?

#### 2. When you have the form working and creating data:

* Will you need a route to process the form data?

* Is there a view that a POST route renders? Or should it redirect?

* Is there some middleware we need? Or is it already there?
