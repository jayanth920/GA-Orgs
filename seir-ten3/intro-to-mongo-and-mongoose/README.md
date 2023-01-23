[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly)

Revised for MongoDB Atlas by: Ira Herman

# Mongo Database

In this unit, NodeJS will be the server environment that will be responsible for managing all of the request from clients, but we're going to need another server to store data.  This is what we'll be using MongoDB to do.

## Lesson Objectives

1. Describe the purpose of databases in web application development.
1. Distinguish between the database server, a database, a collection and a document in MongoDB.
1. Create, drop and interact with MongoDB databases and collections using the MongoDB Atlas interface.
1. Create, Read, Update, and Delete documents in MongoDB collections using the MongoDB Atlas interface.


## Roadmap
1. Describe what is a Database
1. Describe what is Mongo
1. Understand the difference between a Mongo database, sub-database, collection, and document
1. Get Mongo running
1. List sub-databases
1. Choose a sub-database
1. Create a collection
1. Insert a document
1. Insert multiple documents
1. Query the collection
1. Remove a set of documents
1. Update a set of documents
1. Drop a collection or sub-database

# Explain

## What is a Database

A database is an organized collection of data, stored and accessed electronically.

For any of our frontend-only CRUD apps so far we've been hard coding some data. [Here](https://seir-react-todos.netlify.app/) is an example of a frontend application we might have built. We've been able to make temporary changes to data, but as soon as we shut down our servers, those changes are gone. We need a way to make our data persist.

We'll do that by storing and accessing our data from a database, an application whose job is to persist data. We'll use Node to create an API that manages the requests and responses from the client, and that handles querying the database for us. 

![Screen Shot 2022-01-13 at 10 29 06 AM](https://media.git.generalassemb.ly/user/21811/files/af16dd80-745b-11ec-941d-41ec5bee1666)

There are many types of databases. A common type, and the format many may think of when they first think of databases, is a SQL (Structured Query Language) database which stores data in tables with columns and rows, much like an Excel spreadsheet or Google Sheet. We'll learn how to use SQL in Unit 4!

Another, more modern type of database is a NoSQL (Not SQL) database, which does not store data in tabular form. In our case, we'll be using MongoDB which will store our data in objects (just as we've been seeing with many of our APIs). 

## What is Mongo

MongoDB is a specifc type of database system called a **document database**. It stores data in a format called BSON (Binary JSON), which is a JSON-like format and resembles JavaScript objects. One of the key benefits of this type of database format is that it makes it very easy to work with JavaScript-based applications, because the data so closely remembles our native data types. 

The database itself is an application that runs on a computer and waits for connections that make requests and then sends responses (much like a web server). You can run the application locally on your own computer, or you can run it in the cloud -- we'll be doing the later today. 

Mongo is designed to be a database that is flexible and easily scalable due to its mechanism of data storage. We can store data easily across many physical pieces of hardware since each "record" is a separate and distinct "document". This is often called **horizontal scaling**, in which you spread data across additional servers, as opposed to **vertical scaling**, in which you need to upgrade to bigger and more powerful servers. 

Even though SQL databases have been around for much longer, NoSQL databases have gained in popularity in recent years as the amount of user-generated data on web applications has grown exponentially. NoSQL databases like MongoDB lend themselves well to rapid app development use cases such as coding sprints and Agile settings. Anytime you have large amounts of data with little or no structure, unknown requirements, or when data is increasing at a very high rate, a flexible and scaleable database like MongoDB would be an ideal choice.  

MongoDB is used by thousands of organizations including Google, eBay, Adobe, Toyota, and Cisco. 

## Mongo Sub-Databases

With a MongoDB database, you can have multiple smaller databases stored and available in Mongo.

Imagine an organization with many products, like Google, which would have multiple databases to store data for all their different services: Gmail, Google Maps, Drive, Search ...

For us, we'll have multiple sub-databases within our MongoDB instance, typically one for each lesson, lab, and homework.

Here is a way you _COULD_ split up sub-databases for an E-Commerce application: 

