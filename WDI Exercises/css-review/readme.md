# CSS Crash Course

## Download

Clone this repo...

```bash
$ git clone git@github.com:ga-wdi-exercises/css-review.git
```

Open the cloned directory in Atom...

```bash
$ cd css-review
$ atom .
```
> If you are using a different text editor, you will not be using the `atom` Terminal command.

## Matching Exercise

Provided are a bunch of stylesheets (`.css`) and their corresponding `.md` files.
> e.g. `positioning.css` and `positioning.md`

The `.css` files contain a bunch of CSS snippets. The `.md` files contain English descriptions of what all those CSS snippets do -- but in a different order.

Your job is to copy each CSS snippet and paste it next to its description in one of the `.md` files.

This is also going to require testing your css with `index.html`. More on that below.

#### Example Matching Exercise Answer

In a CSS snippet...

> ```
> background-color: red;
> ```

In a `.md` file...
>
> ```
> Gives el a red background
> ` ` `
> .el{
>
> }
> ` ` `
> ```

The CSS snippet pasted in the correct section of the `.md` file...

```
Gives el a red background
` ` `
.el{
  background-color:red;
}
` ` `
```

## Testing the CSS

First, look at the words used in the CSS snippets. What do the words mean in English? For instance, if you see `background-color: red`, it's pretty obvious what that does.

If you're not sure about a particular snippet, put it in the provided `index.html` and see how its appearance is affected.

1. Open the provided `index.html` file in your web browser. You can do that by entering `$ open index.html` from the exercise directory in the Terminal.  
2. Copy and paste the snippet into the section marked `PUT YOUR CSS HERE`.  
3. "Save" the `index.html` file.  
4. "Refresh" the page in your browser to see what changes have been applied.  

If you're still unsure, try Googling the name of the CSS property in question (e.g. "CSS background-color").

## What Is `el`?

"El" is short for "element". Often, "el" is used in Javascript to refer to a certain element, `var el = document.getElementById("some-id-name")`. In the context of this exercise, when you're told to "do something with el," it means "do something with all HTML elements with the class of 'el'".

## Hint

If you've copied and pasted some strange CSS and refreshed the page but it doesn't look any different, the CSS may only affect its appearance when the screen or particular elements are bigger or smaller than a certain size.
