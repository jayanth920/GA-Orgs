# Create and Deploy A React App to Netlify

We've created some really cool React applications in Unit 2, but they all live on local host! Today we'll learn how to deploy our React applications to the web so the whole world can enjoy them. 😎

## Part 1: Creating a React app on GitHub ⚛️  
1. Create a GitHub repo at [github.com](https://www.github.com) called `netlify-react-test`. 
1. Clone it down to your sandbox folder and `cd` into it.
1. Create a React app in the repo running `npx create-react-app .`. **Note the period at the end!!** 
1. Create a file called **_redirects** in your **public** folder.  add `/*    /index.html   200` to that file. Push your code to GitHub. Note: the _redirects file does not have an extension. (This file prevents your routes from breaking on refreshes in deployment.)
1. Create a `.env.local` file in the root of your repo and paste your React GIPHY API key. You can use the one below if needed. (Be sure the `.env.local` file is grayed out and not being read by Git.) 

> More on API keys and environmental variables in React [here](./api-keys.md).

```
REACT_APP_GIPHY_KEY=NmYBMpJ204PfuilSDN94bzlmFrg439ae
```

Replace your `App.js` with the following: 

```jsx
import { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
	const [gifs, setGifs] = useState([]);
	function getGifData() {
			const url = `https://api.giphy.com/v1/gifs/search?api_key=${process.env.REACT_APP_GIPHY_KEY}&q=minions&limit=10&rating=G&lang=en`;
			fetch(url)
				.then((res) => res.json())
				.then((res) => {
					console.log('We have data!', res.data);
					setGifs(res.data);
				})
				.catch(console.error);
		}
		
	useEffect(() => {
		getGifData();
	}, []);

	return (
		<div className='App'>
			<header className='App-header'>
				<img src={logo} className='App-logo' alt='logo' />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className='App-link'
					href='https://reactjs.org'
					target='_blank'
					rel='noopener noreferrer'>
					Learn React
				</a>
			</header>
		</div>
	);
}

