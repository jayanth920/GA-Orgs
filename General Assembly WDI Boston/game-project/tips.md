# Tips

You **should**:
-   Use **semantic** HTML.
-   Practice separation of concerns by:
    -   Using the [browser-template](https://git.generalassemb.ly/ga-wdi-boston/browser-template) to
        store HTML, CSS, and JavaScript in the appropriate places.
    -   Storing DOM manipulation code and network code in separate files.
-   **KISS (Keep It Stupidly Simple)**.
-   **DRY (Don't Repeat Yourself)**.
-   **Break the project down into different components** (data, presentation,
    style, DOM manipulation) and brainstorm each component individually. Use
    whiteboards!
-   **Use your Development Tools** (console.log, debugger, alert statements,
    etc) to debug and solve problems.
-   Work through the lessons in class, **ask questions and schedule a 1on1**
    when you need to. Think about adding relevant code to your Tic Tac Toe game
    each night, instead of, you know... _procrastinating_.
-   **Commit early, commit often.** Don’t be afraid to break something because
    you can always go back in time to a previous version.
-   **Read documentation** (jQuery especially) at home to better understand hwo
    the tools you're using work.
-   **Don’t be afraid to write code that you know you will have to remove
    later.** Create temporary elements (buttons, links, etc) that trigger events
    if real data is not available. For example, if you’re trying to figure out
    how to change some text when the game is over but you haven’t solved the
    win/lose game logic, you can create a button to simulate that until then.

- _If your success/failure methods aren't working, it's likely that you're not getting to the point where you're making an ajax call._
  1. Create an HTML element.
  2. Create a click handler attached to that element.
      - Have the click handler `console.log('hello')` AND DO NOTHING ELSE.
  3. Check that any data needed is accessible (`Using console.log()`)
      - Use `getFormFields()` to access data from a form if necessary.
      - Check value of `store` if necessary
  4. Add an ajax call to the click handler.
  5. Verify that the backend server is doing what is expect when the ajax call is made. Check the server log and/or the rails console.
  6. Have the success function `console.log('success!!')` AND DO NOTHING ELSE.
  8. Have the success function `console.log` the data sent get back from the server.
  9. Add that data to the HTML using jQuery or handlebars. (or do something else, as appropriate.)
