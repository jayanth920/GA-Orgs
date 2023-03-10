[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Mongoose Relationships

## Prerequisites

- [MongoDB](https://git.generalassemb.ly/ga-wdi-boston/mongodb-crud)
- [Mongoose Study](https://git.generalassemb.ly/ga-wdi-boston/mongoose-study)
- [Mongoose](https://git.generalassemb.ly/ga-wdi-boston/mongoose)

## Objectives

By the end of this talk, developers should be able to:

- Add nested schema and use subdocuments in Mongoose.
- Add references and use populate in Mongoose.

## Preparation

1. [Fork and clone](https://git.generalassemb.ly/ga-wdi-boston/meta/wiki/ForkAndClone)
    this repository
2. Create a new branch, `training`, for your work.
3. Checkout to the `training` branch.
4. Install dependencies with `npm install`.

As the term "non-relational" implies, MongoDB doesn't have a built-in notion of
relationship between resources in the same way that SQL does. The two main
approaches are [subdocuments](http://mongoosejs.com/docs/subdocs.html) and
[references](http://mongoosejs.com/docs/populate.html).

## Subdocuments

> Subdocuments are documents embedded in other documents. In Mongoose, this
> means you can nest schemas in other schemas. Mongoose has two distinct
> notions of subdocuments: arrays of subdocuments and single nested subdocuments.
>
> [mongodb subdocument docs](http://mongoosejs.com/docs/subdocs.html)

![subdocs](https://docs.mongodb.com/manual/_images/data-model-denormalized.bakedsvg.svg)

```js
const contactSchema = new Schema({
  phone: String,
  email: String
})

const postSchema = new Schema({
  title: String,
  body: String
})

const userSchema = new Schema({
  username: String,
  // a single nested contact subdocument
  contact: contactSchema,
  // an array of posts subdocuments
  posts: [postSchema]
})
```

In the example above we added two different kinds of relationships.
A [**one-to-one**](https://en.wikipedia.org/wiki/One-to-one_(data_model))
relationship and a [**one-to-many**](https://en.wikipedia.org/wiki/One-to-many_(data_model))
relationship.

The userSchema has a **one-to-one** relationship with contact, because each user
has one contact. Conversely, this means each contact also has one user.

![one-to-one relationship between user and contact](https://media.git.generalassemb.ly/user/16320/files/7a9c4c00-b168-11ea-85fa-997edd6cb9eb)

The userSchema has a **one-to-many** relationship with posts, because each user
can have many posts. While each post only has one user.

![one-to-one relationship between user and posts](https://media.git.generalassemb.ly/user/16320/files/87b93b00-b168-11ea-95bb-fc2e24e2206e)

### Code Along: One-to-Many Add Comments to Places

Together we will create our first **one-to-many** relationship. For this relationship,
we'll say that **one** place has **many** comments.

1. (C)reate Comment for a Place
2. (R)ead All Comments for a Place by Reading a Place
3. (R)ead a Comment for a Place

### Lab: One-to-Many Update & Delete Comments

Now it's your turn. `(u)pdate` and `(d)elete` will build on reading a comment for a place.

#### Lab: Update Comment

Updating a subdocument can be done the same as a normal document. Review the documentation for [updating a document using save](https://mongoosejs.com/docs/documents.html#updating-using-save).

1. Accept a new `body` and `title` for a specific comment. These will come from the user's input.
2. Find the specific comment you want to update like in `show`.
3. Update the comment's `title` and `body` with the new values. Make sure the changes are saved.
4. Test it! Try updating a comment from the terminal.

#### Lab: Destroy Comment

Subdocuments are deleted differently than normal documents. Review the [documentation for removing subdocuments](https://mongoosejs.com/docs/subdocs.html#removing-subdocs).

1. Find the specific comment you want to remove like in `show`.
2. Remove the specific comment from the place's `comments` subdocument array. Make sure the changes are saved.
3. Test it! Try destroying a comment from the terminal.

> Bonus: `pull` and `remove` are both methods that can remove subdocuments. If you finish early, try removing a comment using the other method.

## Reference

> Mongoose has an alternative called `populate()`, which lets you reference
> documents in other collections.  Population is the process of automatically
> replacing the specified paths in the document with document(s) from other
> collection(s). We may populate a single document, multiple documents,
> plain object, multiple plain objects, or all objects returned from a query.
>
> [mongodb populate docs](http://mongoosejs.com/docs/populate.html)

![reference](https://docs.mongodb.com/manual/_images/data-model-normalized.bakedsvg.svg)

```js
const userSchema = Schema({
  username: String,
  required: true
})

const contactSchema = Schema({
  user: {
    // References use the type ObjectId
    type: Schema.Types.ObjectId,
    // the name of the model to which they refer
    ref: 'User'
  },
  phone: String,
  email: String
})

const Contact = mongoose.model('Contact', contactSchema)
const User = mongoose.model('User', userSchema)
```

In the example above we added a **one-to-many** relationship with a **reference**.

The userSchema has a **one-to-many** relationship with contact, where one user has
many contacts.

We can determine this is a **one-to-many** relationship because each contact has
a single user reference.  If we created multiple contacts with the same user,
then that user would have many contacts.

![one-to-many relationship between user and contacts](https://media.git.generalassemb.ly/user/16320/files/59dbf280-b178-11ea-95af-ee550ac34d58)

### Code Along: One-to-Many Add Person to Place as Owner

Lets create our first one-to-many relationship using references.
**one** person can have **many** places.

The reference should be called `owner`. It will be used to keep track of the
person who created the place.

1. (C)reate a Place include `owner`
2. (R)ead All Places populating the `owner`
3. (R)ead a Place populating the `owner`
4. (U)date `owner`? No. Why not?
5. (D)elete `owner`? No. Why not?

### Lab: One-to-Many Add Person to Comment as Owner

Now its your turn to practice creating a one-to-many relationship! Create a
one-to-many relationship where **one** person can have **many** comments.

The reference should be called `owner`. It will be used to keep track of the
person who created the comment.

1. (C)reate a Comment include `owner`
2. (R)ead a Comment populating the `owner`

> Hint: To populate the `owner` inside of the `comments` subdocument array, you
> will need to provide the full path to the `owner`. [Review this example](https://stackoverflow.com/a/13031171/3500171)
> showing how to populate a subdocument's `created_by` property.

## Additional Resources

- [Embedded document vs Reference](https://stackoverflow.com/questions/21302279/embedded-document-vs-reference-in-mongoose-design-model)
- [Mongoose 101: Working with subdocuments](https://zellwk.com/blog/mongoose-subdocuments/)
- Mongoose Reference
  - [Mongoose Docs](http://mongoosejs.com/docs/populate.html)
  - [Code Barbarian blog post](http://thecodebarbarian.com/mongoose-virtual-populate)
- Mongoose Subdocuments
  - [Mongoose Docs](http://mongoosejs.com/docs/subdocs.html)
  - [Coderwall blog post](https://coderwall.com/p/6v5rcw/querying-sub-documents-and-sub-sub-documents-in-mongoose)

## Tasks

Developers should run these often!

- `grunt nag`: runs code quality analysis tools on your code
    and complains.
- `grunt test`: runs any automated tests; may depend on `grunt build`.
- `grunt`: runs both `nag` and then `test`
- `grunt make-standard`: reformats all your code in the standard style.

## [License](LICENSE)

1. All content is licensed under a CC??BY??NC??SA 4.0 license.
2. All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
