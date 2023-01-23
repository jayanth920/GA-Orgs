# Databases

## Learning Objectives

- Explain what a database is and why you would use one
- Explain the difference between a relational and a non-relational databases

## Framing (5 minutes, 0:05)

What's the main problem with our programs right now in terms of user experience?

When we quit them, any data / progress is lost! Right now, we can only store information in memory, which is wiped when we quit out of a program. We need a way to fix this.

Enter databases...

## Databases (5 minutes / 0:10)

A database is a tool for storing data. There are many ways to store data on a computer (e.g., writing to a text file, a binary file). Databases, however, offer a number of advantages...

**Permanence**: Once we write data to our database, we can be pretty sure it
won't be lost (unless the server catches on fire).

**Speed**: Databases are generally optimized to be fast at retrieving and updating information. Literally, DBs can be 100,000x faster than reading from a file.

**Consistency**: Databases can enforce rules regarding consistency of data, especially when handling simultaneous requests to update information.

**Scalability**: Databases can handle lots of requests per second, and many DBs have ways to scale to massive loads by replicating / syncing information across multiple DBs.

**Querying**: DBs make it easy to search, sort, filter and combine related data using a **Query Language**.

> Note: There's an acronym in computer science [ACID](https://en.wikipedia.org/wiki/ACID), which is a set of properties that ensure data is reliably stored. You can read the wiki article for more info but, in short, a lot of the properties mentioned above make a database ACID-compliant.

## Types of Databases (5 minutes / 0:15)

### Relational Databases

- Data is stored in tables, similar to Excel spreadsheets
- Communicate via SQL (Structured Query Language)
- Can relate data between tables

### Non-Relational (NoSQL) Databases

- Data is stored in key-value pairs, wide columns, graphs, or documents
- Flexible and easy to scale
- Very useful when we are storing inconsistent data

### Terminology (5 minutes / 0:20)

While this is a bit technical, it's worth clarifying some terminology...

* **Database**: The actual set of data being stored. We may create multiple databases on our computer, usually one for each application.
* **Database Management System**: The software that lets a user interact (query) the data in a database. Examples are PostgreSQL, MySQL, MongoDB, etc.
* **Database Language**: The language used to interact with a database. With MongoDB databases, that is JavaScript.
* **Database CLI**: A tool offered by most DBMSs that allows us to query the database from the command line. For MongoDB, we'll use `mongo`.
* **Schema**: A blueprint of how your data is organized and how your database is structured. It introduces consistency to our data.

## Break (10 minutes / 0:30)
