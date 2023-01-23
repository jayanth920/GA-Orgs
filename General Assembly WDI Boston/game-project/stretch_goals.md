# Polish

Polishing up your project is not only fun, but important! Employers look at
**a lot** of portfolios while searching for the perfect applicant. You want
your projects to stand out from the crowd!

> **Important:** Do not work on any stretch goals until you have completed
> _all MVP requirements,_ including documentation and deployment, and have
> shared your project with the cohort for feedback.

Even polishing up an application requires scoping what you want to do into
reasonable chunks and levels.

Below, we have two polish levels, each increasingly polished. Meeting these
requirements will help your project look better and give you more practice
on the concepts we've learned so far.

- [Black Diamond Level](#black-diamond-level-requirements)
- [Double Black Diamond Level](#double-black-diamond-level-requirements)

> Note: There's a [`stretch_readme.md`](stretch_readme.md) in this repository
> for your reference. It covers all stretch documentation goals reach both levels.

----

## Black Diamond Level Requirements

### Documentation

1. [ ] README.md must include a [list of technologies used](stretch_readme.md#technologies-used)
1. [ ] README.md must include your [planning and a story about your development process and problem-solving strategy](stretch_readme.md#planning-story).
1. [ ] README.md must include [unsolved problems](stretch_readme.md#unsolved-problems) which would be fixed in future iterations.

### Application Requirements

1. [ ] Utilize CSS/Sass/Bootstrap to completely style your application.
1. [ ] Signed in user must be able to change password
1. [ ] Signed in user must be able to view number of games played
2. [ ] Display messaging when the user:
    - [ ] tries to click on an occupied spot on the board during a game
    - [ ] tries to click on the board after game is over
    - [ ] starts a new game successfully (or unsuccessfully)

### API Requirements

1. [ ] View number of games played [GET /games](https://git.generalassemb.ly/ga-wdi-boston/game-project-api/blob/master/docs/game.md#index)
1. [ ] Change password [PATCH /change-password](https://git.generalassemb.ly/ga-wdi-boston/game-project-api/blob/master/docs/user.md#changepw)

### Professional Requirements

1. [ ] **Do not** use browser alerts or prompts.
1. [ ] **Do not** display console logs, errors or warnings in the console.

----

## Double Black Diamond Level

### Documentation Requirements

1. [ ] Pin your repository on GitHub as a [Pinned Repository](https://docs.github.com/en/github/setting-up-and-managing-your-github-profile/pinning-items-to-your-profile)
1. [ ] Complete the repository `Description` field and `Website` field with a meaningful sentence description of the application and link to the live URL
![github image](https://media.git.generalassemb.ly/user/16103/files/5bce9280-8e29-11eb-8c2a-a48e7cbcea3d)
2. [ ] README.md must include [an embedded screenshot](stretch_readme.md#screenshot) of the deployed app
3. [ ] README.md must include [setup steps](stretch_readme.md#setup-steps) for running application locally

### Application Requirements

1. [ ] Ensure your game is responsive, and can be played on mobile phone, tablet, and desktop size screens.
2. [ ] Select **one** of the following requirements to tackle for this level.
    - [ ] **View Previous Games**
        - User can view their previous game boards.
        - Note: utilize the `GET /games` end point
    - [ ] **Finish Incomplete Games**
        - User can continue their unfinished games.
        - Note: Utilize the `GET /games` end point
    - [ ] **Custom Tokens**
        - User can play as something other than X or O
        - Note: The API will still expect `x` and `o` data
    - [ ] **Play Against Computer**
        - User has option to play against a computer.
        - Note: The computer will still need to update the API
    - [ ] **Automatic Sign In**
        - User should be signed in automatically after signing up successfully.
        - Note: leverage your promise chain and combining API calls
    - [ ] **Stay Signed In**
        - Read up on `localStorage` and implement the user to optionally stay signed in on page refresh
        - Note: The `localStorage-study`
