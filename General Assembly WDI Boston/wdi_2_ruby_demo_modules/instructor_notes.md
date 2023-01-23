## Using Modules as Mixins

A Mixin is a _Design Pattern_ that will a provide behavior that can be shared across many Classes. 

We can use Ruby modules as Mixins. It's one of the two common uses for Modules in Ruby.

A Ruby module :  

* Is defined like a class but uses the __module__ keyword instead of __class__.  
* Can NOT be used create instances/objects of a module.  
* Can be mixed into a Class using the _include_ keyword.
* When mixed in using the _include_ keyword it provides instance methods.  
* Can be mixed into the a Class using the _extend_ keyword.  
* When mixed in using the _extend_ keyword it provides class methods.  


### Demo


Create a Talk __module__ that will have a method _say_it_. The _say_it_
method will output it's argument to the OSX _say_ command. 

__First__, in the terminal type 'say this is tuesday'. Cool, huh. 

##### Create a file lib/talk.rb. 

```
  # module is a keyword
  # module is like a class, BUT you CAN NOT create an instance of a module.
  module Talk                                 
                                              
    # Output msg using the OSX 'say' command  
    def say_it(msg)
      %x{ say #{msg} }                        
    end

    # Note: %x{ some *nix command } is ruby's way of 
    # invoking a *nix command.                            
                                       
  end                                         
```

##### Create a file lib/person.rb
Create a person class.  And __include__ the Talk module.  

We are going to use the Ruby __include__ keyword to _Mixin_ the methods
defined in the Talk module into the Person class.  

```
   require_relative 'talk'                                       
                                                                 
   # Define a Person class                                       
   class Person                                                  
     # include all of the Talk module methods into this class    
     include Talk                                                
                                                                 
     def initialize(fname, lname)                                
       @first_name, @last_name = fname, lname                    
       say_it("Hey, we created #{full_name}")                    
     end                                                         
                                                                 
     def full_name                                               
       "#{@first_name} #{@last_name}"                            
     end                                                         
                                                                 
   end                                                           
```

##### Create a file bin/say_it.rb and run it.

```
  require_relative '../lib/person' 
                                   
  tom = Person.new('Tom', 'Smith') 
```

The Talk module mixed in all it's method into the Person class. Now the Person class has an _instance_ method named say_it.  

### Lab
Modify the lib/animal.rb file so that:

* A Person and Parrot can talk, use the Talk module.
* A Parrot and Bat can fly, create a module for Flying.

Modify the file bin/create_animals.rb:  
* To hear People and Parrots talk.  
* To show that Parrots and Bats can fly.


### Question: Why can't one just
 create a Talk class and make Person and Parrot a subclass of this Talk class?
 
### Demo
Using the __extend__ keyword to Mixin class methods.

* Mixin the Counter module using the __extend__ keyword.  
* Set an ID for each person using the increment_counter method.  
* Run the bin/create_person.rb 

## If your coming from other programming languages.
You may have heard of the term _Cross Cutting Concerns_ in Aspect Oriented Programming (AOP). These are Concerns/Behavior/Methods that are used in some classes. 

A typical _Concern_ in an application is Logging. It's used in many of your classes. But, you either cannot or do not want to subclass all your classes from a Log class. So the alternative is to Mixin the behavior.

_Note: AOP typically has a way of auto injecting concerns. I have never seen this in Ruby._

## Summary

A Ruby module:  

* Can be used as a _Mixin_.  
* A _Mixin_ is a set of methods that can be mixed into or included in a class.  
* The __include__ keyword followed by the name of the module will mixin the 
module's methods as __instance__ methods.  

```
class Person
  include Talk
end
```	
* The __extend__ keyword followed by the name of the module will mixin the 
module's methods as __class__ methods.  

```
class Person
  extend Counter
end
```	

* Multiple modules can be mixed into classes.  
* A Ruby class can _only_ subclass from one other class.  
	This is one reason we use modules as Mixin. To isolate behavior in modules and only include them only were needed.