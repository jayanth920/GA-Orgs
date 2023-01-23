# Notes

## Common Mongo Commands

|             What's it do?              |             command                         |
|----------------------------------------|---------------------------------------------|
| Check what databse you're connected to | `db`                                        |
| Show all documents in a collection     | `db.collection.find()`                      |
| Show all collections                   | `show collections`                          |
| Run script from command line           | `mongo mongo-crud < scripts/find/people.js` |
|                                        |                                             |


## Cheatsheet

During the lesson you can have devs create a cheatsheet of various commands.
Link to cheatsheet example below: https://gist.github.com/esalling23/b43fd00959b70ffe9bd3f825de362500

----

# Working with MongoDB - A Cheatsheet

---

### Getting into the Command Line Interface (CLI)

1. Fire up mongodb

> Mac OS only: `brew services start mongodb`
>
> Ubuntu Only: `sudo service mongod start`

2. Get into the mongo command line: `mongo [optional-database-name]`

```bash
$ mongo mongo-crud
MongoDB shell version v3.x.x
connecting to: mongo-crud
>
```

---

### Common Commands in the MongoDB CLI

The following are some of the most common commands you might use in the MongoDB CLI.
More examples are in the next section.

- Display current database with `db`
- See all databases with `show databases` or `show dbs`
- Switch databases with `use other-database`
- See available collections (tables) with `show collections`
- Access a collection with `db.collectionName`
- See the number of items in a collection with `db.collectionName.count()`
- Find all items in a collection with `db.collectionName.find()`
- Find item(s) that match certain field/value pairs in a collection with `db.collectionName.find({ field: 'wanted value' })`
- Delete items in a collection with:
  - One item: `db.collectionName.deleteOne({ field: 'wanted value' })`
  - Many items: `db.collectionName.deleteMany({ field: 'wanted value' })`
- Update items in a collection with:
  - `db.collectionName.update({ field: 'wanted value' }, {$set: { field: 'new value' }})`
- Add items to a collection with:
  - Multiple items (array of objects): `db.collectionName.insert([{ fields: 'values' }, { fields: 'values' }])`
  - A single item (one object): `db.collectionName.insert({ fields: 'values' })`

---

### Examples: Working with `books`

1. Connect into `mongo-crud` database, and check number of items in `books` collection:

```bash
$ mongo mongo-crud
MongoDB shell version v3.x.x
connecting to: mongo-crud
> show dbs
local       0.000GB
mongo-crud  0.000GB
> show collections
books
> db.books.count()
138
```

2. Insert a `book`:

```bash
> db.books.insert({ title: 'To Kill A Mockingbird', author: 'Harper Lee', published_on: '1960-06-11' })
WriteResult({ "nInserted" : 1 })
```

3. Find a `book` where the `author` is `'Harper Lee'`:

```bash
> db.books.find({ author: 'Harper Lee' })
{ "_id" : ObjectId("5d09342dd6088f079b3e4c9c"), "title" : "To Kill A Mockingbird", "author" : "Harper Lee", "published_on" : "1960-06-19" }
```

4. Update a `book` where the `author` is `'Harper Lee'` to have a `cover` property set to `'paperback'`:

```bash
> db.books.update({ author: 'Harper Lee' }, {$set: { cover: 'paperback' }})
WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })
```

5. Delete a book where the `author` is `'Harper Lee'`:

```bash
> db.books.deleteOne({ author: 'Harper Lee' })
{ "acknowledged" : true, "deletedCount" : 1 }
```

----
