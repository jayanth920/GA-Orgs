# jQuery Selectors and Events

We use **events** in JavaScript to respond to various input from the user in the web browser, such as button clicks or keypresses. While we could handle events just fine using pure JavaScript, here we are going to use the [jQuery library](http://api.jquery.com/) to make them easier and more consistent to implement.

Generally we respond to events by altering some content on the page (and maybe sending a request to a server, but we'll save that for later). To locate exactly which HTML elements we want to manipulate, we use [jQuery selectors](http://api.jquery.com/category/selectors/), which are based on CSS selectors. We must also use selectors to locate the elements we want to attach event handlers to.

**Note:** We've set up this project using `rails new . -T -O`. That last option is a shortcut to tell Rails we don't want to use any database for this app. We have otherwise not installed any additional gems &ndash; by default Rails includes a gem that adds jQuery to the asset pipeline (`jquery-rails`).
