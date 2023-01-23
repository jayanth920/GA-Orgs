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

// Make sure that the name attribute of the file field in the front end
// matches what is passed to multer via the upload.single method
router.post('/profile', upload.single('avatar'), async (req, res, next) => {
  // Multer will add the file if it exist as req.file
  // req.body will hold the text fields, if there were any

  // Use a try/catch when you're using async/await syntax
  try {
    // Wait to get the file upload details from s3
    const s3file = await s3Files(req.file);
    // When you get the file back (or null), use it as
    // the avatarUrl.  If no file exists, give it a default
    // avatar:
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
