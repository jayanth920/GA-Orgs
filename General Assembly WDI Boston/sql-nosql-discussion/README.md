![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)

# Discussion: Relational and Non-relational Databases

## Objectives

By the end of this, developers should be able to:

- Identify use cases where relational or non-relational databases are
    appropriate.
- List three strengths of relational databases.
- List three strengths of non-relational databases.

## Lab: Research SQL vs. NoSQL

One of the most highly debated topics in software engineering is over which type of database reigns supreme: SQL (relational) or NoSQL (non-relational). There are [plenty](https://vshn.ch/en/blog/nosql-why-you-should-use-mongodb-instead-of-a-relational-database/) of [opinionated](http://www.sarahmei.com/blog/2013/11/11/why-you-should-never-use-mongodb/) blog posts on the subject, but we're going to take a look at a few that weigh the pros and cons of each.

- [SQL vs NoSQL: 5 Critical Differences](https://www.xplenty.com/blog/the-sql-vs-nosql-difference/)

  _**Note:** You do not have to read about the different types of SQL and NoSQL. We will use PostgreSQL and MongoDB in this course._
- [ACID vs. BASE Explained](https://neo4j.com/blog/acid-vs-base-consistency-models-explained/)
- [PostgreSQL Use Cases](https://www.cybertec-postgresql.com/en/postgresql-overview/solutions-who-uses-postgresql/)
- [MongoDB Use Cases](https://www.mongodb.com/use-cases)

Take fifteen minutes to read through the resources above.
Then, take fifteen minutes to share your notes with your team and
prepare for discussion. Discuss with each other and attempt to answer the
questions in the following section.

## Discussion

1. What are the benefits of SQL databases? NoSQL Databases?
1. Explain the differences between ACID and BASE models.
1. What are some examples of good use cases for PostgreSQL? MongoDB?
1. What should you consider when deciding between using a relational database or a non-relational database for your project?
1. Suppose you were building a blog with comments. Should a comment on one
    article appear on any other article? Will you ever view comments apart from
    their article?
1. Suppose this blog also had tags. Should tags appear on multiple articles?
    Which is the "parent" relation?
1. Contrast the direction of "ownership" between blog posts and comments, and
    blog posts and tags.
1. Suppose you had to edit a tag. In a relational database, how many rows need
    to be changed (best and worst case)? In a document database, how many
    documents need to be changed (best and worst case)?

## Compare & Contrast

Put together a list of similarities and differences between relational and
non-relational databases. You can start with comparisons provided by specific
vendors, such as the one found in [NoSQL Databases
Explained](https://www.mongodb.com/nosql-explained). You might wish to organize
your thoughts with a [Venn diagram](https://en.wikipedia.org/wiki/Venn_diagram)
or a series of tables.

## Visual Comparisons

### Structure
![](https://media.git.generalassemb.ly/user/16103/files/65db7f00-afd5-11ea-926a-e51b2fd2be08)

### Relationships
![](https://media.git.generalassemb.ly/user/16103/files/5eb47100-afd5-11ea-8cae-0a65c924be4b)

### Use Cases
![](https://media.git.generalassemb.ly/user/16103/files/7f7cc680-afd5-11ea-82c8-10ed74ee2222)

## Additional Readings

Pick an additional reading to go through with a classmate. Reflect on how the
article changes the discussion. What have you learned?

- [What the heck are you actually using NoSQL for?](http://highscalability.com/blog/2010/12/6/what-the-heck-are-you-actually-using-nosql-for.html)
- [A co-Relational Model of Data for Large Shared Data Banks](http://queue.acm.org/detail.cfm?id=1961297&repost)
- [A brief history of databases](http://avant.org/media/history-of-databases)
- [NoSQL Databases: An Overview | ThoughtWorks](http://www.thoughtworks.com/insights/blog/nosql-databases-overview)
- [When to choose CouchDB vs RDBMS?](http://stackoverflow.com/a/2731207/402618)
- [CAP Twelve Years Later: How the "Rules" Have Changed](http://www.infoq.com/articles/cap-twelve-years-later-how-the-rules-have-changed)

## [License](LICENSE)

1. All content is licensed under a CC­BY­NC­SA 4.0 license.
1. All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
