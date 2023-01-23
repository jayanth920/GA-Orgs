![General Assembly Logo](http://i.imgur.com/ke8USTq.png)

# Rails Mini Project: Todo App

## Objectives

By the end of this, students should be able to:

- Build a rails app with multiple models and relationships
- Utilize nested resource routes to make management of child objects easier
- Use partials to display records and input forms for more than one model on a single page

## Instructions

- **NOTE** You have a choice for your miniproject. You may complete the project described here, or you may choose to make a different app. If you make a different app, it *must* demonstrate the objectives above.
- Fork and clone this repo.
- Change into the project directory. Install dependencies.
- Build an app according to the requirements below. You should plan your work and commit when each task you set for yourself is complete.
- When you are ready to submit, push your changes and open a pull request.

## Requirements

Your todo list app should have three models with two relationships. **It should also:**

- Be visually appealing.
- Have tasks that can be deleted, can be edited, and can be marked as completed. Tasks are not valid if they are blank.
- Have lists that group related tasks together. You should be able to create, delete, and edit lists. Viewing a list should show all related tasks. Lists are not valid if they do not have a name.
- Have notes for each task. Notes behave a bit like comments, except they don't have an author. They are also a bit like tasks, but they don't have a completion state. Notes are not valid if they are blank.
- Have a root that displays all task lists. Clicking on a list brings you to the task view for that list. Clicking on a task brings you to the task view with notes beneath the task and a form at the bottom for adding more notes.
- Make liberal use of partials. For example, listing notes might be contained in a partial and rendered from the task detail view. The form for adding a new note might be a partial in the notes view folder, but rendered from the task detail view.

## Bonus

If you're looking for extra challenge, try writing an acceptance test for each feature. We've setup `capybara` and `rspec` for you, so search for some tutorials to get acquainted testing rails apps. Search terms you might want to use:

- `acceptance tests with capybara in rails`
- `oustide-in testing in rails`
- `feature tests with capybara in rails`

If you're still looking for more, try adding users to your app using [plataformatec/devise](https://github.com/plataformatec/devise). Users have many lists. Users should not be able to see other users' lists.

You may also create a project feature that holds related lists. Users own projects, and when users log in they should be directed to a list of projects instead of lists. Projects should be in their own section with a heading, and they should list their own lists within the section.

## Additional Resources

- [VanillaJS • TodoMVC](http://todomvc.com/examples/vanillajs/) for visual inspiration
- [Foundation](http://foundation.zurb.com/) or [Bootstrap](http://getbootstrap.com/getting-started/) if you want to play with a CSS framework
