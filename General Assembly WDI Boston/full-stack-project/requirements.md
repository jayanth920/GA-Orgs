# Requirements

In order to get a satisfactory score, by the time you present your project, you
**must** meet the following requirements:

### Deployment Requirements

Be deployed online, where the rest of the world can access it.
1.  [ ]  Host on your public Github page, not Github Enterprise.
1.  [ ]  Deploy client application on GH pages.
1.  [ ]  Deploy server application on Heroku.

### Version Control Requirements

1.  [ ] Sharing your work through a git repository hosted on Github.
1.  [ ] Making frequent, cohesive commits dating back to the **first day**
of the project week.
1.  [ ]  At least 1 commit every day during project week (not necessarily on both repos).

### Documentation Requirements

Your `README.md` file is the homepage of your code repository. It should tell
people about the project and its purpose.

1. [ ] Create 2 Github repos (one for your front-end and one for your back-end)
1. [ ] Front end README.md must include [wireframes](example_readme.md#wireframe) and [user stories](example_readme.md#user-stories).
1. [ ] Back end README.md must include link or visual of Entity Relationship Diagram (ERD).
2. [ ] Both README.md must include an explanation of the app.
3. [ ] Both README.md must include a link the deployed application.

> Note: There's an [`example_readme.md`](example_readme.md) in this repository for your reference. It covers all documentation requirements.

### Auth Specifications
1.  [ ] Signup with email, password, and password confirmation.
1.  [ ] Login with email and password.
1.  [ ] Logout when logged in.
1.  [ ] Change password with current and new password.
1.  [ ] Signup and Signin must only be available to not signed in users.
1.  [ ] Logout and Change password must only be available to signed in users.
1.  [ ] Give feedback to the user after each action's success or failure.
1.  [ ] All forms must clear after submit success and user sign-out

### CRUD Specifications
1.  [ ] User must be able to create a new resource
1.  [ ] User must be able to update a resource
1.  [ ] User must be able to delete a resource
1.  [ ] User must be able to view a single or multiple resource(s)
1.  [ ] All resource actions that change data must only be available to a signed in user.
1.  [ ] Give feedback to the user after each action's success or failure.
1.  [ ] All forms must clear after submit success and user sign-out

### API Specifications
1.  [ ] Build an API using Express and Mongodb.
1.  [ ] Create at least 4 RESTful routes for handling GET, POST, PUT/PATCH, and DELETE requests.
1.  [ ] Any actions which change data must be authenticated and the data must be "owned" by the user performing the change.
1.  [ ] Have at least 1 resource that has a relationship to User

### DO NOT!!
Your app **must not**:
1.  [ ]   Delete your repository at any time or start over.
1.  [ ]   Rely on refreshing the page for any functionality.
1.  [ ]   Have any user-facing bugs.
    - [ ] Display non-functional buttons, nor buttons that do not successfully complete a task.
    - [ ] Show actions at inappropriate times (example:  change password form when a user is not signed in).
    - [ ] Forms not clearing at appropriate times (example: sign up form not clearing after success).
1.  [ ]   Use alerts for anything.
1.  [ ]   Display errors or warnings in the console.
1.  [ ]   Display debugging messages in the console.
