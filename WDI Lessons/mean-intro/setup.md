# Mini-Installfest for MEAN

If you have trouble with the below instructions, no worries: one classroom tomorrow morning will be devoted to troubleshooting errors.

Note: Version numbers probably aren't important. If you get similar to the "This means you're good" snippets below, you're doing fine.

## Node and NPM

Node is a server that is written in Javascript, just like Rails is a server that is written in Ruby.

NPM (Node Package Manager) is the "gem" manager for Node.

### This means you're good:

```
$ hs
Starting up http-server, serving ./
Available on:
  http://127.0.0.1:8080
  http://172.20.8.1:8080
Hit CTRL-C to stop the server
```

### Otherwise:

If that doesn't work, try:

```
$ sudo npm install -g http-server
```

If that doesn't work, try:

```
$ brew uninstall node
# This step will throw an error if you don't have node installed.
# Just go on to the next step.
$ brew install node
# wait...
$ sudo chown -R "$(whoami)" /usr/local
# wait...
$ brew link --overwrite node
$ sudo npm install -g http-server
$ hs
```

## Nodemon

This makes Node detect when you've made changes to your server files and automatically restarts the server.

### This means you're good:

```
$ nodemon
  Usage: nodemon [nodemon options] [script.js] [args]

  See "nodemon --help" for more.
```

### Otherwise:

```
$ npm install --global nodemon
```

## MongoDB

### This means you're good:

First:

Note that `mongod` has a `d` at the end of it. Very important!

```
$ mongod
2016-04-07T12:20:50.449-0400 I CONTROL  [initandlisten] MongoDB starting : pid=2253 port=27017 dbpath=/data/db 64-bit host=MacBook-Pro.local
2016-04-07T12:20:50.450-0400 I CONTROL  [initandlisten] db version v3.2.1
2016-04-07T12:20:50.450-0400 I CONTROL  [initandlisten] git version: a14d55980c2cdc565d4704a7e3ad37e4e535c1b2
# ...and a bunch more stuff
```

Then **leaving mongod running, open a new tab**, and without the final `d`:

```
$ mongo
MongoDB shell version: 3.2.1
connecting to: something
Server has startup warnings:
WARNING: soft rlimits too low. Number of files is 256, should be at least 1000
>
```

You may or may not get the above warning. Either way, it's OK! If it's bothering you, [read this.](http://www.saintsatplay.com/blog/2015/05/increasing-mongodb-soft-rlimits-on-mac-os-x)

### Otherwise:

#### Mac Instructions

```
$ brew update
$ brew install mongodb
$ sudo mkdir -p /data/db
$ sudo chown `id -u` /data/db
# Then, follow the directions above
```

[More information if necessary.](https://docs.mongodb.org/manual/tutorial/install-mongodb-on-os-x/#install-with-homebrew)

#### Or, [Linux Instructions](https://docs.mongodb.org/manual/administration/install-enterprise-linux/)

## MongoLab

Heroku won't let you use their MongoDB database without paying for it. We're using MongoLab, which lets you create a free Mongo database on their servers, which you can then use on Heroku.

1. Go to www.mongolab.com and sign up / sign in
- Create a new "Single Node" database with the "Sandbox" tier
- Click on the database
- Click "Users"
- Create a new user with the name of "test" and the password of "testerson".

![#](http://i.giphy.com/xTiQyhG5HDEDbXc0KI.gif)

-----

# To test everything worked:

```
# In any folder
$ mongod
# Open a new tab
$ git clone git@github.com:ga-wdi-exercises/whenpresident.git
$ cd whenpresident
$ npm install
$ mv sample.env.json env.json
$ nodemon
```

You should see this:

```
$ nodemon
[nodemon] 1.9.1
[nodemon] to restart at any time, enter `rs`
[nodemon] watching: *.*
[nodemon] starting `node index.js`
It's aliiive!
```

To quit `nodemon` and `mongod`, use `Control-c`.
