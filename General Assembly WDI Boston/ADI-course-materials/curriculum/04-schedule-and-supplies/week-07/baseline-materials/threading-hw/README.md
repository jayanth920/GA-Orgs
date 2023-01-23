---
title: Threading practice
type: Homework
duration: "1:00"
creator:
    name: Drew Mahrt
    city: NYC
---

# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) Threading practice

> ***Note:*** _This should be done independently._

## Exercise

When you created project 2, all of your interaction with the database was done on the main thread. The best practice is to make all interactions with databases (local or remote) asynchronous since there could be delays accessing it. Go through your project 2 code, and modify it to meet these best practices using AsyncTasks.

#### Requirements

- Make all of your database calls (reading/writing) asynchronous

**Bonus:**

- If your code included internet access, make that asynchronous too

#### Starter code (if needed)

Use your project 2 code.

#### Deliverable

Your modified app that meets the requirements above.
