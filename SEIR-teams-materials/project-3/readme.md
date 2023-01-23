# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) Project #3: Building a Full Stack MERN Application

## Summary

- This is a team project with pre-assigned teams.
- [Project Proposals](../../../project-3/issues/new?assignees=&labels=&template=project-proposal-submission.md&title=Your+Group+Names+%2B+Squad+Lead) are due on **Tuesday, 1/25 at or before 12:00 PM ET**.
- Project Deliverable is due on or before **Monday, 1/31 at or before 1:00 PM ET**.
- Presentations will be on **Monday, 1/31 at 2:00 PM ET** to the entire cohort.
- Each team has a total of 5 tokens for support. In order to receive support, you **must** fill out a [troubleshooting issue](../../issues/new?labels=bug&template=project-troubleshooting-request.md&title=BUG+DESCRIPTION). The next instructor in the support queue will reach out and help debug your issue, with a Zoom call with your team during scheduled office hours.

## Details

In your last project, you learned how to build a frontend React application that used data from a third-party API. In this project you will build a full stack application with a similar React frontend, but with your own backend application (server and database).

Your instructors have organized you and your classmates into groups to design
and build an app with two major components:

1. An API of your own design (built using Node, Express, and Mongoose) that
   serves JSON.
2. A front-end React application that updates the UI and makes requests to the
   API.

**This is meant to push you both technically and collaboratively.** You will be
joining a development team during your career. Working collaboratively is a
learned skill, just like programming. It's important to learn how to work
together.

