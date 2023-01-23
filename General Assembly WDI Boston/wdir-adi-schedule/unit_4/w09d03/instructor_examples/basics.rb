# long_variable_name = 1 #asdfasdfasdfla;ksdjf asdf;lkjasdf ;asldkf
#
# puts('hi');
# puts 'hi'
# p 'hi'

# some_var = gets
# puts some_var

# puts "Ruby"
# puts 'Python'
#
# puts "Ruby".size
# puts "Ruby".upcase
#
# puts 23.to_s
#
# foo = "bar"
# puts "oh hai #{foo}"
# puts 'oh hai #{foo}'

# long_string = <<-EOF
# asdfasdfasdflaasdf
# assert_difference "asdfasdfasdflasdfasd
#
# asdf
#
# asdf
# puts long_string
# EOF
#
# puts long_string

# a = false
# b = true
# p a && b
# p a || b

# puts 5 / 2
# puts 122
# puts 0x7a
# puts 0123
# puts 0b11101011101
# puts 23_493_234_234

# p 5/2.0
# p 5.fdiv 2
# p 12.to_f
# p sprintf "%.4f" % (1/3.0)
# p 1.2e-3

# puts 1.2 - 1.0
# require 'bigdecimal'
# puts BigDecimal("1.2") - BigDecimal("1.0");
# puts BigDecimal('0.00000000000000001')

# p 2.to_r
# p Rational 0.5
# p 2/3r
# p 2/3r + 1

# a = nil
# puts a

# light = 'on'
# light = :on
#
# # foo = :on
# foo = 'on'

# p :name.object_id
# p :name.object_id
#
# p "name".object_id
# p "name".object_id
#
# foo = :bar
# foo = :baz
#
# p :name.methods.size
# p "name".methods.size

# a = [1,34,5]
# b = Array(1..6)
# c = Array(1...6)
# puts a
# p b
# p c

# domains = { 'location' => "United States" }
# domains = { :location => "United States" }
#
# domains = { 'us' => "Germany", 1=>"Slovakia", :us => "United States" }
# p domains
# p domains['us']
# p domains[1]
# puts domains[:us]

# p true.class, false.class
# p "Ruby".class
# p 1.class
# p 4.5.class
# p 23_234_324.class
# p :any.class
# p [1,2,3].class
# p({ :name => "Jane", :age => 17 }.class)

# p '4'.to_i
# p 4.to_s
# p 5.to_f
# p 0.5.to_r
# p "Jane".to_sym

# def h(name)
#     puts "Hello #{name}!"
# end
# h("matt")
# h "matt"

# a = 1
# if a > 1
#     p 'greater than 1'
# elsif a == 1
#     p 'equals 1'
# else
#     p 'less than 1'
# end

# a = 0
# # if a < 1
# unless a >= 1
#     p 'Less than 1'
# end
#
# a = 5
# puts 'equals 1' if a == 1
# puts 'not greater than 1' unless a > 1

# a = 0
# while a < 5 do
#     p a
#     a += 1 #++
# end
#
# a = 0
# until a == 5 do
#     p a
#     a+=1
# end
#
# # for(let i = 0; i < 5; i++)
#
# for i in 0...5 do
#     p i
# end


# var myArray = ['one', 'two', 'three']
# myArray.forEach((str)=>{
#     console.log('the value is ' + str)
# })

# ['one', 'two', 'three'].each { |str| puts "the value is #{str}" }

# var basicArray = [1,2,3];
# var timesTwo = basicArray.map((num)=>{
#     return num*2;
# });
# console.log(timesTwo);

# times_two = [1,2,3].map do |num|
#     num * 2
# end
# p times_two
#
# times_two = [1,2,3].map { |num| num * 2 }
# p times_two

# var each = function(array, callback){
#     for(let i = 0; i < array.length; i++){
#         callback(array[i])
#     }
# }
# each([1,2,4], (elem)=>{
#     console.log(elem)
# })

# def each(arr, &blk)
#     for elem in arr
#         # blk.call(elem)
#         yield(elem)
#     end
# end
# each 0...5 do |currentNum|
#     puts currentNum;
# end

# log = Proc.new { |el| puts el }
# log.call(5)

# const foo = ()=>{
#     console.log('hi')
# }
#
# const bar = (callback)=>{
#     callback();
# }
# bar(foo);

# foo = Proc.new do
#     puts 'hi'
# end
#
# def bar(callback)
#     callback.call();
# end
# bar(foo)

# p [1,2,3,4,5].select { |i| i > 3}
# p [1,2,3,4,5].detect { |i| i > 3 }
# p [1,2,3,4,5].reject { |i| i > 3 }

# p [1,3,5,10,15].grep(1..5)
# p [0.3, "three", :three, "thirty-three"].grep /three/
# p [1,3,5,10,15].grep (1..5) {|i| i * 3}

# p ['squirtle', 'mew', 'charmeleon', 'pikachu'].sort
# p ['squirtle', 'mew', 'charmeleon', 'pikachu'].sort_by { |word| word.length }

# p [2,5,1,3].sort
# p [2, "hello", 1, "what"].sort
# p [2, "hello", 1, "what"].sort_by(&:to_i)
# p [2, "hello", 1, "what"].sort_by(&:to_s)

# p %w(mew pikachu).any? { |word| word.length <= 3 }
# p %w(mew pikachu).all? { |word| word.length <= 3 }

p (5..10).reduce(:+)
p (1..4).reduce(:*)
p [5,6,7].reduce(5, :+)
