# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) Project #3: Building a Full Stack MERN Application

This project will have you build a full stack application with an API backend as well as a React front-end.

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

## Previous Student Retros

Please give the retros a once over as there is much insight to gain from the trials and tribulations of previous classes. 

- [previous-student-project-retros](previous-class-p3-retros)

## Requirements

It is important to keep in mind the goal of this program and these projects,
they are to utilize the skills you have been taught and the skills that
employers care about. You should strive to build projects that will catch an
employers eye and get you hired.

# Project Evaluation

We use the following rubric for our evaluation, but ultimately it is up to your
instructors as to whether your project is complete.

## Overall Project Requirements

The following **_must_** be met in order for the project to be considered
complete:

- The app is deployed fully deployed (both the front-end and the back-end).
- Students include a `planning/` directory that sufficiently demonstrates their
  team's planning process.
- The repos have a README that adequately documents the project.
- The commit history of your repos show a roughly equal number of commits from
  each group member
- a `Team` page to show case each team memeber's picture, passion, and contribution on the project. 

### Technical Requirements

Two separate repo's are required for this project, one for the `Back-End` and one for the `Front-End`. They must not reside in the same repo. 

**Back-End Requirements:**

- Your back-end must be a Node, Express, and Mongoose API with at least 2
  models, more if needed, and one association.
- Must have Create, Read, Update, and Destroy functionality built throughout the
  app (i.e. You don't need full CRUD on every model, just full CRUD throughout
  your models where it makes sense).

**Front-End Requirements:**

- Your front-end must use React and leverage the backend API.
- You must use React Router to handle multiple views.
- You must communicate with the back-end API RESTfully to Create, Read, Update,
  and Destroy resources (using either `fetch` or `axios`).
- Your frontend must be responsive and work on mobile phones, tablets, and desktops


### Collaboration

- Every team member must have roughly the same number of individual commits in
  the commit history for your app (dividing responsibilities between different
  parts of the app is fine, but every team member must have commits in the
  project).
- Every team member must speak for roughly the same amount of time during the
  group [presentation](./presentations.md)

### Deployment

- Your API Backend must be deployed to `Heroku` and your front-end must be deployed to github. Applications that are not deployed will be considered incomplete.

### Final Application

The repository for your backend API should include:

- A working JSON API (built by your team) built using Express and Mongoose that
  meets the technical requirements above.
- Frequent commits dating back to the very beginning of the project.
- A `planning/` directory in the root of your backend repo that contains a `readme` with:
    
    - A couple of paragraphs about the **general approach you took**.
    - Link to your **user stories** – who are your users, what do they want, and why?
    - Link to your **React Architectures** - Diagrams of your React Architecture.
    - Link to your **wireframes** – sketches of  views and interfaces in your application.
    - Link to your **Time/Priority** matrix 
    - Table including functionality and estimated/actual time for completion
    - Descriptions of any **unsolved problems** or **hurdles** your team had to overcome.

The repository for the frontend of your application should include:

- A working frontend application (built by your team) built with React and React
  Router that meets the technical requirements above.
- Frequent commits dating back to the very beginning of the project.

## Asking For Help

### Scrums

Once a day, typically in the morning, the instructors will have 10 minute scrum
meetings with each group to talk about progress and planning.

## App Organization

You should split your application into separate repositories, one for your React
front-end and another for your Node-Express-Mongoose backend API.

## Contribution Guidelines

- Each member of your group **_must have an individual commit history_** to your
  project's repositories (Multiple commits per group member).
- Your backed repositories must include a `planning/`
  directory with wireframes, user stories, mpv, postmpv and the role of each group member 
  in building the application.
  Specifically, it should include the responsibilities of each member and their
  contributions to the project.
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
[startup_ideas](https://www.reddit.com/r/Startup_Ideas/) on reddit or
[requestforstartup.co](https://requestforstartup.co/).

> TIP: The best projects tend to be MVP versions of popular applications with a
> unique twist. If there's popular application that you use frequently (think
> Twitter, Facebook, Instagram, Evernote, etc), think about how you could create
> your own unique version of it.

## Tips
- **Don’t hesitate to write throwaway code** to solve short-term problems.
- **Read the docs for whatever technologies, frameworks, or APIs you use**.
- **Write your code DRY** and **build your APIs RESTful**.
- **Be consistent with your code style**. You're working in teams, but you're only making one app per team. Make sure it looks like a unified effort.
- **Commit early, commit often**. Don’t be afraid to break something because you can always go back in time to a previous version.
- **Keep user stories small and well-defined**. Remember – user stories focus on what a user needs, not what development tasks need accomplishing.
- **Write code another developer wouldn't have to ask you about**. Do your naming conventions make sense? Would another developer be able to look at your app and understand what everything is?
- **Make it all well-formatted**. Are you indenting, consistently? Can we find the start and end of every div, curly brace, etc.?
- **Comment your code**. Will someone understand what is going on in each block or function? Even if it's obvious, explaining the what & why means someone else can pick it up and get it.
- **Write pseudocode before you write actual code**. Thinking through the logic of something helps.

Teams of developers usually adhere to an agreed-upon set of code-style rules.
This reduces issues with reading your colleagues' code. We strongly recommend
using [StandardJS linting](https://github.com/standard/standard#install) or
[PrettierJS](https://github.com/prettier/prettier).

## Resources

- [HackDesign](https://hackdesign.org/lessons) (beginner's reference for
  thinking like a designer)
- [UX Design for Developers](https://hackernoon.com/ux-design-for-developers-d3429200a1da)

## Plagiarism

Take a moment to re-familiarize yourself with the
[plagiarism policy](https://git.generalassemb.ly/seir-1118/administrative/blob/master/plagiarism.md),
specifically on using work you find online and on work you do with other
students.

We give assignments like this to give you the opportunity to review the material
in class in a practical manner. By building something using what you've learned
in class, you'll be reviewing the material and gaining a deeper understanding of
it.

These assignments are similar than those you can expect when applying for a job,
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
