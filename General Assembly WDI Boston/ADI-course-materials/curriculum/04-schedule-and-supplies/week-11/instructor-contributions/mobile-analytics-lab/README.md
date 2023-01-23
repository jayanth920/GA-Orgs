---
title: Mobile Analytics Lab
type: lab
duration: "1:15"
creator:
    name: Peter Wilkniss
    city: Los Angeles
---


# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) Mobile Analytics Lab

## Introduction

> ***Note:*** _This can be a pair programming activity or done independently._

In this lab, you and a partner will take a pre-configured Android Studio project - #{insert description of app} - determine the attributes and actions that should be measured, and add code to store and retrieve these relevant user actions and attributes. The goal of your work is to #{insert goal of this work based on the app's functionality}.

After you app is configured to collect data, you'll switch apps with many different groups in class and interact with each other's apps to collect and provide data about each other's "users".

You and your partner will use the data collected in your app - from the user interaction - to come up with a plan to iterate on the app.

## Exercise

#### Requirements

- First, take 5 minutes and predict the answers to these questions based on #{your app's functionality}:

  - What are the three most frequent things people do inside this app?
  - What are the three most important things I would want people to do inside this app?

- Then, take 15 minutes to configure the code to store and retrieve the user profile data points that you and your partner have determined to be most important

  - First, go to [clevertap.com](https://clevertap.com/sign-up/) to create an account
  - Then, grab the Account ID and Account Token from your account Settings and insert those in the relevant fields of the starter AndroidManifest.xml
  - Click around your app a bit and log on to your analytics dashboard to make sure it's working; you should be able to see the analytics data you store reflected in your CleverTap account dashboard

- Then, take 20 minutes to switch apps with as many groups as you can and have them click around your app (but don't say what user actions/attributes you're tracking)

- Finally, look at the app's analytics dashboard on the CleverTrap website and come up with a list of features you would change or add to tailor the user experience of the application based on the individual user profile data and address the #{insert goal of this work based on the app's functionality}

**Bonus**

- Make those iterations!

#### Starter Code

The [starter-code](starter-code) folder contains a pre-configured Android Studio project to get you started.

You can use the Mobile Analytics Lesson demo code as a guide, see the [example application](../mobile-analytics-lesson/starter-code).

#### Deliverables

Once you and your partner agree on three user attributes and three user actions that are most important to track, write those in a markdown file called "answers.md" and include it in your pull request.  Your app will also be submitted and contain the code needed to store and retrieve those 6 data points.  Finally, include the feature list you intend to change in the "answers.md" file.

## Additional Resources

- [CleverTap Android SDK documentation](https://support.clevertap.com/integration/android-sdk/)
