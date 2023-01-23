# Ruby Object Oriented Programming (OOP)

What are the Ruby Data Types we've learned about already? Lets create our own Data Types using Ruby classes.
# Classes

## Demo

We'll  create a Person class/data type. This will act as a kind of "template" when creating people.

__class__ is a keyword in Ruby.  

#### Create a file for the person class, _lib/person.rb_  

```
class Person
end
```

### Object creation with new
To create "an instance" of the Person class you must call the __Person#new method__. 

The new method is inherited from the BaseObject class. We'll talk about inheritence later.

##### Add this code to the bin/person_app.rb file.
```
tom = Person.new
jill = Person.new
```

Now we have two people, but they are alot alike. They have no attributes. 

### Object Attributes

Lets give these people some attributes/__instance variables__.

##### Add this to the person class.
Every class's initialize method is invoked when we call 'new'

```
class Person
  def initialize(fname, lname)

    # NOTE: instance attribute ALWAYS are preceded by the '@' sign
    @first_name = fname
    @last_name = lname
  end
end
```

 Couple new concepts here.  
* Every class typically has an initialize method. It could be _implicit__, inherited. Or explicit by coding the initialize like above.  
* Its automatically invoked by the new method.  
* It typically has arguments that set the initial state of the object's attributes.  
* Instance attributes belong to each instance of a class. In this case each person.  
* Instance attributes are ALWAYS preceded by the @ sign.  
* Instance attributes are NEVER available outside a an object. There is a way that we can make these available though.  

## Lab
Prove encapulation. Prove that instance variables are not available outside. 

## Demo
Lets create these people again.

##### Add this to the person app, bin/person_app.rb.

```
  # put this code in the bin/person_app.rb
tom = Person.new
jill = Person.new
# Oops
# person.rb:32:in `initialize': wrong number of arguments (0 for 2) (ArgumentError)


tom = Person.new('tom', 'Dyer')
jill = Person.new('jill', 'Pill')


puts "tom is #{tom}"
puts "jill is #{jill}"

puts "tom is #{tom.inspect}"
```

Not using inspect just prints out some strangeness. It kind of looks like a memory address in hexadecimal?
o
#### inspect method
The inspect method, helpful for debugging.  

It returns a string containing a human-readable representation of
 an obj. By default, this will show the class name and the list of the instance variables and their values

##### Add this to the person app, bin/person_app.rb.  

```
puts "Tom's last name is #{tom.last_name}"
# Oops
# person.rb:83:in `<main>': undefined method `last_name' for
# #<Person:0x007feb94074248 @first_name="tom", @last_name="Dyer">
# (NoMethodError)
```

An object's instance attributes are "Encapsulated" OR hidden. We'll use methods to determine the behavior exposed to clients. More Later on why.

Remember the object instance attributes are HIDDEN!!!!

### Instance methods.  

Let's create an instance method to calculate the Person's full name.  

_instance methods can only be called on an object. Later we'll learn about class methods_

```
class Person
  # Every class's initialize method is invoked when we call 'new'
  def initialize(fname, lname)
    @first_name = fname
    @last_name = lname
  end

  # This is an instance method.
  def full_name
    "#{@first_name} #{@last_name}"
  end
end
```

The methods of a class defines the classes Behavior. Above people can ONLY give you their last name. Thats all the behavior they have!

##### Add this to the person app, lib/person_app.rb.

```
puts "tom's full name is #{tom.full_name}"
```


#### Getter and Setter methods.  

_Note: getter and setter methods are also instance methods_  


##### Getter methods.  

There may be times when we __do__ want to know what a person's first and last names are. 

So lets add the ability, behavior, for'getting' these instance variables.    

```
class Person
  def initialize(fname, lname)
    @first_name = fname
    @last_name = lname
  end

  def full_name
    "#{@first_name} #{@last_name}"
  end

  # instance variable 'getter' method, aka 'getter'
  def first_name
    @first_name
  end

  # instance variable 'getter' method, aka 'getter'
  def last_name
    @last_name
  end
end
```

##### Add this to the person app, lib/person_app.rb.

```
 # put this code in the bin/person_app.rb
