## Create more CRUD.

Lets create actions to create, update and delete Products.

#### Create a 'new' action for Products.  

This will return a form that will be used to create a product.  

```
  # IT WILL NOT CREATE A PRODUCT!!!
  # GET /products/new
  def new
    @product = Product.new
  end
```

#### Create a MANUAL route for this 'new' action.  

```
  # HTTP GET Request to get the FORM for creating ONE new product
  get '/products/new', to: 'products#new'
```

_NOTE_: Place this route definition both above and below the route for the product show action. 
 
_What happens, Why?_
 

#### Create a view for the new product form.  

```
touch app/views/products/new.html.erb
```

###### Make a HTML form to create this product.

_Note_: Turn of forgery protection for the HTML form ONLY
In the application_controller.rb 

```
 # protect_from_forgery with: :exception

```

In the app/views/products/new.html.erb.  

```
 <p>Create a new Product </p>

 <form action='/products' method='post'>
   <label> Name
    <input type="text" id="product_name" name="product[name]"></input>
   </label>
   <br>
   <label> Description
    <input type="text" id="product_description" name="product[description]"></i\
nput>
   </label>
   <br>
   <label> Price
     <input type="text" id="product_price" name="product[price]"></input>
   </label>
   <br>
   <input type='submit' value="Add Product"></input>
 </form>
 ```

_Now,fill this in and submit the form._

_The Error is: No route matches [POST] "/products"_  

_Why?_

##### Add the route for this form's post.

In the routes file.   

```
  # HTTP POST Request to create a product. Uses the form fields to create the product.
  post '/products', to: 'products#create'
```

__Still and error__
__Why?__

Create a skeleton create action. To get rid of error.

```
def create
  render text: 'In the create action'
end
```

Change the view to use the Rails form_for helper instead of straight HTML!

```
 <h3>New Product<h3>
  <%= form_for @product do |f| %>
    <%= f.label :name %> <br> 
    <%= f.text_field :name %> 
    <br> 
    <%= f.label :description %> <br> 
    <%= f.text_area :description %> 
    <br> 
    <%= f.label :price %> <br> 
    <%= f.text_field :price %> 
    <br> 
    <%= f.submit %> 
  <% end %>
```

Inspect the form HTML generated here.

#### Implement a the 'create' action


In the products controller 

```
  # POST /products
  def create
    @product = Product.new(params)

    if @product.save
      # It saved, so lets see this new product
      # render :show, status: :created, location: @product
      redirect_to products_path
    else
      # No worky, try again
      render :new
    end
  end

``` 

__OOPs, got this error_
_ActiveModel::ForbiddenAttributesError_

 Rails will NOT let you directly create a new product, directly, from the params hash. We must use "strong params".

See Railscast episode for the why and how.
[Strong Parameters](http://railscasts.com/episodes/371-strong-parameters)  

Add the below as a private method.  

```
  def product_params
    params.require(:product).permit([:name, :description, :price])
  end
```

And use this in the create action.  

```
  # @product = Product.create(params)
  @product = Product.create(product_params)
```

 OK, now we can create products!!

## LAB: Write the code to create a new Song.


## Demo  

#### Implement a the 'update' action


Create an 'edit' action for Products. This will return a form that will be used to update a product.

```
 # to UPDATE a product.
 # IT WILL NOT UPDATE A PRODUCT!!!
 def edit
    @product = Product.find(params[:id])
 end
```

Add the route to GET the form used to update an EXISTING product.  

```
  # HTTP GET Request to get the FORM for updating ONE EXISTING product  
  get '/products/:id/edit', to: 'products#edit', as: 'edit_product'
```

Add a view to generate the FORM used to update an existing product.  

```
touch app/views/products/edit.html.erb
```

Add this to the view.

```
 <h3>Update Product<h3>
   <%= form_for @product do |f| %>
     <%= f.label :name %> <br> 
     <%= f.text_field :name %> 
     <br> 
     <%= f.label :description %> <br> 
     <%= f.text_area :description %> 
     <br> 
     <%= f.label :price %> <br> 
     <%= f.text_field :price %> 
     <br> 
     <%= f.submit %> 
   <% end %>
```
Add a link to the show page that will allow us to update a product.  

```
<%= link_to 'Update', edit_product_path(@product) %> 
```


After going to the form to update the product and submitting we get this error?
_No route matches [PATCH] "/products/1"_

Why?

Create a route to a update action. This will receive the contents/changes made in the form.  

```
  patch '/products/:id', to: 'products#update'
```

#### Add the update action.  

```
  def update
    @product = Product.find(params[:id])
    if @product.update(product_params)
      redirect_to @product, notice: "You have updated the #{product.name}"
    else
      # No worky, try again, show me the form you.
      render :edit
    end
  end

```

## LAB: Write the code to update an existing Song.

## Demo  
  

First lets add a couple of links in the Products index view to show and edit products.  

```
   <li> <%= link_to 'Show', product_path(product) %></li>
   <li> <%= link_to 'Edit', edit_product_path(product) %></li>
```



#### Implement a the 'delete' action

Create a route for the destroy action.  

```
  # HTTP DELETE Request 
  delete '/products/:id', to: 'products#destroy'
```

And we need the destroy action.  

```
  def destroy
    @product = Product.find(params[:id])
    @product.destroy
    redirect_to @products, notice: "You have deleted the product"
  end
```

Finally, lets create a link in the index view to delete a product.

## LAB: Write the code to delete a Song.
