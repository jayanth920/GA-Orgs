[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# File upload with express and AWS S3

## Prerequisites

-   [aws-s3-setup-guide](https://github.com/ga-wdi-boston/aws-s3-setup-guide)
-   [express-api](https://github.com/ga-wdi-boston/express-api)

## Objectives

By the end of this, developers should be able to:

-   Upload files to AWS S3 from a node application.
-   Create path names with a low chance of duplication
-   Store information about uploaded files in MongoDB via Mongoose
-   Upload files from a browser to express and store them in AWS S3.

## Preparation

1.  [Fork and clone](https://github.com/ga-wdi-boston/meta/wiki/ForkAndClone)
    this repository.
1.  Create a new branch, `training`, for your work.
1.  Install dependencies with `npm install`.
1.  [Install](https://github.com/ga-wdi-boston/express-api-template#installation)
    `express-api-template` into your training directory.  In step 2 rename
    `express-api-template` to `express-multer-api`.

## Introduction

Adding a feature to a web API can feel formidable.

We'll take a stepped approach to implementing an image upload feature.

Hard problems are hard.  We'll work to find and solve an easier problem first.

## Discussion

What are the parts of file upload?  What are the issues to guard against?

### Node packages checklist

We'll use the following node modules as we build out this feature:

-   [ ] `aws-sdk`
-   [ ] `crypto`
-   [ ] `dotenv`
-   [ ] `mime`
-   [ ] `fs`
-   [ ] `mongoose`
-   [ ] `express`
-   [ ] `body-parser`
-   [ ] `multer`

The node package `file-type` night be more appropriate for getting a content
type, but `mime` is sufficient for the command line portion of our feature
build.  When we start handling uploads through `multer`, we'll see that we get
file information from it.

## Structure

We'll investigate, code, refactor, and integrate all the parts of file upload.

## Uploading files to AWS from node

We'll build a command line script in `express-multer-api` to upload a file to
 AWS.

Why build a command line uploader?

We'll use [AWS.S3](http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3.html),
 specifically the [upload](http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3.html#upload-property)
 method, to send files to AWS S3.

We'll run the script using `npm run upload-aws <file> [comment]`.

Refactoring is a skill to cultivate.

Let's separate out the parts that aren't about a command line script so we can
 reuse them.

## Uploading files to an echo server from an html form

We'll use the `index.html` to start file uploads.

We'll use the form attribute `enctype="multipart/form-data"` to allow uploading
 of one or more files.

We'll use `FormData` and `$.ajax` to POST data to an echo server,
 `http://httpbin.org`.

Later we'll use this client to POST data to `express-multer-api`.

## Uploading files to AWS via multer and express

Completing the parts of file upload.

## [License](LICENSE)

1.  All content is licensed under a CC­BY­NC­SA 4.0 license.
1.  All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
