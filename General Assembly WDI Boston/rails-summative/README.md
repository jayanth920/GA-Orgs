![General Assembly Logo](http://i.imgur.com/ke8USTq.png)

## Tying It All Together, Part 1 :: Building an Rails App From (Almost) Scratch
This week, you've begun learning about the different components of a Rails application - let's see how they all work together to produce a working application!

### The Mission : A Sales Management App

Honest Tom runs a used car business in Quincy, and he needs an application that will allow him to keep track of every sale he and his salespeople make. For now the front-end can be very simple, since he'll be bringing in a specialist to fine-tune the UI.

We're going to build this app together; then, in your squads, you will each build your own application based on a similar pattern!

### Planning and Data Modeling
Before we ever set hands to keyboard, the first thing we need to do is some planning. In particular, we should think about what kinds of data our application needs to store and manage.

Based on speaking with Honest Tom about his business needs, we've learned that each sale record needs to have
* The make, model, year, and condition (e.g. "excellent", "good", "fair", "damaged") of the car sold.
* The date and time of the sale.
* The name of the salesperson.
* The sale price.

Based on this description, our app only has one kind of resource, "Sales". For now, we're not sure what the front-end will need to be able to do, so for now we'll plan to make all standard CRUD behaviors available through their [conventional routes](http://guides.rubyonrails.org/v2.3.11/routing.html#restful-routing-the-rails-default); if and when we get new information from the UI specialist, we can change the app to meet their specs.

#### Your Turn :: Planning
It seems that we need a table, `sales`, to keep track of all of our sales. Based on what you've learned about models and Postgres over the last few days, how might we want to structure the `sales` table? What columns will we need, and what types of data should each column be?

In your squads, take five minutes to discuss some options; we'll bring it back to the class for some open discussion about pros and cons.

### Building The Back End [Code Along]
Suppose that we came out of our planning with the following structure for our table:

| Column | Type |
| :----- | :--- |
| id | INTEGER |
| car_make | CHARACTER VARYING |
| car_model | CHARACTER VARYING |
| car_year | INTEGER |
| car_condition | CHARACTER VARYING |
| salesperson_name | CHARACTER VARYING |
| sale_price | DECIMAL |
| updated_at | TIMESTAMP WITHOUT TIME ZONE |
| created_at | TIMESTAMP WITHOUT TIME ZONE |

Now that we've mapped out how we want our data to be structured, let's start building our back-end.

#### Step 1 : Make a new Rails app.

`rails new sales_app_api -T --database=postgresql`

`rake db:create`

#### Step 2 : Create models + migrations.

Our app only has one resource, "Sales", so we just need one table (`sales`) and one model (`Sale`). Since our model will depend on the table existing, let's make the table first.

`rails g migration CreateSales` will create a new migration file with the boilerplate for creating a new table in Postgres. It should be found at `sales_app_api/db/migrate/YYYYMMDDHHMMSS_create_sales.rb`, and look something like this:

```ruby
class CreateSales < ActiveRecord::Migration
  def change
    create_table :sales do |t|
    end
  end
end
```

If we fill this in with the data types we laid out earlier, we get

```ruby
class CreateSales < ActiveRecord::Migration
  def change
    create_table :sales do |t|
      t.string :car_make
      t.string :car_model
      t.integer :car_year
      t.string :car_condition
      t.string :salesperson_name
      t.decimal :sale_price
      t.timestamps null: false # This last one will take care of `updated_at` and `created_at`
    end
  end
end
```

Run `rake db:migrate` to actually execute your migration; when it's done, take a look at `schema.rb`. Does it look like we expect? What if we open up the database using `rails db`? Do those tables look right?

Now that we've created our table, let's make a model so that we can easily access and manipulate the table from within Rails. Inside `sales_app_api/app/models`, create a new file called `sale.rb`, with the following code inside:

```ruby
class Sale < ActiveRecord::Base
end
```

The `Sale` class will inherit a number of methods from the `Base` class inside the `ActiveRecord` module, both private (internal methods for communicating with the database) and public-facing (such as `.create!` and `.all`), so we don't actually need to add any of our own code (at least, not yet) in order to get it to work.

To test out our new model, let's open up the Rails console (`rails console` or `rails c`) and run the following code:

```ruby
s = Sale.new
s.car_make, s.car_model, s.car_year, s.car_condition = "Toyota", "Camry", 2007, "fair"
s.salesperson_name, s.sale_price = "Matt", 7000.00
```

If we type `s` into the console, it should evaluate to:

```ruby
=> #<Sale id: nil, car_make: "Toyota", car_model: "Camry", car_year: 2007, car_condition: "fair", salesperson_name: "Matt", sale_price: #<BigDecimal:7fcd94c27dd8,'0.7E4',9(36)>, created_at: nil, updated_at: nil>
```

Based on this, our model appears to have initialized correctly - now we just need to see if it will save to the database. If we run `s.save`, we should get output like this:

```rails
(1.6ms)  BEGIN
SQL (3.3ms)  INSERT INTO "sales" ("car_make", "car_model", "car_year", "car_condition", "salesperson_name", "sale_price", "created_at", "updated_at") VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING "id"  [["car_make", "Toyota"], ["car_model", "Camry"], ["car_year", 2007], ["car_condition", "fair"], ["salesperson_name", "Matt"], ["sale_price", "7000.0"], ["created_at", "2015-10-28 09:55:47.705470"], ["updated_at", "2015-10-28 09:55:47.705470"]]
(3.0ms)  COMMIT
=> true
```

It looks like the change was made successfully. However, it might still be a good idea to look at the data directly using `rails db`. If we open up the `sales` table using `SELECT, we should now see a row like this.

```Postgres
  id | car_make | car_model | car_year | car_condition | salesperson_name | sale_price |        created_at         |        updated_at         
---+----------+-----------+----------+---------------+------------------+------------+---------------------------+---------------------------
...| ...      | ...       |      ... | ...           | ...              |        ... | ...                       | ...                      
 8 | Toyota   | Camry     |     2007 | fair          | Matt             |     7000.0 | 2015-10-28 09:55:47.70547 | 2015-10-28 09:55:47.70547
```

Great! It seems like our `Sale` model is working correctly.

#### Step 3 : Create controllers and routes.

Now that we have a model for our resource, let's make a controller so that we can handle sale-related requests. In `sales_app_api/app/controllers`, we'll create a new file called `sales_controller.rb`; there, we'll define a new class called `SalesController`.

```ruby
class SalesController < ApplicationController
end
```

Next, we'll add methods to the class that correspond to the standard CRUD (**create**, **read**, **update**, **destroy**) actions.

```ruby
class SalesController < ApplicationController
  def index   # i.e. read *all* sales
  end

  def show    # i.e. read *one* sale
  end

  def create
  end

  def update
  end

  def destroy
  end
end
```

Then, we'll write some routes for these controller methods into `sales_app_api/config/routes.rb`, the configuration file for our router. We'll try to follow RESTful conventions for this.

```ruby
get 'sales' => 'sales#index'
get 'sales/:id' => 'sales#show'
post 'sales' => 'sales#create'
patch 'sales/:id' => 'sales#update'
delete 'sales/:id' => 'sales#destroy'
```

> With each request that comes in, Rails creates a hash called 'params' to hold information that's been stripped out of the request; this hash is available to all controllers so that they can operate on the data inside. By specifying `:id` here as part of those routes (in place of a value; e.g. '3' in `/sales/3`), we are instructing Rails to add a new key-value pair to `params` (in this case, `:id => 3`).

Coming back to our controller, we still need to fill in the bodies of each of our methods.

* For `index`, what we want the server to send back a JSON string of all of the Sales we have on record. To do that, we might write

  ```ruby
  def index   # i.e. read *all* sales
    render json: Sale.all
  end
  ```

* For `show`, we again want the server to send back a JSON string, this time for one single Sale record. We can use the `Sale.find` method to look up a specific sale by its ID, using the `params` hash.

  ```ruby
  def show    # i.e. read *one* sale
    render json: Sale.find(params[:id])
  end
  ```

* Skipping down a little, we also need to look up a particular Sale record for `destroy`, so that method will look a lot like `show`; however instead of rendering JSON, this method will simply destroy the record it finds.

  ```ruby
  def destroy
    sale = Sale.find(params[:id])
    sale.destroy
  end
  ```

---------------  
>Before we look at `create` and `update`, let's deviate from our path for a minute and set up some **strong parameters** for our `SalesController`. By default, if you pass the `params` hash into `Sale.create`, Rails will attempt to shoehorn every property specified into a new instance of the model. Since there is no limit to how many parameters (or what kinds of parameters) may be included within a request, this presents a big security risk. As of Rails 4, the suggested way to address this issue is through the use of the 'strong parameters' methods `require` and `permit`, which take your params hash and **transform it into a new hash** that meets certain specifications.
>
Strong parameters are usually incorporated into a class through a private method that can be called by both `create` and `update`. Here's how such a method might look for this particular controller.
>
```ruby
private
def sale_params
  params.require(:sale).permit(:car_make, :car_model, :car_year, :car_condition, :salesperson_name, :sale_price)
end
```
---------------

Assuming that we have a `sale_params` method set up to give us 'strong params', here's how our `create` and `update` methods might look.

* For `create`, we want the model to create a new instance of the model, using the strong params as an argument. If we can successfully save this new Sale to the database, we should send back some kind of positive confirmation; otherwise, we should send back the errors we get back from the database.

  ```ruby
  def create
    sale = Sale.create(sale_params)
    if sale.save
      render json: sale # Send back the newly created Sale, as a JSON.
    else
      render json: sale.errors, status: :unprocessable_entity # Send back errors.
    end
  end
  ```

* `update` looks almost identical to `create`; the biggest difference is that _with `update`, we need to start out by finding an element with the given particular id_.

  ```ruby
  def update
    sale = Sale.find(params[:id])
    if sale.update(sale_params)
      sale.save
      render json: sale  # Send back the newly updated Sale.
    else
      render json: sale.errors, status: :unprocessable_entity # Send back errors.
    end
  end
  ```

By the end, our controller should look like this.

```ruby
class SalesController < ApplicationController

  def index   # i.e. read *all* sales
    render json: Sale.all
  end

  def show    # i.e. read *one* sale
    render json: Sale.find(params[:id])
  end

  def create
    sale = Sale.create(sale_params)
    if sale.save
      render json: sale # Send back the newly created Sale, as a JSON.
    else
      render json: sale.errors, status: :unprocessable_entity # Send back errors.
    end
  end

  def update
    sale = Sale.find(params[:id])
    if sale.update(sale_params)
      sale.save
      render json: sale  # Send back the newly updated Sale.
    else
      render json: sale.errors, status: :unprocessable_entity # Send back errors.
    end
  end

  def destroy
    sale = Sale.find(params[:id])
    sale.destroy
  end

  private
  def sale_params
    params.require(:sale).permit(:car_make, :car_model, :car_year, :car_condition, :salesperson_name, :sale_price)
  end

end
```

Rather than taking this on faith, let's actually fire up our server and test it!  Before we do, though, we need to do a little setup.

1. Go to `sales_app_api/app/controllers/application_controller.rb` and comment out the line `protect_from_forgery with: :exception`
2. Add `gem 'rack-cors', :require => 'rack/cors'` to your Gemfile and run `bundle install`

We'll be using a tool called [Postman](https://chrome.google.com/webstore/detail/postman/fhbjgbiflinjbdggehcddcbncdddomop) to do our testing.
* What happens if we try to send a POST to `localhost:3000/sales`?
* A PATCH to `localhost:3000/sales/1`?
* What if our parameters are set up incorrectly? What happens?

If the API behaves as expected, congratulations - We've just finished building our first end-to-end Rails API!

<!-- ### Building The Front End

Now that we have a working API, our job is more than halfway done; per Honest Tom's directions, we only need a basic front-end, since it will be fleshed out later by the UI expert. Let's make a rudimentary -->

## Pro-Tip
- Here are some cool gems you can include in the `development` section of your Gemfile to make your life easier.
* **pry-rails** : Lets you use pry within Rails.
* **hirb** : Renders the output of your models as tables within the Rails console.
* **rename** : Allows you to easily rename your entire Rails project.
