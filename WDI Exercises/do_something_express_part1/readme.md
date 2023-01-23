# Do Something

This week, we'll be working on a to-do based application called do something!

Homework tonight is to create an express app!

In your application
- Create a variable `tasks` as an array of 5 objects.
  - Each object should contain 3 properties
    - id, integer
    - body, string
    - completed, boolean
- Create an index route that responds with a list of all of the objects
  - send back results with `res.json`
- Create a show route that shows one single `todo`
- Create a `POST` route that allows you to add an object to the array
  - *note that this will not update the file, if you exit the application and restart, you will lose everything created in the `POST` route.*

**Please do not create any views**

To test out your routes, you can use:

1. `curl`
  - `curl http://localhost:3000/` # get request
  - `curl --data 'id=3&body=do somethin&completed=false' http://localhost:3000/` # post request
2. [Cocoa Rest Client](http://mmattozzi.github.io/cocoa-rest-client/)
3. [PostMan](https://www.getpostman.com/)

### BONUS
- Make a post/put request that changes an existing todo from uncompleted to completed. Maybe render different index view to visualize the completed todos versus incomplete.
- Implement CRUD actions for lists in addition to tasks

### Super BONUS
- Using file I/O fake the funk of a database!
