[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# GitHub Pages Deployment Guide

This guide is for the deployment of client applications using the
[Browser Template](https://git.generalassemb.ly/ga-wdi-boston/browser-template)
as a base.

## Objectives

By the end of this, developers should be able to:

- Deploy a client application to GitHub Pages.

## Instructions

- Set up your [browser-template](https://git.generalassemb.ly/ga-wdi-boston/browser-template) project
- Watch this video [github-deployment-video](https://drive.google.com/file/d/1_IkFMG9bSa-ES-6yCdD80IcWXCmHwAiD/view?usp=sharing) (it links to a zip file with the video)
- Follow the instructions in the `Deployment Steps`.

## Deployment Steps

1. Prepare main branch:
    - If your work has been merged to a main branch, it is ready to be deployed.
    - **If not, merge your work to the main branch.**
    - Run `git status` to ensure no changes are in the working directory.
1. Run deploy command:
    - At the root of your project run `grunt deploy`.
    - If the working directory isn't clean, the deploy task will exit and show
      you the output of the `git status` command. To fix this, add and commit
      changes you wish to keep on the appropriate branch (most likely not main).
1. Visit your deployed URL:
    - If deployed on GitHub: `https://<your-username>.github.io/<repo-name>`
    - If you don't see the site immediately be patient. Sometimes it takes up to
      15 minutes for GH Pages to display your deployed page.

## The Settings Tab

When you are on GitHub.com looking at one of your repositories, there is a
`Settings` tab all the way to the right:

![](https://git.generalassemb.ly/storage/user/5689/files/427777f8-496b-11e8-89ab-bab17ec43b59)

From here, if you have tried to deploy the repo to GH Pages, you can scroll down
to a section appropriately called `GitHub Pages`.

![](https://i.imgur.com/ZeHmu8N.png)

If something went wrong during the deploy, the green bar would be red and might
be able to point you to where the problem occurred. If it did deploy it will show
you the actual link you can visit.

You'll also want to make sure that the `Source` is being built from the
`gh-pages branch` and not the `main branch`.

Last, you probably don't want to choose a theme from this section. If you do
want a theme of some kind speak with an instructor about it.

## Workflow Rules

1. Deploy early and often.
1. NEVER work on the `main` branch.
1. Merge `feature` branch onto `main` when your feature is done.
1. `git push origin` every time you merge to `main`.
1. `grunt deploy` every time you merge to `main`.
1. Inspect your deployment in the browser.
1. NEVER merge `gh-pages` into `main`.

## Deployment Commandments

- `gh-pages` is not a replacement for grunt serve.

- `gh-pages` is a production environment.

- **NEVER** test code in production environments.

- **ONLY** deploy when code is verified as working.

## Additional Resources

- [GitHub Pages](https://pages.github.com/)

## [License](LICENSE)

1. All content is licensed under a CC­BY­NC­SA 4.0 license.
1. All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
