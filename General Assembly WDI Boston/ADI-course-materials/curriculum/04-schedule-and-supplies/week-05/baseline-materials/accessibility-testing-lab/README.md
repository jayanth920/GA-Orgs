---
title: Testing app for accessibility
type: lesson
duration: "1:25"
creator: Yuliya Kaleda (NYC)
---


# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) Testing app for accessibility

This lab is focused on developing the skills to work with open source projects and to practice testing apps for accessibility features so you can make them more accessible. Go to Google Play Services, install the app [Blazon](https://play.google.com/store/apps/details?id=charlyn23.c4q.nyc.projectx&hl=en) in your device or emulator. Go to Settings
tab in your device and enable TalkBack. Test every widget navigating around the app. Pay special attention to such widgets as `ImageButton`, `ImageView`, `CheckBox`, `EditText`.

Some notes on how to use TalkBack:

1. tap on the widget or tab to set focus to it
2. you will get a sound feedback
3. to perform a click or selection, use double tap
4. to scroll use two fingers
5. to exit the TalkBack, scroll the settings window from the top using two fingers, go to Settings and disable TalkBack

## Exercise

#### Requirements  

**Testing (30 mins)**  
* use your headphones to concentrate on the app and not to distract others
* make a list of app's elements/widgets that do not conform to accessibility requirements (labeling user interface elements, enabling focus navigation):

	* check ImageButtons, ImageViews, CheckBoxes, EditTexts to make sure they provide sound feedback when used
	* check all input fields to be focused when navigating the app

**Coding (60 mins)**

* After you installed and tested the app, open the [Blazon app source code](starter-code) in Android Studio.

	* following the list of the widgets and features earlier created, check out the layouts and Java classes of the app and make it accessible

#### Starter code

Grab the [Blazon app source code](starter-code) and import it into Android Studio.

Included in this lab are the following:

* Two activities: **Shame Detail Activity** and **Main Activity**.

	* Main Activity is the parent activity of all the fragments. It is responsible for the main actions/features of the app: display harassment
	instances on the map, show stats fragments, add new instances.

	* Shame Detail Activity is responsible for displaying detailed information about a specific instance of harassment.

* Six fragments: **ProjectX Map Fragment**, **Pie Chart Fragment**, **Bar Chart Fragment**, **Stats Fragment**, **Profile Fragment** and
**Sign up Fragment**.

  * ProjectX Map Fragment displays the Google Map with markers of different colors representing a certain group of people harassed.   
  * Stats Fragment is the parent fragment of Pie Chart Fragment and Bar Chart Fragment.  
  * Pie Chart Fragment shows an animated pie chart with the data about types of harassment.   
  * Bar Chart Fragment shows an animated bar chart with the data about harassed groups.   
  * Profile Fragment is responsible for enabling the geofence feature and showing details about the owner of the app.  
  * Sing up Fragment enables FB, Twitter and Google+ authentication.


* Eight layout files to modify:
 **activity_details.xml**, **bar_chart_fragment.xml**, **custom_toast.xml**, **map_fragment.xml**,
**pie_chart_fragment.xml**, **profile_fragment.xml**, **signup_fragment.xml**, **stats_fragment.xml**.

#### Deliverable

- A list of features and widgets that will make the app accessible
- The improved version of ProjectX app
