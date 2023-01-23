# File Upload with Paperclip

One common thing we're asked to do as web developers is to add file upload to our sites. When used for images, users can upload photos as profile images or attach images to other models such as blog posts, etc.

We're going to be using a gem called [Paperclip](https://github.com/thoughtbot/paperclip) by [Thoughtbot](http://www.thoughtbot.com/) which helps us make file upload and later recall of these files fairly easy. Another alternative is called [CarrierWave](https://github.com/carrierwaveuploader/carrierwave). CarrierWave offers the feature of file uploads directly to [Amazon S3](http://aws.amazon.com/s3/) which can be useful in some scenarios.

## Walkthrough

Install ImageMagick
```bash
brew install ImageMagick
```

Gemfile
```ruby
gem "paperclip", "~> 3.0"
```

Bash prompt: install paperclip
`bundle install`

Bash prompt: Run generator on the model you'd like to have image attachments on
`rails generate paperclip MODEL_NAME NAME_OF_ATTACHMENT`
`rails generate paperclip book image`
`rake db:migrate`

HTML forms use `application/x-www-form-urlencoded` for data format when transferring data to the server.  This data format is insufficient for transferring large ammounts of data, which is the case for file uploads.  It's much better to use `multipart/form-data`.  A rails `form_for` helper provides a `:multipart` parameter that allows us to configure our form to use `multipart/form-data`.     In your `app/views/MODEL/_form.html.erb`
```ruby
<%= form_for @book, url: books_path, html: { multipart: true } do |f| %>
  <%= f.file_field :image %>
<% end %>
```

Add `:image` attr_accessible in your model.  We can use the `:styles => { :medium => "300x300>", :thumb => "100x100>" }` setting for `has_attached_file` to configure ImageMagic to resize the uploaded image. Paperclip offers custom validators for your model. To validate the presence of an upload you'd add the following to your model:
```ruby
class Book < ActiveRecord::Base
  attr_accessible :author, :price, :title, :year, :image
  has_attached_file :image, :styles => { :medium => "300x300>", :thumb => "100x100>" }, :default_url => "/images/:style/missing.png"
  validates :image, attachment_presence: true
  validates_with AttachmentPresenceValidator, attributes: :image
end
```

Finally, we can refer to the resize labels we set up in the model to retrieve images of different sizes.  In your `app/views/MODEL/show.html.erb`:
```ruby
<%= image_tag @book.image.url %>
<%= image_tag @book.image.url(:medium) %>
<%= image_tag @book.image.url(:thumb) %>
```

Very little needs to happen in the Controller to make Paperclip work.

Paperclip uses ImageMagick by default for photo resizing.



## Exercise

Create a git branch of your project, or if your project isn't in a working state use the guitarStore scaffold, and add file upload using Paperclip to attach images to one of your models.

## Resources

* [Paperclip Github](https://github.com/thoughtbot/paperclip)
* [Paperclip Wiki](https://github.com/thoughtbot/paperclip/wiki)
* [Paperclip Github Issues](https://github.com/thoughtbot/paperclip/issues)

## Considerations for Heroku

Paperclip by default stores files on the local file system. This will appear to work on Heroku, but really doesn't- since these files will never be checked into Git and will be deleted on each Heroku deployment. Additionally, storing files on your Rails system is generally a poor idea since Rails isn't the best static image server and they are much better suited to a file-specific cloud service like [Amazon S3](http://aws.amazon.com/s3/). With Paperclip, the images still go to your server once, and then they are uploaded to Amazon from there. Retrieval is done directly from S3, which takes the load off your server.

Read more about it on the [Heroku Dev Center](https://devcenter.heroku.com/articles/paperclip-s3)

## Bonus

* Idea 1: Figure out how to have multiple images on a single model (ie. Book has many images). Hint, you will need an 'image' model, which belongs_to another model.
* Idea 2: Figure out how to use image Attachments polymorphically on multiple models. There is a good revised Railscast on [Polymorphic Associations in Rails](http://railscasts.com/episodes/154-polymorphic-association-revised?view=comments).
* Idea 3: Get this all working on S3 and Heroku.
* Idea 4: Start over and learn to use [CarrierWave](http://aws.amazon.com/s3/) instead of Paperclip to achieve similar results.  Note the differences and similarities in features, documentation, philosophy and community.