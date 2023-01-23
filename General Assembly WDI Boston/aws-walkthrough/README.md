# A Whirlwind Tour of AWS

In this lesson, we will:

* Log in to the AWS console and familiarize ourselves with its UI
* Create an EC2 (web server) instance
* Create an RDS (database server) instance
* Create an S3 bucket, access its index page, upload a .csv file, and query it

_Note:_ Capital One requires the use of various tags for your instances, depending on how that instance will be used. Without these tags, your instance will automatically be shut down. In this lesson, we're creating public (non-Capital One) instances just to show you the basic process.

![xkcd comic: The Cloud](the_cloud.png)
_[xkcd: The Cloud](https://xkcd.com/908/)_

## The AWS Console

AWS provides a dashboard where you can access all the functionality provided by AWS. This is called the Console, and you access it from:

https://console.aws.amazon.com

## EC2

EC2, or Elastic Compute Cloud, is an AWS service that lets you create a virtual server. Search for EC2 in the console, then click the blue _Launch Instance_ button.

You can configure many options when creating an instance, but the most important ones are:

* AMI (Amazon Machine Image) -- Which OS you want to use (Red Hat, Ubuntu, Windows, _etc._)
* Instance type -- Number of CPUs, amount of memory, network performance, _etc._ Very small servers are free (unless you start using a lot of bandwidth).
* Storage -- The size of the "hard drive". Defaults to 8 GB. Note that if you want to expand the storage later, you'll have to clone this drive onto a new, larger drive instance; detach the old drive; and attach the new drive. This only takes a few minutes but it's a little annoying.
* Tags -- Key/value pairs, typically used in large organizations with many instances to group those instances.
* Security group(s) -- What traffic you allow from which sources on which port.

You'll need to provide or create a secure public and private key pair, which involves a private key file that will live on the computer you use to access your AWS instance.

## RDS

The RDS (Relational Database Service) lets you spin up a database server. AWS supports a number of different RDBMS's, including Postgres, MySQL, Oracle, and SQL Server. MongoDB requires either setting up an EC2 instance that's running Mongo, or the use of the separate MongoDB Atlas service.

In the console, search for RDS and click the orange _Create database_ button.

When creating an RDS instance, you'll have the following options:

* Engine -- MySQL, PostGres, Oracle, MS SQL Server, _etc._
* Class -- Number of CPUs and amount of memory
* Username and password for admin user
* Security group(s)

Once created, the RDS instance will have an _endpoint_ parameter, which is the hostname to which code can connect.

## S3

Amazon's Simple Storage Service (S3) lets you create a "bucket" of files and/or data that you can easily access. These could be HTML files for a simple website or data files for data you want to access publicly.

Create a public S3 bucket, then view its index.html file publicly.

You can also upload your own data. Let's upload the `credit_users.csv` file.

S3 also provides us with a neat feature that lets us query CSV files with SQL as though they were databases.

In the SQL editor, paste this SQL statement:

```
SELECT givenName,familyName FROM s3object s WHERE CAST(s.creditRating as INTEGER) > 700
```
