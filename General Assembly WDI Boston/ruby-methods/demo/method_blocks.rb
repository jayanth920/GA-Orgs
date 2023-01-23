# Pass a block argument to the Fixnum#times method
3.times { puts "Say Hello" }

# same as above but pass the block an argument
3.times { |num| puts "#{num} Say Hello" }


# Look up the Fixnum#times method, Oh Fixnum class is a child of Integer class!

# call a Range object, (33..44), each method and pass it a block.
# Look up the Range#each method
(33..44).each { |i| puts "got #{i}" }
