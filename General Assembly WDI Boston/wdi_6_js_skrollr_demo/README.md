![General Assembly Logo](http://i.imgur.com/ke8USTq.png)

# Parallax Scrolling Demo with Skrollr 

[Skrollr.js](https://github.com/Prinzhorn/skrollr)

## Objectives

By the end of this, students should be able to:

- run a `node` server with the `grunt cli`
- initialize a skrollr singleton

## Instructions

- Fork, clone
- run `npm install`
- run `bower install`
- run `grunt serve`

```javascript
/* Skrollr is initialized as simply as this: */
var s = skrollr.init();
```

```javascript
/* but you can also pass in options, like so: */
skrollr.init({
  smoothScrolling: false,
  mobileDeceleration: 0.004
});
```
