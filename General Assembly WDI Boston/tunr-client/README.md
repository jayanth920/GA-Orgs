# Tunr-Client

## Instructions:
* Install dependencies using `npm install`
* `npm start` to kick off the app.
* Open your app in Chrome and check out the functionality for viewing, adding, and updating artists.
	* Create two artists
	* Verify that you can see these artists
	* Update a field for one of the artists
	* Delete one of the artists
* Lean heavily on your `Artists` `starter-code`, but go slowly--one function, one route at a time
* Make sure you test early and often, preferably multiple times per step (bullet point)
* Avoid Copy-and-Paste! You learn more if you type it out.
* If you get stuck, try to get unstuck! Advice for getting unstuck includes:
	* Not freezing up but continually trying new things (googling, reading docs, experimenting, etc)
	* Identifying once you are stuck, as you have already tried all options you can think of
	* Homing in on your gap in knowledge by phrasing a specific question
	* Close your knowledge gap by ASKING that question to someone!

## Requirements

<!--10:38 WDI3 -->
<!--10:35 25 minutes-->

<!--Instructor should model the entire `show` route all the way through to the back end. Devs will be at half-mast for this.  Then turn over to devs to code themselves.-->

<!--Started modeling at 10:54 WDI2-->

<!--Finished modeling at 11:40 WDI2-->
<!--Finished modeling 11:17 WDI3 -->

- Sprint 1: User can CRUD managers
  - As of now, the only route that works for managers is `index`.  Go to `/managers` in your browser to check it out!  Not very impressive I suppose, but it will be once we build out the rest of the CRUD functionality, using the CRUDable `artists` as an inspiration.
	  - Create components for `manager-show`, `manager-edit`, and `manager-new` in `front-end/src/app/managers/`.  The easiest way to do this is to go into the `front-end/src/app/managers/` and run `ng g c ____` in that directory.
	  	- Make sure all of these Components are imported into `managers.module.ts` with the proper path (spoiler alert: they probably won't be the proper path).
	  	- Import all of these components to `manager-routing.module.ts`.
	  - Fill out your front-end routes in `front-end/src/app/managers/manager-routing.module.ts`, using the artists routes as a model.
	  - Test your work so far by opening your browser and going to `/managers/show/1`, `managers/new`, and `managers/edit/1`.
	  - Use the artists templates and the managers `manager-index.component.html` as models to fill out a `manager-show.component.html`, a `manager-edit.component.html`, and a `manager-new.component.html` template.  Do NOT copy-and-paste, you need to change all the fields in these templates to match your manager attributes, namely `name`, `email`, `office_number`, and `cell_phone_number`.  A good way to do this is to have an artist template on the left side of your screen, and the corresponding manager template on the right side.
	  - Open your browser again.  Looks like we've got some errors.  Yay!  Work with your partner to clear them all.  Use the working `artists` files for help if you're not sure how to resolve the errors.  Stub out (use `console.log`) for any methods.  Don't do anything with `ArtistsService`/`ManagersService` yet, we will cover that in the next step.
	  - Once all your errors are gone, check out your `managers/edit/1` and `managers/new` in your browser. Cool, we have forms! Now let's actually put some data in there.
	  - Fill out your front-end service functions in `app/managers/managers.service.ts`, one at a time, using `app/artists/artists.service.ts` as a model. Follow the same left-side-right-side technique as you did for templates.
		- Import this service into all your manager Components, and fill out the Component functions you stubbed out a couple steps ago, using the artist Components as a guide.
	  - Open the browser again.  Clear out any errors you see in the terminal, and then try to create a new manager at `managers/new`.  If you look in the Dev Tools console, you should see your manager.  However, we're getting a 404 for our `http` request.  Makes sense, right?  We haven't built our back end yet.  It's time to go full stack....
	  - Create managers back-end routes in your `back-end/config/routes.js` file, following the same format as artists.
	  - Give `managers.js` in your back-end `back-end/controllers` folder all the functions you already have in `artists.js`. Now we have everything we need except for data persistence.  Let's put a bow on our managers--*Sequelize style*.
	  - Finish the `Manager` model for your database, inside your `models` folder. Give it the attributes `name`, `email`, `office_number`, and `cell_phone_number`, all of type `String`.
	  - Test out all your routes to make sure `manager` has the same functionality as `artist`.

>**Note:** Once you have finished the steps above, and you try to save a manager to the DB, you will see an error in the terminal saying something like `column "email" of relation "managers" does not exist`. If you see this, you need to recreate your `managers` table, so you should run `db/dbSetup.js` with `node` again.

- Sprint 2: User can CRUD songs
  - Same as above, create `songs` routes and components for the front end.
  - Same as above, create `songs` templates for the front end.
  - Same as above, create `songs` service for the front end.
  - Same as above, create `songs` routes for the back end.
  - Same as above, create `songs` controllers for the back end.
  - Same as above, give the `Song` model attributes `title`, `duration`, `date_of_release`, and `album_title`.

- Sprint 3: User can see some data populated in the application

  - Seed your application with some data.
  	- Check out the almost-complete Artist creation, and fill in the correct info.
	- Follow this pattern for Manager and Song creation.
	- It would be a good idea to chain your `create`s with `.then`s.
	- Don't forget to `.exit()` when you're done with your last `create`.

Put the following into your DB with `db/seed.js`:

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

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
