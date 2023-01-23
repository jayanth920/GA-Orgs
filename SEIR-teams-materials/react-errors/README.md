# React Errors

React is a powerful library that we've used to create dynamic, fast, and responsive UIs with declarative programming. We can use JSX to elegantly manipulate and display data, but how do we make sure that our UIs respond to different loading and error states of our application, especially as we interact with micro-services like third-party APIs that may be outside of our control? Handling errors well is an essential part of a robust application.

In this tutorial, we'll work through some code examples, starting simply with the `useState` hook to statefully display different information regarding our application state. We'll then refine our multi-state logic into an elegant single hook with `useReducer`.

## Prerequisites

- Fetch API
- Thinking in React/Component-based UI
- React Component Lifecycle
- React State vs. Props
- React Hooks

## Instructions

1. In your sandbox, create a React application called `react-errors-examples`.

```cli
$ npx create-react-app react-errors-examples
```

2. Change directory into the newly created app.

```cli
$ cd react-errors-examples
```

3. Open the app in VS Code.

```cli
$ code .
```

4. Start the development server.

```cli
$ npm start
```

## Managing API Calls Statefully

An API call may have different states. The call might be in progress, or loading. We might have yielded succcessful results. Or the call may have resulted in some type of error, either one that throws to the `catch` or one that results in a silent failure that logs to the console, such as returning 404, or even returning `null` or an empty array from the request.

We'll use the Pokemon API to create a simple search component that lets us demonstrate these various API call states. We'll focus on using application state to display meaningful user-facing messages regarding their interactions with our site.

> The examples you'll see here are specific to handling the Pokemon API. You'll need to read the documentation for any third-party APIs you use client-side. If you're using your own API, you'll want to make sure you understand what different edge cases on different routes are sending back to the client. Your logic will likely look different from API to API. 

### Set up Form Components 🏗

Let's replace all the code in `App.js` with the following:

```jsx
import './App.css';

function App() {
	return (
		<div>
			<h1>Pokemon Search</h1>
		</div>
	);
}

export default App;
```

Create a `components` directory inside `src`, and then create two components called `Search` and `SearchForm` inside of it.

Inside the Search component, we have some state that consists of the user's search string. We have some form handler functions scaffolded out, and we're going to return a form component, passing it its required values as props.

```jsx
//src/components/Search.js
import { useState } from 'react';
import SearchForm from './SearchForm';

function Search(props) {
	const [searchString, setSearchString] = useState('');

	function handleChange(event) {
		setSearchString(event.target.value);
	}

	function handleSubmit(event) {
		event.preventDefault();
		console.log(searchString);
	}

	return (
		<div>
			<SearchForm
				searchString={searchString}
				handleSubmit={handleSubmit}
				handleChange={handleChange}
			/>
		</div>
	);
}

export default Search;
```

In `SearchForm`, we're just setting up a simple controlled `form` component that can accept user inputs.

```jsx
// src/components/SearchForm.js
import React from 'react';

function SearchForm({ searchString, handleChange, handleSubmit }) {
	return (
		<form onSubmit={handleSubmit}>
			<label htmlFor='searchString'>Search:</label>
			<input
				type='text'
				value={searchString}
				id='searchString'
				onChange={handleChange}
				required
			/>
			<button type='submit'>Search</button>
		</form>
	);
}

export default SearchForm;
```

Let's import the `Search` component into `App.js` and render it below our primary heading.

```jsx
import './App.css';
import Search from './components/Search';
function App() {
	return (
		<div>
			<h1>Pokemon Search</h1>
			<Search />
		</div>
	);
}

export default App;
```

We should now be able to type into the search field, press "Search", and log the search string.

