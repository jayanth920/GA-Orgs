---
title: ListView manipulation
type: Morning exercise
duration: "1:00"
creator:
    name: Drew Mahrt
    city: NYC
---

# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) ListView manipulation

> ***Note:*** _This can be a pair programming activity or done independently._

## Exercise

In groups of 2-4 people, we are going to practice creating ListViews and modifying the data being displayed in the ListView. Create a ListView that holds US state names and two buttons. When you press one button, it switches the state names to the abbreviations, and the other button switches back to the full state names.

#### Requirements

1. In groups of 2-4, create a layout with a ListView and two buttons
2. Create two ArrayLists that contain Strings:

  - List 1 should contain all of the state abbreviations for the first 20 states (AL,AK,AZ,...)
  - List 2 should contain all of the states fully spelled out for the first 20 states (Alabama, Alaska, Arizona,...)

3. Initialize the ListView to show all of the full names of the states
4. The two buttons should be labeled "Abbreviation" and "Full Name". When you click the "Abbreviation"
button, the abbreviations are shown. When you click the "Full Name" button, all of the full names are
shown. (Hint: Look up the `clear()` and `addAll()` methods for ArrayAdapter)

**Bonus:**

- Figure out how to use a custom list item layout and custom adapter to customize your list

#### Deliverable

Create an Android app that fulfills the requirements above.

#### Resources

- [ArrayAdapter](http://developer.android.com/reference/android/widget/ArrayAdapter.html)