**_You are highly encouraged to pair-program throughout the project. Check
out this [Live Share](https://marketplace.visualstudio.com/items?itemName=MS-vsliveshare.vsliveshare)
feature on VSCode that enables real-time collaboration between developers_**

## Requirements

It is important to keep in mind the goal of this program and these projects,
they are to utilize the skills you have been taught and the skills that
employers care about. You should strive to build projects that will catch an
employers eye and get you hired.

### Technical Requirements

**Back-End Requirements:**

- Your back-end must be a Node, Express, and Mongoose API with at least 1
  non-user model. No associations are required.
- Your back-end must follow RESTful architecture in the naming and functionality of available endpoints.
- You must have Create, Read, Update, and Destroy functionality built throughout the
  app (i.e. You don't need full CRUD on every model, just full CRUD throughout
  your models where it makes sense).

**Front-End Requirements:**

- Your front-end must use React and leverage the backend API in the above
  requirements.
- You must communicate with the back-end API RESTfully to Create, Read, Update,
  and Destroy resources (using either `fetch` or `axios`).
- You must use either CSS Grid or Flexbox along with media queries to make your app responsive
  across mobile, tablet, and desktop widths.
- You must have at least 4 components

**Project Requirements:**

- You must include a `planning/` directory that sufficiently demonstrates your
  team's planning process.
- Both your front-end and back-end repos have a README that adequately documents the project.
- Every team member must have roughly the same number of individual commits in
  the commit history for your app (dividing responsibilities between different
  parts of the app is fine, but every team member must have commits in the
  project).
- Every team must follow a
  [Git Workflow](../../../git-team-workflows)
- Every team member must speak for roughly the same amount of time during the
  group [presentation](./presentations.md)

**Deployment Requirements:**

- Your back-end/API must be deployed to Heroku and your front-end must be deployed to
  GitHub pages or [Netlify](../../../netlify-deploy-react). Applications that are not deployed will be considered
  incomplete.

> We recommend deploying your back-end and front-end separately, as we've taught in class. This
> will make it far easier to debug your deployed applications and manage your
> deployments.

### Bonus Requirements

You should only attempt these bonuses if and only if you've satisfied the base
technical requirements for this project.

#### User Authorization

Consider whether or not you want to introduce a barrier to entry for your
application. Does it fit in with the idea of your application? User
authorization is tricky.

Take a look at [this repo](../../../express-auth-api)
to learn about user authentication/authorization.

## Submission

**_DO NOT FORK THIS REPOSITORY!_** Create a **new** organization and two repositories. Then, submit
your project as an issue to the project-3-gallery repository.

Your team must turn in something before presentations begin. However, you are
welcome to continue working on it over the course of SEI and beyond!

With your submission please include any questions you'd like answered, or
specific things on which you'd like us to focus when giving feedback.

## Necessary Deliverables

Your submission must include **all** of the following:

### Project Proposal

**_Designate a scrum lead for your team._** The scrum lead will act as the project manager
for the team and run daily standups to ensure the team is aligned on the most important
priorities and deadlines. He/she/they will also ensure that the work of every individual contributor
on the team is integrated into a single, coherent application.

By the deadline specified in the course schedule, you need to submit:

1. Your project idea (a brief 2-3 sentence description of your app)
2. A list of your models and their properties
3. Scrum lead/project manager's name
4. Planning assets (wireframes, user stories, req-res cycle diagram, etc.)

### Final Application

Your project is due on the date specified in your course schedule. Create an issue on the project-3-gallery repo containing:

- A link to your deployed application
- A link to your Project 3 Github repositories (Do not fork this repo)

The repository for your backend API should include:

- A working JSON API (built by your team) built using Express and Mongoose that
  meets the technical requirements above.
- Frequent commits dating back to the very beginning of the project for **EVERY** member of the team. Make sure that if you're using a paired or mob programming model that every contributor is listed in the commit. Follow the [documentation](https://docs.github.com/en/github/committing-changes-to-your-project/creating-a-commit-with-multiple-authors) to learn how to create a commit with multiple authors.
- A `README.md` file in the root of your repo that follows
  [good standards of documentation](https://git.generalassemb.ly/ga-wdi-lessons/documentation-markdown)
  (i.e. explanations of the technologies used, the approach taken, features,
  installation instructions, unsolved problems, etc.)
- A link to your hosted, working API in the URL section of your Github repo:

> ![The URL section of your Github repo](https://media.giphy.com/media/WUsOlSNbPlE72OudJs/giphy.gif)

The repository for the frontend of your application should include:

- A working frontend application (built by your team) built with React and React
  Router that meets the technical requirements above.
- Frequent commits dating back to the very beginning of the project.
- A `README.md` file in the root of your repo that follows
  [good standards of documentation](https://git.generalassemb.ly/ga-wdi-lessons/documentation-markdown)
  (i.e. explanations of the technologies used, the approach taken, features,
  installation instructions, unsolved problems, etc.)
- A link to your hosted, working application in the URL section of your Github
  repo:

> ![The URL section of your Github repo](https://media.giphy.com/media/WUsOlSNbPlE72OudJs/giphy.gif)

## Asking For Help

### Scrums

Once a day, typically in the morning, the scrum lead will lead a 10 minute scrum
meeting with each group to talk about progress and planning. During the standup, each
person should cover:

- what was worked on the day before
- what will be worked on that day
- any obstacles that could jeopardize project deadlines

Your instructional team squad lead will attempt to be at those meetings, schedule allowing! 

### In-person Support

Each team will be given 5 (five) tokens, redeemable at any time during regular
class and Study Hall time (not including evening Office hours), for 20 minutes
with an instructor. The motivation behind the token system is to give you the
opportunity to solve issues and errors you run in to on your own and with your
team, and to decide together when to seek assistance from the instructional team. 

- Tokens are redeemable by completing a [troubleshooting issue](../../issues/new?labels=bug&template=project-troubleshooting-request.md&title=BUG+DESCRIPTION). The next instructor in the support queue will reach out and schedule a call with your team during office hours.
  Please direct message your Squad Lead for assistance, if you are unclear about the process.
- Tokens cannot be transferred between groups - there is no black market for tokens.

## App Organization

You should split your application into separate repositories, one for your React
front-end and another for your Node-Express-Mongoose backend API.

[See deploying to Heroku with MongoDB Atlas here](../../../heroku-atlas-deployment).

## Contribution Guidelines

- Each member of your group **_must have an individual commit history_** to your
  project's repositories (Multiple commits per group member). Make sure that if you're using a paired or mob programming model that every contributor is listed in the commit. Follow the [documentation](https://docs.github.com/en/github/committing-changes-to-your-project/creating-a-commit-with-multiple-authors) to learn how to create a commit with multiple authors.
- Each member of your group is expected to present for an equal amount of time
  during [project presentations](presentations.md), which last at least 10
  minutes per group.
- During 10-minute daily scrums with an assigned instructor, teams members must
  share progress. Scrum discussion topics may include goal-setting, time
  management, goal progress, and individual group contributions. This is **not**
  time to address technical issues. The instructors will check in with groups
  every day of project week.

## Project Ideas

For this project, work with your team to build a creative product that you think
someone will want to use.

> TIP: If you have an idea that you've been itching to make, save it for your
> Project 4. You can build whatever you want for Project 4, the purpose of this
> project is to build what you **and your teammates** want to build

If you're struggling to come up with your own project ideas, checkout
[r/startup_ideas](https://www.reddit.com/r/Startup_Ideas/) on reddit or
[requestforstartup.co](https://requestforstartup.co/).

> TIP: The best projects tend to be MVP versions of popular applications with a
> unique twist. If there's popular application that you use frequently (think
> Twitter, Facebook, Instagram, Evernote, etc), think about how you could create
> your own unique version of it.

Once your team selects an idea, the group **must** choose a workflow from the
[Git Teams & Workflow lesson](../../../git-team-workflows).
Be prepared to share your team's plans with your assigned instructor at the
first round of scrum.

## Tips

### Process

- **Designate a scrum lead for your team.** The scrum lead will act as the project
  manager for the team and run daily standups to ensure the team is aligned on the
  most important priorities and deadlines. They will also ensure that the work of
  every individual contributor on the team is integrated into a single, coherent application.
- Pick a Scrum Lead who is willing to put in the work of managing people toward one cohesive vision. Groups that are successful get organized behind one mission, with a leader who can rally people to the cause and delegate the right tasks to the right people to get things done. Successful groups also have teammates who are willing to put in the work to achieve the end vision and prioritize the group’s goals.
- Pick the Git Workflow that makes the most sense for your group, then pick a Git Manager who acts as air traffic control for your repos. The Git Manager should be the one approving and merging pull requests, and coordinating with everyone to minimize and resolve merge conflicts.
- Use a central organizing document like a Trello Board or a Google Doc to keep your plans organized and accessible to the whole group. Invest time up front in planning both the project itself as well your group’s approach — who will be responsible for what parts of the code? When will your group get work done? How and when will you use your tokens?
- Try to work on both front- and backend code if possible, as this will be your only full-stack project experience before your capstone. Better yet, try to focus on the area that you need to grow in the most (if servers aren’t your thing yet, work on the backend; if you and React still don’t get along, put in some time on the frontend).
- Spend some time on camera with your teammates everyday in addition to pair programming and standups with your squad leader. Google Hangouts is a great option for this, or shorter Zoom sessions. Working with others helps you stay accountable, and teammates are also a great resource.
- Aim to hit MVP as early as possible. To that end, plan an MVP for your app that you know is doable with what you have already learned. Commit and deploy early and often. Do not wait until Thursday or Friday to deploy for the first time, as you almost certainly WILL run into big issues.
- Remember that this will be one of the two more technically complex projects in each of your portfolios. Spend the time and energy to put a lot of work into making something each one of you can be proud to show off to employers. The code should be clean and functional, and it should have a professional design as well.
- **Write pseudocode** before you write actual code. Thinking through the logic
  first helps.
- Don't hesitate to **write throwaway code** to solve short-term problems.
- **Read the docs** for whatever technologies / frameworks / API's you plan to
  use. (See ["RTFM"](https://en.wikipedia.org/wiki/RTFM))
- **Continuously Deploy** your code. Like, deploy at least once a day - ideally
  twice a day.

### Code

- **Keep your code DRY** and build your APIs RESTful.
- **Be consistent** with your code style. You're working in teams, but you're
  only making one app per team. Make sure it looks like a unified effort.
- **Commit early; commit often.** Don't be afraid to break something because you
  can always go back in time to a previous version (so long as you're committing
  often).
- **Deploy early; deploy often.** Deploy your work as early as possible, even if
  you don't really have anything completed. Heroku issues **always** pop up.
  Don't be caught short just before the submission deadline!
- **Name things appropriately. Comment as necessary.** Do your naming
  conventions make sense? Would another developer be able to look at your app
  and understand what everything is? (See
  ["self-documenting"](https://en.wikipedia.org/wiki/Self-documenting) and
  [Code Tells you How, Comments Tell you Why](https://blog.codinghorror.com/code-tells-you-how-comments-tell-you-why/)).
  Even if it's obvious, comments can help to explain the intent -- the what and
  why. This allows the next developer to understand the purpose and decide what
  can be adjusted to achieve the same goal.
- **Ensure it is well-formatted.** Are you indenting consistently? Can we find
  the start and end of every div, curly brace, etc? Organizing the hierarchy is
  key to understanding.

Teams of developers usually adhere to an agreed-upon set of code-style rules.
This reduces issues with reading our colleagues' code. We strongly recommend
using [PrettierJS](https://github.com/prettier/prettier).

## Resources

- [HackDesign](https://hackdesign.org/lessons) (beginner's reference for
  thinking like a designer)
- [UX Design for Developers](https://hackernoon.com/ux-design-for-developers-d3429200a1da)

## Plagiarism

Take a moment to re-familiarize yourself with the
[plagiarism policy](../../../course-intro/blob/master/plagiarism.md),
specifically on using work you find online and on work you do with other
students.

We give assignments like this to give you the opportunity to review the material
in class in a practical manner. By building something using what you've learned
in class, you'll be reviewing the material and gaining a deeper understanding of
it.

These assignments are similar to those you can expect when applying for a job,
either in the form of a take-home coding challenge or an in-person technical
interview. So it's important that you put in your best effort now and challenge
yourself to do this assignment on your own.

If you are struggling with the material, that's alright! That's why you're here.
First, try reviewing the previous lessons and exercises. Go easy on yourself,
you're still learning! If you're still struggling after that, come to office
hours and ask an instructor for help. They're here to help you!

Don't copy and paste from another source or another student or the solution
branch. That's just going to put you at a disadvantage when you're interviewing
for a job
