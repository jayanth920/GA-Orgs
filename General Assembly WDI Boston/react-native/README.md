# React Native

React Native is a one of a few very new frameworks for creating native mobile apps for both iOS AND Android with one codebase, in JavaScript. 

## Native Mobile Apps 

Native Mobile apps are front end apps that get installed directly into a phone through apps like the App Store or the Play Store. They look great on mobile, can make use of phone's advanced features like GPS, accelerometers, gestures etc. And, with easy pricing or Ad options, mobile apps can make great money!

A Native Mobile App does NOT include a back end, because it just runs on your phone! A mobile app could communicate with a backend using HTTP, just like a ReactJS app, or any front end app for that matter. But a Native Mobile App, if it does have a backend, is _decoupled_ by default. Meaning if it has a backend, it treats it like it would any other external API. 

## One language, one code base

Similar to how it can be great to have your front end AND back end in JavaScript, it can be great to have your mobile devs be using the same language -- or be the same people, as well. 

A lot of times a company might need a iOS dev who can program in Swift, and Android developer who knows Java, a front end dev who knows JavaScript, and a backend developer that uses something else. 

React Native brings a whole other arm of programing into the JavaScript group hug. 

You can set up some things to look and behave the same on iOS and Android, and define differences as well. Differences can be created by running different js files based on the OS, or by adding conditionals to your code. 


## Demand

Like ReactJS, React Native developers are in huge demand. Freelance Specialist site Toptal released in January a list of most in-demand technologies for 2018. Based on 10,000 requests for talent over a year, React Native had the 2nd most growth (353%!) from the previous year!

ReactJS was 5th, and in 4th was Redux. So even though Angular 2 topped the chart, ReactJS, React Native, and Redux all kind of go together, making it by far the most in demand group of skills!!

(Third was Docker, which is very cool, and something you should look up sometime in the future. Fifth was Firebase! YAY!)


## Differences Between React Native and React JS

The differences are few! 

#### 1. It's a _Framework_ not a _library_. 

React Native comes with everything you need, and tells you how to build something. ReactJS is more of a library, because you can use it with things like Webpack or Redux, or not! React Native gives you everything to make a mobile app, so its considered a framework. 

#### 2. No HTML

No browser, no HTML. Makes sense right? But it DOES use JSX, and simply substitutes a list of native elements than can be used in the exact same way as HTML and JSX is used. 

HTML: 

```html
<div>
	<p>Hello World!</p>
</div>
```

React Native:
```
<View> 
    <Text>Hello World!</Text>
</View>
```

React Native runs a _build_ that turns the JSX into Native Components that either iOS or Android can understand, in very much the same way that ReactJS turns JSX into HTML. 

#### 3. No CSS either. 

They give us their own way, using JavaScript. Knowing CSS and ReactJS already, the learning curve is pretty flat: 

```
export default class App extends React.Component {
  
  render() {
    return (
      <View> 
        <Text style={styles.red}>Hello World!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  red: {
    color: 'red',
  }
});
```

We just use a JavaScript method `StyleSheet.create()`! It doesn't have all of the capability of CSS or SASS, and you can't use Bootstrap or any other CSS library! But it works great. Responsiveness is handled _very_ similarly to Flexbox. 

#### 3. There is a whole API for gestures

Forget Click Event! React give us the `PanResponder` API, that gives us access to swipes, double taps, pinches, shakes, and more!

```js
onPanResponderMove: (event, gestureState) => {
	if(gestureState.moveX) {
		fireCannons();
	}
}
```

#### 4. No need to add a `Router`

The built in `<Navigator>` component will do the trick

#### 5. Development

There are a couple ways to do it, but the easiest to start with is using `create-react-native-app` and the Expo app on a phone on the same network. 


## Similarities Between React Native and React JS

#### 1. EVERYTHING ELSE. 

The use of exporting and importing files and classes is the same, props and state works the same. If you know ReactJS, everything not mentioned above is pretty much the same! 

More on similarities and differences [here](https://medium.com/@alexmngn/from-reactjs-to-react-native-what-are-the-main-differences-between-both-d6e8e88ebf24
)

#### Let's Build Something! 

You should be up and running from the Warm Up this morning. Go ahead and continue working through the tutorial! See how far you can get. This tutorial is less about building something as it is as exposing you to all of the moving parts, and it does not assume you know ReactJS.

You may do this as long as you like and feel free to transition to planning your project. However, if you are consider _using React Native_ for your project 3, we are open to you doing that! But you must consider the following: 

1. You will need approval from your local instructor.
1. You should spend a lot of time working through this tutorial first.
1. You should know that NONE of your instructors have much experience with it!
1. You should also know, there are considerably less answers online for React Native app. 
1. You _still_ will have to build a backend in Express, or create one in Firebase. 


## Further Resources
- [This GA lesson](https://git.generalassemb.ly/ga-wdi-lessons/react-native-intro) which does not use `create-react-native-app`
- [React Native Docs](https://facebook.github.io/react-native/docs/tutorial.html)
- [How to Build a React Native App](https://www.raywenderlich.com/126063/react-native-tutorial)
- [React Native Debugger](https://github.com/jhen0409/react-native-debugger)
- [Debugging a React Native App](http://facebook.github.io/react-native/docs/debugging.html#content)
- [Awesome React Native](https://github.com/jondot/awesome-react-native)
- [How to Use the ListView Component](https://medium.com/differential/react-native-basics-how-to-use-the-listview-component-a0ec44cf1fe8#.ck2vfr4ue)
- [React Native Libraries and Plugins](https://js.coach/react-native)
- [React Native Development Tools](https://facebook.github.io/react-native/docs/more-resources.html#development-tools)





