![General Assembly Logo](http://i.imgur.com/ke8USTq.png)


## Objectives
- Learn how to work with others when making changes to a Github repo.
	- Fork and clone a Github repo.
	- Create a pull request so you can share your work.
	
	Note: This is how we will be submitting Homework assignments.

## Instructions

### 1) Check out a repo from Github
- Go to the [Papers We Love Repo on Github](https://github.com/ga-wdi-boston/papers-we-love)
- On Github, click the Fork button in the upper right hand corner ![Github Fork](https://help.github.com/assets/images/help/repository/fork_button.jpg)  
	*This will **fork**, copy, a repo from the ga-wdi-boston github account	to your github account.* 
	
	*Now you have a copy of the Papers We Love repo in your github account* 

- From your bash terminal, clone your newly created Github repo by typing
  `git clone git@github.com:YOUR-USERNAME/papers-we-love.git`
  ![git clone](http://i.imgur.com/Vuk3ujAl.png)  
  NOTE: This ssh clone URL will be available on the right section of the repo page.  
  
  *This will clone, create a LOCAL copy, of the your Papers we Love repo in your account. You know, the one you just forked.*  
- Change into the `papers-we-love` by typing `cd papers-we-love`
- Run `bundle install` to ensure you have all needed *ruby gems* on your system.

### 2) Create, Add and Commit changes.

In your local Papers we Love repo:  
* Create a new directory for a new topic.   
* Create a README.md markdown file in this directory.  

If you want, add a paper you love to the appropriate directory. 

### 3) Update your forked copy of the repo.

Once completed:

- Stage changed files by typing `git add <directory/README.md`
- Create a Git commit by typing `git commit -m "Add a directory and README for	Ruby papers."  
  *Now, your changes are only in your local repo*..
  
- Push changes to Github by typing `git push origin master`  
  *Now your changes are in your forked copy of the repo*..
  
### 4) Request that your change be added to the original, upstream, repo.

- On Github, create a Pull Request by going to `https://github.com/YOUR-USERNAME/papers-we-love/pulls` and hit the green "New Pull Request" button
![New Pull Request](http://i.imgur.com/RKGUz1sl.png)
- Hit the green "Create Pull Request" button now on the left side of the screen
![Create Pull Request](http://i.imgur.com/q8wczMZl.png)
- Now leave an additional comment and/or message, and hit the green "Create Pull Request" in the bottom right hand corner to finalize the PR.
  ![Finalize Pull Request](http://i.imgur.com/GZKSK8Xl.png)
  
  *Now the owner of the ga-wdi-boston repo can pull in your changes from your forked repo*  
  
