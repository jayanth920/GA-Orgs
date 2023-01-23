# Phpone Book

Create a little phone book app using PHP!

It will show a list of entries, each of which has a name and a number. Users will be able to add and delete entries.

# Hints

These are all the functions I used to make the solution. Your solution may be different.

```
file_exists
file_get_contents
file_put_contents
json_decode
json_encode
isset
unset
strtolower
header
echo
```

Also useful: PHP's ["heredocs"](http://stackoverflow.com/a/9687483/2053389).

To write to and read from a JSON file, you should always follow this sequence of steps:

1. Get the JSON file's contents
- Decode the JSON file's contents to an array
- Modify the array
- Encode the array as JSON
- Put the encoded array in the JSON file *without appending*

# If you're not sure how to start

You might try following this sequence of commits.

1. Make sure PHP works
  - Turn `index.html` into `index.php`
  - Add a line of PHP so that it prints out the word "test"
- Create some sample data
  - Create an `entries.json` file
  - In it, put an array of entries where each consists of a name and a phone number
  - Validate your JSON with (JSONLint)[http://www.jsonlint.com]
- Load the sample data
  - Use PHP to read `entries.json` and display it
- Display the entries
  - Make each entry show up on the page like the example (Jenny Jennyson)
- Add a "New Entry" form
  - It should have a field for the name and a field for the phone number
  - It should POST to `index.php`
  - Verify the data is being POSTed correctly using `$_POST`
- Save the new entries
  - Push the POSTed data into the array of entries
  - Overwrite `entries.json` with the new array, making sure to encode it as JSON
- Activate the "delete" buttons
  - These should also POST to `index.php`
  - How can you make PHP differentiate between the POST requests for creating and the POST requests for deleting?
  - This should remove an element from the array of entries and then save the array again
