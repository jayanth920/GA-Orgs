
[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Agile Project Documentation

## LEARNING OBJECTIVES
- See different types of Agile tools and methodologies, and discuss the pros and cons of each.
- Write an effective User Story and Acceptance Criteria.
- Explain the importance of good documentation.
- Practice estimations for various User Stories.

## LESSON GUIDE

| Timing | Topic |
| --- | --- |
| 5 min | Opening |
| 15 min | User Stories and Acceptance Criteria |
| 15 min | Intro to New Material - User Stories |
| 10 min | Guided Practice - Good Story/Bad Story |
| 15 min | Intro to New Material - Acceptance Criteria  |
| 15 min | Guided Practice - Writing Acceptance Criteria |
| 10 min | Intro to New Material - Good Documentation and Estimation |
| 20 min | Independent Practice - Gmail Activity: Writing Acceptance Criteria |
| 20 min | Intro to New Material - Tools for Backlog Management|
| 20 min | Independent Practice - Project User Stories |
| 5 min | Conclusion |

<br>


## OPENING 5 mins

Hook.

<br>


## INTRO TO NEW MATERIAL: USER STORIES 15 mins

Last week we talked about Agile methodology and Agile processes. All Agile processes (Scrum, Kanban) have one thing in common: User Stories. Once we identify what the user needs are, and we have a sense of how specific features will provide benefit to our users, we write features in the form of User Stories to communicate user needs to the developers. User Stories help us understand the value of a product by framing it in context of a story. We look at the context the user is in, what the user does, and the result of that action. This helps us humanize the user experience in terms of a story, making it easier for us to empathize with and digest.

#### What is a User Story?

- A User Story is a piece of business value that your team can deliver during a sprint.
- Teams create User Stories in a variety of places — JIRA, Trello and even basic index cards or Post-its. The reason that index cards or Post-its are valuable is so that you are limited to the amount of detail you can put into the story.

There are three components to writing User Stories.  

- The story:

    - Include very few details. This helps to start the discussion.

- The conversation:

    - Happens after the story has been written.

- The confirmation and acceptance tests:

    - These help ensure the feature works.

User Stories are the unit of work your engineers do or commit to, and are a bit different than requirements. As a PM, you will be responsible for writing User Stories and requirements. User Stories explain what problem the user is having and why it is important to solve it. Requirements answer how the team will reach the goal — this is the solution. The PM works with development to write the requirements once the User Stories are understood.


| User Stories | Requirements |
| --- | --- |
| Briefly describe the business value (need & goal). | Detail the deliverable. |
| Told from the user’s point of view. | Told from the function’s point of view. |
| Are refined and detailed via a conversation. | End the conversation about the details. |
| Small, independent. | Big (or many), dependent. |
| Negotiable. | Non-negotiable. |

- Many people in the organization can write User Stories — product owner (or manager), development team, customers — anyone! But the product owner (or manager) is the only one who can add stories to the backlog.
- User Stories are always structured in the same way:

        As a (blank), I want (blank) so that (blank).

- You want to make sure that you are specific about the user. Instead of always saying “as a user,” use something like “As Sarah (a persona),” or “As a developer,” or “As a member of the marketing team.”

- The “so that” part of the User Story is the most important piece because it helps others understand the motivation behind the story and allows the team to suggest better ways to solve the need, rather than building exactly what the customer is asking for.

> Instructor Note: Provide a couple more examples of full User Stories.

There is a nice acronym that helps explain all of this: **INVEST**
- **I - Independent:**

    - Stories can be built in any order.

- **N - Negotiable:**

    - Avoid excess detail so that the team can adjust how much of the story to implement.

- **V - Valuable:**

    - A user or customer gets concrete benefit from completing this story.

- **E - Estimable:**

    - Provide enough detail so that your team can estimate the effort.

- **S - Small:**

- The larger the story, the harder to estimate. The story should be completed within one iteration.

- **T - Testable:**

    - Document the acceptance criteria or “definition of done.” These will become test cases.

When your stories have a beginning and an end, and the Acceptance Criteria matches the goals, then you will know that your story is done.

Check:  Turn and talk: What is the point of writing User Stories? How can it help a team?

<br>

## GUIDED PRACTICE: GOOD STORY, BAD STORY 15 mins

Let’s go through a few examples of good and bad User Stories. Do you think these are good or bad? For a bad story, why is it bad and what is it missing?  

- Bad stories, missing the “so that…”:

    - “A user can quickly master the system.”
    - “A user can edit the address on a resume.”
    - “A user can add, edit, and delete multiple resumes.”
    - “ A job-seeker can solicit a recommendation from a peer to improve their profile.”

- Bad stories — requirements instead of stories:

    - “All runtime errors are logged in a consistent manner.”
    - “The system can calculate saddlepoint approximations for distributions of quadratic forms in normal variables.”

- Good stories:

    - “As a student, I want to purchase a parking pass so that I can park at school.”
    - “As a user, I can indicate folders not to back up so that my backup drive isn't filled up with things I don't need saved.”

A few best practices for writing User Stories:

- Define the what, not the how.
- Use understandable language.
- Group stories by themes.
- Don’t be the bottleneck on your team. Have a healthy backlog of User Stories.

Instructor Note: Use any examples of stories for this portion. Ask students what is wrong with the “bad” story and how they would rewrite it to make it effective. Make sure you are asking “why?” is this a bad story? Good answers: It’s not estimable, not valuable to customers, etc.

Check: Take Two (Minutes): Imagine you are a PM working at StitchFix, an online personal styling company for women, and you are working on improving the search filters. Write one potential User Story for this scenario. Share out.

<br>

## INTRO TO NEW MATERIAL: ACCEPTANCE CRITERIA 10 mins

How do you know when a story is done? Acceptance Criteria defines the boundaries of a User Story and confirms when a story is accepted. The team should only accept stories that are 100% complete. There’s a framework or template for Acceptance Criteria:

_Given (context) and (more context), when (event) then (outcome) and (another outcome)._

- Here’s an example:

    - User Story: As a user of the mobile app for NYC transit, I want to know if there are transit issues so that I can adjust my travel plans if necessary.

    - Acceptance Criteria: Given that I’m a NYC transit rider with the mobile app installed, when I leave my apartment, I receive a notification about transit issues.

- Acceptance Criteria are usually written at the same time as the User Story, because the PM is thinking through the story itself. In some cases, other team members can assist with writing the Acceptance Criteria.  

- The number of criteria varies depending on the story: Sometimes there are many very detailed Acceptance Criteria; other times, there are only one or two.

- In some cases, Acceptance Criteria needs to address what happens to the current functionality (if this is replacing or addressing something that is currently in production). Acceptance Criteria is key because it helps with testing if the functionality meets expectations before it gets released to production.

Some product managers have trouble writing Acceptance Criteria. To help clarify the difference: If it falls into one of these categories, it’s likely an Acceptance Criteria, not a User Story:

- Usability
- Functionality
- Error Handling
- Performance

**Check: Give this Acceptance Criteria a thumbs up/thumbs down. (“Given I’m a Wall Street Journal subscriber, I receive automatic subscription renewals.”) **

<br>

## GUIDED PRACTICE: WRITING ACCEPTANCE CRITERIA 15 mins

Write at least two Acceptance Criteria for each of these user stories:

- “As a student, I want to purchase a parking pass so that I can park at school.”
- “As a user, I want the option to delete an email from my mailbox so that I don’t have too many emails in my inbox.”

> Instructor Note: After five minutes, ask for volunteers to write their Acceptance Criteria on the board for each User Story. Class to discuss whether or not the Acceptance Criteria is effective, or whether the volunteers need to adjust.

<br>

## INTRO TO NEW MATERIAL: GOOD DOCUMENTATION AND ESTIMATION 10 mins

Product managers spend a great deal of time composing e-mails, product requirements, white papers, strategy papers, data sheets, competitive product reviews, and more. Good PMs are great at writing User Stories and requirements. In most cases, this documentation is the source of direction of a product from engineering to marketing, and aims to describe, educate and, in some cases, persuade.

- Successful PMs keep documentation updated throughout the development process. Engineering will have new questions, and market conditions will change; it is the job of the PM to maintain and communicate all of these updates.

- Not every feature needs to have a specific solution identified, but the PM needs to focus on the problem so that the team can build the best solutions.

- When you maintain and share documentation (whether in the form of User Stories or requirements) you maintain transparency among the stakeholders. It is also impossible to remember all of the various conversations or decisions that were made without documenting this in the requirements.  

Quality documentation helps the team provide proper estimations. If the User Story clearly outlines what the problem is and what the Acceptance Criteria are, then the development team will have an easier time estimating how long it will take to build the solution.

- Typically, the development team will review the User Story and Acceptance Criteria and discuss. The PM is responsible for answering or getting an answer to their questions. In many cases, it takes a few rounds of back and forth in order to get the story ready for estimation. The practice of writing stories will help get them ready for development and make the estimation process easier.

- What happens when a User Story includes too many unknowns to tell just how big it is? Or what if the story’s requirements are known, but its effort is too large to complete in a single sprint?

    - A common problem among Agile teams is that User Stories are too big, which makes them hard to understand, estimate, and implement.

    - A good rule of thumb: User Stories at the top of the product backlog should be sized so that the team can complete 4-6 stories a week.

    - An example of an effort being too large is a story along the lines of, “As a consumer, I want the ability to purchase a product online so that I don’t have to go into a store to buy it.” This would be an enormous task and requires several User Stories. You’d need to break this down into many, many tasks.

Check: Take the example of a large User Story above and break it down into several smaller User Stories that might fit within a single sprint cycle.

<br>

## INDEPENDENT PRACTICE: WRITING USER STORIES FOR GMAIL 20 mins

Let’s practice writing User Stories. Get into groups of three to five; write User Stories and Acceptance Criteria for creating a new email in an email provider (like Gmail).  

> Instructor Note: You can use a screenshot from your email account. This should highlight very specific functionality. Show the screenshot to the class and have groups create very small User Stories. After 15 minutes, review as a class what they came up with.



Some examples may be:

- “As a user, I want to be able to attach files to my messages so I can send more than just text to my contacts.”

    - Some feedback for students: Attachments is a feature that would require multiple stories. Think about the options for attachments:

        - File types, Photos, Albums, Upload, Web Address

- “As a user, I want to be able to abandon a draft email without saving and have it be removed from Google’s database.”

    - Some feedback for students: Something as simple as the trash can icon needs to be designed or selected from a style guide. Do you need to prompt the user with an “Are you sure?” dialog? Do you need to confirm with a user that the message is safely discarded? Where should a user be taken after clicking the button? Inbox? New blank message? Sent messages? Trash?

<br>

## INTRO TO NEW MATERIAL: TOOLS FOR BACKLOG MANAGEMENT 5 min

There are many tools that can be used for backlog management. The traditional ones include JIRA (Atlassian) and Trello. Both of these tools are primarily used to manage the workflow for the User Stories once you’ve created them and received size estimates. You can create different swimlanes and columns for the workflow.

#### JIRA

![](./assets/jira.png)
![](./assets/jira2.png)


#### Trello

![](./assets/trello.png)
![](./assets/trello2.png)

Instructor note: If there are other examples that you suggest sharing with the class, please do so.

<br>

## INDEPENDENT PRACTICE: WRITING USER STORIES FOR YOUR PROJECT 20 mins

Begin working on User Stories for your project. Review the homework assignment for this week.

Refer back to your priority matrix and roadmap to identify the top features you chose to prioritize for your MVP. Using the template in the homework, identify each feature and create a User Story that reflects who is being affected, what the problem is, and why it needs to be solved.

<br>

## CONCLUSION 10 mins

Over the past few classes, you’ve been given the basics of Agile and how a PM works with development. All Agile processes (Scrum, Kanban) have one thing in common: User Stories. User Stories help us understand the value of a product by framing it in context of a story. As a PM, you’ll be doing a lot of story writing, and today introduced you to the process of writing these User Stories. Combined with the basics of Agile, you should be ready to work on a team of developers and designers in defining features for various products.

Today we covered:

- How to write an effective User Story and Acceptance Criteria.
- The importance of good (but brief) documentation and how development uses this documentation for estimation.
- Different types of Agile tools and methodologies, and the pros and cons of each.
- Next time we meet, we’ll talk about technology for product managers.
