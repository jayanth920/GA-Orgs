# Delivery Notes

For showing off the differences between Node and the Browser, one helpful thing to show might be how you can use `alert()` in the browser but not in Node, just to demonstrate that they have different methods available. Also maybe `process.argv`.

Possible good question to ask/framing: Why are we doing this? What's the point of using Node to interact with a file system?

### Lab: Research

Here are some examples of the following if you'd like to show them. Enter node first (also possibly mention that node will still know where we are in terms of filepath):

* fs.readdir: `fs.readdir('data', function(err, files) { console.log(files) } )`
* fs.readdirSync `fs.readdirSync('data')`
* fs.readFile: `fs.readFile('data/sample.json', 'utf8', function (err, data) { console.log(data) } )`
* fs.writeFile: `fs.writeFile('message.txt', 'Yo dawg!', 'utf8', function (err) {if (err) {console.log(err)} console.log('Worked!')})`

### Discussion

* readline - Node
* Math.random - Javascript
* fs.readFile - Node
* http.ClientRequest - Node
* alert - Browser
* new Promise - Javascript

### Annotate-Along

In the code along, first go through `lib`, then go through `bin`

#### lib

Why do we have to require in the `fs` module? Why isn't every module available everywhere? I believe this is to make Node more light-weight.

What are the arguments we're passing to `JSON.stringify`? The first argument is just the thing we want stringified, the second argument is a 'replacer' (optional), and the third argument is how many spaces we want to add (2 in this case)

#### bin

How does this refer to the terminal input? `'/dev/stdin'`
And how does this refer to the terminal output? const stdin = `'/dev/stdout'`
These are just strings that are recognized by the command line - a unix thing

May have to give a quick refresher on ternary operator here

If you don't have an `stdin` file, you can pass `-` as the third argument and still create a new file.

`a` flag refers to 'append', whereas the `w` flag refers to 'write'. If we're outputting to the terminal, we don't want to overwrite it - just append to it. Otherwise it's okay to write.


### Code-Along

This is meant to be run on the files `names.txt`. The command to run it is: `node bin/hey-yall.js data/names.txt`

When going though it, it might be helpful to just create the function up until the `let dataArray = data.split('\n')` part and then console.log to show why we need to use `.pop()`

### Lab

Instruct developers to install the `knuth-shuffle` package in order to complete this lab, done with `npm install knuth-shuffle`.

Callback Hell Note: "It's awkward that we are nesting these async functions
inside one another. We will take a look at better ways to organize our code in
the next talk where we will look at node promises." 

### Whiteboard Diagrams

![](https://git.generalassemb.ly/storage/user/3667/files/d54409f2-bb18-11e7-9691-b7f1f7094c91)
