require 'pry'
# This is a hash
hash = {}

# hashes are yed to store data in an unordered set.
# they are indexed by a key.
hash = { :hash_1 => 10, "hash_2" => 20}

#You can use either a symbol or a string as a key. => is necessary for two methods to store a value with a key

hash_2_ex = {three: 3, four: "four"}
#the best practice for storing data is to use symbols as keys and to emulate the code directly above.
# The way this works you type the name of symbol, a colon and the value in that order.

#to add a new value to a hash do the following:
hash[:key] = "value"

#the above can also be used to overwrite a value in the hash, but not to create a second place in the hash with the same value and key. All keys are unique in a hash, values can be either way.

hash[:key]
#this is a method of returning the value stored alongside the key we give as an argument. NOTE: there is the .fetch(key) that can be used to find the value associated with the key given in. .fetch returns nil where hash[:key] would break.

hash.key("value")
#will take the value you give it(you can enter a number or really anthing else) and find the key that matches it. Warning: cannot take two or more values at a time. Additional Warning: If there are two or more keys corresponding to the same value it will only return one of those keys.

hash.delete(:key)
#this will delete the key/value pair that is referenced by the key we give it.

#for additional help with hashes use the following link http://ruby-doc.org/core-2.1.3/Hash.html

binding.pry
