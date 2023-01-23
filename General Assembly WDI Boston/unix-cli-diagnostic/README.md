[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Unix/CLI Diagnostic

## Prerequisites

- [Unix CLI](https://git.generalassemb.ly/ga-wdi-boston/unix-cli)

## Setup Instructions

- Fork this repository to your GitHub Enterprise account.

![fork](https://cloud.githubusercontent.com/assets/10408784/16751964/6d58d6e2-47ab-11e6-8a30-8f37a80c337a.png)

- Copy the `ssh` link shown on the top of the page.

![Remotes](https://git.generalassemb.ly/storage/user/5693/files/217dfc06-d37e-11e7-94d5-dc2e5c39d7ab)

- Open your terminal and navigate to your `sei/diagnostics/` directory.

- Type `git clone` + the URL that you just copied from _git.generalassemb.ly_
  and hit enter. This will copy the repository from _git.generalassemb.ly_/<your_username>/unix-cli-diagnostic to
  your current location in your terminal. Veryify you now have the `unix-cli-diagnostic` folder.

![command_line](https://git.generalassemb.ly/storage/user/5693/files/c5b2c872-d380-11e7-8891-05ad982d5c4d)

- `cd` into the `unix-cli-diagnostic/` directory.

- Double check your path location with `pwd`. It should be something like: `/Users/tvlangley/sei/diagnostics/unix-cli-diagnostic`

- Within the `unix-cli-diagnostic` folder, type `git branch response` to create a new branch.

- Type `git checkout response` to switch to your response branch.

- Finally, follow the directions given in [`exercise.md`](exercise.md). You can open that file with `atom exercise.md`.

## Submitting Your Solution

- Stage your files with: `git add <"Filename">`.

- Commit your changes with `git commit` (leave a good commit message).

- Make sure `git status` is clean, meaning you have added all the files you wish to include in your pull request.

- Push your changes up to your fork of this repo on Github with `git push origin response`. 
	- _If you get a permission denied error_, please ask an instructor to help you. This means you didn't fork, and instead are attempting to use the `ga-wdi-boston` repo.

- Finally, go back to the GitHub Enterprise page for your fork (the place where
  you copied the URL). Create a pull request.
  - _if you do not see your changes on the create pull request page_, you may have to click the link `compare across forks`, and / or, select your `response` branch from the dropdown (instead of the `master` branch).

**Important**! We want to know how you feel about this diagnostic. Your pull request description should contain a "fist to five" for comfort and
clarity. Additionally, you should mention the resources you used to help you
complete this diagnostic.

For example:

```md
Comfort: 3
Clarity: 3

I used Google and my class notes to help with this diagnostic.
```

You may wish to refer to
["How do I submit diagnostics?"](https://git.generalassemb.ly/ga-wdi-boston/meta/wiki/Diagnostics)
and other [FAQs](https://git.generalassemb.ly/ga-wdi-boston/meta/wiki/) related to
[forking, cloning](https://git.generalassemb.ly/ga-wdi-boston/meta/wiki/ForkAndClone),
and [pull requests](https://git.generalassemb.ly/ga-wdi-boston/meta/wiki/PullRequest).

You may use **any resource** other than each other to complete this diagnostic.
This includes referencing talk materials, appropriate documentation, and
searching for help online.

## [License](LICENSE)

1. All content is licensed under a CC­BY­NC­SA 4.0 license.
1. All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
