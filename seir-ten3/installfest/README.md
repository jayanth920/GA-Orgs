[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/software-engineering-immersive)

# Installfest

## What is Installfest?

Here at General Assembly, we use Installfest to install a group of applications which we consider essential for any software developer to have in order to develop software efficiently. We use these applications regularly in our classes, and it's essential for all of our students to have them. The applications we are installing today are commonplace in the development community, but are not the only applications you may encounter as a developer. 

## A Few Things to Keep in Mind

- The instructions below are made for macOS users. For Linux users, please follow the instructions [here](./installfest_linux.md) instead.

- Enter the commands in the Terminal unless otherwise noted.

- In the code blocks, do **not** copy the `$` symbols at the start of the line unless otherwise noted.

  The `$` is commonly used to represent the start of the prompt in the Terminal,
  and everything that follows the `$` is the command itself.

- We don't recommend typing the commands manually wherever possible, since a single typo can make a command malfunction.

  - Use `CMD + C` to copy a command.

  - Use `CMD + V` to paste a command.

  Copy and paste **one command at a time**. Each command should be a single line, but if your window is narrow some lines may "wrap" and appear as multiple lines.

  For longer lines, make sure you copy the entire line.

- If you're asked to enter your password, that means the password for your computer.

  When you type it in, Terminal won't give you any visual feedback to indicate you're typing things in: you won't get a black dot for each character you typed.

  That's OK – just type your password and hit Enter!

- Terminal is not big on visual feedback – it usually doesn't tell you when something worked.

  No news is good news! If you enter a command and Terminal doesn't print anything, it probably worked fine.

  If something didn't work, you'll get an error message that gives useful information.

- Some of the commands do not give immediate feedback so if it looks like something stalled give it a moment.

  If the Terminal prompt (`$`) isn't present on the current line, be patient.

- Your output could be slightly different from the Example Output. As long as they are similar you are good to move on to the next step.

- There are a few steps where it is important that a file is saved before proceeding. Here are a few things to look out for:

  _Unsaved:_

  ![Unsaved File](./images/file-changes--unsaved.png)

  _Saved:_

  ![Saved File](./images/file-changes--saved.png)

### If You Run Into an Issue

1. First, verify that you've typed the given commands **letter for letter**.
2. Then, check the slack channel to see if any changes were made during the installfest.
3. Finally, ask an instructional team for help.

# Instructions 🚀

## Update macOS

For our class, you'll need a recent version of macOS, but don't leave class now and update your machine... it can take a _while_ to update some times. If you have an older version, please reach out to the instructional team to see if your current OS version will work for class or if it needs to be updated outside of class time. 

## WSL2 (for Windows Users)

Because Linux commands are very similar to those in the Mac operating systems (they both have their roots in the Unix operating system), you will want to run Linux on your Windows machine during SEI.

