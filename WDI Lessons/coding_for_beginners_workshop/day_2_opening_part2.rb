#  distribute https://gist.github.com/jnappy/17d0d99b7ded311a0eff
require 'pry'

def clean_full_name(first_name, last_name)
  "#{first_name.downcase.capitalize} #{last_name.downcase.capitalize}"
end


#create another method called clean_address 
#it accepts two parameters: town, two_digit_state
#this method should make all the letters of the town parameter lowercase and then capitalize the first letter of the town
#(bonus if you have a two-word address and you can capitalize both)
#this method should also capitalize both letters of the two_digit_state parameter
#return it in the format: "New York, NY"


puts "What is your first name?"
user_first_name = gets.strip

puts "What is your last name?"
user_last_name = gets.strip

full_name = clean_full_name(user_first_name, user_last_name)

#store the results of the clean_address method in a variable called full_address

#display the stored information in this format: "Jay Nappy lives in New York, NY"



articles = ['Help', 'Coding for Beginners', 'Today in GA', 'Traffic Stinks', 'Late Night Snacks']

articles.size
#=>5

articles.empty?
#=>false

articles.reverse
#=>["Late Night Snacks", "Traffic Stinks", "Today in GA", "Coding for Beginners", "Help"]




