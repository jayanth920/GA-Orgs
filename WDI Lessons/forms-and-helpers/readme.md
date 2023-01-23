# Forms and Rails Helpers

## Learning Objectives

- Indentify 3 ways to make HTTP requests using HTML
- Use HTML form elements to get user input
- Read form values using JavaScript
- Use authenticity token to prevent CSRF attacks
- Use strong params to prevent mass assignment attack

## You do: Local Setup

https://github.com/ga-wdi-exercises/rails-forms

## Intro to Forms

Forms are 1 of 2 ways to submit an HTTP request to our website using HTML. (The other is with an anchor tag).

An example form:

```html
<form method="get" action="/">
<!--  ^               ^
      type of HTTP    where to send
      request         the request
 -->
  <label for="search">Search: </label>
<!--      ^id for corresponding form element -->

  <input type="text" name="q" id="search">
<!--     ^ type of   ^ how to     ^ links to
           input       identify     above for=""
                       this form    attribute
                       element
                       on server
-->
  <button type="submit">Search</button>
<!--      ^ buttons submit forms  -->

</form>
```

##  I do: Build a search form

## You do: Doc dive

Count off 1-6

1. [option](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/option) and [select](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select)
1. [textarea](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea) and [input type="hidden"](http://www.echoecho.com/htmlforms07.htm)
1. [input type="text" and type="number" and type="password"](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input)
1. [input type="checkbox"](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input)
1. [input type="radio"](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input)
1. [input type="date"](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input)

Create a simple HTML demo (no ruby in this one!) and answer the following questions:

1. When would you use this?
1. Any related attributes?
1. How do you get the value of the form field using javascript?
1. Slack your code!

## You do: Teach Back

## Break

## I do: form POST

### Authenticity Token

```html
<form action="/cats" method="post">
  <input name="authenticity_token" value="<%= form_authenticity_token %>" type="hidden">
  <input name="kind" type="text" placeholder="kind">
  <input name="image_url" type="text" placeholder="image url">
  <button type="submit">Submit</button>
</form>
```

The authenticity token prevents our applications from being vulnerable to [CSRF attacks](https://www.owasp.org/index.php/Cross-Site_Request_Forgery_(CSRF))

### params hash

```rb
# app/controllers/cats_controller.rb

def create
  Cat.create(kind: params[:kind], image_url: params[:image_url])
  redirect_to :back
end
```

### Strong params review

`strong_params` prevents [mass assignment](https://en.wikipedia.org/wiki/Mass_assignment_vulnerability)

```rb
# app/controllers/cats_controller.rb

def create
  Cat.create(cat_params)
  redirect_to :back
end

private
def cat_params
  params.require(:cat).permit(:kind, :image_url)
end
```

## Intro to helpers

We've already seen rails helpers in a couple of ways:

- `link_to`
  - anchor tag
- `form_for`
  - form tag
- `image_tag`
  - image tag
- path helpers
  - `new_artist_path`
  - `edit_artist_path(@artist)`

Rails helpers allow us to take complexity out of the view and modularize our
HTML generation.

## We do:

Convert create form to use `form_for`

## You do:

add 1 to your previous group number.

Convert HTML to use helper. - http://guides.rubyonrails.org/form_helpers.html

If you're creating a generic form, you can use `form_tag`, e.g.:

```erb
<%= form_tag do %>
  <!-- http://guides.rubyonrails.org/form_helpers.html#a-generic-search-form -->
<% end %>
```

- Slack your code!

### Bonus

- Create a migration for `Cat` to handle your new input
- Submit the form to update db.
- When the page loads, show the saved value.

## Custom Rails helpers

### We do: build an ordinalize helper

```rb
# app/helpers/ordinalize_helper.rb

module OrdinalizeHelper
  def ordinalize int
    if (11..13).include?(int % 100)
       "#{int}th"
     else
       case int % 10
       when 1; "#{int}st"
       when 2; "#{int}nd"
       when 3; "#{int}rd"
       else    "#{int}th"
       end
     end
  end
end
```

And a couple of helpers being used in garnet! https://github.com/ga-dc/garnet/blob/master/app/helpers/application_helper.rb
