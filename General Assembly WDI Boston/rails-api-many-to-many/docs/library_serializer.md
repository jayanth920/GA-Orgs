# Updating Serializers

## Demo: Modifying Library Serializers

Now that we can see some data it's time to update our serializers or these
relationships will not be as useful as they can.

Let's add the `borrowers` attribute to our attributes list in our `book`
serializer.

Our finished serializer should look like this:

```ruby
class BookSerializer < ActiveModel::Serializer
  attributes :id, :title, :borrowers
end
```

Let's do the same in our `borrower` serializer, it should look like this once,
we're done.

```ruby
class BorrowerSerializer < ActiveModel::Serializer
  attributes :id, :family_name, :given_name, :books
end
```
