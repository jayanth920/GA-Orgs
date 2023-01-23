[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Game Project Lessons

So you've made your first Single Page Web Application! Nice work, but there's lots to learn!

This repo holds different scenarios in which certain code is broken. The
different scenarios are listed below; each has a "before" and "after" branch.
The "after" branch includes detailed commits with what was done to resolve
each problem.

## Scenarios

- None of my auth is working!
  - Find the starter code on the `auth-broken` branch
  - Find the solution code on the `auth-working` branch
- "New Game" is broken!
  - Find the starter code on the `new-game-broken` branch
  - Find the solution code on the `new-game-working` branch
- The game board is broken!
  - Find the starter code on the `board-broken` branch
  - Find the solution code on the `board-working` branch
- Why and how do I use PATCH?
  - Find the starter code on the `patch-broken` branch
  - Find the solution code on the `patch-working` branch
  - Find some alternatives on the `patch-alt` branch
- My messaging is not very DRY - what can I do?
  - Find the starter code on the `messaging-wet` branch
  - Find the solution code on the `messaging-dry` branch
- My board click logic is not very DRY - what can I do?
  - Find the starter code on the `click-wet` branch
  - Find the solution code on the `click-dry` branch

## Installation

1. Fork and clone this repository.
1. Install dependencies with `npm install`.
2. Checkout to a scenario's starter branch (see above).
1. Run with `grunt serve`

---

## Structure

### Scripts

Developers should store JavaScript files in [`app`](app).
The "manifest" or entry-point is
[`app/app.js`](app/app.js). In general, only
application initialization goes in this file. It's normal for developers to
start putting all code in this file, but encourage them to break out different
responsibilities and use the `require` syntax put references where they're
needed.

### Config

Developers should set `apiUrls.production` and `apiUrls.development` in
[`app/config.js`](app/config.js).  With
`apiUrls` set, developers may rely on `apiUrl` as the base for API
URLs.

### Styles

Developers should store styles in [`app/styles`](app/styles) and load them
from [`app/styles/index.scss`](app/styles/index.scss). Bootstrap version 3 is
included in this template.

### Forms and Using `getFormFields`

Developers should use [getFormFields](get-form-fields.md) to retrieve form data
to send to an API.

### Deployment

To deploy a browser-template based SPA, run `grunt deploy`.

## Adding Images

To add images to your project, you must store them in the `public` directory.
To use the image in HTML or CSS, write the path to the image like this:

```html
<img src="public/cat.jpg">
```
or
```css
#my-cool-div {
  background-image: url('public/cat.jpg')
}
```

Note that there's no `./` or `/` in front of `public/filename.jpg`.

## Adding Fonts

To add custom fonts to your app, you can either use a CDN like Google Fonts, or
you can download the fonts and save them in the `public` directory. If you use
the former method, follow the directions on the website providing the fonts.

For local fonts, put the files in `public`, and then import and use them in a
`.scss` file like this:

```scss
@font-face {
  font-family: 'Nature Beauty';
  src: url('public/Nature-Beauty.ttf') format('truetype');
}

.element-with-custom-font {
  font-family: 'Nature Beauty';
}
```

## Tasks

Developers should run these often!

- `grunt nag` or just `grunt`: runs code quality analysis tools on your code
    and complains
- `grunt make-standard`: reformats all your code in the JavaScript Standard Style
- `grunt <server|serve|s>`: generates bundles, watches, and livereloads
- `grunt build`: place bundled styles and scripts where `index.html` can find
    them
- `grunt deploy`: builds and deploys master branch


## Additional Resources

- [Modern Javascript Explained for Dinosaurs](https://medium.com/@peterxjang/modern-javascript-explained-for-dinosaurs-f695e9747b70)
- [Making Sense of Front End Build Tools](https://medium.freecodecamp.org/making-sense-of-front-end-build-tools-3a1b3a87043b)

## [License](LICENSE)

1. All content is licensed under a CC­BY­NC­SA 4.0 license.
1. All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
