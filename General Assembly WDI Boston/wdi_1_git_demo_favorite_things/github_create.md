# Demo Steps

### Create a local favorite things repo.
* See [Last Demo](demo-steps.md)

#### Create a remote, Github, repo.
* Go to github.com/<you github account>
* Select the repositories tab, https://github.com/<account-name>?tab=repositories
* Select the New button on the right.
* Add the repo name, <account-name>/favorite_things
* Push your local repo to this github repo.  
	1. `git remote add origin git@github.com:<account-name>/favorite_things.git`  
	*This will link the local repo to the remote, github, repo*  
	2. `git push -u origin master`  
	*This will push all your local only commit to the remote repo*  
* Refresh browser and notice your commits on github. 
* Create a new commit locally.
* Sync the remote, github, repo with the local repo.
	1. `git push origin master`
* Refresh browser and notice your last commit.
