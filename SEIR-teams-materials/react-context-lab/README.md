[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# React Context Lab

Create an app that displays and updates data via a Context provider and consumers.

## Prerequisites

- React
- Components and State
- React Context

## Instructions

1. Change into your `sandbox` directory with `cd ~/sei/sandbox`
1. Create a new app with `npx create-react-app react-context-lab`.
1. Switch into the new project directory with `cd react-context-lab`.
1. Open the project in VS Code with `code .`.
1. Complete the requirements listed below.

### Requirements

1. Create a file in your `src` directory called UserContext.js and use `export const UserContext = React.createContext(null);` to create a provider and consumer for your app. Remember that React _must be in scope_ when you call it.
1. Your App component should render a Header component and a Home component. Create some state there for your user object. Give it an initial state of: `{ username: '', lastLogIn: '' }`
1. Add a `UserContext.Provider` component to App that will wrap all of the components that App renders.
1. The Header component should render a Login component.
1. The Login component should contain a form element that has one text input for the `username` and a submit button. When the form is submitted, it should use the Context consumer to update the user in context with an object that contains the username property and the [current date and time](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) such as: `{ username: 'username-here', lastLogIn: 'current-date-time' }`.
1. The Login component should also have a separate 'logout' button, that when clicked sets the user object to: `{ username: '', lastLogIn: '' }`
1. On the Home component, display either a message that reads: Welcome Back _username_. You logged in at _lastLogIn_. or a message that reads: Welcome, please login.

### Bonus

1. Use [moment](https://momentjs.com/) to format the date and time.
1. Show the login form only when there is no user and the logout button only when the user is logged in.
