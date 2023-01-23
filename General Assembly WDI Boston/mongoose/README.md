[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# An Introduction to Mongoose

As you saw in the previous talk, MongoDB is extremely flexible - if you want,
you can store data of literally any structure in a collection, even if you
haven't defined that structure beforehand.

However, this flexibility has a weakness: since you can enter data in
_**any arbitrary format**_, and there's no built-in validation to permit/reject
new documents, there's no assurance that the documents in a collection
will be consistent in any way.

Fortunately, there's a tool called Mongoose that will help to address these
problems.

## Prerequisites

- [MongoDB](https://git.generalassemb.ly/ga-wdi-boston/mongodb-crud)

## Objectives

By the end of this talk, developers should be able to:

- Access and manipulate a MongoDB database from a Javascript program by using Mongoose.
- Combine multiple Mongoose operations by using Javascript Promises.
- Validate data for storage in MongoDB by setting up Mongoose validations.

## Preparation

1. [Fork and clone](https://git.generalassemb.ly/ga-wdi-boston/meta/wiki/ForkAndClone)
   this repository
1. Create a new branch, `training`, for your work.
1. Checkout to the `training` branch.
1. Install dependencies with `npm install`.

## Mongoose Schemas, Models, and Documents

> "Mongoose is an Object-Document Mapper"

What does that mean?

Mongoose allows us to represent documents in MongoDB using JavaScript objects.

Additionally, because Mongoose fits in between our JS code and Mongo, it's able
to add some limitations on how Mongo gets used, so that there's greater
consistency in our data.

The core elements of Mongoose are:

- [Documents](http://mongoosejs.com/docs/documents.html), JavaScript objects
  that map to Documents in MongoDB.
- [Models](http://mongoosejs.com/docs/models.html), which are Constructor
  functions that generate new Documents.
- [Schemas](http://mongoosejs.com/docs/guide.html), which specify the properties
  that the Models give to their respective Documents.

Let's look at an example.

[personSchema example](lib/person-schema-example.js)

Here, `personSchema` is a new Mongoose Schema; it specifies `firstName` and `lastName` properties.

That Schema gets passed into `mongoose.model` as an argument, where it is used
to create the `Person` model.

Mongoose uses the first argument to map this model to the MongoDB collection
`people`.

Finally, we call `Person.create` to create a new Person document, and store the
result in `person`.

### Other Key Schema/Model Features

#### Schema Options: Setters

In addition to specifying what type of data each attribute is, we can also
specify other features, such as default values or default transformations (i.e.
automatically uppercasing or lowercasing strings).

This can be done by replacing the type's name in the Schema with an object,
like so: [Schema Example with Setters](lib/some-schema-example.js)

A full list of these options can be found in the [Mongoose API documentation](http://mongoosejs.com/docs/api.html).

#### Schema Options: Validators

As mentioned, MongoDB does not put any limitations on what you put in your
collections. Fortunately, Mongoose provides a way to add some boundaries using
[validators](http://mongoosejs.com/docs/validation.html).

[Schema Example with Validator](lib/some-schema-validator-example.js)

Validators are associated with different 'SchemaTypes', i.e. the kind of data
that the attribute holds. Every SchemaType implements the `required` validator,
but they also each have their own type-specific validators built in.

| Type    | Built-In Validators                            |
|:-------:|:----------------------------------------------:|
| String  | `enum`, `match`, `maxlength`, `minlength`      |
| Number  | `max`, `min`                                   |
| Date    | `max`, `min`                                   |

Additionally, custom validators can be written for any type at any time,
using the `validate` option:

[Another Schema Example with Validator](lib/another-schema-validator-example.js)

#### Virtual Attributes

Another neat feature of Schemas is the ability to define 'virtual attributes':
document properties that you can get and set but that do not get persisted to
MongoDB. In reality, a virtual attribute is just a combination of two
functions, a getter and a setter. The getters are useful for formatting or
combining fields, like `fullName` being a combination of `firstName` and
`lastName`. Setters are useful for decomposing a single value into multiple
values for storage.

[personSchema with virtuals example](lib/person-schema-example.js)

Assuming we have `firstName` and `lastName` properties: we can derive
a `fullName` property from them.

### Code-along: Create

>node bin/person/create.js 'Fred' 'Jones' '1998-03-08' 62 240

Finishing the `create` script will be pretty straightforward, since Mongoose
already gives us a `create` method.

According to the documentation, here is the signature for `create`:

```javascript
Model.create(doc(s), [callback])
```

This means that the `create` method takes an object representing a document
(or several objects, representing multiple documents) with an optional callback
as the final argument.

That callback will be handed several arguments: first, a reference to any
errors created during the `create` operation, and second, a list of references
to the newly created documents (one for each object passed in).

### Code-along: Index

>node bin/person/index.js

Next, let's fill in the `index` and `show` (i.e. `search`) methods. To do this,
we're going to need to query MongoDB using Mongoose. Mongoose has a couple of
methods for doing this, just like ActiveRecord did.

| Mongoose Method |    Use      |
|:---------------:|:---------------------------------------|
| `find`          | find all or by criteria  |
| `findById`      | find by specific          |
| `findOne`       | find first one by criteria          |

For `index`, we want to get all People, so we'll use `find`.

The
[Mongoose documentation for find](http://mongoosejs.com/docs/api.html#model_Model.find)
gives the signature of `find` as

```javascript
Model.find(conditions, [projection], [options], [callback])
```

where `conditions` are the search parameters, i.e. `{ firstName: 'Mike'}`;
optional parameters `projection` and `options` offer additional configuration;
lastly, `find` accepts a callback.

Here's an example finding the person `Mike`
```jsx
Person.find({ firstName: 'Mike' })
```

Pro tip: if you use `<query term(s)> site:mongoosejs.com` or in this case `find
site:mongoosejs.com` google will only search that site!

### Code-along: Show

>node bin/person/show.js 6255354545

Now let's implement `show`. We'll use [findById](http://mongoosejs.com/docs/api.html#model_Model.findById)
instead of `find`, since we specifically want to look up a document by its ID.

### Code-along: Destroy

>node bin/person/destroy.js 6255354545

The `destroy` method should look a lot like the `show` and `update` methods.

The Mongoose method we want to use here is [`remove`](http://mongoosejs.com/docs/api.html#query_Query-remove);

### Code-along: Update

>node bin/person/update.js 6255354545 'Fred' 'Smith' '1998-03-08' 62 240

To do an update, we need to
 (a) look up the record you want by its ID, and then
 (b) have it update one or more of its values.
As we've just seen, the first of these can be accomplished using `findById`.
To do the second, we need to actually change a property on the document,
and then run [`.save`](http://mongoosejs.com/docs/api.html#model_Model-save).

## Note on Executing Mongoose Queries

Mongoose queries can be executed a few different ways, including callbacks,
promise-like chains, and a special `.exec` method.

So far we have been executing our queries with promise syntax, but we aren't
*technically* using real promises.

Most queries in Mongoose allow us to use `.then` and `.catch` for development,
even though they don't really return a promise for us to chain.

If we need more advanced promise features, we can use `.exec`, which
[this article](https://stackoverflow.com/questions/31549857/mongoose-what-does-the-exec-function-do)
goes into in depth.

## Lab: CRUD Places

In your squads, repeat the previous exercise for a new resource, Places.
Places have the following features:

- name (required)
- latitude (required)
- longitude (required)
- country
- isNorthernHemisphere? (virtual)
- isWesternHemisphere? (virtual)

First, read [this brief overview](https://journeynorth.org/tm/LongitudeIntro.html)
of latitude and longitude.

You should ensure that only reasonable values of latitude and longitude are
allowed to be added to the database. Per the above article, latitude and
longitude should both be numbers that range from -90 to 90 and
-180 to 180, respectively. See [here](https://en.wikipedia.org/wiki/Hemispheres_of_Earth)
for info on Earth's hemispheres.

## Additional Resources

- [The Mongoose API docs](http://mongoosejs.com/docs/api.html)
- [Mozilla Mongoose](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/mongoose)
- Mongoose `.toJSON()`
  - [Mongoose Docs](http://mongoosejs.com/docs/api.html#document_Document-toJSON)
  - [Alexander Zeitler blog post](https://alexanderzeitler.com/articles/mongoose-tojson-toobject-transform-with-subdocuments/)
- [Mongoose Flags to Avoid Deprecated Behavior](https://mongoosejs.com/docs/deprecations.html): Discusses `useNewUrlParser` and  `useUnifiedTopology` flags

## Tasks

Developers should run these often!

- `grunt nag`: runs code quality analysis tools on your code
    and complains.
- `grunt test`: runs any automated tests; may depend on `grunt build`.
- `grunt`: runs both `nag` and then `test`
- `grunt make-standard`: reformats all your code in the standard style.

## [License](LICENSE)

1. All content is licensed under a CC­BY­NC­SA 4.0 license.
1. All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
