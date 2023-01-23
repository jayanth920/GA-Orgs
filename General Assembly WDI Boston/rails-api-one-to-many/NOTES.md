## Delivery Notes

## How to update from previous lesson's final commit

> add ga-wdi-boston upstream where latest changes are held in a branch

`git remote add upstream git@git.generalassemb.ly:ga-wdi-boston/rails-api-campus-server.git`

> should get all remote branches and commits

`git fetch upstream`

> handle uncommitted files, potentially interfering migrations files lingering around that this update will conflict with:

`git status`

> if untracked migration files...

`git checkout -b tmp`
`git add *`
`git commit`

> everyone run this next step to checkout new branch based on latest work:

`git checkout -b version1_complete <sha of latest commit. In my pvd-04/training-dk branch: 2e9103a>`

> refresh database with changes from upstream

`bin/rails db:drop db:create db:migrate # or db:schema:load should do the trick`

> double check list of migrations. Should not be duplicates. All application code from version1 should be there. bin/rails db:migrate should run without error.

### Why are we doing single resource, then one to many, then many to many?

One of the major intents of this sequence is to demonstrate HOW the developers should go about building out these resources. Starting with a simple resource with no relationships and building it out from there.

Why not just add all three models at once and tie them all together? The reason we do things one-at-a-time, is because if we move slow and methodically make adjustments we're MUCH LESS likely to make mistakes. Doing things one-at-a-time with small adjustments also keeps our application working ALL THE TIME.

### Adding a Relationship to an Existing Model

![How to add relationship steps](https://git.generalassemb.ly/storage/user/3667/files/4b98f29c-9bfd-11e7-97eb-fad0789f351a)

### Generate Migration Command Line Syntax

![Migration command syntax](https://git.generalassemb.ly/storage/user/3667/files/206407bc-478c-11e7-8dd0-7088f1f86dd1)

### Rules for Migrations:
Note: This is the first talk that covers Migration and Schema

1.  Never write in the schema.rb!  It is updated via migrations
1.  Never edit a migration file after it's been migrated (rollback first)
1.  Keep migrations as small and simple as possible
1.  Always review a migration file before migrating it
1.  Always test that a migration worked
1.  Work on 1 migration at a time using `db:migrate` and `db:rollback`

### Relationship Diagrams

![Relationship Diagrams](https://git.generalassemb.ly/storage/user/3667/files/49aaf598-9bfd-11e7-8774-06c58b218f72)

### Additional Diagrams

This has been used in `many-to-many` in the past, but it could be here. It's very helpful in illustrating the flow of a Rails API.

![Rails API Flow Diagram](https://git.generalassemb.ly/storage/user/3667/files/fdce788e-6baa-11e7-8d48-1409c1b4e7e1)
