# React Random User App

<img src="https://cdn.pixabay.com/photo/2017/06/13/12/54/profile-2398783_960_720.png" height="200px">

In this assignment, you will build a React app that fetches a random user from a third-party API and displays the user information in a user detail component. The user detail component will have a button for toggling less/more views of the user data.

Here is a [live version](https://practical-brown-2ad8a7.netlify.app/) of the MVP feature level of this application.

## Set up

- Fork this repository to your own GHE account and clone it down to your `sei/hw` folder
- Create a new react app in this repo with `npx create-react-app .` <-- NOTE THE PERIOD AT THE END!
- Open your repo in your code editor
- Run `npm start` to start your React development server
- Clear out the boilerplate and add a header to the app component with a nice title for our random user app

```jsx
import './App.css';

function App() {
	return (
		<div>
			<header>
				<h1>React Random User</h1>
			</header>
			<main></main>
		</div>
	);
}

export default App;
```

When you are finished working, submit your work via pull request on the original repo! Assignments are due by the day indicated on your cohort calendar.

## MVP Functionality:

- Your application must run without any syntax issues. If any code is causing your app to break, comment it out and explain what you were trying to do.
- Your application must meet the MVP features listed below:

## Part I: Fetch a Random User

### Getting data

When the App component loads, we will make a request to [https://api.randomuser.me/](https://api.randomuser.me/) to fetch data about a random user.

We need the `useEffect` hook to run this fetch request when our App component first mounts. Remember that `useEffect` takes two arguments, a callback function and an optional dependency array. When the dependency array is empty, the code inside the `useEffect` will only run the first time the component mounts on the page.

```jsx
useEffect(() => {}, []); // callback function and dependency array
```

Let's import `useEffect` at the top of our App.js so that we have access to the hook:

```jsx
import { useEffect } from 'react';
```

Try to write the fetch request on your own first, just console.logging the data! When you're ready to check your work, toggle open one possible solution below.

<details><summary>Possible fetch request solution</summary>

```jsx
import { useEffect } from 'react';
import './App.css';

function App() {
	useEffect(
		() => {
			fetch('https://api.randomuser.me/')
				.then((res) => {
					// log res to see what the response looks like!
					console.log(res);
					// pass the parsed body to the next .then
					return res.json();
				})
				.then((data) => {
					// log data to see what the data looks like!
					console.log(data);
				})
				.catch(console.error);
		},
		// note: the empty dependency array is really important in this useEffect!
		[]
	);
	return (
		<div>
			<header>
				<h1>React Random User</h1>
			</header>
			<main></main>
		</div>
	);
}

export default App;
```

</details>

### Check out the data

Test out our API URL in the browser to see what data it returns! Also check out the Random User API documentation [here](https://randomuser.me/documentation).

Open up your console and see what logs from the API!

![Screen Shot 2022-02-22 at 4 14 39 PM](https://media.git.generalassemb.ly/user/21811/files/930f4000-93fa-11ec-9572-953d4eff0fc4)

The data is in a really deeply-nested structure. Note that the data is in an object with a `results` key, and that the value of `results` is an array. What might you need to do to access the user data?Here are some questions to help you figure out how to access different parts of the data:

<details><summary>How would you access the user's data object?</summary>

```js
//The overall structure is an object with two properties: info and results. Results is an array with one element, an object
console.log(data.results[0]);
```

</details>

<details><summary>How would you access the user's first name?</summary>

```js
console.log(data.results[0].name.first);
```

</details>

<details><summary>How would you access the user's street address (number and name)?</summary>

```js
console.log(
	data.results[0].location.street.number,
	data.results[0].location.street.name
);
```

</details>

#### 🚨 Be sure to console.log the "data" variable from inside the `useEffect` callback!

### Storing data in state

We will then store that user's information in state under the state variable `currentUser`.

First let's bring in the `useState` hook to our imports in App.js at the top-level. This gives us access to all the code in `useState`.

```jsx
import { useEffect, useState } from 'react';
```

At the top level of your `App` function, let's create a `currentUser` state variable, set initially to `null`.

```jsx
function App() {
const [currentUser, setCurrentUser] = useState(null);

// ... rest of App function
```

Let's break this down a little bit. Remember that the `useState` hook returns to us two things -- a variable that holds the value of that state (in this case, `currentUser`), as well as a function (in this case, `setCurrentUser`), that is solely responsible for modifying the value of that state variable.

Why is state important in React? The library is built to re-render components if there is a change in state. So if our application is loaded and goes from not having data to having data back from the API, we want to update the state of our application. All the UI updates flow naturally from state updates, without us having to directly manipulate the DOM, which is part of the beauty of React.

In our fetch request, let's get rid of most of the console.logs and instead update the `currentUser` to the user object in `data.results[0]`.

```jsx
useEffect(() => {
	fetch('https://api.randomuser.me/')
		.then((res) => {
			// pass the parsed body to the next .then
			return res.json();
		})
		.then((data) => {
			console.log(data.results[0]);
			setCurrentUser(data.results[0]);
		})
		.catch(console.error);
}, []);
```

If you open up your React Dev Tools, you should see your App component state update with data from the API call!

![Screen Shot 2022-02-22 at 4 30 42 PM](https://media.git.generalassemb.ly/user/21811/files/d2d72700-93fc-11ec-8b1a-fce4d9a91ee4)

## Part II: Display Some User Data

First let's add a `UserSummary` component in a file called `UserSummary.js`.

```jsx
export default function UserSummary(props) {
	console.log(props);
	return <div>Hello from user summary!</div>;
}
```

Import `UserSummary` into App.js so that it is in scope.

```jsx
// App.js
import UserSummary from './UserSummary';
```

Render the `UserSummary` component in the `main` element of App.js. Pass `currentUser` to `UserSummary` as a `userData` prop.

```jsx
// App.js
<main>
	<UserSummary userData={currentUser} />
</main>
```

Inside the `UserSummary` component, if the `userData` prop is equal to null (i.e., if it hasn't loaded yet from the API), render a message saying "Loading user data...". _Else_ we will render the user's name, and email. Try this on your own first! Take a peek at one possible solution below.

<details>
<summary>Possible <code>UserSummary.js</code></summary>

```jsx
export default function UserSummary(props) {
	if (props.userData === null) {
		return <div>Loading user data...</div>;
	}
	return (
		<div>
			<h2>
				Name: {props.userData.name.title} {props.userData.name.first}{' '}
				{props.userData.name.last}
			</h2>
			<h3>Email: {props.userData.email}</h3>
		</div>
	);
}
```

</details>

#### ❓Why do we need the `if` statement in `UserSummary`? What happens if we remove it and why?

## Part III: Toggle More or Less Info

- Inside `UserSummary`, add a state variable `showMore` with an initial value of `false`
- Add a button to `UserSummary` that calls a method to toggle `showMore` to be true if is false and flip it to false if it is true.
- Adjust the component so that if `showMore` is true, then the user's name, email, street, city, state, and username are displayed. If `showMore` is false, just show the name and email as before

Remember you can check out the [live version](https://practical-brown-2ad8a7.netlify.app/) if you need help visualizing this toggle feature!

## Ready for More? Bonus Features

- If `showMore` is true, display the user's medium picture as well.

- Add more to the `UserSummary` to display even more information about the user, or maybe track all the user's that have been fetched and display them in a UserList component

- Add some styling to your application!
