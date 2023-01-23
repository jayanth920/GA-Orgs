[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

## Instructions

1.  Fork and clone this repository into your `sandbox` directory.
1.  Change into the new directory with `cd jokes-app`.
1.  Install dependencies by typing `npm install`.
1.  Open the directory in VS Code with `code .`.
1.  Back in the Terminal, type `npm run start` to run your development server.
1.  Fulfill the listed requirements.
1.  Make a pull request to submit your work.

Make a pull request by the end of the lab block for your assignment to be
considered complete.

# Random Jokes App

The [Jokes API](https://github.com/15Dkatz/official_joke_api) includes an
endpoint for
[getting a random joke](https://official-joke-api.appspot.com/random_joke). Your
task is to build an app using React that displays a random joke from the API
with the push of a button!

## Prerequisites

- React and React Components
- State and Props
- The Component Lifecycle Methods
- Working with an API

## Requirements

Your application should make a random joke appear when the app loads.

It should also display a large button that, when clicked, fetches a random joke
from the jokes API and displays it to the user. Make it look as close to the
image provided below.

![Dad Jokes app mock](./assets/dad-jokes.png)

## Bonus

Build a queue that stores the 10 most recently retrieved jokes! Additionally,
add some buttons that let you scroll back and forth through the queue.

You should have:

- One button to get a new joke (append to queue). If there are >10 jokes in the
  queue, drop the oldest one.
- One button to advance to the next joke.
- One button to move to the previous joke.

## [License](LICENSE)

1.  All content is licensed under a CC­BY­NC­SA 4.0 license.
1.  All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
