#Title: jQuery DOM/Validation User Forms Lab

### Assignment:

Sometimes users put in bad data. Clearly, we can validate this on the server level with Ruby on Rails, but that is slow since it requires a request to the server.

We can do it client side with jQuery, allowing the form to be submitted only if the data is correct. Names should have more than 2 characters, ages should be numbers, phone numbers and email addresses should conform to some standard.

Work in groups of two (one group of three if needed) to write the code to ensure that the form will only allow submission to the server if there is valid data. A small amount of regex has already been written for you to help you get started, but you can restructure it any way you'd like.

Do **not** use a plugin for validation.

### Potential Steps:
* Write jQuery to store the appropriate items you will be selecting from the DOM into variables for easy usage.
* Write code to initially hide the errors. Check the HTML to see how to select all the items that are error messages.
* Write jQuery to get values from user inputs
* Write the validateName, validateAge, validatePhone, and validateEmail functions
  * Don't worry if you don't totally understand the Regular Expression code. All of the regular expressions you need have already been provided to you.
* Allow for the form to submit if the data is valid.
* Add clear functionality to get rid of what is being displayed
