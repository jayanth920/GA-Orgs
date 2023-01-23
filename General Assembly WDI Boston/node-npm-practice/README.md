[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Using NPM with Node

## Prerequisites

- [ga-wdi-boston/node-api](https://git.generalassemb.ly/ga-wdi-boston/node-api)

## Objectives

By the end of this, developers should be able to:

- Find an NPM package that solves a common problem.
- Write a script that uses an NPM package.

## Preparation

1. [Fork and clone](https://git.generalassemb.ly/ga-wdi-boston/meta/wiki/ForkAndClone)
    this repository.
1. Install dependencies with `npm install`.

## Instructions

Read through each section, complete each lab, and submit answers in
[lib/practice.md](lib/practice.md) via pull request.

## Node and NPM

#### Node Modules

[Node modules](https://nodejs.org/api/modules.html#modules_modules) are simply
packaged up pieces of code that assist us in various ways. Any functions
exported by that module become available to us when we require said module.
Variables local to the module's code remain private.

#### NPM

[NPM](https://docs.npmjs.com/getting-started/what-is-npm) is Node's default
package manager. Not only does it allow developers to share their open source
packages, but it allows us to download and keep updated with these packages.

## Practice: Install a Package for Enumeration

Thinking back to Ruby, we know that as a language, it is really convenient for
list processing versus JavaScript. How can we do something similar in Node?

Do some research and find a Node module that is designed to help with list
processing/enumeration. Once you've found one you've deemed worthy, install it
to this repository by running (from the command line)

`npm install <package-name>`

*In your [lib/practice.md](lib/practice.md), please make note of which package
you decided on.*

## Research: Popular NPM Packages

Find the most popular packages on NPM and note, in your own words, three of the
packages. Questions to consider while you research:

1. What problem does this package solve?
1. How can I use this package in my own code? What steps are involved?
1. How well-maintained is this package? What criteria did I use to decide?

*Please leave these responses in [lib/practice.md](lib/practice.md).*

## Lab: Use Packages in `randomizer.js`

Take your randomizer script from
[ga-wdi-boston/node-api](https://git.generalassemb.ly/ga-wdi-boston/node-api).
Change it to use packages from NPM. You will need to identify what code you want
to replace with a package and then find an appropriate package using Google or
the NPM registry.

***If the enumeration package you previously installed was not [`lodash`](https://lodash.com/docs),
please go ahead and install lodash using `npm install lodash`***

Here are a few things you might try:

- Try comparing another shuffling package to the knuth-shuffle.
- Use `lodash` to iterate through collections.
- Find a package to colorize terminal output and make your output pretty.
- Decorate your output with emojis!

## Useful NPM Packages

- [lodash](https://lodash.com/)
- [Moment.js | Home](http://momentjs.com/)
- [math.js | an extensive math library for JavaScript and Node.js](http://mathjs.org/)

Careful when using packages in your front-end projects. Some of them are very
large!

## Additional Resources

- [npm](https://www.npmjs.com/)
- [npm Documentation](https://docs.npmjs.com/)

## [License](LICENSE)

1. All content is licensed under a CC­BY­NC­SA 4.0 license.
1. All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
