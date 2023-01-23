[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Intro to Git Practice

Practice working with git!

## Prerequisites

- Familiarity with git

## Instructions

You do not have the necessary rights to update this repository. Therefore, you
must fork it, make changes to your fork, and then send a pull request to the
owners of this repository:

1. Fork and clone this repository.
1. Change into the new directory.
1. Fulfill the listed requirements.

When you have fulfilled the requirements below, make a pull request on this
repository to turn in your work.

Unless otherwise specified on the calendar or by an instructor, homework is due
the next morning by 10:00am ET.

### Prep for HTML & CSS

Once you've completed the requirements review what you learned during the
prework so you're ready for the HTML & CSS lectures:

- [HTML Intro (tags, content, attributes, semantic HTML)](https://www.youtube.com/watch?v=DxhXFpsN5I4&index=1&list=PLdnONIhPScST0Vy4LrIZiYKpFNoxgyH7J)
- [HTML Elements (headers, navigation, lists, sections, etc.) and Media (images, audio, videos)](https://www.youtube.com/watch?v=KhbnrDhWDdE&index=2&list=PLdnONIhPScST0Vy4LrIZiYKpFNoxgyH7J)
- [CSS Intro (including css files in HTML, elements)](https://www.youtube.com/watch?v=xWiT2TWCFjc&index=3&list=PLdnONIhPScST0Vy4LrIZiYKpFNoxgyH7J)
- [CSS Basics (colors, background, font properties)](https://www.youtube.com/watch?v=UMMHsQPmfug&index=4&list=PLdnONIhPScST0Vy4LrIZiYKpFNoxgyH7J)

## Requirements

Work through the following instructions:

### Before you begin

1. `cd` into your cloned down assignment.
2. Be sure that you cloned down your fork. Type `git remote -v` in your
   terminal. If the output includes your GHE username, you are all set!

```bash
$ git remote -v
origin	git@git.generalassemb.ly:esin87/intro-git-practice.git (fetch)
origin	git@git.generalassemb.ly:esin87/intro-git-practice.git (push)
```

3. If the remote does NOT include your name, go to the
   [Troubleshooting](#troubleshooting) section of this page and follow the
   directions there.
4. Create a development branch to work on and check it out by running `git checkout -b dev`. 

### Part I:

1. Open the current directory in your text editor (`code .`).
1. Create a file called `answers.md`. Try doing this from the command line. Write your answers to the following
   questions in the `answers.md` file.

#### Questions:

1. What command do you use to download a git repository to your computer?
1. What command do you use to ask git to start tracking a file?
1. What command do you use to ask git to move your file to the staging area?
1. What command do you use to ask git to move your file from the local
   repository to the remote?
1. What command do you use to create a new branch AND check out to it? 

🛑 **Commit your work!** Your commit message should read something like:
"Complete first set of Git prompts". Run `git push origin dev` to push your
changes to your remote repository's dev branch.

### Part II:

In this section, we will model a common Git workflow in which we checkout a feature branch from our dev branch, and merge it back onto the dev branch. 

>Tip: Read through all of the steps before beginning and form a mental model of what we're doing here. Try drawing out a picture to illustrate the git branching and merging! 

1. In this directory, create a text file named `your_gh_username.txt`, e.g.
   `nickolds.txt`.
1. Write a haiku on a topic of your choice on your `dev` branch, add and commit your
   changes, and push those changes with `git push origin dev`.
1. Create and checkout a new branch called `second-haiku`. On this new branch,
   create another text file called `haiku2.txt` and write another haiku.
1. Add and commit your changes, and push those changes with
   `git push origin second-haiku`.
1. Check your remote repository at git.generalassemb.ly and make sure you see
   three branches: `main`, `dev`, and `second-haiku`. Run `git branch` on your terminal and you should see the same branches. 
1. Make sure you don't have any uncommitted changes on your `second-haiku`
   branch, and checkout your `dev` branch again.
1. Run `git merge second-haiku`. Now you should see your second haiku in your
   `dev` branch locally.
1. Run `git push origin dev` to push your changes to your remote.

Go to the original repository and submit a pull request to finish your assignment! 

## Hungry for More?

- This [game](https://learngitbranching.js.org/) is a great way to visualize Git
  branching and more advanced commands.
- Check out this
  [tutorial](https://www.pluralsight.com/courses/code-school-git-real?utm_source=github&utm_medium=codeschool_option&utm_campaign=trygit)
  that includes videos about using git and some challenges for you to tackle.

## Troubleshooting

**Oh no, I cloned down the original repository!**

> Error: Your git remote lists the original repository
or 
> Error: Your changes were rejected because you don't have push access.

No problem! This a chance to learn another useful `git` command!

1. Make sure you fork this repository to your GitHub Enterprise account.
   > Recall that forking creates a copy of a repository that belongs to another
   > user to your own account
2. Copy the cloned URL to your clipboard.
3. After you've done that, run the following command inside your `intro-git-practice`
   directory. Run: `git remote set-url origin <paste clone URL here>` 
   > Note: Make sure to
   > replace `<paste clone URL here>` with the clone URL on your clipboard. This
   > will set the `remote` named `origin` to point to your forked repository,
   > and not the original.
4. Now when you run `git push origin master`, it will push the changes to your
   forked repository, and not the original (this repo).

## Plagiarism

Take a moment to refamiliarize yourself with the
[Plagiarism policy](https://git.generalassemb.ly/DC-WDI/Administrative/blob/master/plagiarism.md).
Plagiarized work will not be accepted.

## [License](LICENSE)

1.  All content is licensed under a CC­BY­NC­SA 4.0 license.
1.  All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
