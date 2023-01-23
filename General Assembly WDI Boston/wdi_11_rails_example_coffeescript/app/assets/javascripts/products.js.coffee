# Place all the behaviors and hooks related to the matching controller here.
# All this logic will automatically be available in application.js.
# You can use CoffeeScript in this file: http://coffeescript.org/
class Product
  constructor: (@name, @description, @price)->
    console.log "Created a product with a name #{@name}"
    Product.productStore(@)

  hideProduct: (@id) ->
    $("#{@id}").hide()

  insert: ->
    productHTML = """
                  <tr id=product-#{Product.productCount}>
                    <td>#{@name}</td>
                    <td>#{@description}</td>
                    <td>#{@price}</td>
                  </tr>
                  """
    $('#products').append(productHTML)

  # class method that will store all the products created with
  # Product coffeescript class
  @productStore: (product)->
    @allProducts ||= []
    @allProducts.push product
    @productCount = @allProducts.length

$ ->
  productNew = new Product("Coat", "Big ugly coat", "1.33")
  productNew.insert()
  productAnother = new Product("Shoes", "With nasty smells", "2.01")
  productAnother.insert()