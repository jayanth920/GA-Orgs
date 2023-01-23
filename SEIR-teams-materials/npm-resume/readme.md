# Npm Resume
For this exercise we're going to create our own npm package that will print out your resume.  the cool thing about this is that anyone can install your code and print out a resume from their console!

## Steps

1. Go ahead and create/change into a new directory called `resume` in your `exercises` or `sandbox` folder. 

2. In order to publish anything to npm, we have to **sign up/login with npm**.  
    * You can type `npm whoami` to see if npm recognizes you as logged in. (Most likely you are not) 
    * To sign up, you can type `npm login` and choose a name and password. You can also do this through their site [npmjs](https://www.npmjs.com/). 
    * Lastly you will also need to verify your email account.

3. Once you've signed up, type in `npm init` to create a `package.json` file. The only two required fields are `name` and `version`
    * The package name should be something like `yourname-resume` (You have to pick a name that hasn't been taken - you can search npm's site to see what's available)
    * Version should follow this format `x.x.x` (I recommend putting `1.0.0`)
    * For `test_command` and `entry_point` you can just hit enter. 
    * For `license`, you can use `ISC`
    * Fill in the rest fields the best you can. It's ok if you don't know what to put. You can just hit enter, and you can always edit everything later. 

4. Now create 3 files - `index.js`, `readme.md`, `info.json`

5. On the first line of `index.js` add...

```js
#! /usr/bin/env node
```

This is a little strange looking, but will allow us to run our code globally as well as from the command line later. 
> For more info on the [Shebang](https://en.wikipedia.org/wiki/Shebang_(Unix))

6. Next add...

```js
const fs = require('fs')

fs.readFile(__dirname + '/info.json', 'utf8', function(err, data) {
    if (err) {
        console.log(err)
    } else {
        console.log(data)
        return data
    }
})
```

* `fs` (short for File System) is part of node that we are bringing in to allow us to more easily and reliably read what directory we are in.
* `__dirname` is the directory we are currently in
* `readFile` gives us back the contents of a file.  We are passing in 3 arguments...
    * the file we want to read
    * the way to encode that file
    * a callback function 
        * if there is an error getting the file, print the error, else, print out and return the content.  

7. Next add the following to your package.json file. We're adding in a command that someone who's downloaded your npm file can run to display your resume. 
```json
"bin": {
    "your-command-here": "./index.js"
  },
```

**Hard part over!!**

8. In `info.json` create a json object that's a short resume for yourself. 
> Note: json wants property names and strings to be wrapped in "double quotes"! There are a few other differences as well that separate it from a javascript object
You can use my resume as a guide. Yours can be shorter, or sillier, whatever you want! Feel free to add in more properties like interests, soft-skills, pets, etc...
```json
{
    "name": "Hammad Malik",
    "website": "https://tomatohammado.github.io/",
    "linkedin": "https://www.linkedin.com/in/tomatohammado/",
    "github": "tomatohammado",
    "email": "hammad.malik@generalassemb.ly",
    "resume": "https://tomatohammado.github.io/assets/Malik-Hammad-Resume.pdf",
    "proficientTechnologies": [
        "Javascript",
        "React",
        "Vue",
        "Node",
        "Express",
        "Mongodb",
        "PostgreSQL",
        "Python",
        "Django",
        "Wordpress",
        "Drupal"
    ],
    "otherSkills": [
        "Unagi",
        "Five Finger Fillet",
        "Bridge"
    ]
}
```

9. Update your `readme` to be a short description about what you've made

10. git init, add, and commit.
    * Then create a new github repository
    * Link your local file to the github repository (use `git remote`!)
    * push up your repo!

11. Ok, finally -  run `npm publish`
    * You should be able to see your site and your readme on the npmjs site under your profile.
    > To update you can just call npm publish again, but you first need to change the version number!

12. To test that everything worked, change into a different directory and run `npm i -g name-of-project`. Then run `your-command-here`
    * You can also download eachother's npm resumes and print them out!

## 🌟BONUS!🌟

* Checkout [Color.js](https://github.com/Marak/colors.js) to make your resume different colors!
* Use [JSON.parse](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse) to create your resume as a javascript object you can loop through and customize more!
