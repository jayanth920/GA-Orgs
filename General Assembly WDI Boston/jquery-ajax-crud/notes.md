# Delivery Notes

## Timing for Workshop Time

### 1st Day Timing

I'd suggest ending the first day with the *delete lab* for the class. Then review the lab either before announcies or at the beginning of the second day.

### 2nd Day Timing

For the second day, end with workshop time for the *dynamic update book*. You could review before announcies or ask developers to review the solution branch.

## getFormFields

When you bump into getFormFields again during the code along, talk about how important learning how to use something without falling down the rabbit hole of how it works is a very important and at times challenging piece for developers.

Learning to use templates and functions that other developers have created is a very important skill to start practicing. When you join a company and a team, they will already have applications, templates, and functions that you will need to learn to use.

Think of them as a power drill, at first you need to learn how to use the power drill. Just learn to use it. Don't worry about how the power drill works at first. Focus on learning how to use it.

So in today's lesson, you will be focusing on how to use a function we wrote named getFormFields. We will be focusing on how to use it, not how it works behind the scenes.

## CRUD a Resource

### Code along: (R)EAD resource collection
- browser
- curl
- AJAX
  - For this first code along, complete the whole feature in the `index.js` first.  That way they can see the entire flow from click handler, to api call, and response.  After they have that working, then refactor to `events.js`, `api.js` and `ui.js`

### Code along: (R)EAD specific resource
- browser
- curl
- AJAX
  - Do not build the entire feature in in the `index.js`. Follow the pattern you created with `events.js`, `api.js` and `ui.js`.
  - Introduce `getFormFields`, diagram the `name='object[property]'` and the `{}` it creates as shown in [this whiteboard diagram](https://git.generalassemb.ly/storage/user/3667/files/2f6c4f8a-9f9d-11e7-8a08-7331706dbc13)

### Lab: (D)ELETE specific resource
- browser(?)
  - Highlight how we can not test DELETE from browser
- curl
- AJAX
  - Assigning numbers for `DELETE` and `PATCH` at this point in the sequence, developers should be assigned a range of ids of books that they can modify. This ensures that no two people are trying to delete / update the same records
  - There are currently `168` books in the db
  - assign range by dividing `168/<number_of_devs>`

### Code along: (U)PDATE specific resource
- browser(?)
  - Highlight how we can not test UPDATE from browser
- curl
- AJAX
  - Highlight how we pass data to an AJAX call

### Lab: (C)REATE new resource
- browser(?)
  - Highlight how we can not test CREATE from browser
- curl
- AJAX

## Methodical Steps for AJAX
![Methodical Steps](https://git.generalassemb.ly/storage/user/3667/files/a949163c-39ac-11e7-98e4-36bb118f04df)

## If a developer is absent or falls behind

`git checkout -b <new branch name> <sha>`
to checkout a new branch from a certain commit with whatever name you want. So if a dev didn't manage to finish delete, we have them run `git checkout -b update <sha for commit #3>` and then they've got a branch called `update` which has delete all done, so they're ready to go with update.