![Screen Shot 2021-10-04 at 8 07 15 PM](https://media.git.generalassemb.ly/user/21811/files/c71ebd00-254e-11ec-95fd-eb3e396b35d2)

Great success!!

### Add API Call and Results Component 📝

In your `components` folder, create a file called `Result.js` and flesh it out with the following:

```jsx
// components/Result.js
function Result({ result }) {
	return (
		<section>
			<h2>Name: {result.name}</h2>
			<h3>Species: {result.species.name}</h3>
			<h3>Height: {result.height}</h3>
			<small>
				Height: {result.height}, Weight: {result.weight}
			</small>
		</section>
	);
}

export default Result;
```

This component will simple render the result of the user's search.

We'll be hitting the `/pokemon` endpoint of the Pokemon API. Check out the documentation [here](https://pokeapi.co/docs/v2#pokemon). It accepts a dynamic request parameter of `id` or `name`. We'll assume our users are savvy enough to look up Pokemon by their name, such as "Pikachu" and "Charizard."

Let's turn now to `Search.js` and add some logic to make an API request.

Inside the `handleSubmit` function, add code to make a fetch request to the API endpoint noted above, interpolating the user's search string into the request. For now, let's also create a `result` state and conditionally render the return of the API call in a `Result` component if the value of `result` is truthy.

```jsx
import { useState } from 'react';

import Result from './Result';
import SearchForm from './SearchForm';

function Search(props) {
	const [searchString, setSearchString] = useState('');
	const [result, setResult] = useState(null);

	function handleChange(event) {
		setSearchString(event.target.value);
	}

	function handleSubmit(event) {
		event.preventDefault();
		const url = `https://pokeapi.co/api/v2/pokemon/${searchString}`;
		fetch(url)
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				setResult(data);
			})
			.catch((err) => {
				console.log(err);
			});
	}

	return (
		<div>
			<SearchForm
				searchString={searchString}
				handleSubmit={handleSubmit}
				handleChange={handleChange}
			/>
			{result && <Result result={result} />}
		</div>
	);
}

export default Search;
```

Another great success! Entering a search term results in displaying the correct information:

![Screen Shot 2021-10-04 at 8 25 30 PM](https://media.git.generalassemb.ly/user/21811/files/41504100-2551-11ec-9f1f-42b77fb09966)

This works if our Poke-wise user enters search strings like "Snorlax" and "Ditto." But what if the user is completely off-base and types something like "Dragonball" or mistakenly creates a typo when they're trying to spell "Bulbasaur"?

### Introducing an Error State ❌

Try typing some nonsense like "asdf" into the search field. You'll see nothing happen in the UI, but the browser will log a response of `404 Not Found` from the browser, and we'll also get a Syntax Error stemming from our `fetch` request attempting to parse the body of the response into JavaScript.

![Screen Shot 2021-10-04 at 8 28 58 PM](https://media.git.generalassemb.ly/user/21811/files/c0457980-2551-11ec-856b-b45332ef42d9)

Clearly, this is not ideal for UX! The average user probably won't investigate the console or the network tab of the browser to see what went wrong, so we need to create some user-facing error messages. Let's change up our `Search` component so that we are responding to bad search strings that result in `404` and displaying helpful error information to the user.

First, let's create another state variable for `error`. This will be set to a falsey empty string `''` initially, as we're assuming no errors in the default state of our application.

Then, in our `fetch` request, let's evaluate whether the `res.status` has resulted in a 404 Not Found. If so, we'll set a helpful error message and return early out of the function. If not, let's check if the response is a 200 OK, and if so, we'll proceed to process the response and display it. Depending on what status codes the API sends back for different requests, you might need to add in checks for other statuses.

Lastly, in the `return` of our component, let's check if `error` is truthy, and if so, we'll display the error message.

```jsx
import { useState } from 'react';

import Result from './Result';
import SearchForm from './SearchForm';

