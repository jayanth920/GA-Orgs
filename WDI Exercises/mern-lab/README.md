# MERN Lab

## [PLAGIARISM POLICY](https://git.generalassemb.ly/DC-WDI/WDI20/blob/master/plagiarism.md)


## Prompt

Today you will be refactoring your project 2 into a MERN application. Bye-bye handle bars, hello React! You will need to convert your existing project 2 to an API serving JSON rather than handlebars views. Then, you will create a **separate** repo for the front-end react app that will call your express-mongoose API.

**Before getting started** create a new branch on your project 2 repo.
> Working on a separate branch is best practice when refactoring code or adding new features. It's a safety measure to prevent breaking existing code in the process of changing it. We wouldn't want to destroy our working project 2s before the React refactor is ready.

```bash
$ git checkout -b <your-branch-here>
```

## Requirements

### React app requirements

- [ ] A React app is present
- [ ] React app has at least two components.
- [ ] React repo is organized and files are semantically named
- [ ] React app makes API calls to the back-end application in `componentDidMount()`
- [ ] CSS styling is present
- [ ] React app has create and read functionality on at least one model

### Express app requirements

- [ ] Express app responds with JSON
- [ ] CORS policy allows React app to make requests

### Bonus

- Use react router for views
- Deploy your front-end to github pages and update your back-end Heroku app.
> Check out the [Create-React-App docs](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md) for help deploying to github pages.

## Getting Started

Before you start coding, do some planning and map out a game plan.  What elements of your existing app will be moved to React and what elements will stay? Consider the existing interface of your app. Are there parts you want to change? Do a quick paper sketch to map out your React components.

We do not expect you to be able to build out an entire full stack app from memory.  You will have errors, hit walls, but you will climb them!  Make use of `console.log`.  Google your errors.  Make use of the tools you have.  Make use of each other!  You have assignments and exercises you can reference, as well as the GA lessons. Check out the [APIs and Microservices lesson](https://git.generalassemb.ly/ga-wdi-lessons/express-apis-microservices) for help with CORS, body-parser, and serving JSON data. **Take it one step at a time.** If all else fails, check out the solution branch on this repo for a hint.

Here is a basic guide to get you going...

- Start with express and get your server running.  Make sure you can visit a route and get a response
- Modify your controller/routes to serve JSON (use `res.json`)
- Use Postman to test your routes.  Make sure you can send/receive data, post, delete, etc (Don't forget `cors` and `body-parser`!)
- Make sure JSON is showing up in your browser.  It is??  Great!  Now onto React :)
- Start small with React.  Get your index page up and running, using axios to make an API request to your back-end and get that data in your browser.
- Work out one CRUD feature at a time.  Delete or Post are probably a little bit easier than Update.
- If you've made it this far, you are doing awesome!  Keep it up!
- Now try the Bonuses!

## Lab Submission

Please submit an issue to this repo by the time indicated on the course schedule with the following:

- A link to your lab repo/repos
- If you have one, a link to your deployed application
