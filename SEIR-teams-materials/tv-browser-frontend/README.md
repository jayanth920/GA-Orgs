[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# MERN Stack React Front End Walkthrough For TV Browser API


> At this point you should have your API and all of the routing endpoints completed.
>
> Now it is time to connect your API to a Front End React App.
>


### No wires attached: there are no wires that connect your front end to your back end.

- Your two projects(backend & frontend) have no knowledge of one another.

- They only talk through HTTP requests that we make using `fetch()` or `axios()`

- Think of your backend as just some app that hosts your DB (bc it is). It just waits for apps to interact with it via HTTP requests.

- It is the front end's job to use CRUD to interact with the backend and specify which kind of call is being made.

-----


## Front End Instructions

- Fork and clone this repository.
- Change into the new directory.
- Run `npm i` to install dependencies
- Run `npm start` to start your React server

## Back End Instructions
 - Clone down this backend [TV Browser API](https://git.generalassemb.ly/sei-921/tv_browser_json_api/tree/solution)
 - Change into the new directory.
 - Run `npm i` to install dependencies
 - Install nodemon if it is not already installed on your machine
 - Run `node db/seed.js` to seed your database 
 - Run `nodemon index.js` to start your server

 > The backend is already set up with appropriate route requests according to the original homework assignment from earlier in the week.


 ### You will be using CRUD operations to make the appropriate fetch() OR axios() calls to your backend that is up and running on `http://localhost:3000`.

-----

## Let's get some data on the page!
### Try writing the fetch() or axios() calls with the instructions provided before checking out the Solutions!

Start off by examining the files in this project. Look at what each component is returning and piece it together.
If you didn't get any errors after starting the server then you should see a loading screen instead of data.

## C(R)UD - Read

- Inside the `Shows.js` file there is a useEffect().
- Let's write a fetch() or axios() call to get
some TV Shows from `http://localhost:3000/shows`
- Next, parse the response into JSON (skip this step if you are using axios())
- Then in a `.then()` use `setShows()` to set `shows` to the response.

<details>
<summary>Solution: GET Request using fetch()</summary>

```js
fetch('http://localhost:3000/shows')
    .then(res => res.json())
    .then(res => setShows(res))
```
</details>
</br>

<details>
<summary>Solution: GET Request using axios()</summary>

```js
axios('http://localhost:3000/shows')
    .then(res => setShows(res.data))

// OR

axios.get('http://localhost:3000/shows')
    .then(res => setShows(res.data))
```
</details>
</br>


<p>We made a GET request to your API in order to retrieve data and populate our app.</p>
<p>After successfully getting data back and updating our shows state, we should now see a bunch of shows on our page.</p>
<p>Now we can navigate our app and check out individual shows by clicking on them.</p>
<p>Notice there are buttons for editing and deleting each show. We'll come back to add functionality to these</p>
<hr>
</br>

## (C)RUD - Create

Ok, now that we can see our shows, let's add functionality to add a new show to the database. Click on `Add Show` to display the form.

- Find the `handleSubmit` function in `Form.js` and inside you'll see a space to write your POST request to add a new show.

### fetch()
- We want to use the same API endpoint as our GET request: `http://localhost:3000/shows`
- Remember, since this isn't a GET request we have to add a second argument to our fetch call. 
- Make the second argument an object with the following keys: a `method` that gets a value of `'POST'`, `headers` which gets a value of `{"Content-Type": 'application/json'}`, and `body` which gets a value of our show which has been parsed into JSON: `JSON.stringify(show)`

<details>
<summary>Solution: POST Request using fetch()</summary>

```js
fetch(`http://localhost:3000/shows`, {
    method: "POST",
    headers: {
        "Content-Type": 'application/json'
    },
    body: JSON.stringify(show) 
})
```
</details>
</br>


### axios()
- Like fetch(), we want to use the same API endpoint as the GET request: `http://localhost:3000/shows`
- Axios takes one argument with keys much like the second argument of a fetch(). The keys as follows: `method` with a value of `'POST'`, `url` with a value of `http://localhost:3000`, and `data` with a value of `show`.

<details>
<summary>Solution: POST Request using axios()</summary>

```js
axios({
    method: "POST",
    url: 'http://localhost:3000/shows',
    data: show
})

// OR 

// First argument is the API endpoint we are posting to
// Second argument is the data we are posting
axios.post('http://localhost:3000/shows', show)


```
</details>
</br>

