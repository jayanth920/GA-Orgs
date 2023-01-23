# Fetch & XMLHttpRequest

There are a few ways of making AJAX calls in JavaScript. The oldest is `XMLHttpRequest`. `fetch()` is the emerging standard.

Here we have two `GET` requests to the same endpoint using each of the two methods:

#### `fetch()`

```js
// fetch defaults to a `GET` request
fetch("https://pokeapi.co/api/v2/pokemon/1/")
  .then(response => {
    console.log(response);
  })
  .catch(err => {
    console.log(err);
  });
```

**Read more:**

- [https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)
- [https://davidwalsh.name/fetch](https://davidwalsh.name/fetch)

#### `XMLHttpRequest`

```js
const request = new XMLHttpRequest();

request.addEventListener("load", function() {
  console.log(this.responseText);
});
request.open("GET", "https://pokeapi.co/api/v2/pokemon/1/");
request.send();
```

**Read more:**

- [https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest)
