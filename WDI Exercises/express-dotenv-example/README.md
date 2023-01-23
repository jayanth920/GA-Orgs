# Managing Environment Variables with Express and `dotenv`

This repo holds a small express app that uses the [`dotenv`](https://github.com/motdotla/dotenv) package and the [`ejs templating library`](https://github.com/mde/ejs) to keep keys out of version control and make them accessible directly in HTML.

The project has 3 dependencies, `express`, `ejs`, and `dotenv`.

## Important Parts to Note:

In `index.js`:

```js
const express = require('express')
const app = express() // (1)
require('dotenv').config() // (2)

app.set('view engine', 'ejs') // (3)

app.get('/', (req, res) => {
  res.render('index', { // (4)
    secretKey: process.env.SECRET_KEY // (5)
  })
})

app.listen(3000, () => {
  console.log('listening on port 3000')
})
```

1. Initially, we have the exact same set up as any other express app we've built -- require express invoke the function to create an app instance.
2. This is where we use the `dotenv` package. We require and use it in one line. When the `config` method of the module is called, it finds a file called `.env` in the project's root directory and loads the contents into the environment which will then be accessible in the node app on the object `process.env`. A couple things to note:
    - `dotenv` does not interact with the `express` app directly -- it just puts values in the environment for us (`process.env`) we are responsible for using the environment variables.
   - There is a `.gitignore` file for this project that includes `.env` this way, when we put keys in it, we won't check them into version control. For this example to work, you need to rename `.envexample`, `.env`
3. Because we want access to a variables in our HTML, we need to use a templating engine. I've used `ejs` here but `hbs` would work just as well. Views will need to be put in a `views/` directory
4. We will only have one view (`index.ejs`) if we are making a SPA.
5. We will pass an object as the second argument to the render method with any variables we want to access (just the `SECRET_KEY` from `.envexample` in this case).
6. Finally, in the view we have access to the properties of the object we passed in:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Env Example</title>
  </head>
  <body>
    <p>The secret key is: <%= secretKey %></p>

  </body>
</html>
```

### Related Matters:

- [`dotenv` with `create-react-app`](https://medium.com/@danieljameskay/create-react-app-dotenv-281693a19ecd)
- [`Figaro` gem for similar features in Rails](https://github.com/laserlemon/figaro)
