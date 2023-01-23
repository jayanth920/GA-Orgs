# Delivery Notes

## Why are we doing single resource, then one to many, then many to many?

One of the major intents of this sequence is to demonstrate HOW the developers should go about building out these resources. Starting with a simple resource with no relationships and building it out from there.

Why not just add all three models at once and tie them all together? The reason we do things one-at-a-time, is because if we move slow and methodically make adjustments we're MUCH LESS likely to make mistakes. Doing things one-at-a-time with small adjustments also keeps our application working ALL THE TIME.

It is important to highlight our methodical build by version as well as the end goal.

Review the User Stories and ERD version goals located on the README of each API with the developers so they can see the big picture as well as our methodical steps towards it.

### Terminal Management

Managing multiple terminals efficiently is **Wicked Important**. At the beginning of this training, pick colors for developers to use for each repo they will be working on. For example, for the cookbook code along, choose a green terminal, and for the clinic lab, use white terminal. The consultant should choose a different color for the library code along. Each terminal should have two tabs
- one tab where the developers will be typing
- one tab for the rails server to run

Drawing a diagram on the board using different colored markers to represent the terminal colors is a great idea as well.

![Terminal Management Diagram](https://git.generalassemb.ly/storage/user/3667/files/e3764012-4610-11e7-9ca6-ea34eaeceae6)

[Issue #14](https://git.generalassemb.ly/ga-wdi-boston/rails-api-single-resource/issues/14) - This issue was opened as a note of the importance of terminal management throughout this sequence.

### Curl Scripts

When it is time for developers to write curl scripts, the following list is very helpful to have on the board for debugging them.

![Curl Script Debugging List](https://git.generalassemb.ly/storage/user/3667/files/bf9f8f72-4610-11e7-98ce-5357ad5cb62a)

### CRUD Actions

Keeping track of the different CRUD actions we go through is helpful for this sequence and is great for pacing the training. The following diagram could be filled out over time as each step is completed.

![CRUD table diagram](https://git.generalassemb.ly/storage/user/3667/files/f92fc3f6-4610-11e7-8824-6747106b24c7)

### Rails Permitted Params

![Permitted Params diagram](https://git.generalassemb.ly/storage/user/5747/files/2d775c2c-9e19-11e7-9874-451aad93d514)

### Additional Diagrams

This has been used in `many-to-many` in the past, but it could be here. It's very helpful in illustrating the flow of a Rails API.

![Rails API Flow Diagram](https://git.generalassemb.ly/storage/user/3667/files/fdce788e-6baa-11e7-8d48-1409c1b4e7e1)
