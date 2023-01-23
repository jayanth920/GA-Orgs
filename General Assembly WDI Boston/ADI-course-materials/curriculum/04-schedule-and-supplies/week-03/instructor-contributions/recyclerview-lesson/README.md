---
title: Recycler View
duration: "1:30"
creator:
    name: Ayinde Williams
    city: SF
---

<!--  OUTSTANDING

1. Questions for the discussion in the conclusion
-->

# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) RecyclerView


### LEARNING OBJECTIVES
*After this lesson, you will be able to:*
- Create a RecyclerView Adapter to retrieve and bind data
- Create a RecyclerView react to a user's click

### STUDENT PRE-WORK
*Before this lesson, you should already be able to:*
- Declare and use Java Lists
- Describe how RecyclerViews work
- Describe the basics of Android Views

### INSTRUCTOR PREP
*Before this lesson, instructors will need to:*
- Open and run the starter and solution code
- Modify sections and checks as needed

---

### LESSON GUIDE

| TIMING  | TYPE  | TOPIC  |
|:-:|---|---|
| 5 min  | [Opening](#opening-5-mins)  | Discuss lesson objectives |
| 10 min  | [Introduction](#introduction-recyclerviews-10-mins)  | RecyclerViews |
| 5 min  | [Demo](#demo-recyclerviews-5-mins)  | RecyclerViews |
| 10 min  | [Introduction](#introduction-recyclerview-adapter-10-mins)  | RecyclerView Adapter |
| 10 min  | [Demo](#demo-recyclerview-adapter-10-mins)  | RecyclerView Adapter |
| 15 min  | [Guided Practice](#guided-practice-recyclerview-adapter-15-mins)  | RecyclerView Adapter |
| 10 min  | [Introduction](#introduction-view-recycling-10-mins)  | View Recycling |
| 20 min  | [Independent Practice](#independent-practice-recyclerview-and-recyclerview-adapter-20-minutes)  | RecyclerView and RecyclerView Adapter |
| 5 min  | [Conclusion](#conclusion-5-mins)  | Review / Recap |
<a name="opening"></a>
## Opening (5 mins)

We learned how to create and work with Lists. These are a very important part of many Android apps, so Android provides some very useful tools for integrating them into your layouts. Today we will be covering RecyclerViews.

> Check: Ask the students to explain what Lists are used for and how they work.



<a name="introduction"></a>
## Introduction: RecyclerViews (10 mins)

RecyclerViews are a very common View used in Android apps that have collections of data. Anything that contains lists of data with repeated visual elements can use a RecyclerView.

There are two major components to a RecyclerView. First, there is the actual RecyclerView widget in your Layout. This is just like any other widget, with a width, height, and id.

The second component is the template layout used by the RecyclerView. For each piece of your data, a copy of the layout for the item is created, populated with your data, and inserted into the list.

> Check: Show the students a RecyclerView item with an image and two lines of text, and ask them to identify the components inside of it.

<a name="demo"></a>
## Demo: RecyclerViews (5 mins)

Starting with an empty Android project, we will add a RecyclerView to the activity. We won't be populating it until we cover RecyclerView Adapters in the next section of this lesson.

First, let's open up the layout XML file and add the RecyclerView:

```xml
<RecyclerView
       android:id="@+id/recycler_view"
       android:layout_width="match_parent"
       android:layout_height="match_parent"></RecyclerView>
```

Next we're going to discuss the RecyclerView Adapter so we can insert our data.

> Check:  Ask the students to get a reference to the RecyclerView in the Java code, since it is like any other view.

```java
RecyclerView listView = (RecyclerView)findViewById(R.id.recycler_view);
```

***

<a name="introduction"></a>
## Introduction: RecyclerView Adapter (10 mins)

RecyclerView Adapters are the other part of the puzzle for showing your data on the screen. Your data is passed directly into your adapter. After the adapter has your data, and you have specified how you want to display your data, you connect the adapter to your ListView. Once that happens, your Adapter takes an item from your List, creates a new list item, applies the data to the appropriate layout for the item, and inserts it into the ListView. This process repeats for every item in your List.

One important thing to note is that if the data in the list changes, you must tell the adapter so it can refresh the RecyclerView on the screen. To do this, you call a method named `notifyDataSetChanged` on the adapter. This will be shown in the example in the next section.


<a name="demo"></a>
## Demo: RecyclerView Adapter (10 mins)

To complete our example, we will create a LinkedList, create a RecyclerView Adapter, then set the RecyclerView Adapter to the RecyclerView. The following code shows these three steps:

```java
LinkedList<String> exampleList = new LinkedList<String>();
exampleList.add("Arizona");
exampleList.add("New Mexico");
exampleList.add("New York");
exampleList.add("Rhode Island");

```
What if we wanted to add South Carolina to our list? To do this, we simply call the add method on the list, then notify the adapter:

``` java
exampleList.add("South Carolina");
```

> Check: What would happen if we set the adapter before adding any data to the list?


<a name="guided-practice"></a>
## Guided Practice: RecyclerView Adapter (15 mins)

Use the provided Android project RecyclerViews and complete the `MainActivity.java` and `activity_main.xml`. Work with a partner to do the following:

- Add a RecyclerView where there is a comment in the XML file
- Add an Adapter to the newly created RecyclerView, using the data in the provided LinkedList
- Implement the `onClick` method of the provided `FloatingActionButton` to remove the first element of the list (if one exists), and refresh the RecyclerView on screen.

> Check: Were students able to successfully solve the problem or complete the task?

<a name="introduction"></a>
## Introduction: View Recycling (10 mins)

The examples we have seen so far have relatively small lists of data. Imagine, however, if we had a list with 10,000 items. Does Android create 10,000 list items all at once?

In order to conserve memory and improve performance, instead, Android only instantiates enough list items to fill the screen. As you scroll up or down on the list, the adapter retrieves the correct data, replaces the data for the next row, replaces the data in the row that just moved off screen, and moves the updated row to the correct spot. The actual data isn't removed from memory, since it is stored in its own collection.

> Check: If a screen can fit exactly ten list items on the screen at any moment, what is the maximum amount instantiations of the list item that can exist in memory at any point in time?


<a name="ind-practice"></a>
## Independent Practice: RecyclerView and RecyclerView Adapter (20 minutes)

Build an activity that contains a RecyclerView with two types of interaction:

- Pressing the FloatingActionButton should add a new list item containing whatever text the you want
- Long-pressing on a specific list item should delete that item

> Check: Were students able to create the desired deliverable(s)? Did it meet all necessary requirements / constraints?

<a name="conclusion"></a>
## Conclusion (5 mins)

RecyclerViews are crucial components to many of the Android apps you will build in your career. They can handle listing data from practically any source you need, and do it with relatively little coding. Basically any data source you have can be used in an adapter.



### ADDITIONAL RESOURCES
- [RecyclerView Reference](http://developer.android.com/reference/android/support/v7/widget/RecyclerView.html)
- [RecyclerView Adapter Reference](http://developer.android.com/reference/android/support/v7/widget/RecyclerView.Adapter.html)
