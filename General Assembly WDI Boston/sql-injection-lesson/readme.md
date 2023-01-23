---
title: SQL Injection
type: lesson
duration: "1:20"
creator:
    name: Andy Martin
    city: NYC
competencies: Programming, Web Applications, Databases
---

# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) SQL Injection (80 min)

| Timing | Type | Topic |
| --- | --- | --- |
| 5 min | [Opening](#opening) | Databases and SQL |
| 20 min | [Introduction](#introduction) | SQL Injection |
| 15 min | [Demo](#demo) | An Example SQL Injection Vulnerability |
| 15 min | [Instruction](#prevention-validation) | Prevention using Input Validation |
| 15 min | [Instruction](#prevention-parameterization) | Prevention using Parameterization & Prepared Statements |
| 10 min | [Conclusion](#conclusion) | Review of Key Terms |

### LEARNING OBJECTIVES
**After this lesson, you will be able to:**  
- Understand how SQL Injection works.
- Understand the security implications of your application being vulnerable to SQL Injection.
- Describe how to use Input Validation to prevent SQL Injection.
- Describe how to use Parameterized Queries or Prepared Statements to prevent SQL Injection.
- Describe how SQL Injection is similar to other types of "Injection" vulnerabilities.

---
<a name="opening"></a>
## Databases and SQL (5 min)

Most web applications will need to frequently interact with data in one way or another. In many cases, this data will need to persist across periodic executions of the application and perhaps even across multiple concurrently-executing instances of the application itself.

*Databases* can serve as a tool that developers can use to to interact with, record, and programmatically manage their application's data. *SQL* ("Structured Query Language") is the language that databases expect developers to use when making requests (or "queries") relating to this data.

While databases solve many types of problems for the developer "out of the box", there are many things that the developer (and his or her application) remains ultimately responsible for. In the lesson today, we will ask (and try to answer) the following questions:
- What kinds of security flaws can exist in how the application interacts with the database?
- What are the security implications of these flaws?
- How can the developer guarantee that his or her application's use of a database is secure?

To be clear, all the "action" that we will talk about in this lesson will occur on the backend server itself. While this may simplify things a bit -- we won't need to think about the frontend or client-side code hardly at all -- it also should serve as a warning. A failure to secure our application against SQL Injection can result in an attacker's code executing *directly on our servers*.

We need to be sure we get this right.

---
<a name="introduction"></a>
## Intro to New Material: SQL Injection (20 min)

### What is SQL Injection?

> A SQL injection attack consists of insertion or "injection" of a SQL query via the input data from the client to the application. A successful SQL injection exploit can read sensitive data from the database, modify database data (Insert/Update/Delete), execute administration operations on the database (such as shut down the DBMS), recover the content of a given file present on the DBMS file system and, in some cases, issue commands to the operating system.

(Quote pulled from OWASP's ["SQL Injection" Page](https://www.owasp.org/index.php/SQL_Injection).)

### How is it possible for an SQL query to be "injected" via input data?

Let's look at an example line of application code that might be used to check to see if a username & password value pair are correct for a single user account:

```js
connection.query("SELECT * FROM users WHERE (username = '" + username + "') AND (password = '" + password + "');", callback);
```

If the SQL query returns a record of a user from the database, then the developer can assume that the username and password values are correct for that user.

Let's first think about what this call to ```query()``` would look like when it's made with a normal pair of username and password values:

```js
connection.query("SELECT * FROM users WHERE (username = 'harry') AND (password = 'sUperSecretPaSSword');", callback);
```

This looks good! Assuming the username & password values are correct, our query will return one user from the database and the application might (for example) consider this "harry" user to be successfully logged in.

But what if the user does something a little more tricky? What if the user supplies the username ```harry``` and password ```x' OR '1'='1```?

If the user did that, the final query that gets sent to the database would look something like this:

```js
connection.query("SELECT * FROM users WHERE (username = 'harry') AND (password = 'x' OR '1'='1');", callback);
```

Hmm. From the line above, it looks like supplying the malformed password from above may have *altered the structure of the SQL query* in addition to just dropping a username and password into place!

The end result? Even though the password may not match, ```'1'='1'``` will always evaluate to be true, so our SQL query will be equivalent to something like this:

```js
connection.query("SELECT * FROM users WHERE (username = 'harry');", callback);
```

This will (of course) return the "harry" user -- even though the person who submitted the query may have never had any idea what Harry's password really was!

### What are the security implications of SQL Injection?

As we've seen above, if the way an application interacts with its database is not secure, it may be possible for a user of the application to modify the structure of an application's SQL query or even execute arbitrary SQL queries against the database.

This can have disastrous consequences.

For example:
- Because databases frequently hold sensitive data, SQL Injection can lead to the disclosure of this information to otherwise unauthorized users.
- Because SQL queries can *write* as well as read data from the database, an attacker may be able to edit the data in the database (potentially even destroying it all!).
- Depending on the database in use, it may be able to interact with the host operating system itself! This may include reading and writing files or (in some cases) executing arbitrary commands on the server!

---
<a name="demo"></a>
## Demo: Exploiting an Application Vulnerable to SQL Injection (20 min)

For our first demo, let's take a look at an example "Flight Check-in" application. Here, the normal use case is for users to receive "confirmation codes" sent via email. Once the user had a link containing the code, they would click this link to see flight information, print his or her ticket, etc.


### Part 1: Getting the application up and running

> ***Note:*** For the sample files included, students will need to install ```express```, ```qrcode```, and ```sqlite3``` with npm.

Change your directory to the ```example-code/``` directory:

    $ cd ./example-code/

Install the node modules you'll need:

    $ npm install

Start your server with the following:

    $ nodemon app.js

To test the server, open a web browser and navigate to:

    http://<your server host>:8080/

(If you're running this server on your laptop for instance, \<your server host\> would be `localhost`.)

When you see the text ```The server is up and running!``` in response to the request above, continue on to Part 2.


### Part 2: Use the application as a standard user

For this example, let's say you were sent an email like the below:

> Hello Jimmy,
>
> Thank you for choosing FlyBest Airlines. Please click the link below to print your boarding pass:
>
> Your confirmation code is: [0179222](http://localhost:8080/confirmation/01729222)
>
> Best Regards,
> FlyBest Airlines

Click on the link and you should see a boarding pass that looks something like this:

![boarding pass](screenshots/boarding_pass.jpeg?raw=true)


### Part 3: Show how SQL Injection can be used to access the boarding pass of another passenger

Let's think back on what we've learned so far today and ask ourselves the following questions:
- What *attack surface* is there for us to explore as a user?
- What kind of *malformed input* might lead to SQL Injection here?
- How could we use *SQL Injection* to show that the security properties of this application can be broken by malicious users?

With this in mind, let's start by inserting a character we *know* can interfere with the SQL statement (```'```) onto the end of the url string we were given from the email.

[http://localhost:8080/confirmation/01729222'](http://localhost:8080/confirmation/01729222')

What happened? Did you get an error that looked something like this?

![application crash](screenshots/crash.jpeg?raw=true)

If so, great! Looking at the backend application, it looks like we managed to crash the entire app:

```bash
/.../cybersecurity/day-three/sql-lesson/example-code/app.js:15
        if (rows.length != 0){
                ^

TypeError: Cannot read property 'length' of undefined
    at /.../cybersecurity/day-three/sql-lesson/example-code/app.js:15:17
    at Statement.errBack (/.../cybersecurity/day-three/sql-lesson/node_modules/sqlite3/lib/sqlite3.js:16:21)
```

**Being able to trigger a crash of an application with unexpected input should be a major indicator that there may be unsafe database interactions nearby!**

Let's try a slight modification and assume that we will need to leave the final string open and waiting for a closing ```'``` that will ultimately be added by the application:

[http://localhost:8080/confirmation/01729222'%20OR%20'1'='1](http://localhost:8080/confirmation/01729222'%20OR%20'1'='1)

Because the resulting query returns ```true``` for *all* records in the database, the app ends up taking the first entry -- the boarding pass for "Hannah Rodriguez":

![boarding pass 2](screenshots/boarding_pass_2.jpeg?raw=true)

We now have conclusive proof the application is not secure!


### Part 4 (*Bonus*!): Show how SQL Injection can be used to access the boarding pass of *all* passengers

If your steps from Part 3 only showed how a malicious user could access another user's boarding pass, how could you extend this to let you iterate through all users in the database?

(Solution available in the ```additional-solutions/``` directory of this lesson.)

---
<a name="prevention-validation"></a>
## Lesson: SQL Injection Prevention using Input Validation (15 min)

Lets stop to think a little bit about what was really happening when we exploited the FlyBest Airlines application in the previous section.

We (*the user*) were asked to provide input (*a confirmation code*) to the application. The application used this input by *directly placing it into a predefined SQL query string*. This ultimately let us alter *the structure* of the SQL query that gets executed by the database through embedding *control characters* like ```'```.

If we are going to prevent SQL Injection as developers, we will need to block all paths that could let users enter data that will be interpreted as anything other than data by the database.

In this first section, we'll cover one possible way of doing this: Input Validation.

> ***Note:*** For the next two sections, you may find wide variance in the types of support from one third-party library to the next. If you will be using a library to interact with the database, you may need to take a look at what SQL Injection prevention functionality it supports before choosing your approach!
> In addition to the third-party library, you will also need to consider *how* you plan on using user input to query the database as well as *your database schema* itself.

*Input Validation* (often used in concert with *Input Sanitization*) can be done through checking to ensure that the data being sent to the database matches the developer's expectations in its type, form, length, and appearance. The developer must ensure that what's being sent to the database is *valid* and *sanitized* in order to be sure any malformed input will not cause unexpected or dangerous outcomes.

For example, if we our application is accepted a Confirmation Number (like the boarding pass app from the demo), is there any reason we need to accept any non-numeric characters within the Confirmation Number field?

Could we have avoided the issue by rejecting or ignoring any Confirmation Number that included dangerous characters like ```'```?

In addition to rejecting unsafe input, *Input Sanitization* can be used to transform dangerous characters into an *escaped form*, neutering their ability to affect the SQL Statement structure.

Let's pretend we're writing an application that interacts with a MySQL database using the [mysql](https://github.com/mysqljs/mysql) node.js library, and we will be trying to sanitize the query from the introduction:

```js
connection.query("SELECT * FROM users WHERE (username = '" + username + "') AND (password = '" + password + "');", callback);
```

In this case, the end goal -- ensuring that the "username" and "password" values do not affect the structure of the SQL query itself -- can be accomplished through functionality exposed by the library itself through the ```connection.escape()``` method.

```js
connection.query("SELECT * FROM users WHERE (username = '" + connection.escape(username) + "') AND (password = '" + connection.escape(password) + "');", callback);
```

Let's do a little digging to see how exactly our call to ```escape``` will work.

```Connection.escape``` is defined [here](https://github.com/mysqljs/mysql/blob/master/lib/Connection.js#L269) to return the output of a call to ```SqlString.escape```. ```SqlString``` a third-party library hosted [here](https://github.com/mysqljs/sqlstring) that provides simple MySQL string escaping and formatting.

While using `SqlString`, or rather **relying** on *input sanitization* solely, could very well secure your application from SQL Injection, there are negatives to using it. One of the biggest negatives, and the leading cause of SQL Injection vulnerabilities behind "no sanitization" is either missing a variable or mis-sanitizing a variable. For instance, if you use string-escaping for a numeric value, there's a good chance that the code will be vulnerable to SQL Injection still.

To summarize: Preventing SQL Injection with *input sanitization* is possible, but there is a much better alternative.

---
<a name="prevention-parameterization"></a>
## Lesson: SQL Injection Prevention using Parameterized Queries and Prepared Statements (15 min)

> ***Note:*** Describing the difference between a Parameterized Query and a Prepared Statement is extremely tricky. The TLDR from [this StackOverflow answer](https://stackoverflow.com/a/36516415) is quite good: *"A parametrized query is a single operation which generates a prepared statement internally, then passes in your parameters and executes."* The whole answer may be worth reading and referencing throughout this section.

Let's think back one more time to what exactly it was that caused a confirmation code with a trailing ```'``` to crash our app. The problem was that when our input with a trailing ```'``` was dropped into the supporting SQL Query string embedded in the application, the final string that was sent to the database had an unterminated ```'``` character at the end.

Ultimately, our SQL Injection proof-of-concept made use of the fact that our ```'``` characters were being dropped into place to alter the *structure* of the SQL query.

The key insight that led to Parameterized Queries and Prepared Statements being used was the realization that developers could prevent the SQL query structure from being modified in this way by *working with the database beforehand* to ensure that whatever *parameters are dropped into place can never alter the structure of the query*.

Many libraries (knowing how useful Parameterized Queries and Prepared Statements can be to prevent SQL Injection) support using these two techniques with little additional effort by the developer.

Let's take a look at how [node-postgres](https://github.com/brianc/node-postgres) does it by reading through their [Parameterized Queries and Prepared Statements Wiki Page](https://github.com/brianc/node-postgres/wiki/Parameterized-queries-and-Prepared-Statements).

    node-postgres provides three means of submitting a query:
    - text, e.g. query( "select name from emp where emp_id=123" )
    - parameterized, e.g. query( "select name from emp where emp_id=$1", [123] )
    - prepared, e.g. query( {name:"emp_name", text:"select name from emp where emp_id=$1", values:[123]} )

The difference between each of these (in terms of "what do I have to do as a developer?") is virtually non-existant!

Let's take a look at the second option, which uses the Parameterized Query approach:

```js
query( "select name from emp where emp_id=$1", [123] )
```

What would happen if we were to insert data of a different type than ```123``` as the second argument of the call to ```query```? We get an error! (```"invalid input syntax for integer"``` in this case.)

Let's stop to think about what this really means. We are now able to guarantee that the type of our user input *must match* what the column in the database expects. What's not demonstrated here, but can be extrapolated by this example, is the additional fact that a prepared statement will automatically sanitize the input parameters to match the column's datatype. If the column expects a string, special characters such as single or double quotes will be escaped. If it's numeric, it will require a proper numeric value. SQL Injection, prevented.

As you can see, if proper library support exists for Parameterized Queries or Prepared Statements, these can each be extraordinarily powerful techniques to prevent SQL Injection at minimal cost to the developer. **This** approach is the recommended approach when performing any database queries.

> :information_square: Even when using *prepared statements*, there may still be a risk of SQL Injection if the query isn't properly constructed (by the developer, not by the library). Additionally, many third party frameworks and libraries offer additional convenience methods for prepared statements; using these could lead to additional risks in your application. It is recommended to **always** test your code for SQL Injection vulnerabilities.

---
<a name="conclusion"></a>
## Conclusion: Review of Key Terms (10 min)

- What is SQL Injection?
- What are the security implications of SQL Injection?
- How can Input Validation and Input Sanitization be used to prevent SQL Injection?
- How can Parameterized Queries and Prepared Statements be used to prevent SQL Injection?
- What are the factors that you will use to decide which SQL Injection prevention technique to use?
