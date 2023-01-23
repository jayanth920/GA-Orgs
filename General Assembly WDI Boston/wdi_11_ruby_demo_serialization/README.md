## Ruby serialization

We can persist Ruby objects to files, _or some other persistent storage_ .

There are a number of different formats that we can use to save these _representations_ of Ruby objects as. And there are different tradeoffs, constraints and benefits of using these different formats.

In this demo we're going to look at two of these formats, YAML and Binary formats.

### YAML (Yet Another Markup Language?)

YAML is a human friendly data serialization standard for all programming languages. Ruby and Rails often uses YAML to save or persist data into files. 

For example, Rails using yaml to save it's database connection info, _see config/database.yml_.

The latest version of YAML, 1.2, is stricty [defined](http://www.yaml.org/spec/1.2/spec.html/).

##### Lab (YAML)
We are going to create and persist a set of _representations_ of Users. These users are defined using three Ruby classes contained in the lib directory. 

Each user has a set of attributes, email, uid _(unique id)_, preferences and mailing address.

The User class contains a MailingAddress and UserPreference instance. 

We are going to use the [Faker gem](https://github.com/stympy/faker) to create a large_-ish_ set of users, _see bin/create_users.rb_.

Then we will save these users to a file using YAML, _see bin/create_users_yaml.rb_.

Finally, we will read the representations of these users from that YAML file and and show them, bin/read_users_yaml.rb.

* bundle install
* Create a simple CLI program to persist the users in a yaml file.
* Open up the file used to persist these users with an editor.
* Use the Unix _tail_ and _head_ commands to view the start and end of this file.
* Create a simple CLI program to read the users from the YAML file.

### Binary 
Ruby provides a way to serialize, _marshal_, and deserialize, _unmarshal_, Ruby objects to a binary representation. [Ruby marshal format](http://goo.gl/6ifMGb).

#### Lab (Binary)
* bundle install
* Create a simple CLI program to persist the users in a binary file.
* Open up the file used to persist these users with an editor. _This should just be goobly gook_.
* Use the Unix _tail_ and _head_ commands to view the start and end of this file.
* Create a simple CLI program to read the users from the binary file.


#### Lab (Performance)
Use the Ruby benchmark class to compare the performance of serialization and de-serialization of these two file formats.

#### Lab (JSON)
Persist these users using JSON. 

Then measure and compare the serialization performance.

#### Lab (Summary)
Summarize the pros and cons of using each type of file format to persist data.

This summary should be in a markdown file named, Summary.md, in the root directory of this repo.

### References
* [Serializing Objects](http://www.skorks.com/2010/04/serializing-and-deserializing-objects-with-ruby/)
* [YAML Spec](http://www.yaml.org/spec/1.2/spec.html/)
* [Binary file formats](https://practicingruby.com/articles/binary-file-formats)
* [Serialization in Ruby](http://ruby.about.com/od/advancedruby/ss/Serialization-In-Ruby-Marshal.htm)