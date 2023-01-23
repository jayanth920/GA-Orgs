# Resque Lab/Homework

Fork and clone this repo. It will be turned in and graded as a homework, but ideally you'll be done with it before the end of class so you can work on your portfolio site.

Create a "Guestbook" application that will allow users to input their name/email address and a brief note that will be displayed on an index page. When the user submits the post, they should be sent an email thanking them for their post.

### Points for assessment

* 1 - Keep passwords/credentials out of version control and use Sendgrid on Heroku
* 1 - Email can be sent to a user thanking them for signing the guestbook.
* 1 - This email is sent using a background task with Resque
* 1 - Your model, views and controller code is appropriate done
* 1 - FREE POINT BY ALEX

### Bonus 1

Add the concept of signed in users with Devise. Configure Devise to do password resets and account confirmations using the email configuration. Don't worry about these being background tasks, but if you can figure that out then that's awesome.

### Bonus 2

Figure out how to use Resque Scheduler or similar to send the user an email 24 hours after they sign up for an account that will thank them for signing up. If a user hasn't come back in 7 days, then it should send them an email begging them to return.