Luckily, Windows has made it far easier to run Linux (vs. using a virtual machine) by including [Windows Subsystem for Linux (WSL)](https://docs.microsoft.com/en-us/windows/wsl/).

Please follow the instructions in the above link to set it up.

## Homebrew

Homebrew is a package manager that we will use to install various command line tools in our class.

Open up terminal, and paste the following command to install Homebrew. You might be prompted to install XCode Command Line Tools during the install process.

```
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"
```

If you are prompted to install the XCode CLI, say yes and your homebrew installation will continue.

After the installation process, run the command `brew doctor`. If any warnings or errors are displayed, we will need to resolve them before proceeding with the rest of the install fest.

Lastly, make sure to run `brew update` to make sure you have the latest lists of available software.

> If you're a Linux user, please refer to [Homebrew's Docs for Linux](https://docs.brew.sh/Homebrew-on-Linux) 

## Xcode

We do not use Xcode in class but some other applications that we do use require some Xcode libraries. Normally, all you need is the Xcode CLI which should have already been installed when you installed Homebrew.

DO NOT worry about installing Xcode unless prompted to do so (usually using the command `xcode-select --install`).

If you do need to install Xcode - **be patient**, it's a beast!

>  If you need to, you can install Xcode through the App Store. (You probably don't need to.) [Link here](https://itunes.apple.com/us/app/xcode/id497799835?mt=12)

## Visual Studio Code

Text editors are a personal choice. One of the most popular open source text editors these days, for good reason, is Visual Studio Code.

> Note: VS Code's _keyboard shortcuts_ are different than the shortcuts used by the Sublime or Atom editors. If you already know Sublime's shortcuts and don't want to learn those of VS Code, it's possible to configure VS Code to use Sublime's.

Download and install VS Code from [https://code.visualstudio.com/](https://code.visualstudio.com/).


#### Add Ability to Launch VS Code by typing `code`

1. **IMPORTANT** - Be sure that VS Code is in your Mac's `Applications` folder.
2. Launch VS Code using spotlight (`command + space` - then start typing `vs c` until you see the app, then press enter).
3. Type `shift + command + P` to open the command palette.
4. Start typing `shell command` and when you the<br>`Shell Command: Install 'code' command in PATH` command - click it!
5. Quit VS Code and Terminal.
6. Relaunch Terminal
7. You should now be able to open a folder to edit by typing `code .`

Check [this link](https://code.visualstudio.com/docs/setup/mac) for troubleshooting if you run into issues.

## Git

Git is the version control software we will be using - it's extremely popular.

You should have already installed Git as instructed to complete the pre-work.

If it's not installed, we can use Homebrew to install it:

```
brew install git
```

#### Github

[Github](https://github.com/) provides a way to host Git repos in the cloud.  It enables collaboration and is wildly popular.

You should have already opened a personal Github account, however, you need to have a General Assembly Github Enterprise account as well.  You can get one by signing up here:  [http://git-invite.generalassemb.ly/](http://git-invite.generalassemb.ly/)

> Note that you may use the same username for both GH & GHE, however, it's recommended that you distinguish between the two by appending `-ga` to your GH username, i.e., `<your GH usename>-ga`

#### Configuring git to default to a branch named `main`

GitHub (in the cloud) now defaults newly created remote repos to use a default branch named `main` instead of `master`.  To ensure that when you create a local repo (using `git init`) it does the same, run the following command:

```
git config --global init.defaultBranch main
```

#### Configuring git's "pull" Mode:

Run the following command to inform how git should merge fetched commits:

```
git config --global pull.rebase true
```

#### Configuring git to use VS Code as its Editor

There will be a time when git needs info and automatically opens an editor.  The default editor used by git is usually vim or nano - and neither is very user friendly.  The following command will set git's editor to VS Code:

```
git config --global core.editor "code --wait" 
```

#### Configuring your Preferred username & email:

Run the following two commands to configure your preferred Git username and email - it is recommended that you use your **personal GH** info, **not GHE**:

```
git config --global user.name "username"
```

then...

```
git config --global user.email "youremail@domain.com"
```


#### Configuring a Global git ignore

> IMPORTANT: **THIS STEP IS CRITICAL**

Everyone should have a global **git ignore** file so that you don’t have to worry about making the appropriate entries in a project’s git ignore.

First, create the file:  `touch ~/.gitignore_global`

Next, configure git to use this file:  `git config --global core.excludesfile ~/.gitignore_global`

Finally, lets put some good stuff in there by editing the newly created `.gitignore_global` file using VS Code:

1. `code ~/.gitignore_global` to open the file in VS Code

2. Copy/paste the following into `~/.gitignore_global`:

```sh
# This is a list of rules for ignoring files in every Git repositories on your computer.
# See https://help.github.com/articles/ignoring-files

# Compiled source #
###################
*.class
*.com
*.dll
*.exe
*.o
*.so

# Packages #
############
# it's better to unpack these files and commit the raw source
# git has its own built in compression methods
*.7z
*.dmg
*.gz
*.iso
*.jar
*.rar
*.tar
*.zip

# Logs and databases #
######################
*.log

# OS generated files #
######################
._*
.DS_Store
.DS_Store?
.Spotlight-V100
.Trashes
ehthumbs.db
Thumbs.db

# Testing #
###########
.rspec
capybara-*.html
coverage
pickle-email-*.html
rerun.txt
spec/reports
spec/tmp
test/tmp
test/version_tmp

# node #
########
node_modules

# Rails #
#########
**.orig
*.rbc
*.sassc
.project
.rvmrc
.sass-cache
/.bundle
/db/*.sqlite3
/log/*
/public/system/*
/tmp/*
/vendor/bundle


# Ruby #
########
*.gem
*.rbc
.bundle
.config
.yardoc
_yardoc
doc/
InstalledFiles
lib/bundler/man
pkg
rdoc
tmp

# for a library or gem, you might want to ignore these files since the code is
# intended to run in multiple environments; otherwise, check them in:
# Gemfile.lock
# .ruby-version
# .ruby-gemset

# CTags #
#########
tags

# Env #
#######
.env

# Python #
#######
*.pyc
__pycache__/

# Misc #
.eslintcache

```

3. Save the file.


## Node.js

Node is a JavaScript engine for the backend. We use it to power our web servers and connect to our databases.

```
brew install node
```

#### Windows WSL Installation

[Follow these instructions if you are running WSL 2 on Windows](https://docs.microsoft.com/en-us/windows/dev-environment/javascript/nodejs-on-wsl)

#### Can't Install Node Due to Outdated Operating System

If you receive an error regarding that your operating system is no longer supported, your first option is to update your operating system.  Otherwise, install Node by browsing to [its website](https://nodejs.org/en/), then clicking on the green **Current** button.

#### Verifying the Install

Verify the installation afterwards by running:

```
node -v
npm -v
```

The above commands should display versions without any errors. To verify that all the required permissions are set correctly, try to install a package such as the useful _nodemon_ globally:

```
npm install -g nodemon
```

## PostgreSQL

Install the **PostgreSQL** database management system (DBMS) using Homebrew with this command:

```
brew install postgresql
```

If you receive an error regarding that your operating system is no longer supported, skip to the "Can't Install PostgreSQL Due to Outdated Operating System" installation instructions below...

After Postgres is installed run this command:

```
brew services start postgresql
```
 
Followed by this command to test the install by creating a new database named the same as the current system user:
 
```
createdb
```

#### Windows WSL Installation

[Follow these instructions if you are running WSL 2 on Windows](https://docs.microsoft.com/en-us/windows/wsl/tutorials/wsl-database#install-postgresql)

#### Can't Install PostgreSQL Due to Outdated Operating System

We'll install an older version of PostgreSQL that's compatible with your operating system.  Don't worry, though, the older version will be just as capable...

1. Install the slightly older version:

	```
	brew install postgresql@9.5
	```
	
2. In the output of the install process, there will be the message:

	**If you need to have postgresql@9.5 first in your PATH run:**
	
	The command that follows begins with `echo 'export PATH...`
	
	Copy that entire command and run it.
	
3. Next, run this command:

	```
	brew link --force postgresql@9.5
	```
	
4. Now let's start up the database:

	```
	brew services start postgresql@9.5
	```
	
5. And finally:

	```
	createdb
	```

## Installing MongoDB

Install **MongoDB** using Homebrew using the following commands:

```
brew tap mongodb/brew
```

The above command might take a moment or two to complete.  When finished, install MongoDB with:

```
brew install mongodb-community
```

### Starting the MongoDB Server

You start the Mongo database server with the following command:

```
brew services start mongodb-community
```

The above command also ensures that the MongoDB engine runs after restarting your computer.

More info about installing MongoDB using Homebrew can be found [here](https://github.com/mongodb/homebrew-brew).

#### Windows WSL Installation

[Follow these instructions if you are running WSL 2 on Windows](https://docs.microsoft.com/en-us/windows/wsl/tutorials/wsl-database#install-mongodb)

## Installing Python 3

> Note: Due to time constraints and for simplicity, we will not be using Python "virtual environments" during SEI.  If you are familiar with using virtual environments, you may continue to use them.  If you decide to continue to develop using Python beyond SEI, your next step would be to learn about using virtual environments.

Brew is also used to install Python 3. (Python 2 is already installed on your Mac.)

Install **Python** using Homebrew with this command: `brew install python`. 

You can test the installation by running `python3 --version`.

Python 3's package manager, `pip3` should have automatically been installed with Python 3.  Test that it was installed by running `pip3 --version`.

## Installing Django

We will use `pip3` to install Django, a robust web framework for Python. We will be installing the latest version (3.x.x):

```
pip3 install Django
```

If you receive a "permissions" error, try this command:

```
pip3 install --user Django
```


## Installing Spectacle

Install [Spectacle](https://www.spectacleapp.com/) for resizing windows.

This free "productivity" tool is invaluable when it comes to minimizing the time spent sizing windows using the mouse.

## Installing mac2imgur

Create an account on [imgur.com](https://imgur.com/) and install [mac2imgur](https://github.com/mileswd/mac2imgur) to ease uploading screenshots and other images from your computer to your imgur account. _Note: mac2imgur is not currently actively maintained, but as a user of this tool myself for several years... I have rarely encountered an issue with this tool._


## Update Your Shell to Show Repo Info

If you've already personalized your shell, be it Bash or Zsh, you'll want to skip this section.

#### Bash

Use VS Code to edit the `~/.bash_profile` file:

```
code ~/.bash_profile
```

Copy and paste the following (it doesn't matter where):

```
parse_git_branch() {
     git branch 2> /dev/null | sed -e '/^[^*]/d' -e 's/* \(.*\)/(\1)/'
}
export PS1="\u@\h \[\e[32m\]\w \[\e[91m\]\$(parse_git_branch)\[\e[00m\]$ "
```

Save the file, quit Terminal (`command + Q`), then re-launch Terminal.

#### Zsh

Zsh users should install Oh-My-Zsh found [here](https://ohmyz.sh/).

#### Install Starship prompt - Optional

[Source](https://github.com/starship/starship)

1. Install Starship.

   ```sh
   $ brew install starship
   ```

2. Add to `.bash_profile`.

   ```sh
   eval "$(starship init bash)"
   ```

   **Note:** We want to add this line and keep it
   [near the end of `~/.bash_profile`](https://github.com/starship/starship#bash)

   _Updated `.bash_profile`:_

   ```diff
   export BASH_SILENCE_DEPRECATION_WARNING=1
   export PATH="$PATH"

   source /usr/local/etc/bash_completion.d/git-completion.bash

   export NVM_DIR="$HOME/.nvm"
   [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
   [ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion

   + eval "$(starship init bash)"
   ```

##### Confirm Starship prompt

```sh
$ source ~/.bash_profile
```

Terminal should look a little different now!

If not, completely close Terminal (`CMD + Q`) and reopen a new window.

#### Download Fira Code - Optional

Spaceship Prompt uses some new characters, so we need to download and configure
a programming font for our Terminal!

1. Download
   [Fira Code here](https://github.com/tonsky/FiraCode/releases/download/2/FiraCode_2.zip).

2. Unzip the folder when it is finished downloading, and open the `tff/` folder.

3. Highlight all of the `.tff` files, and the double click them to open the
   prompt to add them to the Font Book app.

   Once they are installed, you should see them on the list after a few seconds.

4. In the Terminal App, open the Preferences with `CMD + ,`

5. Go to the "Profiles" tab.

6. Under "Font", click the "Change" button and select Fira Code from the list.

7. Under "Text", click the box for "Antialias text"

##### Confirm Fira Code

The font in your terminal should be different!