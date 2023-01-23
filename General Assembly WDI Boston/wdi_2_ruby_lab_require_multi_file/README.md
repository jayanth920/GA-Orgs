## Ways to load code.
[Ways to load code](https://practicingruby.com/articles/ways-to-load-code?u=dc2ab0f9bb)

load, autoload, require and require_relative.

#### Load Path
Ruby will look in it's $LOAD_PATH global variable for a list of 
directories to look for ruby files. A ruby file must be loaded by using
'load', 'require' or 'require_relative'. 

$LOAD_PATH is an array of strings that are paths of directories
used to look for ruby file.

Installing a gem, such as pry, will add a path to the $LOAD_PATH.

For example, my $LOAD_PATH has the entry  "/Users/tdyer/.rvm/gems/ruby-2.0.0-p353/gems/pry-0.9.12.4/lib". 
So, when I use 'require pry' in a ruby file it will attempt to load the file.
"/Users/tdyer/.rvm/gems/ruby-2.0.0-p353/gems/pry-0.9.12.4/lib/pry.rb"

By convention this pry.rb file will require all the other files needed by pry.



***Open pry and look at the $LOAD_PATH***

<code>
pry(main)> $LOAD_PATH
</code>

<code>
pry(main)> $:
</code>

To load all the ruby files needed by pry.

<code>
pry(main)> require 'pry'
</code>

#### Kernel#load
This will reload the ruby file every time it's called. Good for debugging.

<code>
pry(main)> load 'calendar.rb'
</code>

change the file 

<code>
pry(main)> load './calendar.rb'
</code>

notice the changes have been picked up.

<code>
pry(main)> load './calendar'
</code>

Must have the .rb on the file name to load.

> Load is typically used for checking for small changes and debugging

#### Kernel#require
This will load a ruby file ONCE and only once. All subsequent require statements will not reload the file.

This will look for the ruby file in.
    
    1. The $LOAD_PATH
    2. Relative to the CURRENT DIRECTORY.

* Doesn't need the .rb file extension, but won't hurt if it's there.
* Does need the relative path './'.

<code>
pry(main)> require './calendar'
</code>

change the file 

<code>
pry(main)> require './calendar'
</code>

notice the changes are NOT seen and false is returned.

> Use require for gems. For example, 'require pry'


#### Kernel#require_relative
Problem with Kernel#relative is that the relative path is relative to where ruby was invoked/executed. Its not relative to where the file resides.

In the show_person.rb file we use this require to try to load the Person class.

<code>
require '../lib/person'
</code>


<code>
$ ruby bin/show_person.rb
</code>

When we run this in the root directory of this project it WILL NOT work. Because it will go up one directory, '..', and look for the lib directory. Since the parent directory of this root directory does not have a lib directory the require will fail.

<code>
$ cd bin
</code>


<code>
$ ruby show_person.rb
</code>

If we cd into the bin directory and try to run this it WILL work. Because it will look into the parent directory of this bin directory, look for the lib directory (which it will find), then load the person.rb from the lib directory.

To be able to run this ruby file from anywhere we need to use require_relative. This will try to find the file we are requiring relative to the file that has that has the require_relative statement.

<ul>In bin/show_person.rb:
<li>uncomment require_relative '../lib/person'</li>
<li>comment out require '../lib/person'</li>
</ul>

<code>
$ ruby bin/show_person.rb
</code>

OK if we run from the root directory.

<code>
$ cd bin
</code>

<code>
$ ruby show_person.rb  
</code>

Still OK, remember require failed if we tryed to run it in the bin directory.

<code>
$ cd ../tmp
</code>

<code>
$ ruby ../bin/show_person.rb
</code>

Still OK, running from the tmp directory.

You may run across an older hack, pre ruby 1.9.0, for this problem. It adds the current directory of the file in the Ruby load path. DON'T USE THIS.

<code>
$LOAD_PATH.unshift("#{File.dirname(__FILE__)}/../lib")
</code>

## LAB

### Change code and see how load, require and require_relative behave.
* Create Person class, in the lib dir, that has name and age attributes. It will also have a method to determine if person can vote. Initially a person can vote if the are over 18.
* Open pry and "load" this person class.
* Create a person that is age 19.
* Can they vote?
* Now change the person class so that the voting age is now 21.
* load the person class. Was the change seen?
* Do the above for require and require relative.

### Create a make_voters.rb file in the bin directory. 
This will create voters of different ages, some to young to vote.

* In the bin/make_voters.rb file add this to the top of file. require '../lib/person'
* Run the command from the root directory "ruby bin/make_voters.rb"  
* Run the command from the bin directory "cd bin; ruby make_voters.rb"
* Run the command from your HOME directory "cd ~; ruby your path here/make_voters.rb"
* Change the require in this file to require_relative and do the above.

