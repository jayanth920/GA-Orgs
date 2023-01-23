# Project #2: Building Your First Full-Stack Application

## Attendance
There is only one mandatory attendance check during the project week, but as always please make sure you're working on your project every day!

  - **Tuesday, July 10:** You're required to show up to Outcomes at 4:30PM ET
  - **Thursday, July 12:** Project presentation day! You're required to show up in the classroom zoom at 10AM ET to present your projects.

_Failure to make attendance check will result in an unexcused absence for both morning and afternoon_.

## Technical Requirements

### &#x1F534; Mandatory to pass:
#### MVP - Minimum Viable Product

* A working full-stack application, built by you, using **Node.js, Mongoose, Express and EJS**
* Adhere to the **MVC** file structure: Models, Views, Controllers
* At least one model with all 7 **RESTful routes** and full **CRUD**.
* :heavy_exclamation_mark: A git repository **not inside the class repo**.  
* At **least one** Github commit per day. 
* **Be deployed online** and accessible to the public via **Heroku**
* **A ``README.md`` file** with explanations of the technologies used, the approach was taken, unsolved problems, user stories, and notes to yourself so you can come back to your project later in the course and be able to pick up your train of thought, etc
* Have a **link to your hosted working app** in the **`README.md`** file in your github repo

### &#x1F535; Stretch Goals (Not Mandatory):
#### Recommended Features

