# jQuery Todo App

The goal of this assignment is to build a simple client-side JavaScript/jQuery "todo" app. Todo items will not be saved anywhere, and there will be no interaction with the Rails side of things other than the initial page load.

Users of your app should see a list of finished items, a list of unfinished items, and a form with a single text field and a "Create" button to add new items. It should not be possible to add blank items. New items are unfinished by default, and move to finished when the user clicks a "Complete" button attached to the item. All items also have a "Delete" button that removes them from the app. Items should keep track of both the date/time they were created, and the date/time they were completed.

## Application structure

There are two main components to this app: `TodoApp` and `TodoItem`.

`TodoApp` is a namespace containing app functions not related to individual todo items. Since there is only one app, this is only a namespace and not a class. It should handle inserting, relocating, and deleting elements from the DOM, and store an array of current `TodoItem` objects.

`TodoItem` represents an individual todo item, and handles constructing the DOM elements for displaying itself. These elements will need to include "complete" and "delete" buttons, with appropriate functions bound to their click events.

## Things you'll need to do

* Build an HTML "skeleton" for the app with useful IDs and classes that will allow easy manipulation from JavaScript (in `app/views/home/show.html.erb`)
* In the `$(document).ready()` handler in `app_ready.js`, add a click event handler to your "Create" button that calls a function on `TodoApp`, which will create the item from the text in the form field
* Create a constructor for `TodoItem`, and implement a function that creates and returns an HTML element with the appropriate properties that `TodoApp` can insert
* Add `TodoItem` functions to generate the Complete and Delete buttons, and incorporate them into the "rendered" DOM node
* Ensure blank todo items cannot be created (consider making `TodoItem` responsible for this, sort of like a validator in Rails)
* Add properties on `TodoItem` for "created at" and "completed at", set them at the appropriate points in the code, and incorporate this info into the item's "rendered" DOM node

## Extra functionality

* Add an "edit" button to each todo item that transforms the todo text into an input field with the same text, and replaces the normal buttons with "save" and "cancel" buttons that allow updating the item with new text or canceling the edit, respectively
* Add links to both lists that allow sorting the items in that list either by creation/completion date or alphabetically; the current sorting should also be maintained when new items are inserted or moved to the "done" list
