[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Express Multer Upload API

In this lesson, we will learn how to perform a file upload to a remote server
using node, express, and Amazon Web Services (AWS).

## Prerequisites

- [An AWS (Amazon Web Services) account](https://git.generalassemb.ly/ga-wdi-boston/aws-s3-setup-guide)
- [ga-wdi-boston/express-api](https://git.generalassemb.ly/ga-wdi-boston/express-api)
- [ga-wdi-boston/node-api-promises](https://git.generalassemb.ly/ga-wdi-boston/node-api-promises)

## Objectives

By the end of this lesson, students should be able to:

- Send multi-part requests from client to a node api
- Use `aws-sdk` to send files from our api to s3
- Persist information about uploaded files
- Create path names with low chance of duplication
- Understand why files need be sent as multiple parts

## Preparation

1. Fork and clone this repository.
 [FAQ](https://github.com/ga-wdi-boston/meta/wiki/ForkAndClone)
1. Create a new branch, `training`, for your work.
1. Checkout to the `training` branch.
1. Install dependencies with `npm install`.

## Discussion: Uploading Files

**Questions**

- What are the different steps of a file upload?
- What are the issues to guard against?
- How do we deal with a partial upload or a slow connection?

## AWS s3 Buckets

### Why Store Files In An AWS Bucket

The AWS s3 (storage <sup>cubed</sup>) service allows us to store files
“the cloud”  which is a single source of truth accessible via the internet. This
means that files uploaded to s3 can be accessible to all of your app users.
Changes to your files can easily be seen by everyone.

The **bucket** abstraction specifically lets us store files in a folder in the
AWS cloud, as well as allow a specific and restrictive way of implementing
access control to that folder (a policy).

In the [ga-wdi-boston/aws-s3-setup-guide](https://git.generalassemb.ly/ga-wdi-boston/aws-s3-setup-guide)
prerequisite, you went through some steps to allow us access to read and write
to a bucket in the AWS s3 service. The CSV credentials that you downloaded at
the end of that prereq is what will allow out command line and server
applications permission to upload files to your AWS s3 bucket.

We'll build a command line script to upload a file to your AWS bucket. We'll use
[AWS.S3](http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3.html),
specifically the
[upload](http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3.html#upload-property)
method, to send files to AWS s3.

### `s3.upload` Abstracts Away HTTP Requests

One important concept that we should understand is that the `upload` method
abstracts away communicating with s3 using basic HTTP requests and responses,
but in fact, the `upload` method does use HTTP requests to communicate with the
server, and receives and returns HTTP response data to us.

### `s3.upload` Requires A `Stream` Of File Data In It's `params.Body`

We have to consider the problem of how to send a large amount of data (a file)
via a request to a server. Requests that do not contain large amounts of data
can send in once chunk of information. However, requests that contains large
amounts of data, such as file data, needs to communicate their data in multiple
chunks. Part of the reason for this is because communication through the
internet happens in pre-defined discrete chunks of data called **packets** that
are of a set size, so a file that is larger than the size of a packet has to be
split up into multiple chunks in order to be sent across the internet.

In order to send a file via `s3.upload` we will take advantage of
`fs.createReadStream` which will load a file in chunks and provide them
consecutively to some source. This way of providing file data is is called a
**stream**. In this case, we will specify a stream as the `Body` parameter
for the `s3.upload` function so it can send our files in chunks to s3.

### Code-Along: Uploading Files To AWS From `node`

We will:

- Install the `aws-sdk` and another tool called `mime-types` for
  this repo by running:

  ```bash
  npm install --save aws-sdk mime-types
  ```

- Set up a `.env` file in the root of our repo to hold some environmental
  variables:

  ```text
  BUCKET_NAME=<your AWS bucket name>
  ACCESS_KEY_ID=<access key id value from your credentials csv>
  SECRET_ACCESS_KEY=<secret access key value from your credentials csv>
  ```

- Make a file in `/lib` called `aws-s3-upload.js`
- Allow `lib/aws-s3-upload.js` to take two command line arguments:
  - The path to your file
  - The name the file will have once uploaded to the s3 bucket
- Upload a file to s3 using the `upload` method from the `AWS.S3` object, using
  a `Promise` to handle the asynchronous action of uploading using
  `AWS.S3.upload`

#### Uploading A File To AWS With Our Script

Once we are done coding, we can run the script using this format:

```bash
node lib/aws-s3-upload.js <file path> [file name]
```

For example, we could upload the image at `/data/images/padawan.png` by running:

```bash
node lib/aws-s3-upload.js ./data/images/padawan.png uploadedImage
```

Once the script runs successfully, you can go to your Amazon s3 Bucket and see
that the file has been uploaded!

### Uploading Files To AWS Through A Server

#### Even A Server Can Be A Client Sometimes

One of the great utilities of being able to upload files to AWS from the command
line is that we can use this functionality within our servers to upload a user's
files to the cloud.

**Questions**

- What might this look like?
- How would we keep track of which files were uploaded by each user to the
  cloud, as well as their urls in the cloud?

Let's take a minute to draw it on the board.

![server client database s3 diagram](https://git.generalassemb.ly/storage/user/3667/files/b31866b8-3a29-11e7-876b-f07dbfc7ea56)

#### Building Our Server

This repo is already set up to run a standard `express-api` server as you've
seen in previous lessons.

In order to set up this server to upload files to s3, we will need to:

- Refactor our code from the last step so it can be imported as a
  module for our server
- Keep track of uploaded file information in a `mongo` database by:
  - Write a  **model** for `Upload` data
  - Write a **route** for `Upload` data

#### `multer` Makes It Easy To Send Files To An `express` Server

`multer` is a middleware for `express` that allows us to upload multi-part data
to our server, such as file data. Just like we used `fs.createReadStream` to
send files from a filesystem to s3, we can use `multer` to receive multi-part
data (such as files) on an express server and save them in a folder on the
server. Read more about [multer usage here](https://github.com/expressjs/multer#usage).

### Code-Along: Refactoring `lib/aws-s3-upload.js`

We will:

- Remove the parts of `/lib/aws-s3-upload.js` where the `Promise` is being run
  with `.then` and `.catch` methods
- Refactor the inputs for the `s3Upload` function to take:
  - `file` - the path to the file
  - `originalName` - the name of the file being uploaded
  - `newName` - the name the file will have once uploaded
- Export this function using  `module.exports` so our server can use it

### Code-Along: Adding An `Upload` Model

We will:

- Make a file in `/app/models` called `upload.js`
- Describe our `Upload` schema in `/app/models/upload.js`:
  - Required keys:
    - `title` - the original name of the file
    - `url` - the URL returned from a successful s3 upload
    - `owner` (reference key to `User`) - the user who the upload belongs to

### Code-Along: Adding An `Upload` Route

We will:

- Make a copy of the contents of `/app/routes/example_routes.js` in a new file
  called `upload_routes.js` in `app/routes`
- Add in `multer` functionality to allow data sent in requests to be stored on
  the server, then uploaded to s3:
  - run `npm install --save multer`
  - require `multer` and set an upload folder to store files uploaded to the
    server
- Modify the appropriate imports and variable names to work with `Upload`
  request
- Use our `s3Upload` function in the `POST` route:
  - Require the function from `/lib/aws-s3-upload.js`
  - Add the logic to upload a file to s3 in the `POST` router
  - If the file is successfully uploaded, make a mongo `Upload` document with
    the data, then return that data in a JSON response to the client
  - If an error occurs at any point, handle the error using `console.error`
- Add our route to `server.js`

### Lab: Uploading Files To s3 Using `curl` Requests

Try and upload the image at `/data/images/padawan.png` to the server
using the `curl` scripts in `scripts/uploads`. Remember, our `upload` routes are
authenticated, so you'll need a token first.

> NOTE: use `/scripts/uploads/create-file.sh` to upload files. In order to send
a file using a `curl` request, you must specify the path to the image with a
`@` in front of it. For example:

  ```bash
  IMAGE_PATH=@./data/images/padawan.png ...
  ```

### BONUS Lab: Uploading Files Via A Browser Client

So far we have uploaded files directly to s3 using `node` scripts, as well as
via `curl` scripts sent to our custom server. In real world usage, we would most
likely be sending our data to the server via a browser client. You will build
a client that will be able to send an image to our server for uploading to s3
using html forms.

Break into your squads and work together for this lab. Choose one person's
computer to write code on and work solely on that machine.

#### Using `FormData` Instead of `getFormFields`

`getFormFields` is not capable of grabbing file data from a form.
For sending form data, including the `title` and file data, you will need to
learn how to use the built-in
[`FormData` constructor](https://developer.mozilla.org/en-US/docs/Web/API/FormData/FormData)
instead. This data can be sent to your server using an `jQuery.ajax` but you
must add the following keys to your `jQuery.ajax` settings:

```js
contentType: false,
processData: false
```

You will:

1. Download and set up [`browser-template`](https://git.generalassemb.ly/ga-wdi-boston/browser-template)
2. Create sign-in and sign-up forms that allow you to sign up and save a token 
   (feel free to poach code from your old projects)
3. Integrate this form exactly as it is written into your HTML:

  ```html
  <form id="image-upload" enctype="multipart/form-data">  
    <fieldset>
      <legend>Image Upload Form</legend>
      <label> Title
        <input type="text" name="title">
      </label>
      <label> Image
        <input type="file" name="image">
      </label>
      <input type="submit" name="submit" value="Upload">
    </fieldset>
  </form>
  ```

4. Write event handlers to get the form data and send it to our server. Use the
   `events.js` and `api.js` pattern for doing this
5. Submit an image via the form, which should upload it to the `/uploads` folder
   on your server, then send it to s3, log the transaction in the database, then
   return a response to the client

**Bonus Questions**

- What does  `enctype="multipart/form-data"` do in the form html?
- How can we see the values being stored in a `FormData` object? It's not as
  easy as just logging it!
- What do the `contentType` and `processData` keys do in the `jQuery.ajax`
  settings? What are their default values, and how could these prevent our
  upload from working?

## Additional Resources

## [License](LICENSE)

1. All content is licensed under a CC­BY­NC­SA 4.0 license.
1. All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
