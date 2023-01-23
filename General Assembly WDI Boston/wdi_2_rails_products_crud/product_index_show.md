## Simple Products application.

We will create a simple app that will show all the products and one product.

The objective of this lesson is to become familiar with:  
* Rails routes  
* Controllers  
* Actions  
* Views, ERB templates  
* The render method  
* A Layout  

A Product will have a __name__, __description__ and __price__. 

## Show me all the products.
*Go to http://localhost:3000/products*

You should get an error:  
*No route matches [GET] "/products"*  

#### Create a Route for the Product index action.  

Need to add a route for the ProductController's index action.  

In config/routes.rb 

```
  # Maps the URL to a controller#action
  get '/products', to: 'products#index'

```


## Show all the products.
*Go to http://localhost:3000/products*

You'll get an error:  
*uninitialized constant ProductsController*  

This says that it can NOT find the Products controller class. **Because we haven't created it yet**

#### Create a Products Controller with an index action.  

```
$ touch app/controllers/products_controller.rb
```


#### Create a Product Controller.  

In app/controller/products_controller.rb  

```
class ProductsController < ApplicationController

  def index
    render plain: "Yo, iza product dude"
  end
end
```

**Happy Days**. We have a something coming back to the Browser.

Here we're using the render method to return some plain text.

Remove the render line and try viewing the products again:

```
class ProductsController < ApplicationController

  def index

  end
end
```
__Go to http://localhost:3000/products__  
You should get a 'Template is missing' error.

The problem here is that **by convention** after the action has completed it will attempt to **render** a view template if the action doesn't explicitly call the **render** method.

Rails will look in a specific directory for this view template. ** By Convention**, It will look for **app/views/\<plural resource name\>/\<action name\>.html.erb**. 

You need to create this view template in app/views/products/index.html.erb.

#### Create a view template for the Products index action. 

```
mkdir app/views/products
touch app/views/products/index.html.erb
```

Add some text into this index view the goto http://localhost:3000  

```
  <h3>Hello</h3>
  <p>
   from the index.html.erb view.
  </p> 
  <p>
  I got here via the controller: product, action: index
  </p>
```

**YAAAY, WE HAVE THE ABOVE TEXT SHOWING UP IN BROWSER**


### Review

Rails is a Model View Controller (MVC) Framework. MVC is a very common way of structuring applications. 

We have seen:  
* Controller. The ProductsController.  
* View. The index.html.erb implementes the view.  

Next we see the Model.

### Lets draw what is going on here?

Yep, on the whiteboard.  

### But this is only showing Static HTML?

This is all good but we are only showing *Static* HTML. It's never changes. Boohoo.


What we want is a dynamic site that changes as the *data* kept in the DB changes. 

*Won't that be fun? Yes, exceedingly so you say in joyous harmony.*


#### Create a Product model.

```
rails generate model Product name description:text price:decimal
```
> <h3>Rails Generators</h3>
> We are using a Rails generator here. There are quite a few Rails generators. To see them all:  
> ```rails generate```
>
> Here we are using the Rails model generator to generate a migration, model and test.



This will generate the following files:  
  
```
invoke  active_record
      create    db/migrate/20150122193402_create_products.rb
      create    app/models/product.rb
      invoke    rspec
      create      spec/models/product_spec.rb

```

* The migration file. This will contain contain Ruby code to create a products table in the DB with 3 fields.
* A Rails **model** file. This is the Model in MVC.
* A RSpec files used to test this Product model.

### Let the controller retrieve all the products.

Add this to the index action.  

```
  # Create an instance variable, @products, that will contain an
    "Array" of all the products.
  @products = Product.all
```

In the index view add.  

```
 <%= pluralize(@products.count, 'Product') %>
 <ul>
   <% @products.each do |product| %>
     <li>Product <%=product.name%>, price is <%= number_to_currency(product.price) %></li>
   <% end %> 
 </ul>
```

This will iterate over all of the products show each one's name and price.
http://localhost:3000/products

## Show all the products.
*Go to http://localhost:3000/products*


**Oops ** we get this error:  
*ActiveRecord::PendingMigrationError*

The problem here is we have not created products **IN FACT** the DB has absolutely no notion of products.

### Create a Products table in the DB.

```
rake db:migrate
```

This rake command will run all the migrations that have NOT already be run. These migrations are implement by Ruby code and they create DB tables.

The Ruby in each migration files will be translated to SQL Data Definition Language (DDL). 

This SQL DDL will then be run to Create/Drop/Modify tables in the DB. 

> <h3>Rake</h3>
> Rake is a command line utility that is installed with Rails. It is used
> for many tasks in Rails. 
> ```rake -D``` will show you all the Rake commands in Rails.
>
> Go ahead, run rake -D or rake -T


##### Open up the db/schema.rb file.
This was generated by the migrations. It represents the DB schema that was created by SQL DDL. This will change as we run migrations over time.



### Seed, pre-populate the DB.

In db/seed.rb:  

```
puts 'Removing all existing products'
Product.delete_all

product_count = 23
1.upto(product_count) do |i|
  puts "Creating product named \'Product #{i}\'"
  Product.create!(name: "Product #{i}", description: "Description #{i}",  price: (rand(100) + (rand(100)/100.to_f).round(2)))
end


```

## LAB: Show all Songs.

Pretty much like the above. Create a model, seed songs and show all songs.

A Song will have a title, artist, duration (seconds) and price. 


## Demo

#### Create an action that will show ONE product.

Create a route in the routes file.  

```
get '/products/:id', to: 'product#show'
```

Add a show action to the products controller.  

```
def show
    @product = Product.find(params[:id])
end
```

Add a binding.pry in the show action and look at the params hash.


1. How is this used in the show action?
2. How does the new entry in the params hash relate to the route for this show view?


Oops, add a show view.

```
Product Name: <%= @product.name%>, Description: <%= @product.description %>, Price: <%= number_to_currency(@product.price) %>
```


#### Add show view to show off the product.

## LAB: Show one Song.

Pretty much like the above.

## Demo  

#### Look at the layout file. 

1. Where is it?  
2. What does it do it?   

Add this to the layout in the body tag.  


```
 <h3>Honest Tom's Products</h3>
```


####  What is the yield in the layout file?

The <%= yield %> in the layout will be replaced by the output generated by the view.



