# Git Install

- [ ] **Github and Initial Setup**
- [ ] [Git](git.md)

## GitHub and Initial Setup

If you haven't done so already, go to [GitHub](http://www.github.com) and create
an account.

**IMPORTANT**: be sure to write down your username and password somewhere, since
we'll be using these credentials later.

Next, go to [GitHub Enterprise](https://git.generalassemb.ly) and create an account. It is recommended that you use the same username, email address, and password for both accounts. GitHub Enterprise will be the source of your learning material throughout SEI, while your personal Github will be where you showcase your projects.

Now that you are set up with GitHub Enterprise, we want this repo on your local
computer. Please follow along as I show you how to fork, clone and put the repo
in the correct directory.

- We need to fork and clone this repo. **An instructor will walk you through how
  to do this**. Once you've forked to your Github Enterprise account, make sure you copy the HTTPS clone link (It will
  look something like `https://git.generalassemb.ly/<your github name>/installfest.git`)

- In your terminal, navigate to your home directory `cd ~`, then run `git clone <link copied from github>`. This will create a directory named `git-install` in your home folder `~/git-install/`

- Change into the newly created `git-install` directory by typing `cd git-install`. This directory contains another directory named `scripts/` containing scripts that we will run to set up Git on our machines!

- We will be running scripts from the root of the `git-install` directory. This means at any time, your current working directory should be `~/git-install/`. Do not change into any other directories within `~/git-install/`

[Continue With Installfest](git.md)
