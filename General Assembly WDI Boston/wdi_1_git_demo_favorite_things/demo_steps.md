# Demo Steps

### Initialize an empty repo.
* Change into your code, or a temp, directory.  
* `cd ~/Code`
* `mkdir favorite_things`
* `cd favorite_things`
* `ls -al`
* `git init`, initialize a directory for git.
* `ls -al`  
	Notice that we know have a .git directory. This will keep all the info that git needs to manage this project.  
	*Details of this directory are not important at this time.*
* `git status` (do this throughout!)  
	**On branch master**  
	We typically work on *branches* in git. For now we'll always work on the master branch. More about branches later. 


### Add a new file to the repo
* `touch animals.txt`
* `subl .`
* Open the file using the sidebar or `Cmd+P`
* Add some favorite animals.
* `git status`   
	The animals.txt is **Untracked**. This means that Git doesn't 
	know about the file yet. We have one file in the working area.  
* `git add animals.txt`  
	This will add the animals.txt file to git's staging area. We'll **stage** a set of changes to be made before committing them.  
* `git status`  
	**Changes to be committed**  
	List of files that are in that are *staged* and ready to be committed.  
* `git commit`
* Write a good commit message! (see link in reference)
* Save and close the tab to finish
* `git status`  
	**Nothing to commit**  
	Files in the staging area, animals.txt, are committed.
* `git log`   
	This will show the commits made on this master branch. It will show:  
	1. A commit hash that uniquely indentifies the commit.
	2. Who made the commit.
	3. When the commit was made.
	4. Why the commit was made.
* `git log --stat`  
	Also show what files have changed and how many changes per file.  

### The workflow is:  
	1. Make one or more changes.
	2. Add it to the staging area, aka *index*. (git add)
	3. Commit these changes. (git commit)


### Learn a new trick: 
* `git add -A` (see reference)  
	Use `git help add` to learn this!   
	*Use space and 'b' keys to go forward and back*    

### Now you try it

* Create, Add and Commit two new files:  
	Favorite cheeses, and favorite teachers. (cheeses.txt and teachers.txt).
* Explain to another student the `git status` output for each step, (Change, Add and Commit).
* Do the same for the`git log` output.

### Modify a file in the repo and show differences.

* Add some new favorite animals
* What have we changed since the last commit? Try `git diff`
* Add the changes using `git add -A`
* `git diff` again, Did it stopped working?  
	No, this will show a diff between the staging area and the working area.  
	*They are the same!*  
* We need `git diff HEAD` 	
	HEAD is a pointer to the last commit.  
	This will diff between the last commit and what we have now. 
* `git log -p`, verbose log
	
### Now you try it
* Add some favorite animals.
* `git diff`
* `git add -A`
* `git diff HEAD`

### Unstage changes.
* Add some more animals to animals.txt and stage this change.
* How to un-stage the changes? `git reset HEAD animals.txt`
* How to remove changes? (dangerous!) `git checkout -- animals.txt`
* Make the changes again and stage them
* Try `git commit -v` to see all changes while committing

### Now you try it.
* Make sure you run `git status` after each command.
* Add some of your more of your favorite animals.
* Move them to the staging area.
* Unstage them.
* Remove changes.
* Make changes again.
* Commit these changes.
* Oh, explain to another student what you just did. Feel free to diagram how the file moved from the working area, to staging to being committed.

### Delete a file from the repo

* Create, Add and Commit your favorite cheeses and teachers, (cheeses.txt and teachers.txt)  
* `git status`
* `rm cheeses.txt`
* Is it really removed? Nope, check `git status`
	Just removed the file from the working area.  
* Can easily restore it with `git checkout -- cheeses.txt`
* For real this time: `git rm cheeses.txt`
* Removal staged, can we still get it back? `git reset HEAD cheeses.txt`
* For really real: `git rm cheeses.txt`
* `git commit`
* Can we *still* get it back? Absolutely! Check `git log`
* `git reset <SHA of last commit with cheese.txt file>`

### Now you try it
* Create, Add and Commit your favorite colors.
* Remove the file with 'rm' command.
* show the git status
* restore the favorite colors file.
* remove the file with 'git rm'
* commit the remove.
* git log the last 2 commits, `git log -2 --stat`
* blow away the commit that removed you favorite colors file.

### Move/rename a file in the repo

* `git mv teachers.txt people.txt`
* Add some favorite people to the file
* Still need to stage those changes using `git add`
* Finally, `git commit`

### Make some new files/directories

* `mkdir foods drinks`
* `git status` can't see these? Git only knows about files, not directories
* `touch foods/.keep`, empty marker file that typically used so Git knows about directories.
* `touch drinks/.keep`
* `git status` Know Git knows about these directories.
* `git add -A`
* `git commit -m "Added the foods and drinks directories."`

### Move files to a different directory

* `touch food/smoothies.txt`, and add some smoothies to the file.
* `git add food/smoothies.txt`, `git commit -m 'Added smoothies`
* Smoothies are more of a drink than a food, I think
* The answer: `git mv foods/smoothies.txt drinks/`

## Now you try it.
* Create a directory for colors.
* Move your favorite colors file to this directory.
* Commit this.


