[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Corgi Carousel

![](https://imgur.com/pq7zXBJ.png)

Carousels are essentially slideshows used to cycle through a series of content. Today, we'll be building a very simple one to cycle through a set of images using HTML/CSS/JavaScript.

## Setup

Starter code has been provided for you with all the files linked together and the jQuery library.
  1. Fork and clone the repo.
  2. Open the entire folder in VScode to follow along and create a carousel with cute little corgis.
  4. Open the `index.html` in your browser.

## CSS

Before we can move onto the javascript file to give our carousel buttons some functionality, we need to hide all content of the carousel except the very first one. This way, the user only sees the first image when they first load the page.

1. In the `css/style.css` file, hide all the images in the carousel by adding `display: none;` to `.carousel-images img`
1. Show just the first image in the carousel by adding:
  ```
  .carousel-images img:first-of-type {
    display: block;
  }
  ```
   > :dog: See more on [:first-of-type selector](https://css-tricks.com/almanac/selectors/f/first-of-type/)

 ## JavaScript

##### Now, let's just get our "next" button working

 1. Grab the next button element.
 2. Add event listener onto our 'next' button.

  ```
  const next = document.querySelector('.next');

  next.addEventListener('click', () => {
    //stuff will go here

  })
  ```
1. Keep track of what image is currently showing by setting a global index counter variable:
  `let currentImgIndex = 0;`
1. We will have to keep track of the image that we switch from so let's make another global variable:
  `let previousImgIndex = 0;`
1. Create a variable that will hold all of the images with the class "images":
  `const images = document.getElementsByClassName('images');`
1. Inside the event listener for our "next" class, set previousImgIndex to currentImgIndex, and increment      currentImgIndex by 1.
1. Next, inside the event listener for our "next" class, select the currently showing carousel image with:  
  `images[previousImageIndex]`
1. Hide that currently showing carousel image by tacking on `.style.display = 'none';`
1. Show the new currentImgIndex image by using: `images[currentImgIndex].style.display = 'block'`


##### Great, now our next button works and we can cycle through all the images -- but then it breaks when we reach the last one! Let's fix that!


1. Back inside our event listener, let's make an if statement to check whether currentImgIndex is greater than or equal to the length of our images array.
1. Inside the if statmement, make it that if we go above the amount of images we have, it'll reset the currentImgIndex back to the first one. (index of the first image in our images array)
    - :red_circle: Remember to watch where you place this if statement! Should it go before you hide the current image or after?
  ```
   if(currentImgIndex >= images.length) {
    currentImgIndex = 0;
   } 
  ```

##### Now let's do the same thing for the "previous" button!

1. Add the event listener:
  ```
  prev.addEventListener('click', () => {
    //stuff will go here
  })
  ```
1. Add the hide/show code like we did for the next button:
  ```
  images[previousImgIndex].style.display = 'none';
  images[currentImgIndex].style.display = 'block';
  ```
1. For our previous button, we want to _decrement_ the image index this time. So, write an if statement that says, as long as currentImgIndex is greater than 0, we can keep decrementing. But if it is less than 0, reset the currentImgIndex back to the _last_ image index:
    - :red_circle: Remember again to watch where you place this!
  ```
  if(currentImgIndex < 0) {
    currentImgIndex = images.length - 1;
  } 
  ```
  - :red_circle: Remember the first index in an array is 0, so we have to specify currentImgIndex to become the LAST image's index.


## BONUS

:dog: Some of this code isn't quite DRY, try to dry it up!
