# Getting Started

Most importantly, remember to **go slowly and be methodical**. That means you
should be testing your changes in-browser as you write each line or so of code.
Always be commiting. Deploy early and often.

Here's a rough sketch of what you should do and in what order:

### Planning

1.  [ ] Review [game-project-scope-study](https://git.generalassemb.ly/ga-wdi-boston/game-project-scope-study)
1.  [ ] User Stories
1.  [ ] Review [project-planning-wireframes-practice](https://git.generalassemb.ly/ga-wdi-boston/project-planning-wireframes-practice)
1.  [ ] Wire Frames

### Set Up

1.  [ ] [Download Browser Template](https://git.generalassemb.ly/ga-wdi-boston/browser-template)
1.  [ ] Create a Github Repository
----

### Authentication

1. [ ] Review [api-token-auth](https://git.generalassemb.ly/ga-wdi-boston/jquery-ajax-token-auth) and [game API authentication docs](https://git.generalassemb.ly/ga-wdi-boston/game-project-api/blob/master/docs/user.md)
1. [ ] Sign Up
1. [ ] Sign In
1. [ ] Sign Out
1. [ ] All API calls have success and failure messages
1.  [ ] [Deploy to Github Pages](https://git.generalassemb.ly/ga-wdi-boston/gh-pages-deployment-guide)

### Create New Game

1. [ ] Display New Game button when a user signs in
1. [ ] When New Game button is clicked display game board, start player as X, and make [POST games API call](https://git.generalassemb.ly/ga-wdi-boston/game-project-api/blob/master/docs/game.md#create-post-games) to create game
1. [ ] Save the API response so you have access to the game ID and cells
1.  [ ] [Deploy to Github Pages](https://git.generalassemb.ly/ga-wdi-boston/gh-pages-deployment-guide)

### Game UI Round 1

1. [ ] Design a basic game board with HTML/CSS
1. [ ] Add a click handler for when a space on the game board is clicked
1. [ ] When the user clicks on a space, first check that the space is empty
1. [ ] If they choose a valid space, add their token to the HTML/CSS board and the game cells array
1.  [ ] [Deploy to Github Pages](https://git.generalassemb.ly/ga-wdi-boston/gh-pages-deployment-guide)

### Game UI Round 2

1. [ ] Rotate player between X and O
1. [ ] Check for winner on each move
1.  [ ] [Deploy to Github Pages](https://git.generalassemb.ly/ga-wdi-boston/gh-pages-deployment-guide)

### Update Game

1. [ ] Make [PATCH games API call](https://git.generalassemb.ly/ga-wdi-boston/game-project-api/blob/master/docs/game.md#update-patch-gamesid) to update game
1. [ ] Add messaging for the user when the game is over (win or draw)
1. [ ] Do not allow users to add an X or O to any spaces after the game is over
1.  [ ] [Deploy to Github Pages](https://git.generalassemb.ly/ga-wdi-boston/gh-pages-deployment-guide)

### Play Game Again

1. [ ] Update New Game button functionality so it also works to play another game
1.  [ ] [Deploy to Github Pages](https://git.generalassemb.ly/ga-wdi-boston/gh-pages-deployment-guide)

### Final Touches

1. [ ] README
1. [ ] Troubleshoot/Debug
1. [ ] Style
