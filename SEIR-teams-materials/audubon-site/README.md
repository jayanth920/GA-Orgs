[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Audubon Society Website

Build a website for the Audubon Society!

## Prerequisites

- React
- Components, props, and state
- React Router

## Instructions

1. Fork and clone this repository.
1. Change into the new directory.
1. Create a new React app
1. Fulfill the listed requirements.

Create a new React app in the root of this repository (i.e.
`npx create-react-app audubonapp`) and build your project out from there. You are required to
turn in your submission by making a pull request on the original repository.

**This assignment will be due Monday at 10 am ET. 

## Requirements

The Audubon Society has asked you to build them a website where users can see an index of bird images and be able to click on any given bird to see more information about that single bird on their own dedicated show page. 

### Required Pages / Views

**Home Page:** Users should see a thumbnail image for each bird. Clicking on the
bird image should take the user to the show page for that bird.

**Show Page:** Users should see all the data for a particular bird. Each bird
has an image, name, and genus. The show page should also include a link to the
Audubon Field Guide page for that bird. Birds for which there is an active
conservation effort will have a Conservation Status (not all birds will have
this though).

### Other Requirements

**React Router:** Implement React Router into your app.

  - The home page should have a route of `/`
  - The show page should load when the url ending includes the name of the bird, for example `/Acadian+Flycatcher` would take the user to the show page for the Acadian Flycatcher
    - In other words, the route should be `/:bird`

**Styling:**

Format your HTML and write the CSS of your app to look like the following mockups:

_NOTE!_ Don't worry if your app doesn't look _exactly_ like the mockup. If the bird images look pixelated on your page, that's totally fine.  

**Home Page:**
![homepage](https://media.git.generalassemb.ly/user/8618/files/261bb4ca-cbb6-11e8-86de-e4da123819ce)

**Show Page:**
![show page](https://media.git.generalassemb.ly/user/8618/files/26595fb4-cbb6-11e8-9d34-3447f8414d6a)

## Data

Use the following data for the initial state of your application:

```js
const birds = [
  {
    name: "Acadian Flycatcher",
    genus: "Empidonax virescens",
    conservationStatus:
      "Would be vulnerable to loss of habitat, but no significant decline noted so far. In some regions, Brown-headed Cowbirds often lay eggs in nests of this species.",
    image:
      "https://www.audubon.org/sites/default/files/styles/bird_illustration/public/4492_Sibl_9780307957900_art_r1.jpg?itok=8HuhVVIy",
    homepage: "https://www.audubon.org/field-guide/bird/acadian-flycatcher"
  },
  {
    name: "Acorn Woodpecker",
    genus: "Melanerpes formicivorus",
    conservationStatus:
      "Still widespread and common. Reliance on specific oak habitats may make it vulnerable to the effects of climate change.",
    image:
      "https://www.audubon.org/sites/default/files/styles/bird_illustration/public/2420_Sibl_9780307957900_art_r1.jpg?itok=7khdegFX",
    homepage: "https://www.audubon.org/field-guide/bird/acorn-woodpecker"
  },
  {
    name: "American Black Duck",
    genus: "Anas rubripes",
    conservationStatus:
      'Still abundant locally, but has declined drastically in interior parts of range. Clearing of forest has favored invasion by Mallards, which hybridize extensively with Black Ducks, leading to genetic "swamping" of population.',
    image:
      "https://www.audubon.org/sites/default/files/styles/bird_illustration/public/783_Sibl_9780307957900_art_r1.jpg?itok=q04--9Fr",
    homepage: "https://www.audubon.org/field-guide/bird/american-black-duck"
  },
  {
    name: "American Flamingo",
    genus: "Phoenicopterus ruber",
    conservationStatus: "",
    image:
      "https://www.audubon.org/sites/default/files/styles/bird_illustration/public/601_Sibl_9780307957900_art_r1.jpg?itok=AcEmNVlO",
    homepage: "https://www.audubon.org/field-guide/bird/american-flamingo"
  },
  {
    name: "American White Pelican",
    genus: "Pelecanus erythrorhynchos",
    conservationStatus:
      "Colonies are vulnerable to disturbance and habitat loss. Total population probably declined through first half of 20th century, substantial increase since 1970s.",
    image:
      "https://www.audubon.org/sites/default/files/styles/bird_illustration/public/267_Sibl_9780307957900_art_r1.jpg?itok=eUpCM6_Y",
    homepage: "https://www.audubon.org/field-guide/bird/american-white-pelican"
  },
  {
    name: "Aplomado Falcon",
    genus: "Falco femoralis",
    conservationStatus: "",
    image:
      "https://www.audubon.org/sites/default/files/styles/bird_illustration/public/990_Sibl_9780307957900_art_r1.jpg?itok=gs0Ngawy",
    homepage: "https://www.audubon.org/field-guide/bird/aplomado-falcon"
  },
  {
    name: "Atlantic Puffin",
    genus: "Fratercula arctica",
    conservationStatus:
      "Major declines during 19th century were owing to overharvesting of eggs and adults. During 20th century, continued to decrease at southern end of breeding range in both North America and Europe. Vulnerable to introduction of predators (such as rats) to nesting islands. An ambitious Audubon project to re-introduce puffins on former nesting islands off Maine, started in the 1970s, has been a major success. However, at the southernmost colonies, puffins have poor breeding success in warm-water years, which are becoming more frequent as the climate heats up.",
    image:
      "https://www.audubon.org/sites/default/files/styles/bird_illustration/public/2514_Sibl_9780307957900_art_r1.jpg?itok=nTHL4EEu",
    homepage: "https://www.audubon.org/field-guide/bird/atlantic-puffin"
  },
  {
    name: "Aztec Thrush",
    genus: "Ridgwayia pinicola",
    conservationStatus: "",
    image:
      "https://www.audubon.org/sites/default/files/styles/bird_illustration/public/3556_Sibl_9780307957900_art_r1.jpg?itok=LP8V2DuC",
    homepage: "https://www.audubon.org/field-guide/bird/aztec-thrush"
  }
];
```


## Bonus: 

Finished everything above and want to stretch your brain? Try adding a static create route.

**Create Page:** Users should be able to navigate to this page from the
homepage. It should have a form for adding a new bird with fields for:

- `name`: the bird's common name
- `genus`: the bird's scientific name
- `conservationStatus`: If there is a conservation status for the bird
- `image`: an image of the bird
- `homepage`: a link to the Audubon Field Guide page.

Make sure you add the functionality so that when the user submits the form, it will "add" the new bird to the "database" and will appear on the home as well as have its own show page. (Please note because there's no real database attached to your app, any newly added bird will disappear upon fully refreshing the page!)

**Create Page Mockup:** 

![create page](https://media.git.generalassemb.ly/user/8618/files/25bc5570-cbb6-11e8-9912-eb843afec31c)

**Create Page Route:** `/create`


## Plagiarism

Take a moment to refamiliarize yourself with the
[Plagiarism policy](https://git.generalassemb.ly/DC-WDI/Administrative/blob/master/plagiarism.md).
Plagiarized work will not be accepted.

## [License](LICENSE)

1.  All content is licensed under a CC­BY­NC­SA 4.0 license.
2.  All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
