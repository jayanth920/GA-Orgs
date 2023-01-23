# Harry Potter Associations Homework/Lab

Your goal, is to model Hogwarts. Hogwarts has several complex relationships that need to be documented and modeled. Use your knowledge of advanced associations to make this a reality. The purpose of this exercise is to help you practice these relationships, migrations, databases and Rails overall. 

## Data that needs represented

Professors instruct the students at Hogwarts in the art of magic. They do this in Lectures. However, we can't fit all Students in every lecture, so some are held multiple times throughout the week, with a few students attending each. 

Students and Professors both have learned many Spells, but have different amount of skill (expressed between 1-10) with each spell. Not all students have learned all of the spells, and are generally worse at the spells than the professors.

Students belong to Houses, and each student is only in one House. 

Create a site that allows for creation of these as-needed. Don't just seed everything, but perhaps you don't need to be able to make new houses or spells...

### What we haven't done together:

We haven't worked together to handle how we'll deal with user input and associtions in the controller/views yet to save things. This is something for you to work on and figure out. It is *highly* advised to be methodical, and start with the data first before building the controllers and views. 

### Hints

- Be methodical
- Work together to help each other *understand*. Simply sharing answers without understanding doesn't help anyone. 
- Scaffolding and most generators are probably *more trouble than they are worth*. The migration generator however is very useful.
- Wait until the end to do CSS
- Use pry. All the time. But be careful with pry, as when your models change, you will find your instances of classes aren't automatically updated.
- Make many git commits, and do not credit a git repo inside of another git repo
- Map our these relationships on paper first. Understand what type of relationship you're trying to build and refer to our examples from today
- Don't change a migration after you've run it, unless you roll it back. To add columns it is much better to make multiple migrations.
- If you hit errors about NoMethodError or similar, try to figure out why something is nil


### Bonus

Figure out how to use validations and return error messages to the user if they should input bad data. For this, it might be helpful to refer to a scaffolded application (create another in another folder), and read up on [The Flash](http://guides.rubyonrails.org/action_controller_overview.html#the-flash) in the RailsGuides. 
