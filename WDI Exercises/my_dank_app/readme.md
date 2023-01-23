# How to set up an Express app (detailed)

Check the "multifile1" branch for an example of the app being broken up into a couple files.

1. Set up app
  - Command line stuff
    - Create a directory
    - Go into the directory
    - Initialize a Git repo
    - Initialize Node Package Manager
      - Answer its questions
    - Install Express
    - Use Node Package Manager to install dependencies
    - Create the main file
  - Load Express into main file
    - Connect Express to the app
    - Create a way for app to talk to server
      - Listen to a port
    - Run app to make sure it's working
    - Make app show something in browser
      - Create a GET route
      - Make app send something to browser
- Set up database
  - Command line stuff
    - Install Sequelize
    - Install PG (so that Sequelize can "speak" Postgres)
    - Install pg-hstore (whatever that is)
    - Create a database
  - Load Sequelize into main file
    - Connect Sequelize to my database
  - Test connection to database
    - Make sure I can save something into the database
  - Make a model
    - Set up a schema
    - Run a migration by "syncing" my model with the database
    - Make any other required models
- Set up routes
  - For each model
    - Make an index route which shows all of that model
    - Make a create route which creates one of that model
    - Make a show route which shows one of that model
      - Get its ID
    - Make an edit route which updates one of that model
      - Get its ID
    - Make a delete route which deletes one of that model
      - Get its ID
- Get tired of scrolling
- Set up file structure