function Search(props) {
	const [searchString, setSearchString] = useState('');
	const [result, setResult] = useState(null);
	const [error, setError] = useState('');

	function handleChange(event) {
		setSearchString(event.target.value);
	}

	function handleSubmit(event) {
		event.preventDefault();
		setError('');
		const url = `https://pokeapi.co/api/v2/pokemon/${searchString}`;
		fetch(url)
			.then((res) => {
				if (res.status === 404) {
					setError(
						`No results found for ${searchString}. Please try another search! `
					);
					return;
				} else if (res.status === 200) {
					return res.json();
				}
			})
			.then((data) => {
				setResult(data);
			})
			.catch((err) => {
				console.log(err);
			});
	}

	return (
		<div>
			<SearchForm
				searchString={searchString}
				handleSubmit={handleSubmit}
				handleChange={handleChange}
			/>
			{result && <Result result={result} />}
			{error && error}
		</div>
	);
}

export default Search;
```

That's so much better!

![Screen Shot 2021-10-04 at 8 35 14 PM](https://media.git.generalassemb.ly/user/21811/files/9b9dd180-2552-11ec-8511-75b1bab543d2)

...but wait, there's a bug. If we follow up that bad search with a good one, like "pikachu," our error message stays true and is displayed! Let's add a line to our API request that resets `error` to an empty string _before_ we make any requests so that we can start each call with a blank slate.

```jsx
function handleSubmit(event) {
	event.preventDefault();
	// reset error back to none
	setError('');
	const url = `https://pokeapi.co/api/v2/pokemon/${searchString}`;
	//  ... the rest of the code
}
```

Ahh, that's better! This is a great start, but what if we encounter server-side issues that fail to return a response? Let's invite the user to try again later by adding some error handling to the `catch`, instead of simplly logging the error. While we're at it, let's also reset the `searchString` after we process the user's search so that we clear the form.

```jsx
function handleSubmit(event) {
	event.preventDefault();
	const url = `https://pokeapi.co/api/v2/pokemon/${searchString}`;
	setError('');
	fetch(url)
		.then((res) => {
			// 404 means no results found
			if (res.status === 404) {
				// describe 404 error in error state
				setError(
					`No results found for ${searchString}. Please try another search! `
				);
				return;
			} else if (res.status === 200) {
				// 200 means successful response
				// pass body of res onto next .then
				return res.json();
			}
		})
		.then((data) => {
			setResult(data);
		})
		.catch((err) => {
			// if the request promise fails to return a response
			// likely a server side issue
			// invite user to try again later
			console.log(err);
			setError('Oops, something went wrong! Please try again later.');
		});
	//reset search string for ux
	setSearchString('');
}
```

We're on our way to some great functionality!

### Introducing a Loading State ♽

You might have noticed that looking up a bad search string seems to take a few seconds, as the backend searches for all possible matches to our search string parameter.

Wouldn't it be nice if we could give the user some feedback that we are processing their request, and to sit tight while we do? Let's introduce a `loading` state variable that can help us convey that.

First add some state to your Search component for `loading`. Initially this will be set to `false`, as we only need to be loading when the user submits a request.

```jsx
const [loading, setLoading] = useState(false);
```

As soon as the user clicks "Search," let's update `loading` to be `true`.

```jsx
function handleSubmit(event) {
	event.preventDefault();
	const url = `https://pokeapi.co/api/v2/pokemon/${searchString}`;
	setError('');
	setLoading(true);
	// ... the rest of the function
}
```

In the event of `errors` or successful processing of the request, let's set `loading` back to `false`. Here is the updated `handleSubmit` function:

```jsx
function handleSubmit(event) {
	event.preventDefault();
	const url = `https://pokeapi.co/api/v2/pokemon/${searchString}`;
	setError('');
	setLoading(true);
	fetch(url)
		.then((res) => {
			// 404 means no results found
			if (res.status === 404) {
				// describe 404 error in error state
				setError(
					`No results found for ${searchString}. Please try another search! `
				);
				setLoading(false);
				return;
			} else if (res.status === 200) {
				// 200 means successful response
				// pass body of res onto next .then
				return res.json();
			}
		})
		.then((data) => {
			setResult(data);
			setLoading(false);
		})
		.catch((err) => {
			// if the request promise fails to return a response
			// likely a server side issue
			// invite user to try again later
			console.log(err);
			setError('Oops, something went wrong! Please try again later.');
			setLoading(false);
		});
	//reset search string for ux
	setSearchString('');
}
```

Last, if `loading` is true, let's display a helpful message to the user that let's them know we're doing our best to grab their data! In the `return` of the component, add the following:

```jsx
return (
	<div>
		<SearchForm
			searchString={searchString}
			handleSubmit={handleSubmit}
			handleChange={handleChange}
		/>
		{result && <Result result={result} />}
		{error && error}
		{loading && 'Loading results...'}
	</div>
);
```

For most searches, the loading message will only flash briefly. But if you search for something longer and nonsensical, like "asdfjasdfasdfas", you'll notice that the loading message displays for a while as the API does its best to comb through Pokemon and find that result.

However, you'll notice that if you enter a good search followed by a bad search, the loading message displays under the results, which are still on the page. That's not great UX. We can solve this by setting `result` back to `null` in our `handleSubmit`, so that we reset any existing results while the API call is active.

```jsx
function handleSubmit(event) {
	event.preventDefault();
	// reset any existing results
	setResult(null);
	// ...the rest of the function
}
```

Try out your form! We've now created an interface that responds to many types of inputs and API states and displays user-facing errors!!! 🎉

See solution code [here](../../../react-errors-examples/blob/main/src/components/Search.js).

## Refactoring with `useReducer`

Though we were able to achieve some great functionality, you might have noticed that we were having to manage quite a few different states to handle one job, which is update the UI based on the status of the API call. With all these different states and state handlers floating around, you can see that it might be easy to introduce bugs into our application if we're not careful. For larger apps and even more complex state, this could be a significant concern.

React has an advanced Hook called `useReducer` that is perfect for this use case. Whenever you have more complex state, or parts of your state are related to and depend on each other, the [React docs](https://reactjs.org/docs/hooks-reference.html#usereducer) recommend using `useReducer` over `useState`. If you haven't seen our lesson on `useReducer` recently, check it out [here](../../../react-use-reducer).

Come back to this repo when you have a foundational understanding of the parts of `useReducer`.

### Set up a new component

For this exercise, let's set up a new component called `SearchWithReducer.js` in our `components` folder. We'll build out similar functionality to the `Search` component we built previously, but implemented with a single elegant `useReducer` hook instead of using several different state variables.

Let's scaffold it out similarly to our regular `Search` component:

```jsx
import { useState } from 'react';
import Result from './Result';
import SearchForm from './SearchForm';

