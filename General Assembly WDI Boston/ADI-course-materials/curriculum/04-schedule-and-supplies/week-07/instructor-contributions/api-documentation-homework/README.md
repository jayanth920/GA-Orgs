---
title: API Documentation
type: Homework
duration: "1:00"
creator:
    name: Charlie Drews
    city: NYC
---

# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) API Documentation Practice

> ***Note:*** _This exercise should be done independently._

## Exercise

You are going to practice reading and interpreting API documentation by working with the [Instagram API docs](https://www.instagram.com/developer/).

#### Requirements

Review the [Instagram API documentation](https://www.instagram.com/developer/) and answer the following questions. The URLs specified in the documentation for the API include placeholders like `{media-id}` and `ACCESS-TOKEN` - you can leave the placeholders in your answers. You don't need to sign up for your own API key and generate an access token. (Unless you really want to!)


**Questions:**

1. What URL would use for an API call to retrieve photos recently posted near latitude 40.7128, longitude -74.0059?

1. Click the "RESPONSE" button in the documentation to see a sample response for that API call. What key/value pairs would you need to use to find the number of "likes" a photo received? How many nested JSON objects would you need to traverse to find this information?  _(You don't need to write any code for this, just take a look at the structure of the JSON response and give a very quick description)_

1. Pretend you've sorted the photos by how many "likes" they received. Now, you want to get a list of users that liked the top photo in your list. What URL would you use for an API call to get a list of users who liked a specific photo?

1. Now, you want to show whether the user currently logged into your app has any relationship (follows, followed by, etc) with each user from the list you received from the previous API call. What URL would you use for an API call to get the relationship status between the current user and some other specified user?

1. In the previous question, we wanted to get the current user's relationshp to not just one other user, but to each user in a list. Could we gather this data with a single API call, or would we need to make multiple API calls? How can you tell?

1. Now, you want to see if anyone is tagging their photos as "gelato". What URL would you use for an API call to get a list of tags that contain the word "gelato"?

1. From the responses to your last call, what key/value pair would you use to determine which tag is the most popular?

1. Once you know the most popular tag, what URL would you use to get a list of recent photos that have that tag?

1. Finally, you want to let your current user add a new comment to one of those photos tagged as "gelato". What URL would you use to add a comment to a specific photo? And what type of HTTP request would you need to use?


**Bonus:**
- Sign up for an API key
- Use the Postman app/extension to get an `access_token`
- Try making the API calls you described in your answers and see what responses you get


#### Deliverable

Add your answers to the answers.txt file in this repository. Submit a pull request from your forked copy of the repo back to the original repo.
