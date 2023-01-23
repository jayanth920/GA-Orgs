# Delivery Notes

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

To Draw at some point:

https://git.generalassemb.ly/storage/user/3667/files/fdce788e-6baa-11e7-8d48-1409c1b4e7e1