puts "Tom's first name is #{tom.first_name}"
puts "Tom's last name is #{tom.last_name}"
```



##### Setters

* How often does a person's name change?  
	Hardly ever. Maybe a marriage? And then only the last name.

Lets add a 'setter' method only for the last_name.   

```
class Person

  def initialize(fname, lname)
    @first_name = fname
    @last_name = lname
  end

  # Setter for last name
  def last_name=(lname)
    @last_name = lname
  end
end
```

Ok now I can change the last_name.
##### Add this to the person app, lib/person_app.rb.

```
 # put this code in the bin/person_app.rb
jill = Person.new('jill', 'stein')
puts "jill's name is #{jill.full_name}"

jill.last_name = "Smith"
puts "jill's name is #{jill.full_name}"
```



```
 # Oops why doesn't this work?
jill.last_name("Foo")
 
jill.last_name=("Foo")  # same as jill.last_name =
puts "jill's name is #{jill.full_name}"
```

### YAGNI (You aint gonna need it!)

So, the take away is only allow changes that are needed __RIGHT NOW__. Don't try to guess what the future behaviors this class will need. 

It's a common fail to guess future requirements. You'll never know less about what your app will need or become than right now!

You'll discover more about whats needed when the app is actually being used. _Don't worry, people will let you know_.


### LAB 

Look up __""Yak Shaving"_. You'll hear the term in the development community.  

_We all shave yaks from time to time_.  

Create a Song class in lib/song.rb that will have:

* A title, artist_name, duration (seconds) and price.
* Add ONLY the appropriate accessors (getters/setters)

Modify the file, __bin/song_app.rb_ and :  
* Create 3 songs  
* Show the songs.  
* Calculate and show the average duration and price.  
* Change the one or more songs attributes.  
* Calculate and show the average duration and price.  



### Attribute accessors.  

```
class Person
  attr_reader :first_name
  attr_accessor :last_name

  # Every class's initialize method is invoked when we call 'new'
  def initialize(fname, lname)
    @first_name = fname
    @last_name = lname
  end

  def full_name
    "#{@first_name} #{@last_name}"
  end

end
```

* attr_reader - creates a getter method
* attr_writer - creates a setter method
* attr_accessor - creates a getter and setter method.


### LAB 

 Update the Song class and app to use the attr_* 
 

### Demo
Lets give people a dob, age, years_to_live, ...

Remember, this is going to be a life insurance app?

```
class Person
  attr_reader :first_name, :dob
  attr_accessor :last_name

  # dob_str format must be '%m-%d-%Y'
  def initialize(fname, lname, dob_str)
    @first_name = fname
    @last_name = lname

    @dob = Date.strptime(dob_str, '%m-%d-%Y')

    @years_to_live = 79 - age
  end

  # calculate the age from dob
  def age
    now = Date.today
    now.year - dob.year - (now.strftime('%m%d') < dob.strftime('%m%d') ? 1 : 0)
  end

  # Get the expected death year for person
  def expected_death_year
    Date.today.year + @years_to_live
  end

  def give_insurance?
    # Huh? What is this bang, bang?
    !!(years_to_live > 20)
  end

  def years_to_live
    @years_to_live = expected_death_year - Date.today.year
  end
end
```

##### Add this to the person app, lib/person_app.rb.

```
puts "Jill's age is #{jill.age}"
puts "Tom's age is #{tom.age}"

puts "Jill will likey croak in #{jill.expected_death_year}"
puts "Tom will likey croak in #{tom.expected_death_year}"

# Change Tom’s birth year above, to check this out.
msg = tom.give_insurance ? "should" : "should not"
puts "We #{msg} give #{tom.full_name} insurance"

