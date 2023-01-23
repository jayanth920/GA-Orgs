[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# React Craigslist

Recreate the results page of Craigslist using the data provided

## Prerequisites

* React
* Create-react-app

## Instructions

Create a react app in this directory (`lib/craigslist`) using
`create-react-app`. Then follow the requirements below.

## Requirements

Using the data provided in [`data.json`](./data.json), recreate the craigslist
results page in the provided [`mock.png`](mock.png):

![Craigslist mock](mock.png)

import `data.json` inside of `index.js` and pass it to `App` as props. Then pass
the data through your component tree as you need to.

Don't worry about adding functionality! Just write the JSX necessary to render
a page as close to this as you can. 

You should have the following components:

* App - highest level component, renders all others and passes props down.
    Should just render Header and Results
  * Header - the header navigation bar with the title and navigation
    * Nav - the list of navigation links in the header
  * Results - The main component on this page
    * ResultsHeader - the section of the Results with the breadcrumbs and title
      * Breadcrumbs - the breadcrumbs on the page
    * ResultsList - container component for the list of results
      * Result - component for an individual search result (commonly called a "Card"
        component)

## Plagiarism

Take a moment to refamiliarize yourself with the [Plagiarism policy](https://git.generalassemb.ly/DC-WDI/Administrative/blob/master/plagiarism.md). Plagiarized work will not be accepted.

## [License](LICENSE)

1.  All content is licensed under a CC­BY­NC­SA 4.0 license.
1.  All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
