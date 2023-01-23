![General Assembly Logo](http://i.imgur.com/ke8USTq.png)


# Git and GitHub Demo

Follow along with the lecture &ndash; no need to do anything with this repo.

## Objectives
* Understand why we need Source Control.
* Create a new **LOCAL** Git repository(repo).
* Become familiar with the [Git commands](command-reference.md), (init, add, commit, clone, etc.)
* Create a remote Github repo that will be a total copy of the local repo.


### Source Control

Source Code Control is also known as Version Control System(VCS). Version control is **fundamental** to software development. It is **required** for all the reasons given below.

### Git
Git is one, of many, Version/Source Control System. Others are Mercurial, Subversion, CVS, etc.

Git was created by Linus Torvalds, creator of Linux. Been around since 2005. But, became popular in Rails land about 2008.  

The most popular, by far, VCS for the languages and technologies we're going to see.  

## Why Use Source Code Control


#### Backup and Restore. (git reset) 
Files are saved as they are edited, and you can jump to any moment in time. Need that file as it was on Feb 23, 2013? No problem.  
#### Synchronization. (git pull, git push )
Lets people share files and stay up-to-date with the latest version.  
#### Short-term undo. (git reset)
Monkeying with a file and messed it up? Throw away your changes and go back to the “last known good” version in the database.  
#### Long-term undo. (git reset)
Sometimes we mess up bad. Suppose you made a change a year ago, and it had a bug. Jump back to the old version, and see what change was made that day.  
#### Track Changes (git log)  
As files are updated, you can leave messages explaining why the change happened (stored in the VCS, not the file). This makes it easy to see how a file is evolving over time, and why.  
#### Track Ownership (git blame). 
Tracks every change with the name of the person who made it. Helpful for blamestorming or giving credit.  
#### Sandboxing  (git branch, git rebase, git merge)
Insurance against yourself. Making a big change? You can make temporary changes in an isolated area, test and work out the kinks before “checking in” your changes.  
#### Branching and merging. (git branch, git rebase, git merge)
A larger sandbox. You can branch a copy of your code into a separate area and modify it in isolation (tracking changes separately). Later, you can merge your work back into the common area.

## Demo/Lab

Let's use Git. [Git Demo Steps](demo_steps.md)

## Demo/Lab

Manage a remote Git repository with Github. [Github repo](github_create.md)

## Demo/Lab
Fork and clone a repo and make pull request. [Fork, Clone](fork_pull_req.md)

## Best Practices

There are more best practices, but this will get you started.
 
### Only make one change per commit.
Very difficult to find or revert a single change if they are mixed into others. You can spend endless hours pulling apart large commits that contain multiple changes.  

**Commit early and often**

### Make the whole change in one commit.  
Also, makes it difficult to see what was changed to fix a bug or to create a feature.

**But don't commit too early or too often**
	
### Document what you have changed.  

A good commit message tells the reader what part of the codebase was changed and how without them having to look at the code.  

**Create good Commit messages**  
	
### Document why you made the change.  
If the change fixes a reported issue, make sure you mention the ticket's number in the commit message so that a developer looking at the revision history can better understand the context in which the change was made.

**Create good Commit messages**  

### Never commit code thats commented out.
There's only one rule when it comes to committing commented-out code.  
 
![Nooo](no.gif "Please Nooo")

# References

* [A Note About Git Commit Messages](http://tbaggery.com/2008/04/19/a-note-about-git-commit-messages.html)
* [What's in a Good Commit?](http://dev.solita.fi/2013/07/04/whats-in-a-good-commit.html)
* Source Control movie [Download this](https://www.dropbox.com/s/qricsuvkdlc5sn1/jim_wierich_git.mov?dl=0)
* [Learn Git Branching](http://pcottle.github.io/learnGitBranching/)


Btw, Git and Linux creator has some strong opinions about [commit messages](https://github.com/torvalds/linux/pull/17#issuecomment-5659933)
