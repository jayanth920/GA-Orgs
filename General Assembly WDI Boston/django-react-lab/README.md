[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Django-React Lab

Time to combine our new Django skills with some front-end React magic, and
create a full-stack Django and React application!

## Prerequisites

- [react-auth](https://git.generalassemb.ly/ga-wdi-boston/react-auth)
- [react-styling](https://git.generalassemb.ly/ga-wdi-boston/react-styling)
- [django-auth](https://git.generalassemb.ly/ga-wdi-boston/django-auth)

## Objectives

By the end of this, developers should be able to:

- Connect a React front-end to a Django back-end

## Lab

This lab is intentionally split into two parts. The first part will focus on
building out a pixel-perfect React front-end based on a given mockup. The
second part will focus on building a Django API to connect to that front-end.

Do not move on to part two until you complete part one.

You will be building a notes application, similar to Evernote or Google Keep.

![image](https://media.git.generalassemb.ly/user/16103/files/62d00c80-7fed-11ea-9e44-e4940bb6ea89)

### Part One

1. Download and setup the [react-auth-template](https://git.generalassemb.ly/ga-wdi-boston/react-auth-template)
2. Based on the above mockup, style your react application to be as pixel-perfect as possible. You can use some dummy-data for now to see the actual notes.
3. You should be able to see notes, add a new note, update a note, and delete a note from your dummy data.
3. Commit your version one with the title "Lab Part One Complete"

### Part Two

3. Download and setup the [django-auth-template](https://git.generalassemb.ly/ga-wdi-boston/django-auth-template)
3. Based on the following user stories, create a Django backend API:
    - As a user, I want to be able to sign up
    - As a user, I want to be able to sign in
    - As a signed in user, I want to be able to change my password
    - As a signed in user, I want to be able to sign out
    - As a signed in user, I want to be able to create a new note
        - Notes should have a `text` field
    - As a signed in user, I want to be able to see my notes
    - As a signed in user, I want to be able to update my notes
    - As a signed in user, I want to be able to delete my notes
4. Connect your API to your React front end and test functionality
4. Commit completed code with title "Lab Part Two Complete"

## Additional Resources

-

## [License](LICENSE)

1.  All content is licensed under a CC­BY­NC­SA 4.0 license.
1.  All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
