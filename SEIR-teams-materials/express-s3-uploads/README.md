# File Uploads in ExpressJS

Heroku is an [ephemeral filesystem](https://help.heroku.com/K1PPS2WM/why-are-my-file-uploads-missing-deleted). Each time your virtual server (dyno) goes to sleep, it will resume by restarting &mdash; and rebuilding &mdash; the server from scratch.  That means that only the files that existed when you initially deployed to Heroku will exist when the server is restored.  

The solution to enabling user's to upload files is to use a third party storage service such as AWS' S3 (Simple Storage Service).  Follow the steps in this [AWS Setup Guide](../../../aws-s3-setup-guide) to create your account and configure AWS first.  You **do not** need to follow the steps for installing **boto3**, which is only required for Python applications. 

## Set Up Express

1. Make a directory for your back end server and switch into it: `mkdir upload-back-end && cd upload-back-end`.

2. Initialize the directory for npm with: `npm init -y` and install all of the packages for our server with:

```bash
npm i express mongoose cors uuid multer aws-sdk dotenv
```

- [express](https://www.npmjs.com/package/express): A web framework for NodeJS. 
- [mongoose](https://www.npmjs.com/package/mongoose): An object modeling tool for MongoDB.
- [cors](https://www.npmjs.com/package/cors): Express middleware that can be used to enable CORS with various options.
- [uuid](https://www.npmjs.com/package/uuid): For the creation of universally unique identifiers.
- [multer](https://www.npmjs.com/package/multer): Express middleware for handling multipart/form-data (the kind you need when uploading files!).
- [aws-sdk](https://www.npmjs.com/package/aws-sdk): The official AWS software development kit for JavaScript.
- [dotenv](https://www.npmjs.com/package/dotenv): A module that loads environment variables from a .env file into process.env automatically.

3. Create the base directories for the server: `mkdir controllers db lib models`.

4. Create the files in the root directory with: `touch .env index.js .gitignore`

5. Add the `node_modules` and `.env` files to the `.gitignore` file.

6. Add your AWS credentials to the `.env` file as follows (**make sure the key names are exactly as show below**):

```bash

AWS_ACCESS_KEY_ID=YOURACCESSID
AWS_SECRET_ACCESS_KEY=YOURACCESSKEY

```

> ### :rotating_light: IMPORTANT :rotating_light:
>
> Make sure you didn't miss step 5 above and `.env` is listed in your `.gitignore`.  If you publish AWS keys to GitHub accidentally, they will be found in minutes and used to deploy hundreds of instances of servers on EC2 before you even realize it.

7. Create a basic server in `index.js`.  For this example we'll have just one controller for users which we'll create in a subsequent step.

```js
const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const cors = require('cors');
app.use(cors());

// Add your controllers:
const userController = require('./controllers/userController');
app.use(userController);

app.set('port', process.env.PORT || 4000);

app.listen(app.get(port) () => {
  console.log(`Listening on port ${app.get(port)}`);
});
```

8. Create a connection file for the database in the `db` directory:

```js
// Import Mongoose to interface with MongoDB
const mongoose = require('mongoose');

// Use a ternary that looks for the presence of a `NODE_ENV` environment variable
// If `NODE_ENV` is set to production, use the URL for our database stored in the
// `DB_URL` environmental variable.  If not, just use the local db address.
const mongoURI =
  process.env.NODE_ENV === 'production'
    ? process.env.DB_URL
    : 'mongodb://localhost/profiles';

// Use Mongoose's connect method to connect to MongoDB by passing it the db URI.
// Pass a second argument which is an object storing the options for the connection.
mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  // If the connection is successful, give a message in the Terminal with the db name
  .then((instance) =>
    console.log(`Connected to db: ${instance.connections[0].name}`)
  )
  // If the connection fails, give a message and pass along the error so we see it in
  // the Terminal.
  .catch((error) => console.log('Connection failed!', error));

// Export the connection so we can use it elsewhere in our app.
module.exports = mongoose;
```

9. Create a model for the data. For this example app we'll have one called `User` where which contains field for a username and another for an image url:

```js
const mongoose = require('../db/connection');

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    avatarUrl: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('User', userSchema);
```

10. Create a file to modularize the code that will be used to upload the files to S3 (it's not middleware, so we'll put it in the `lib` directory):

```js
// The dotenv package will load our .env file
// and make our AWS credentials available BEFORE
// the aws-sdk is loaded.
require('dotenv').config();

// Load the AWS SDK after the aws credentials are available
const AWS = require('aws-sdk');
// Call the S3 constructor in the SDK
const s3 = new AWS.S3();
// Require UUID so that we can use it later
const uuid = require('uuid');

const s3Upload = (file) => {
  // Make sure we actually get a file
  if (file) {
    // Create a promise to start a promise chain
    return new Promise((resolve, reject) => {
      // Set up the params object to send to
      // S3 with the file and required information
      // Bucket is the name of the bucket to store it in
      // Key is the file name to use (must be unique so we're using uuid)
      // Body is the file itself
      // ContentType is the file's mimetype
      // ACL is the access control for the image when it's uploaded
      const params = {
        Bucket: 'your-bucket-name', // <-- Add your configured bucket here
        Key: `${uuid.v4()}_${file.originalname}`,
        Body: file.buffer,
        ContentType: file.mimetype,
        ACL: 'public-read',
      };
      // Upload everything and use the callback
      // to pass the error to reject the promise
      // otherwise pass the data to resolve the promise
      s3.upload(params, (err, data) => {
        if (err) {
          reject(err);
        } else {
          resolve(data);
        }
      });
    });
  } else {
    // If there wasn't a file, return null rather than error out
    return null;
  }
};

module.exports = s3Upload;
```

11. Create a basic controller for the user.  The multer middleware package that we loaded earlier is the real magic here.  It will receive the [**multipart encoded form data**](https://dev.to/sidthesloth92/understanding-html-form-encoding-url-encoded-and-multipart-forms-3lpa) from the request. Much like `express.json()` and `express.urlencoded()` do for us when we send urlencoded data or json data to the server, the multer middleware receives the request, then parses the data attached to it and adds it to the request object before calling next.  When the request object is received in our controller, the file attachment will be available to us in a property called `file` and any additional text data will be in the `body` property.  The [multer API](https://www.npmjs.com/package/multer#api) gives us lots of helpful properties for accessing the file's contents and details. 

```js
const express = require('express');
const router = express.Router();

// Require multer to handle parsing the file data and adding
// it to the request as req.file
const multer = require('multer');
// Since we're going to be using the file data from memory
// (using file.buffer) we can't set a destination for the file
const upload = multer();
// Require our code that handles uploading to s3
const s3Files = require('../lib/s3Files');

// Require the user model
const User = require('../models/User');

// Run multer as middleware on the route(s) that has multipart form-data
// Make sure that the name attribute of the file field in the front end
// matches what is passed to multer via the upload.single method
router.post('/profile', upload.single('avatar'), async (req, res, next) => { // <-- Don't forget the async keyword
  // Multer will add the file if it exist as req.file
  // req.body will hold the text fields, if there were any

  // Use a try/catch when you're using async/await syntax
  try {
    // Wait to get the file upload details from s3
    const s3file = await s3Files(req.file);
    
    // Wait for the result of the User.create() method.
    // Because we used await for the s3file variable, 
    // this this next code won't run until s3File's promise is resolved.
    // Once resolved s3file will contain the file or null. 
    // We'll use a ternary to check if s3file is truthy, and if it
    // is, we'll use the Location property to as the url for the avatar.
    // If s3file is null, we'll give it a default avatar url:
    const user = await User.create({
      ...req.body,
      avatarUrl: s3file
        ? s3file.Location
        : 'https://miro.medium.com/max/720/1*W35QUSvGpcLuxPo3SRTH4w.png',
    });
    // When the user is created send it back to the client
    res.json(user);
  } catch (err) {
    // If anything errors out at all, pass it to next!
    next(err);
  }
});

module.exports = router;
```

## Front End Code

Use create-react-app to create a React app and replace the App.js with the following to test the code.  Note that we're using the [FormData Web API](https://developer.mozilla.org/en-US/docs/Web/API/FormData) here to handle sending the data with the proper format seamlessly!  When we call the FormData constructor, we can pass it the whole form and then just add the object that it returns directly to the body property of our `fetch()` request or data property of our `axios()` call.  Do **not** attempt to stringify the FormData object as JSON before sending!

```js
import React from 'react';

function App() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    fetch('http://localhost:4000/profile', {
      method: 'POST',
      body: formData,
    })
      .then((response) => response.json())
      .then((result) => {
        console.log('Success:', result);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };
  return (
    <form encType="multipart/form-data" onSubmit={handleSubmit}>
      <label htmlFor="username">Username:</label>
      <input id="username" name="username" type="text" />
      {/* Make sure the name attribute of the file field is the same as the value passed to the multer upload method on the back end */}
      <input type="file" id="avatar" name="avatar" />
      <button type="submit">Send it</button>
    </form>
  );
}

export default App;
```

### Test in the Browser

You should get back a response (look in the console or network tab in Chrome dev tools) such as:

```js
{
  avatarUrl: 'https://book-api-images.s3.amazonaws.com/03fe62b5-8c30-4c3e-a7c8-c0a196bdd0c9_jmeade11.jpg';
  createdAt: '2020-05-17T22:02:55.455Z';
  updatedAt: '2020-05-17T22:02:55.455Z';
  username: 'jmeade11';
  __v: 0;
  _id: '5ec1b48f45165d1cff2683d2';
}
```

### Get all Fancy with Preview Images and Styles

Replace the code in App.js with the following code.  Here we'll use the [URL Web API createObjectURL](https://developer.mozilla.org/en-US/docs/Web/API/URL/createObjectURL) to get a temporary url for the image in memory and set it in state.  We can then just use conditional rendering to display the image by checking if the value exists in state and if it does, we'll use it as the source of an image element.  We'll also conditionally display the file name from the file the user wants to upload.  Lastly, we'll make it all look pretty.

<img src="https://media.git.generalassemb.ly/user/17300/files/03209600-98f8-11ea-8acd-72eb1cdaad54" alt="preview of the code changes with styling added" width="35%" />

```js
import React, { useState, useRef } from 'react';
import './App.css';

function App() {
  const formRef = useRef(null);
  const [previewImage, setPreviewImage] = useState(null);
  const [imageName, setImageName] = useState(null);
  const [result, setResult] = useState(null);
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    fetch('http://localhost:4000/profile', {
      method: 'POST',
      body: formData,
    })
      .then((response) => response.json())
      .then((result) => {
        // Reset the values in state for the image
        setImageName(null);
        setPreviewImage(null);
        // Reset the form to empty the fields
        formRef.current.reset();
        // Put the result in state
        setResult({ success: result });
      })
      .catch((error) => {
        setResult({ error });
      });
  };
  const handleFilePreview = (event) => {
    // When you select a file with a file input
    // you can access the file name via event.target.files[0].name
    setImageName(event.target.files[0].name);
    // You can also use the URL Web API's createObjectURL to
    // create a temporary local link to the blob in memory
    // Use this object url as the src for an image to
    // display a preview of the image!
    setPreviewImage(URL.createObjectURL(event.target.files[0]));
  };
  return (
    <div className="profile">
      <h2>Create a Profile</h2>
      <form encType="multipart/form-data" onSubmit={handleSubmit} ref={formRef}>
        <label htmlFor="username">Username:</label>
        <input id="username" name="username" type="text" required />
        {/* Make sure the name attribute of the file field is the same as the value passed to the multer upload method on the back end */}
        <label htmlFor="avatar">
          Avatar: {imageName && <strong>{imageName}</strong>}
        </label>
        <div className="file-upload">
          {previewImage && (
            <img src={previewImage} alt={imageName} className="preview-image" />
          )}
          <input
            type="file"
            id="avatar"
            name="avatar"
            accept="image/*"
            onChange={handleFilePreview}
          />
        </div>

        <button type="submit">Send it</button>
      </form>
      {result?.success && (
        <p style={{ color: 'green' }}>
          Click{' '}
          <a
            href={result.success.avatarUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            here
          </a>{' '}
          to see your image!
        </p>
      )}
      {result?.error && <p style={{ color: 'red' }}>An error occurred.</p>}
    </div>
  );
}

export default App;

```

Add the following CSS to add some native CSS style drag-and-drop or click or browse files features.  

```css
*,
*::before,
*::after {
  box-sizing: border-box;
}

a {
  color: inherit;
}

button,
.btn {
  background-color: #9e54bd;
  border-radius: 30px;
  border: 3px solid #823aa0;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  font-family: inherit;
  font-size: inherit;
  font-weight: 700;
  letter-spacing: 1px;
  outline: none;
  overflow: hidden;
  padding: 1rem 3rem;
  position: relative;
  text-transform: uppercase;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #823aa0;
}

button[type='submit'] {
  display: block;
  margin: 1rem auto;
}

form {
  width: 100%;
}

input[type='text'] {
  border: 3px solid #823aa0;
  font-family: inherit;
  font-size: inherit;
  padding: 1rem;
  width: 100%;
}

label {
  display: block;
  margin: 1rem 0;
}

p {
  text-align: center;
}

.file-upload {
  align-items: center;
  background-color: #eee;
  border: 3px dashed #823aa0;
  color: #823aa0;
  display: flex;
  flex-direction: column;
  font-size: 1rem;
  height: 15rem;
  justify-content: center;
  padding: 1rem;
  position: relative;
  text-align: center;
  width: 100%;
}

.file-upload::before {
  content: 'Drag image here or \A click to browse files';
  margin: 0 0 1rem;
  white-space: pre;
}

.file-upload > input {
  cursor: pointer;
  height: 100%;
  left: 0;
  opacity: 0;
  position: absolute;
  top: 0;
  width: 100%;
}

.profile {
  border: 1px solid #823aa0;
  box-shadow: 5px 5px 3px rgba(0, 0, 0, 0.05);
  color: #823aa0;
  padding: 1rem;
  margin: 1rem auto;
  padding: 1rem;
  max-width: 350px;
}

.preview-image {
  max-height: 7rem;
  max-width: 100%;
}
```

If things are working, try a fancier [drag and drop](https://github.com/react-dropzone/react-dropzone) file upload or create your own following this [tutorial](https://www.smashingmagazine.com/2020/02/html-drag-drop-api-react/).  If you want to have multiple file uploads, you'll have to modify the multer middleware to use its [`array()` method](https://www.npmjs.com/package/multer#arrayfieldname-maxcount).  You'll also want to change the code in your controller and model to handle uploading multiple files to S3.

## Deploy to Heroku

To deploy this app to Heroku, follow all of the normal steps to configure Atlas and Heroku, then make sure you also set your AWS keys in Heroku.  You can do this with `heroku config:set AWS_ACCESS_KEY_ID=YOURACCESSID` and `heroku config:set AWS_SECRET_ACCESS_KEY=YOURACCESSKEY` in the Terminal or you can do it manually by going to the app dashboard in Heroku.  If using the dashboard: select your app in the dashboard, navigate to the **Settings** tab, then click the **Reveal Config Vars** button.  There you can manually add `AWS_ACCESS_KEY_ID` and `AWS_SECRET_ACCESS_KEY` as keys with your corresponding values.  Make sure both are in screaming snake case (all upper case with underscores) and are spelled exactly as shown above or the AWS SDK will not recognize them.
