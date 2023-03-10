<!--Actually 10:37 WDI2-->

<!--10:15 WDI3 -->
<!--10:10 25 minutes-->

![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png)

# Modeling Tunr

> _This is a pair programming activity.  This means only one developer should be "driving" at a time, and we only need to use one computer per pair. Make sure you share your code with your partner before moving on to the next section._

You are a new developer at a top-of-the-line record label called Tunr.  The product manager wants to add some functionality to your talent management application. You and your partner get the benefit of starting with the existing application that can already CRUD artists. Now Tunr has hired you to also keep track of their managers and songs!

<!--Show the fully functioning artist part first -->
<!--WDI3 10:23 pairing up and setting up -->

## Starting Off

* Use the code in `starter-code` to get started!
* Navigate to the `starter-code/back-end` folder and `npm install` the following packages
	* `express` `mongoose` `body-parser` `dotenv`
* Now run `server.js` with `node`.
* Navigate to `front-end` in terminal and run `npm start` to kick off the app.
* Open your app in Chrome and check out the functionality for viewing, adding, and updating artists.
	* Create two artists
	* Verify that you can see these artists
	* Update a field for one of the artists
	* Delete one of the artists
* For reference, check the [Mongoose Docs](http://mongoosejs.com/docs/api.html) throughout this lab
* Lean heavily on your `Artists` `starter-code`, but go slowly--one function, one route at a time
* Make sure you test early and often, preferably multiple times per step (bullet point)
* Tab and Sublime Text shortcuts are your friend, Copy-and-Paste is not.
* If you get stuck, get unstuck! Advice for getting unstuck includes:
	* Not freezing up but continually trying new things (googling, reading docs, experimenting, etc)
	* Identifying once you are stuck, as you have already tried all options you can think of
	* Homing in on your gap in knowledge by phrasing a specific question
	* Close your knowledge gap by ASKING that question to someone!

## Requirements
<!--10:35 25 minutes-->

<!--Instructor should model the entire `show` route all the way through to the back end. Devs will be at half-mast for this.  Then turn over to devs to code themselves.-->

- Sprint 1: User can CRUD managers
  - As of now, the only route that works for managers is `index`.  Go to `/managers` in your browser to check it out!  Not very impressive I suppose, but it will be once we build out the rest of the CRUD functionality, using the CRUDable `artists` as an inspiration.
	  - Create components for `manager-show`, `manager-edit`, and `manager-new` in `front-end/src/app/managers/`.  The easiest way to do this is to go into the `front-end/src/app/managers/` and run `ng g c ____` in that directory.
	  	- Make sure all of these Components are imported into `managers.module.ts` with the proper path (spoiler alert: they probably won't be the proper path).
	  	- Import all of these components to `manager-routing.module.ts`. 
	  - Fill out your front-end routes in `front-end/src/app/managers/manager-routing.module.ts`, using the artists routes as a model.
	  - Test your work so far by opening your browser and going to `/managers/show/1`, `managers/new`, and `managers/edit/1`.
	  - Use the artists templates and the managers `manager-index.component.html` as models to fill out a `manager-show.component.html`, a `manager-edit.component.html`, and a `manager-new.component.html` template.  Do NOT copy-and-paste, you need to change all the fields in these templates to match your manager attributes, namely `name`, `email`, `office_number`, and `cell_phone_number`.  A good way to do this is to have an artist template on the left side of your screen, and the corresponding manager template on the right side.
	  - Open your browser again.  Looks like we've got an error.  Yay!  If you look in Developer Tools, you should see `Can't bind to 'ngModel' since it isn't a known property of 'input'.`  What are we missing?  Use the working `artists.module.ts` file for help if you're not sure how to resolve the error.
	  - If you see the error `Cannot read property 'name' of undefined` on the `edit` or `new` screen that's because that manager does not exist yet.  Go into your `manager-edit.component.ts` and `manager-new.component.ts` files and fix that.
	  	- **Big Hint:** where is the missing variable defined in `artist-edit.component.ts` and `artist-new.component.ts`, respectively (you should only need to change one line).
	  - Once your errors are all gone, check out your `managers/edit/1` and `managers/new` in your browser. Cool, we have forms! Now let's actually put some data in there.
	  - Fill out your front-end service functions in `app/managers/managers.service.ts`, one at a time, using `app/artists/artists.service.ts` as a model. Follow the same left-side-right-side technique as you did for templates.
		- Import this service into all your manager Components, and fill out the Component functions, using the artist Components as a guide.
	  - Open the browser again, and try to create a new manager at `managers/new`.  If you look in the Dev Tools console, you should see your manager.  However, we're getting a 404 for our `http` request.  Makes sense, right?  We haven't built our back end yet.  It's time to go full stack....
	  - Create managers back-end routes in your `back-end/config/routes.js` file, following the same format as artists.  
	  - Give `managers.js` in your back-end `back-end/controllers` folder all the functions you already have in `artists.js`. Now we have everything we need except for data persistence.  Let's put a bow on our managers--*Mongoose style*.
	  - Finish the `Manager` model for your database, inside your `models` folder. Give it the attributes `name`, `email`, `office_number`, and `cell_phone_number`, all of type `String`.
	  - Test out all your routes to make sure `manager` has the same functionality as `artist`.

- Sprint 2: User can CRUD songs
  - Same as above, create `songs` routes and components for the front end.
  - Same as above, create `songs` templates for the front end.  
  - Same as above, create `songs` service for the front end. 
  - Make sure `app.module.ts` includes the song Module and Routing Module 
  - Same as above, create `songs` routes for the back end.
  - Same as above, create `songs` controllers for the back end.
  - Same as above, give the `Song` model attributes `title`, `duration`, `date_of_release`, and `album_title`.

- Sprint 3: User can see some data populated in the application

Let's seed our application with some data. 

	- There's something wrong with our requiring of `models`.  Can you see what it is?
  - Check out the almost-complete Artist creation, and fill in the correct info from below.
	- Follow this pattern for Manager and Song creation. 
	- Don't forget to `.exit()` when you're done with your last `create`.  But make sure you don't do it before then!

  **Artist**:  

    - Name: Luciano Pavarotti
    - Photo URL: http://img.informador.com.mx/biblioteca/imagen/677x508/811/810055.jpg
    - Nationality: Italiano
    - Instrument: Voice
    - Home Address: 1 Strada Roma

  **Manager**:  

    - Name: Ricky Bobby
    - Email: rbobby@gmail.com
    - Office Number: 516-877-0304  
    - Cell Phone Number: 718-989-1231

  **Song**:  
  
    - Title: The Best Song Ever
    - Duration: 3:31
    - Date of Release: 7/13/2015
    - Album Title: Best Album Ever

## Licensing
All content is licensed under a CC??BY??NC??SA 4.0 license.
All software code is licensed under GNU GPLv3. For commercial use or alternative licensing, please contact legal@ga.co.
