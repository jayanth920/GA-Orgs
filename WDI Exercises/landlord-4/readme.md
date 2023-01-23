# Landlord - Sinatra App

**Please time box this assignment to 2 hours**

## Part 4 - Connect Sinatra to the Database

In your main app.rb file, create instance variables that query the Database using active record.

In your views, replace hardcoded html with erb. For example:

```html
<% @apartments.each do |apartment| %>
  <li><%= apartment.address %></li>
<% end %>
```
