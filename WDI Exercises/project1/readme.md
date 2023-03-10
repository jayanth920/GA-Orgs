# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) Project #1: Build a Game with HTML, CSS and JavaScript

For your first project, you'll be creating a familiar game using HTML, CSS and
JS! Please choose one of the following options:

* **Tower of Hanoi**
* **Trivia (Self-scoring)**
* **Flash Cards**
* **Simon**
* **Hangman**

This is an opportunity to **be creative**, and work through some **tough
programming challenges**.

**You will be working individually for this project**, but we'll be guiding you
along the process and helping as you go. Show us what you've got!

> If you want to choose a different game for Project #1, please consult with an
> instructor! Warning - many seemingly simple games end up being much more
> complex than you might think!

## Requirements

### Technical Requirements

Your app must:

* Render in the browser
* Include separate HTML / CSS / JavaScript files
* Use Javascript or jQuery for DOM manipulation
* Be deployed online, using [Github Project pages](https://pages.github.com)
  and/or to a custom domain.
* Use semantic markup for HTML and CSS (adhere to best practices)
* Show a good commit history with frequent commits

Additionally, your project should stick with KISS (Keep It Stupid Simple) and
DRY (Don't Repeat Yourself) principles.

## Submission

***DO NOT FORK THIS REPOSITORY!*** Create a **new** repository. Then, submit
your project as an issue to this repo:

[github.com/ga-dc/project1-gallery](https://github.com/ga-dc/project1-gallery/issues/new?body=Link%20to%20repo%3A%0ALink%20to%20deployed%20app%3A%0A%0AThings%20you%27d%20like%20specific%20feedback%20on%3A%0A%0A)

You must turn in something before presentations begin. However, you're welcome
to continue working on it over the course of WDI and beyond!

With your submission please include any questions you'd like answered, or
specific things on which you'd like us to focus when giving feedback.

### Necessary Deliverables

Your submission must include **all** of the following:

* A hosted copy of your game, built by you, hosted on Github Pages
* Your HTML/CSS should pass the [HTML5 Validator](https://html5.validator.nu)
  and [CSS Validator](https://jigsaw.w3.org/css-validator/)
* A git repository hosted on Github with frequent commits dating back to the
  very beginning of the project
* A link to your hosted project in the URL section of your Github repo
* A `readme.md` file, including
  * Explanations of the technologies used, the approach taken, installation
    instructions, unsolved problems, etc.

The URL section of your Github repo: ![URL section](https://i.imgur.com/QQ7RsfR.gif)

## Deploying via GitHub Pages

**DO NOT** follow the instructions provided by GitHub for creating your Project
Pages. Why not? They expect `gh_pages` to be a separate informational site about
the project contained in the repo. What we want is to use the `gh_pages`
functionality to actually host our game.

Instead, try these steps:

1. Create a `gh-pages` branch, from master:

```sh
git checkout master
git checkout -b gh-pages
```

2. Initial deploy to origin (via push):

```sh
git push -u origin gh-pages
```

3. Verify

Browse to `<your_github_username>.github.io/<repo_name>`

Follow-up deployments:

After making further changes, deploy via push:

```sh
git push origin gh-pages
```

## Asking For Help

### Open Office Hours

Instructors will be holding open office hours on each project day from 10:00 to
12:30 and from 2:30 to 5:00. The normal afternoon and evening office hour
schedule will **not** be observed during project week.

### Github Issues

We strongly encourage you to file a Github issue prior to asking the instructors
for help directly. This will not only make you a better developer but a better
learner. Visit [this
readme](https://git.generalassemb.ly/DC-WDI/Administrative/blob/master/asking-for-help.md)
for more details on asking for help.

## Suggested Ways to Get Started

[Create your bronze, silver, and gold
plan.](https://github.com/ga-wdi-lessons/bronze-silver-gold)

* **Break the project down into different components** (data, presentation,
  views, style, DOM manipulation) and brainstorm each component individually.
  Use whiteboards!
* **Use your Development Tools** (console.log, inspector, alert statements, etc)
  to debug and solve problems
* Work through the lessons in class & ask questions when you need to! Think
  about adding relevant code to your game each night, instead of, you know...
  _procrastinating_.
* **Commit early, commit often.** Don???t be afraid to break something because you
  can always go back in time to a previous version.
* **Make it work, make it good, make it fast.** Don't get hung up on only saving
  or writing code that is good code. Get it working first, even if it means
  writing bad or ugly code. Once it's working, come back and refactor!
* **Consult documentation resources** (MDN, jQuery, etc.) at home to better
  understand what you???ll be getting into.
* **Don???t be afraid to write code that you know you will have to remove later.**
  Create temporary elements (buttons, links, etc) that trigger events if real
  data is not available. For example, if you???re trying to figure out how to
  change some text when the game is over but you haven???t solved the win/lose
  game logic, you can create a button to simulate that until then.

## Project Choices

### Flash-Cards

Pre-load your app with some data, and let the user flip through them quickly
(back or front), and use the keyboard flip the card, and to mark whether they
got it right or not. Track which cards were incorrect, and re-display them until
the user gets them right!

*Bonus:*

* Track scores over time (even if the page is reloaded)
* Include images on one or both sides of the flash card
* Let the user add flash cards (don't need to be saved across refreshes)

### Self-scoring Trivia

Pre-load your app with some questions and answers.

Test the user's wits & knowledge with whatever-the-heck you know about (so you
can actually win). Guess answers, have the computer tell you how right you are!

*Bonus:*

* Add time-based scoring
* Track scores across games (even if the page is reloaded)
* Allow users to compete against each other on a high-score board.

### Hangman

Have a player enter a word that will be guessed during the game. The word is
then hidden and represented by blank spaces. The second player then chooses
letters, which are revealed if present.

*Bonus:*

* Add timer-based scoring
* Track scores across games (even if the page is reloaded)

### Tower of Hanoi

<a href="https://en.wikipedia.org/wiki/Tower_of_Hanoi">Tower of Hanoi</a> is a
mathematical puzzle where the objective is to move a stack of discs from one rod
to another. There are three rules:

* Only one disk can be moved at a time
* Every move involves taking the top disk from one of the stacks and placing it
  on top of another stack
* No disk can be put on top of a smaller disk

*Bonus:*

* Add time-based scoring
* Track scores across games (even if the page is reloaded)

### Simon

<a href="https://en.wikipedia.org/wiki/Simon_">Simon</a> is a test of memory.
Have your program choose a sequence of different colors at random and then
prompt your player repeat the sequence allowing them to go to advance to next
round if the player is successful.

*Bonus:*

* Add timer-based scoring
* Track scores across games (even if the page is reloaded)

## Useful Resources

* [MDN Javascript Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
  _(a great reference for all things Vanilla Javascript)_
* [jQuery Docs](http://api.jquery.com) _(if you're using jQuery)_
* [Github Pages](https://pages.github.com) _(for hosting your game)_

## Evaluation

Your instructors will use this rubric to assess your project:

[Evaluation Rubric](evaluation-template.md)

## Presentations

We expect everyone to attend all presentations in their entirety and will
provide breaks between each session.

This means **no working on your code** while others are presenting. This is your
chance to ask others how they tackled their project.

Each session of presentations will be science-fair style. Several people will
set up at a given time, and other students will walk around asking questions
like:

- What would you do differently?
- What are you most proud of?
- What would you do next?
- How did you plan your project?
- What did you learn?

## Plagiarism

Take a moment to re-familiarize yourself with the plagiarism policy,
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
for a job.
