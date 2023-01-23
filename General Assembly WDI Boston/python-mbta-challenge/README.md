[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Python MBTA Challenge

## Instructions

1.  Fork and clone this repository.
1.  Change into the new directory.
1.  Create and checkout a new branch to work on.
1.  Fulfill the listed requirements.
1.  Be sure to do your work in challenge.js

A pull request is not required, but it is necessary if you want a code review.

You may wish to refer to [FAQs](https://github.com/ga-wdi-boston/meta/wiki/)
related to [forking,
cloning](https://github.com/ga-wdi-boston/meta/wiki/ForkAndClone).

## Requirements

Create a program that models a simple subway system.

-   The program takes the line and stop that a user is getting on at and the
    line and stop that user is getting off at and prints the total number of
    stopsfor the trip.

There are 3 subway lines:

The Red line has the following stops:

```py
  red_line = south station, park st, kendall, central, harvard, porter, davis, alewife
```

The Green line has the following stops:

```py
  green_line = haymarket, government center, park st, bolyston, arlington, copley
```

The Orange line has the following stops:

```py
  orange_line = north station, haymarket, park st, state, downtown crossing, chinatown, back bay, forest hills
```

All 3 subway lines intersect at park st, but there are no other intersection
points. Some of this MBTA is fictionalized. Haymarket does not connect the
orange/green lines.

## Hints

-   Assume good user input. Don't do lots of checking to ensure good input.

-   You should be able to try to calculate the distance in your code without
    user input, but in the end we'll want user input.

-   You need to prompt the user for four pieces of input data.

-   Consider diagraming the lines by sketching out the subway lines and their
    stops and intersection.

-   The key to the lab is to find the intersection of the lines at park st.

## [License](LICENSE)

Source code distributed under the MIT license. Text and other assets copyright
General Assembly, Inc., all rights reserved.
