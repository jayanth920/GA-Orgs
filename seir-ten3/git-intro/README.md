[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Intro to Git

Git is an essential tool that you will likely use every day as a developer.

## Prerequisites

- Familiarity with the command line and terminal

## Lesson Objectives

Knowledge:

1. Describe what Git is and what it does
1. Explain the difference between Git and GitHub

Skills:

1. Create a repository (repo) in GitHub
1. Clone that repo
1. Stage Files
1. Commit Files
1. Push files
1. Fork a repo
1. Create a branch
1. Push a branch to the repo
1. Create a pull request to original repo

## Version Control

Git is a version control system (VCS). Version control is a way of tracking _changes_ made to a file or group of files over time. If you've worked with track changes in Microsoft Word or Google Docs, or if you've ever saved multiple copies of a file while editing it, then you've used a form of version control.  

![Versioning illustrated by showing several files in the Finder window with slightly different file names](https://media.git.generalassemb.ly/user/17300/files/87b3d000-5fc0-11eb-8f14-36d557ad2fd3)

As a developer, tracking code changes provides us with the ability to examine the revision history for our code and revert to previous versions of a project when needed.  Mainly, these features give us the freedom and confidence to experiment!  With Git, we can easily try out ideas in a sandboxed version of our project, which can be merged into the base code when we get it working, or abandonned entirely if it doesn't work.  It also allows us to restore an older version of our code even after merging changes into our base project!

## Source Code Management

More broadly, there are ***source code management*** (SCM) systems. SCM systems are vital tools for collaborating with others by centralizing where we store our source code. It also allows us to isolate our work until it is ready to be integrated, and quickly troubleshoot issues by identifying who contributed specific changes to the source code. Git fits into this broader category of SCM by providing us with the tools and commands to manage our portion of a larger project, while GitHub is used as the service that centralizes where team members collaborate and store the project's source code.

>  ![Diagram depicting a local repository on a computer and a remote repository on GitHub](https://media.git.generalassemb.ly/user/17300/files/b8930580-5fbe-11eb-824c-d203ca513629)
>
> Git allows you to share a directory of files on your computer, known as the _local repository_, with another Internet-connected computer which is acting as a central location for your code (such as on a Github.com server), known as the _remote repository_. Storing your files in a remote repository has two major advantages, namely it acts as a back up, and enables collaboration with others.

Both version control and SCM systems are sometimes referred to simply as ***source control***.  Source control encompasses any system that gives us the ability to track and manage our most valuable asset as a developer: the code we write.  


### Summary

- **Git** refers to the version control system.
- **GitHub** refers to [github.com](https://www.github.com), the cloud service that hosts code repositories. It's the largest software development platform on the Internet and was acquired by Microsoft in 2018. Public repositories are viewable by all users.
- **GitHub Enterprise** is a version of GitHub for privately-held code repositories by enterprise organizations. General Assembly has its own GHE platform at [git.generalassemb.ly](https://git.generalassemb.ly).

In this course, we will use Git as our version control tool. Most coursework including lessons and homework will take place on GHE, but you will host your project repos on your personal GitHub account. In the second half of the course, we will move more assignments to GitHub so that you can start building out your GitHub presence.

## Create a repository in github

1. Go to https://git.generalassemb.ly
1. On the right click the green button that says "New Repository"
1. Give the repo a name and click Create

## Clone that repository

1. Once you've created the repo, you'll be taken to repo page
1. In the "Quick setup" section, copy and paste **the SSH** url
1. Go to a suitable location in the terminal (let's do `~/sei/`) and type `git clone ` and paste the ssh url (e.g.`git clone git@git.generalassemb.ly:yourusername/asdfasdf.git`)

> Note: If you start a repository locally (on your machine) instead of on GitHub, you can use `git init` too initialize a new repository that is being tracked by Git.

## Stage Files

`cd` into the repo and use `ls -a` to check for a `.git` repo

Now create `specific_file.txt` and make some changes to it.

Once you've finished making changes for the moment, it's time to tell git which files need to have their changes logged

- `git add specific_file.txt` will log all changes to the file specific_file.text
- `git add .` will log the changes to all files in the current working directory
- `git add some_dir/` will log the changes to all files in the some_dir directory
- `git add -A` will add all files in the local repo that have been modified

To see the status of which files are in the process of being committed use `git status`.

## Commit Files

Log the files, and give the log a description (or "message") so you can easily remember what was done

- `git commit -m "Change the database structure to allow for an email address for each user"`
- if you leave out the `-m` option, your default code editor will open with a file into which you can write a more detailed commit message
- check your commits with `git log`

## Push files

Push your changes to the remote repository

- `git push origin main`
- origin is the nickname of the remote repo. Main is the name of the branch (covered later) -- this is usually main when you start out.

## Review: What did we just do

Saving our work in Git requires two steps: Adding changes to the **staging area** (`git add .`) and then **committing** (`git commit -m "Describe what you did in the commit"`) those changes.

The **staging area** is one of Git's more unique features, and it can take some time to wrap your head around it. It helps to think of the **staging area** as a buffer between the working directory and the project history.

> [Why stage files?](http://gitolite.com/uses-of-index.html)

Instead of automatically committing all of the changes you've made since the last commit, the **staging area** lets you group _related changes_ into highly focused snapshots before actually committing to the project history. This means you can make all sorts of edits to unrelated files, then go back and split them up into logical commits by adding related changes to the stage and commit them piece-by-piece.

## Pull changes from remote repo

Pull any changes others made to the repo into your local version of the repo

- `git pull origin main`

> We won't need this command

## Fork a repository

Open source software is popular because the source code for an open source application is available for viewing on the internet. If you want to play around with the code of an open source app on github, you can simply fork the repo and make changes to it there.

1. Find the repo for last night's homework on GHE.
1. In the upper right, click the `fork` button.
1. Choose which user (or organization if you belong to any) should create the duplicated repo.
1. Clone, make changes, add, commit, and push as normal.

## Create a branch

- When working on a specific feature, it's generally a good idea to create a "branch"
- Branches give us the freedom to experiment safely!  When you create a new branch all of the code that is in the current branch becomes the basis of the new branch.  
  - In general, the `main` branch is for finished features
  - If you are working on a feature, it's not complete, but you want to save those changes to the repo (perhaps it's the end of the day), you can use branches to keep your changes off the `main` branch
- To list all branches run `git branch`
- To create a new branch run `git branch newbranch`
- Switch to a branch using `git checkout foo`. From now on, until you change branches again, all commits will be created on that branch

## Push a branch to the repo

- `git push origin newbranch` will push the currently active branch to the remote on a branch called "newbranch"
- In general, you should push a local branch to a branch on the remote repo with the same name

## Create a pull request to original repository

If you have made a change to your fork that you want to be integrated into the original repo, you'll have to ask the original repo owner to review and merge your changes into theirs.

1. Go to the original repo
1. Click the tab marked `Pull requests`
1. Click "New pull request"
1. Underneath "Compare changes" click "compare across forks"
1. For the "head fork" choose your fork. Leave "base fork" as the original repo
1. Next to the "base fork" and "head fork" buttons are drop downs for which branch of your fork (compare) should be merged into which original repo branch (base).
1. Click "Create pull request"
