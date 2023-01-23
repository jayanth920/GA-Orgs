## Ruby Modules.

Ruby modules can be used:

1) As a __Mixin__ which shares behavior by _including_ methods from a Module into Classes.  
2) To create a __Namespace__ that will prevent name collision between Classes and Modules in one's application and the libraries they are using.

## Modules as a Mixin

See [Instructor Notes](instructor_notes.md)

## Modules as a Namespace

If an application has a common name, like Date or Person. It could collide or conflict with another class of the same name in a library being used.

### Demo

In my Dating application I have a Date class representing a date
between people.

And in my Ruby library, _gem_, I have a Date class representing today or some other day.

Then this will cause a _Name Collision_. These Date classes represent totally different concepts. But, they will be mixed in together.

And perhaps they MAY have methods of the same name. In which case the last class loaded into Ruby will override the definition of the previous method.

#### Look at the bin/dating_app.rb

Got an Argument error probably because we're trying to use the wrong method on the wrong Date class.

#### Solution is to use a Ruby module as a Namespace.
Wrap the application Date class in a module. 


#### Look at the bin/dating_app_done.rb

Here we are _Namespacing_ the app's Date class inside the namespace
MyDatingApp. And using this namespace when we need the app's Date class.


### Advanced
If you are coming from another language that allows classes to have multiple parents. You will notice that Ruby will only allow you subclass from one other class.

This constraint will prevent the [Diamond Problem](http://www.programmerinterview.com/index.php/c-cplusplus/diamond-problem/).  

If a subclass, D, inherits from 2 classes, B & C, and B and C both have a method of the same name, sum. 
    
Which method is used when we call the sum method on an instance class D?

 
