




[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# GitHub Pages Deployment Guide for React

This guide is for the deployment of client applications using the
[React Auth Template](https://git.generalassemb.ly/ga-wdi-boston/react-auth-template)
as a base.

## Objectives

By the end of this, developers should be able to:

- Deploy a react application to GitHub Pages.

## Instructions

- Read the instructions in the [React Auth Template deployment section](https://git.generalassemb.ly/ga-wdi-boston/react-auth-template#deployment)
- Watch this video [react-deployment-video](https://drive.google.com/drive/folders/1yVk7Is2ReE_opoH4ogNU_IuJYMTTkpHB) (it links to a zip file with the video)

## Deployment Steps
(assuming you followed all the set up steps for [react-auth template](https://git.generalassemb.ly/ga-wdi-boston/react-auth-template#installation)

0. Before deploying, you first need to make sure the homepage key in your package.json is pointing to the correct value. It should be the url of your deployed application.
1. Prepare master or main branch:
    - If your work has been merged to a master branch, it is ready to be deployed.
    - **If not, merge your work to the master branch.**
    - Run `git status` to ensure no changes are in the working directory.
2.  While on the up-to-date master branch with no modified files, deploy with `npm run deploy` (if you are on Windows, make sure all VSCode / Atom windows are closed)
3.  Visit the "Settings" page on your repository on 
.com and scroll down to the Github Pages section. You will see the URL to your deployed application. (It may take a few minutes after deploy for changes to be seen)
4.  NOTE: if you are just seeing a blank white page, make sure that the homepage key in your `package.json` file is correct (this is the URL of your deployed applicatoin, not the github repo itself) (e.g. `https://<your_org_name> .github.io/<your_github_repo>`)
