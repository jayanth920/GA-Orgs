# haiku
> An exercise in forking and creating a pull requests.

## First, run through the below exercise to add your SSH key
- https://git.generalassemb.ly/ga-wdi-lessons/git-ssh
**If you cannot get it to work, then use HTTPS for the below instructions (#2)**

## Learning Objectives
- Practice using the 'fork, clone, and pull request' model to submit assignments

## Instructions
You do not have the necessary rights to update this repository.  Therefore, you must fork it, make changes to your fork, and then send a pull request to the owners of this repository.

### Set Up Instructions
On https://git.generalassemb.ly/ga-wdi-exercises/haiku:

1. Fork this repo to your personal account.
2. Copy the "SSH clone URL" for your fork of this repo.
3. Clone the repository to your computer. Make sure to use the url for your fork, and *not* this original repo.
  > e.g. `git clone git@github.com:adambray/haiku.git`. The `git clone` command will create a new `haiku` dir and download a copy of the repo there.
4. Change directories to the newly created `haiku` dir (`cd haiku`).
5. Run `git remote -v`. You can see that `git clone` set up a remote named `origin` that contains the clone URL you copied from your forked repository. This last step isn't necessary for setup but is to highlight what a `remote` is.

### Assignment Tasks

Starting in your directory `~/wdi/homework`:

1. Open the current directory in your text editor (`code .` or `atom .`).
2. Create a text file named `your_gh_username.txt`, e.g. `nickolds.txt`.
3. Write a haiku on a topic of your choice, commit your changes, and push those changes with `git push`.
4. Make one more commit ***that removes only the content of*** your `.txt` file (**do not delete the file**). 
5. Undo the commit you just made. Thing to Google is "undo last commit". (Hint: look for `git revert`)
6. Push the changes again to your remote.
  > Your `remote`, named `origin` by default, should point to your fork of this repository.
7. You should still see your original haiku on GitHub after pushing.

### Submitting Your Completed Assignment

Create a Pull Request:

1. Back on github.com (on your forked repo), create a pull request to the upstream (original) repository: `ga-wdi-exercises/haiku master <- your_github_name/haiku master`.

Additional changes (commits) are added to the Pull Request, after being pushed:

1. Make additional local changes, and commit/push them to your remote.
2. Verify that the pull request is updated on GitHub with your most recent commits.

## Troubleshooting

## Oh No I cloned down the original repository!

> Error: Your changes were rejected because you don't have push access.

No problem! This a chance to learn another useful `git` command!

1. Make sure you fork this repository to your GitHub Enterprise account.
  > Recall that forking creates a copy of a repository that belongs to another user to your own account
2. Copy the clone URL to your clipboard.
3. After you've done that, run the following command inside your `haiku` directory. Make sure to replace
  > `git remote set-url origin <paste clone URL here>`
  > Note: Make sure to replace `<paste clone URL here>` with the clone URL on your clipboard. 
  > This will set the `remote` named `origin` to point to your forked repository, and not the original.
4. Now when you run `git push origin master`, it will push the changes to your forked repository, and not the original (this repo).
