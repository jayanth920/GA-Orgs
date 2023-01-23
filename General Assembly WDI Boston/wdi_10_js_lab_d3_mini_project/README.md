# D3 Mini Project/Lab

This week you've learned about using D3 with Rails to help us represent data in a more meaningful way to users.

Now you will take on a larger task- representing a significantly larger public dataset. To do this will require a strong understanding of Rails, PostgreSQL, ActiveRecord, Rake and D3.

The big challenge here is find the *best* way use D3 to display the data in a way that helps enhance understanding. Using a bar or line chart is the simplest way to represent data, but often isn't significantly more useful than just displaying a table of data to the user.

The key to doing this well is asking yourself questions about the data, and then thinking of how you might best display the answers.

## Assignment

Step 1) Find a large dataset that you'd like to represent. Ideally yours will be between 50,000 and 5 million points of data (up to a few GB. Do not attempt something larger than 10-15GB). Potential sources for data:

- [Data.gov](http://data.gov)
- [Sunlight Foundation](http://sunlight.org)
- [/r/data](http://www.reddit.com/r/data)
- [/r/datasets](http://www.reddit.com/r/datasets)
- [Amazon Public Data Sets](https://aws.amazon.com/datasets)
- [Google Public Data Directory](https://www.google.com/publicdata/directory)
- [Social Network Analysis Interactive Dataset](http://www.growmeme.com/overview)
- [NYC OpenData](https://data.cityofnewyork.us/)
- [Boston Open Government](http://www.cityofboston.gov/open/)
- [Stack Exchange Data Dump](https://archive.org/details/stackexchange)

*[Where can I find large datasets open to the public](https://www.quora.com/Data/Where-can-I-find-large-datasets-open-to-the-public)*

Step 2) Consider your data. What questions do you want to "ask the data"? What would those answers look like? How could someone explore the data to come to their own conclusions and surprises?

Step 3) Create a new Rails project. Make sure to use a .gitignore to keep your data files out of version control.

Step 4) Create a schema (migrations, models) to reflect this data set. You may need more than one model. Pay special attention to indexing, as with large data sets proper indexes are critical.

Step 5) Write a rake task to import this dataset into Postgres with ActiveRecord. You may find that some of your data is malformed and either needs to be cleaned up or skipped.

Step 6) Build a JSON API to access this data. You might do some transformation/alteration of the data, and not simply return all the raw rows to the API.

Step 7) Use D3 to create a stunning (and hopefully interactive) visualization of the data. Consider multiple visualizations of different aspects of the dataset if it would help tell the story of the data in a more compelling way.
