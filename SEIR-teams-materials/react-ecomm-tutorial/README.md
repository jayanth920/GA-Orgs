![GA Logo](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png)

# React E-Commerce Code-Along

**Creator:** Madeline O'Moore<br>
**Adapted By:** Esin Saribudak<br>
**Competencies:** React, Reducer Hook, Custom Hooks <br>
**Prerequisites:** React, State and Effect Hooks, React Router, APIs<br>
**Description:** An introduction and build-along tutorial for creating a React e-commerce site.

## Objectives

Developers will be able to:

- Use React to build an e-commerce store
- Learn how to create a custom Hook
- Learn to use the Reducer Hook

Here is a live [demo](https://seir-store.netlify.app) of the site that we will be building!

## Building an E-Commerce Site

In this tutorial, we will walk through how to build a simple online store, with cards for products, and the ability to add items to a cart.

Most of the steps will be explained in detail, but if you ever find yourself wondering about the purpose of a line of code, ask Google or a classmate, or try commenting out the code to see what it does. Happy coding!

## Part 1: Set up React and install dependencies

To get started, navigate into your `sei/sandbox` and run `npx create-react-app seir-store` to create a scaffolded React app. (Feel free to copy and paste this command as well as subsequent lines of code to avoid typos!)

Navigate into the newly-created `seir-store` folder and run `yarn start` to start your React development server.

Clear out all the default code in `App.js`. Your React app should still run, but will return a blank page when at `localhost:3000`.

See commit [here](https://git.generalassemb.ly/esin87/seir-store-demo/commit/fc8e63e9bc1d8c00f7a2115e31f38546dd08e71e).

## Part 2: Update stylesheets

Add [this code](index.css) to `index.css` to create the base styles for our application. Delete `App.css` and its import in `App.js`.

See commit [here](https://git.generalassemb.ly/esin87/seir-store-demo/commit/2dd01d8528b835a96b25534f4f9cc0ae5af9ce88).

## Part 3: Add dynamic nav with static cart

Let's add some code to create our nav bar with the clickable cart icon.

In `App.js`, add the following code to create a `header` element that contains our `nav`:

```jsx
// App.js
<header>
	<h1>SEIR Store</h1>
	<nav>
		<button>
			<img
				width='30'
				src='https://www.freepnglogos.com/uploads/shopping-cart-png/shopping-cart-svg-png-icon-download-28.png'
				alt='Shopping cart icon'
			/>
		</button>
	</nav>
</header>
```

Your app should now look like this in the browser:

<img width="1748" alt="Screen Shot 2021-06-21 at 9 22 30 PM" src="https://media.git.generalassemb.ly/user/21811/files/d434da80-d2d6-11eb-8bac-f62d9a2fe81e">

Let's make it so that clicking on the cart causes a side cart panel to appear. Create a folder called `Components` in `src`, and in it create a folder called `Cart` with a file inside called `Cart.js`. Add the following code to `Cart.js`.

```jsx
// Cart.js
const Cart = ({ cartOpen, setCartOpen }) => {
	return (
		<div className={`cart ${cartOpen === true ? 'open' : 'closed'}`}>
			<div className='cart-header'>
				<h4>Your Cart</h4>
				<button className='btn' onClick={() => setCartOpen(false)}>
					Close
				</button>
			</div>
		</div>
	);
};

export default Cart;
```

The `Cart` component will receive props, namely `cartOpen` and its setter function, `setCartOpen`, to toggle between the open and closed states. The `cartOpen` state will determine whether a class called 'open' or 'closed' is being applied to it! If you check out the CSS that we're applying, you'll see that the 'open' class contains the following code:

```css
.cart.open {
	-webkit-transform: translateX(0px);
	-ms-transform: translateX(0px);
	transform: translateX(0px);
}
```

This class undoes the previous `translateX(-600px)` being applied to the cart, which essentially moves it off canvas, to the left by 600px.

We're also giving the user access to a `close` button on the cart side menu, which will hide the cart by setting `cartOpen` back to false.

To finish this functionality, we need to import the `Cart` component into `App.js`, and we also need the help of that state variable `cartOpen`. In `App.js`, add the following code:

```jsx
// App.js
import { useState } from 'react';
import Cart from './Components/Cart/Cart';

function App() {
	const [cartOpen, setCartOpen] = useState(false);

	return (
		<div>
			<header>
				<h1>SEIR Store</h1>
				<nav>
					<button onClick={() => setCartOpen(!cartOpen)}>
						<img
							width='30'
							src='https://www.freepnglogos.com/uploads/shopping-cart-png/shopping-cart-svg-png-icon-download-28.png'
							alt='Shopping cart icon'
						/>
					</button>
				</nav>
			</header>
			<Cart cartOpen={cartOpen} setCartOpen={setCartOpen} />
		</div>
	);
}

export default App;
```

We're doing a few important things here! First we are using the State hook to create the `cartOpen` getter and `setCartOpen` setter function. We're also giving our cart icon button an onClick prop that toggles between `true` and `false` for the `cartOpen` states. Additionally, we're rendering the `<Cart />` component below our header and passing it the props that it needs to toggle between the open and closed states.

Our e-comm store currently has this functionality:

![Cart menu toggles open](https://media.giphy.com/media/KLdpeNnsezJH9tcXkc/giphy.gif)

See commit [here](https://git.generalassemb.ly/esin87/seir-store-demo/commit/8359a400bfb54a822826f16ed1fb3e31126ef7f8).

## Part 4: Render static product card

Let's populate our store with some products! Create a folder in `Components` called `ProductCard`, and in it create a file called `ProductCard.js`. Inside that file, add the following code:

```jsx
// ProductCard.js
// ProductCard.js

function Product({ product }) {
	return (
		<li className='card'>
			<img src={`${product.image}`} alt='' />
			<div className='description'>
				<h2>{product.title}</h2>
				<div className={`price ${!!product.salePrice ? 'sale' : ''}`}>
					<span className='reg'> {`$${product.price}`}</span>
					{product.salePrice && `$${product.salePrice}`}
				</div>
			</div>
			<div className='quantity'>
				<button className='quantity-increase'>+</button>
				Quantity: 0<button className='quantity-decrease'>-</button>
			</div>
		</li>
	);
}

export default Product;
```

Let's break that code down! Our `Product` card is expecting to receive a product prop, or object, that will contain data about the specific product at hand. We're dotting into properties like image, title, and salePrice in order to display the individual product data! We're also hard-coding the quantity of the product at 0 for now.

In App.js, let's add an import for this `Product`, create a static piece of product data, and pass that hard-coded data to the `Product` component, just so we can make sure our component looks good.

```jsx
// App.js
import { useState } from 'react';
import Cart from './Components/Cart/Cart';
import ProductCard from './Components/ProductCard/ProductCard';

// Mock data
const sampleProduct = {
	title: 'Small Bag',
	image:
		'https://res.cloudinary.com/everlane/image/upload/c_scale/c_fill,dpr_2.0,f_auto,g_face:center,h_422,q_auto,w_auto:26:338/v1/i/4ab043d5_1b24.jpg',
	price: 10,
	salePrice: 5,
};

function App() {
	const [cartOpen, setCartOpen] = useState(false);

	return (
		<div>
			<header>
				<h1>SEIR Store</h1>
				<nav>
					<button onClick={() => setCartOpen(!cartOpen)}>
						<img
							width='30'
							src='https://www.freepnglogos.com/uploads/shopping-cart-png/shopping-cart-svg-png-icon-download-28.png'
							alt='Shopping cart icon'
						/>
					</button>
				</nav>
			</header>
			<Cart cartOpen={cartOpen} setCartOpen={setCartOpen} />
			<ProductCard product={sampleProduct}></ProductCard>
		</div>
	);
}

export default App;
```

Hurrah! Now we should see our single product hanging out in our products section. Our shopping cart can still be toggled open.

<img width="1757" alt="Screen Shot 2021-06-21 at 10 05 33 PM" src="https://media.git.generalassemb.ly/user/21811/files/d1d57f00-d2dc-11eb-833e-04147a182fe1">

See commit [here](https://git.generalassemb.ly/esin87/seir-store-demo/commit/0688b8b164bdae4efa6b9cfe6daa146258902667).

## Part 5: Fetch product data from API

Now let's kick it up a notch by retrieving live product data from our API. To do this, we'll need to import the Effect Hook into our `App.js` and write a function that makes requests to our API. We're actually going to write our own Custom Hook to achieve this functionality! Often in development, we find ourselves building more complex functionality than we may have seen in class to date. You may find yourself needing to figure out how to use multiple hooks together in a Custom Hook function.

We're going to combine the State and Effect hooks into a Custom Hook called `useProductsAPI`. Before the `App` function, add the following code:

```jsx
const useProductsApi = () => {
	const [products, setProducts] = useState([]);

	const updateProducts = () => {
		fetch('https://run.mocky.io/v3/8f6209d6-f1db-482c-9599-4e79af45adbf')
		.then(res => res.json())
		.then(res => setProducts(res))
		.catch(error => console.log(`Oops! There was an error: ${error}`));

	};

	useEffect(() => {
		updateProducts();
	}, []);

	return products;
};
```

This function combines state logic and an API call with a `useEffect`, which will all hook into the React code, including state-update-driven rerenders and the component lifecycle, and cause this function to run on the first mount of `App.js`. When invoked, it returns the state getter for `products`, which should be an array of product objects.

Let's update the first line of our App function by invoking this custom hook and setting it equal to the products that it returns. Let's log the value of `products` and make sure that it's an array of our data.

```jsx
function App() {
    const products = useProductsApi();
    console.log(products);
    //the rest of the App function...
```

If you check your console, you'll see that the first time `products` logs it's an empty array, as React will try to render the function before data has come back. Once the `updateProducts` function has returned its promise, state will update with the new products data and cause a rerender. Your console should look like this:

<img width="471" alt="Screen Shot 2021-06-21 at 10 45 53 PM" src="https://media.git.generalassemb.ly/user/21811/files/74443100-d2e2-11eb-827e-e100bfcba64f">

See commit [here](https://git.generalassemb.ly/esin87/seir-store-demo/commit/7c310f59f58243bc2814b3bd6dd2cd052ed5a959).

## Part 6: Map over data for dynamic product cards

Even though we're fetching data, we're still just showing a static product card! Let's update that. Start by deleting our `sampleProduct` object and the hard-coded `<ProductCard />` element.

Instead of the `<ProductCard />`, let's add some semantic HTML and map over the `products` array in the return of App.js (be sure to put this right below your Cart element):

```jsx
// App.js
<main>
	<ul>
		{products.length > 0 ? (
			products.map((product, idx) => (
				<ProductCard key={idx} product={product} />
			))
		) : (
			<div>Loading...</div>
		)}
	</ul>
</main>
```

Inside of our main element's unordered list, we have a ternary that checks to see if the length of the products array is greater than 0. If so, our code will map over the products array and generate a card for each product. If the length of products is not greater than 0, we will get a loading div instead! As soon as the data comes back, however, the state update will rerender the App component and show the new data in the browser.

Remember that when we return elements out of a `.map()`, each element needs a `key` prop so that React can track which elements need updating.

Our app currently looks like this:

<img width="1773" alt="Screen Shot 2021-06-21 at 10 58 17 PM" src="https://media.git.generalassemb.ly/user/21811/files/39db9380-d2e4-11eb-9bf8-0b4f838f91d1">

See commit [here](https://git.generalassemb.ly/esin87/seir-store-demo/commit/ef10fd2f1c3913217718a2592ce8932359ef2c56).

## Part 7: Create cart update functionality

Now for the pièce de résistance -- let's add functionality so that we can add and remove items to our cart, and update the cart component with what's been added.

To do this, we'll borrow the concept of a [reducer function](https://redux.js.org/tutorials/fundamentals/part-3-state-actions-reducers) from Redux, which is a longstanding, popular state management library for React. The idea here is to haev a function that calculates updated state based on existing state and actions.

In `App.js`, before your `useProductsAPI` function, add the following code:

```jsx
const cartReducer = (state, action) => {
	switch (action.type) {
		case 'ADD':
			return [...state, action.value];
		case 'REMOVE':
			return [
				...state.slice(0, action.value),
				...state.slice(action.value + 1),
			];
		default:
			return state;
	}
};
```

Let's break down what's happening here. This is a function that accepts two arguments, the existing state, and the action to be taken. We're using a switch statement so that if the action to be taken is ADD, we will simply add the value of the new state variable to existing state. If remove, we'll use `slice` to delete the element out of the cart.

In order to use this functionality, we'll call the `useReducer` hook from React at the top of `App.js`:

```jsx
import React, { useState, useEffect, useReducer } from 'react';
```

`useReducer` is a more advanced Hook that is used for more complex state logic. It accepts two arguments, a reducer function (we'll use the one we just wrote above!), as well as the initial state value (we'll use an empty array for our cart). Check out the React documentation on Reducer [here](https://reactjs.org/docs/hooks-reference.html#usereducer).

Let's add our Reducer hook to our `App` function:

```jsx
const [cartItems, updateCartItems] = useReducer(cartReducer, []);
```

Now we need a couple of cart handler functions that we'll call when the user wants to add or remove items from the cart. Add the following to the body of your `App` function, before the return.

```jsx
const addProductToCart = (index) => {
	updateCartItems({ type: 'ADD', value: products[index] });
	setCartOpen(true);
};

const removeProductFromCart = (index) => {
	updateCartItems({ type: 'REMOVE', value: index });
};
```

Both of these functions will take an argument of the index of the product that is clicked on. Notice how we're passing our `updateCartItems` function from our Reducer hook an object, with the `type` that will hook into our custom `cartReducer` function, as well as the value of the element being added to the cart (referenced by accessing the element from the `products` array by its index).

Let's pass our `ProductCard` the `addToCart` function as a prop, as well as an `index` prop.

```jsx
{
	products.length > 0 ? (
		products.map((product, i) => (
			<ProductCard
				key={i}
				index={i}
				addToCart={addProductToCart}
				product={product}
			/>
		))
	) : (
		<div>Loading...</div>
	);
}
```

Now we'll need to update a couple things in our `ProductCard`.

Add the `useReducer` import at the top of the file.

```jsx
import { useReducer } from 'react';
```

Add another reducer handling function before your `Product` function:

```jsx
const dispatchReducer = (state, action) => {
	switch (action.type) {
		case 'ADD':
			return (state += 1);
		case 'SUBTRACT':
			return (state -= 1);
		default:
			return state;
	}
};
```

Add the following destructured props to the parameter of the `Product` function, and call the Reducer hook, passing it an initial value of 0 for the quantity of the product and passing it our reducer function:

```jsx
function Product({ product, addToCart, index, action }) {
    const [quantity, dispatch] = useReducer(dispatchReducer, 0);
    //rest of Product function
```

Let's switch out the hard-coded `Quantity: 0` in the `quantity` div with the state value, and also pass our `onClick` props with their handlers:

```jsx
<div className='quantity'>
	<button
		className='quantity-increase'
		onClick={() => dispatch({ type: 'ADD' })}>
		+
	</button>
	Quantity: {quantity}
	<button
		className='quantity-decrease'
		onClick={() => dispatch({ type: 'SUBTRACT' })}>
		-
	</button>
</div>
```

Beneath the closing div but before the closing `li`, add the following logic:

```jsx
{
	addToCart && (
		<>
			<button className='btn btn-primary' onClick={() => addToCart(index)}>
				{action ? 'Remove from Cart' : 'Add To Cart'}
			</button>
		</>
	);
}
```

Our `+` and `-` buttons are now clickable, and update the quantity with the correct values.

But how do we connect these actions to our Cart? Let's revisit our Cart component in `App.js` and pass it a couple more props:

```jsx
<Cart
	removeProductFromCart={removeProductFromCart}
	setCartOpen={setCartOpen}
	cartItems={cartItems}
	cartOpen={cartOpen}
/>
```

Now clicking on a product's 'Add to Cart' button pops open the cart and updates the `cartItems` array with the new element.

Let's add a `ProductCard` import and destructure necessary props in the `Cart` component.

```jsx
// Cart.js
import ProductCard from '../ProductCard/ProductCard';

const Cart = ({ cartOpen, setCartOpen, cartItems, removeProductFromCart }) => {
```

Let's go into the return of the `Cart` component and map over the `cartItems` to display them in the cart side menu.

```jsx
{
	cartItems.map((product, i) => (
		<ProductCard
			addToCart={removeProductFromCart}
			action={'remove'}
			key={i}
			index={i}
			product={product}
		/>
	));
}
```

Now our app has some pretty cool functionality!

![](https://media.giphy.com/media/GvtlA2x951aPh1kE3e/giphy.gif)

See commit [here](https://git.generalassemb.ly/esin87/seir-store-demo/commit/1e02b67dc34034eca00f9e9af5dc447a6330de06).

## Bonus: Deploy! :rocket:

Check out this [tutorial](https://www.freecodecamp.org/news/how-to-deploy-a-react-application-to-netlify-363b8a98a985/) on deploying a React application to Netlify, a cloud platform for hosting frontend applications, and see if you can get your application deployed!

## Resources

- Solution code [here](https://git.generalassemb.ly/esin87/seir-store-demo)
- [Custom Hooks for React Forms](https://medium.com/@geeky_writer_/using-react-hooks-to-create-awesome-forms-6f846a4ce57)
- Learning [Redux](https://redux.js.org/introduction/getting-started)
