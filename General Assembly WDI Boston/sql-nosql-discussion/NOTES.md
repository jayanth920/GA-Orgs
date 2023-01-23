# Delivery Notes

## Whiteboard Diagram

![](https://git.generalassemb.ly/storage/user/5688/files/2f89268c-923c-11e7-82d8-6a3b11608822)

![](https://media.git.generalassemb.ly/user/16320/files/a4dcf680-4a59-11e9-9ab1-f0d82e95a274)

![](https://media.git.generalassemb.ly/user/16320/files/c1792e80-4a59-11e9-8703-c18b5aac25f6)

![](https://media.git.generalassemb.ly/user/16320/files/b58d6c80-4a59-11e9-8546-f2d91262bcf3)

## Thought Provoking Questions (OLD)

1. According to Sarah Mei, what are the benefits of using MongoDB?
   - The benefits of using MongoDB are that it is faster to query, and doesn't
     rely on messy things like a 7-join table in order to give you the data you
     are looking for.

1. Why wasn't MongoDB a good fit for the project she was developing?
   - MongoDB wasn't a good fit for their particular project because they were
     actually dealing with relational data, when they at first thought that they

1. What should you consider when choosing MongoDB or a relational database like
   Postgres?
   - You should consider whether your data is relational. If so, you should use
     a SQL database. Sarah Mei argues that pretty much all data is relational,
     and that you should only really use MongoDB is you don't care about the
     content of your data.

1. Suppose you were building a blog with comments. Should a comment on one
   article appear on any other article? Will you ever view comments apart from
   their article?
   - A comment on one article should never appear on any other article. I would
     argue that you would never actually view comments apart from their
     associated article. This would be represented as a one-to-many
     relationship, with comments containing a foreign key reference to their
     article.

1. Suppose this blog also had tags. Should tags appear on multiple articles?
   Which is the "parent" relation?
   - Tags should appear on multiple articles. In this case, there is a many-many
     relationship between tags and articles, and their is not a "parent"
     relationship as in the example above. This can be modeling using a join
     table containing a tag id and an article id.

1. Contrast the direction of "ownership" between blog posts and comments, and
   blog posts and tags.
   - Blog posts own comments. Blog posts own tags, but tags also own blog posts.

1. Suppose you had to edit a tag. In a relational database, how many rows need
   to be changed (best and worst case)? In a document database, how many
   documents need to be changed (best and worst case)?
   - In a relational database, you would simply need to edit the row that
     contains information about the tag. In a document database, you would have
     to change the info about the tag in every single location it is used.
