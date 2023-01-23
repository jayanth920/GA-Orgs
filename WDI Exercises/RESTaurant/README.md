# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png)

```
____  _____ ____ _____                           _
|  _ \| ____/ ___|_   _|_ _ _   _ _ __ __ _ _ __ | |_
| |_) |  _| \___ \ | |/ _` | | | | '__/ _` | '_ \| __|
|  _ <| |___ ___) || | (_| | |_| | | | (_| | | | | |_
|_| \_\_____|____/ |_|\__,_|\__,_|_|  \__,_|_| |_|\__|

```

### Overview

You'll be **building a Rails app,** 

It's the future! In the old days, waitstaff needed to keep track of a party's order by hand!
A client has reached out to us and requested that we build an application to help!
Here is what they wrote:


```
Dear Developer,

I want an application so our waitstaff can manage our food orders...

Overall... an employee should be able to...
 a: select a party of customers
 b: select food items the customers have ordered
 c: see a receipt

We'll keep thinking about it over the next few days and send more details when they come up.

Best,
Gadoe
```

---

### GADOE UPDATE 03/26/2016

```

Dear Developer,

Almost forgot! I need a way to manage my menu! Maybe... when I go `/admin` I can have a display where I could...

* add a new menu item
* remove an existing menu item
* edit an existing menu item

Sound good? Thanks!

Best, Gadoe

```

---

### GADOE UPDATE 03/27/2015

```
Dear Developer,

I need one more display! For the chefs! It should be a simple looking display which places all the food items in order based on what order they should cook them.

When they complete an order, they should hit a button to remove it from this display. We like using a manual bell to let the server know... so no need to manage that.

I also want to give them some kind of visual cue for the need to speed up! They should all start off with some shade of green... the order sits in the waiting list... As the time becomes longer... the color should change to orange and then to RED if the order is not completed promptly.

Best, Gadoe
```

---

**You will be working individually or in a group of 2 for this project**, and you'll be designing the app yourself. We expect you'll exercise creativity on this project, sketch some wireframes before you start, make use of ERDs, and write user stories to define what your users will want to do with the app. Remember to keep things small and focus on mastering the fundamentals – scope creep/feature creep is the biggest pitfall for any project!

---



### Technical Requirements

Your app must:

* **Include wireframes** that you designed during the planning process
* **Include ERDs** that you designed during the planning process
* **Include At least 1 test.** The only behavior that is required to be tested in this project is the following:
  - The party should be able to get the total balance based on all the food items ordered.
* Have **clean and valid HTML and CSS**
* **Include sign up/log in functionality**, with encrypted passwords & an authorization flow
 - Admins will need to sign-in to CRUD food
* **Have complete RESTful routes for food items**
* **Utilize an ORM to CRUD data in your database** and interact with your relationally-stored data
* **Be deployed online** and accessible to the public

---

### Necessary Deliverables

* A **working full-stack application, built by you**, hosted on Heroku
  / DO
* A **link to your hosted working app** in the URL section of your Github repo
* A **git repository hosted on Github**, with a link to your hosted project,  and frequent commits dating back to the **very beginning** of the project. Commit early, commit often.
* **A ``readme.md`` file** with user stories, explanations of the
  technologies used, the approach taken, screen shots, etc.x
  * A link in your ``readme.md`` to the publically-accessible **user stories you created**

---

## Getting Started

* **Begin with the end in mind.** Know where you want to go by planning with wireframes & user stories, so you don't waste time building things you don't need
* **Read the docs for whatever technologies you use.** Learning to read documentation is crucial to your success as a developer
* **Commit early, commit often.** Don’t be afraid to break something because you can always go back in time to a previous version.
* **User stories define what a specific type of user wants to accomplish with your application**. It's tempting to just make them _todo lists_ for what needs to get done, but if you keep them small & focused on what a user cares about from their perspective, it'll help you know what to build
* **Write pseudocode before you write actual code.** Thinking through the logic of something helps.

##### Some Starting Ideas:

Food Item: An item of food on the menu (aka menu item)

* Name?
* Cuisine type?
* What is the price?
* Any allergens?
* More info?

Party: A single group of people

* Table number?
* Number of guests?
* Did they pay yet?
* More info?

###### Responsive (Bonus):

Think about how your users will be engaging with your application. Of
course the full-screen version needs to look good, but it seems like
the mobile version is almost more important than the full-screen. If
waitstaff will be using this larger on their phones, that mobile
version is hugely important. Consider designing for "mobile first".

###### Rails Thoughts

Rails has a lot of *helpers* which you should learn and use to make
your code cleaner and simpler. 

-
  [Route and Path Helpers](http://guides.rubyonrails.org/routing.html#path-and-url-helpers)
- [Form Helpers](http://guides.rubyonrails.org/form_helpers.html)


### TIMELINE

#### By Friday 11:59pm:

* ERD: Draw out an ERD for the application.
* Wireframe: Sketch out a few ideas about how you'd want the application to look on a screen and a phone
* Set up a github repository for the application
* Add instructors as collaborators for your project repo:
* Set up a rails application

### By Saturday 5:00pm:
- All necessary C.R.U.D. behaviors complete and demonstrable.

### By Sunday 11:59pm
- MVP complete

### By Monday 11:59pm
- All core functionality is complete
- Deliverable project

### Tuesday 9:00am
- Brief Project Demonstrations

---


