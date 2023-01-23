Deployed at https://library-express-api.herokuapp.com

Login for mLab: admin, gab0ston

# Reset database (for now):

1. Connect to shell: `mongo "mongodb+srv://cluster-14zqprq3.wmyu0.mongodb.net/heroku_14zqprq3" --username admin` and enter password `gab0ston` when prompted

2. Drop db: `db.dropDatabase()`

3. Get back to file system with `ctrl+d`

4. Make sure you're in this repo and run the import commands:

```sh
mongoimport --uri mongodb+srv://admin:gab0ston@cluster-14zqprq3.wmyu0.mongodb.net/heroku_14zqprq3 --collection books --type csv --file data/books.csv --headerline

mongoimport --uri mongodb+srv://admin:gab0ston@cluster-14zqprq3.wmyu0.mongodb.net/heroku_14zqprq3 --collection authors --type csv --file data/authors.csv --headerline

mongoimport --uri mongodb+srv://admin:gab0ston@cluster-14zqprq3.wmyu0.mongodb.net/heroku_14zqprq3 --collection members --type csv --file data/members.csv --headerline

mongoimport --uri mongodb+srv://admin:gab0ston@cluster-14zqprq3.wmyu0.mongodb.net/heroku_14zqprq3 --collection librarians --type csv --file data/librarians.csv --headerline
```
