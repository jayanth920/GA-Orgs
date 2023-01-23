![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)

# Introduction to ReactJS

React was originally created by Facebook engineers in 2011 to improve the performance of its web app. Since its initial release as an [open source project](https://github.com/facebook/react) in 2013, React has become a dominant tool in the market for creating richly interactive web interfaces.

## Learning Objectives

- Describe what ReactJS is and what benefits it provides.
- Explain how and why component architectures are used in modern web applications.
- Create and render React components in the browser.

## Why React? 

React is the most popular front-end library for building user interfaces in modern [single-page applications](https://developer.mozilla.org/en-US/docs/Glossary/SPA). React and React-based frameworks are widely used in the tech stacks of well-known companies like Facebook, Instagram, Netflix, AirBnB, Imgur, and many more. 

The reason we choose to teach React is because not only is it the [most commonly-used web framework/library](https://insights.stackoverflow.com/survey/2021#section-most-popular-technologies-web-frameworks) in many developer surveys, but the job market for it is strong and growing. A [survey of job openings on Indeed in late 2020](https://towardsdatascience.com/top-10-in-demand-web-development-frameworks-in-2021-8a5b668be0d6) found that demand for React far exceeded that of other technologies.

![1_6-vvKqHgrnFAL_V4kGguyg](https://media.git.generalassemb.ly/user/21811/files/308f4580-0a50-11ec-8318-304ca79c3900)

## Framing

Now that we've established why this is a great technology to learn, let's dive into what React is and what it does.

[What is React?](https://generalassembly.wistia.com/medias/lr8idjxtx8)

React was initially motivated by the need to improve the performance of complex, dynamic, data-rich, web application interfaces. At the same time, the engineers at Facebook were also looking to make their web app more easily maintainable, scalable, extensible and testable. There are 3 key aspects of React that evolved to solve these challenges:

<details>
  <summary>
    1. The Virtual DOM
  </summary>
  <p>
    The flowchart below depicts the steps the browser must perform to render a change to the page:
  </p>
  <img src="https://media.git.generalassemb.ly/user/17300/files/9bbd3300-311a-11ea-9ba5-2ec0144463c1" alt="DOM Render Process Flow Diagram" />
  <p>
    It's a complicated process that affects the performance of our applications, especially on devices with slower processors, such as mobile devices. Now, consider how we've been displaying information from external APIs. Conventionally, we make a request to an API, get back data and then use JavaScript to update the page contents. When new requests are made, some of the data may have changed, but much of it probably did not. Nevertheless, each time a new request is made, we update all of the page contents from the API data.
  </p>
  <p>
    It would be far better if we could determine exactly what has changed in the data and then only render the changes. Doing so could eliminate some or all of the render processes needed to update the page. This is exactly what the Virtual DOM in React does for us!
  </p>
  <img src="https://media.git.generalassemb.ly/user/17300/files/4124d680-311c-11ea-8675-8eeed9667c10" alt="Virtual DOM Process Flow Diagram" />
  <p>
    In the diagram above, our data is represented on the left. In software architecture terms, we often refer to this as the Model. In the middle, is the React's Virtual DOM. It uses the data to build a version of the DOM in memory. It then compares it to the previous copy it has in memory. If there are any differences between the two, it patches the changes into the DOM to update the page, which we refer to as the <strong>View</strong> in our application's architecture.
  </p>
</details>
<details>
  <summary>
    2. A component-based architecture
  </summary>
  <p>
    Components are a way to split the UI of your application into <strong>independent</strong>, <strong>reuseable</strong> pieces. As developers, this helps us reduce duplication in our code and it makes it easier for us to reason about each piece of our UI in <strong>isolation</strong> from the larger, more complex, overall application.
  </p>
  <p>
    Components can be as small as an individual button or as large as an entire page. You can think of them as LEGO®s for your application's interface. Individual LEGO pieces come in lots of different sizes and shapes, and you can combine them to build pretty much anything. In React, we combine components to build up our application. Well-built React components can even be reused in different applications just as the parts from different LEGO sets can be used interchangeably.
  </p>
</details>
<details>
  <summary>
    3. The introduction of JSX
  </summary>
  <p>
    Strictly speaking, JSX isn't exclusively a React syntax, but it was built by the folks at Facebook and introduced with an early version of React. <strong>JSX is a syntax extension to JavaScript</strong> that allows us to write code that looks a lot like HTML inside of our JavaScript files. This makes it much faster to build components and easier for us to reason about the interfaces we create in React.
  </p>
</details>

## Breakout: Thinking in Components

In your groups, briefly review how the React docs recommend breaking up a mockup into components in the first couple of paragraphs of this post on [_Thinking in React_](https://reactjs.org/docs/thinking-in-react.html) up to **Step 2**.

With that in mind, take a look at this page on [Craigslist](https://austin.craigslist.org/d/apts-housing-for-rent/search/apa) and answer the following questions:

- How would you apply what you've learned so far about React to break the UI into components?
- What might be an example of a nested component?
- Which components are reused on the page?

## Building Components

To get started with React, we're going to use a popular tool called [**Create React App**](https://create-react-app.dev/) to scaffold our React application.

### I do: Creating a React Application

Watch as I create a React application using Create React App. First, I'll move into the `sandbox` directory where I want to create my project directory. Then, I'll run the Create React App from the command line, which will create the project directory for me and all of the files I need to make my application run.

### You do: Create and Start a React Application

On your own, create a React application:

1. In the Terminal, type: `cd ~/sei/sandbox` and press enter.
1. Once you're in the **sandbox** directory, type `npx create-react-app react-intro` and press enter.
1. After it's completed and you're returned to the prompt, type `cd react-intro`.
1. Next, open the application in VS Code by typing `code .`.
1. Back in the Terminal, type `npm start` to launch the development server.

## Project Structure

Let's explore some of the files that have been created in the project:

```
├── node_modules
├── public
|   ├── favicon.ico
|   └── index.html
├── package.json
├── yarn.lock             (delete this)
└── src
    ├── App.css
    ├── App.js
    ├── App.test.js       (safe to delete)
    ├── index.css
    ├── index.js
    ├── logo.svg
    ├── serviceWorker.js
    └── setupTest.js      (safe to delete)
```

1. **index.html**: The page that will be loaded by the browser. Since browsers only understand HTML, CSS, and JS, so everything we write will be converted into JS and automatically injected into this file so that it can be loaded by the browser. **We don't modify this file except for the page `title`.**
1. **src/index.js**: This is the main entry point for our JavaScript and its job is to render the top-level App component into the browser's DOM. **We won't modify this file**.
1. **src/App.js**: As our top-level component of our React application, the App component will load all of our other components as **_descendants_**.

## Creating Components in React

Lets take a closer look at the `App.js` file that makes up our App component. Aside from the unfamiliar `export` at the bottom of the page, all we have here is a JavaScript function that returns a bit of **JSX**!

```jsx
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
```

> In this case the `return` statement is enclosed in some parentheses so that it can break over several lines to make it more readable, but don't let that throw you off. This is just a plain old JavaScript function.

Inspect the page in the browser using the developer tools and compare the HTML that was generated by React with the JSX in the function above.

- What's the same?
- What's different?
- This is where the App component is defined. How do you think it's getting on the page?

### We Do: Modify the App Component

Let's test out our theory about JSX works. Select everything inside of the App function and replace it with `return <h1>Hello World</h1>;`. Now check it out in the browser.

### We Do: Add a New Component

React works best when we isolate different parts of the UI into components. We use functions to return these components in React.

```jsx
import React from 'react';

// HelloWorld is a separate component
// It's job is to render an h1 element
// to the page that contains the text
// "Hello World"
function HelloWorld() {
  return <h1>Hello World</h1>;
}

// App is also a separate component
// App will render our HelloWorld component
function App() {
  // This is how we "invoke" the HelloWorld
  // component's function in React
  return <HelloWorld />;
}

export default App;
```

### I Do: Create a Function Component

If we try to create all of our components in one file, things are going to get really hard to follow really quickly. Plus, components are supposed to be easily reuseable even between different projects so it's common to put each component in its own file!

Observe how I create a new file in the `src` directory to create a new component. Keep an eye on how I name the file and the component. Also be on the look out for how the component is added to my `App.js` file.

## Function Components in React

Function components in React use Javascript's function syntax to define the HTML that the component will produce and the behaviors it will have. In order to make our application modular and components more easily reusable, we separate each component into individual files and use an `export` statement to expose the function so that it can be imported into other files.

### Basic Structure

```jsx
import React from 'react';

// Function name has an initial cap
function HelloWorld() {
  // The return statement must return a single element
  // Parentheses group the JSX so that
  // it can break over several lines for readability
  return (
    <header>
      <h1>Hello World!</h1>
      <h2>⭐️ Welcome to React ⭐️</h2>
    </header>
  );
}

// Export the component so that it can be imported in other files
export default HelloWorld;
```

It's **_super important_** to remember that our component functions can only return **one** enclosing element, but that element can contain as many other elements as we want! In the above example, we're returning a single `header` element. Which of the following are **not** valid in a component's return statement:

```jsx
//...
return (
  <div>
    <h1>I ❤️ React</h1>
    <p>React components are fun for all ages!</p>
  </div>
);
```

```jsx
//...
return (
  <header>
    <h2>React Fundamentals<h2>
  </header>
  <p>The create-react-app package makes it easy to bootstrap a React application.</p>
)
```

```jsx
//...
return (
  <section>
    <h2>React Documentation Links<h2>
    <ul>
      <li>
        <a href="https://reactjs.org/docs/hello-world.html">Hello World</a>
      </li>
      <li>
        <a href="https://reactjs.org/docs/components-and-props.html">Components and Props</a>
      </li>
    </ul>
  </section>
)
```

#### Component Rules

1. All component function names must start with an initial cap.
1. ~~Every component file must import React.~~ (as of React v17 in October 2020, you no longer need to import React in most components)
1. Every component must return one and only one JSX enclosing element _or_ null.
1. Don't forget to export your component function so it can be used elsewhere in your application.

We don't have to memorize this structure right now. Let's install the [Reactjs code snippets extension](https://marketplace.visualstudio.com/items?itemName=xabikos.ReactSnippets) to help us out, if we haven't yet.

## Composing Components

Components can be rendered to the page using different methods in React, but the most common way this is done is through **_component composition_** — referring to a component in a parent's output. You can think of this as how we **invoke** the component's function. In the world of React, we might think of `<HelloWorld />` as equivalent to `HelloWorld()`. 

```jsx
import React from 'react';
// Import the component from the same directory
import HelloWorld from './HelloWorld';

function App() {
  // Compose the component inside of
  // the App component's return
  // Note how the component resembles a custom HTML element!
  return <HelloWorld />;
}

export default App;
```

How can we render multiple Hello World headers?

## You Do: Create a Component

Create a component that produces the following HTML when rendered on the page:

```html
<main>
  <p>React is the #1 most popular frontend library in the world!</p>
  <button>Upvote React!</button>
</main>
```

Make sure to import your component into the `App.js` file and compose it in the App components output to make it display on the page.

## Component Props

In order to make our components truly reusable, we need a way to pass them the unique data that they are meant to display. In React we do this with the **_props_** argument. Props is simply an object that is is passed to the component containing all of our argument data in one neat and tidy package. Consider the following Javascript:

```js
function add(num1, num2) {
  return num1 + num2;
}

const result = add(8, 6);
```

What if it was rewritten this way? What would the return statement need to be to get the same result?

```js
function add( obj ) {
  // what goes here?
}

const result = add({ num1: 8, num2: 6 });
```

That's right ... we'd need to `dot` into the data that we need in the `obj` argument. 

```js
function add( obj ){
  return obj.num1 + obj.num2;
}
```

In React, our components _**always**_ receive one object as an argument. This is called the **props** object (short for "properties") and conventionally we'll name the parameter for it `props` in our code. `props` is how we access ALL the inputs or parameters for a given component function. 

```jsx
import React from 'react';

function MyComponent(props) {
  console.log(props); // <-- an empty object
  return <h1>Header Here!</h1>;
}

function App() {
  // instead of invoking our function with MyComponent()
  // we invoke it within JSX using <MyComponent />
  return <MyComponent />;
}

export default App;
```

The way we pass arguments to `<MyComponent />` so that the object isn't empty is using key-value pair attributes:

```jsx
import React from 'react';

function MyComponent(props) {
  console.log(props); // <-- no longer empty!
  return <h1>Header Here!</h1>;
}

function App() {
  // instead of invoking our function
  // this way: MyComponent({ name: "Esin" })
  // we invoke it within JSX using <MyComponent name="Esin" />
  return <MyComponent name="Esin" />;
}

export default App;
```

Try adding new properties to the props object on your own. What data type are the property values?

Clearly, if all of our data had to be passed to our components as strings, that would make it a lot harder for us to work with it! JSX has a special syntax for passing values of ANY data type using `{}` instead of `""`.

```jsx
// if we pass values like these:
<MyComponent
  name="Esin"
  age={33}
  favoriteLanguages={['Javascript', 'Python', 'Java']}
/>;

// our props object will look like this:

props = {
  name: 'Jen',
  age: 21,
  favoriteLanguages: ['Javascript', 'Python', 'Java'],
};
```

How would we access the first element in the `favoriteLanguages` array?

### We Do: Create a Welcome Component

Let's create a simple Welcome component. The HTML we'll want to render is:

```html
<p>Welcome, User!</p>
```

<details>
  <summary>Solution</summary>

```jsx
import React from 'react';

function Welcome {
  return <p>Welcome, User!</p>;
}

export default Welcome
```

</details>

Obviously this is a little impersonal, so let's use props to put a name on the page. _Every component is passed a props object as an argument in React._ We can see this if we add a parameter to our component and log out its value inside the component function. Right now, it's an empty object but we can pass any data we want to our components through it. Let's give that a try.

Inside the Header component where the Welcome component is rendered, change the Welcome component to add the following:

```jsx
<Welcome name={'YourName'} />
```

What you should see in the console now is the object with a key value pair representing the name and the string value you set. We can add any kind of values we want here, we're not just limited to strings. Let's try adding a boolean:

```jsx
<Welcome name={'YourName'} newUser={true} />
```

> #### :triangular_flag_on_post: IMPORTANT:
>
> Remember JSX is _an extension_ to the JavaScript syntax, so we **cannot** use any [reserved words](https://www.w3schools.com/js/js_reserved.asp) as a prop name. This is the reason we use `className` instead of `class` to add CSS classes to elements in JSX.

### JavaScript Expressions in JSX

We've seen that the JSX inside a component's `return` statement is what the component turns into our rendered HTML. JavaScript expressions are also valid inside of the return statement of a React component. To use a JavaScript expression, we need to surround it in `{}` braces.

To access the props inside of our return, we'll write:

```jsx
function Welcome(props) {
  return <p>Welcome, {props.name}!</p>;
}
```

All of the following are JavaScript expressions, and therefore valid inside of the JSX in a component's `return` statement:

- Variables `{name}`
- Arithmetic `{2 + 2}`
- Ternary operators `{hour > 11 ? 'PM' : 'AM'}`
- Logical operators `{holiday && 'Happy Holiday!'}`
- Left-side expressions `{arr.map(el => <li>el.name</li>}`

## You Do: Display a Custom Message

Display a custom message to the user based on whether the `newUser` prop is set to `true` or `false`. If the value is `true`, the message should read: "Welcome aboard!" followed by the user's name. If the value is `false`, the message should read: "Welcome back!" followed by the user's name.

<details>
  <summary>Solution</summary>

```jsx
import React from 'react';

function Welcome(props) {
  const message = props.newUser ? 'Welcome aboard' : 'Welcome back';
  return (
    <p>
      {message}, {props.name}!
    </p>
  );
}

export default Welcome;
```

</details>

### Explore on Your Own

Test adding props of different datatypes.

- What happens if you try to render an array?
- What happens if you try to render a whole object?
- Can you pass a function as props?

## Props Summarized

- Props are the key value pairs that are passed to the props object
- Props can be passed any datatype using curly braces `propName={any datatype here}`
- Props cannot be named using a JavaScript reserved keyword.
- There is no limit to the number of props that can be passed to a component (except readability and common sense 😵)

## You Do: Create a Movie Component

Our movie app needs to display some movies. First, add the following variable above the App component function:

```js
const movie = {
  title: 'Star Wars: The Rise of Skywalker',
  poster: 'https://image.tmdb.org/t/p/w500/db32LaOibwEliAmSL2jjDF6oDdj.jpg',
  rotten_tomatoes: 53,
  audience_score: 86,
  summary:
    'The surviving Resistance faces the First Order once again as the journey of Rey, Finn and Poe Dameron continues. With the power and knowledge of generations behind them, the final battle begins.',
};
```

Your rendered component output should look like this:

```html
<div class="movie">
  <h2>Star Wars: The Rise of Skywalker</h2>
  <img
    src="https://image.tmdb.org/t/p/w500/db32LaOibwEliAmSL2jjDF6oDdj.jpg"
    alt="movie poster"
  />
  <p>
    The surviving Resistance faces the First Order once again as the journey of
    Rey, Finn and Poe Dameron continues. With the power and knowledge of
    generations behind them, the final battle begins.
  </p>
</div>
```

### We Do: Create a Movies Component

### On Your Own

Create a new component called **Movies** that renders the following HTML when imported and rendered in the App:

```html
<section>
  <h2>Now Playing</h2>
</section>
```

#### Pass the Movies Component Data

Delete the `movie` variable at the top of our App.js file. Then, copy and paste the `movies` array below and paste it above the `App` function in the App.js file:

<details>
  <summary>Movie Data</summary>

Copy and paste the movies variable above the App function

```js
const movies = [
  {
    id: 181812,
    video: 'https://www.youtube.com/embed/8Qn_spdM5Zg',
    title: 'Star Wars: The Rise of Skywalker',
    release_date: '2019-12-20',
    poster: 'https://image.tmdb.org/t/p/w500/db32LaOibwEliAmSL2jjDF6oDdj.jpg',
    image: 'https://image.tmdb.org/t/p/w1280/jOzrELAzFxtMx2I4uDGHOotdfsS.jpg',
    rotten_tomatoes: 53,
    audience_score: 86,
    summary:
      'The surviving Resistance faces the First Order once again as the journey of Rey, Finn and Poe Dameron continues. With the power and knowledge of generations behind them, the final battle begins.',
  },
  {
    id: 530915,
    title: '1917',
    release_date: '2019-12-10',
    poster: 'https://image.tmdb.org/t/p/w500/Aqr1jDwGb1IfAB6Lh1fNx7AbEZE.jpg',
    image: 'https://image.tmdb.org/t/p/w1280/tUWivz05fcY14K6RzicRm7IHkUD.jpg',
    rotten_tomatoes: 90,
    audience_score: 90,
    summary:
      "At the height of the First World War, two young British soldiers, Schofield and Blake are given a seemingly impossible mission. In a race against time, they must cross enemy territory and deliver a message that will stop a deadly attack on hundreds of soldiers—Blake's own brother among them.",
  },
  {
    id: 431693,
    title: 'Spies in Disguise',
    release_date: '2019-12-25',
    poster: 'https://image.tmdb.org/t/p/w500/30YacPAcxpNemhhwX0PVUl9pVA3.jpg',
    image: 'https://image.tmdb.org/t/p/w1280/qlYxtqVfu2LOdvYMMDPCSGX0Oz0.jpg',
    rotten_tomatoes: 76,
    audience_score: 91,
    summary:
      "When the world's best spy is turned into a pigeon, he must rely on his nerdy tech officer to save the world.",
  },
  {
    id: 331482,
    title: 'Little Women',
    release_date: '2019-12-25',
    poster: 'https://image.tmdb.org/t/p/w500/mSmiB8XjUnR1GSIljuCPGsk0cwX.jpg',
    image: 'https://image.tmdb.org/t/p/w1280/3uTxPIdVEXxHpsHOHdJC24QebBV.jpg',
    rotten_tomatoes: 95,
    audience_score: 92,
    summary:
      'Four sisters come of age in America in the aftermath of the Civil War.',
  },
  {
    id: 366668,
    title: 'Playmobil: The Movie',
    release_date: '2019-12-06',
    poster: 'https://image.tmdb.org/t/p/w500/zPQzLZnfVw9fbXyxxglyOsmQBlu.jpg',
    image: 'https://image.tmdb.org/t/p/w1280/axmxVeX5R1FfN7w4LNFehskDxW1.jpg',
    rotten_tomatoes: 17,
    audience_score: 61,
    summary:
      'Marla is forced to abandon her carefully structured life to embark on an epic journey to find her younger brother Charlie who has disappeared into the vast and wondrous animated world of Playmobil toys.',
  },
];
```

</details>

We're going to delete the single `Movie` component from `App` (yes, delete it, we're going to move it somewhere else) and replace it with our new `Movies` component.

If we want the Movies component to get the data from the App component stored in the `movies` array what can we do?

<details>
  <summary>Solution</summary>

Use `props` of course!

```jsx
function App() {
  return <Movies movies={movies} />;
}
```

</details>

### Accessing the Data in Movies

Inside of our Movies component, we'll reuse our single Movie component. Let's make one Movie to start. Import the `Movie` component at the top of the Movies.js file. Next, add the `Movie` component to the return below the `h2` element.

The movie component expects three pieces of data: a title, an image url and a summary. Where can we get the data to pass to the Movie component as the `title`, `image` and `summary` props?

<details>
  <summary>Solution</summary>

Get it from the props object!

```jsx
function Movies(props) {
  return (
    <section>
      <h2>Now Playing</h2>
      <Movie
        title={props.movies[0].title}
        image={props.movies[0].poster}
        summary={props.movies[0].summary}
      />
    </section>
  );
}
```

</details>

Can you make it show more than one movie?

### Display All of the Movies

While this approach works for us, its not very practical. We need a way to display an unknown number of movies. Earlier we saw that if you try and render an array, React is smart enoungh to just drop the brackets and display all of the data. We also saw that if we try to render an object the whole app breaks.

To solve this, we need to create a new array from the existing one that contains a bunch of JSX elements. Array iteration methods can help us to do that easily! In this case we want the new array to have the same length as the movies array so the `.map()` method is the one we'll use:

```jsx
function Movies(props) {
  return (
    <section>
      <h2>Now Playing</h2>
      {movies.map((movie) => (
        <Movie key={movie.id} title={movie.title} image={movie.image} />
      ))}
    </section>
  );
}
```

## Components Summarized

There are a few things we have to remember when creating components in React.

- Function components must return **a single element**. Sibling elements must be contained in a single outer wrapping element.
- They always receive one argument (a **props object**).
- Components are named with an **initial cap**.
- You can surround any return value in parenthesis to break it on to multiple lines.
- To import a custom component, use the relative path to the file. All component imports must start with `./` to reference the current directory, or `../` to reference a parent directory.

## Additional Resources

- [React Components | Codecademy](https://www.codecademy.com/courses/react-101/lessons/your-first-react-component)
- [Intro to Components | GA Video](https://generalassembly.wistia.com/medias/h64z7lp1ir)
- [React Components and Props | React Docs](https://reactjs.org/docs/components-and-props.html)
- [React Component Props | Codecademy](https://www.codecademy.com/courses/react-101/lessons/this-props)

## [License](LICENSE)

All content is licensed under a CC­BY­NC­SA 4.0 license.

All software code is licensed under GNU GPLv3. For commercial use or alternative licensing, please contact legal@ga.co.
