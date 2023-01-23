![](/ga_cog.png)

---
Title: Github Practice & Resume Page<br>
Type: Homework<br>
Duration: "3:00 - 4:00" <br>
Creator: Kristyn Bryan, modified by Jerrica Bobadilla
Competencies: Github, command line git commands, HTML, CSS<br>
Prerequisites: Github, HTML, CSS

---

**IMPORTANT!** As part of homework tonight you are required to create a github issue between **7 - 10pm EST**. See below for a link to explicit directions on submitting your homework. If you run into problems during **7 - 10pm EST**, your TA will be available to answer questions.

You can continue to work on the homework after this submission and push your solutions, but as part of your homework tonight, you should submit the issue during TA hours.

## Part 1 - Git & Github
![octocat](https://s-media-cache-ak0.pinimg.com/originals/2d/8e/e8/2d8ee815146390d567706f2c7b5c2916.gif)
### Setup
1. Create a file called `answers.md` **inside** of the homework folder for tonight `w01d03/homework`.
2. Write your and answer the questions below in your `answers.md` file.
3. Commit your work at each point when directed (remember to `git add .` and then `git commit -m"my message here"`).

### Directions
Refer back to the notes from today and/or use the internet to find the answers to the questions below:

#### Answer the following questions

1. What command do you use to setup a git repository inside of your folder?<br>
1. What command do you use to ask git to start tracking a file?<br>
1. What command do you use to ask git to move your file from the staging area to the repository?<br>
1. What command do you use to get updates from the class repository?
1. What command do you use to push your work to your fork of the class repository?

<hr>
&#x1F534; **Commit your work.** <br>
The commit message should read: <br>
"The 1st set of GIT homework answers are complete"
<hr>

1. What command do you use to unstage a file?<br>
1. What command do you use to change your files back to how they were after a commit?<br>
1. Why is it important to use `--` when chaging files back to a previous state?<br>
1. Why might you want to reset your files back to a previous commit?<br>

<hr>
&#x1F534; ** Commit your work.** <br>
The commit message should read: <br>
"The 2nd set of GIT homework answers are complete".
<hr>

## Part 2 - HTML & CSS Videos
![dog with popcorn](https://i.imgur.com/p7MVTUQ.png)

Feel like you need some more basic HTML and CSS refreshers? Please watch the videos below!

[HTML Intro (tags, content, attributes, semantic HTML](https://www.youtube.com/watch?v=DxhXFpsN5I4&index=1&list=PLdnONIhPScST0Vy4LrIZiYKpFNoxgyH7J)

[HTML Elements (headers, navigation, lists, sections, etc.) and Media (images, audio, videos)](https://www.youtube.com/watch?v=KhbnrDhWDdE&index=2&list=PLdnONIhPScST0Vy4LrIZiYKpFNoxgyH7J)

[CSS Intro (including css files in HTML, elements)](https://www.youtube.com/watch?v=xWiT2TWCFjc&index=3&list=PLdnONIhPScST0Vy4LrIZiYKpFNoxgyH7J)

[CSS Basics (colors, background, font properties)](https://www.youtube.com/watch?v=UMMHsQPmfug&index=4&list=PLdnONIhPScST0Vy4LrIZiYKpFNoxgyH7J)

No commit needed.

## Part 3 - Fake Resume Site
![Grumpy Cat](https://i.imgur.com/n8lbaJB.png)

Grumpy cat is looking for a new job! Using what you know about HTML and CSS from watching the videos above, help him by creating a resume website for him.

Note sure if you need to watch the videos? Check yourself: Your resume should include the following from the videos:
- an `index.html` file
- an `main.css` file that is linked to the `index.html` file
- HTML `boilerplate` code for `index.html` HINT: in your `index.html` file type `html` and press tab. A few basic HTML tags should populate your file, including `head` and `body`
- Include
  - at least one header
  - navigation (these can be dummy links that don't go anywhere yet)
  - at least one list
  - change the font color in at least one place
  - change the background in at least one place
  - change the font in at least one plce


(Note: You don't need to know real information about Grumpy Cat, just make things up.)


### Setup

1. Inside your `w01d03/homework` folder, create a new folder called `resume_page`.
1. Change directories to `resume_page`.
1. From inside this file, create two files: `index.html` and `style.css`.<br>
1. Using Atom, open your files and add the HTML boilerplate code.<br>
1. Create a heading level-one tag with the name: Grumpy Cat.<br>
1. Open the `index.html` in your browser to confirm that everything is set up properly.
Reminder: To open your file with your browser, from the command line, type `open index.html`

<hr>
&#x1F534; **Commit your work.** <br>
The commit message should read: <br>
"index.html file is setup".
<hr>

#### Add some content to your site

1. Insert a professional image of him/her ('img' tag); it should be placed right after your 'h1' tags<br>
1. Insert an unordered list of three work positions ('ul' tag)<br>
1. Create links for LinkedIn and Facebook/Twitter pages ('a' tag). You can set this to a dummy link `#` or find yours / thiers and attach that<br>
1. Use level-three heading tags to create headings before your positions and before your links<br>

<hr>
&#x1F534; **Commit your work.** <br>
The commit message should read: <br>
"Added initial content for resume site".
<hr>


#### Add some style to your site

Here are some ideas:

1. Center your "h1" tag<br>
1. Change the font of your "h1" tag<br>
1. Change the color of the font of your "h3" tag text<br>
1. Add some space on the body of your application to make your site look more appealing.<br>

<hr>
&#x1F534; **Commit your work.** <br>
The commit message should read: <br>
"Added initial styling for resume site".
<hr>


#### Add some navigation to your site

1. Create a nav bar with the links to LinkedIn, Twitter (whichever links you had created earlier); Remove the links section that you had created earlier in the homework.
1. In the nav bar, also create a link to the 'index.html' page (maybe give it a name of `Home Page` in the bar), and a link to a file called "projects.html" (maybe call this `Projects` in the bar) <br>
1. Create another html file in this folder called 'projects.html'<br>
1. Copy the contents of the nav bar and information from the 'head' tag of your `index.html` file and paste it into your `projects.html` file<br>
1. Inside `projects.html`, create a level-two heading and add the text `Projects`<br>
1. Check to make sure that your links work! When you click on "Projects" in your nav bar, does it open the `projects.html` document?<br>
1. In `projects.html`, add three projects that they've worked on. To do this simply, you can use an ordered list. If you're up for a little more of a challenge, create three columns: each column should contain the title and a description of their three most recent, successful projects<br>

<hr>
&#x1F534; **Commit your work.** <br>
The commit message should read: <br>
"Added project.html page and content".
<hr>


## Part 4 - Loops
#### Stay Fresh! Looping with Javascript
![loop](https://i.imgur.com/qm0VNnG.png)

## Setup
1. In this folder, create a `loops.js` file which you will write your answers and execute with node.

## Directions
Pick **five** to tackle. If you finish "early", come back and do more!

1. Create a loop that logs the numbers from 0-99 (ascending)
1. Create a loop that logs the numbers from 99-0 (descending)
1. Create a loop that logs the **EVEN** numbers from 0-98 (ascending)
1. Create a loop that logs the **EVEN** numbers from 98-0 (descending)
1. Create a loop that logs the **ODD** numbers from 0-99 (ascending)
1. Create a loop that logs the **ODD** numbers from 99-0 (descending)
1. Create a loop that logs the numbers from 49-72 (ascending)
1. Create a loop that logs the numbers from 81-26 (descending)
1. Create a loop that logs the numbers from 3-90 **that are multiples of 3** (ascending)

<hr>
&#x1F534; **Commit your work.** <br>
The commit message should read: <br>
"Created loops.js file".
<hr>


## When You're Done

### Submission

 1. Inside this folder (w01d03/homework), you should now have a file called `answers.md`, a file called `loops.js`, and a folder called `resume_page` which contains `index.html`, `projects.html`, and `style.css`.

 2. You should have been adding and committing along the way, but please type `git status` one last time to make sure that everything is commited. If it's not, please commit.

 3. Follow the instructions for submitting homework, found in [the wiki](https://git.generalassemb.ly/Web-Development-Immersive-Remote/WDIR-Adi/wiki/Homework-Submission). Remember to submit this to the **class repo** in the **issues** section. [Here is a direct link](https://git.generalassemb.ly/Web-Development-Immersive-Remote/WDIR-Adi/issues) (since this is your first time).

 4. Submit your github issue sometime between **7 - 10pm EST** tonight so that you can ask the TA questions if you have them. You can continue to work on the homework and push your solutions, but as part of your homework tonight, you should submit the issue during TA hours.

 <hr>

 ## Hungry for more?

### Git
- Check out this [tutorial](http://gitreal.codeschool.com/?utm_source=github&utm_medium=codeschool_option&utm_campaign=trygit) that includes videos about using git and some challenges for you to tackle.

### More for your site:
1. Insert a video of your work or your favorite YouTube video ('iframe' tag)<br>
1. Add a level-three heading above your video with a title for the section<br>
1. Insert a table with your contact info (`table` tag)<br>
1. Add a level-three heading above your contact info with a title for the section<br>

1. Give the image a 1px black border<br>
1. Give the body of the page a thicker border than the picture but only on the top and bottom of the page<br>
1. Using HTML, insert a short blurb or biography with "p" tags<br>
1. Using HTML, insert a short description above your "p" tag; use an "h3" tag<br>
1. Make your name uppercase <strong>using CSS</strong><br>

1. Insert another image of you, or an image of one of your projects, but make it round<br>
1. Insert a button on both pages that links to opening an email to your email address<br>
1. Style your navigation bar<br>

### Loops
- Go back and answer more loop problems.
<hr>
&#x1F534; **Commit your work.** <br>
The commit message should read: <br>
"Worked on Hungry for More".
<hr>
