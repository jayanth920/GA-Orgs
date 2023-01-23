# Markdown Study

Markdown is a lightweight markup language with plain text formatting syntax. For
us developers, Markdown is often used to format README files, and is an important
part of putting together your project repositories.

## Intro

Use your favorite search engine and the provided readings to research and
respond to the following questions.

In your responses, be sure to cite any relevant sources you consulted in your
search. We ask you to write responses in your own words in order to see how you
process what you've read. Please do not respond with direct quotes from source
material. Instead, digest what you've read and repeat it in your own voice.

## Readings

- [Markdown Introduction](https://daringfireball.net/projects/markdown/)
  - Stop after the "Introduction"
- [Markdown Syntax](https://daringfireball.net/projects/markdown/syntax)
- [Mastering Markdown](https://guides.github.com/features/mastering-markdown/)
- [Markdown Cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)

## markdownlint

You may notice that there is no linter (or `package.json` file) included in
this repository. That means that changes you make to this markdown file are not
automatically checked against any rules for consistency and standardization.

Enter [markdownlint](https://www.npmjs.com/package/markdownlint).
Markdownlint is an npm package we can install globally to check individual
markdown files for syntax errors.

### To Use markdownlint

1. Install by running the command `npm install --global markdownlint markdownlint-cli` in your terminal.

- This installs these packages globally.
- It should only need to be done once on your computer.

2. Run markdownlint on a markdown file in your repository with the terminal command `markdownlint <filename>.md`.

3. Now you can check any markdown file for accepted standards!

### Try it for Yourself

Use the command `markdownlint README.md` to check `README.md` in this
repository. Use the [documentation](https://www.npmjs.com/package/markdownlint)
to figure out what the first broken rule is saying.

## Headers

Below, replace the text with three (3) **different** headers.

---

Replace Me With An H1 Heading

Replace Me With An H2 Heading

Replace Me With An H4 Heading

---

## Emphasis

Below, replace the text with the appropriate Markdown syntax.

---

Emphasis, aka italics: Make me italic!

Strong emphasis, aka bold: Make me bold!

Combined emphasis: Make me bold AND italic!

Strikethrough: Cross me out!

---

## Links and Images

Below, replace the bold text with the appropriate Markdown syntax.
Choose a link and image of your choice for each.

---

**I am a link!**

**I am the alternate text for an image!**

---

## Code

Below, add code syntax for both inline and blocks of code.
For the block of code, add `js` as the language.

---

Here is an example of some inline code: my_var = 3

Check out my function:

const success = function () {
  console.log('success!')
}

---

## Tables

Below, add the proper markdown syntax to turn the plain text into a table:

---

First Column Header "Name"
Second Column Header "Details"
Item 1 name
Item 1 details
Item 2 name
Item 2 details
Item 3 name
Item 3 details

---
