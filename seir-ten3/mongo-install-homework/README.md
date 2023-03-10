# Mongo Install Homework

Beginning tomorrow, we'll be working with MongoDB.  It should be installed if you completed all aspects of the installfest on Day 1 of class. 

**It is your responsibility to be prepared for our lessons tomorrow by having MongoDB installed and running.**

## Verify that MongoDB is Installed

### On Mac OS only

Verify that the server is running by typing:

```bash
brew services list
```

You should see a response such as the following (with your user initials where `abc` is show):

```bash
Name              Status  User Plist
mongodb-community started abc  /Users/abc/Library/LaunchAgents/homebrew.mxcl.mongodb-community.plist
```

If the result is that you see `mongo-community` listed but the status is not `started`, run the following code:

```bash
brew services restart mongodb-community
```

### Ubuntu only:

Verify that the server is running by typing:

```bash
service --status-all | grep mongod
```

If the result is that you see `mongo-community` listed but the status returns [-], run:

```bash
sudo systemctl start mongodb
```

## Install MongoDB if Not Installed

MongoDB is not installed (if you don't see `mongo-community` in your services):

1. Visit the [installfest](https://git.generalassemb.ly/seir-ten3/installfest#installing-mongodb) repo
2. Follow the instructions for Installing MongoDB
