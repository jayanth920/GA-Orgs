
### LESSON GUIDE

| TIMING  | TYPE  | TOPIC  |
|:-:|---|---|
| 15 min  | [Mobile Analytics - Intro](#mobile-analytics-intro-15-mins)  |   |
| 15 min  | [Mobile Analytics Concepts](#mobile-analytics-concepts-15-mins)  |   |
| 45 min  | [Guided Practice Activity - Instrumenting Your App to Collect Analytics](#guided-practice-activity-instrumenting-your-app-to-collect-analytics-45-mins)  |   |
| 5 min  | [Conclusion](#conclusion-5-mins)  | Review / Recap |
title | type | duration | creator
----- | ---- | -------- | -------
Mobile Analytics | lesson | 1:30 | Peter Wilkniss (Los Angeles)

-

# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) Mobile Analytics

### LEARNING OBJECTIVES
*After this lesson, students will be able to:*

- Explain the concepts and benefits of collecting and using analytics data in their applications.  
- Instrument and configure a basic Android application to collect meaningful analytics data.
- Write application code that accesses collected analytics data to present a user experience personalized to the individual user.

### STUDENT PRE-WORK
*Before this lesson, students should already be able to:*

- Write a basic Android application.

### INSTRUCTOR PREP

_Before this lesson, instructors will need to:_

- Get the example app/starter code running on their local environment

---

## Mobile Analytics - Intro (15 mins)

> Instructor Note: describe real-world relevance or motivating example why this lesson is important

#### What is Mobile Analytics?

Mobile analytics is about understanding who your users are and what they do (and/or do not do) in your application.  Basically, understanding your users as individuals, and being able to respond to them as such in real-time, whether its presenting a different user experience or sending that user a contextually relevant personalized push notification.

#### Independent Practice (5 mins)  

Brainstorm and list the benefits of collecting and using analytics data in your applications. 

#### Benefits of Mobile Analytics

Our mobile phones are immediate and personal, and we expect the applications running on them be as immediate and personal.  The key to being able to write immediate and personal applications is understanding the user at the individual level.  Once you do that you can:  

- Present different user experiences to different users.  Someone using your app for the second or third time is a very different person to someone who has used your app five times a day for the past month, you can use that fact to change the user experience in real-time.

- React in real-time to what you users do.  The user placed an item in their basket but then left the app without purchasing? You can show them an immediate offer of a 10% discount if they buy the product today.

- Iterate your application based on data rather than intuition. App development has one key advantage over most other products: you can improve the product even after you have sold it to a customer. Understanding what your users are doing (and not doing) is the smart way of changing/adding new features.

## Mobile Analytics Concepts (15 mins)

Building an understanding of your individual users is made up of two things: 1) who they are and 2) what the do.

A 'user profile' represents an individual user of your app, and it has two components: 1) attributes and 2) actions.

User attributes represent the things you know about your user (the 'who they are'), for example, their favorite color, the device they are on, their location etc...

> Check: What types of user attributes do you think you should collect? 

User actions are the the meaningful things people do (or fail to do) in your app (the 'what they do'), for example, Added Product To Cart, Purchased Product etc...

> Check: What types of user actions do you think you should collect? 

Collecting meaningful mobile analytics, then, boils down to building user profiles with attributes and actions that help you improve your app in, among other things:  

- Presenting a more immediate and personal user experience (i.e. tailored to the individual user).
- Increasing conversion rates (the rate at which your users are doing the things you want them to do).  
- Using data to improve existing features and add new ones.

> Check: Imagine you are building an e-commerce app.  Describe what specific user attributes and actions you might collect, and how you might use that information to improve the performance of your e-commerce app. 

## Guided Practice Activity - Instrumenting Your App to Collect Analytics (45 mins)

### Instrumentation Concepts (15 mins)  

When planning what analytics data to collect in your app, its important to resist the urge to collection too much information.  The idea is to capture meaningful and actionable insights into your users that help you create a more effective app, so limiting yourself to a handful of contextually relevant user actions is key.

An effective way of doing that is to ask yourself:

- What are the three most frequent things people do inside this app?
- What are the three most important things I would want people to do inside this app?

For example, if you are an e-commerce app, you might answer these questions something like this:

- Top 3 things people do:  Search, Visit Sale Pages & Apply Coupons.
- Top 3 things I want people to do:  Purchase, View Products & Register.

That gives me six relevant actions to track for the app.

With a partner, take an app of your choosing and list the user actions you should be tracking for that app.  In doing so, answer the above questions.  

> Instructor Note: Review student results as a group. 

### User Profile Management Mechanics (10 mins)  

Now that we know the type(s) of data we want to collect in our user profile, how might we create and manage the user profile in code to be able to store and retrieve that data for use in our application?

Sounds like we need a database of some sort.  What potential choices do we have?

> Instructor Note: Lead a group discussion in coming up with a list of potential database alternatives. 

* SharedPreferences or SQLite on the device. A SharedPreferences object points to a file on the device containing key-value pairs and provides simple methods to read and write them.  SQLite is a SQL database that resides on the device. 

> Instructor Note: Discuss the pro's and con's of using the device's SharedPreferences or SQLite as a group. 

* Pro's:  
    * Lives very close to your application code.  
    * SharedPreferences has an easy-to-use interface for storing and retrieving data.   
    * No cost to use.  
* Con's:  
    * Only available on the specific device.  
    * Data won't survive an un-install/re-install of the app. 
    * Difficult to handle complex data with SharedPreferences. 

* Write a Web Service to store and access your data in the Cloud. A Web Service typically consists of a remote server exposing a RESTful API accessed via http which stores and retrieves data from a remote database based on requests from your client app.   

> Instructor Note: Discuss the pro's and con's of using using your own Web Service as a group.  

* Pro's:   
    * Data is available outside of the specific device.
    * Data will survive an un-install/re-install.  
* Con's: 
    * Complex to setup, manage and maintain.
    * Monthly cost.

* Use a third-party service via an SDK (Software Development Kit).  A third party service manages and abstracts away the Web Service component and offers client-side methods that you can use to store and retrieve data. 

> Instructor Note: Discuss the pro's and con's of using a third-party SDK as a group. 

* Pro's: 
    * Data is available outside of the specific device and will survive an un-install/re-install.   
    * Handles complexity for you; provides as easy-to-use interface for storing and retrieving data. 
    * Can be no-cost for small-to-medium sized data.
* Con's: 
    * Your data is ultimately managed by someone else and resides somewhat outside of your control.

For our purposes here, we're going to use a third-party SDK to manage our users.  Let's dive into some code! 

### Example App (20 mins)

> Instructor Note: Walk the students through the example app.  The app is a very simple ecommerce-type app.   
> The MainActivity.java initializes the CleverTap SDK and presents a product list.  The list is sorted on app launch to show the last viewed product category (if any) first in the list. This serves as the 'tailoring the app to the user' example.
> Tapping an item in the product list displays the ItemViewActivity.java, which display 'Buy' and 'Add To Cart' buttons for the product.
> The CleverTap SDK records "ProductViewed", "ProductAddedToCart", and "Charged" (item purchased) events in the relevant click handlers. 

Together let's open the [example app](starter-code) in Android Studio and walk through the code.

* Let's discuss the relevant code sections:
	* Compiling a third-party SDK (Software Development Kit).
	* Using that SDK to store and retrieve user profile data.
	* Using the collected user profile data to tailor the app experience to the individual user.
* Finally, let's run the app and play with it on a device.

## Conclusion (5 mins)

OK, let's review and discuss:  I am building an e-commerce app.  How can user analytics help me make a better app?

> Instructor Note: Quick group discussion. 
