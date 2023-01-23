# Rails Assessment Thursday

This is an assessment on ActiveRecord models

## Question 1

What is the expected datatype of the following command? Assume there are valid Song and Album models, where the Album has_many Songs, and that there are valid records that are related together. 

`Album.find(1).songs`

## Question 2

Given the same assumption as above, how can I create a new song record associated with the first album in our database?

`Your code here`

## Question 3

Alter the code below to create a `has_many` relationship between the Album and Song models. Make it so that if I delete an album that all of its songs will also be deleted. 


```ruby
class Album < ActiveRecord::Base
end

class Song < ActiveRecord::Base
end
```


## Question 4

Assume each song has a title. Use the `.map` method to create an array of the titles of the songs on the first album in our database. Store this in an instance variable called `song_titles`

`Your code here`

## Question 5

Alter the `title` of the first song on the first album in our database to be named "All Blues"

## Question 6

What command would I run from the bash prompt to create a *table* called `reviews`, which I will be able to use later to have a relationship between Review and Album, where the Album `has_many` reviews?

`Your command here`
