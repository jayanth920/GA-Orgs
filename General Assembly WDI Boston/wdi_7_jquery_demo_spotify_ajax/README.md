# Spotify.me

Use Ajax to load data from the Spotify API! A user should be able to:

**Basic Requirements:**

 - Enter a keyword to seach for and.
 - Select "album", "artist", or "track" as the search type.
 - Have the names of all search results print as a list.
 - When the user changes the search type selector, reload the results list based on the new search type.

__The index.html is done and your work should be added to the js/spotify.js file.__

 __The new_api_solution branch has the solution.__

**Keep going:**

 - Add a "Showing X-X of X results found" message.
 - Setup pagination links for accessing the next page of results.


 **Use the Spotify API**

[Spotify API](https://developer.spotify.com/web-api/search-item/)


### Git Branching.

This will be completed by a Team. Each member of the team will be repsonsible for one task. These tasks or features could be:

1. Search by album.
2. Search by artist.
3. Search by track.

#### Procedure
* One team member will fork this repo into their Github account. The entire team will work from this forked repo.
	* Can use any team member's github account to hold this forked repo.
	* Add other team members as colloborators to this repo.
		 _See the Settings on the right in the github repo_.
* Each team member clones the repo on thier local machine.

	```
		git clone <the team repo>
	```

* Each team member creates a _topic_, aka _feature_, branch for their task.
	 This feature branch should also have a remote branch, _tracking branch_, in the github repo.

	 ```
	 	# Switch to the feature branch
	 	git checkout -b <topic/feature branch name>

	 	# Create a remote tracking branch that will exist in the Github repo
	 	git push origin <topic/feature branch name>
	 ```

* Each team member will periodically update their master branch and rebase their topic branch from the master branch.

	__THIS WILL BRING YOUR FEATURE BRANCH UP TO DATE__

	```
		# When your in the topic/feature branch

		# Switch to the master branch
		git checkout master

		# Sync local master with remote master
		git pull origin master

		# Switch to feature branch
		git checkout <topic/feature branch name>

		# Bring feature branch up to date with the master branch
		git rebase master

	```

	Now the feature branch is up to date with master.

* When the feature is complete the feature _owner_ will merge the topic/feature branch into the master and push up to github.

	__MAKE SURE MASTER AND FEATURE BRANCHES ARE UP TO DATE BEFORE DOING THE BELOW__

	```
		# When your in the topic/feature branch

		# Switch to the master branch
		git checkout master

		# Merge the feature branch commits into the master branch.
		git merge <topic/feature branch name>

		# Sync master branch to Github master tracking branch.
		git push origin master
	```
