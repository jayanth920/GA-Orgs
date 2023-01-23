# Intro to Development Environments

## Lesson Objectives

  - Set up a development environment from scratch
  - Write basic automated and build tasks with npm scripts
  - Use `.editorconfig` to enforce editor configuration
  - Introduction to webpack's large feature set
  - Define loaders in webpack
  - Configure Babel to transpile our code using a webpack loader
  - Use localtunnel to share code

## Framing (10 min, 0:10)

Up until now, we've been using the `create-react-app` npm module to build our React applications. We've alluded to the fact that `create-react-app` has a ton of dependencies, but haven't explained in depth what they are and how they work together to provide us with a partial development environment that makes it easier to write React applications. Today we're going to dive in and explore some of the major dependencies used by `create-react-app` while we create a customized development environment.

We're also going to go beyond just exploring these dependencies by creating our own development environment. In the same way that a carpenter has a wood shop or at least a workbench, a developer works in a development environment. A development environment bundles together a set of tools useful to the developer. These tools make it easier to get started working on a project, to test code, share and publish code, automate repetitive tasks, standardize stylistic and coding practices, enforce consistency, and much more.

Development environments also codify opinions about how development is done. A developer's individual preferences are reflected in their everyday practices. The goal of a development environment is to codify these preferences and standardize the development process. Why is this desirable? One major advantage is that it can reduce dramatically decision fatigue. We are inundated with choices as consumers and developers, however sometimes having too many choices feels like a limitation in that it can hinder us from actual development. A well-designed development environment takes this pressure off of us as developers, and help us avoid repetitive, time-sucking decisions that could undermine our focus and work's purpose.

## Set-up (5 min, 0:15)

We're each going to build our own development environments today. Head on over to GitHub and create a new repository for your development environment. You may name it as you see fit, but could call it `dev-environment`, for example. Then clone down this newly created empty repository.

<!-- TODO: npm init -->

## EditorConfig (15 min, 0:30)

