---
title: Clicking on ListItems
duration: "1:20"
creator:
    name: Drew Mahrt
    city: NYC
---

# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) `OnItemClickListener`


### LEARNING OBJECTIVES
*After this lesson, you will be able to:*
- Implement `OnItemClickListener`
- Use `OnItemClickListener` with data

### STUDENT PRE-WORK
*Before this lesson, you should already be able to:*
- Create ListViews and ListAdapters

### INSTRUCTOR PREP
*Before this lesson, instructors will need to:*
- Gather materials needed for class
- Complete Prep work required
- Prepare any specific instructions

---


### LESSON GUIDE

| TIMING  | TYPE  | TOPIC  |
|:-:|---|---|
| 5 min  | [Opening](#opening-5-mins)  | Discuss lesson objectives |
| 10 min  | [Introduction](#introduction-onitemclicklistener-10-mins)  | OnItemClickListener |
| 20 min  | [Demo](#demo-onitemclicklistener-20-mins)  | `OnItemClickListener` |
| 10 min  | [Guided Practice](#guided-practice-setting-up-onitemclicklisteners-10-mins)  | Setting up `OnItemClickListener`s |
| 30 min  | [Independent Practice](#independent-practice-integrate-onitemclicklistener30-minutes)  | Integrate `OnItemClickListener |
| 5 min  | [Conclusion](#conclusion-5-mins)  | Review / Recap |
<a name="opening"></a>
## Opening (5 mins)


`ListViews` and `ListAdapters` are used in all kinds of applications that need to display large amounts of data. From Twitter, which displays lists of Tweets, to Seamless, that displays lists of restaurants, we see them every day. So far, we have only seen how to create them and manipulate the data behind them. Now we will work on actually interacting with the list itself.

> Check: Ask the students to explain the relationship between ArrayLists, ListViews, and ListAdapters.



<a name="introduction"></a>
## Introduction: OnItemClickListener (10 mins)

So far we've handled clicking on Views using an `OnClickListener`, but in ListViews, we have a bunch of individual Views. What happens if we try to write an `OnClickListener` for a ListView?

> Instructor Note: Show the students an example with OnClickListener

Android Studio tells us that we don't want to use this!

The solution is to use something called the `OnItemClickListener`. Like the OnClickListener, the OnItemClickListener also contains a method where you put the code for what happens when you click. In this case, it's called `OnItemClick`.

> Check: Why do we use OnItemClickListener instead of OnClickListener



<a name="demo"></a>
## Demo: `OnItemClickListener` (20 mins)

Let's walk through the following code:

```java
mListView.setOnItemClickListener(new AdapterView.OnItemClickListener() {
    @Override
    public void onItemClick(AdapterView<?> parent, View view, int position, long id) {
        //Do stuff
    }
});
```

- **parent**: The parent object refers to ListView object. From there we can do things like retrieve items from the data collection, or access the Adapter behind the ListView.

- **view**: This refers to the actual list item that was clicked

- **position**: This refers to the position in the view

- **id**: The position in the underlying data set

Let's make it show a toast.

```java
mListView.setOnItemClickListener(new AdapterView.OnItemClickListener() {
    @Override
    public void onItemClick(AdapterView<?> parent, View view, int position, long id) {
        Toast.makeText(MainActivity.this,"Item clicked",Toast.LENGTH_SHORT).show();
    }
});
```

Now, let's have it say what position we clicked.

```java
Toast.makeText(MainActivity.this,"Item clicked at position "+position,Toast.LENGTH_SHORT).show();
```

> Check: Ask students to describe each parameter in OnItemClick



<a name="guided-practice"></a>
## Guided Practice: Setting up `OnItemClickListener`s (10 mins)

Let's take our example further - do this with me.

How would we change the text for the item to show "You clicked position X" for each item? We know that one of the parameters of `onItemClick` is a View, but we need to figure out how to use it.

Check it out:

```java
mListView.setOnItemClickListener(new AdapterView.OnItemClickListener() {
  @Override
  public void onItemClick(AdapterView<?> parent, View view, int position, long id) {
    ((TextView)view).setText("Clicked "+position);
  }
});
```

> Check: Were students able to successfully solve the problem or complete the task?


<a name="ind-practice"></a>
## Independent Practice: Integrate `OnItemClickListener`(30 minutes)

You're inheriting an app that displays information about all the states in the country.  Change the [starter code](starter-code) to use OnItemClickListener. There are two buttons for showing state abbreviations and full state names - remove the two buttons and build in functionality so that when you click a list item (a state), it toggles between the full state name and the abbreviation.

> Check: Were students able to create the desired deliverable(s)? Did it meet all necessary requirements / constraints?



<a name="conclusion"></a>
## Conclusion (5 mins)

- Why don't we use OnClickListener with ListViews?


### ADDITIONAL RESOURCES
- [OnItemClickListener](http://developer.android.com/reference/android/widget/AdapterView.OnItemClickListener.html)