Cool! When this is up and running you'll be able to add a new show to the database. Make sure to add an image URL to any shows you add to the database, otherwise you'll have a document with no image to show in which case the app **will break** and you'll have to delete that document from the database manually using Mongo or Postman.

<hr>

## CR(U)D - Update

Now that we can Create new shows and Read all of the shows in our database, let's update existing shows by adding a PUT request. 
- Find the `handleSubmit` function in our `ShowID.js`.
- Add a fetch() or axios() call inside the `handleSubmit`

### fetch()
- This time, we want to target another endpoint to update a specific show: `http://localhost:3000/shows/${show._id}`
- For this request, we are using the `show` we have saved to state in this file, specifically the `_id` that it is linked to in MongoDB.
- We use this endpoint to tell MongoDB which document in the collection we are targetting.
- Make `http://localhost:3000/shows/${show._id}` the first argument in the fetch() call.
- Add a second argument like we did for POST, with the same keys: `method` with a value of `'PUT'`, `headers` with a value of `{'Content-Type': 'application/json; charset=UTF-8'}`, and `body` with a value of `JSON.stringify(show)`

<details>
<summary>Solution: PUT Request using fetch()</summary>

```js
fetch(`http://localhost:3000/shows/${show._id}`, {
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json; charset=UTF-8'
    },
    body: JSON.stringify(show)
})

```
</details>
</br>


### axios()
- Like fetch(), we want to target a specific show's endpoint in the API: `http://localhost:3000/shows/${show._id}`
- Axios takes one argument with keys much like the second argument of a fetch(). The keys as follows: `method` with a value of `'PUT'`, `url` with a value of `http://localhost:3000/shows/${show._id}`, and `data` with a value of `show`.
<details>
<summary>Solution: PUT Request using axios()</summary>

```js
axios({
    method: 'PUT',
    url: `http://localhost:3000/shows/${show._id}`,
    data: show
})

// OR


// First argument is the show's endpoint
// Second argument is the updated show that we send to the db.
axios.put(`http://localhost:3000/shows/${show._id}`, show)

```
</details>
</br>

<p>Awesome! Now go try updating an existing show by clicking on the Edit button. It'll bring up a form that has values that represent info about each show.</p>
<p>When we update a field and click submit, It will redirect us to the home page. Go ahead and click on the show that you updated and you should see the updated changes! Woo!</p>
<hr>

## CRU(D) - Delete

Lastly, let's give our app the ability to delete shows by adding a DELETE request. 
- Find the `handleDelete` function in our `ShowID.js`.
- Add a fetch() or axios() call inside the `handleDelete`

### fetch()
- To delete a document in the db, we want to target an endpoint to update a specific show: `http://localhost:3000/shows/${show._id}`
- For this request, we are using the `show` we have saved to state in this file, specifically the `_id` that it is linked to in MongoDB.
- We use this endpoint to tell MongoDB which document in the collection we are targeting.
- Make `http://localhost:3000/shows/${show._id}` the first argument in the fetch() call.
- Add a second argument like we did for POST, and PUT, but this time with only one key: `method` with a value of `'DELETE'`.

<details>
<summary>Solution: DELETE Request using fetch()</summary>

```js
fetch(`http://localhost:3000/shows/${show._id}`, {
    method: 'DELETE'
})
```
</details>
</br>


### axios()
- Like fetch(), we want to target a specific show's endpoint in the API: `http://localhost:3000/shows/${show._id}`
- Axios takes one argument with keys much like the second argument of a fetch(). The keys as follows: `method` with a value of `'DELETE'`, `url` with a value of `http://localhost:3000/shows/${show._id}`, and since there is no data that we are sending to the backend, we do not need to add a key for data.
<details>
<summary>Solution: DELETE Request using axios()</summary>

```js
axios({
    method: 'DELETE',
    url: `http://localhost:3000/shows/${show._id}`
})

// OR

axios.delete(`http://localhost:3000/shows/${show._id}`)

```
</details>
</br>

### And that's it! Try deleting one of the entries and see if it works. When it does, that means you're finished! You've successfully connected a React front end app to a backend API. :tada:

<p align="center">
<img src="https://media.giphy.com/media/xNBcChLQt7s9a/giphy.gif"/>
</p>
























