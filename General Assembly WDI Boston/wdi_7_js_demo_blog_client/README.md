
Install Yeoman: `npm install -g yo`
Install WebApp Scaffolding: `npm install -g generator-webapp`

http://yeoman.io/assets/img/workflow.19bc.jpg

http://yeoman.io/learning/deployment.html
http://www.sitepoint.com/deploying-yeomanangular-app-heroku/

```
# Scaffold a new application.
$ yo webapp

https://gist.github.com/cobyism/4730490

# Search Bower's registry for the plug-in we want.
$ bower search jquery-pjax

# Install it and save it to bower.json
$ bower install jquery-pjax --save

# If you're using RequireJS...
# (be aware that currently the webapp generator does not include RequireJS and the following command only applies to generators that do)
$ grunt bower
# Injects your Bower dependencies into your RequireJS configuration.

# If you're not using RequireJS...
$ grunt wiredep
# Injects your dependencies into your index.html file.

# Preview an app you have generated (with Livereload).
$ grunt serve

# Run the unit tests for an app.
$ grunt test

# Build an optimized, production-ready version of your app.
$ grunt
```

To Github Pages:

Remove the dist directory from the project’s .gitignore file (it’s ignored by default by Yeoman).

Make sure git knows about your subtree (the subfolder with your site).
`git add dist && git commit -m "Initial dist subtree commit"`

http://blog.technowobble.com/2014/02/handlebars-integration-with-yeomans.html
