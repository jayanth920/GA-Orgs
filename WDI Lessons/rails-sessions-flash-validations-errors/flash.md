# Flashes / Flash Messages

## Framing (5 minutes, 0:55)

Let's say that we want to notify the user if an artist is successfully created in Tunr.  

<details>
  <summary><strong>Based on what we've learned so far, how could you show the user a message
  that their artist was successfully created?</strong></summary>

  The easiest way would be to just create an instance variable `@message`. In `artists_controller.rb`...

  ```rb
  def create
    @artist = Artist.create!(artist_params)
    @message = "Artist was created."
    redirect_to @artist
  end
  ```

  Then, in `app/views/artist/show.html.erb`...

  ```html
  Message: <%= @message %>
  ```

</details>

<br/>

<details>
  <summary><strong>Try it! Why doesn't this work?</strong></summary>

  Context. We redirect to a different page. A redirect is a separate GET
  request. Instance variables exist only on *one* request. They don't persist
  across requests.

</details>

<br/>

<details>
  <summary><strong>We've seen two main ways of storing user data so it's available from page to
  page, and request to request. What are they?</strong></summary>

  We could store alerts in the database, but that's hugely inefficient. A
  better idea would be to use temporary session variables, which you just
  learned about.

</details>

<br/>

Rails has a built-in way of storing messages in sessions, called **flash**.

### Flash Lifecycle (5 minutes, 1:00)

Flashes are brief. `flash` is a hash that's created on one request,
available through the next, then destroyed. They exist only for a single
request cycle. It was created to "flash" a message to the user and then go
away.

Let's replace the `@message` instance variable with `flash[:notice]` in `artists_controller.rb`...

```rb
def create
  @artist = Artist.create!(artist_params)
  flash[:notice] = "Artist was created."
  redirect_to @artist
end
```

Then, in `views/artists/show.html.erb`, replace the `@message` line with this...

```html
<% flash.each do |type, message| %>
  <p><%= type %>: <%= message %></p>
<% end %>
```

## Flash Conventions (5 minutes, 1:05)

We used `flash[:notice]`, but as with any hash, we can use `flash[:alert]`,
`flash[:wombat]`, `flash[:flashy_hashy]`, `flash[:error]` -- any key of our choosing.

It's convention to stick to two main ones: `:alert` and `:notice`. The former should be used for errors and the latter for when everything is okay.

<details>
  <summary><strong>Why should you stick to this convention?</strong></summary>

  Having one or two flash types makes it really easy to style your Flashes with
  CSS.  Also, Rails provides special helpers for alert and notice.  In the [controllers](http://guides.rubyonrails.org/action_controller_overview.html#the-flash) and [views](http://api.rubyonrails.org/classes/ActionDispatch/Flash.html).

</details>

<br/>

Consider adding the following code to `views/artists/show.html.erb`...

```html
<% flash.each do |type, message| %>
  <p class="flash <%= type %>"><%= message %></p>
<% end %>
```

And this CSS in `app/assets/stylesheets/application.css`...

```css
.flash {
  border: 1px solid black;
  padding: 1em;
  background: #eee;
}

.alert  { color: red;  }
.notice { color: blue; }
```

## Flash Placement (5 minutes, 1:10)

<details>
  <summary><strong>Presumably, we'd want to show flash messages on any page. What problem do we
  run into now?</strong></summary>

  We only show flash messages on the Artist show page.

</details>

<br/>

<details>
  <summary><strong>Where would be the best place to put the flash messages so we don't have to
  repeat anything?</strong></summary>

  In `views/layouts/application.html.erb`...

  ```html
  <!-- app/views/layouts/application.html.erb -->
  <h1>Tun.r</h1>
  <nav>
    <%= link_to "Artists", artists_path %>
  </nav>
  <% flash.each do |type, message| %>
    <p class="flash <%= type %>"><%= message %></p>
  <% end %>
  ```

</details>

<br/>

## Shorthand Flash (5 minutes, 1:15)

You can DRY up your code a bit by putting the flash message right in the
`redirect_to`...

```rb
# app/controllers/artists_controller.rb

def create
  @artist = Artist.create!(artist_params)
  redirect_to @artist, notice: "Artist was successfully saved."
end
```

Note that this only works with flashes named `notice:` or `alert:`. It does not
work with `render`.

## You Do: Add Flash Messages to Tunr (15 minutes, 1:30)

> 10 minutes exercise. 5 minutes review.

Let the user know that artists and songs were successfully created, updated, and deleted.

#### Bonus

- Include the artist's name in the flash messages for artists
- Include the songs's title in the flash messages for songs
- Use a conditional statement so that if an artist or song is successfully created, a notice is created. If not, then an alert should be displayed.

## Break (10 minutes, 1:40)
