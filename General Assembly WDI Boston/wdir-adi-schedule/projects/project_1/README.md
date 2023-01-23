# Project #1: The Game

## Attendance
There are no full day classes during project weeks, but we expect you to be working on your project from at least 10 AM - 6 PM EST during class days and be available during that time for TA hours or any meetings with instructors as needed.  

We also will **still have some attendance checks** during project week, as follows:

  - **Monday**: You're required to show up in the class zoom at 10:00 AM EST to learn how to deploy your project on GitHub Pages
  - **Tuesday**: You're required to show up to Outcomes at 4:30 PM EST 
  - **Friday**: Project presentation day! You're required to be in the class zoom starting at 10:00 AM EST

_Failure to make an attendance check will result in an unexcused absence for both morning and afternoon for that day_.


## Project Details

### &#x1F534; Mandatory To Pass:
#### MVP - Minimum Viable Product

Your game must meet these requirements:

1. Built with HTML, CSS, JavaScript and jQuery (this game will be played using the DOM, not the console)<br>
2. Hosted on github pages<br>
3. Commits to github every day<br>
4. A `README.md` file with explanations of the technologies used, the approach taken, a link to your live site, installation instructions, unsolved problems, etc.

#### Game must have:<br>

  1. **Must be a two player game** (either against the computer or against another player)<br>
        - Example: Blackjack: A player plays against the dealer. The dealer is the computer
        - Example: Connect Four: Two players pass the game between themselves to take turns<br>
        <br>
  2.  **A win state** - a way for the player to win the game<br>
      - High score can be considered a win state
      <br><br>
  3.  **A lose state** - a way for the player to lose the game<br>
      - Example: Blackjack - a player must be able to lose all of their money with losing hands and cannot play if their bankroll is at 0
      - Example: Connect Four - the other player has won or there are no possible plays left<br><br>
   4.  **A way to keep playing if the game is not over**<br><br>
   5.  **Multiple rounds to play** - a round must begin, end, and there must be a way to check if the game should continue or the overall game is won or lost<br>
         - Example: Blackjack: a player takes turns playing a hand versus a computer - the player's hand can either win, lose or tie the dealer. If the player has enough money in their bankroll they can keep playing. A player must be able to win several rounds and increase their bankroll
         - Example: Connect Four: two (non-computer) players take turns adding chips to the board. The game will check if a player won or if the board is full and there are no more plays possible. A player gets four chips in a row (vertically or horizontally)- one person wins, one loses, there are no further plays in this case<br><br>

### &#x1F535; Stretch Goals (Not Mandatory):
#### Recommended Features

- A way to reset the board and play again
- CSS to give your game a personal and fun style
- Responsive mobile design
- Work with your instructor to determine additional stretch goals

## Make A New Repo

:heavy_exclamation_mark: You will be using GitHub, **not** GitHub Enterprise!

:heavy_exclamation_mark: **Do not** begin your project within the class repo. 

:heavy_exclamation_mark: **Do not** clone your project into the class repo. 

1. After your project has been approved, [make a new github repo for your project](https://help.github.com/articles/create-a-repo/). Name your project appropriately.  For example, the name of your game, _not_ 'project 1 wdir'.  

**Use github.io** We'll be hosting this project on github.io and a have a lesson on how to do it. But it is just a couple more easy steps beyond creating a new repo. More info here: https://pages.github.com/

You can also host your github pages with your own domain name. Here is a walktrhough from namecheap, one web hosting service. https://www.namecheap.com/support/knowledgebase/article.aspx/9645/2208/how-do-i-link-my-domain-to-github-pages

2. [Clone your repo onto your machine](https://help.github.com/articles/cloning-a-repository/).  Suggestion _inside_ the `dev` folder _on the same level_ as your WDIR repo.  Note, you do not have to `mkdir` a project folder, cloning will complete that step for you.

AGAIN: Your project will be hosted on GitHub Pages.  More information on hosting will be provided in week 4.  

## Technical Demonstration

All projects will be presented to the class.  Your presentation should:

* Be approximately 5 minutes in length
* Show off all features of the app
* Explain the technical details
* Explain the technical challenges
* Explain which improvements you might make

You will be sharing your game and your code.  Be prepared to answer questions from the instructors and other students.

## Meetings with instructors
_An instructor will contact you to setup a meeting time to approve your project._

**Friday, June 15 (Today!) - Mandatory**<br>
You will meet with an instructor for 15 minutes to get your game idea approved. Be sure to write out what features you will need to build in order to meet MVP and some stretch goal ideas.

## How to Submit Your Project
Your project is due on Friday, June 22 at 10:00 am EST. You will present your project and show your code to classmates and instructors.

:heavy_check_mark: Add your project to [this google sheet](https://docs.google.com/spreadsheets/d/15O_xQUjQSNfyLtHPHbCiuvkgc_Gd1S3S7iSMPEDDnkg/edit?usp=sharing). Note that this will be the order you present your projects!

## Where to go for help during project week
1. Seek out help online
2. Seek out help with your classmates
3. Seek out help with our class TA 

**TA Hours** (all times EST):
- Monday: 1pm-4pm, 7pm-10pm
- Tuesday: 1pm-4pm, 7pm-10pm
- Wednesday: 1pm-4pm, 7pm-10pm
- Thursday: 1pm-4pm, 7pm-10pm

## Suggested Ways to Get Started

* **Wireframe** Make a drawing of what your app will look like in all of the stages of the game (what does it look like as soon as you log on to the site? What does it look like while the player is playing? What does it look like when the player wins / loses?).

* **Break the project down into different components** (data, presentation, views, style, DOM manipulation) and brainstorm each component individually.

* **Commit early, commit often.** Don’t be afraid to break something because you can always go back in time to a previous version.

* **Consult documentation resources** (MDN, jQuery, etc.) at home to better understand what you’ll be getting into.

### Think about...

- **Creativity**  
Did you add a personal spin or creative element into your project submission? Did you deliver something of value to the end user?

- **Code Quality**  
Did you follow code style guidance and best practices covered in class, such as spacing, indentation, modularity, and semantic naming? Did you comment your code as your instructors have in class?

- **Problem Solving**  
Are you able to defend why you implemented your solution in a certain way? Can you demonstrate that you thought through alternative implementations?

## Useful Resources

* **[MDN Javascript Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript)** 
* **[jQuery Docs](http://api.jquery.com)** 
* **[GitHub Pages](https://pages.github.com)** 
* **[Trello](trello.com)** 

<hr>  

## Inspiration - Projects by Previous WDI Students

* [Egghunt](https://j-hha.github.io/egg_hunt/)
* [Blackjack](https://cardosi.github.io/)
* [Connect Four](http://katiezhou.github.io/connectfour.html)
* [Core Defense](https://dnialwill.github.io/project_1/)
* [Snake](https://awdriggs.github.io/snake/)
* [Pan Dulce Connect Four](https://edoorn.github.io/pandulce/)
* [Simon](http://alexandraalday.com/SimonUniverse/)
* [Blackjack](http://aaronlipkin.com/blackjack/)
* [Mastermind](https://neelyre.github.io/project_1/mastermind/)
* [Savage Sailors](https://tg970.github.io/savage_sailors/)
* [Economics the Game](http://www.blakeharris.com/thegame/)
* [Ancient Wizards](https://benpeterswake.github.io/)
* [Trouble in Tribble Town](https://samwhindleton.github.io/trouble-in-tribble-town/)
