---
title: Data Encryption, Permissions, and Shell Injection
type: lesson
duration: "1:00"
creator:
    name: Andy Martin
    city: NYC
competencies: Programming, Web Applications
---

# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) Data Encryption, Permissions, and Shell Injection (60 min)

| Timing | Type | Topic |
| --- | --- | --- |
| 5 min | [Opening](#opening) | Encryption, Permissions, and Shell Injection |
| 5 min | [Encryption Basics](#encryption) | Intro to Data Encryption |
| 5 min | [Database Permissions](#permissions) | Intro to Database Permissions |
| 10 min | [Shell Injection](#injection) | Shell Injection |
| 15 min | [Demo: Shell Injection](#injection) | Demo: Exploiting Shell Injection |
| 10 min | [Local File Inclusion](#file-inclusion) | Local File Inclusion |
| 10 min | [Conclusion](#conclusion) | Review of Key Terms |

### LEARNING OBJECTIVES
**After this lesson, you will be able to:**  
- Have a basic familiarity with concepts relating to Data Encryption
- Have a basic familiarity with concepts relating to Database Permissions
- Understand how Shell Injection & Local File Inclusion (LFI) works
- Understand how Shell Injection & LFI can compromise the security model of your application
- Understand how to prevent Shell Injection & LFI

---
<a name="opening"></a>
## Encryption, Database Permissions, and Shell Injection (5 min)

As we're learning, building a secure web application requires a familiarity with *many different* topics. Today, we're going to add on a few more by thinking about the following questions:
- How can we build our application so that, in the event our application or server is compromised by an attacker, the *data* we care about is not immediately available to the attacker?
- How can we apply concepts like the *[principle of least privilege](https://en.wikipedia.org/wiki/Principle_of_least_privilege)* to our database to limit the damage in the event of a compromise?
- Do we need to carefully watch our applications interactions with the operating system itself for "SQL Injection"-like vulnerabilities?

Each of these topics could easily fill hours of lessons on their own. Today we will settle on giving a relatively brief overview of each and revisit many of the ideas later on in the course.

---
<a name="encryption"></a>
## Intro to Data Encryption (5 min)

> In cryptography, encryption is the process of encoding a message or information in such a way that *only authorized parties can access it*. Encryption does not of itself prevent interference, but *denies the intelligible content to a would-be interceptor*.
(From Wikipedia's [Encryption](https://en.wikipedia.org/wiki/Encryption) page.)

Like we talked about in the "Encryption via SSL/TLS" lession, encryption (done properly) can let your application make security guarantees that are extremely useful when your application is rolled out to the real world.

Let's imagine you have sensitive application data which you need to drop to a file on disk with the assumption it will eventually be moved off the server entirely. If you wrote the *plaintext* file to disk without encrypting it, if at any later point in time any of the machines holding the file (or the interconnecting network) were compromised, this data would immediately be available and readable to the attacker.

In order to prevent this, applications can *encrypt* their sensitive data with *secret key*, causing the input data to appear to be a sequence of random bytes (*ciphertext*) until it is later *decrypted* back to the original plaintext. The beauty of this is that even if an attacker manages to get their hands on the *ciphertext* that the original sensitive data was created from, if they don't have the secret key, they won't be able to do anything with it!

For a quick example of how this can be done in Node, see this example below, adapted from [node-crypto-example]( https://github.com/chris-rock/node-crypto-examples):

```js
var crypto = require('crypto'),
    algorithm = 'aes-256-ctr',
    password = 'SuP3rS3cr3TKeYV41uE';

function encrypt(text){
  var cipher = crypto.createCipher(algorithm,password)
  var crypted = cipher.update(text,'utf8','hex')
  crypted += cipher.final('hex');
  return crypted;
}

function decrypt(text){
  var decipher = crypto.createDecipher(algorithm,password)
  var dec = decipher.update(text,'hex','utf8')
  dec += decipher.final('utf8');
  return dec;
}

var hw = encrypt("hello world!");
console.log(hw);
console.log(decrypt(hw));
```

While a full overview of the pros and cons of various encryption schemes is out of scope for today's lesson, we will specifically revisit encryption and do a deep dive covering how it's used when *hashing* sensitive data (like passwords) in the future.

---
<a name="permissions"></a>
## Intro to Database Permissions (5 min)

In addition to encrypting sensitive data, we as application developers would do well to follow the [Principle of Least Privilege](https://en.wikipedia.org/wiki/Principle_of_least_privilege) wherever possible:

> ...The principle of least privilege (also known as the principle of minimal privilege or the principle of least authority) requires that in a particular abstraction layer of a computing environment, every module (such as a process, a user, or a program, depending on the subject) must be able to access only the information and resources that are necessary for its legitimate purpose.

In addition to applying route-based permissions checks (for ex: [ability-js](https://github.com/scottkf/ability-js)), which we will cover more later in the course, it can be beneficial to invest in embedding the principle of least privilege into your database itself. (This can have a similar benefit as data encryption: limiting the damage post-compromise.)

How to do this can vary significantly between database technologies, but following the general principle of limiting access to only those users or roles who specifically need it is good advice in almost all cases.

For example, if your application only needs permission to *read* data from a database (which will presumeably be updated from another context), consider only allowing the role used by your application to run ```SELECT``` statements with something like this:
```
$ sudo -u postgres psql postgres
postgres=# CREATE ROLE readonly WITH LOGIN ENCRYPTED PASSWORD 'PASSWORD_GOES_HERE';
postgres=# GRANT SELECT ON ALL TABLES IN SCHEMA public TO readonly;
```

We will take a much deeper dive into role-based permissions models later in the course.

---
<a name="injection"></a>
## Intro to New Material: Shell Injection (10 min)

> ***Note:*** Shell Injection and Command Injection are two terms that can *generally* be used interchangeably.

### What is Shell Injection?

> Command injection is an attack in which the goal is execution of arbitrary commands on the host operating system via a vulnerable application. Command injection attacks are possible when an application passes unsafe user supplied data (forms, cookies, HTTP headers etc.) to a system shell. In this attack, the attacker-supplied operating system commands are usually executed with the privileges of the vulnerable application. Command injection attacks are possible largely due to insufficient input validation.

(From OWASP's [Command Injection Page](https://www.owasp.org/index.php/Command_Injection).)

### How is it possible for an attacker's commands to be "injected" via input data?

Let's think about the options we developers have for how to interact with the local operating system. *Generally*, if we want to do something that has an effect on the local machine (ex: write a file to disk, check the local time, etc.), we have atleast two options:
- Find a library that makes the correct [system calls](https://en.wikipedia.org/wiki/System_call) to gather information or have the desired effect.
- "Shell out" and trigger commands to execute as if we were giving our application access to a terminal.

While both of these can (in most cases) have the same ultimate effect, it's critical to be very careful any time you send user-controlled input to an operating system shell.

In the same way we needed the make sure our application's interactions with its database were secure against SQL Injection, we must make sure our application's interaction with the operating system is also done properly.

### What are the security implications of Shell or Command Injection?

If we fail to sanitize or escape user input before it gets passed to a shell, a malicious user will be able to trigger Shell Injection, leading the arbitrary code executing with the same permissions as our application.


---
<a name="demo"></a>
## Demo: Exploiting an Application Vulnerable to Command Injection (15 min)

> ***Note:*** One thing especially important to know about this vulnerability class is that -- in many cases -- exploit behavior will vary between different operating systems. If an application uses shell commands that are not portable across different operating systems (or if an attacker injects non-portable commands), the application or exploit will likely no longer work. The following demo will assume the backend is running on macOS.

For our first demo, let's take a look at an example "Date/Time Formatter" application. Here, the normal use case is for users to specify the format they would like to receive the current date & time in, and the webserver will return the data in this format.


### Part 1: Getting the application up and running

> ***Note:*** For the sample files included, students will need to install ```express``` and ```shelljs``` with npm.

Change your directory to the ```example-files/``` directory:

    $ cd ./example-files/

Start your server with the following:

    $ node app.js

To test the server, open a web browser and navigate to:

    http://<your server host>:8080/

(If you're running this server on your laptop for instance, \<your server host\> would be `localhost`.)

When you see the text ```The server is up and running!``` in response to the request above, continue on to Part 2.


### Part 2: Use the application as a standard user

For this example, let's say you want to get information about the current year, month, and day as well as the current hour, minute, and second.

To do this, send a request to the following URL in your web browser:

[http://localhost:8080/date/%Y-%m-%d %H:%M:%S](http://localhost:8080/date/%25Y-%25m-%25d%20%25H:%25M:%25S)

(Be sure to note that the ```%``` symbols are URL-encoded to ```%25```!)

Now let's get just the current date with the year, month, and day separated by commas:

[http://localhost:8080/date/%Y,%m,%d](http://localhost:8080/date/%25Y,%25m,%25d)

We can continue to try different format strings and we will continue to receive the date back in whatever format we request.


### Part 3: Show how Command Injection can be used to execute arbitrary commands

Let's think back on the general principles that led us to find other kinds of injection vulnerabilities in the past...

What *attack surface* is there for us to explore as a user?

What kind of *malformed input* might lead to Command Injection?

Let's start by restating what may (or may not!) be obvious: ***The format string we supply will be dropped directly into an operating system shell.***

What sorts of characters might break the assumption that ***one and only one*** command will be executed in the call to ```shell.exec()```? What happens, for example, if we put a ```"``` character at the end of our string?

[http://localhost:8080/date/%Y,%m,%d"](http://localhost:8080/date/%25Y,%25m,%25d")

What happened? Did the backend application spit out something that looks like this?

> /bin/sh: -c: line 0: unexpected EOF while looking for matching `"`
> /bin/sh: -c: line 1: syntax error: unexpected end of file

If so, great! Looking at web browser, it looks like that caused it to return an empty date string...

**Being able to cause an application to spit out errors and return empty data should be a major indicator that there may be unsafe behavior nearby!**

Let's try a slight modification and assume that we can use the traditional command-separator character (```;```) to give a *second command* that ```shell.exec()``` should execute after the ```date``` command finishes:

[http://localhost:8080/date/%Y,%m,%d"; echo "hello world](http://localhost:8080/date/%25Y,%25m,%25d%22;%20echo%20%22hello%20world)

What happens here? Do you get something like this?

> The current datetime is: 2017,06,21 hello world

If so, congratulations! You just injected your first command! (In this example, that command was ```echo "hello world"```.)

What actions could a malicious user trigger with this vulnerability? ***Anything that the application itself has permission to do.***

---
<a name="file-inclusion"></a>
## Intro to New Material: Local File Inclusion (10 min)

A type of vulnerability that's closely related to Shell Injection is *Local File Inclusion*.

> Local File Inclusion (also known as LFI) is the process of including files, that are already locally present on the server, through the exploiting of vulnerable inclusion procedures implemented in the application. This vulnerability occurs, for example, when a page receives, as input, the path to the file that has to be included and this input is not properly sanitized, allowing directory traversal characters (such as dot-dot-slash) to be injected. Although most examples point to vulnerable PHP scripts, we should keep in mind that it is also common in other technologies such as JSP, ASP and others.

(From OWASP's [Testing for Local File Inclusion](https://www.owasp.org/index.php/Testing_for_Local_File_Inclusion) page.)

What would happen if, for example, the demo application had taken a *filepath* in from the user and returned the contents of the file?

Even if the application guaranteed only one shell command would execute and validated the user input to only allow characters used in file paths & names -- what would happen if ```../``` were three allowed characters?

Local File Inclusion can lead directly to an attacker being able to grab the contents of an arbitrary file on the filesystem, but it can also lead to more severe security violations like arbitrary code execution in some cases.

---
<a name="conclusion"></a>
## Conclusion: Review of Key Terms (5 min)

- What is the Principle of Least Privilege?
- How can Data Encryption be used to improve the security model of your application?
- Is Data Encryption a cure-all solution for ensuring your application keeps all its data confidential?
- How can Shell Injection be used to compromise your application's security model?
- How can Local File Inclusion be used to compromise your application's security model?
