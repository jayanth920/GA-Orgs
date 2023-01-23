[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# File upload with express and AWS S3

## Prerequisites

-   [aws-s3-setup-guide](https://git.generalassemb.ly/ga-wdi-boston/aws-s3-setup-guide)
-   [node-api](https://git.generalassemb.ly/ga-wdi-boston/node-api)
-   [node-api-promises](https://git.generalassemb.ly/ga-wdi-boston/node-api-promises)

## Objectives

By the end of this, developers should be able to:

-   How to Developer.
-   Modularize code, and solve small problems leading toward an end goal.
-   Upload files to AWS S3 from a node application.
-   Create path names with a low chance of duplication.

## Preparation

1.  [Fork and clone](https://git.generalassemb.ly/ga-wdi-boston/meta/wiki/ForkAndClone)
    this repository.
1.  Create a new branch, `training`, for your work.
1.  Install dependencies with `npm install`.

## Introduction

Adding a full feature to a web API can feel formidable. We'll take a stepped
approach to implementing an image upload feature. Hard problems are hard.  We'll
work to find and solve an easier problem first. What are the parts of file
upload?  What are the issues to guard against?

### Technique

Throughout this lesson we'll use our "Google-fu" to figure out how other
developers may have solved this problem before us. We'll research native node
packages as well as 3rd party packages which may help solve some of the many
problems our feature is made up of.

### Git and Github

Git and Github are phenomenal tools that we have at our disposal as developers,
but if we're blindly adding and committing files, and putting "does stuff" or
"fixes bug," you're not using them to their fullest extent. Commits should tell
the story of what and why. Connecting your commits to Github issues is a great
way of doing that. This will give our teammates a better idea of our
reasons for producing the code we produced.

## Structure

We'll investigate, code, refactor, and integrate all the parts of file upload.

## Uploading files to AWS from node

We've already identified that AWS (and more specifically s3), has a very robust
upload platform that we can leverage. In order to make use of it, however, we
first need to figure out how it works...

We'll start with a command line script in `express-multer-api` to upload a
file to AWS.

Why build a command line uploader? Any chance you can take to remove complexity
from a difficult problem, TAKE IT. Then add the layer of complexity back in.

We'll use [AWS.S3](http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3.html),
 specifically the [upload](http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3.html#upload-property)
 method, to send files to AWS S3.

Once we have a simple solution, we'll refactor. Refactoring, just like debugging
is a skill to cultivate. If you ever find yourself saying "Well, it works.
Better not touch it!" you likely haven't thought enough about your code or what
it's doing. Never be afraid to refactor, a fear of changing your code base is
a sure sign that you don't understand it as well as you need to--and there's
only one way to fix that!

## Code-Along: Create a Command-Line Script for AWS Upload

We'll start by creating a script in `bin/aws-3-upload` to start building out our
feature.

We'll run the script using `node bin/aws-s3-upload <file> [comment]`.

In order to pull in the `aws-sdk` so that we can use this package we need to
run the command:

```bash
npm install aws-sdk
```

We'll need to install a few more packages this way as we continue developing,
but let's get crackin with a node script first...

## Code-Along: Add Secrets, and Update .gitignore

IMPORTANT!!! DO NOT GO AHEAD OR OVERLOOK THIS STEP! It may cost you thousands of
 dollars if you do! *You have been warned.*

Create a .env file `touch .env` and put your `credentials.csv` from [aws-s3-setup-guide](https://git.generalassemb.ly/ga-wdi-boston/aws-s3-setup-guide) inside.

Type `git status`. Notice `.env` show up? STOP! BAD! Add a line to your
`.gitignore` file so that git stops tracking this file.

```diff
# Created by https://www.gitignore.io/api/macos,linux
+ .env
```

This will prevent our `.env` file from being committed and from being pushed to
github. Type `git status` again and make sure `.env` no longer shows up.

## Uploading files to AWS via multer and express

Now that we have our code a place that it is "doing the thing" let's look into
adding it to an express-api. Where do we need to start? What problems will we
encounter?

## Uploading files to an echo server from an html form

Now that we've hit a roadblock with our api, let's try to figure out what our
client can send, and what that request looks like.

We'll use the `index.html` to start file uploads.

We'll use the form attribute `enctype="multipart/form-data"` to allow uploading
 of one or more files.

We'll use `FormData` and `$.ajax` to POST data to an echo server,
 `http://httpbin.org`.

Later we'll use this client to POST data to `express-multer-api`.

## [License](LICENSE)

1.  All content is licensed under a CC­BY­NC­SA 4.0 license.
1.  All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
