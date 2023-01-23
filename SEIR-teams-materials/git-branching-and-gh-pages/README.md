[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Git Branches & GitHub Pages

By this point, you have gotten a lot of experience with using Git for version control! Love it or hate it, it's a tool that developers use everyday to keep track of their work and also collaborate with other devs on teams.

In this mini-lesson, we'll review a few key concepts and also learn how to create branches to enhance our development experience. We'll also take another look at deploying our code to GitHub pages and talk about some of the common issues you might encounter when trying to publish your site.

As a bonus, we'll also take a look at how to route a custom domain name to our GitHub pages URL.

## Prerequisites

- Familiarity with command line and terminal
- Basic Git commands

## Objectives

By the end of this, developers should be able to:

- Explain the benefits of Git branches
- Check out a development branch
- Merge their dev branch back onto the main branch via command line or pull requests
- Publish a repo to GitHub Pages
- Troubleshoot common GH Pages issues
- Configure a custom domain for a GH Pages site

## Preparation

1. Change directory into your SEI folder and create a new folder called git-practice
1. Create an index.html file, add some boilerplate, and initialize a Git repo
1. Stage and commit your files
1. Create a new repo on Github.com and connect it to your local repository
1. Push your code up to your remote repository

## Git Branches 🌳

Git is a version control system, and tracks the differences between versions of files as a series of snapshots or "commits".

The main branch (sometimes still called "master," but we are moving away from biased terminology), is typically the branch that is being deployed or in production. In other words, that branch contains the functioning code that users might be relying on for your application.

To date, we have been doing all of our work on the main branch, but a common developer workflow involves making use of Git branches to work on application features in a separate environment from production code.

What might be some benefits of developing on a branch that is not in production?

### Git Branch Commands

Let's learn how to use some basic branching commands locally:

- READ all git branches in repo: `git branch`
- CREATE new git branch: `git branch new-branch`
- CHECKOUT (switch) to new branch: `git checkout new-branch`
- CREATE AND CHECKOUT to new branch: `git checkout -b another-branch`

When building applications, we'll typically create a `development` or `dev` branch where we'll work on features. In some workflows, you might check out additional feature branches from the dev branch as well, or teams might have each member check out their own version of the dev branch where they do their work.

Let's create and checkout a `dev` branch where we'll add some additional commits.

```bash
git checkout -b dev
```

Create some HTML in your `index.html` file. Stage and commit those changes.

Then create a `README.md`, add some content, and stage and commit those changes.

Let's push the changes on our `dev` branch to github.com

```bash
git push origin dev
```

If you refresh your remote repo, you'll see there are now two branches.

### Merging Branches

But now our repo has diverging histories on its two branches. Our `dev` branch is two commits ahead of the `main` branch.

There are two ways to merge our `dev` code back onto `main`.

#### Method 1: Pull request (preferred)

If your Git repository has a remote on GitHub, you can make a pull request on your own repo from the GitHub interface.

Making pull requests (sometimes called PRs) increases your GitHub activity. In fact, much open-source contribution occurs through pull requests. On the job, you'll likely contribute to production code through PRs as well.

After you make and merge the PR, be sure to checkout the main branch locally and pull the remote changes down.

```bash
git checkout main
git pull origin main
```

#### Method 2: Merge from command line

Alternatively, if your local Git repository does not have a remote or if you don't want to bother with the browser interface, you can first checkout the main branch, then run `git merge dev` to bring the `dev` branch commits into the `main` branch. Then you can push those changes up to your remote repository (if it exists).

#### Common Pitfalls

- **Merge conflicts**: a merge conflict may occur if you've made changes on the `main` branch that cause its commit history to diverge from `dev`. If a pull request says that it cannot automatically merge the files, run the merge command in your CLI and fix the merge conflicts manually in your code editor.
- **Cannot push to remote**: You might get an error that the remote repository is ahead of the local by some commits if you try to push to it without pulling down remote changes first. Sometimes this occurs when students edit the README directly on Github, for example. If this occurs, you have a couple options -- try to pull down the changes on the origin by running `git pull origin branch-name`, fix any merge conflicts, then add, commit, and push your code back up to the remote. Or, if your local changes are the source of truth and you want to overwrite the changes on the remote, you can run `git push origin --force branch-name`. This is a potentially destructive action -- only push by force if you're 100% sure your local changes are the correct ones.

## Deploying to GitHub Pages 🚀

Now that we've learned a little bit about branching, let's take a look at how to publish to GitHub Pages. The GitHub [documentation](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site) is very useful place to start.

But since we already have a repository in place for this exercise, let's navigate to the Settings tab on the repository (look for the gearwheel icon), scroll down to the Pages tab, and select the source (main or master branch) for our GitHub pages site, and hit "Save."

![Screen Shot 2021-06-10 at 11 58 37 AM](https://user-images.githubusercontent.com/53010153/121566562-3fcb9d80-c9e3-11eb-99c3-0236a8271b6b.png)

It's as simple as that! As long as your repo has an `index.html` in the ROOT or outermost level of the directory, GitHub pages will automatically publish that file.

### Debugging Common Issues

- **404 not found**: The page typically takes a few moments to publish. Try waiting and refreshing the page in a little bit. Sometimes your browser will also serve a cached version of the page, so try opening it in an incognito tab or another device to see if it's working.
- **Page is blank**: Make sure you're publishing from your default branch and that you have an `index.html` at the root of the repo.
- **Missing assets**: If image or other files are not loading correctly, double check that the correct relative paths are in place for their sources.

## Custom Domain Names 📝

Perhaps you want to serve your GitHub pages site from a custom domain name! Head over to Namecheap.com or another domain registry service and buy the domain name you're interested in.

1. In your GitHub repo settings, add your custom domain name to the Custom domain field. This will create a file called CNAME (no extension) in the root of your repo with the custom domain. Be sure to pull those changes back down to your local repo.
1. In your DNS registry console, create or update the CNAME Record with the following fields:
   - Type: CNAME Record
   - Host: www
   - Value: your deployed site URL
1. Delete any other Host records that might be in the console. Then add additional Host records for the GitHub IP addresses (185.199.108.153, 185.199.109.153, 185.199.110.153,
   185.199.111.153).
   - Type: A
   - Host: @
   - Value: IP addresses listed above

The finished Host records should look like this in the Namecheap console:

<img width="1165" alt="Screen Shot 2021-06-10 at 12 26 56 PM" src="https://user-images.githubusercontent.com/53010153/121570114-2b899f80-c9e7-11eb-821d-6814527277b7.png">

It will likely take some time for the certificates be issued and alias domain to go through, but once that all resolves, you should be able to serve up your GitHub pages site from your custom domain!

<img width="756" alt="Screen Shot 2021-06-10 at 12 15 44 PM" src="https://user-images.githubusercontent.com/53010153/121568743-a2be3400-c9e5-11eb-8a68-bd586b398bcf.png">

## Additional Resources

- [Learn Git Branching](https://learngitbranching.js.org/) - a great game that helps you learn Git in a visual way.
