[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# React Static Components

![React Dashboard mockup](https://media.git.generalassemb.ly/user/17300/files/4a24d580-ae40-11eb-966b-75de62388298)

Use React to recreate this mockup.

## Getting Started

- Breakdown the UI into components.  Consider what parts of the UI are _reusable_.
- Decide on the mark up that you'd like to generate.

## Set Up

1. Change into your homework folder with `cd ~/sei/homework`.
1. Fork and clone this repository with `git clone <paste ssh url>`.
1. Change into the new directory with `cd static-dashboard`.
1. Confirm that you're actually in you're in your `static-dashboard` directory and then run `npx create-react-app .` ... **NOTE THE PERIOD AT THE END!!!**
1. After it finishes installing, you should see the message that reads `Happy hacking!`. Once you're back at the prompt, type `code .` to open up the project in VS Code.
1. Run `npm start` to launch the React development server and open your application in the browser at `localhost:3000`. 

## Requirements

- Build out the above wireframe in React components. 
- Focus on getting the components to render the different content first. How you compose your components and (if you) pass data around is up to you! 
- After you get your content to render, add some styles to your site! Your application doesn't have to look exactly like the one shown. Submit a PR when you're done.
- Your React app must compile (i.e., it must run in the browser). If there are errors you can't solve, comment out the error and leave a note explaining what you were trying to do.

Unless otherwise stated, assignments are due by 10 am ET the next class day. 

**Hints**:

- The "Products" and "Industry" tabs do not need to be clickable. 
- You can hardcode the data for the team member cards and make your components static, or if you're ready for a more dynamic approach, copy the data object below into your application. You can then map over the data object shared below and return card components with the appropriate props. 

```js
const salesData = [
  {
    name: 'Jack Mars',
    handle: '@jack', 
    initials: 'JM',
    trend: '3%',
    increasing: true,
    numOfSales: 68
  },
  {
    name: 'Irfan Veci',
    handle: '@veci', 
    initials: 'IV',
    trend: '63%',
    increasing: false,
    numOfSales: 12
  },
  {
    name: 'Ling Lee',
    handle: '@llee', 
    initials: 'LL',
    trend: '11%',
    increasing: true,
    numOfSales: 29
  },
  {
    name: 'Juan Bene',
    handle: '@juanb', 
    initials: 'JB',
    trend: '5%',
    increasing: true,
    numOfSales: 45
  },
  {
    name: 'Leona Curtis',
    handle: '@lecu', 
    initials: 'LC',
    trend: '4%',
    increasing: false,
    numOfSales: 50
  },
]
```

## License

1.  All content is licensed under a CC­BY­NC­SA 4.0 license.
1.  All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
