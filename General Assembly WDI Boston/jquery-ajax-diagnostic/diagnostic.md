# jQuery AJAX Diagnostic

Place your answers inside the fenced code-blocks where indicated by comments.

For all responses,  assume you have already defined a `logResponseBody` handler
to output your results to the console on success, and that you have a
`logRequestError` to print any errors that occur to the console if the request
fails.

For all responses, you need to include the proper flags for `curl`. You are
expected to use the appropriate HTTP method, and to ask `curl` to include HTTP
headers in its output.

## Request a Collection Resource

Suppose we have an API serving donuts. We want to get a list of all donuts in
the system. In other words, we want to `GET /donuts`. The hostname of the
machine serving the donuts is `http://www.example.com`.

Write the `curl` request you'd use to retrieve a list of **all donuts** on the
server.

```sh
# your answer here
```

Write an AJAX request to retrieve a list of **all donuts** on the server.

```js
let getDonuts = /* your answer here */;
```

## Request a Single Resource

Now, we want to get a **single donut** from the server. Write the `curl` request
you'd use to retrieve a **single donut**, using whatever ID you'd like.

```sh
# your answer here
```

Write an AJAX request to retrieve a **single donut** from the server.

```js
let getDonut = /* your answer here */;
```

## Delete a Single Resource

Write the `curl` request you'd use to delete a single donut, using whatever
ID you'd like.

```sh
# your answer here
```

Write an AJAX request to delete a single donut from the server.

```js
let deleteDonut = /* your answer here */;
```

## Create a Single Resource

Write the `curl` request you'd use to create a single donut. Use the following
data in JSON format.

```json
{
  "name": "French Cruller",
  "price": "$0.99"
}
```

```sh
# your answer here
```

Write an AJAX request to create a single donut on the server using JSON. Please
do not use `data = getFormFields(form)` instead write out the data object.

```js
let createDonut = /* your answer here */;
```

## Change a Single Resource

We don't want to sell French Crullers anymore. We've got a new German supplier,
so we need to change the name of the Cruller in our database. It has an ID of
`42`.

Write the `curl` request you'd use to change the donut. We'll send the following
JSON. Please do not use `data = getFormFields(form)` instead write out the data
object.

```json
{
  "name": "Krüller"
}
```

```sh
# your answer here
```

Write an AJAX request to change the donut on the server using JSON.

```js
let changeDonut = /* your answer here */;
```
