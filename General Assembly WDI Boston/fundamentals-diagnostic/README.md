[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Fundamentals Diagnostic

A consultant will lead you through retrieving and responding to the diagnostic.

For the diagnostic itself, you have 30 minutes.

## Instructions

### Retrieve diagnostic from Github

#### Open the repository on github.com

Navigate to this repository in Chrome.  The URL should be in slack forum.

If necessary, login to GitHub.  If you are not logged in, the `Sign in` button
will be at the top right of the page when you navigate to
[Github](https://github.com.)

#### Fork the repository

Click the Fork button in the upper right hand corner of the page.

![Github Fork](https://help.github.com/assets/images/help/repository/fork_button.jpg)

GitHub creates a copy of the repository and redirects the browser.

#### Create a folder to hold diagnostics

Open a terminal window then at the shell prompt:

```sh
cd ~
mkdir wdi
cd wdi
mkdir diagnostics
cd diagnostics
```

The first `cd ~` - change directory - ensures that you start in your home
directory/folder.

`mkdir` creates a new directory/folder with the supplied name.  If you get an
error message that includes `File exists` when you run `mkdir` it probably means
you've already created the directory and can move on to the following `cd`.

#### Clone the repository

On GitHub, in your copy of the repository, find the clone URL widget - SSH/HTTPS
drop-down, corresponding URL text-box, and `Copy to clipboard` button (centered
in the following image).

![Remotes](https://cloud.githubusercontent.com/assets/12991284/21773348/ae228e80-d65c-11e6-95a0-1322f35aa0a4.png)

Before copying the clone URL to the clipboard, click the button to select
`SSH`. In [Which remote URL should I
use?](https://help.github.com/articles/which-remote-url-should-i-use/) GitHub
recommends using `https` remotes.  We will always use `ssh` remotes during your
training.

Click the 'Copy to clipboard' button.

![Copy clone URL to clipboard](https://cloud.githubusercontent.com/assets/12667121/24016416/659baff4-0a62-11e7-85ee-5118f1a2c4fc.png)

**Remember** it should say `SSH` in the drop-down when you do.

Back in the terminal (you should still be in the `diagnostics` directory created
above):

```sh
git clone
```

Then paste the copied clone URL, run the command, and change into the newly
created directory:

```sh
git clone git@github.com:<GitHub username>/fundamentals-diagnostic.git
Cloning into 'fundamentals-diagnostic'...
remote: Counting objects: 5, done.
remote: Compressing objects: 100% (5/5), done.
remote: Total 5 (delta 0), reused 4 (delta 0), pack-reused 0
Receiving objects: 100% (5/5), done.
Checking connectivity... done.
```
Then change into the directory you've just cloned:
```sh
cd fundamentals-diagnostic
```

### Complete Diagnostic

Create a `response` branch then open `diagnostic.md` with atom.

```sh
git branch response
git checkout response
Switched to branch 'response'
atom diagnostic.md
```

You may use **ANY** resource, other than someone else in the workspace, to help
you complete the diagnostic.

Rendered markdown may be viewed by following [this link](diagnostic.md).

You should delete `_Replace this text with your answer._` following each
questions and replace it with your answer.  Code answers need not be in
markdown.

Please start to review any linter errors you may see. The error will inform you
what the error is and which line and column number the error is located. Linters
help us to write clean, symantically correct code so we should start to pay
attention to what the errors are telling us.

### 3) Turn in Diagnostic

#### Stage changed files

```sh
git status
On branch response
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

modified:   diagnostic.md

no changes added to commit (use "git add" and/or "git commit -a")
```

In order to stage these changes, we need to add the file that has changed:

```sh
git add diagnostic.md
```

#### Create a git commit

Now that the changes have been staged, we have to make a commit:

```sh
git status
On branch response
Changes to be committed:
  (use "git reset HEAD <file>..." to unstage)

modified:   diagnostic.md
```

```sh
git commit
```

When a 'git commit' is executed, Atom will open a text file containing comment
lines (starting with a `#`) describing the changes being committed.  These lines
are not included in your commit message.

Format for submitting 'git commit' messages.

```sh
<headline of the commit>

<description of the commit>
# Please enter the commit message for your changes. Lines starting
# with '#' will be ignored, and an empty message aborts the commit.
# On branch bb-prep
# Changes to be committed:
# modified:   diagnostic.md
#
```

Enter `Fundamentals diagnostic response` as the headline. Hit enter **twice** to
leave a blank line. Add a description to the commit message. Once your
description is complete, save the file and close the Atom window. This will
commit the message. When you go back to terminal, you should see something like:

```sh
git commit

[response 29a63bc]
 1 file changed, 25 insertion(+), 6 deletion(-)
$
```

#### Push changes to GitHub

Now, push the changes to your forked repository on Github.

```sh
git push origin response
Counting objects: 3, done.
Delta compression using up to 4 threads.
Compressing objects: 100% (3/3), done.
Writing objects: 100% (3/3), 304 bytes | 0 bytes/s, done.
Total 3 (delta 2), reused 0 (delta 0)
To git@github.com:<GitHub username>/fundamentals-diagnostic.git
 * [new branch]      response -> response
$
```

#### Create a Pull Request

We'll follow the GitHub help article, [Creating a pull
request](https://help.github.com/articles/creating-a-pull-request/) skipping
step 4.

**Congratulations**, you have successfully submitted your first diagnostic by
opening a pull request! This is the process we will follow for **every*
diagnostic. The consultant team will respond to your pull request with feedback
on the answers to the diagnostic.

## Additional resources

Additional GitHub help articles.

-   [Fork A Repo](https://help.github.com/articles/fork-a-repo/)
-   [Cloning a repository](https://help.github.com/articles/cloning-a-repository/)

## [License](LICENSE)

1.  All content is licensed under a CC­BY­NC­SA 4.0 license.
1.  All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