function SearchWithReducer() {
	const [searchString, setSearchString] = useState('');
	const [result, setResult] = useState(null);

	function handleChange(event) {
		setSearchString(event.target.value);
	}

	function handleSubmit(event) {
		event.preventDefault();
	}
	return (
		<div>
			<SearchForm
				searchString={searchString}
				handleSubmit={handleSubmit}
				handleChange={handleChange}
			/>
			{result && <Result result={result} />}
		</div>
	);
}

export default SearchWithReducer;
```

And then let's import and render it from `App.js` instead of the other `Search` component.

```jsx
import './App.css';
import Search from './components/Search';
import SearchWithReducer from './components/SearchWithReducer';
function App() {
	return (
		<div>
			<h1>Pokemon Search</h1>
			{/* <Search /> */}
			<SearchWithReducer />
		</div>
	);
}

export default App;
```

### Bring in `useReducer`

Let's break our application, and refactor and complete the logic for our API calls.

First we'll create an initial state object that will track all three of the states we're concerned with for our API call: the loading state, error state, and the result, if it exists. Add this above your `searchString` state inside the `SearchWithReducer` function:

```jsx
const initialState = {
	loading: false,
	result: null,
	error: '',
};
```

Next let's define a function that can update all the states of our application. The `reducer` function, by convention, uses a `switch` statement to return different state updates based on the input. You could use extended `if/else` logic here, but `switch` is a more concise and typical way of checking for different conditions and updating state accordingly.

You'll notice that based on different `type` properties of the `action` argument, we will update `state` in a different manner. 

```js
function apiStateReducer(state, action) {
	switch (action.type) {
		case 'loading': {
			return { ...initialState, loading: true };
		}
		case 'success': {
			return { ...state, loading: false, result: action.data };
		}
		case 'error': {
			return { ...state, loading: false, error: action.error };
		}
		default: {
			return state;
		}
	}
}
```

Now that we have an initial state and a reducer function, we can bring in the `useReducer` hook from 'react' and create our more complex state variable.

`useReducer` takes TWO arguments, unlike `useState`, which only takes one (the initial state). `useReducer` accepts the reducer function that returns the updated state, as well as the initial state. It very much resembles the `Array.prototype.reduce` method in JavaScript. Like `useState`, however, `useReducer` returns two values which we access by destructuring an array -- the actual state value itself, as well as a function that we call `dispatch` by convention, that we use to update state.

```jsx
import { useState, useReducer } from 'react';