export default App;
```

Run your React development server and make sure you can see the data logging to the console and stored to your app's state variables. 

> Always be sure your app works _locally_ before attempting to deploy!

![Screen Shot 2021-09-13 at 8 18 05 PM](https://user-images.githubusercontent.com/53010153/133178668-84108958-545f-48bf-b2a2-d0375daf23ec.png)

Your repo should now look like [this](https://github.com/esin87/react-netlify-example). 

### Essential Questions 

**❓ What is the purpose of the `_redirects` file?**

**❓ Where should the `.env.local` file be, and how do we access variables out of it?**

**❓ Who can access our application right now, and why?**

## Part 2: Deploying to Netlify 🚀

### What is Deployment?

Deployment is the act of putting an app up on one or more internet-connected
servers that allow users to access and use the app.

_Question:_ What changes in an application when it is deployed?

### Requirements for Deployment

There are generally a few things we need for an app to be properly deployed:

- **Server** - the server(s) must be on and connected to the internet
- **Executable Code** - we must get our code onto the server and be able to run
  it
- **Dependencies** - the server(s) must have the proper dependencies installed
- **Services** - the server(s) must be running the correct services (web,
  database, email, etc.)
- **Configuration** - we must configure our running app with respect to its
  deployment environment

### Deployment Approaches

There are lots of ways to do each of these steps. For example, we can get our
code onto a server by...

- Using FTP (File Transfer Protocol) to transfer the files onto the server
- Adding a git remote and using git push to transmit files (like with GH pages)
- Putting the files on a flash drive, fastening it to a homing pigeon's leg,
  then having an operator receive the pigeon and copy the files over to the
  server
  
There are many ways to deploy a React application. [Surge](https://daveceddia.com/deploy-create-react-app-surge/), [Heroku](../../../project-2/project-setup-and-deployment-guide.md), and even [GitHub Pages](https://dev.to/yuribenjamin/how-to-deploy-react-app-in-github-pages-2a1f) can host our React apps in production. In this class and for project 2 in particular, we recommend using Netlify, a super fast and free cloud platform for hosting web applications. Netlify is powerful, developer-friendly, and used by organizations such as Nike, MailChimp, and Verizon.

1. Create an account on [Netlify](https://www.netlify.com/). (Signing in via your GitHub profile is recommended!)
2. Click on the green `New Site from Git` button.

<img width="500" alt="Screen Shot 2021-09-13 at 8 47 51 PM" src="https://media.git.generalassemb.ly/user/21811/files/f56f2680-14d3-11ec-9ed5-0c836d9c0d95">

3. Choose `GitHub` as your Git provider. You may then need to add the Netlify app to your GitHub account.
4. Choose your repository (netlify-react-test).
5. Add `CI= npm run build` as the build command. [Read more about why here](https://answers.netlify.com/t/new-ci-true-build-configuration-treating-warnings-as-errors-because-process-env-ci-true/14434). There MUST be no space BEFORE the equal sign and there MUST be a space AFTER the equal sign.
6. Be sure to add "build" as the publish directory!
7. Click yes to everything else!

We are setting up continuous deployment, which means that everytime you merge code onto your default `main` branch, it'll re-deploy! 

Your app is now deployed! 🎉

### Essential Questions 

**❓ What has changed about our application now that it's deployed?**

**❓ If we make changes to our codebase, how do we ensure that the deployed app reflects those changes?**

**❓ What is the build command for our React app?**

## Part 3: But wait, there's more! 💥

When we inspect the data and look for our data from the API call, we see that the we are getting back a `403: Unauthorized` error from our API call. That's because our API key variable only lives in our local environmental file, and we intentionally ignored it when we pushed our code to GitHub. We don't want to expose secrets on GitHub. Since Netlify is relying on our GitHub repo to build and deploy our application, it doesn't have access to our API key ... yet. 

### Configure Environmental Variables on Netlify 🔒

1. On the Netlify dashboard for your newly deployed site, go to Site Settings -> Build and Deploy -> Environment. Click `Edit Variables.` This is where we'll add environmental variables for our deployed application.
2. For the key, give your environmental variable the EXACT same name that you used in development: `REACT_APP_GIPHY_KEY`. Copy and paste your key into the value field. 

<img width="500" alt="Screen Shot 2021-09-13 at 9 03 13 PM" src="https://media.git.generalassemb.ly/user/21811/files/0b7de680-14d6-11ec-82b7-9f6f9c7f58a7">

3. Because environmental variables are read when an application deployes, we'll need to trigger a re-deploy manually from the dashboard. Go to Deploys -> Trigger Deploy -> Deploy Site. This will re-build and re-deploy your site.

<img width="500" alt="Screen Shot 2021-09-13 at 9 05 25 PM" src="https://media.git.generalassemb.ly/user/21811/files/657eac00-14d6-11ec-823d-4dc4486b9763">

4. Now if you go to your deployed app, you should see your data logging successfully from your API call!! 😎

> Note: Though we've done our due diligence here in terms of protecting our secrets from bad actors on GitHub, because we're making the request from the frontend application, our key is still accessible to anyone who knows there way around a browser. To hide truly sensitive and sought-after information like AWS credentials, you'll want to make those kinds of requests from your own backend.
> 

### Essential Questions 

**❓ Why does the deployed app need its own copy of the API key?**

**❓ Is the API key hidden from GitHub? Is it hidden from visitors to the deployed app in the browser?**


## Common Errors ❌

Running into deployment bugs is fairly common, especially as our apps grow in complexity! After making sure that your app works as intended locally and isolating the problem to deployment, turn to your trusted strategies for debugging deployment issues. Reading the steps and documentation carefully, Googling, and asking for help are all great ways to resolve these. Here are some of the more common ones we've seen and how to solve them: 

### Nested Repo
**Note:** `src` *must* be at the root of your repository. If it is not, please follow these instructions:

Navigate to your project, then navigate to the React sub-repo. Remove the _REACT README.md_  (NOT YOUR PROJECT README), then move ALL React contents (including the hidden files) up one level, to the Git repo.
When you next add and commit your project, it may look like there are massive changes to your repo. Make sure, if it says “deleted ./ReactApp/fileName.jsx”, that there is also a “created ./fileName.jsx”, which means it was just moved, not deleted and created.

### Pushed `node_modules` or API key to GitHub

Did you accidentally push your Node modules or `.env.local` file to GitHub? Be sure to request a new API key. Then run the following code in Terminal from within your GitHub repo to remove the files that should be ignored from your Git cache: 

```bash
git rm -r --cached .
git add .
git commit -m "remove gitignore files"
git push origin main
```

### Essential Questions 

**❓ What should you do if you accidentally create your React app in a subdirectory?**

**❓ What should you do if you push your `node_modules` or API key to GitHub?**


## Happy Deploying! 

![Rocket ship taking off](https://media.giphy.com/media/W69xBwRM9fhh30eyMw/giphy.gif)
