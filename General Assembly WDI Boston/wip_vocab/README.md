WDI Vocab
=========


## Dynamic Dispatch

* The process of selecting which implementation of a polymorphic operation (method or function) to call at runtime.
* Dynamic dispatch contrasts with static dispatch in which the implementation of a polymorphic operation is selected at compile-time.
* The purpose of dynamic dispatch is to support cases where the appropriate implementation of a polymorphic operation can't be determined at compile time because it depends on the runtime type of one or more actual parameters to the operation.

[Wikipedia: Dynamic Dispatch](http://en.wikipedia.org/wiki/Dynamic_dispatch)


## Protocols

* In object-oriented programming, a **protocol or interface** is a common means for unrelated objects to communicate with each other. These are definitions of methods and values which the objects agree upon in order to cooperate.

[Wikipedia: Protocol (Object-Oriented Programming)](http://en.wikipedia.org/wiki/Protocol_(object-oriented_programming))

* A **routing protocol** specifies how routers communicate with each other, disseminating information that enables them to select routes between any two nodes on a computer network.

[Wikipedia: Routing Protocol](http://en.wikipedia.org/wiki/Routing_protocol)


## NoSQL

* A NoSQL or **Not Only SQL** database is a non-relational database. Motivations for this approach include simplicity of design, horizontal scaling and finer control over availability.
* Examples of NoSQL data structures include key-value, graph, or document. Depending on the problem, some operations are faster in NoSQL than in a relational database.

[Wikipedia: NoSQL](http://en.wikipedia.org/wiki/NoSQL)

[List of NoSQL Databases](http://nosql-database.org/)


## Heap Memory

* The portion of memory where dynamically allocated memory resides (i.e. memory allocated via [malloc](http://stackoverflow.com/questions/1213403/what-is-malloc-doing-in-this-code)).
* Memory allocated from the heap will remain allocated until one of the following occurs:
	* The memory is free'd
	* The program terminates

[Stack Overflow: What is a memory heap?](http://stackoverflow.com/questions/2308751/what-is-a-memory-heap)


## Prototype-Based Programming

* A style of object-oriented programming in which behaviour reuse (known as inheritance) is performed via a process of cloning existing objects that serve as prototypes.

[Wikipedia: Prototype-Based Programming](http://en.wikipedia.org/wiki/Prototype-based_programming)


## Law of Demeter (LoD)

* The Law of Demeter (LoD) or **principle of least knowledge** is a design guideline for developing software, particularly object-oriented programs. It can be succinctly summarized by the following: *Each unit should have only limited knowledge about other units: only units "closely" related to the current unit.*
* The fundamental notion is that a given object should assume as little as possible about the structure or properties of anything else (including its subcomponents), in accordance with the principle of ["information hiding"](http://en.wikipedia.org/wiki/Information_hiding).

[Wikipedia: Law of Demeter](http://en.wikipedia.org/wiki/Law_of_Demeter)


## Kleene Plus (the plus sign)

* In regular expressions, the Kleene Plus (+) means "in any length, larger than zero."

[Udacity: Difference between * and +](http://forums.udacity.com/questions/7009162/can-anyone-explain-difference-between-and-in-regular-expression)


## Node

* In general, a node is a **device or data point on a larger network**. On the internet, a node is anything with an IP address. In reference to data structures, a node is an individual part of a larger data structure.

[Wikipedia: Node (Computer Science)](http://en.wikipedia.org/wiki/Node_(computer_science))

* Node.js is a cross-platform runtime environment for server-side and networking applications. Node.js applications are written in JavaScript.
* Node.js applications are designed to maximize throughput and efficiency, using non-blocking I/O and asynchronous events. It is commonly used for real-time applications due to its asynchronous nature.

[Wikipedia: Node.js](http://en.wikipedia.org/wiki/Node.js)


##Primitive Data Types

* In computer science, a **primitive data type** can mean either of the following:
	* A **basic type** is a data type provided by a programming language as a basic building block. Most languages allow more complicated composite types to be recursively constructed starting from basic types.
	* A **built-in type** is a data type for which the programming language provides built-in support.

[Wikipedia: Primitive Data Type](http://en.wikipedia.org/wiki/Primitive_data_type)


##Headers

* Supplemental data placed at the beginning of a block of data being stored or transmitted.

[Wikipedia: Header (Computing)](http://en.wikipedia.org/wiki/Header_(computing))


##Groupings

* In computer science, the term group generally refers to a grouping of users. In principle, users may belong to none, one, or many groups (although in practice some systems place limits on this).
* The primary purpose of user groups is to simplify access control to computer systems.

[Wikipedia: Group (Computing)](http://en.wikipedia.org/wiki/Group_(computing))


##SSH

* **Secure Shell (SSH)** is a cryptographic network protocol for secure data communication, remote command-line login, remote command execution, and other secure network services between two networked computers.

[Wikipedia: Secure Shell](http://en.wikipedia.org/wiki/Secure_Shell)


## Subtype

* A datatype that is related to another datatype (the supertype). Program elements written to operate on elements of the supertype can also operate on elements of the subtype.

[Wikipedia: Subtyping](http://en.wikipedia.org/wiki/Subtyping)


## Status Codes
[List_of_HTTP_status_codes](http://en.wikipedia.org/wiki/List_of_HTTP_status_codes)

100 - Continue.

200  -  Success

201 - Successful POST

202 - Request being processed

206 - Partial Information returned
300  -  Redirect
301 - Moved Permanently
     307 - Temporary Redirect
     308 - Permanent Redirect
400  -  Client error
     403 - Forbidden, unauthorized
     404 - Not Found
     410 - File removed.
     429 -  Use has sent too many requests
500  -  Server error
     502 - Bad gateway
     503 - Service Unavailable
     508 -  Infinite loop

## Associative Array
An abstract data type composed of a collection of  pairs, such that each possible key appears at most once in the collection.
Arrays with named indexes are called associative arrays (or hashes)

[Hashes](http://ruby-doc.org/core-2.1.2/Hash.html)

[Javascript Associative Arrays Demystified](http://blog.xkoder.com/2008/07/10/javascript-associative-arrays-demystified/)

##Query String
In the World Wide Web, a query string is the part of a uniform resource locator (URL) containing data that does not fit conveniently into a hierarchical path structure.



## Abstraction Principle
Reduce duplication of code in a program whenever practical by making use of abstractions provided by the programming language or software libraries. DRY

##SMTP
Simple Mail Transfer Protocol is the internet standard for email.

##Self Reference
Self referencing is in the context of data -- you have a data type that contains a reference to something of the same type.

##Boolean ||
Means OR

##Port 80
Port that a web server is typically available through. (Hypertext protocol)
[List of Port Numbers](http://en.wikipedia.org/wiki/List_of_TCP_and_UDP_port_numbers)


## Dictionary
Dictionary isn’t in Javascript but you can use object notation
```
states_dictionary={"CT":["alex","harry"],"AK":["liza","alex"],"TX":["fred","harry"]};
```
In Ruby a dictionary is a hash: [Hashes](http://www.ruby-doc.org/core-2.1.1/Hash.html)

##Session Store
An application has a session for each user in which you can store small amounts of data that will be persisted between requests. All session stores use a cookie to store a unique ID for each session (you must use a cookie, Rails will not allow you to pass the session ID in the URL as this is less secure).

[Session](http://guides.rubyonrails.org/action_controller_overview.html#session)

##Event Queue

Most events are asynchronous. When an asynchronous event occurs, it gets into the Event queue. The browser has inner loop, called Event Loop, which checks the queue and processes events, executes functions etc.
For example, if the browser is busy processing your onclick, and another event happened in the background (like script onload), it appends to the queue. When the onclick handler is complete, the queue is checked and the script is executed.
http://javascript.info/tutorial/events-and-timing-depth
Static Method
Static methods neither require an instance of the class nor can they implicitly access the data (or this, self etc.) of such an instance.
http://en.wikipedia.org/wiki/Method_(computer_programming)#Static_methods

In Ruby:
```
def
	self.checkPings
end
```

http://stackoverflow.com/questions/5231534/ruby-on-rails-static-method

##Variable Instantiation

An object instance is created from a class through the a process called instantiation. In Ruby this takes place through the Class method new.

```
  anObject = MyClass.new(parameters)

```
[Classes](http://en.wikibooks.org/wiki/Ruby_Programming/Syntax/Classes)

##Pass By Value






##Stack Memory
In terms of computer memory, the stack is an area of random-access memory (RAM) allocated to hold all of the parameters and local variables associated with any function used by currently running software. The stack is also responsible for remembering the order in which functions are called so they can be returned correctly. Whenever a function is called, the parameters and local variables associated with it are added to the stack. When the function returns, the parameters and the variables are removed ("popped") from the stack. This is why a program's stack size changes continuously while the program is running.


##Event Loop
The system can't know when a user will click a button or do some interaction. But when he does, the event will propagated to the event loop, which is basically a loop that checks for new events in the queue and process them.  aka. Callbacks.


##XSS
(Cross-Site Scripting) is a type of computer security vulnerability typically found in Web applications.  XSS enables attackers to inject client-side script into Web pages viewed by other users. A cross-site scripting vulnerability may be used by attackers to bypass access controls such as the same origin policy.

##HTTP
(Hypertext Transfer Protocol) is the foundation of data communication for the World Wide Web.  Hypertext is structured text that uses logical links (hyperlinks) between nodes containing text. HTTP is the protocol to exchange or transfer hypertext.

##Port 25
Many email clients and services use port 25 for SMTP(single Mail Transfer Protocol)to send out emails. However an ISP (Internet Service Provider) may block port 25 in order to prevent spamming by its customers.  It is the virtual pathway that most e-mail traffic follows when it travels form your computer to server.

##Restful API
RESTful APIs include additional links the program can follow to request related information - similar to how you would click on a link to visit a new page - or to submit data to update the given resource - similar to how you would fill out a web form to create a new account for a web site.

##Concurrent
Is a form of computing in which several computations are executing during overlapping time periods, instead of sequentially.

##Side Effects
- Refers to the modification of some kind of state.  For example:
- Changing the value of a variable
- Writing some data to disk
- Enabling or disabling a button in the User Inferface.

Side Effect = changings something somewhere.

##Lambdas
Refers to anonymous functions in programming.  It allows you to write quick throw away functions without naming them.  It also provides a nice way to write closures.

##TSL/SSL
(Transport Layer Security protocol/ Secure Sockets Layer protocol) In the authentication process, a TLS/SSL client sends a message to a TLS/SSL server, and the server responds with the information that the server needs to authenticate itself.

The client and server perform an additional exchange of session keys, and the authentication dialog ends. When authentication is completed, SSL-secured communication can begin between the server and the client using the symmetric encryption keys that are established during the authentication process.

##Document Store Database
or Document-oriented database.  It is a computure program designed for stroing, retrieving, and managing document-oriented information.  Examples are NoSQL and MongoDB.  These databases operate on something similar to hash tables to store key/value pairs.  Are not relational databases.

##Pass By Reference
when sharing the URL.  You are passing by reference.  An example is when sharing a URL.  You can use that URL to see the same web page I can see. If that page is changed, we both see the changes. If you delete the URL, all you're doing is destroying your reference to that page - you're not deleting the actual page itself.

*http://stackoverflow.com/questions/373419/whats-the-difference-between-passing-by-reference-vs-passing-by-value*

##FTP
(File Transfer Protocol) is a standard network protocol used to transfer computer files from one host to another host over a TCP-based network, such as the Internet

##Encapsulation
In OOP, Encapsulation is the packing of data and functions into a single component.
- A language mechanism for restricting access to some of the object's components.
- A language construct that facilitates the bundling of data with the methods (or other functions) operating on that data.


##Event Driven Programming
A programming paradigm in which the flow of the program is determined by events (like mouse clicks, key presses), sensor outputs, or messages from other programs.

Dominant paradigm in GUIs and JavaScript apps, that are centered around performing certain actions based on user input.

##Stack Overflow
Occurs when the stack pointer exceeds the stack bound.

When a program attempts to use more space than is available on the call stack (that is, when it attempts to access memory beyond the call stack's bounds) the stack is said to "overflow", usually causing the program to crash.

Most common cause is excessively deep or infinite recursion.

##Slug
The term comes from the newspaper industry! How people would refer to a story in the production process.

A few words that describe a post or page. Usually a URL friendly version of the post title. Meant to be used with permalink, as they help describe what the content of the URL is.

##Control Flow
Refers to the order in which the individual statements, instructions or function calls of a program are executed.

##Contiguous (as in memory)
Contiguous memory is adjacent memory, chunks of memory that are next to one another. Two contiguous memory chunks have sequential memory addresses. These can be consolidated into one chunk by the memory manager.

##Cryptography
Hash and salt your shit. <br>
[link for insight](http://programmers.stackexchange.com/questions/51403/what-should-web-programmers-know-about-cryptography)

##CSRF
Stands for: Cross-site request forgery <br>
Also known as: *one-click attack* or *session riding*<br>
A type of malicious exploit of a website where unauthorized commands are transmitted from a user the website trusts.

It is carried out from the user's IP address. <br>

[This is confusing, read more about it](http://en.wikipedia.org/wiki/Cross-site_request_forgery)


