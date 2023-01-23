system "clear"
# puts  "Write something: "
# input = gets.chomp
# puts "You wrote #{input}"
# puts "You wrote something" if input == "something\n"

dictionary = ["potato", "honey", "tea", "rice", "quinoa"]
# .sample will randomly pull an element from dictionary
word  =  dictionary.sample

puts  "Guess which word I secretly chose!"
puts "The word has #{word.length} letters"

# when using loop do we need to force quit the loop
# and this can be done using break
loop do
  puts  "Write something: "
  # capture user input
  input = gets.chomp.downcase
  #compare
  if input == word
    puts "Yep. You got it. The word was #{word}."
    break
  else
    puts "WRONG"
    # determine if user wants to continue  playing
    puts "(t)ry again or (q)uit?"
    # standardize the input
    # capture user input again
    again = gets.chomp.downcase
    #break the look if user presses q
    break if again == "q"
    # if again == "q" then puts "ok" end
  end

end
