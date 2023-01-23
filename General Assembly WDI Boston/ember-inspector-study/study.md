# Ember Inspector Study

Now that you've seen a basic Ember application and have discussed all of the
 different components that go into it, let's look at a useful tool that will
 prove invaluable when you build your own applications, the Ember Inspector.

## Objectives

By the end of this practice, you should be able to:

-   Set up the Ember Inspector browser extension.

-   Get top-level information about the application using the Info tab.

-   Inspect an application's view states (along with associated Models
     and Templates) using the Inspector's "View Tree" tab.

-   Explore individual Routes using the "Routes" tab.

-   Look through the data store using the "Data" tab.

-   Identify possible deprecated code in your applications using the
     "Deprecations" tab.

## Preparation

1.  [Fork and clone](https://github.com/ga-wdi-boston/meta/wiki/ForkAndClone)
    this repository.

1.  Install dependencies with `npm install`.

1.  Install the Ember Inspector through the
     [Chrome Web Store](https://chrome.google.com/webstore/category/apps)
     (if you're using FireFox, you can download it as an [add-on](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
     ).

1.  In Chrome, click on the three vertical dots in the top right corner of the window, and click Settings. Hover over More Tools, then click Extensions, scroll down to Ember Inspector, and check the box labeled "Allow in incognito".

## Using Ember Inspector

In order to get comfortable using Ember Inspector, we're going to use it to
 explore a working Ember app (included in this repo for your convenience).
The code for this application comes from
 [an example app](https://guides.emberjs.com/v2.8.0/tutorial/ember-cli/)
 produced by the ember-cli team.

Run `ember serve` to launch the application.
You should see a message in the console that looks like this:

```bash
Build successful - 9951ms.

Slowest Trees                                 | Total
----------------------------------------------+---------------------
ConcatWithMaps                                | 6567ms

Slowest Trees (cumulative)                    | Total (avg)
----------------------------------------------+---------------------
ConcatWithMaps (4)                            | 6622ms (1655 ms)
Babel (4)                                     | 1088ms (272 ms)
```

Don't worry if the contents of your table look a bit different, as long as you see `Build successful`.

Open `http://localhost:4200` in your browser; you should see a page like this:

![Page](https://cloud.githubusercontent.com/assets/10408784/18523341/da05e2b8-7a81-11e6-8fa6-db4fd7cca906.png)

Finally, open Ember Inspector; in Chrome, you do this by opening the Chrome
 Inspector and going to the tab labelled 'Ember'.

### Info Tab

![Info](https://cloud.githubusercontent.com/assets/10408784/18523372/edbe110e-7a81-11e6-91a8-cd0dc31b3096.png)

The info tab is where you can find version information for the key libraries in
 your Ember application (Ember, Ember Data, jQuery) as well as the version of
 Ember Inspector itself.

### View Tree Tab

![View Tree](https://cloud.githubusercontent.com/assets/10408784/18523407/17e70472-7a82-11e6-8d7a-44f03b7b1bcf.png)

The 'View Tree' tab shows all of the view states in your application.
A view state is an abstraction representing a possible way that the screen can
 look; in the context of an Ember application, a view state is represented by a
 Route and a Template.
A typical application might have a large number of different Routes and view
 states, nested in a tree-like fashion based on their URLs.

This particular app only has one view state, `application`, so we can't see that
 tree structure very easily.
However, if we check the 'Components' box, suddenly a tree structure appears!
Even though there are no other view states inside `application`, `application`
 _does_ contain multiple Ember Components, each with its own template.

If you click one of the cells in the 'View/Component' column, it will pop up a
 sidebar on the right displaying all of the properties for that particular
 top-level template or Component.

See the `>$E` thing on the right side of the cells in the 'Model', 'Controller',
 and 'View/Component' columns?
That link will take the entity referenced in that cell and make it available in
 the console, inside a variable called `$E`.
For instance, if you click the `>$E` in the Model column, you can then go over
 to the Console tab and type `$E` to see the actual object that Ember uses to
 store model info.

`$E.forEach(function(rental){console.log(rental.get('title'))})`

Take note that these entities usually have a _lot_ of properties and
 methods, most of which you don't ever manipulate directly - they're part of
 the inner machinery of how Ember works.

### Routes Tab

![Routes](https://cloud.githubusercontent.com/assets/10408784/18523423/2849313c-7a82-11e6-9af0-2c7dbb0dcef1.png)

The 'Routes' tab allows you to look at all of the routes in your application
 that users can hit.
This includes routes that were auto-generated by Ember, such as
 'application_loading' and 'application_error'.

> '\_loading' and '\_error' are a special kinds of view states called
> 'sub-states'; they're what the users see when transitioning between pages.
> By default, if you don't specify Templates to sit at those Routes, the app
> will show the current view state until the next view state is fully loaded
> (or there is an error).

Much of this content is similar to the content that you can see on the
 'View Tree' tab.
However, it's worth noting that Route Objects are _only_ visible on the 'Routes'
 tab, while Models are _not_ directly visible.

Similar to the 'View Tree' tab, the 'Routes' tab allows us to zoom in on Route
 Objects and Controllers via a sidebar on the right.

### Data Tab

![Data](https://cloud.githubusercontent.com/assets/10408784/18523433/385306a2-7a82-11e6-8fda-c48fd1b0d559.png)

The 'Data' tab is a very useful one - it shows every model instance that'd been
 created by your application (split up by Model) along with all of its
 properties.
Naturally, this is very useful for making sure that your data all look correct.

### Deprecations Tab

![Deprecations](https://cloud.githubusercontent.com/assets/10408784/18523459/5125cd04-7a82-11e6-8d75-1a57a6e5e459.png)

The 'Deprecations' tab functions as a sort of linter for your Ember code, giving
 you warnings about particular expressions, idioms, or tools that will soon be
 phased out.
Since Ember is a fairly new framework (initially released in December 2011),
 updates are common, so being able to keep tabs on the differences between one
 version of Ember and the next is very important.

## Explore the Ember Inspector

Take the next 15 minutes to play around with this app in the Ember Inspector.
If you notice anything interesting, write it down - ask your questions in slack!

## Additional Resources

-   [Source code for Ember Inspector](https://github.com/emberjs/ember-inspector)

## Share Your Understanding

What are the benefits of using ember inspector?

```md
<!-- your answer here -->
```

Which tab would you use to debug an error involving a model's attribute value?

```md
<!-- your answer here -->
```

What is the URL to download ember inspector for chrome?

```md
<!-- your answer here -->
```
