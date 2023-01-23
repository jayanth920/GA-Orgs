# Paired Homeworks
A paired homework is a homework that is completed in a group of two or more developers via [pair programming](https://git.generalassemb.ly/seir-323/intro-to-pair-programming). Pair programming is a common industry practice where two developers work on the same project together. Typically, one person is the "driver" and the other is the "navigator". Throughout the paired homework, you must regularly switch roles.

## Requirements
- Each member of your pair must have an individual commit history to your homework's repository (multiple commits per group member).
- Each pair will need to submit only one set of homework. Make sure to mention who the pair members are in the submission.

## Process

1. Depending on the specific homework requirements, **Developer A (the current driver)** either forks and clones the homework repo or initializes a new Git repo for the pair's homework.

2. On his/her local machine, **Developer A (the current driver)** creates a new `development` branch within the homework repo:
  ```
  $ git checkout -b development
  ```
  
3. **Developers A (the current driver) & B (the current navigator)** work off of the `development` branch, with **Developer A (the current driver)** committing code regularly.

4. After 30 minutes or so, it's time to switch roles! **Developer A (the current driver)** pushes up the code to the remote `development` branch on Github:
```
$ git push origin development
```
**Developer A (the current driver)** should also [add **Developer B (the current navigator)** as a collaborator](https://help.github.jp/enterprise/2.11/user/articles/inviting-collaborators-to-a-personal-repository/) to the forked repo so that **Developer B (the current navigator)** can push code directly to that repo.

5. **Developer B (the new driver)** clones Developer A's forked repo to his/her local machine:
  ```
  $ git clone <homework-repo-url>
  ```
  
6. **Developer B (the current driver)** cd's into the repo that he/she just cloned and fetches the repo's branches:
  ```
  $ git fetch
  ```
  
7. **Developer B (the current driver)** checks out the `development` branch:
  ```
  $ git checkout development
  ```
  
8. Voila! **Developer B (the current driver)** can now pick up where **Developer A (the current navigator)** left off. **Developer B (the current driver)** should do a sanity check by running `$ git log` on the `development` branch to make sure his/her local branch contains the latest commits. The pair continues to work on the homework, with **Developer B (the current driver)** committing code regularly. ***At this point, make sure only the driver (Developer B in this case) is committing code to his/her local repo. The navigator (Developer A in this case) should avoid committing code to his/her local repo as it might result in nasty merge conflicts later on. Only one person (i.e., the driver) in a pair should be committing code at any point in time.***

9. When it's time to switch roles again, **Developer B (the current driver)** pushes up the code to the `development` branch on Github:
  ```
  $ git push origin development
  ```
  
10. **Developer A (the new driver)** will need to pull down the changes onto his/her local `development` branch by running:
  ```
  $ git pull origin development
  ```
**Developer A (the current driver)** should do a sanity check by running `$ git log` on the `development` branch to make sure his/her local branch contains the latest commits from **Developer B (the new navigator)**. The pair continues to work on the homework. ***Again, make sure only the driver (Developer A in this case) is committing code to his/her local repo. The navigator (Developer B in this case) should avoid committing code to his/her local repo.***
 
11. Switch roles every 30 minutes and repeat steps 9 and 10.

12. When the homework is done, **Developer A or B** [merges](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/merging-a-pull-request#merging-a-pull-request-on-github) the `development` branch into the remote `master`. Pick the `merge pull request` option.

13. **Developer A or B** submits the `master` branch of their homework.

14. Give yourself a pat on the back!
