# Notes

## Merge Conflict code-along

`conflict.md` is a file that only exists on the solution branch. you should
create the file with them during the code-along so that you can cause a
merge-conflict that you can all solve together.

#### Team project workflow, step by step
![Team project workflow, step by step](https://git.generalassemb.ly/storage/user/6926/files/37342e3c-d5b6-11e7-8456-196762858c5b)

#### Assorted git info

Instructor note

  Be sure to emphasize the semantic difference between rebase and pull. (per issue #18)
  You should always use `git pull --rebase` when your changes do not deserve a separate branch.
  Make this distinction known: Your local branch, into which you pull changes, and remote branch, are actually different branches, and git pull is about merging them (through a fetch and merge). When it would be better for any two branches in question to be one branch is where git pull rebase comes into play. You no longer merge, you actually commit one branch on top of the other for unified history.

  merge -- applies commits from another branch on top of any commits you've made.

  rebase -- adds commits onto a shared commit in both branches history and then reapplies your commits on top of those. After a rebase, pushing to the branch will require --force-with-lease since the history has been rewritten

## Diagrams

![](https://git.generalassemb.ly/storage/user/5689/files/83a08d14-04f1-11e8-9dd5-afa93ef0d6cb)

For the picture above, we can simplify what a rebase is doing.

1. Create a feature branch off of master.

1. Make a new commit on master.

1. Rebase the master branch from the feature branch so that it now points to the newest commit that was made on master.

![git diagram](http://i.imgur.com/QBytN9P.jpg)
![git diagram](http://i.imgur.com/y5aLyg3.jpg)
![git diagram](http://i.imgur.com/0eCZbLT.jpg)