* Add additional relationships (models can be related in a one-to-many relationship, for example)
  - [Optional notes on having two models](https://git.generalassemb.ly/Web-Development-Immersive-Remote/WDIR-Adi/tree/master/unit_2/w06d05/instructor_notes)
  - [Optional notes on relating two models](https://git.generalassemb.ly/Web-Development-Immersive-Remote/WDIR-Adi/tree/master/unit_2/w07d01/instructor_notes)
* Include **sign up/log in** functionality, with encrypted passwords & an authorization flow
* Use EJS Partials
* Include portfolio-quality styling
* Use a CSS framework like Skeleton or Bootstrap
* Incorporate **Google Maps**
* Inside Your `README.md`:
    * Include User Stories
    * Include **wireframes** that you designed during the planning process 

## Make A New Repo & Setup for Heroku Deployment
Before you begin coding, make a new GitHub repo for your project. _Take the following steps to ensure you have the right file structure/set up in order to deploy your site to Heroku._ 

:heavy_exclamation_mark: You will be using GitHub, **not** GitHub Enterprise!

1. Make a new github repo for your project **outside** of our class repo.

2. Inside this new repo, create a `.gitignore` file in the root of the repository directory. Put `node_modules` as the content of this file.
     - :arrow_right: _After installing express, do a `git status` before adding and committing.  Make sure node modules are not being pushed up to the repo and are correctly in your `.gitignore`!  You can also copy the [class repo's .gitignore](https://git.generalassemb.ly/Web-Development-Immersive-Remote/WDIR-Adi/blob/master/.gitignore)_
     - If you see the `node_modules` folder on your github repo, you haven't properly ignored it! 
        - [Read here](https://github.com/Krafalski/probable-meme/blob/master/README.md) on how to get rid of `node_modules` if you didn't ignore properly

3. On `npm init`, specify `server.js` as your entry point

4. If you did not set up your `entry point` in `package.json` correctly, make sure that you edit your `pacakge.json` so that `main` is set to `server.js`

***5. Make sure your `server.js` and `package.json` are in the root of your project repository along with yout `.git` to make sure Heroku deployment goes smoothly***

6. Your folder organization should look like this

   ![](https://i.imgur.com/gINcQZF.png)

7. We will walk you through the steps to deploy to Heroku today! 
   - Again, to make sure Heroku deployment goes smoothly 
      - Please make sure you have a working server by this time 
      - Make sure your `server.js`, `package.json`, and `.git` files are all in the root of your project repo
      - Make sure you gitignore `node_modules`! 
   - To see an example of folder structure and what counts as a 'working server', take a look at this [example repo](https://github.com/Krafalski/probable-meme/tree/master)

## Technical Demonstration

All projects will be presented to the class.  Your presentation should be:

* Approximately 5 minutes in length
* Shows off all features of the app
* Explains the technical details
* Explains the technical challenges
* Explains which improvements you might make

You will be sharing your app and your code.  Be prepared to answer questions from the instructors and other students.

## Meetings with instructors
_Your instructor will contact you to setup a meeting time to approve your project._

**Friday, July 6 - Mandatory**<br>
You will meet with your instructor (standup leader) to get your app idea approved. Be sure to write out what features you will need to build in order to meet MVP and some stretch goal ideas.

## How to Submit Your Project
Your project is due on Thursday, July 12 at 10:00 AM ET. You will present your project and show your code to classmates and instructors.

:heavy_check_mark: Add your project to [this google sheet](https://docs.google.com/spreadsheets/d/1MzbE9DOeeJmMaZ_Y59MBGdL6wgWxTX-mQw0eWFsS8SU/edit?usp=sharing).
  - _Note:_ This will be the order you present in!

## Where to go for help during project week
1. Seek out help online
2. Seek out help with your classmates
3. Seek out help with our class TA 

**TA Hours** (all times ET):

- Monday, Wednesday: 2-5PM, 7-10PM
- Tuesday: 1:30-4:30PM, 7-10PM

## Etc.

<details><summary><strong>Suggested Ways to Get Started</strong></summary>

* **Wireframe** Make a drawing of what your app will look like in all of the stages of the app(what does it look like as soon as you log on to the site? What does it look like while the player is playing? What does it look like when the player wins / loses?).

* **Break the project down into different components** (data, presentation, views, style, DOM manipulation) and brainstorm each component individually.

* **Commit early, commit often.** Don’t be afraid to break something because you can always go back in time to a previous version.

* **Consult documentation resources** (MDN, jQuery, etc.) at home to better understand what you’ll be getting into.
</details>


<details><summary><strong>Think about...</strong></summary>

- **Creativity**  
Did you add a personal spin or creative element into your project submission? Did you deliver something of value to the end user?

- **Code Quality**  
Did you follow code style guidance and best practices covered in class, such as spacing, indentation, modularity, and semantic naming? Did you comment your code as your instructors have in class?

- **Problem Solving**  
Are you able to defend why you implemented your solution in a certain way? Can you demonstrate that you thought through alternative implementations?
</details>

<details><summary><strong>Useful Resources</strong></summary>

* **[Heroku](http://www.heroku.com)**
* **[Writing Good User Stories](http://www.mariaemerson.com/user-stories/)** 
* **[Presenting Information Architecture](http://webstyleguide.com/wsg3/3-information-architecture/4-presenting-information.html)** 
* **[Mongo Documentation](https://docs.mongodb.com/manual/)**
* **[Mongoose Documentation](http://mongoosejs.com/docs/guide.html)**
* **[Mongo Cheatsheet](https://git.generalassemb.ly/Web-Development-Immersive-Remote/WDIR-Adi/wiki/Mongo-Cheatsheet)**
</details>
<hr>  

## Inspiration - Projects by Previous WDI Students

- [Cheerups](https://warm-beach-18335.herokuapp.com/cheerups)
- [Mixtapes](https://project-mixtapes.herokuapp.com/)
- [Tink & Frog](https://tink-and-frog.herokuapp.com/)
- [CodeSnips](https://stark-plateau-60254.herokuapp.com/)
- [flyerPole](https://flyerpole.herokuapp.com/)
- [LeagueManager](https://aqueous-harbor-40707.herokuapp.com/)
- [Yarn](https://thawing-chamber-93915.herokuapp.com/)
- [Crammer](https://study-tool.herokuapp.com/)
- [GitFit](https://salty-springs-24805.herokuapp.com/)
- [Civilized Coffee](https://infinite-shelf-28534.herokuapp.com/)
- [Pitched](https://pitched-app.herokuapp.com/)
- [PC Builder](https://pc-builder.herokuapp.com/)
- [Gathered](https://gathered-app.herokuapp.com/)