// inside your component after `initialState` and searchString 
const [state, dispatch] = useReducer(apiStateReducer, initialState);
// destructure the state object so we can access its values directly instead of dotting into state
const { loading, result, error } = state;
```

Now let's update our `handleSubmit` function to make the API call, updating state as needed.

```jsx
function handleSubmit(event) {
	event.preventDefault();
	dispatch({ type: 'loading' });
	const url = `https://pokeapi.co/api/v2/pokemon/${searchString}`;
	fetch(url)
		.then((res) => {
			if (res.status === 404) {
				return dispatch({
					type: 'error',
					error: `No result found for ${searchString}. Please try another search!`,
				});
			} else if (res.status === 200) {
				return res.json();
			}
		})
		.then((data) => {
			dispatch({
				type: 'success',
				data,
			});
		})
		.catch((err) => {
			dispatch({
				type: 'error',
				error: 'Oops, something went wrong! Please try again later.',
			});
		});
}
```

In the return of our component, we can still set up a similar set of conditional displays for what renders out of our component.

```jsx
return (
	<div>
		<SearchForm
			searchString={searchString}
			handleSubmit={handleSubmit}
			handleChange={handleChange}
		/>
		{result && <Result result={result} />}
		{loading && 'Loading results...'}
		{error && error}
	</div>
);
```

Congrats on refactoring your API state management code into something more elegant and concise using `useReducer`. As you can see, instead of having multiple variables and state handlers, we're able to more expressively update interrelated state data by using this powerful hook. We're using a pure function here that returns predictable values for given inputs. We can make sure all of our state values are in sync without having to call multiple functions.

See solution code [here](https://git.generalassemb.ly/esin87/react-errors-examples).

## Hungry for More?

There is a relatively new feature from React v.16 called [Error Boundaries](https://reactjs.org/docs/error-boundaries.html) that helps us keep any JavaScript errors in our code from throwing cryptic errors and crashing our entire application.

If React is a topic that interests you, this would be a great new topic to learn about to increase the sophistication with which you handle React errors even more!

Lots of great tutorials and bloggers exist in the React ecosystem. Some of the most reliable sources are [Kent C. Dodds](https://kentcdodds.com/blog/use-react-error-boundary-to-handle-errors-in-react/) and [Smashing Magazine](https://www.smashingmagazine.com/2020/06/react-error-handling-reporting-error-boundary-sentry/), who both have accessible articles on understanding Error Boundaries.

## [License](LICENSE)

1. All content is licensed under a CC­BY­NC­SA 4.0 license.
1. All software code is licensed under GNU GPLv3. For commercial use or
   alternative licensing, please contact legal@ga.co.
