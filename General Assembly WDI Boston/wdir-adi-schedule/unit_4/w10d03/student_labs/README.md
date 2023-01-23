![](/ga_cog.png)

---
Title: Book Catalogue<br>
Type: Lab<br>
Creator: Thom Page<br>
Heavily Modified by: Jerrica Bobadilla

---

# Book Catalogue

![](https://cdn-images-1.medium.com/max/1024/1*YLlZ96J3p8GFkIh1USVMzg.jpeg)

## Activity

Your friend had an idea for a startup and has asked you to make a simple prototype for the backend of this app. So far, all your friend has told you is the basic gist: it will be an app where users can catalogue what books they've read. They've also told you what info they want users to be able to add for books. Given that, let's try making an API!

### What We Know

##### Books Model

  - title
  - author
  - genre
  - publisher
  - date published

##### Users Model

  - username
  - password

> :books: It's up to you what data type each one is!

##### User Stories  

1. As a user, I can create an account
1. As a user, I can track books that I've read onto my account
1. As a user, I can see all books and what user they belong to
1. As a user, I can see an individual book's info and see what user they belong to
1. As a user, I can delete a book from my list

> :books: Remember you're making an API, so we have no front-end to test our routes -- use Postman to test as you go!
##### Leading Questions to Think About

1. We can see that we're going to have _two models_ that will have a _one-to-many_ relationship:
    - What models will you need?
    - What _is_ the one-to-many relationship between the two? (i.e. do books have many users or vice versa?)
    - Since there's a one-to-many relationship between the models, which one will need a foreign key column?
1. What controllers will you need?
1. What routes do you want your API to have?
1. What actions will your controller need, given your routes?

> :books: Start building your API once you're able to answer these questions!

## Bonus: Seeding Data

There's a Ruby gem called [faker](https://github.com/stympy/faker) that you can use to seed your database without having to fill out fake information yourself! Let's try using it to create some books.

### Setting Up the Faker Gem

1. In your Gemfile, add `faker` like so:

![](https://i.imgur.com/Vxqxcgs.png)

> :books: What command do you use to install the gems in the Gemfile? Whatever that command is, run it now!

### Seeding Using Faker

1. In your `db/seeds.rb` file, let's seed 100 books with faker.
1. To start, let's make a loop that runs 100 times

    ![](https://i.imgur.com/8YEIS0H.png)

1. Now, let's actually add some data inside the loop

    ![](https://i.imgur.com/TOSu8lS.png)

1. Then, let's use Faker to add the data so that it's different every time the loop runs!

    ![](https://i.imgur.com/7hZs4Up.png)

    > :books: Faker has other fake generators you can use aside from `Faker::Book` (e.g. `Faker::Hipster`) take a look at the [documentation](https://github.com/stympy/faker) if you want to see what else is available to use

1. :exclamation: Watch out! Remember that our books have a relationship with users -- should there be something else you need to include in your seed data as well, outside of the book information?
    - Tip: Just make all 100 books belong to one user

### Setting Up Rails to Seed the Right Database

1. If you try running the seed command `rails db:seed` and get an error saying your database doesn't exist -- let's fix that!
1. To tell rails what database you're using, go to the `config/database.yml` file
1. Under `development`, change the `database` to match the name of your database, for example:

![](https://i.imgur.com/HaM6Tau.png)

1. Now, once you're sure your seed data is correct and your database is matching, save the file and run the seed using the command: `rails db:seed`
1. Check out your index route, you should see a bunch of seeded books now!
