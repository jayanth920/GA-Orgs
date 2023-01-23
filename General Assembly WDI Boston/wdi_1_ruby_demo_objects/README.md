# Ruby Object Oriented Programming (OOP)

We are going to learn how Ruby enables OOP. 

Ruby, like other OO languages, allows the creation of data types. So, far we've worked with some of Ruby's built-in data types such as Fixnum, String, Array and Hash. We're going to learn how to create our own data types.

We're going to do this while we create a application for the Life Insurance industry. 

Along the way we'll going to learn a lot about how Ruby gives us the tools to create well designed and implemented applications and programs.

Along the way we are going to learn about some of the below. _What we don't get to we will in another lesson_:

* Classes
* Objects and how they are created. Object are also know as instances of a class.
* Instance attributes/variables
* Defining Behavior with instance and class methods.
* Sending messages to objects, _invoking methods_.
* Instance methods. 
	* Getters - methods that expose object/instance attributes.
	* Setters - methods that allow one to set an object/instance attributes.
	* Boolean methods.
* Private and protected methods.
* Modules used as Mixins
* Modules used to create namespaces.
* Class constants.
* Scoping rules.
* Self.
* Encapsulation.
* DRY (Don't Repeat Yourself)
* YAGNI (You aint going to need it)
* Pry Debugger, stepping through code.
* Ruby's inspect method. Handy for debugging.
* Ruby 'require'.


## Life Insurance application.
We're going to create a Life Insurance application. It will allow the user, _typically a Insurance Agent or an Employee of the company_, to insure people if they meet a certain set of constraints. 

We want to insure people that will _likely_ live for over 20 years. How we calculate a person's lifespan is based on a set of their behaviors, backgrounds and genetics.

Some of the factors that will we use to determine their lifespan will be their age, gender, marital status and if they smoke cigarettes. 

Of course, their medical history, genetics and other factors will effect the lifespan as well but won't use these factors, _at least not now_.
