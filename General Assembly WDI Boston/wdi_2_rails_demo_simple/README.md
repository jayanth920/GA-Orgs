![General Assembly Logo](http://i.imgur.com/ke8USTq.png)


## Objectives

* Install the latest version of Rails
* Create a mimimal Rails app.
* Initialize app and implement the index and show actions.
* Know the flow of a HTTP Request and Response as it weedles it's way through Rails. *Yes, I said weedles.*


### Relax, really, it'll be OK.

*Now, you are NOT going to get this first 11.67 times you do it. But, don't freak out It'll be OK.* **No, really it will be just fine.**

*Like a parasitic alien in your GI track this copious info will eat away at you quietly and will burst forth from your subconcious, or some other bursting part, when you least suspect it.*

*I know, it happened to me many years ago during a waking nightmare I now refer to as a job interview.*

**From here on, ignore all text in italics. I mean really, don't read them, at all. Like never. Please, I'll like you if you don't. OK.**

# DO THIS!!!

### Install Rails 

This will install the lastest version of Rails, version 4.2. 
	
*May take a while as Rails depends on lots of Ruby Gems. Feel free to hum-a-long.*  

```
gem install rails 
```
	
### Take a look at the *rails* command.    

```rails --help```
	
*Fascinating, huh? Call ya muther, she'll wanna know bout this.*
	
### Generate a new Rails app, named *products_app*.  

```rails new products_app --database=postgresql```
	
**Wow**, thats a lot of files we've created. Lets take a look at the directory and file layout of a Rails app.
	
*Here is  where I hand wave and firehose ya'll. No worries, I'll wake you at the end.*  
	
### Fire up this Rails app and take a look, go to http://localhost:3000.

*Ya know, in that browser thing, sitting right there,yep inside that silver box in front of you.*  

Starts rails listening on port 3000.  
```rails server```
	
Oops, says there is no database. We're going to have to create and initialize a DB.  
	
### Create a DB.  

```rake db:create```
	
rake is your friend, it's a nice goblin of sorts with spells that are simply amazing and amazingly simple. We'll learn more about Rake later, **promise**.
	
*Rake, somewhat, descended from twisted phrases of grandaddy'o [Make](http://en.wikipedia.org/wiki/Make_%28software%29)* 
	
*rake was created by Jim Wierich, an amazing guy that contributed so much to the Ruby community. RIP Jim. Hey, go watch a couple of Jim's videos on [confreaks](http://confreaks.com/presenters/24-jim-weirich)*
	
### Restart Rails again and go to http://localhost:3000.   
	
**Yes, Yes, Yes!**, we have a Rails app running on the local machine listening for HTTP Requests on port 3000.
	
*Now go home. No really, like now, bye.*
	
### Lets look at our Products. Go to http://localhost:3000/products.

Huh, no products. **Oh we didn't create any product, oops**. We'll thats a problem we're gonna ignore for now.
	
Lets follow the error message.
	
"No route matches [GET] "/products"
	
We're sending a HTTP Request with a resource path of *products*. This means we want to see **all the products.** But, the Rails app doesn't know how to process the path */products*. 
	
Let's create a route that will be able to handle this path.
	
**Kinda wish there was an 'R' in MVC. An 'R' for Router, it's pretty important ya know**
	
* Open the config/routes.rb file and add.

	get 'products', to: 'products#index'
	
	This will say that when I have a resource path of 'products' in a HTTP GET Request the go to the Products controller and invoke the index action.
		
### OK, now it seems that the routing problem is gone. The rails app at least has a route for products. 

But, there is no Products controller. Let's create one.
	
*Now you see this is MVC and there is no way it's gonna work without the C in MVC, that's right, you got no Controller then you got no worky*
	
### Create a Products Controller.

```
touch app/controllers/products_controller.rb
```

```
 # Products Controller class.
 # All Controllers are subclasses of the ApplicationController
 class ProductsController < ApplicationController

 # The index action. This will be invoked to view all the products.
 def index
 end

end
```
	
*What, ya like saying this guy's pissing me off writing sthuff like that, hows me supposed to know what that is. What is me, a Rails dev?*
	
**Houston, we have a controller. Yep, the 'C' in MVC!!!**

### Let's see all the Products now. 
Go to http://localhost:3000/products.

Ooops, now we're seeing another problem. Bummer.
	
**Template is missing**
	
Yep, the view template file is missing. 

What's supposed to happen here is that:  

* Router recieves HTTP Request and looks for a resource path that it knows about.  
* Finds a matching resource path, */products*.  
* Forwards the request to the ProductsController#index action.  
* Forwards the request to a view. This view will generate HTML to show all products.  

**We aint got one, a view that is**  

**How's it find a view?**  

We'll it using a convention. **Rails has lots of conventions**. Look for view in the app/views/**resource name**/**action name.html.erb**. 

In this case look for the view in **app/views/products/index.html.erb**

**What's this .erb tuff?**

ERB is a template language and an erb file will have ERB directives, HTML and Ruby that will generate a view.  

**Create the view.**  
* Create a directory for all the product views in the app/views direcotry.  Name that directory 'products'  
* Create a file index.html.erb in the app/view/products directory.  
* Add some text, any non-offensive text really, to the index.html file.  
	
** Now we have a view. Yep the 'V' in MVC.**
	
	
### Cool, but we don't see any products?

*All I want to say at this point is HOLD ON. IT'S OK TO SCREAM, CLAW FLESH and KNASH TEETH in harmony with other human victims in the immediate vicinity.*

### Let's populate the DB
with some products. First we'll have to create a table in the DB for the products.
	
	```
	```
	
*Did you notice that there is a hunk of code with no code above? In fact it's even missing the hunk.*
	
### Create a Rails migration for products.

This will generate a file that can be used to create a Products table.

```rails generate migration CreateProducts name description price:decimal```

```rake db:migrate```
	
	
```psql --database products_app_development```  
    
	
### OK, now we have a products table in the db. 

We need a Rails model to access the data in this products table.

```
touch app/models/products.rb
```

```
class Product < ActiveRecord::Base
end
```
	
**We have a model. Yep, the 'M' in MVC!!!**
	
**We is MVC'd dude, nice huh?**
	
*Hang on a minute, I've gotta go take my meds. You'll be glad I did, but I won't know the difference.*
	
	
###Create a bunch of Products in the DB.

in db/seeds.rb:  
	
```
1.upto(5) do |num|
  Product.create(name: "Product_#{num}", price: num*3.99)
end
```

```
rake db:seed
```

You can seed, pre-populate, your DB by creating ActiveRecord models (More later).

**Much more later really. No worries if you don't get this yet.**
	
*Think I'm nicer when I'm medicated? Some people do. But, they really don't know when I am under the influence.*
	

### Get all the Products from the DB.

In the Products controller retrieve all the products from the DB:  
	
```
class ProductsController < ApplicationController
  def index
    @products = Product.all
  end
end
```

### Show all the Products.

In the app/views/products/index.html.erb:  
	
```
<h2>Products</h2>
  <ul>
   <% @products.each do |product| %>
	<li><%= product.name %></li>
    <% end %>
</ul>
```


**Haha, and you thought that was fun, RIGHT**

# NOW DO NOTHING, Please.
	
	


	
	