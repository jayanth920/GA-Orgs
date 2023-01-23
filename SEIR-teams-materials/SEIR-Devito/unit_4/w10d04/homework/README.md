[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly)

# Glitch in The Office

<img src="https://imgur.com/swTbVqq.gif">

As a new hire at Dunder Mifflin (because for some reason they needed a developer), your first task on the job is: to fix up the last hire's mistakes. You're given someone's super buggy rails code and it's up to you to get it fixed up and running so that the company can easier track who's won what Dundie Awards!

#### Learning Objectives

- Reading errors in Rails
- Getting comfortable with debugging broken code

#### Prerequisites

- Rails
- Ruby
- SQL

---

## Getting Started

1. In today's homework folder, we've given you the starter code that you're going to fix and expand upon in a folder called `dunder_mifflin`. Do all your work inside this folder.

1. Get your environment all set up.

      - Make sure to get postgres running
      - Run the rails app
      - Open `localhost:3000` in your browswer

         - 👾 **GLITCH?** Do you get a NoDatabase error? Create a database using `rails db:create`

      - Once you've created a database, open up a postgres shell and connect to the newly created `dunder_mifflin_development` database:
            ```
            psql postgres
            \c dunder_mifflin_development
            ```
      - Create a table and insert some data:

           ```
           CREATE TABLE staff (id SERIAL, name VARCHAR(25), position VARCHAR(140), age INT);
           INSERT INTO staff (name, position, age) VALUES ('Michael Scott', 'Scranton Regional Manager', 41);
           INSERT INTO staff (name, position, age) VALUES ('Dwight Schrute', 'Assistant to the Regional Manager', 31);
           INSERT INTO staff (name, position, age) VALUES ('Jim Halpert', 'Sales Rep', 27);
           INSERT INTO staff (name, position, age) VALUES ('Pam Beesly', 'Receptionist', 26);
           INSERT INTO staff (name, position, age) VALUES ('Stanley Hudson', 'Sales Rep', 47);
           INSERT INTO staff (name, position, age) VALUES ('Kelly Kapoor', 'Customer Service Rep', 25);
           INSERT INTO staff (name, position, age) VALUES ('Angela Martin', 'Senior Accountant', 34);
           INSERT INTO staff (name, position, age) VALUES ('Phyllis Vance', 'Sales Rep', 41);
           INSERT INTO staff (name, position, age) VALUES ('Toby Flenderson', 'Human Resources Rep', 38);
           INSERT INTO staff (name, position, age) VALUES ('Ryan Howard', 'Temp', 26);
           SELECT * FROM staff;
           ```

    - Check `localhost:3000` again, you should now be connected to Rails!

      ![](https://i.imgur.com/hvpgsJR.png)

## Time to Fix Some Errors!

Now that rails and our database is all up and running, let's go ahead and see what exactly the last hire did wrong...

1. Let's start with checking out what routes they made by using the command `rails routes` in terminal so we know what routes we need to test!

      ![](https://i.imgur.com/ipdeVC1.png)

1. Alright, sweet looks like they set up full CRUD routes and the URI pattern generally uses `/staff`, so let's just try out the index route first by going to `localhost:3000/staff` in the browser

      - 👾 **GLITCH?** Uh oh, not off to a great start, looks like the index route already throws us an error...

      - <details><summary>See the error</summary> <img src="https://i.imgur.com/Mi8tkmy.png"/> </details>
      - Hint: Take a look at what controller the error is looking for and compare it to what the other routes are using as a controller!

1. Sweet, once you fix that and check your index route again, you ...

      - 👾 **GLITCH** Well, you get another error. At least it's a different error though!
      - <details><summary>See the error</summary> <img src="https://i.imgur.com/77Y0rfj.png"/> </details>
      - Hm, this time when you compare the name of the controller it's looking for (`StaffController`) versus the routes (`staff#index`) it looks fine... So what could it be?
      - Hint: Since the `routes.rb` looks fine now, look elsewhere -- we know it's something wrong with the StaffController, so take a look at the `app/controller` folder. What's the pluralization of the word staff?

1. Once that's fixed, check the index route _again_ and...

      - 👾 **GLITCH** Argh, _another_ error! Again, at least it's a different error..
      - <details><summary>See the error</summary> <img src="https://i.imgur.com/3FEUgoc.png"/> </details>
      - This is a strange error, but read it closely! It says there's an undefined method for our StaffController called `make_response!`
      - Hint: This sounds like a method that should be built into Rails already and that we can just make our StaffController _inherit_ from another controller

1. Okay! Third time's the charm right? Once you fix that and check the index route again...

      - 👾 **GLITCH** Sigh. Disappointed but not surprised, you get another error... It's a different one yet again, though, so yay, progress?
      - <details><summary>See the error</summary> <img src="https://i.imgur.com/PuE4GPQ.png"/> </details>
      - Hint: Not much to hint here, this error pretty much points you directly to the problem!

1. One more index route check -- and it works! Finally, we can see all our fellow Dunder Mifflin employees and can move on to testing the next route: the show route. Let's check it out by taking a closer look at Dwight. In your browser, go to `localhost:3000/staff/2`

      - 👾 **GLITCH** Oh no, our show route isn't working immediately either! Let's take a look at the error...
      - <details><summary>See the error</summary> <img src="https://i.imgur.com/i7rRF0w.png"/> </details>
      - Hint: The error tells us there's no `find` method in our Staff model, so take a closer look at the methods defined in the `app/models/staff.rb` file!

1. Once you fix that and test out your show route again, thankfully it works immediately! Whew, we can move on to the next route already. Let's test out the create route using Postman! Take a look at the routes to see what URL you need to post to and take a look at the table we created earlier to see what values you'll need. Don't forget to use the **raw** Body option when posting!

      - 👾 **GLITCH** Once you send the data, we get an error for our post route as well. Let's take a closer look...
      - <details><summary>See the error</summary> <img src="https://i.imgur.com/i2GiMlE.png"/> </details>
      - Hint: Woops, looks like the previous hire forgot to circumvent some of Ruby's built in security!

1. Alright, once that's fixed and you try posting again...

      - 👾 **GLITCH** We get another error! It's definitely a different one this time though, let's look closer
      - <details><summary>See the error</summary> <img src="https://i.imgur.com/Cm7zqB9.png"/> </details>
      - Hint: Not much to hint here again, the error directs you pretty directly to where you should look!

1. Once you fix that and try posting again, you should be successful! Sweet! Three routes done, two more to go. Let's start with the delete route. Test this route again by using Postman and try deleting the staff member you just created (`localhost:3000/11`)

      - 👾 **GLITCH** Surprise surprise, we get an error. You know the drill by now, let's look closer...
      - <details><summary>See the error</summary> <img src="https://i.imgur.com/qLKo3hk.png"/> </details>
      - Hint: The error shows us that our delete method is expecting an argument, which we definitely tried to do by tacking on the id in the url params like it says to in our routes... So, where do you think you should look next?

1. After you fix that and test your delete route again, it should work perfectly! Just one more route to test out! Test the update route by using Postman again and update the staff member of your choice to have a new position: Assistant to the Assistant Regional Manager.  

      - Well would you look at that, at least the previous hire got _something_ right! The update route should work perfectly on first try, and now the app should have full CRUD fully functional for the staff model!

## Creating a One-to-Many Relationship

1. Now that the app is bug-free, you can actually add more features! Look at you go! The next feature they want is... well, they want the app to be able to keep track of who's won what Dundie Award.

      - In `psql` make sure you're still connected to the `dunder_mifflin_development` database and create a new table:
      ```
      CREATE TABLE dundies (id SERIAL, award VARCHAR(255));
      INSERT INTO dundies (award) VALUES ('Fine Work Award');
      INSERT INTO dundies (award) VALUES ('Jim Halpert Award');
      INSERT INTO dundies (award) VALUES ('Whitest Sneakers Award');
      INSERT INTO dundies (award) VALUES ('Assistant Manager Award');
      ```

1. Now that we want to give staff members awards, we need to alter our table so that each member can have an award. In `psql` while you're still connected to the `dunder_mifflin_development` database, run the following command

      `ALTER TABLE staff ADD COLUMN award_id INT;`

1. For now, instead of going through and updating each staff member with their appropriate award, let's just delete all the data in our staff table by running the following command in `psql` (again, while still in the `dunder_mifflin_development` database):

      `DELETE FROM staff;`

1. Now, let's re-seed our data, but this time with some people having awards! Run:

     ```
     INSERT INTO staff (name, position, age, award_id) VALUES ('Michael Scott', 'Scranton Regional Manager', 41, null);
     INSERT INTO staff (name, position, age, award_id) VALUES ('Dwight Schrute', 'Assistant to the Regional Manager', 31, 4);
     INSERT INTO staff (name, position, age, award_id) VALUES ('Jim Halpert', 'Sales Rep', 27, 2);
     INSERT INTO staff (name, position, age, award_id) VALUES ('Pam Beesly', 'Receptionist', 26, 3);
     INSERT INTO staff (name, position, age, award_id) VALUES ('Stanley Hudson', 'Sales Rep', 47, 1);
     INSERT INTO staff (name, position, age, award_id) VALUES ('Kelly Kapoor', 'Customer Service Rep', 25, null);
     INSERT INTO staff (name, position, age, award_id) VALUES ('Angela Martin', 'Senior Accountant', 34, null);
     INSERT INTO staff (name, position, age, award_id) VALUES ('Phyllis Vance', 'Sales Rep', 41, null);
     INSERT INTO staff (name, position, age, award_id) VALUES ('Toby Flenderson', 'Human Resources Rep', 38, null);
     INSERT INTO staff (name, position, age, award_id) VALUES ('Ryan Howard', 'Temp', 26, null);
     SELECT * FROM staff;
     ```

1. Now that our database is set up again, set up a one-to-many relationship between the staff and dundie models by updating the `staff.rb` model so that anytime you look at the staff's data, you can see what dundie they've won! (You'll just need to update the index and show routes)

      - For example:
          - <details><summary>Staff index route</summary> <img src="https://i.imgur.com/mJpgmO2.png"></details>
          - <details><summary>Staff show route</summary> <img src="https://i.imgur.com/0X1qZY7.png"></details>

## Hungry for More?

1. You'll notice we didn't create a controller or model or set up routes for our Dundies. We only updated our staff model to display the dundie awards information that we hard-seeded into the database. But what if we want to add new dundie awards? Or what if we just want to see a comprehensive list of all the dundie awards by going to `localhost:3000/dundies`?

      - Create a second model: full CRUD for Dundies!

1. To give our staff members awards, we had to drop our data and re-seed. That was fine to do once, but it'd be a hassle to do that every time we want to give someone a new award...

      - Update the update route in the `staff.rb` model so that you can update each staff member with award_id's as an option

## Submission Guidelines

- Create an issue in the classroom repo to submit your homework
- Must be submitted no later than **before the next class at 10 AM Eastern.**

---

*Copyright 2018, General Assembly Space. Licensed under [CC-BY-NC-SA, 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/)*