![sub database example](https://i.imgur.com/rHgjaUM.png)

# Mongo Collections and Documents

MongoDB is considered a NoSQL (not only SQL, non SQL or non relational), rather than storing things in tables with rows and columns, NoSQL databases use other means. In the case of MongoDB, data is stored in BSON (binary JSON), which resembles JavaScript objects.

A **collection** is a set of **documents**. Documents are individual data records. 
This is very abstract. Let's use a simplified real world example of an address book.

Here is one document:

```js
 _id: (ObjectID: "23423897fhjs2e3"),
 firstName: "Jennifer",
 lastName: "Juniper",
 address: "Upon the Hill",
 state: "California",
 telephone: "867-5309",
 birthday: "June 8, 1968",
 email: "jenny.juniper@juno.net"

```

A collection, would be many documents: In our case, many contacts. 

Remember: having a collection of documents sounds quite reasonable. But having a document of collections is ... kind of odd. And of course, a database may have multiple collections, one for Contacts, one for Events, etc. 

![Screen Shot 2022-01-13 at 11 22 41 AM](https://media.git.generalassemb.ly/user/21811/files/24d27780-7463-11ec-93d0-359b0c4283f5)


If you're coming from a background where you are used to thinking of data in terms of columns and rows, reading the following could be helpful in transitioning into this new way of modeling data:

[Thinking in Documents Part 1](https://www.mongodb.com/blog/post/thinking-documents-part-1?jmp=docs&_ga=2.202168721.1294830246.1530196908-30583944.1529350623)

[Thinking in Documents Part 2](https://www.mongodb.com/blog/post/thinking-documents-part-2)

## Breakout Room Activity 

That's a lot of information to digest! We're going to head into breakout rooms and work on organizing our understanding of NoSQL databases like MongoDB.

## Connect to Mongo

There are a few ways to connect to Mongo. In this course, there will be two main ways:

- Through the [MongoDB Atlas web interface](https://cloud.mongodb.com)
- Through Node using a library called `mongoose`

> Note that you can also run your Mongo database locally on your own computer as well!

## Connect via MongoDB Atlas

Since this is the first time we are connecting to MongoDB Atlas, the cloud application for MongoDB, we need to sign up. 

Once you are signed in, go to [https://cloud.mongodb.com](https://cloud.mongodb.com), where we will need to create our first cluster.

We will use only free options, which means that we will be sharing servers (computers) with other users to store our data. 

It can take up to 10 minutes for our clusters to be provisioned. 

## Connect/Create to a Sub-Database

Let's see what sub-databases we have available to us:

![](https://i.imgur.com/Nd4mANy.png)

Let's create and use a sub-database called `learn`. 


## Create a Collection

For today, we'll only be working with one collection, but most apps will have numerous collections.

Let's think about an online store. You might split up the collections like so:

```
- users
    - username
    - password
    - address
    - creditCardInfo
    - phoneNumber

- products
    - productName
    - catalogNum
    - imageLink
    - price
    - inStock
```

This helps us organize our data.

Let's create a collection of `contacts` in the `learn` sub-database.


## Create, Read, Update and Delete Documents

We've been creating, reading, updating and deleting our 'data' in our frontend apps, but it hasn't persisted. Now let's learn how to do it using Mongo.

> Remember: Users are not going to open a Mongo shell and type everything we're going to type. We'll eventually be building Node/Express apps that have their own logic to interact with our database.



### Insert a document into a Collection (Create)

Click into the `contacts` collection and then click `insert document`.

Add some key value pairs, for Jennifer. We're going to split it up across multiple lines to make it easier to type and see

```js
{
  'name': 'Jennifer',
  'phone': 8675309,
  'state': 'California'
}
```

We can also type our code in vscode and when we know it's right, copy and paste it over into our interface. Go with whatever is easier.

Let's go ahead and copy paste these into our atlas interface to populate our collection with more documents

```js
[
  {
    "name": "Jennifer",
    "phone": 8675309,
    "state": "California"
  },
  {
    "name": "Claire",
    "phone": 6060842
  },
  {
    "name": "Morris",
    "phone": 7779311,
    "state": "Minnesota"
  },
  {
    "firstName": "Alicia",
    "lastName": "Keys",
    "phone": 4894608,
    "state": "New York"
  },
  {
    "name": "Etta",
    "phone": "842-3089",
    "state": "California"
  }
]
```

### HEADS UP: The JSON format required by Atlas doesn't support trailing commas or other JS features. And all strings need to be in full `"` marks and not single ticks `'`.


We may notice that our data wasn't consistent.

- Jennifer has a duplicate record
- Claire, doesn't have a state
- Alicia's key's are different for her name than others, she also has an extra field for her last name, compared to others.
- Etta's phone number is a string with a hyphen instead of a number

Mongo is designed to be this flexible. Later, we'll learn how to validate our data with an npm package called `mongoose`.

### Query Documents from a Collection(READ)

We'll use the `Find` button.

We'll do some simple queries. If we provide an empty `{}`, it will find all the documents.

Let's try it! Type in `{}` into the Filter box, and click `Find`.

Many times, we don't want to find all of the records in our collection.

We might want to just find the names of the people who live in California.

We can give our `find` method some key value pairs to narrow it down.

```js
  { "state": "California" }
```


### Remove Documents from a Collection(DELETE)

Let's remove the duplicate Jennifer record. We'll use the trash can (delete button) to get rid of it.


### Update a document  (Update)

Let's update Jennifer's record to have the name Jenny instead

Let's find Jenny

```js
{"name": "Jenny"}
```

We can add a field. Claire has no state, let's give her a state

Click the pencil (edit) button on Clair's record (AKA Document).

```js
state: "California"
```

And we should see that Claire now has a state.

### Search for Multiple Values
We can query for multiple values. In our contacts, let's query for people who live in California and are named Etta

```js
  {
    "name": "Etta",
    "state": "California"
  }
```

### Search by Quantitative Data

We can search for equal to, not equal to, greater than, less than or equal to, included in an array etc.

[query operators](https://docs.mongodb.com/manual/reference/operator/query/)

Let's just try one together. Let's query for the people who are NOT in California

```js
{state: {$ne : "California"}}
```

NOTE: `$ne` is the "not equal" operator in MongoDB.

### Drop a collection


If you need to remove an entire collection
```
db.contacts.drop()
```

If you need to drop an entire sub-database, while you are connected to the database you want to drop:

```
click the trash can next to the collection in the left sidebar
```

## Essential Questions

**❓ What is the difference between NoSQL and SQL databases?**

**❓ How does MongoDB store data?**

**❓ What are some benefits of using a NoSQL database like MongoDB?**
