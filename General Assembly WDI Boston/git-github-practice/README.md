![General Assembly Logo](http://i.imgur.com/ke8USTq.png)

# Git operations for quizzes

Follow the link provided to github.com

## Fork the repository.

### On github.com

- Click the link near the top right corner of the repository main page
- After the fork completes you should be on the forked repository page in your github.com account

## Clone your fork of the repository.

### On github.com

- On the right of the forked repository page, above the `Download ZIP` button, is a text box that should be labeled `SSH clone URL`. Click the `Copy to clipboard` button to the right of the text box.

### On your computer

```bash
$ cd ~/wdi
$ git clone <paste the url copied above>
Cloning into '<directory named for repository>'...
remote: Counting objects: <n>, done.
remote: Compressing objects: 100% (<n>/<n>), done.
remote: Total <n> (delta 0), reused <n> (delta 0), pack-reused 0
Receiving objects: 100% (<n>/<n>), done.
Checking connectivity... done.
$ cd <directory named for repository>
$ git status
On branch master
Your branch is up-to-date with 'origin/master'.
nothing to commit, working directory clean
$
```

## Edit and save changes.

### On your computer

```bash
$ subl .
$
```

Sublime should open.  Edit quiz.js and save your changes.

## Add, commit, and push your changes.

### On your computer

```bash
$ git status
On branch master
Your branch is up-to-date with 'origin/master'.
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

  modified:   quiz.js

no changes added to commit (use "git add" and/or "git commit -a")
$ git add quiz.js
$ git status
On branch master
Your branch is up-to-date with 'origin/master'.
Changes to be committed:
  (use "git reset HEAD <file>..." to unstage)

  modified:   quiz.js

$ git commit -m "Finished quiz."
[master <commit (hex)>] Finished quiz.
 1 file changed, <n> insertions(+), <m> deletions(-)
 rewrite quiz.js (100%)
$ git push origin master
git push origin master
Counting objects: <n>, done.
Delta compression using up to <m> threads.
Compressing objects: 100% (<o>/<o>), done.
Writing objects: 100% (<p>/<p>), 1.58 KiB | <q> bytes/s, done.
Total <p> (delta <r>), reused 0 (delta <s>)
To git@github.com:<your github.com account>/wdi_1_git_quiz_script.git
   <old commit>..<commit>  master -> master
$
```

## Submit pull request

### On github.com

- Refresh the forked repository page
- Click the `Pull Request` link near the right above the list of files in the repository.
- Click the green `Create pull request` button.


## You're done!

If you run into any issues with this, please tell an Instructor or DIR.  Thanks.