> - [Editorconfig for VSCode](https://github.com/editorconfig/editorconfig-vscode)
> - [Editorconfig for Atom](https://atom.io/packages/editorconfig)
> - [Editorconfig for SublimeText](https://github.com/sindresorhus/editorconfig-sublime)

EditorConfig aims to ensure consistency across development environments.

EditorConfig is a layer of abstraction over your text editor's or IDE's configuration or text-editing settings. A file named  `.editorconfig` will be read by your editor's EditorConfig plugin, and will override your text editor settings based on the contents of rules inside of `.editorconfig`.

It's a way of enforcing a consistent code-style across different development environments and editors. Say a team of developers, each with his or her own individual preferences about a choice of text editor, are working on a project. Each developer's environment has the ability to introduce inconsistencies or has configuration that could lead to deviating from the team's defined best practices. EditorConfig solves this issue by adding in this layer of abstraction over text editors. A project that includes an `.editorconfig` file can communicate with a EditorConfig-enabled text-editor to enforce that project's style.

### Documentation Dive

Head over to http://editorconfig.org/ and spend 3 minutes looking over the Supported Properties section. Be ready to discuss the meaning of each.

```sh
 $ npm install -g editorconfig
 $ touch .editorconfig
 $ code .
```

```
# editorconfig.org
root = true

[*]
indent_style = space
indent_size = 2
end_of_line = lf
charset = utf-8
trim_trailing_whitespace = true
insert_final_newline = true
max_line_length = 80

[*.md]
trim_trailing_whitespace = true
```

> - [indent_style](https://github.com/editorconfig/editorconfig/wiki/EditorConfig-Properties#indent_style)
> - [indent_size](https://github.com/editorconfig/editorconfig/wiki/EditorConfig-Properties#indent_size)
> - [max_line_length](https://github.com/editorconfig/editorconfig/wiki/EditorConfig-Properties#max_line_length)

> *[Full list of .editorconfig Properties](https://github.com/editorconfig/editorconfig/wiki/EditorConfig-Properties)*

`insert_final_newline` is important for ensuring `git` functions properly. This final newline needs to be present in order for `git` to properly parse files, and establish diffs between commits. Files [ending with a newline is actually part of the POSIX standard](https://robots.thoughtbot.com/no-newline-at-end-of-file#history-lesson).

This `.editorconfig` file has a few definite opinions: that we should use spaces, and not tabs, that an indentation is 2 rather than 4 (or worse yet, 8) spaces, and that there should not be any trailing whitespace preceding a newline. This will help us to have our code have more consistent formatting and appearance.

## Node Security Platform (5 min, 0:35)

Node Security Platform offers some services and tools for running and automating security/vulnerability checks. In the age of unsecured internet devices and the absolute ubiquity of JavaScript, this

`nsp` is an npm package that will check the dependencies stated in `package.json` for any known security vulnerabilities.

### You Do: Audit Your Project 3 for Security Vulnerabilities

`$ npm i -g nsp`

After installing the `nsp` npm module globally, open a new tab in your CLI. In the new tab, navigate to your last project on your local machine. If you don't have it locally, clone it down. `cd` into the project's directory, and check the `package.json` file by running `nsp`.

## Development Server (15min 0:50)

We don't yet have a `package.json` file in our development environment, so let's create one by running `npm init -y` in the CLI.

## BrowserSync

BrowserSync serves an application on a dedicated IP address accessible from your LAN. You can connect multiple devices to the same network and access an application at this dedicated IP. This is extremely useful for testing an application out on multiple devices, ***simultaneously***. Not only that, but your application is ***synchronized*** across these devices. Each time an action takes place, the application is synchronized across all devices. If you are developing for multiple devices, BrowserSync is an ideal tool that saves a great deal of time and friction with developing applications for any combination of mobile, tablets, laptops, and desktop computers. You could place all these devices on your desktop and test out your application on all of them simultaneously!

We're not going to use BrowserSync today, but its features are definitely worthy of a mention.

## Express

Express is suitable for the production environment as well as in a development environment. This reduces the amount of changes you will have to account for when deploying a production app, since you will simply use the same server framework in both environments.

Next let's install express and a couple other dependencies. Manually add this to your `package.json`, right above `dependencies: {}`...

```json
  "devDependencies": {
    "express": "4.14.0",
    "open": "0.0.5"
  },
```

Your `package.json` should look like this now...

```json
{
  "name": "test-dev-env",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "express": "4.14.0",
    "open": "0.0.5"
  },
  "dependencies": {},
  "description": ""
}
```


Next, let's install the packages we've just added...

```sh
 $ npm i
```

After the installation has completed, let's create some new folders and a file. You should be in the root of your dev-environment directory.

```sh
 $ mkdir scripts
 $ mkdir scripts/build
 $ touch scripts/build/srcServer.js
 $ mkdir src
 $ touch src/index.html
 $ code .
```

After opening atom in the current directory, let's write our basic express code. In `scripts/build/srcServer.js`...

```js
const express = require('express')
const path    = require('path')
const open    = require('open')

const PORT    = 3339
const app     = express()

app.get('/', (req, res)=>{
  res.sendFile(path.join(__dirname, '../../src/index.html'))
})

app.listen(PORT, err => {
  if (err) {
    console.error(err)
  } else {
    open(`http://localhost:${PORT}`)
  }
})
```

Next, we'll add boilerplate to our `index.html` file.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Indexy</title>
</head>
<body>
  <h1>¡Hello Work!</h1>
</body>
</html>
```

Finally, let's test out our code with `node scripts/build/srcServer.js`.

## Break (10 min, 1:00)

### Sharing & Publishing Work (10min, 1:10)

**Localtunnel** is a way you can show other people what you are working on. It opens a hole in your machine's firewall at a specific port, where you are running your application. Localtunnel then by default generates a randomized URL anyone can access, like `aosuhfsajkbck3kubd.localtunnel.me`. You can also request a namespace for the localtunnel subdomain, which are made available on a first come, first serve basis.

Another more secure alternative, **ngrok**, has features similar to **localtunnel** but adds secure logins to restrict access.

**Surge** is suited to deploying static HMTL, JavaScript, and CSS. Surge is great for deploying built React apps made with `create-react-app`. You can run the `npm build` script which will produce a `build/` folder which you can then serve with the command `surge build/`, once you've installed `surge` npm package. The first time you run Surge, it will ask you for an email and to choose a password to create your account.

First, we're going to install localtunnel and see a couple of its primary features firsthand.

### You Do: Share your page with localtunnel

```sh
 $ npm i -g localtunnel
```

If you've stopped your webserver, rerun it with `node scripts/build/srcServer.js`. Open a new tab in your CLI.

```sh
$ lt --port 3339
your url is: https://nctfxkdmvw.localtunnel.me
```

Next, navigate to the URL in outputted in your terminal.

## Automation with npm scripts (20 min, 1:30)

Automation, when done right, not only frees developers from manually doing repetitive tasks, but ensures consistency with builds and usage of tooling.

We're going to look at another way to use the `nsp` and `localtunnel` dependencies by automating their usage, and bundling them with our project, rather than relying on a global installation on our machines.

### "start" script

By convention, node projects have a `start` script that will launch the project. We're used to this with `create-react-app`. Now, when we run `npm start` from the command line, our project will launch, just like we do with `create-react-app` projects.

```json
{
  "name": "test-dev-env",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "start": "node scripts/build/srcServer.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "express": "4.14.0",
    "open": "0.0.5"
  },
  "dependencies": {},
  "description": ""
}
```

You can also use `npm run start` to call the `start` script, but it the `run` keyword is not necessary. This is only true for scripts named `start` and `test`, otherwise the `run` keyword must be used. Now, we have defined a repeatable script that launches our project in the browser, and with fewer keystrokes!

#### Hooks: Startup message ('pre' hook)

A 'pre' hook is a script that will run before some other script. The convention with npm scripts is that any script beginning with 'pre' will run before its counterpart. For example, if we add a `"prestart"` script, that script will always run before our `"start"` script.

We want to write our startup message script as a pre-hook to our start script, to indicate that our project is in the process of being launched.

Next, let's add a new dependency, `chalk`. We can use this dependency to output a start-up message with colorful text in the CLI where our node app is running.

```diff
{
  "name": "test-dev-env",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "start": "node scripts/build/srcServer.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "express": "4.14.0",
    "open": "0.0.5",
+   "chalk": "1.1.3"
  },
  "dependencies": {},
  "description": ""
}
```

```sh
 $ npm i
```

Next, let's create a new file called `startMessage.js` inside of `scripts/build`.

```sh
 $ touch scripts/build/startupMessage.js
```

In this file, we'll add...

```js
const chalk = require('chalk')
const startupMessage = chalk.green(`Starting up in development mode on port 3339!`)

console.log(startupMessage)
```

Back in package.json, we'll add a new script...

```diff
{
  "name": "test-dev-env",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
+   "prestart": "node scripts/build/startupMessage.js",
    "start": "node scripts/build/srcServer.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "express": "4.14.0",
    "open": "0.0.5",
    "chalk": "1.1.3"
  },
  "dependencies": {},
  "description": ""
}
```

Now, close down your server if it is still runnning, then run `npm start`. You should see your new startup message show up on the screen.

#### Automating Security Checks

Back in `package.json`...

```diff
{
  "name": "test-dev-env",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "start": "node scripts/build/srcServer.js",
    "prestart": "node scripts/build/startupMessage.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "express": "4.14.0",
    "open": "0.0.5",
    "chalk": "1.1.3",
+   "nsp": "2.6.2"
  },
  "dependencies": {},
  "description": ""
}
```

Then install...

```sh
 $ npm i
```

We've now bundled the `nsp` dependency into `package.json` meaning that we won't have to rely on the assumption that the machine on which our script is running must have `nsp` installed globally. We've now encapsulated `nsp` in our development environment node project.

Next, let's a add a new script to perform the security check...

```diff
{
  "name": "test-dev-env",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "start": "node scripts/build/srcServer.js",
    "prestart": "node scripts/build/startupMessage.js",
+   "check-security": "nsp check"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "express": "4.14.0",
    "open": "0.0.5",
    "chalk": "1.1.3",
    "nsp": "2.6.2"
  },
  "dependencies": {},
  "description": ""
}
```

Next, let's run our new script.

```sh
 $ npm run check-security
```

That should produce some output like this...

```sh
> nsp check

(+) No known vulnerabilities found
```

#### Automate Code-Sharing

Next, let's add `localtunnel` to our project dependencies, so we don't have to rely on a global installation of `localtunnel`, and then add a new script for sharing our work via localtunnel...

```diff
{
  "name": "test-dev-env",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "start": "node scripts/build/srcServer.js",
    "prestart": "node scripts/build/startupMessage.js",
    "check-security": "nsp check",
+   "share": "lt --port 3339"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "express": "4.14.0",
    "open": "0.0.5",
    "chalk": "1.1.3",
    "nsp": "2.6.2",
+   "localtunnel": "1.8.1"
  },
  "dependencies": {},
  "description": ""
}
```

> *Note: Since we have `nsp` and `localtunnel` installed globally, we technically don't have to run npm install in order for these scripts to work.*

Let's test our new script...

```sh
 $ npm run share
```

#### Concurrency in Automation

There are often times when developers will run to run multiple scripts at the same time, or **in parallel** or **concurrently**. An npm package called `npm-run-all` will allow us to do just this. Let's add it to our project's dependencies...

```diff
{
  "name": "test-dev-env",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "start": "node scripts/build/srcServer.js",
    "prestart": "node scripts/build/startupMessage.js",
    "check-security": "nsp check",
    "share": "lt --port 3339"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "express": "4.14.0",
    "open": "0.0.5",
    "chalk": "1.1.3",
    "nsp": "2.6.2",
    "localtunnel": "1.8.1",
+   "npm-run-all": "3.1.1"
  },
  "dependencies": {},
  "description": ""
}
```

Then install...

```sh
 $ npm i
```

Now, let's make some modifications to our npm scripts...

```diff
{
  "name": "test-dev-env",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "prestart": "node scripts/build/startupMessage.js",
-   "start": "node scripts/build/srcServer.js",
+   "start": "npm-run-all --parallel check-security serve:src",
+   "serve:src": "node scripts/build/srcServer.js",
    "check-security": "nsp check",
    "share": "lt --port 3339"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "express": "4.14.0",
    "open": "0.0.5",
    "chalk": "1.1.3",
    "nsp": "2.6.2",
    "localtunnel": "1.8.1",
    "npm-run-all": "3.1.1"
  },
  "dependencies": {},
  "description": ""
}
```

We renamed the original start up script to keep our `npm start` clean and readable. Since we're writing high-level parts of the functionality of our scripts in JSON values, this is an important practice so that our `package.json` is readable and easier to maintain.

Let's test out our script now! We should get a combination of the outputs we saw previously.

#### Automated Code Sharing

Let's make more use of our newfound ability to run scripts in parallel. Next, we'll automate the startup and sharing of our application. First, we'll rename our `"share"` script to `"localtunnel"`, and create a new share script which starts up our application and shares it automatically via localtunnel.


```diff
  "name": "test-dev-env",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "prestart": "node scripts/build/startupMessage.js",
    "start": "npm-run-all --parallel check-security serve:src",
    "serve:src": "node scripts/build/srcServer.js",
    "check-security": "nsp check",
+   "localtunnel": "lt --port 3339",
-    "share": "lt --port 3339"
+   "share": "npm-run-all --parallel start localtunnel"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "express": "4.14.0",
    "open": "0.0.5",
    "chalk": "1.1.3",
    "nsp": "2.6.2",
    "localtunnel": "1.8.1",
    "npm-run-all": "3.1.1"
  },
  "dependencies": {},
  "description": ""
}
```

Let's now test this with...

```sh
 $ npm run share
```

After having done this setup, we can share our and check our code with a single command. Notice here that we are composing scripts in the same way we might compose functions or components, building larger scripts of smaller parts.

## Transpilation with Babel (20 min, 1:50)

The reason we have been able to use the `import` syntax and many other features not yet standardized in javascript is due to Babel. However, we were probably unaware of its existence since we have been using the `create-react-app` dependency, which has Babel bundled within it. Babel has also has special functionality through integrations with a dependency called Webpack that enables us to write JSX or React. Babel and/or webpack then transpiles our JSX, converting it into JavaScript.

### Babel Plugins

Babel can also be used to bring in experimental features not yet incorporated into the standard language. This is accomplished through the inclusion of Babel plugins specific to an experimental feature, or set thereof. To get a better understanding of this, let's head over to the [documentation for Babel plugins](http://babeljs.io/docs/plugins).

#### You Do: Doc Dive (5 min)

Spend a few moments reading through the plugin documentation. Focus in particular on these 2 questions: What are the 5 stages of feature proposal in JavaScript? What babel plugins contain terms familiar to you?

### Installing Babel Dependencies

```diff
{
  "name": "test-dev-env",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "prestart": "node scripts/build/startupMessage.js",
    "start": "npm-run-all --parallel check-security serve:src",
    "serve:src": "node scripts/build/srcServer.js",
    "check-security": "nsp check",
    "localtunnel": "lt --port 3339",
    "share": "npm-run-all --parallel start localtunnel"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
+   "babel-cli": "6.16.0",
+   "babel-core": "6.17.0",
+   "babel-loader": "6.2.5",
+   "babel-preset-latest": "6.16.0",
+   "babel-register": "6.16.3",
    "express": "4.14.0",
    "open": "0.0.5",
    "chalk": "1.1.3",
    "nsp": "2.6.2",
    "localtunnel": "1.8.1",
    "npm-run-all": "3.1.1"
  },
  "dependencies": {},
  "description": ""
}
```

```sh
 $ npm i
```

### Configuring Babel

Babel can be configured in a couple different ways. We can add it's configuration to `package.json`, or a file named `.babelrc`, located in the root of the directory, as a neighbor to `package.json`. We might prefer to use `package.json` to limit how many files we have, but we also might opt to have a `.babelrc` file for configuring Babel so our `package.json` doesn't have too much configuration in it, as well. We're going to opt for the `.babelrc` file in this class to keep `package.json` from being too busy, but if we did want to add our config to `package.json` it would look like this...

```json
{
  //...rest of package.json above
  "babel": {
    "presets": [
      "latest"
    ]
  }
  //..rest of package.json below
}
```

Instead, we'll create a `.babelrc` containing that same information. Make sure you run this command in the root of your project directory...

```sh
 $ touch .babelrc
```

Next, we'll add this configuration information to `.babelrc`.

```json
{
  "presets": [
    "latest"
  ]
}
```

### Transpiling Our Scripts

So now that we've configured Babel, let's make use of the `import` functionality that we wouldn't normally have access to. All of scripts right now are using node's CommonJS `require` pattern. Let's convert our `startupMessage.js` to use `import` instead of `require`.

```js
// const chalk = require('chalk')
import chalk from 'chalk'

const startupMessage = chalk.green(`Starting up in development mode on port 3339`)

console.log(startupMessage)
```

Next, we're going to have to update our npm-script to use `babel-node` instead of `node`. The command `babel-node` comes from the `babel-core` dependency that we installed a few minutes ago.

```diff
{
  "name": "test-dev-env",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
-   "prestart": "node scripts/build/startupMessage.js",
+   "prestart": "babel-node scripts/build/startupMessage.js",
    "start": "npm-run-all --parallel check-security serve:src",
    "serve:src": "node scripts/build/srcServer.js",
    "check-security": "nsp check",
    "localtunnel": "lt --port 3339",
    "share": "npm-run-all --parallel start localtunnel"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "babel-cli": "6.16.0",
    "babel-core": "6.17.0",
    "babel-loader": "6.2.5",
    "babel-preset-latest": "6.16.0",
    "babel-register": "6.16.3",
    "express": "4.14.0",
    "open": "0.0.5",
    "chalk": "1.1.3",
    "nsp": "2.6.2",
    "localtunnel": "1.8.1",
    "npm-run-all": "3.1.1"
  },
  "dependencies": {},
  "description": ""
}
```

Now let's test our changes by running `npm start`.

#### You Do: Convert srcServer.js to use Import

Convert all the `require` statements to `import` statements. Next, convert your `"serve:src"` script.

## Break (10 min, 2:00)

## Bundling with Webpack (30 min, 2:30)

Webpack is a very powerful tool that can transform code via preprocessing and bundle our code. We can transform code (or do things like import CSS) via webpack **loaders**, each of which handle different tasks. Webpack can also perform automated tasks. Bundling is a very powerful feature where we can configure webpack to package our code in different ways for different settings or deployments. Today, we're going to use webpack to bundle our modularized code into a single file.

### Install Webpack Dependencies

```diff
{
  "name": "test-dev-env",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "prestart": "babel-node scripts/build/startupMessage.js",
    "start": "npm-run-all --parallel check-security serve:src",
    "serve:src": "node scripts/build/srcServer.js",
    "check-security": "nsp check",
    "localtunnel": "lt --port 3339",
    "share": "npm-run-all --parallel start localtunnel"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "babel-cli": "6.16.0",
    "babel-core": "6.17.0",
    "babel-loader": "6.2.5",
    "babel-preset-latest": "6.16.0",
    "babel-register": "6.16.3",
    "express": "4.14.0",
    "open": "0.0.5",
    "chalk": "1.1.3",
    "nsp": "2.6.2",
    "localtunnel": "1.8.1",
    "npm-run-all": "3.1.1",
+   "style-loader": "0.13.1",
+   "css-loader": "0.25.0",
+   "webpack": "1.13.2",
+   "webpack-dev-middleware": "1.8.4",
+   "webpack-hot-middleware": "2.13.0",
+   "webpack-md5-hash": "0.0.5"
  },
  "dependencies": {},
  "description": ""
}
```

```sh
 $ npm i
```

### Configuring Webpack

At the root of your project directory...

```sh
 $ touch webpack.config.dev.js
```

Next, we'll add in a lot of webpack configuration to the file we've just created...

```js
import path from 'path'

export default {
  debug: true,
  devtool: 'inline-source-map',
  noInfo: false,
  entry: [
    path.resolve(__dirname, 'src/index')
  ],
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'src'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [],
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loaders: ['babel'] },
      { test: /\.css$/, loaders: ['style', 'css'] }
    ]
  }
}
```

We're defining what loaders webpack will use to transform our code at the bottom. The `style` and `css` loaders are for importing CSS into NodeJS files, while the `babel` loader is used to transpile our code.

We're also specifying the target for our build, which determines how the code is bundled, the entry point for our application `index.js`, which we have yet to create, and the location and name of the output file, `bundle.js`.

Source maps link our original code to the bundled code. Our code implementation changes a fair amount when it becomes bundled by webpack, especially when factoring changes occurring due to transpilation via Babel. We need this link between our original code and the bundled code so we can get useful errors back, instead of on line 872 of `bundle.js`.

Here, webpack is not actually writing to the disk; instead it is 'proxying' the file's location for the browser.

### Configuring Express

Next, we're going use our webpack middleware in our express app.

```js
import express from 'express'
import path from 'path'
import open from 'open'
import webpack from 'webpack'
import webpackConfig from '../../webpack.config.dev'
import webpackDevMiddleWare from 'webpack-dev-middleware'

const PORT = 3339
const app = express()

const compiler = webpack(webpackConfig)
const compilerConfig = {
  noInfo: true,
  publicPath: webpackConfig.output.publicPath
}
const wpMiddlewareWrapper = webpackDevMiddleWare(compiler, compilerConfig)
app.use(wpMiddlewareWrapper)


app.get('/', (req, res)=>{
  res.sendFile(path.join(__dirname, '../../src/index.html'))
})

app.listen(PORT, err => {
  if (err) {
    console.error(err)
  } else {
    open(`http://localhost:${PORT}`)
  }
})
```

### Creating the Entry Point

Next, we'll create the application entry point in index.js.

```sh
 $ touch src/index.js
```

Add a simple `console.log()` here. Finally, let's link our bundle in `index.html`.

### Linking the Bundle

Now, let's add a `<script>` tag to the bottom of the body to link our bundle.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Indexy</title>
</head>
<body>
  <h1>¡Hello Work!</h1>
  <script src="bundle.js"></script>
</body>
</html>
```

### Importing CSS

Next let's create a new file, `index.css` inside `src`.

```sh
 $ touch src/index.css
```

```css
body {
  font-family: Courier New, Courier, monospace;
  background: rebeccapurple;
  color: papayawhip;
}
```

Then in `index.js`, add the following to the top...

```js
import './index.css'
```

## Closing
