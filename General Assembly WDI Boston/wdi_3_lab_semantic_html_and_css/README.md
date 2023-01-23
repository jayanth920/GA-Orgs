# HTML and CSS

## Objectives

* write basic HTML5 pages  
* separate content from style  
* use basic CSS styling  
* debug with Chrome Inspector  

## HTML

HTML is a markup language. It's rendered by the web browser so that the user can read the content.

The point of HTML is to show the relationships between different parts of the content - for example the hierarchy of headers and paragraph text, and the separation of those from the navigational elements of a website. Writing good, **semantic HTML** means separating content from presentation, and giving meaning to that content.

**Element:** tags + content together

Here's a p element: `<p>This is some text</p>`

**Tag:** marks the start and end of an element

Here's a paragraph tag: `<p>`
Here's the end paragraph tag: `</p>`

**Attribute:** property of a tag

The image tag usually has source and alt attributes:

`<img src="puppy.jpg" alt="My puppy Fido">`

Most elements have matching start and end tags. Some tags, like `<img>`, are unpaired and have no closing tag.

### Lab: HTML5 Research

Work with a partner of a different ability level than you. Research these questions, and optionally create demos for yourself as you go. http://codepen.io/pen/ may be useful for playing around with HTML.

Follow your curiosity.

* which tags are new in HTML5? when might you use them?
* what's the best way to insert an image: img element vs. div with css background-image?
* what should the h1 element (biggest text on the page) be: website name, article title, or something else?
* where should you use div vs. article or section?
* what is semantic HTML and why is it important?
* what happens if you don’t have valid HTML? where can you validate your HTML?
* your own questions, if you have time

### Lab: Fix this HTML

Look at the file music.html in this repo. It looks okay in a browser... but it's terrible, non-semantic, meaningless, invalid HTML!

Work with a partner to make it semantic, meaningful, and valid.

Submit a pull request when you're finished.

## CSS

CSS is also a markup language that's rendered by the browser.

The point of CSS is to style the content and make it visually appealing. HTML and CSS should be written in different files in order to separate content from presentation. You should be able to take the same HTML and style it many different ways just by changing the stylesheet.

**Selector:** A pattern used to select the elements you want to style

This selector would select all p elements that are nested (at any level) inside a div element:

`div p`

**Property:** Specifies the style

Let's make the text inside the selector blue:

```
div p {
  color: blue;
}
```

### Lab: CSS Research

Work with a NEW partner of a different ability level than you. Research these questions and create demos for yourself as you go. http://css-tricks.com/ and http://designshack.net/ are excellent resources.

Again, follow your curiosity. Aim for greater understanding rather than voodoo answers.

* when should you use a class vs. id?
* what’s the difference between the selectors “div p” and “div > p”?
* what’s the difference between the selectors “div.container” and “.container div”?
* why are table layouts so 1995? what should we instead for layout?
* what’s the difference between margin and padding?
* what’s International Box-Sizing Awareness Day all about?
* what’s the difference between inline elements and block elements? how about inline-block?
* what’s the difference between “visibility: hidden” and “display: none”?
* if you have a “close” button that you always want positioned in the upper right of a box on your page (no matter where the box moves), what kind of positioning should you give the box and the button?
* how do floats affect their parent element? how might you fix this problem?
* why are “wrapper” or “container” divs useful?
* what’s a CSS reset?
* your own questions, if you have time

### Lab: Wireframe and Clone Existing Site

Choose one of Twitter/Instagram/Imgur and look at it in your browser.

First, create a wireframe of the website.

Second, work alongside others who are also doing the same website to code a basic version of it from scratch. "Alongside" means you do your own individual work, but are encouraged to ask others who are working on the same thing for advice.

Start with the biggest elements first - divide up the page. It's useful to give a border and/or background color to your big divs. Then go progressively smaller and smaller.

Don't worry too much about forms and buttons for now.

## Further Resources

[Gist of Useful Links](https://gist.github.com/tsyan/15a14a588f1dc65ee31d)

