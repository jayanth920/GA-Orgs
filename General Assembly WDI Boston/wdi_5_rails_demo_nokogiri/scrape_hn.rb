require 'nokogiri'
require 'pry'
require 'open-uri'

# Front page. This has made the HTTP request to hacker news and is storing the document in doc
# doc = Nokogiri::HTML(open('https://news.ycombinator.com'))

# Finds all the things that have title as the class
# first_title = doc.css('.title a').first

# doc.css('.title a').each do |title|
# 	# Put the text of the title
# 	puts title.text	

# 	# Put the link of the title
# 	puts title.attributes["href"].value
# 	puts ""
#  #something else here
# end

## Teddy
# ## This one gets all the text, but includes words 'comments'
# comments = []
# doc.search('.subtext').each do |subtext|
# 	comments << subtext.text.split('|')[1].to_i
# end
# puts comments 


# Vanger
# This one cuts off the 3rd number
# doc.css('.subtext a').each_with_index do |item,index|
#   if (index %2 == 1) then
#     if item.text[0..1].to_i > 0
#       puts item.text[0..1].to_i
#     end
#   end
# end

# Thiago
# doc.css('.subtext a').each do |comments|
# 	puts comments.text
# 	puts ""
# end

# # Alice's answer
# doc.css('.subtext a').each_with_index do |item, index|
#   if (index % 2 == 1) then
#     puts item.text.to_i
#   end
# end

## USE PRY AND CHROME INSPECTOR
# From the front page of http://reddit.com
# Get all the Titles of articles. Get all the links to the article. 
# Get all the submitter names, and the links to their account
# Output these to the page

# Open Reddit instead of HN
doc = Nokogiri::HTML(open('http://www.reddit.com/'))

# #titles and links - David
# doc.css('.title a').each do |link|
# 	puts link.text
# 	puts link.attributes["href"].value
# end

	# doc.css('.author').each do |author|
	# 	puts author.text
	# 	puts author.attributes["href"].value
	# end

# # Authors and links - David
# doc.css('.author').each do |author|
# 	puts author.text
# 	puts author.attributes["href"].value
# end
# 3.times do 
# 	# To paginate, I need to find the link for the 'next page' and then open it like:
# 	next_link = doc.css('.spacer .nextprev').last.children[1].attributes["href"].value
# 	doc = Nokogiri::HTML(open(next_link))

# 	doc.css('.author').each do |author|
# 		puts author.text
# 		puts author.attributes["href"].value
# 	end

# end

# How to scrape individual user's pages
doc = Nokogiri::HTML(open('http://www.reddit.com/user/Andy_Dwyer/submitted/'))
doc.css('.title a').each do |link|
	puts link.text
	puts link.attributes["href"].value
end



#binding.pry