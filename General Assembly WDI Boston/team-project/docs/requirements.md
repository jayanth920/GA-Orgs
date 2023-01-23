# Requirements

In order to get a satisfactory score, by the time you present your project, you
**must** meet the following requirements:

## Deployment

Be deployed online, where the rest of the world can access it:

1. [ ] Host on your public Github page, not Github Enterprise.
1. [ ] Deploy client application on GH pages.
1. [ ] Deploy server application on Heroku.

## Version Control

Demonstrate using version control by:

1. [ ] Sharing your work through a git repository hosted on Github.
1. [ ] Making frequent, cohesive commits dating back to the **first day** of the project week.
1. [ ] 1 commit on the first day of project week on both repos.
1. [ ] At least 1 commit every day during project week (not necessarily on both repos).
1. [ ] All repositories must have commits from every team member.
1. [ ] When pairing, include each developer's name in the commit message.

## Documentation

Produce documentation on Github:

1. [ ] Create 2 Github repos (one for your front-end and one for your back-end)
1. [ ] Pin both repositories on GitHub as a Popular Repository

Both front-end and back-end repos should include README's with:

1. [ ] An explanation of the what the app does and how it works.
1. [ ] A link to the other repo
1. [ ] A link to both deployed sites
1. [ ] List of technologies used
1. [ ] List unsolved problems which would be fixed in future iterations.
1. [ ] Document your planning, process and problem-solving strategy
1. [ ] Complete the repository `Description` field and `Website` field with a meaningful sentence description of the application and link to the live URL
![github image](https://git.generalassemb.ly/storage/user/3667/files/beae41ae-aaaa-11e7-8867-63958d376a0b)

Your front-end repo's README should also have:

1. [ ] Link to wireframes and user stories

Your back-end repo's README should also have:

1. [ ] Link to Entity Relationship Diagram (ERD).
1. [ ] A catalog of routes (paths and methods) that the API expects.

## Auth Specifications

1. [ ] Signup with email, password, and password confirmation.
1. [ ] Login with email and password.
1. [ ] Logout when logged in.
1. [ ] Change password with current and new password.
1. [ ] Signup and Signin must only be available to not signed in users.
1. [ ] Logout and Change password must only be available to signed in users.
1. [ ] Give feedback to the user after each action's success or failure.
1. [ ] All forms must clear after submit success and user sign-out
  - [ ] (Optional) Reset form to initial state on failure

## Client Specifications

1. [ ] Use a front-end Javascript app using React.js to communicate with your API (both read and write) and render data that it receives in the browser.
1. [ ] Have semantically clean HTML and CSS
1. [ ] User must be able to create a new resource
1. [ ] User must be able to update a resource
1. [ ] User must be able to delete a resource
1. [ ] User must be able to view a single or multiple resource(s)
1. [ ] All resource actions that change data must only be available to a signed in user.
1. [ ] Give feedback to the user after each action's success or failure.
1. [ ] All forms must clear after submit success and user sign-out
  - [ ] (Optional) Reset form to initial state on failure

## API Specifications

1. [ ] Use MongoDB, Mongoose, and Express to build an API.
1. [ ] Create at least 4 RESTful routes for handling GET, POST, PUT/PATCH, and DELETE requests for a resource other than User.
1. [ ] Have at least 1 resource that has a relationship to User
1. [ ] Any actions which change data must be authenticated and the data must be "owned" by the User performing the change.

## Team Requirements

1. [ ] Application must meet [Team Project Prompt](prompts.md) requirements

You and your team will be evaluated by each other and the consultant team on:

1. [ ] Planning
1. [ ] Decision Making
1. [ ] Workflow
1. [ ] Source Control
1. [ ] Team Contribution
  - [ ] Every developer must contribute code to both repositories
1. [ ] Pair Programming
1. [ ] Communication

## DO NOT!!

Your app **must not**:

1. [ ] Delete your repository at any time or start over.
1. [ ] Rely on refreshing the page for any functionality.
1. [ ] Have any user-facing bugs.
  - [ ] Display non-functional buttons, nor buttons that do not successfully complete a task.
  - [ ] Show actions at inappropriate times (example: change password form when a user is not signed in).
  - [ ] Forms not clearing at appropriate times (example: sign up form not clearing after success).
1. [ ] Use alerts for anything.
1. [ ] Display errors or warnings in the console.
1. [ ] Display debugging messages in the console.

## [License](LICENSE)

1. All content is licensed under a CC­BY­NC­SA 4.0 license.
1. All software code is licensed under GNU GPLv3. For commercial use or alternative licensing, please contact legal@ga.co.
