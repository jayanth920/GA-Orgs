# Lab: Blitter

> A modified version of [Hannah Howard's "Blitter" exercise](http://hannahhoward.github.io/angular-intermediate-wdi/).

Are you ready to build the next hot Silicon-Valley Startup: Blitter?

If there's one VC space that is wide open for almost instant success, it's social networking. You pretty much build a social networking site of any kind, and Bam! you're worth a billion dollars.

So let's do this. Your job is to build an Angular site that pulls a list of "bleets" from an API and displays them in a list on a page. Your page should also have the ability to add new bleets, edit existing bleets and delete bleets. And, you should be able to click on a bleet and display a detail page for just that individual bleet. Along the way, you will need to use `ui-router` and `ngResource`.

## API

Bleets will be accessible via a local Rails-based API. To get this up and running, follow the instructions below...

```bash
git clone https://github.com/ga-wdi-exercises/blitter-api
cd blitter-api
bundle install
rake db:create db:migrate db:seed
rails s
# open http://localhost:3000/bleets.json
```

Each bleet looks like this...

```json
{
  "id":5,
  "content":"Is there a hack and tell meetup in DC?",
  "likes":2,
  "created_at":"2016-07-12T14:28:12.003Z",
  "updated_at":"2016-07-12T14:28:12.003Z"
}
```

To retrieve all bleets, you can send a GET request to `http://localhost:3000/bleets`. To get an individual bleet, just add an id to the end of the url, like so - `http://localhost:3000/bleets/2`.

## Steps

#### 1. Bootstrap an Angular application. It should have...

* A master `blitter` module.
* A `bleets` sub-module that handles all "Bleet" related functionality.

#### 2. Include `ui-router` and use it to...

* Create two routes. One for an index of bleets, the other for a show page.
* Don't forget to add the directive required to view different states in your HTML.

> [`ui-router` documentation.](https://github.com/angular-ui/ui-router/wiki)

#### 3. Create a factory that allows you to consume the Blitter API using `ngResource` and `$resource`.

> [`$resource` documentation.](https://docs.angularjs.org/api/ngResource/service/$resource)

#### 4. Create a controller for each route.

* The controller should have access to the functionality defined in your factory.

####  5. Create `index.html` and `show.html` bleet views.

* `index` should list all bleets. `show` should offer a detailed view of each bleet.
* In `index`, each bleet should have a link to its respective show page.

#### 6. Add `new` functionality to your application. You can either...

* Create a separate route, controller and view (with form) for `new` functionality. Or...
* You can place the form on the `index` page and define form functionality in the index controller. No additional route required.
* In either scenario, submission of the form should trigger a method in your controller that creates a new bleet in the API.

> **BONUS:** If you go with the second index option, make it so that the new form only appears when you click a "New Grumble" button or link.

####  7. Add `edit` functionality to your application. You can either...

* Create a separate route, controller and view (with form) for `edit` functionality. Or...
* You can place the form on the `show` page and define form functionality in the show controller. No additional route required.
* In either scenario, submission of the form should trigger a method in your controller that updates a bleet in the API.

> **BONUS:** If you go with the second show option, make it so that the new form only appears when you click a "Edit Grumble" button or link.

#### 8. Add a delete button or link next to each bleet in `index.html`.

* When clicked, a controller method should be triggered that deletes the corresponding bleet in the API.

## Bonuses

### Add Like/Dislike Functionality

You'll notice that each post in the API has a `likes` value. Make it so that a user can like a bleet -- i.e., increment a bleet's `likes` by 1.
* Each bleet's like value should be displayed on its `index` and `show` views.
* "Liking" should be triggered by clicking a button, link or icon located next to the bleet on its `index` and `show` views.

Once you've done that, implement some "dislike" functionality.

### Add Comments

The API also includes comments. A comment belongs to a bleet. A bleet's comments can be retrieving by accessing a URL like `http://localhost:3000/bleets/2/comments`. Each comment looks like this...

```json
{
  "id": 1,
  "content": "Wait, what?!",
  "bleet_id": 1,
  "created_at": "2016-07-12T15:05:54.189Z",
  "updated_at": "2016-07-12T15:05:54.189Z"
}
```

A user should be able to comment on any bleet.
* A bleet's comments should be visible on that bleet's show page.
* A form to add a comment should exist on a bleet's show page.
* Each comment should have an "Edit Comment" button or link next to it. When clicked, an edit form appears below the comment.
* Each comment should have a "Delete Comment" button or link next to it. When clicked, the comment is (a) deleted from the database and (b) removed from the page.s
* A comment **DOES NOT** needs its own show view.
