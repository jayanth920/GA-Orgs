## Delivery Notes

### Framing
- AJAX is just a technique. Yes it's a thing in the jQuery library, but it's just a technology provided by the browser to communicate asynchronously with a server.
### Review

#### Promises
- https://git.generalassemb.ly/ga-wdi-boston/node-api-promises/issues/22

### Annotate-along
- point out differences in what is synchronous and what is async
- Sync: all the `.then`, `.catch` - these work similar to event handlers - make sure you are not invoking the functions passed in to these methods, and isntead you should be passing a reference to the function:
```
signUp(formData)
.then(...)
.then()
.then()
.catch()
```
- Async: the functions passed into `.then` and `.catch` are executed async.

### Demo code in browser
- look at network tab and console in dev tools
- examine the output logs, line numbers where logs originated
- compare sign up and sign up with promise forms

### Write AJAX function

