# First Github Turnin

1. Fork this repo on Github
2. Change into your Code directory. Do not do the following from inside another Github repo. 
2. Clone *your* repo from Github to your local machine using `git clone git@github.com:YOUR_USERNAME/ga_git_first_turnin.git`
3. Add a 'remote' called 'upstream' using `git remote add upstream git@github.com:tibbon/ga_homework_git_first_turnin.git`. This will allow you to pull in changes that I might make later
4. Create a new file in your `ga_homework_git_first_turnin` directory called 'cats.txt'
5. Stage this file for a commit with `git add cats.txt`
6. Create a new commit with `git commit -m "Created cats.txt"`
7. Push your new commit to *your* Github repo with `git push origin master`
8. Create a new file called dogs.txt that contains the names of three dogs.
9. Stage this file for commit
10. Create a new commit with a good commit message.
11. Push this commit to Github
12. Create a new branch called my_fish with `git checkout -b my_fish`
13. Add a file called fish.txt with the contents having three types of fish
14. Stage this file for commit
15. Create a new commit
16. Push this commit to a new branch on github with `git push origin my_fish`
17. Create a *pull request* on Github by revisiting [my repo](https://github.com/tibbon/ga_homework_git_first_turnin) and click "Pull Request" for your `my_fish` branch.
18. Change back to your master branch with `git checkout master`
19. Merge changes from branch my_fish into master with `git merge my_fish`


This workflow is roughly how you'll turn in quizzes, homework and assignments. 

If you wish to pull in additional changes that I have made do `git pull upstream master` from your repo. 
