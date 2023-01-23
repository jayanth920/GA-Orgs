#This is the cheatsheet for hashed by Cenk Holly and Collin
new_hash = { #This line defines a hash

    hash_item1: "hash value a", #hash_item1 = key; "hash value a" = value

    hash_item2: "hash value b",

    hash_item3: "hash value c",

    hash_item4: { #this is a nested hash; a key whose value is a hash

        inner_item1: "inner value a",

        inner_item2: "inner value b"

             }

}
# another_new_hash shows the second method for defining a hash
another_new_hash = Hash[ :hash_item1, "hash value a", :hash_item2, "hash value b", :hash_item3, "hash value c",:hash_item4, [:inner_item1, "inner value a", :inner_item2, "inner value b"]]
                                                                                                  ## hash_item4 is a key containing an array

new_hash[:hash_item1] #this returns the value for :hash_item1
new_hash["hash_item1"] #this will not return a value; a key must be called by its Object-type

new_hash[:hash_item4][:inner_item2] #this will return "inner value b"



new_hash.map {|key,value| puts "#{key} #{value}"} #this will iterate over keys and values

#newer_hash = new_hash.map! {|key,value|  value = "value"} #this does not work! can't change a hash

new_hash[:hash_item5] = "hash value d" #adds on a new key=value pair

new_hash.delete(:hash_item2) #deletes the targeted key-value pair; returns deleted value;
                            #returns nil if key does not exist
hash_with_default = Hash.new('default') #when a new key is created in this hash it will
                                        #automatically have a value of 'default'
                                        #if no value is specified


