#Express Generator

##What is it?
Express generator, known to `npm` as `express-generator`, is something that
will save you more time and typing than you can measure when starting an
express back-end.

##Install it
Like most node packages, we will be installing `express-generator` with `npm`.

Take note of the shell prompts. For Mac, you will be able to globally install
this package with your ordinary account. For Linux, you will need superuser
privileges. Prefix the command with `sudo` or otherwise assume a superuser
(`root`) role before running it.

###Mac OS X
```bash
$ npm install -g express-generator
```

###Linux
```bash
# npm install -g express-generator
```

###Verify install
Run this command to verify that `express-generator` has been successfully
installed:

```bash
$ express -h
```

If successful, you should see this output:

	Usage: express [options] [dir]

	Options:

		-h, --help          output usage information
		-V, --version       output the version number
		-e, --ejs           add ejs engine support (defaults to jade)
			--hbs           add handlebars engine support
		-H, --hogan         add hogan.js engine support
		-c, --css <engine>  add stylesheet <engine> support (less|stylus|compass|sass) (defaults to plain css)
			--git           add .gitignore
		-f, --force         force on non-empty directory

##Use it
For this lesson, we will be running `express` right in this repo's directory.
We want it to use Handlebars for view rendering, since that's what we're
familiar with, so we use the `--hbs` flag. Finally, we specify `.` for the
directory to create files in. It will ask us to confirm since this is a
non-empty directory.

```bash
$ express --hbs .
```

Now, having run that, take a look around at what `express` has generated
for us:

```bash
$ ls -l
```

You should see a directory listing that resembles this:

	-rw-rw-r-- 1 saad saad 1441 Aug 13 12:13 app.js
	drwxr-xr-x 2 saad saad 4096 Aug 13 12:13 bin
	-rw-rw-r-- 1 saad saad  339 Aug 13 12:13 package.json
	drwxr-xr-x 5 saad saad 4096 Aug 13 12:13 public
	-rw-rw-r-- 1 saad saad 1425 Aug 13 12:07 README.md
	drwxr-xr-x 2 saad saad 4096 Aug 13 12:13 routes
	drwxr-xr-x 2 saad saad 4096 Aug 13 12:13 views

##Files
###package.json
This is the `npm` package file for your application. It contains various
metadata, most importantly dependencies and development-only dependencies.
Have a look at its contents by opening it up in Sublime or by running the
following command:

```bash
$ less package.json
```

You should see something like this:

```json
{
  "name": "node-express-generator",
  "version": "0.0.0",
  "private": true,
  "scripts": {
    "start": "node ./bin/www"
  },
  "dependencies": {
    "body-parser": "~1.13.2",
    "cookie-parser": "~1.3.5",
    "debug": "~2.2.0",
    "express": "~4.13.1",
    "hbs": "~3.1.0",
    "morgan": "~1.6.1",
    "serve-favicon": "~2.3.0"
  }
}
```

###app.js
This file sets up and configues your `app`, the result of the `express` factory
function (not to be confused with the command-line program). This is the core
of our application. It wraps around an instance `http.Server` and provides
a rich interface for us to build our back-end.

Since the goal of `express`, the web back-end framework, is to provide routing
and act as the glue that holds your back-end together, this file will be
the center of your application.

###routes/index.js
In this file, we create and outfit a `Router`, then export it as a module.
We consume the module in our `app.js`, mounting them on our `app`.

Creating `Routers` like this lets us organize our routes better. We can
put all routes with the same prefix on the same router, then mount it on
our `app` our another router.

###routes/*.js
As above, these files serve to group our routes together. If you have a
`routes/users.js` file, then you are expected to mount it on your app
at path `'/users'`. `routes/index.js` is expected to be mounted on `/`.

###public/*
This directory contains all your static assets. Things like CSS stylesheets,
page scripts, and HTML pages belong here, each in their own subdirectory.

We won't be using this very much unless we use the `serve-static` middleware.
In production, we'll rarely serve files from our express application, instead
using a "true" web server to serve static content, since that is what they
are frequently optimized for.

###views/*
This is where your view templates go. This is only relevant for server-side
templating, where we serve dynamically generated pages using templates and
data available to our application, such as database rows or documents, from
the server rather than serving JSON data and offloading the template rendering
to the client-side.

Server-side templating is a valid approach, but is most useful in a limited
subset of cases. One example is when rendering your templates requires data
that you want to keep hidden from the client.

What sort of templates we have here will depend on the templating engine
we chose when running the generator. The generator will give us some starter
templates to start off with and embellish as we go.

###bin/www
This is our start script. In fact, the express generator sets up `npm start` to
run `node ./bin/www`. This script requires `app.js`, which exports `app` as
a module, and uses `app` for what it was meant to do: be the callback for an
instance of `http.Server`!

This is the file where we do startup-related things. If we want to sync our
database models before listening for connections, this is where we write that
code.

This is also one place where we can take care of out application's termination
handlers. `process` is accessible anywhere, but this is the most appropriate
place to set handlers for signals the process may or will receive that indicate
that it is time to shut down. In these handlers, we can clean things up -- e.g.,
close database connections -- and call `process.exit`.

###models/*
This is where your database models go. We'll gloss over this for now because
we will have ample opportunity to discuss it as it comes up in following
lessons.

###lib/*
This is where we place our configuration and miscellaneous files. By having
out configuration constants as modules, we make it easy for ourselves (and
others) to modify them for special cases or deployment.

###log/*
This is where you have your logging middleware write logs. Make sure to
add this directory to your .gitignore!

##Run your application
`cd` into the root directory of your application (the same one you ran the
generator in) and run this command:

`$ npm start`