```

#### LAB 

Update the Song class to have a release date and artist percentage.  

_Note, these attributes will never change._

Add the following behavior to your app.  
* Create a method to give the artist a percentage of the price.  
* Initially, at release, an artist will get 20% of the price. Need a new attribute here.  
* For every 5 years that the song is available decrease the artist percentage by 5 percent.  

#### Demo

Research shows people that are married live 5 years longer than single. _Note: don't tell em how my brief marriage took 20 yrs off my life_

Update the class to reflect this research

```
class Person
  attr_accessor :married

  def married?
    married
  end

  # Get the expected death year for person
  def expected_death_year
   if married?
      Date.today.year + @years_to_live + 5
    else
      Date.today.year + @years_to_live
    end
  end

   def give_insurance
    !!(years_to_live > 20)
  end
  
  def years_to_live
    @years_to_live = expected_death_year - Date.today.year
  end
end
```
##### Add this to the person app, lib/person_app.rb.
```
 # tom is married, so he should live 5 years longer, maybe                       
tom.married = true
puts "Tom will likey croak in #{tom.expected_death_year}"
msg = tom.give_insurance ? "should" : "should not"
puts "We #{msg} give #{tom.full_name} insurance"
```

We'll it works BUT we had to make the changes in two places for this new feature.


##### Refactor!

* Refactor
	Improve the implemtation. Typically using coding idioms.  
* DRY - Don't Repeat Yourself. Don't have multiple copies of the same code throughout your app. 
	 Why?  

How might we _refactor_ this to remove duplication in this implementation. Hint: make code live in one place? 

```
class Person

  def expected_death_year
      Date.today.year + years_to_live
  end

  def give_insurance
    !!(years_to_live > 20)
  end

  def years_to_live
    @years_to_live = 79 - age + (married? ? 5 : 0)
  end

end
```

We "Refactored" the years_to_live calculation to check for a marriage. method. This Helped improve the class by reducing the number of places in we needed to change code.


#### Method Visibility 
We can use the _private_ keyword to limit access to a method. Insert _private_ in your class and all subsequent methods will __ONLY__ be available inside of other instance methods.

Code outside this class can __NOT__ invoke/call a private method.

All methods in a class defined __AFTER__ the private keywords are 
not available outside the class.

```
class Person
  private
  def years_to_live
    79 - age + (is_married? ? 5: 0)
  end

end
```


### Lab
Add another feature. Lets take off 7 years for smokers. Only current smokers.


### Self
"We use _self_ similar to the way we use pronouns in natural languages like English and French. We write: “John is running fast because he is trying to catch the train.” Note the use of the pronoun “he.”  

We could have written this: “John is running fast because John is trying to catch the train.” We don’t reuse “John” in this manner, for if we do, our family, friends, and colleagues would abandon us. Yes, they would. In a similar aesthetic manner, we use the _self_ keyword as a shortcut, a referent to refer to an object."

Self is a variable that lives inside __every__ object. 

When you "call a method" you are actually sending a message to an object. 

```
jack = Person.new('Jack', 'Smith')

 # sends the "message",full_name, to the object 'jack'
 # inside the method full_name the variable 'self' will 
 # point to the obj jack.
jack.full_name

```

#### We can use self inside instance methods.

```
class Person
  attr_accessor :status

  ...
  
  def status=(new_status)
    @status = new_status
     %x{ say "#{full_name} has changed their status to #{status}"}
  end

  def signed_contract
    # will not call notify method in setter
    # @status = 'active'
    
    # will ONLY set the method's local variable
    # status = 'active'
    
    self.status # yep
  end
  
end
  
```
```
 # Should 'say' I've changed my status to active                                 
 # tom.status = 'active'                                                         
 tom.signed_contract
 puts "Tom's status is #{tom.status}"
```


### Inheritance
We want to re-use the Person class but it has all kinds of behavior only used for calculating life insurance.

Lets create a InsuredPerson that is a subclass of Person. Move the expected_death_year and maybe other methods to the InsuredPerson class.

Why?

## Modules

### Used a namespace

### Used as a Mixin  

Create a Rabbit and Parrot class. Then create a Talk module that will _say_ something. 

Mix this Talk module into the Person and Parrot classes.


### Class variables/methods
Give the Insured People an id when they are created,'ins_id'. It should be calculated from calling a InsuredPerson.generate_id method.

Create a method to generate ids for InsuredPersons


#### Lab:
 Create a method to find all the People that can be insured. Use InsuredPerson.give_insurance?

