# Express Testing Lab Starter

## Installation

1. Clone this repository to your labs folder and change directory into it.
1. Run `npm i` to download required dependencies.
1. Create a `.env` file and add your `DATABASE_URL` to it with your MongoDB Atlas connection string:

```
DATABASE_URL=mongodb+srv://dbuser:dfsasdt3qfvs@cluster0.scylw.mongodb.net/gaphyTestingLab?retryWrites=true&w=majority
```

## Getting Started

1. Run `node db/seed.js` to populate your database with seed data.
1. Run `nodemon index.js` to start your development server. You should see the following:

```
[nodemon] starting `node index.js`
Hello world! Express GAphy API listening on port 3000
mongo connected at:  mongodb+srv://dbuser:gm1W3HMJ3L3tvVxx@cluster0.scylw.mongodb.net/gaphy?retryWrites=true&w=majority
✅ mongo connection made!
```

Happy coding!!!
