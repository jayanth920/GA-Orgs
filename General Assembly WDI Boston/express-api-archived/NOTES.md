- In the config file, you are actually calling all those methods on the routes object. Digging in there you will see what those methods actually do.
- If we want to get really deep:
1. In `lib/wiring/routes`, all the standard http verbs are being attached as methods to the `routes` object.
2. These methods result in a method being called on the `router` object that matches that http verb, with the arguments supplied by calling the controller for that action.
3. When the server starts up, all the methods that you see in `config/routes.js` are being called on the routes object being exported from `lib/wiring/routes`.
4. The `resources` method will add the standard REST actions to a resource for us, we can call this on additional resources in `config/routes.js`.


- The order in which your route handlers and other middleware functions are declared is the order which they will be executed.



### Annotate Along: Index Action
- What is the purpose of this action?
  - To get all of the resources for this route
- Does it need a singular or plural resource to build its response?
  - A singular resource
- How is the action handling errors?
  - With the `.catch` statement at the end
- Why do we need to check for the existence of a record after querying?
- Where do we get IDs from?
  - We get our IDs from Mongo automatically assigning them after a `create`
- Where do we get data from when creating or updating a record?
  - The data should be contained in the request object
- Which terminal handler is used to send a response?
  - In this case, we are using `res.json`


- `res.json` is an **express** method
    - This is a terminal handler that signifies to the server that the
      connection created to modifiy the response can be closed. Failure to use a
      terminal handler will result in a hanging connection.
- `.toJSON` is a **mongoose** method which accepts options.
    - Instead of applying these options on a per-document basis we may declare
      the options in this method and have it applied to all of the schema's
      documents by default.
- `e.toJSON({ virtuals: true, user: req.user }))`
    - Transform method for example model is ran passing in virtuals and user as
      arguments

- In `app/controllers/examples.js`, what is `Object.assign` doing?
- Basically, this is a way to copy new key-value pairs onto a target object.

### Demo: An Example Express Model
- What library are we using to model our resources? Does it have anything to do with Express?
  - Looks like we're using Mongoose - it does not
- What does the underscore denote in _owner?
  - This indicates that we do not want to be able to change this field
- Where should we go to find out more about an owner?
  - Because it references a 'User' model, `models/user.js`
- Why aren't we using an arrow function for the virtual attribute length?
  - Because `this` binding changes inside an arrow function, and we want `this` to be pointing to `exampleSchema`. From the docs: "Virtual attributes are attributes
that are convenient to have around but that do not get persisted to mongodb." In other words, we are attaching a temporary attribute to our data that can be accessed by calling `.length`.

### Code-Along: GET /books

For this one, basically just copy `controllers/examples.js` into `controllers/books.js` and replace the word "Example" with "Book". Note: Be careful here, use command-d to find all the instances of "example" (small e) and "Example" (big e).

Show why it fails. Edit the `config` file to include the books resource. Show why it fails. Finally, edit the Books model and see success. Note that we don't have to include the virtual at the end of the example model.

### Code-Along: Add Books to the database
First we have to create a user, and save the ID. Something like this will do:
- `EMAIL=pikachu PASSWORD=pikachu sh scripts/auth/sign-up.sh`

Once we have the User ID, include that in the load-books script:
- `node bin/load-books.js <User-ID-here>`

### Lab: Create an Example
Here the trick is for them to enter a TOKEN and TEXT argument in the command line before running the script. They can use the token they generated earlier. For the `show` script, they will instead need a TOKEN and and ID from the example they previously created.

### Code-Along: GET /books/:id
The code for this is already there since we copied over from `controllers/examples.js`. All we really need to do is copy in the test script, and find and ID from when we got all the boks earlier to set as an argument. The remaining code-alongs will follow this basic structure.

### Code-Along: PATCH /books/:id
For this one, feel free to show them that you don't have to update `title`. By looking at the model, we can choose any field we want to update. `author`, for example.
