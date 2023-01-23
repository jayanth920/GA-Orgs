# Angular On Rails

## Learning objectives

- Give an example of when and why one might choose to put an Angular app on Rails.
- Explain whether a given file should be placed in `app/assets`, `lib/assets`, `vendor/assets`, or `public/`.
- Describe the difference between putting a static file in the asset pipeline versus in the `public` folder.
- Cause a certain Rails controller action to respond differently to both HTML and JSON requests.

## Framing

### Rails vs Angular

So far we've seen Angular apps with no back-end framework, and Rails apps with no front-end framework. Now we're going to combine the two and make a Rails app that uses Angular on the front-end.

We *have* made Angular apps that use *someone else's* back-end: APIs. This is different. We're going to create an Angular app that is "served" from the same server that provides the data. Our app will be using itself as the API.

### Why?

In a typical Rails app the user interacts with data through some combination of links, forms, and Javascript.

![Typical Rails](images/request-normal.png)

In an Angular-on-Rails app the user interacts with data just through Javascript.

![Angular and Rails](images/request-angular.png)

This means they have a "single point of contact" with your data. This has two advantages: the user experience may have more consistency (AJAX vs page refreshes), and you have fewer moving parts to worry about.

The disadvantage is it involves writing a lot more Javascript.

### Single-page on multi-page

The app we're creating today will be a single-page app that could fit into a greater multi-page app, not unlike Google Maps and Google.

We'll cover how to make specific assets -- stylesheets and Javascripts -- apply to specific pages. Until now, every page in your Rails apps used the same stylesheet.

## [Walkthrough: Inventory Tracker](walkthrough.md)

Today, we will be building off of Inventory Tracker, the angular app we built in the intro.

<details>
<summary>
**Q**. Thinking back, what was missing from or application when we left off?
</summary>
<br>
```
Data Persistence
```
</details>

<br>

We are going to take that same app, really not change anything, but just have our data come from and persist to our Rails app. This will make sure that when we refresh the page in the browser, the updated data will still be there.

For the structure of this walkthrough, I'm going to ask that you watch me code a few steps, without worrying about following along, then you'll have an opportunity to catch-up and build out the application. Then we'll bring it back as a group and discuss any questions after each step.

## Closing

Independently, take 3 minutes to jot down use-cases and reasons when you would:

 - Build an Angular app by itself
 - Build a Rails app by itself
 - Build an Angular and Rails app

### Quiz Questions

- Should Grumblr be a Rails-only app or a Angular-on-Rails app? Defend your answer.
- You decide to use D3 in your Rails app, and you decide to download it rather than use a CDN. In which one of the following do you put `d3.js`, and **why**?
  - `app/assets`
  - `vendor/assets`
  - `public/assets`
  - `lib/assets`

### Screencasts

- WDI8
  - [Part 1](https://youtu.be/EP1RO_AX9kE)
  - [Part 2](https://youtu.be/efQoUcQwyLY)
  - [Part 3](https://youtu.be/4Kc5AwEc028)
  - [Part 4](https://youtu.be/KElJ2nhYoOg)
  - [Part 5](https://youtu.be/KqHFxIWGXIE)
  - [Part 6](https://youtu.be/a21SsRQFKIo)
